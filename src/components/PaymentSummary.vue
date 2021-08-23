<template>
  <div>
    <p class="paySummary">Payment Summary</p>
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
      <button class="btn btn-checkout mb-3">Outright payment</button>
      <button class="btn btn-checkout mt-0">Least to Own</button>
    </div>
  </div>
</template>
<script>
import BtnLoading from "@/components/BtnLoading.vue";

export default {
  props: ["paymentSummary"],
  data() {
    return {
      cartSending: false,
    };
  },
  components: { BtnLoading },
  computed: {
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
  },
  mounted() {},
  methods: {
    redirectCheckout() {
      if (this.loggedIn) {
        this.cartSending = true;

        let products = [];

        for (const product of this.cartStorage) {
          let nProduct = product.product;
          nProduct.quantity = parseInt(product.quantity);
          nProduct.product_id = product.product.id;
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
