<template>
  <div class="calculator-view">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-7 mb-sm">
          <div class="media">
            <a class="d-flex" href="#">
              <img src="/images/svgs/light-outline.svg" alt="" />
            </a>
            <div class="media-body pl-4">
              <p class="f-16 text-white m-0">
                Let’s help you calculate your current energy consumption and
                recommend the best product for you
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-5 text-center">
          <nuxt-link
            to="/"
            target="_blank"
            class="btn btn-imp-secondary bg-white text-primary btn-icon py-3"
          >
            Go to Calculator
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
