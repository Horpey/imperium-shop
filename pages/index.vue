<template>
  <div>
    <MainHeader />
    <Calculator />
    <Categories />
    <HotDeals :hotDeals="products.solarPanel" />
    <PayWithSpecta />
    <CategoryProducts category="solar panel" :products="products.solarPanel" />
    <CategoryProducts category="inverter" :products="products.inverter" />
    <MakeRequest />
    <CategoryProducts category="batteries" :products="products.battery" />
    <CategoryProducts
      category="complete solution"
      :products="products.bundle"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      products: {
        solarPanel: [],
        inverter: [],
        battery: [],
        bundle: [],
      },
      hotDeals: [
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
  mounted() {
    this.getProductsbyCategory("solar panel");
    this.getProductsbyCategory("inverter");
    this.getProductsbyCategory("battery");
    this.getProductsbyCategory("bundle");
  },
  methods: {
    getProductsbyCategory(category) {
      this.loading = true;
      let payload = {
        path: `product?category=${category}&per_page=4`,
      };
      this.$store
        .dispatch("getRequest", payload)
        .then((resp) => {
          this.loading = false;
          switch (category) {
            case "solar panel":
              this.products.solarPanel = resp.data.data.result;
              break;
            case "inverter":
              this.products.inverter = resp.data.data.result;
              break;
            case "battery":
              this.products.battery = resp.data.data.result;
              break;
            case "bundle":
              this.products.bundle = resp.data.data.result;
              break;
            default:
          }
        })
        .catch((err) => {
          this.loading = false;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
