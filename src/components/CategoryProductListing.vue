<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-3">
        <div class="collapsible">
          <input type="checkbox" id="label-1" checked="true" />
          <label for="label-1">Sort by</label>
          <i class="material-icons md-18">
            <img src="/assets/images/svgs/arrow-collapse.svg" alt="" />
          </i>
          <div class="collapsible__content">
            <div class="filterRadio">
              <input type="radio" name="available" id="available" />
              <label for="available"
                >Available now
                <span class="float-right">223</span>
              </label>
            </div>
            <div class="filterRadio">
              <input type="radio" name="instock" id="instock" />
              <label for="instock"
                >In stock only
                <span class="float-right">223</span>
              </label>
            </div>
            <div class="filterRadio">
              <input type="radio" name="newin" id="newin" />
              <label for="newin"
                >New in
                <span class="float-right">223</span>
              </label>
            </div>
            <div class="filterRadio">
              <input type="radio" name="trend" id="trend" />
              <label for="trend"
                >Trending
                <span class="float-right">223</span>
              </label>
            </div>
          </div>
        </div>

        <div class="collapsible">
          <input type="checkbox" id="label-2" />
          <label for="label-2">Filter by price</label>
          <i class="material-icons md-18">
            <img src="/assets/images/svgs/arrow-collapse.svg" alt="" />
          </i>
          <div class="collapsible__content">
            <div class="filterRadio">
              <input type="radio" name="available" id="available" />
              <label for="available"
                >Available now
                <span class="float-right">223</span>
              </label>
            </div>
            <div class="filterRadio">
              <input type="radio" name="instock" id="instock" />
              <label for="instock"
                >In stock only
                <span class="float-right">223</span>
              </label>
            </div>
            <div class="filterRadio">
              <input type="radio" name="newin" id="newin" />
              <label for="newin"
                >New in
                <span class="float-right">223</span>
              </label>
            </div>
            <div class="filterRadio">
              <input type="radio" name="trend" id="trend" />
              <label for="trend"
                >Trending
                <span class="float-right">223</span>
              </label>
            </div>
          </div>
        </div>

        <button class="btn btn-sm text-capitalize filterbtn ml-3 mt-4">
          Filter
        </button>

        <!-- <div>
          <p>Sort By</p>
        </div>
        <div>
          <p>Filter by price</p>
        </div> -->
      </div>
      <div class="col-md-9">
        <Loading class="pb-5" v-if="loading" />
        <div class="row" v-else>
          <div
            class="col-md-4"
            v-for="(product, index) in products"
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
<style lang="scss">
.material-icons {
  transform: rotate(-90deg);
  transition: all 0.5s ease-in-out;
}
.collapsible {
  cursor: pointer;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 20px;

  & input[type="checkbox"] {
    display: none;
    &:checked ~ .collapsible__content {
      height: auto;
      opacity: 1;
    }
    &:checked ~ .material-icons {
      transform: rotate(0deg);
    }
  }

  & label {
    cursor: pointer;
    display: block;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #121113;
    flex: 1;
  }

  &__content {
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }
}
.filterRadio {
  display: flex;
  align-items: center;
  margin: 19px 0px;
  label {
    display: inline-block;
    font-weight: 600;
    font-size: 13.4645px;
    margin-left: 10px;
    color: #353535;
    margin-bottom: 0px;
  }
}
</style>
