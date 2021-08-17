<template>
  <div>
    <div class="py-5">
      <div class="container mb-4">
        <nuxt-link class="text-dark" to="/cart">
          <img src="/images/svgs/left-arrow.svg" class="mr-2" />
          Back to Cart
        </nuxt-link>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <p class="paySummary">Checkout Information</p>
            <div class="my-5">
              <div class="form-group">
                <label>Country/Region</label>
                <input
                  placeholder="United African Republic"
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                />
              </div>
              <div class="form-group">
                <label>House number</label>
                <input
                  placeholder="43"
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                />
              </div>
              <div class="form-group">
                <label>Address</label>
                <input
                  placeholder="Enter a location"
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                />
              </div>
              <div class="form-group">
                <label>Address Line 2</label>
                <input
                  placeholder="Address Line 2"
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                />
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" name="" id="" />
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label>State or Region</label>
                    <input type="text" class="form-control" name="" id="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <PaymentSummary />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
