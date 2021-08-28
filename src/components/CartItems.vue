<template>
  <div class="cart-items text-center-sm">
    <div class="row mt-4">
      <div class="col-md-2">
        <img
          :src="product.product.display_image"
          class="img-fluid cart-itemimage mb-0"
          alt=""
        />
      </div>
      <div class="col-md-3">
        <p class="text-dark text-capitalize">
          {{ product.product.name }}
        </p>
        <h5 class="f-semibold text-dark">
          {{ $helpers.formatPrice(product.product.price) }}
        </h5>
        <span class="remove-btn" @click="removeItem(product)">Remove Item</span>
      </div>
      <div class="col-md-4">
        <p class="text-dark f-14">{{ product.product.description }}</p>
      </div>
      <div class="col-md-2">
        <input
          min="1"
          :max="
            product.product.stock ? product.product.stock.quantity_available : 5
          "
          @change="quantityChange($event, product)"
          :value="product.quantity"
          style="width: 100px; font-weight: bold; color: black; font-size: 14px"
          type="number"
          class="quantityInput form-control form-control-sm margin-auto-sm"
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
      return this.$store.getters.cartProducts;
    },
  },
  methods: {
    quantityChange($event, product) {
      let createCart = this.cartProducts;
      let productIndex = createCart.findIndex(
        (obj) => obj.product.id == product.product.id
      );

      let productCart = {
        product: product.product,
        quantity: $event.target.value,
      };

      if (productIndex >= 0) {
        createCart[productIndex] = productCart;
      }
      this.$store.commit("updateCart", createCart);
    },
    removeItem(productCart) {
      let createCart = this.cartProducts;
      let productIndex = createCart.findIndex(
        (obj) => obj.product.id == productCart.product.id
      );

      if (productIndex > -1) {
        createCart.splice(productIndex, 1);
        this.$store.commit("updateCart", createCart);
      }
      this.$toast.info("Cart", "Item removed from cart", this.$toastPosition);
    },
  },
};
</script>
<style lang="scss" scoped>
.cart-itemimage {
  height: auto;
}
.remove-btn {
  cursor: pointer;
}
</style>
