<template>
  <div class="section bg-lightt py-3">
    <div class="container">
      <div
        class="sect-direct"
        :style="{ 'margin-top': category == 'battery' ? '60px' : '0px' }"
      >
        <div class="row">
          <div class="col-6">
            <h3 class="sect-heading">
              <span v-if="category == 'bundle'"> Complete Solution </span>
              <span v-else>
                {{ category }}
              </span>
            </h3>
          </div>
          <div class="col-6">
            <div class="text-right">
              <router-link
                class="sect-link"
                :to="`/categories?type=${category}`"
              >
                <span> View all</span>
              </router-link>
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
import Loading from "@/components/Loading.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { Loading, ProductCard },
  props: ["category", "products", "loading"],
};
</script>
<style lang="scss" scoped>
.sect-heading {
  text-transform: capitalize;
}
</style>
