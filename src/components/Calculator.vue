<template>
  <div class="calculator-view">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-9 mb-sm">
          <div class="media align-items-center">
            <a class="d-flex" href="#">
              <img src="/assets/images/svgs/light-outline.svg" alt="" />
            </a>
            <div class="media-body pl-4">
              <p class="f-16 text-white m-0">
                Let’s help you calculate your current energy consumption and
                recommend the best product for you
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 gotoCal">
          <router-link
            to="/calculator"
            class="btn btn-imp-secondary bg-white text-primary btn-icon py-3"
          >
            Go to Calculator
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
