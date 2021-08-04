<template>
  <nav
    id="navbar-main"
    class="
      navbar navbar-main navbar-expand-lg
      bg-white
      navbar-light
      position-sticky
      top-0
      shadow
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
          <li class="nav-item">
            <nuxt-link to="/" target="_blank" class="nav-link text-primary">
              Products
            </nuxt-link>
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
            <nuxt-link to="/" target="_blank" class="nav-link text-primary">
              <img src="/images/svgs/cart.svg" alt="cart" />
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
    };
  },
  methods: {},
};
</script>
