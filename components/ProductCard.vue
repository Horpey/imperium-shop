<template>
  <div>
    <nuxt-link :to="`/product/${data.slug}?category=${data.category}`">
      <div class="productDiv mb-5">
        <a href="#" class="cart-icon">
          <img src="/images/svgs/card-icon.svg" alt="" />
        </a>
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
};
</script>
<style lang="scss" scoped>
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
  .cart-icon {
    position: absolute;
    top: 24px;
    right: 24px;
    img {
      height: 50px;
    }
  }
}
</style>
