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
          <input type="checkbox" id="label-2" checked="true" />
          <label for="label-2">Filter by price</label>
          <i class="material-icons md-18">
            <img src="/assets/images/svgs/arrow-collapse.svg" alt="" />
          </i>
          <div class="collapsible__content">
            <div class="middle my-3">
              <div class="multi-range-slider">
                <input
                  type="range"
                  id="input-left"
                  min="0"
                  max="100"
                  value="25"
                />
                <input
                  type="range"
                  id="input-right"
                  min="0"
                  max="100"
                  value="75"
                />
                <div class="slider">
                  <div class="track"></div>
                  <div class="range"></div>
                  <div class="thumb left"></div>
                  <div class="thumb right"></div>
                </div>
              </div>
            </div>
            <div class="priceRange">
              <span class="text-small">₦ 100,000</span>
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
  mounted() {
    this.setSlideJS();
  },
  data() {
    return {
      minAmt: "",
      maxAmt: "",
    };
  },
  methods: {
    setSlideJS() {
      var inputLeft = document.getElementById("input-left");
      var inputRight = document.getElementById("input-right");

      var thumbLeft = document.querySelector(".slider > .thumb.left");
      var thumbRight = document.querySelector(".slider > .thumb.right");
      var range = document.querySelector(".slider > .range");

      function setLeftValue() {
        var _this = inputLeft,
          min = parseInt(_this.min),
          max = parseInt(_this.max);

        _this.value = Math.min(
          parseInt(_this.value),
          parseInt(inputRight.value) - 1
        );

        var percent = ((_this.value - min) / (max - min)) * 100;

        thumbLeft.style.left = percent + "%";
        range.style.left = percent + "%";
      }
      setLeftValue();

      function setRightValue() {
        var _this = inputRight,
          min = parseInt(_this.min),
          max = parseInt(_this.max);

        _this.value = Math.max(
          parseInt(_this.value),
          parseInt(inputLeft.value) + 1
        );

        var percent = ((_this.value - min) / (max - min)) * 100;

        thumbRight.style.right = 100 - percent + "%";
        range.style.right = 100 - percent + "%";
      }
      setRightValue();

      inputLeft.addEventListener("input", setLeftValue);
      inputRight.addEventListener("input", setRightValue);

      inputLeft.addEventListener("mouseover", function () {
        thumbLeft.classList.add("hover");
      });
      inputLeft.addEventListener("mouseout", function () {
        thumbLeft.classList.remove("hover");
      });
      inputLeft.addEventListener("mousedown", function () {
        thumbLeft.classList.add("active");
      });
      inputLeft.addEventListener("mouseup", function () {
        thumbLeft.classList.remove("active");
      });

      inputRight.addEventListener("mouseover", function () {
        thumbRight.classList.add("hover");
      });
      inputRight.addEventListener("mouseout", function () {
        thumbRight.classList.remove("hover");
      });
      inputRight.addEventListener("mousedown", function () {
        thumbRight.classList.add("active");
      });
      inputRight.addEventListener("mouseup", function () {
        thumbRight.classList.remove("active");
      });
    },
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

.middle {
  position: relative;
  width: 100%;
  max-width: 100%;
}

.slider {
  position: relative;
  z-index: 1;
  height: 4px;
}
.slider > .track {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #cecece;
}
.slider > .range {
  position: absolute;
  z-index: 2;
  left: 25%;
  right: 25%;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #255e13;
}
.slider > .thumb {
  position: absolute;
  z-index: 3;
  width: 18px;
  height: 18px;
  background-color: #255e13;
  border-radius: 50%;
  box-shadow: 0 0 0 0 #255e1342;
  transition: box-shadow 0.3s ease-in-out;
  top: 3px;
}
.slider > .thumb.left {
  left: 25%;
  transform: translate(-15px, -10px);
}
.slider > .thumb.right {
  right: 25%;
  transform: translate(15px, -10px);
}
.slider > .thumb.hover {
  box-shadow: 0 0 0 5px #255e1342;
}
.slider > .thumb.active {
  box-shadow: 0 0 0 10px #255e132f;
}

input[type="range"] {
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 2;
  height: 10px;
  width: 100%;
  opacity: 0;
}
input[type="range"]::-webkit-slider-thumb {
  pointer-events: all;
  width: 30px;
  height: 30px;
  border-radius: 0;
  border: 0 none;
  background-color: red;
  -webkit-appearance: none;
}
.priceRange {
  span {
    color: black;
    font-size: 12px;
  }
}
</style>
