<template>
  <div>
    <p class="paySummary">Payment Summary</p>
    <p class="p-checkout">
      Order Sub total
      <span>{{ subTotal }}</span>
    </p>
    <p v-if="loggedIn" class="p-checkout">
      Shipping Rate
      <span>$204.00</span>
    </p>
    <div class="div-demarc">
      <div v-if="loggedIn">
        <p class="p-checkout">
          Order Today
          <span>$799.77</span>
        </p>
        <p class="p-checkout">
          Estimated Pay
          <span>$799.77</span>
        </p>
      </div>
      <p class="text-dark">Delivery and taxes are calculated at checkout</p>
    </div>
    <router-link to="/checkout" v-if="route == 'cart'" class="btn btn-checkout"
      >Proceed to checkout</router-link
    >
    <div v-else>
      <button class="btn btn-checkout mb-3">Outright payment</button>
      <button class="btn btn-checkout mt-0">Least to Own</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // subTotal: 0,
    };
  },
  computed: {
    route() {
      return this.$route.name.toLowerCase();
    },
    loggedIn() {
      return false;
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
      let localStore = this.$auth.$storage.getLocalStorage("cart");
      return localStore ? localStore : [];
    },
  },
  mounted() {},
};
</script>
