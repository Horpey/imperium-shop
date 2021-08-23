<template>
  <div class="cart-items text-center-sm">
    <div class="row mt-4">
      <div class="col-md-3">
        <img
          :src="product.product.display_image"
          class="img-fluid cart-itemimage"
          alt=""
        />
      </div>
      <div class="col-md-3">
        <p class="text-dark text-capitalize">
          {{ product.product.name }}
        </p>
        <h5 class="f-semibold text-dark">
          {{ $helperService.formatPrice(product.product.price) }}
        </h5>
        <span class="remove-btn" @click="removeItem()">Remove Item</span>
      </div>
      <div class="col-md-4">
        <p class="f-semibold text-dark">₦ 61, 481 (2 years)</p>
      </div>
      <div class="col-md-2">
        <input
          min="1"
          :max="
            product.product.stock ? product.product.stock.quantity_available : 5
          "
          :value="product.quantity"
          style="width: 100px; font-weight: bold; color: black; font-size: 14px"
          type="number"
          class="quantityInput form-control form-control-sm"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  computed: {
    cartProducts() {
      let storage = this.$auth.$storage.getLocalStorage("cart");
      return storage ? storage : [];
    },
  },
  methods: {
    removeItem() {
      let createCart = this.cartProducts;
      let productIndex = createCart.findIndex(
        (obj) => obj.product.id == this.product.product.id
      );
      console.log(productIndex);
      if (productIndex > -1) {
        createCart.splice(productIndex, 1);
        this.$store.dispatch("addProductToCart", createCart);
      }
      this.$toast.success({
        title: "",
        message: "Item removed from Cart",
        position: "topCenter",
      });
      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
    },
  },
};
</script>
<style lang="scss" scoped>
.cart-itemimage {
  height: 136px;
}
.remove-btn {
  cursor: pointer;
}
</style>
