<template>
  <div class="section">
    <div class="container">
      <div class="sect-direct">
        <div class="row">
          <div class="col-6">
            <h3 class="sect-heading">{{ category }}</h3>
          </div>
          <div class="col-6">
            <div class="text-right">
              <nuxt-link class="sect-link" to="/">
                <span> View all</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="my-5">
        <div class="row">
          <div
            class="col-md-3"
            v-for="(deal, index) in hotDeals"
            v-if="index < 4"
            :key="index"
          >
            <ProductCard :data="deal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["category", "hotDeals"],
};
</script>
