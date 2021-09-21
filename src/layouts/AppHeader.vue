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
          <li
            @mouseover="displayCategories = true"
            @mouseleave="setDelay()"
            class="nav-item dropdown"
          >
            <router-link
              to="/categories"
              class="nav-link text-primary"
              data-toggle="dropdown"
              role="button"
            >
              <i class="ni ni-ui-04 d-lg-none"></i>
              <span class="nav-link-inner--text">Products</span>
            </router-link>
            <div
              @mouseover="displayCategories = true"
              @mouseleave="displayCategories = false"
              :class="{
                'dropdown-menu': true,
                'dropdown-menu-xl': true,
                'p-2': true,
                show: displayCategories,
              }"
            >
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
          <!-- <li class="nav-item">
            <router-link to="/" class="nav-link text-primary">
              Special Offers
            </router-link>
          </li> -->
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
          <li class="nav-item">
            <router-link to="/search" class="nav-link text-primary">
              <img src="/assets/images/svgs/search.svg" alt="search" />
            </router-link>
          </li>
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
export default {
  name: "AppHeader",
  data() {
    return {
      toogle: false,
      displayCategories: false,
      itemAdded: false,
    };
  },
  watch: {
    cart: function () {
      this.itemAdded = true;
      setTimeout(() => {
        this.itemAdded = false;
      }, 1000);
    },
  },
  methods: {
    setDelay() {
      setTimeout(() => {
        this.displayCategories = false;
      }, 1000);
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
  components: {},
};
</script>
<style lang="scss">
.dropdown-menu-xl {
  min-width: 635px;
  display: none;
  transition: visibility 0.25s, opacity 0.25s, transform 0.25s;
  animation: none;
  opacity: 0;
  border-radius: 0.3rem;
  background: #fefefe;
  box-shadow: 10px 10px 30px #17460933;
  background-image: url("/images/svgs/nav/logobg.svg");
  background-repeat: no-repeat;
  background-position: bottom right;
  border-radius: 0px;
  margin: -2px ​0px 0px 14px;
  &.show {
    display: block;
    opacity: 1;
    transition: visibility 0.25s, opacity 0.25s, transform 0.25s;
  }
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
