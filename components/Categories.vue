<template>
  <div
    class="section pt-0"
    style="padding: 0px; max-width: 100vw; overflow: hidden"
  >
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 px-0">
          <div class="complete-sol">
            <h3 class="grid-head">COMPLETE SOLUTIONS</h3>
            <p class="grid-descrip">
              CHOOSE A PACKAGE THAT SUITES YOU FROM OUR VARIETIES OF SPECIAL
              OFFER PRODUCTS
            </p>
            <nuxt-link class="sect-link" to="/categories/2">
              <span> View all products</span>
            </nuxt-link>
            <div class="p-5">
              <img class="img-fluid" src="/images/product-3.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-md-8 px-0">
          <div class="row margin-non">
            <div class="col-md-6 px-0">
              <div class="solar-img-div">
                <img src="/images/solar-panel.png" height="194" alt="" />
              </div>
            </div>
            <div class="col-md-6 px-0">
              <div class="complete-sol solardd">
                <h3 class="grid-head">SOLAR PANEL SYSTEMS</h3>
                <p class="grid-descrip">
                  High output and efficiency performance
                </p>
                <nuxt-link class="sect-link" to="/categories/2">
                  <span> View all products</span>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="row margin-non">
            <div class="col-md-8 px-0">
              <div class="complete-sol invertersys">
                <div class="row align-items-center">
                  <div class="col-md-8">
                    <div class="text-left">
                      <h3 class="grid-head">INVERTER SYSTEMS</h3>
                      <p class="grid-descrip text-left">
                        High output and efficiency performance
                      </p>
                      <nuxt-link class="sect-link" to="/categories/2">
                        <span> View all products</span>
                      </nuxt-link>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <img src="/images/inverter.png" class="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 px-0">
              <div class="complete-sol shop-all">
                <h3 class="grid-head">SHOP ALL CATEGORIES</h3>

                <nuxt-link
                  to="/"
                  target="_blank"
                  class="
                    btn btn-imp-secondary
                    bg-primary
                    btn-icon
                    py-2
                    px-4
                    mt-3
                  "
                >
                  Shop here
                  <img
                    height="30"
                    src="/images/svgs/shop-arrow.svg"
                    class="ml-2"
                    alt=""
                  />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
