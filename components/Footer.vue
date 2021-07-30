<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h4 class="footer-heading">Company</h4>
          <ul class="footer-links">
            <li>
              <nuxt-link to="/">About us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Contact Us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Sell on Imperium</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Terms & Conditions</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Privacy policy</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4 class="footer-heading">Offerings</h4>
          <ul class="footer-links">
            <li>
              <nuxt-link to="/">Energy Calculator</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Installations</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Delivery</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Lease to own</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Power as a service</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4 class="footer-heading">Get in touch</h4>
          <ul class="footer-links">
            <li>
              <a href="#"
                >Any questions? Let us know in store @ 20, Marina, Lagos
                State</a
              >
            </li>
            <li>
              <nuxt-link to="/">+234 (080) 6413 3937</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">+234 (081) 3547 3439</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">info@imperium.com</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4 class="footer-heading">Follow us</h4>
          <ul class="footer-links">
            <li>
              <a href="#" class="pr-2">
                <img src="/images/svgs/twitter.svg" alt="" />
              </a>
              <a href="#" class="pr-2">
                <img src="/images/svgs/facebook.svg" alt="" />
              </a>
              <a href="#" class="pr-2">
                <img src="/images/svgs/envelope.svg" alt="" />
              </a>
              <a href="#" class="pr-2">
                <img src="/images/svgs/linkedin.svg" alt="" />
              </a>
            </li>
            <li class="pt-4">
              <div class="form-group positive-relative">
                <input
                  type="text"
                  class="form-control"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder="Email address"
                />
                <button class="btn btn-sm text-capitalize sub-button">
                  Subscribe
                </button>
              </div>
            </li>
            <li>
              <a href="#">
                <img src="/images/logo-white.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer-heading {
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #fdd826;
}
.footer {
  padding: 3.5rem 0;
}
.footer-links {
  padding: 0px;
  list-style: none;
  li {
    padding: 6px 0px;
    a {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #e7e7e7;
      opacity: 0.9;
    }
  }
}
.positive-relative {
  position: relative;
  input {
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 10px;
    background: transparent;
  }
}
.sub-button {
  position: absolute;
  top: 7px;
  right: 7px;
  background: #cbdfab;
  border-radius: 6px;
  height: 29px;
  padding: 1px 11px;
  color: #255e13;
}
</style>
