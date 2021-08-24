<template>
  <div>
    <div class="py-5">
      <div class="container mb-4">
        <router-link class="text-dark" to="/cart">
          <img src="/assets/images/svgs/left-arrow.svg" class="mr-2" />
          Back to Cart
        </router-link>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <p class="paySummary">Checkout Information</p>
            <div class="my-5">
              <div class="form-group">
                <label>Full name</label>
                <input
                  placeholder="Enter your fullname"
                  type="text"
                  v-model="fullName"
                  class="form-control text-dark"
                  name=""
                  id=""
                />
              </div>
              <div class="form-group">
                <label>Phone number</label>
                <input
                  placeholder="Enter your phone number"
                  type="text"
                  v-model="phone_number"
                  class="form-control text-dark"
                  name=""
                  id=""
                />
              </div>
              <div class="form-group">
                <label>Address</label>
                <input
                  placeholder="Enter your Address"
                  type="text"
                  v-model="address"
                  class="form-control text-dark"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <PaymentSummary
              :paymentSummary="paymentSummary"
              :loading="loading"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PaymentSummary from "@/components/PaymentSummary.vue";

export default {
  components: { PaymentSummary },
  data() {
    return {
      loading: false,
      paymentSummary: null,
      address: "",
      user: "",
      fullName: "",
      phone_number: "",
    };
  },
  computed: {
    userData() {
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
  },
  mounted() {
    this.user = this.userData;
    this.fullName = `${this.user.customer.first_name} ${this.user.customer.last_name}`;
    this.address = `${this.user.customer.address.street}, ${this.user.customer.address.lga}, ${this.user.customer.address.state}`;
    this.phone_number = this.user.user.phone_number;
    this.getCart();
  },
  methods: {
    getCart() {
      this.loading = true;
      let payload = {
        path: `cart`,
      };
      this.$store
        .dispatch("getRequest", payload)
        .then((resp) => {
          this.loading = false;
          this.paymentSummary = resp.data.data;
        })
        .catch((err) => {
          this.paymentSummary = null;
          if (err.response) {
            this.$toast.info(
              "Checkout",
              err.response.data.message,
              this.$toastPosition
            );
          } else {
            this.$toast.info(
              "Checkout",
              "Unable to get payment summary, please try again",
              this.$toastPosition
            );
          }
          this.loading = false;
        });
    },
  },
};
</script>
