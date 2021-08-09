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
    <nuxt-link to="/" class="btn btn-checkout">Checkout</nuxt-link>
  </div>
</template>
