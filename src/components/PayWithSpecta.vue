<template>
  <div id="paySpecta">
    <div class="section pt-3 bg-lightt">
      <div class="container">
        <div class="card-specta py-5">
          <div class="row align-items-center">
            <div class="col-md-3">
              <img src="/assets/images/specta.png" height="150" alt="" />
            </div>
            <div class="col-md-6">
              <h3 class="head f-bold mb-4 text-black">
                Buy Now Pay With Specta
              </h3>
              <a
                href="#target-content"
                id="button"
                class="btn btn-imp-secondary btn-icon text-white py-3 px-5"
                style="background: black"
              >
                Click here
              </a>
            </div>
            <div class="col-md-3 hide-sm">
              <img src="/assets/images/specta-card.png" height="170" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="target-content">
      <a href="#paySpecta" class="close"></a>
      <div id="target-inner">
        <img src="/assets/images/specta.png" height="100" alt="" />
        <h2 class="f-bold text-dark">About PaywithSpecta</h2>
        <p>
          PaywithSpecta is an online lending payment solution that offers you a
          digital spending limit that can be used to make purchases from
          merchants (in-store and online). A portion of this digital credit
          could also be converted to cash, which allows you to make purchases
          from merchants yet to sign up on the platform or for your personal
          needs.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#target-content {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 200ms;
  z-index: 99;
}
#target-content:target {
  pointer-events: all;
  opacity: 1;
}
#target-content #target-inner {
  position: absolute;
  display: block;
  padding: 48px;
  line-height: 1.8;
  width: 70%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
  background: white;
  color: #34495e;
}
#target-content #target-inner h2 {
  margin-top: 0;
}
#target-content #target-inner code {
  font-weight: bold;
}
#target-content a.close {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #34495e;
  opacity: 0.5;
  transition: opacity 200ms;
}
#target-content a.close:hover {
  opacity: 0.4;
}
</style>
