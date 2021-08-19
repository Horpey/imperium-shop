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
      <nuxt-link class="navbar-brand mr-lg-5" to="/">
        <img src="/images/logo.svg" />
      </nuxt-link>
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
              <nuxt-link to="/">
                <img src="/images/logo.svg" />
              </nuxt-link>
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
          <li @mouseover="displayCategories = true" class="nav-item dropdown">
            <a
              href="#"
              class="nav-link text-primary"
              data-toggle="dropdown"
              role="button"
            >
              <i class="ni ni-ui-04 d-lg-none"></i>
              <span class="nav-link-inner--text">Products</span>
            </a>
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
                  <div class="col-md-6">
                    <div class="dropdownmarg">
                      <nuxt-link
                        to="/categories/solar-panel"
                        class="navdroplink"
                      >
                        <img src="/images/svgs/nav/solar.svg" alt="" />
                        <p>Solar panels</p>
                      </nuxt-link>
                    </div>
                    <div class="dropdownmarg">
                      <nuxt-link to="/categories/inverter" class="navdroplink">
                        <img src="/images/svgs/nav/inverter.svg" alt="" />
                        <p>Inverters</p>
                      </nuxt-link>
                    </div>
                    <div class="dropdownmarg">
                      <nuxt-link to="/categories/battery" class="navdroplink">
                        <img src="/images/svgs/nav/battery.svg" alt="" />
                        <p>Batteries</p>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="dropdownmarg">
                      <nuxt-link to="/categories/bundle" class="navdroplink">
                        <img src="/images/svgs/nav/accessories.svg" alt="" />
                        <p>Complete solution</p>
                      </nuxt-link>
                    </div>
                    <div class="dropdownmarg">
                      <nuxt-link to="/categories/inverter" class="navdroplink">
                        <img src="/images/svgs/nav/complete.svg" alt="" />
                        <p>Inverters</p>
                      </nuxt-link>
                    </div>
                    <div class="m-4">
                      <nuxt-link
                        to="/"
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
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <nuxt-link to="/" target="_blank" class="nav-link text-primary">
              Special Offers
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/" target="_blank" class="nav-link text-primary">
              Power as a service
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/" target="_blank" class="nav-link text-primary">
              Energy Calculator
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/" target="_blank" class="nav-link text-primary">
              <img src="/images/svgs/search.svg" alt="search" />
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/cart" class="nav-link text-primary cartNavbar">
              <img src="/images/svgs/cart.svg" alt="cart" />
              <span class="cartCount">{{ cartCount }}</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              to="/"
              target="_blank"
              class="btn btn-imp-secondary btn-icon"
            >
              <span class="nav-link-inner--text">Login</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      toogle: false,
      displayCategories: false,
    };
  },
  methods: {},
  computed: {
    cartStorage() {
      return this.$auth.$storage.getLocalStorage("cart");
    },
    cartCount() {
      let storage = this.cartStorage ? this.cartStorage : [];
      let quantity = 0;
      for (const product of storage) {
        quantity += product.quantity;
      }
      return quantity;
    },
  },
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
</style>
