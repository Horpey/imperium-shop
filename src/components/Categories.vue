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
            <router-link class="sect-link" to="/categories?type=bundle">
              <span> View all products</span>
            </router-link>
            <div class="p-5">
              <img
                class="img-fluid"
                src="/assets/images/product-3.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-md-5 px-0">
          <div class="complete-sol invertersys" style="background: #ddeac8">
            <div class="row align-items-center">
              <div class="col-md-4">
                <img
                  src="/assets/images/solar-panel.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col-md-8">
                <div class="text-left">
                  <h3 class="grid-head">SOLAR PANEL SYSTEMS</h3>
                  <p class="grid-descrip text-left">
                    High output and efficiency performance
                  </p>
                  <router-link
                    class="sect-link"
                    to="/categories?type=solar panel"
                  >
                    <span> View all products</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="complete-sol invertersys">
            <div class="row align-items-center">
              <div class="col-md-8">
                <div class="text-left">
                  <h3 class="grid-head">INVERTER SYSTEMS</h3>
                  <p class="grid-descrip text-left">
                    High output and efficiency performance
                  </p>
                  <router-link class="sect-link" to="/categories?type=inverter">
                    <span> View all products</span>
                  </router-link>
                </div>
              </div>
              <div class="col-md-4">
                <img
                  src="/assets/images/inverter.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 px-0">
          <div class="complete-sol">
            <h3 class="grid-head">BATTERY SYSTEMS</h3>
            <p class="grid-descrip">HIGH OUTPUT AND EFFICIENT PERFORMANCE</p>
            <router-link class="sect-link" to="/categories?type=battery">
              <span> View all products</span>
            </router-link>
            <div class="p-2">
              <img
                style="height: auto; margin-top: 40px; width: 100% !important"
                class="img-fluid"
                src="/assets/images/battery.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
