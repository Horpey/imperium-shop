<template>
  <div class="container mt-5">
    <div class="row">
      <!-- <div class="col-md-3">
        <FilterProducts />
      </div> -->
      <div class="col-md-12">
        <Loading class="pb-5" v-if="loading" />
        <div v-else>
          <div class="row">
            <div
              class="col-md-3"
              v-for="(product, index) in products"
              :key="index"
            >
              <ProductCard :data="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FilterProducts from "@/components/FilterProducts.vue";
import Loading from "@/components/Loading.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { FilterProducts, Loading, ProductCard },
  props: ["products", "pageCount", "loading"],
  methods: {
    itemRender(current, type, originalElement) {
      if (type === "prev") {
        return <a>Previous</a>;
      } else if (type === "next") {
        return <a>Next</a>;
      }
      return originalElement;
    },
  },
};
</script>
