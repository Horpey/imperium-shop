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
                <label>Address</label>
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

              <h4 class="f-semibold my-4 text-dark">Payment Details</h4>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Card name</label>
                    <input
                      type="text"
                      placeholder="Tony Abraham"
                      class="form-control"
                      name=""
                      id=""
                    />
                  </div>
                  <div class="form-group">
                    <label>Card number</label>
                    <input
                      type="text"
                      placeholder="***** - **** - **** - 2311"
                      class="form-control"
                      name=""
                      id=""
                    />
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group">
                        <label>Expiration</label>
                        <input
                          type="text"
                          placeholder="__ / __"
                          class="form-control"
                          name=""
                          id=""
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group">
                        <label>CVV</label>
                        <input type="text" class="form-control" name="" id="" />
                      </div>
                    </div>
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
