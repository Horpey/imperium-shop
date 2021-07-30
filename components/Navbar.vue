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
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar_global"
        aria-controls="navbar_global"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbar_global">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <nuxt-link to="/">
                <img src="/images/logo.svg" />
              </nuxt-link>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbar_global"
                aria-controls="navbar_global"
                aria-expanded="false"
                aria-label="Toggle navigation"
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
        <!-- <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://www.instagram.com/creativetimofficial"
              target="_blank"
              data-toggle="tooltip"
              title="Follow us on Instagram"
            >
              <i class="fa fa-instagram"></i>
              <span class="nav-link-inner--text d-lg-none">Instagram</span>
            </a>
          </li>
          <li class="nav-item d-none d-lg-block">
            <nuxt-link
             to="/"
              target="_blank"
              class="btn btn-imp-secondary btn-icon"
            >
              <span class="nav-link-inner--text">Login</span>
            </nuxt-link>
          </li>
        </ul> -->
      </div>
    </div>
  </nav>
</template>
