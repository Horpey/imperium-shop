<template>
  <div>
    <p class="paySummary">Payment Summary</p>
    <p class="p-checkout">
      Order Sub total
      <span>$499.00</span>
    </p>
    <p class="p-checkout">
      Shipping Rate
      <span>$204.00</span>
    </p>
    <div class="div-demarc">
      <p class="p-checkout">
        Order Today
        <span>$799.77</span>
      </p>
      <p class="p-checkout">
        Estimated Pay
        <span>$799.77</span>
      </p>
    </div>
    <nuxt-link to="/checkout" v-if="route == 'cart'" class="btn btn-checkout"
      >Proceed to checkout</nuxt-link
    >
    <button v-else class="btn btn-checkout">Checkout</button>
  </div>
</template>
<script>
export default {
  computed: {
    route() {
      return this.$route.name.toLowerCase();
    },
  },
};
</script>
