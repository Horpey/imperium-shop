<template>
  <div style="background: #f4f8ed; padding: 70px 0px">
    <div class="container">
      <div class="bready">
        <a-breadcrumb separator=">">
          <a-breadcrumb-item>Shop</a-breadcrumb-item>
          <a-breadcrumb-item href=""> Category </a-breadcrumb-item>
          <a-breadcrumb-item href=""> Inverter </a-breadcrumb-item>
          <a-breadcrumb-item>String Inverter</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div class="row align-items-center justify-content-center">
        <div class="col-md-5">
          <div class="text-center-sm">
            <img
              class="img-fluid productImageView"
              :src="product.display_image"
              alt=""
            />
          </div>
        </div>
        <div class="col-md-5">
          <div class="text-left">
            <h1 class="categoryHeadd f-bold mb-3 productHeadd">
              {{ product.name }}
            </h1>
            <p class="mb-0 text-dark">
              {{ product.description }}
            </p>
            <h4 class="mt-3 text-dark f-semibold"></h4>
            <form>
              <div class="row">
                <div class="col-6 col-md-4">
                  <p class="text-dark">Monthly Payment</p>
                </div>
                <div class="col-6 col-md-8">
                  <p class="f-semibold text-dark">₦ 61,481</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-4">
                  <p class="text-dark">Duration</p>
                </div>
                <div class="col-6 col-md-8">
                  <p class="f-semibold text-dark">2 Years</p>
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-4">
                  <p class="text-dark">Quantity</p>
                </div>
                <div class="col-6 col-md-8">
                  <a-input-number
                    class="quantityInput"
                    id="inputNumber"
                    v-model="quantity"
                    :min="1"
                    @change="onChange"
                  />
                </div>
              </div>
              <button
                class="
                  mt-4
                  btn btn-imp-secondary
                  bg-dark
                  btn-icon
                  text-white
                  py-3
                  px-5
                "
              >
                Add to Cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    onChange(value) {
      console.log("changed", value);
    },
  },
};
</script>
<style lang="scss" scoped>
.productHeadd {
  text-transform: capitalize;
}
.productImageview {
  width: 80%;
  position: relative;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: contain;
  object-fit: contain;
}
</style>
