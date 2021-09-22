<template>
  <div class="productDivView">
    <span @click="addtoCart(data)" class="cart-icon">
      <CartIcon :inCart="checkCart(data)" />
    </span>
    <router-link :to="`/product/${data.slug}?category=${data.category}`">
      <div class="productDiv mb-5">
        <div class="image-view">
          <img :src="data.display_image" alt="" />
        </div>

        <h4 class="name f-16">{{ data.name }}</h4>
        <p class="description">{{ data.description }}</p>
        <p class="price f-bold">
          {{ $helpers.formatPrice(data.price) }}
        </p>
      </div>
    </router-link>
  </div>
</template>
<script>
import CartIcon from "@/components/CartIcon.vue";

export default {
  props: ["data"],
  components: { CartIcon },
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
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
          this.$store.commit("updateCart", createCart);
        }
        this.$toast.info("Cart", "Item removed from cart", this.$toastPosition);
      } else {
        let createCart = this.cartProducts;
        createCart.push(productCart);
        this.$store.commit("updateCart", createCart);
        this.$toast.success("Cart", "Item added to cart.", this.$toastPosition);
      }
    },
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
    // top: 24px;
    top: -5px;
    opacity: 0;
    right: 24px;
    z-index: 9999;
    cursor: pointer;
    transition: 0.4s all;
  }
}
.productDivView:hover {
  & > .cart-icon {
    top: 24px;
    opacity: 1;
  }
}
.productDiv {
  text-align: center;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 17px;
  min-height: 426px;
  position: relative;
  cursor: pointer;
  transition: 0.7s all;
  background-color: white;
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
    font-size: 16px;
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
      height: 160px;
      border-radius: 14px;
      width: 82%;
      position: relative;
      object-position: bottom;
      object-fit: contain;
      max-height: 100%;
    }
  }
}
</style>
