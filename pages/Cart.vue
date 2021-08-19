<template>
  <div>
    <div class="py-5">
      <div class="container mb-4">
        <nuxt-link class="text-dark" to="/">
          <img src="/images/svgs/left-arrow.svg" class="mr-2" />
          Back to Shop
        </nuxt-link>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <p class="paySummary">Available now</p>
            <div class="row mt-4 hide-sm">
              <div class="col-md-3"></div>
              <div class="col-md-3">
                <h6 class="text-dark">Product</h6>
              </div>
              <div class="col-md-4">
                <h6 class="text-dark">Monthly Payment</h6>
              </div>
              <div class="col-md-2">
                <h6 class="text-dark">Quantity</h6>
              </div>
            </div>
            <div v-for="(product, index) in cardItem" :key="index">
              <CartItems :product="product" />
            </div>
          </div>
          <div class="col-md-4">
            <PaymentSummary />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    cartStorage() {
      return this.$auth.$storage.getLocalStorage("cart");
    },
  },
  data() {
    return {
      cardItem: [],
    };
  },
  mounted() {
    this.cardItem = this.cartStorage;
  },
};
</script>
