<template>
  <nav
    id="navbar-main"
    class="
      navbar navbar-main navbar-expand-lg
      bg-white
      navbar-light
      position-sticky
      top-0
      py-2
    "
  >
    <div class="container">
      <router-link class="navbar-brand mr-lg-5" to="/">
        <img src="/assets/images/logo.svg" />
      </router-link>
      <button
        v-if="!toogle"
        class="navbar-toggler"
        @click="toogle = true"
        style="z-index: 9999"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        :class="{
          'navbar-collapse': true,
          collapse: true,
          show: toogle == true,
        }"
        id="navbar_global"
        style="outline: 0"
      >
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <img src="/assets/images/logo.svg" />
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <button
                v-if="toogle"
                @click="toogle = false"
                class="navbar-toggler"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul
          class="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto"
        >
          <li class="nav-item dropdown">
            <router-link
              to="/categories"
              class="nav-link text-primary"
              data-toggle="dropdown"
              role="button"
            >
              <span class="nav-link-inner--text">Products</span>
            </router-link>

            <div class="dropdown-menu dropdown-menu-xl p-2 show">
              <div class="dropdown-menu-inner">
                <div class="row">
                  <div class="col-md-6 pr-0">
                    <div
                      @click="$router.push('/categories?type=solar-panel')"
                      class="dropdownmarg"
                    >
                      <router-link
                        to="/categories?type=solar-panel"
                        class="navdroplink"
                      >
                        <img src="/assets/images/svgs/nav/solar.svg" alt="" />
                        <p>Solar panels</p>
                      </router-link>
                    </div>
                    <div
                      @click="$router.push('/categories?type=inverter')"
                      class="dropdownmarg"
                    >
                      <router-link
                        to="/categories?type=inverter"
                        class="navdroplink"
                      >
                        <img
                          src="/assets/images/svgs/nav/inverter.svg"
                          alt=""
                        />
                        <p>Inverters</p>
                      </router-link>
                    </div>
                    <div class="m-4">
                      <router-link
                        to="/categories"
                        class="
                          btn btn-imp-secondary
                          bg-primary
                          text-white
                          btnviewmore
                          btnarrowlink
                          btn-icon
                        "
                      >
                        <span class="nav-link-inner--text"
                          >View all products</span
                        >
                      </router-link>
                    </div>
                  </div>
                  <div class="col-md-6 pl-0">
                    <div
                      @click="$router.push('/categories?type=bundle')"
                      class="dropdownmarg"
                    >
                      <router-link
                        to="/categories?type=bundle"
                        class="navdroplink"
                      >
                        <img
                          src="/assets/images/svgs/nav/accessories.svg"
                          alt=""
                        />
                        <p>Complete solution</p>
                      </router-link>
                    </div>

                    <div
                      @click="$router.push('/categories?type=battery')"
                      class="dropdownmarg"
                    >
                      <router-link
                        to="/categories?type=battery"
                        class="navdroplink"
                      >
                        <img src="/assets/images/svgs/nav/battery.svg" alt="" />
                        <p>Batteries</p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/power-as-a-service" class="nav-link text-primary">
              Power as a service
            </router-link>
          </li>
          <li class="nav-item">
            <a
              href="https://imperium-site.netlify.app/calculator"
              target="_blank"
              class="nav-link text-primary"
            >
              Energy Calculator
            </a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link text-primary"
              data-toggle="dropdown"
              role="button"
            >
              <img src="/assets/images/svgs/search.svg" alt="search" />
            </a>

            <div
              class="
                dropdown-menu dropdown-menu-search dropdown-menu-xl
                p-2
                show
              "
            >
              <div class="dropdown-menu-inner">
                <div class="p-4">
                  <div class="searchinput">
                    <img src="/assets/images/svgs/search-icon.svg" alt="" />
                    <input
                      v-model="searchField"
                      placeholder="What are you looking for?"
                      class="form-control text-dark"
                      type="text"
                    />
                  </div>
                  <div class="mt-4">
                    <p class="text-dark" v-if="notFound">
                      Sorry we couldn’t find your search word, try again!
                    </p>
                    <Loading v-if="loading" />
                    <div v-else class="scrollSearchView">
                      <h5
                        class="text-dark"
                        v-if="products.length > 1 && !loading"
                      >
                        Search results for "{{ searchField }}"
                      </h5>
                      <div class="row mt-3">
                        <div
                          class="col-6 col-md-4"
                          v-for="(product, index) in products"
                          :key="index"
                        >
                          <div>
                            <ProductCard :data="product" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <!-- <li class="nav-item">
            <router-link to="/search" class="nav-link text-primary">
              <img src="/assets/images/svgs/search.svg" alt="search" />
            </router-link>
          </li> -->
          <li class="nav-item">
            <router-link
              to="/cart"
              :class="{
                'nav-link': true,
                'text-primary': true,
                cartNavbar: true,
                wiggle: itemAdded,
              }"
            >
              <img src="/assets/images/svgs/cart.svg" alt="cart" />
              <span class="cartCount">{{ cart.length }}</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              v-if="user"
              to="/my-account"
              class="btn btn-imp-secondary btn-icon"
            >
              <span class="nav-link-inner--text"
                >Hi, {{ user.customer.first_name }}</span
              >
            </router-link>
            <router-link
              to="/login"
              v-else
              class="btn btn-imp-secondary btn-icon"
            >
              <span class="nav-link-inner--text">Login</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "AppHeader",
  components: { ProductCard, Loading },
  data() {
    return {
      toogle: false,
      displayCategories: false,
      itemAdded: false,
      products: [],
      notFound: false,
      searchField: "",
      loading: false,
    };
  },
  watch: {
    cart: function () {
      this.itemAdded = true;
      setTimeout(() => {
        this.itemAdded = false;
      }, 1000);
    },
    searchField: function (data) {
      if (data) {
        this.getSearchResult();
      } else {
        this.products = [];
      }
    },
  },
  methods: {
    setDelay() {
      setTimeout(() => {
        this.displayCategories = false;
      }, 1000);
    },
    getSearchResult() {
      this.loading = true;
      this.notFound = false;

      let payload = {
        path: `product/search/?q=${this.searchField}`,
      };
      this.$store
        .dispatch("getRequest", payload)
        .then((resp) => {
          this.loading = false;
          this.products = resp.data.data.result;
          if (this.products.length == 0) {
            this.notFound = true;
          } else {
            this.notFound = false;
          }
        })
        .catch((err) => {
          if (err.response) {
            this.$toast.info(
              "Product Search",
              err.response.data.message,
              this.$toastPosition
            );
          } else {
            this.$toast.info(
              "Product Search",
              "Unable to search product",
              this.$toastPosition
            );
          }
          this.loading = false;
        });
    },
  },
  computed: {
    user() {
      if (localStorage.getItem("user")) {
        let user = this.CryptoJS.AES.decrypt(
          localStorage.getItem("user"),
          this.$passPhrase
        ).toString(this.CryptoJS.enc.Utf8);
        return JSON.parse(user);
      } else {
        return false;
      }
    },
    cart() {
      return this.$store.getters.cartProducts;
    },
  },
};
</script>
<style lang="scss">
.dropdown-menu-xl {
  min-width: 635px;
  visibility: hidden;
  opacity: 0;
  top: 79px;
  transition: 0.5s all;
  border-radius: 0.3rem;
  background: #fefefe;
  box-shadow: 10px 10px 30px #17460933;
  background-image: url("/images/svgs/nav/logobg.svg");
  background-repeat: no-repeat;
  background-position: bottom right;
  border-radius: 0px;
  margin: -2px ​0px 0px 14px;

  .navdroplink {
    p {
      display: inline;
      font-weight: bold;
      color: black;
      margin-left: 13px;
      font-size: 14px;
    }
  }
}
.dropdown-menu-search {
  right: 0;
  min-height: 600px;
  width: 970px;
}
.cartNavbar {
  position: relative;
  .cartCount {
    background: #fdc717;
    font-weight: bold;
    color: black;
    width: 20px;
    height: 20px;
    display: inline-block;
    font-size: 12px;
    text-align: center;
    border-radius: 25px;
    line-height: 20px;
    position: absolute;
    top: 10px;
    right: 4px;
  }
}
.searchinput {
  display: flex;
  border-bottom: 1px solid black;
  input {
    border: 0px;
    &:hover,
    &:focus {
      color: black;
    }
  }
}
.scrollSearchView {
  overflow-y: scroll;
  height: 500px;
  overflow-x: hidden;
}
.wiggle {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  /* When the animation is finished, start again */
  animation-iteration-count: 1;
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
