<template>
  <div>
    <p @click="$emit('backtoOrders')" class="backArrow text-primary">
      ← Back to all orders
    </p>
    <div class="row">
      <div class="col-md-4" v-for="(product, index) in items" :key="index">
        <div class="productDivView">
          <router-link :to="`/product/${product.slug}`">
            <div class="productDiv mb-5">
              <div class="image-view">
                <img :src="product.display_image" alt="" />
              </div>

              <h4 class="name f-16">{{ product.name }}</h4>
              <p class="price f-bold">
                {{ $helpers.formatPrice(product.price) }} X
                {{ product.quantity }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  props: ["items"],
  components: {
    ProductCard,
  },
};
</script>
<style lang="scss" scoped>
.backArrow {
  text-decoration: underline;
  cursor: pointer;
}
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
  border: 1px solid transparent;
  padding: 17px;
  min-height: 380px;
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
