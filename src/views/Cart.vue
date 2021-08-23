<template>
  <div>
    <div class="py-5">
      <div class="container mb-4">
        <router-link class="text-dark" to="/">
          <img src="/assets/images/svgs/left-arrow.svg" class="mr-2" />
          Back to Shop
        </router-link>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <p class="paySummary">Available now</p>
            <div class="row mt-4 hide-sm">
              <div class="col-md-2"></div>
              <div class="col-md-3">
                <h6 class="cartview text-dark">Product</h6>
              </div>
              <div class="col-md-4">
                <h6 class="cartview text-dark">Description</h6>
              </div>
              <div class="col-md-2">
                <h6 class="cartview text-dark">Quantity</h6>
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
import CartItems from "@/components/CartItems.vue";
import PaymentSummary from "@/components/PaymentSummary.vue";

export default {
  computed: {
    cartStorage() {
      return this.$store.getters.cartProducts;
    },
  },
  components: { CartItems, PaymentSummary },
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

<style lang="scss">
.cartview {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
