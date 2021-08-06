<template>
  <div>
    <div class="productDiv mb-5">
      <div class="image-view">
        <img src="/images/solar-panel.jpeg" alt="" />
        <a href="#" class="cart-icon">
          <img src="/images/svgs/card-icon.svg" alt="" />
        </a>
      </div>
      <h4 class="name f-16">{{ data.name }}</h4>
      <p class="description">{{ data.description }}</p>
      <p class="price">{{ data.price }}</p>
    </div>
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
  .name {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #121113;
  }
  .description {
    font-size: 12px;
    line-height: 15px;
    color: #121113;
  }
  .price {
    font-weight: 600;
    font-size: 14px;
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
}
</style>
