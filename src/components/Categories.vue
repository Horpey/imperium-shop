<template>
  <div class="section pt-0" style="padding: 0px; overflow: hidden">
    <!-- max-width: 100vw; -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 px-0">
          <div
            class="complete-sol"
            @click="$router.push('/categories?type=bundle')"
          >
            <h3 class="grid-head">Complete Solutions</h3>
            <p class="grid-descrip">
              Choose A Package That Suites You From Our Varieties Of Special
              Offer Products
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
          <div
            class="complete-sol invertersys"
            @click="$router.push('/categories?type=solar panel')"
            style="background: #ddeac8"
          >
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
                  <h3 class="grid-head">Solar Panel Systems</h3>
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
          <div
            class="complete-sol invertersys"
            @click="$router.push('/categories?type=inverter')"
          >
            <div class="row align-items-center">
              <div class="col-md-8">
                <div class="text-left">
                  <h3 class="grid-head">Inverter Systems</h3>
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
          <div
            class="complete-sol"
            @click="$router.push('/categories?type=battery')"
          >
            <h3 class="grid-head">Battery Systems</h3>
            <p class="grid-descrip">High Output And Efficient Performance</p>
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
