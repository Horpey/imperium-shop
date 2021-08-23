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
                <label>Country/Region</label>
                <input
                  placeholder="United African Republic"
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                />
              </div>
              <div class="form-group">
                <label>House number</label>
                <input
                  placeholder="43"
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                />
              </div>
              <div class="form-group">
                <label>Address</label>
                <input
                  placeholder="Enter a location"
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                />
              </div>
              <div class="form-group">
                <label>Address Line 2</label>
                <input
                  placeholder="Address Line 2"
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                />
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" name="" id="" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label>State or Region</label>
                    <input type="text" class="form-control" name="" id="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <PaymentSummary :paymentSummary="paymentSummary" />
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
    };
  },
  mounted() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.loading = true;
      let payload = {
        data: {},
        path: `cart`,
      };
      this.$store
        .dispatch("postRequest", payload)
        .then((resp) => {
          this.loading = false;
          console.log(resp.data.data);
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
