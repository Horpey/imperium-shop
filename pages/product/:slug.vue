<template>
  <div>
    <ProducttoCart :product="product" />
    <ProductDescription :product="product" />
    <MoreProducts title="SIMILAR ITEMS YOU MAY LIKE" :data="similarProducts" />
    <MoreProducts title="RECENTLY VIEWED ITEMS" :data="similarProducts" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      product: {},
      similarProducts: [],
      products: [
        {
          name: "2KVA Inverter",
          description: "Pure sine wave inverter, ups, avr (stabilizer)",
          price: "₦ 162,563",
        },
        {
          name: "5KVA",
          description: "5kva inverter",
          price: "₦ 160,000",
        },
        {
          name: "2KVA Inverter",
          description: "Pure sine wave inverter, ups, avr (stabilizer)",
          price: "₦ 162,563",
        },
        {
          name: "5KVA",
          description: "5kva inverter",
          price: "₦ 160,000",
        },
        {
          name: "2KVA Inverter",
          description: "Pure sine wave inverter, ups, avr (stabilizer)",
          price: "₦ 162,563",
        },
        {
          name: "5KVA",
          description: "5kva inverter",
          price: "₦ 160,000",
        },
      ],
    };
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    category() {
      return this.$route.query.category;
    },
  },
  mounted() {
    this.getProductDetails();
    this.getProductsbyCategory();
  },
  methods: {
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
          console.log(resp.data.data);
          this.product = resp.data.data;
        })
        .catch((err) => {
          this.loading = false;
        });
    },
  },
};
</script>
