<template>
  <div>
    <p class="paySummary">Payment Summary</p>

    <Loading class="pb-5" v-if="loading" />

    <div v-else>
      <p
        v-if="loggedIn && route == 'checkout' && paymentSummary"
        class="p-checkout"
      >
        Item Quantity
        <span>{{ paymentSummary ? paymentSummary.total_quantity : "" }}</span>
      </p>
      <p class="p-checkout">
        Order Sub total
        <span>{{
          paymentSummary
            ? $helpers.formatPrice(paymentSummary.sub_total)
            : $helpers.formatPrice(subTotal)
        }}</span>
      </p>
      <p
        v-if="loggedIn && route == 'checkout' && paymentSummary"
        class="p-checkout"
      >
        Shipping Rate
        <span>{{ $helpers.formatPrice(paymentSummary.delivery_cost) }}</span>
      </p>
      <div class="div-demarc">
        <div v-if="loggedIn && route == 'checkout' && paymentSummary">
          <p class="p-checkout">
            Total
            <span>{{ $helpers.formatPrice(paymentSummary.total_price) }}</span>
          </p>
        </div>
        <p v-if="route == 'cart'" class="text-dark">
          Delivery and taxes are calculated at checkout
        </p>
      </div>
      <button
        @click="redirectCheckout"
        v-if="route == 'cart'"
        :disabled="cartSending"
        class="btn btn-checkout"
      >
        Proceed to checkout
        <BtnLoading v-if="cartSending" class="btn-loading" />
      </button>
      <div v-else>
        <button class="btn btn-checkout mb-3" @click="placeOrder()">
          Outright payment
        </button>

        <button
          :disabled="spectaPaying"
          @click="payWithSpecta()"
          class="btn btn-checkout mt-0"
        >
          Lease to Own <BtnLoading v-if="spectaPaying" class="btn-loading" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import BtnLoading from "@/components/BtnLoading.vue";
import Loading from "@/components/Loading.vue";

import paystack from "vue-paystack";

export default {
  props: ["paymentSummary", "loading", "cartId"],
  data() {
    return {
      cartSending: false,
      spectaPaying: false,
      orderData: {},
    };
  },
  components: { BtnLoading, Loading, paystack },
  computed: {
    payAmount() {
      return Math.ceil(
        (this.paymentSummary ? this.paymentSummary.total_price : 0) * 100
      );
    },
    getID() {
      return this.paymentSummary ? this.paymentSummary.cart.id : null;
    },
    paystackkey() {
      return this.$store.getters.paystackkey; //paystack public key
    },
    route() {
      return this.$route.name.toLowerCase();
    },
    loggedIn() {
      if (localStorage.getItem("user")) {
        let user = this.CryptoJS.AES.decrypt(
          localStorage.getItem("user"),
          this.$passPhrase
        ).toString(this.CryptoJS.enc.Utf8);
        return JSON.parse(user);
      } else {
        return false;
      }
    },
    subTotal() {
      let sTotal = 0;
      for (const product of this.cartStorage) {
        let tPrice = product.quantity * product.product.price;
        sTotal += tPrice;
      }
      return sTotal;
    },
    cartStorage() {
      return this.$store.getters.cartProducts;
    },
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
    userData() {
      if (localStorage.getItem("user")) {
        let user = this.CryptoJS.AES.decrypt(
          localStorage.getItem("user"),
          this.$passPhrase
        ).toString(this.CryptoJS.enc.Utf8);
        return JSON.parse(user);
      } else {
        return {};
      }
    },
  },
  mounted() {
    this.getCartCheckout();
  },

  methods: {
    getCartCheckout() {
      let data = {}
      // console.log(this.userData.user.phone_number)
      // if(this.userData.user){
      //   data = {
      //     contact_phone: this.userData.user.phone_number,
      //     shipping_address: {
      //       lga: this.userData.customer.address.lga,
      //       state: this.userData.customer.address.state,
      //       street: this.userData.customer.address.street
      //     }
      //   };
      // }
      let payload = {
        data,
        path: "order/checkout",
      };
      this.$store
        .dispatch("postRequest", payload)
        .then((resp) => {
          this.orderData = resp.data.data;
          if (this.route == "cart") {
            this.clearInitialCart(this.orderData.order.id);
          }
        })
        .catch((err) => {});
    },
    clearInitialCart(id) {
      let payload = {
        path: `/order/${id}`,
      };
      this.$store
        .dispatch("delRequest", payload)
        .then((resp) => {})
        .catch((err) => {});
    },
    placeOrder() {
      const handler = PaystackPop.setup({
        key: this.paystackkey,
        email: this.loggedIn.user.email,
        amount: this.payAmount,
        currency: "NGN",
        metadata: {
          custom_fields: {
            order_id: this.orderData.order.id,
          },
        },
        callback: () => {
          this.$toast.info(
            "Payment Successful",
            "Your order is being processed",
            this.$toastPosition
          );
          this.$store.commit("updateCart", []);
          this.$store.commit("paymentSent", true);
        },
        close: () => {
          this.$toast.info(
            "Payment",
            "Payment process closed",
            this.$toastPosition
          );
        },
      });
      handler.openIframe();
    },
    payWithSpecta() {
      // this.paymentSummary.total_price < 20000
      if (this.paymentSummary.total_price < 20000) {
        this.$toast.info(
          "Specta",
          "Total amount must be ₦20,000 and above to access our loan service.",
          this.$toastPosition
        );
      } else {
        const items = this.paymentSummary.cart.items.map((item) => {
          return item.product.name;
        });

        const data = {
          reference: `${this.reference}${this.paymentSummary.cart.id}`,
          description: `Payment for ${items}`,
          amount: Math.ceil(this.paymentSummary.total_price),
        };
        let payload = {
          data,
          path: `lease/createPayment`,
        };
        this.spectaPaying = true;

        this.$store
          .dispatch("postRequest", payload)
          .then((resp) => {
            this.spectaPaying = false;
            if (resp.data.data) {
              window.location = resp.data.data;
            }
          })
          .catch((err) => {
            this.spectaPaying = false;
            if (err.response) {
              this.$toast.info(
                "Specta",
                err.response.data.message,
                this.$toastPosition
              );
            } else {
              this.$toast.info(
                "Specta",
                "Loan payment is down, please contact support.",
                this.$toastPosition
              );
            }
          });
      }
    },
    redirectCheckout() {
      if (this.loggedIn) {
        this.cartSending = true;

        let products = [];
        for (const product of this.cartStorage) {
          let nProduct = product.product;
          nProduct.quantity = parseInt(product.quantity);
          nProduct.product_id = product.product.id;
          delete nProduct.id;
          delete nProduct.__v;

          products.push(nProduct);
        }

        let data = {
          products,
        };

        let payload = {
          data,
          path: "/cart",
        };
        this.$store
          .dispatch("postRequest", payload)
          .then((resp) => {
            this.cartSending = false;
            this.$router.push("/checkout");
          })
          .catch((err) => {
            if (err.response) {
              this.$toast.info(
                "Cart",
                err.response.data.message,
                this.$toastPosition
              );
            } else {
              this.$toast.info(
                "Cart",
                "Unable to send product items, please try again",
                this.$toastPosition
              );
            }
            this.cartSending = false;
          });
      } else {
        this.$router.push("/login?cart=true");
      }
    },
  },
};
</script>
