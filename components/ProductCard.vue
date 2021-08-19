<template>
  <div class="productDivView">
    <span @click="addtoCart(data)" class="cart-icon">
      <CartIcon :inCart="checkCart(data)" />
    </span>
    <nuxt-link :to="`/product/${data.slug}?category=${data.category}`">
      <div class="productDiv mb-5">
        <div class="image-view">
          <img :src="data.display_image" alt="" />
        </div>

        <h4 class="name f-16">{{ data.name }}</h4>
        <p class="description">{{ data.description }}</p>
        <p class="price f-bold">
          {{ $helperService.formatPrice(data.price) }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ["data"],
  computed: {
    cartProducts() {
      let storage = this.$auth.$storage.getLocalStorage("cart");
      return storage ? storage : [];
    },
  },
  methods: {
    checkCart(data) {
      const isAvailable = this.cartProducts.find(
        (item) => item.product.id === data.id
      );
      if (isAvailable) {
        return true;
      } else {
        return false;
      }
    },
    toggleStatus(productCart) {
      if (this.checkCart(this.data)) {
        let createCart = this.cartProducts;
        let productIndex = createCart.findIndex(
          (obj) => obj.product.id == productCart.product.id
        );
        if (productIndex > -1) {
          createCart.splice(productIndex, 1);
          this.$store.dispatch("addProductToCart", createCart);
        }
        this.$notify.success({
          title: "",
          message: "Item removed from Cart",
          position: "topCenter",
        });
      } else {
        let createCart = this.cartProducts;
        createCart.push(productCart);
        this.$store.dispatch("addProductToCart", createCart);
        this.$notify.success({
          title: "",
          message: "Item added to Cart",
          position: "topCenter",
        });
      }
      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
    },
    // checkCart(productCart) {
    //   let createCart = this.cartProducts;
    //   let productIndex = createCart.findIndex(
    //     (obj) => obj.product.id == productCart.product.id
    //   );

    //   if (productIndex >= 0) {
    //     createCart[productIndex] = productCart;
    //   } else {
    //     createCart.push(productCart);
    //   }

    //   this.$store.dispatch("addProductToCart", createCart);
    //   this.$notify.success({
    //     title: "",
    //     message: "Item added to Cart",
    //     position: "topCenter",
    //   });
    //   setTimeout(() => {
    //     window.location.reload(true);
    //   }, 1000);
    // },
    addtoCart(data) {
      let productCart = {
        product: data,
        quantity: 1,
      };
      this.toggleStatus(productCart);
    },
  },
};
</script>
<style lang="scss" scoped>
.productDivView {
  position: relative;
  .cart-icon {
    position: absolute;
    top: 24px;
    right: 24px;
    z-index: 9999;
    cursor: pointer;
  }
}
.productDiv {
  text-align: center;
  border: 1px solid gainsboro;
  padding: 17px;
  min-height: 426px;
  position: relative;
  cursor: pointer;
  transition: 0.7s all;
  &:hover {
    border-color: #255e13;
  }
  .name {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-transform: capitalize;
    color: #121113;
  }
  .description {
    font-size: 12px;
    line-height: 15px;
    color: #121113;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    font-size: 20px;
    line-height: 17px;
    text-align: center;
    color: #121113;
  }
  .image-view {
    height: 274px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    img {
      height: 186px;
      width: 60%;
      position: relative;
      object-position: bottom;
      object-fit: contain;
      max-height: 100%;
    }
  }
}
</style>
