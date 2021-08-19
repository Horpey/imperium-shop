<template>
  <div>
    <CategoryHeading :category="category" />
    <Breadcrumb :category="category" :meta="meta" />
    <CategoryProductListing
      :loading="loading"
      :pageCount="2"
      :products="products"
    />
    <MoreProducts title="RECOMMENDED FOR YOU" :data="[]" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      products: [],
      meta: {},
    };
  },
  computed: {
    category() {
      return this.$route.params.slug;
    },
  },
  mounted() {
    console.log(this.$store.getters.cartProducts);
    this.getProductsbyCategory();
  },
  methods: {
    getProductsbyCategory() {
      this.loading = true;
      let payload = {
        path: `product?category=${this.category}&per_page=2`,
      };
      this.$store
        .dispatch("getRequest", payload)
        .then((resp) => {
          this.loading = false;
          this.products = resp.data.data.result;
          this.meta = resp.data.data;
        })
        .catch((err) => {
          this.loading = false;
        });
    },
  },
};
</script>
