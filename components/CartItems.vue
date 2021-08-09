<template>
  <div class="cart-items text-center-sm">
    <div class="row mt-4">
      <div class="col-md-3">
        <img
          src="/images/inverter-c.png"
          class="img-fluid cart-itemimage"
          alt=""
        />
      </div>
      <div class="col-md-3">
        <p class="text-dark">
          String Inverter. Pvscl36e conext cl36 string inverter
        </p>
        <h5 class="f-semibold text-dark">₦ 55,000</h5>
        <a href="" class="remove-btn">Remove Item</a>
      </div>
      <div class="col-md-4">
        <p class="f-semibold text-dark">₦ 61, 481 (2 years)</p>
      </div>
      <div class="col-md-2">
        <a-input-number
          class="quantityInput"
          id="inputNumber"
          value="3"
          :min="1"
          :max="10"
        />
      </div>
    </div>
  </div>
</template>
