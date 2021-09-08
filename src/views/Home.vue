<template>
  <div>
    <MainHeader />
    <Calculator />
    <Categories />
    <HotDeals :hotDeals="products.solarPanel" />
    <PayWithSpecta />
    <CategoryProducts
      :loading="loading"
      category="solar panel"
      :products="products.solarPanel"
    />
    <CategoryProducts
      :loading="loading"
      category="inverter"
      :products="products.inverter"
    />
    <MakeRequest />
    <CategoryProducts
      :loading="loading"
      category="battery"
      :products="products.battery"
    />
    <CategoryProducts
      :loading="loading"
      category="complete solution"
      :products="products.bundle"
    />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import Calculator from "@/components/Calculator.vue";
import Categories from "@/components/Categories.vue";
import HotDeals from "@/components/HotDeals.vue";
import PayWithSpecta from "@/components/PayWithSpecta.vue";
import MakeRequest from "@/components/MakeRequest.vue";
import CategoryProducts from "@/components/CategoryProducts.vue";

export default {
  data() {
    return {
      loading: true,
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
  components: {
    MainHeader,
    Calculator,
    Categories,
    HotDeals,
    PayWithSpecta,
    MakeRequest,
    CategoryProducts,
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
          if (err.response) {
            this.$toast.info(
              "Product Items",
              err.response.data.message,
              this.$toastPosition
            );
          } else {
            this.$toast.info(
              "Product Items",
              "Unable to load products",
              this.$toastPosition
            );
          }
          this.loading = false;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
