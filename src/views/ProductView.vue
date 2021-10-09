<template>
  <div>
    <ProducttoCart :loading="loading" :product="product" />
    <ProductDescription :product="product" />
    <div v-if="similarProducts">
      <!-- <MoreProducts
        :loading="loading"
        title="SIMILAR ITEMS YOU MAY LIKE"
        :data="similarProducts"
      /> -->
    </div>
    <!-- <MoreProducts
      :loading="loading"
      title="RECENTLY VIEWED ITEMS"
      :data="similarProducts"
    /> -->
  </div>
</template>
<script>
import ProducttoCart from "@/components/ProducttoCart.vue";
import ProductDescription from "@/components/ProductDescription.vue";

export default {
  data() {
    return {
      loading: false,
      product: {},
      similarProducts: [],
    };
  },
  components: { ProducttoCart, ProductDescription },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    category() {
      return this.$route.query.category;
    },
  },
  watch: {
    "$route.params.slug": function () {
      this.initiateSearches();
    },
  },
  mounted() {
    this.initiateSearches();
  },
  methods: {
    initiateSearches() {
      this.getProductDetails();
      this.getProductsbyCategory();
    },
    getProductsbyCategory() {
      this.loading = true;
      let payload = {
        path: `product?category=${this.category}&per_page=4`,
      };
      this.$store
        .dispatch("getRequest", payload)
        .then((resp) => {
          this.loading = false;
          this.similarProducts = resp.data.data.result;
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    getProductDetails() {
      let payload = {
        path: `product/${this.slug}`,
      };
      this.$store
        .dispatch("getRequest", payload)
        .then((resp) => {
          this.loading = false;
          this.product = resp.data.data;
        })
        .catch((err) => {
          this.loading = false;
        });
    },
  },
};
</script>
