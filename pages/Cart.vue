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
            <CartItems v-for="(item, index) in 5" :key="index" />
          </div>
          <div class="col-md-4">
            <PaymentSummary />
          </div>
        </div>
      </div>
    </div>
    <PayWithSpecta />
  </div>
</template>
