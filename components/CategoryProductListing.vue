<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-3">
        <FilterProducts />
      </div>
      <div class="col-md-9">
        <Loading v-if="loading" />
        <div v-else>
          <div class="row">
            <div
              class="col-md-4"
              v-for="(product, index) in products"
              :key="index"
            >
              <ProductCard :data="product" />
            </div>
          </div>
          <div class="mt-4 text-center">
            <a-pagination
              v-model="pageCount"
              :total="500"
              :item-render="itemRender"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
