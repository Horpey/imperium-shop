<template>
  <div class="text-center categ-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-3">
          <img class="cat-img" :src="categoryImage" alt="" />
        </div>
        <div class="col-md-6">
          <h1 class="categoryHeadd f-bold text-capitalize">
            {{ categoryData }}
          </h1>
          <p class="mb-0 text-dark">
            Gain access to over 14,570,000
            <span class="text-capitalize">{{ categoryData }} </span>
          </p>
          <p class="mb-0 text-dark">Shop your choice of product!</p>
          <div class="category-select">
            <span>Category</span>
            <select
              @change="selectChange()"
              v-model="categorySelect"
              class="form-control"
              name=""
              id=""
            >
              <option value="">All products</option>
              <option value="solar panel">Solar Panel</option>
              <option value="inverter">Inverter Solutions</option>
              <option value="battery">Battery</option>
              <option value="bundle">Complete Solution</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["category"],
  data() {
    return {
      categorySelect: "",
    };
  },
  computed: {
    categoryData() {
      switch (this.category) {
        case "bundle":
          return "Complete Solution";
          break;
        case "all":
          return "All Products";
          break;
        case "":
          return "All Products";
          break;
        default:
          return this.category;
          break;
      }
    },
    categoryImage() {
      switch (this.category) {
        case "solar panel":
          return "/assets/images/solar.png";
          break;
        case "inverter":
          return "/assets/images/inverterb.png";
          break;
        case "battery":
          return "/assets/images/batterycateg.png";
          break;
        case "bundle":
          return "/assets/images/complete.png";
          break;
        default:
          return "/assets/images/solar.png";
          break;
      }
    },
  },
  mounted() {
    this.categorySelect = this.category;
    if (this.category == "all") {
      this.categorySelect = "";
    }
    if(this.$route.query.type){
      this.categorySelect = this.$route.query.type;
      this.selectChange()
    }else{
      this.categorySelect =""
    }
  },
  methods: {
    selectChange() {
      this.$store.commit("categorySelect", this.categorySelect);
    },
  },
};
</script>
<style lang="scss" scoped>
.cat-img {
  height: 300px;
}
</style>
