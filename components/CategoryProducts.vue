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
              <nuxt-link class="sect-link" :to="`/categories/${category}`">
                <span> View all</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <Loading v-if="loading" />
      <div class="my-5" v-else>
        <div class="row">
          <div
            class="col-md-3"
            v-for="(product, index) in products"
            v-if="index < 4"
            :key="index"
          >
            <ProductCard :data="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["category", "products", "loading"],
};
</script>
<style lang="scss" scoped>
.sect-heading {
  text-transform: uppercase;
}
</style>
