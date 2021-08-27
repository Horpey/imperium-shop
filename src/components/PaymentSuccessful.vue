<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="text-center pt-5">
            <div class="success-checkmark">
              <div class="check-icon">
                <span class="icon-line line-tip"></span>
                <span class="icon-line line-long"></span>
                <div class="icon-circle"></div>
                <div class="icon-fix"></div>
              </div>
            </div>
            <h4 class="text-dark">Purchase successful</h4>
            <div class="text-left loan-info mt-4 mb-5">
              <p>
                Order Created
                <span>{{
                  paymentSummary.cart
                    ? $helpers.formatTime(paymentSummary.cart.created_at)
                    : ""
                }}</span>
              </p>
              <p>
                Item Quantity
                <span>{{ paymentSummary.total_quantity }}</span>
              </p>
              <p>
                Sub-total
                <span>{{
                  $helpers.formatPrice(paymentSummary.sub_total)
                }}</span>
              </p>
              <p>
                Total price
                <span>{{
                  $helpers.formatPrice(paymentSummary.total_price)
                }}</span>
              </p>
            </div>
            <router-link
              to="/categories"
              class="
                btn btn-imp-secondary
                bg-primary
                btn-icon
                text-secondary
                py-3
                px-5
              "
            >
              <span>Back to shop</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["paymentSummary"],
};
</script>
<style lang="scss" scoped>
.loan-info {
  p {
    padding: 15px 5px;
    margin: 0;
    border-bottom: 1px solid gainsboro;
    font-weight: bold;
    color: black;
    span {
      float: right;
      font-weight: normal;
    }
  }
}
.success-checkmark {
  width: 80px;
  height: 115px;
  margin: 0 auto;

  .check-icon {
    width: 80px;
    height: 80px;
    position: relative;
    border-radius: 50%;
    box-sizing: content-box;
    border: 4px solid #4caf50;

    &::before {
      top: 3px;
      left: -2px;
      width: 30px;
      transform-origin: 100% 50%;
      border-radius: 100px 0 0 100px;
    }

    &::after {
      top: 0;
      left: 30px;
      width: 60px;
      transform-origin: 0 50%;
      border-radius: 0 100px 100px 0;
      animation: rotate-circle 4.25s ease-in;
    }

    &::before,
    &::after {
      content: "";
      height: 100px;
      position: absolute;
      background: #ffffff;
      transform: rotate(-45deg);
    }

    .icon-line {
      height: 5px;
      background-color: #4caf50;
      display: block;
      border-radius: 2px;
      position: absolute;
      z-index: 10;

      &.line-tip {
        top: 46px;
        left: 14px;
        width: 25px;
        transform: rotate(45deg);
        animation: icon-line-tip 0.75s;
      }

      &.line-long {
        top: 38px;
        right: 8px;
        width: 47px;
        transform: rotate(-45deg);
        animation: icon-line-long 0.75s;
      }
    }

    .icon-circle {
      top: -4px;
      left: -4px;
      z-index: 10;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      position: absolute;
      box-sizing: content-box;
      border: 4px solid rgba(76, 175, 80, 0.5);
    }

    .icon-fix {
      top: 8px;
      width: 5px;
      left: 26px;
      z-index: 1;
      height: 85px;
      position: absolute;
      transform: rotate(-45deg);
      background-color: #ffffff;
    }
  }
}

@keyframes rotate-circle {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}

@keyframes icon-line-tip {
  0% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  54% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  70% {
    width: 50px;
    left: -8px;
    top: 37px;
  }
  84% {
    width: 17px;
    left: 21px;
    top: 48px;
  }
  100% {
    width: 25px;
    left: 14px;
    top: 45px;
  }
}

@keyframes icon-line-long {
  0% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  84% {
    width: 55px;
    right: 0px;
    top: 35px;
  }
  100% {
    width: 47px;
    right: 8px;
    top: 38px;
  }
}
</style>
