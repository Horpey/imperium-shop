<template>
  <div style="background: #f4f8ed; padding: 70px 0px; min-height: 600px">
    <div class="container">
      <Loading v-if="loading" />
      <div v-else>
        <div class="bready">
          <ol class="breadcrumb">
            <li><router-link to="/">Shop</router-link></li>
            <li><router-link to="/categories">Category</router-link></li>
            <li>
              <router-link
                class="text-capitalize"
                :to="`/categories/${product.category}`"
              >
                {{ product.category }}</router-link
              >
            </li>
            <li class="active text-capitalize">{{ product.name }}</li>
          </ol>
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
              <form @submit.prevent="addToCart()">
                <div class="row">
                  <div class="col-6 col-md-4">
                    <p class="text-dark">Price</p>
                  </div>
                  <div class="col-6 col-md-8">
                    <p class="f-semibold text-dark">
                      {{ $helpers.formatPrice(product.price) }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 col-md-4">
                    <p class="text-dark">Quantity</p>
                  </div>
                  <div class="col-6 col-md-8">
                    <input
                      min="1"
                      :max="
                        product.stock ? product.stock.quantity_available : 5
                      "
                      v-model="quantity"
                      style="
                        width: 100px;
                        font-weight: bold;
                        color: black;
                        font-size: 14px;
                      "
                      type="number"
                      class="quantityInput form-control form-control-sm"
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
                  type="submit"
                >
                  Add to Cart -
                  <span class="amttotal">{{
                    $helpers.formatPrice(product.price * quantity)
                  }}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "@/components/Loading.vue";

export default {
  props: ["product", "loading"],
  components: { Loading },
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    notificationSystem() {
      return this.$store.getters.notificationSystem;
    },
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

      // let createCart = this.cartProducts;
      // let productIndex = createCart.findIndex(
      //   (obj) => obj.product.id == productCart.product.id
      // );
      // if (productIndex >= 0) {
      //   createCart[productIndex] = productCart;
      // } else {
      //   createCart.push(productCart);
      // }
      // this.$store.dispatch("addProductToCart", createCart);
      // this.$toast.success({
      //   title: "",
      //   message: "Item added to Cart",
      //   position: "topCenter",
      // });
      // setTimeout(() => {
      //   window.location.reload(true);
      // }, 1000);
    },
    toggleStatus(productCart) {
      if (this.checkCart(this.product)) {
        let createCart = this.cartProducts;
        let productIndex = createCart.findIndex(
          (obj) => obj.product.id == productCart.product.id
        );

        if (productIndex >= 0) {
          createCart[productIndex] = productCart;
        }
        this.$store.commit("updateCart", createCart);

        this.$toast.info("Cart", "Item updated in cart", this.$toastPosition);
      } else {
        let createCart = this.cartProducts;
        createCart.push(productCart);
        this.$store.commit("updateCart", createCart);
        this.$toast.success("Cart", "Item added to cart.", this.$toastPosition);
      }
    },
    addToCart() {
      let productCart = {
        product: this.product,
        quantity: parseInt(this.quantity),
      };
      this.toggleStatus(productCart);
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
