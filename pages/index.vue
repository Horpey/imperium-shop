<template>
  <div>
    <div class="section section-pd bg-primary">
      <div class="page-header">
        <div class="container shape-container d-flex align-items-center">
          <div class="col px-0">
            <div class="row align-items-center justify-content-center">
              <div class="col-lg-6">
                <h1 class="text-white display-1 f-bold text-head">
                  Solar Power for<br />
                  Your Daily Needs.
                </h1>
                <p class="f-16 text-white">
                  Choose a package that suites you and make<br />
                  payment in installments.
                </p>
                <div class="btn-wrapper mt-5">
                  <nuxt-link
                    to="/"
                    target="_blank"
                    class="btn btn-imp-secondary btn-icon py-3"
                  >
                    <span class="nav-link-inner--text"
                      >Browse Special Offer</span
                    >
                  </nuxt-link>
                </div>
              </div>
              <div class="col-md-5">
                <img class="img-fluid" src="/images/header-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
              <nuxt-link class="text-primary" to="/complete"
                >View all ⟶</nuxt-link
              >
              <div class="p-5">
                <img class="img-fluid" src="/images/product-3.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-8 px-0">
            <div class="row margin-non">
              <div class="col-md-6 px-0">
                <div class="solar-img-div">
                  <img src="/images/solar-panel.png" height="194" alt="" />
                </div>
              </div>
              <div class="col-md-6 px-0">
                <div class="complete-sol solardd">
                  <h3 class="grid-head">SOLAR PANEL SYSTEMS</h3>
                  <p class="grid-descrip">
                    High output and efficiency performance
                  </p>
                  <nuxt-link class="text-primary" to="/complete"
                    >View details ⟶</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="row margin-non">
              <div class="col-md-8 px-0">
                <div class="complete-sol invertersys">
                  <div class="row align-items-center">
                    <div class="col-md-8">
                      <div class="text-left">
                        <h3 class="grid-head">INVERTER SYSTEMS</h3>
                        <p class="grid-descrip text-left">
                          High output and efficiency performance
                        </p>
                        <nuxt-link class="text-primary" to="/complete"
                          >View details ⟶</nuxt-link
                        >
                      </div>
                    </div>
                    <div class="col-md-4">
                      <img
                        src="/images/inverter.png"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 px-0">
                <div class="complete-sol shop-all">
                  <h3 class="grid-head">SHOP ALL CATEGORIES</h3>

                  <nuxt-link
                    to="/"
                    target="_blank"
                    class="
                      btn btn-imp-secondary
                      bg-primary
                      btn-icon
                      py-2
                      px-4
                      mt-3
                    "
                  >
                    Shop here
                    <img
                      height="30"
                      src="/images/svgs/shop-arrow.svg"
                      class="ml-2"
                      alt=""
                    />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-3">
            <div class="text-center">
              <div>
                <img src="/images/svgs/hot-deal.svg" alt="" />
              </div>

              <h4 class="mb-2 ht-deals mt-4">HOT DEALS</h4>
              <p class="text-dark">
                Power your home with our range of products
              </p>
            </div>
          </div>
        </div>
        <div class="py-4">
          <div class="row">
            <div
              class="col-md-4"
              v-for="(deal, index) in hotDeals"
              :key="index"
            >
              <ProductCard :data="deal" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section pt-3">
      <div class="container">
        <div class="card-specta py-5">
          <div class="row align-items-center">
            <div class="col-md-3">
              <img src="/images/specta.png" height="150" alt="" />
            </div>
            <div class="col-md-6">
              <h3 class="head f-bold mb-4">Buy Now Pay With Specta</h3>
              <nuxt-link
                to="/"
                target="_blank"
                class="
                  btn btn-imp-secondary
                  bg-primary
                  btn-icon
                  text-secondary
                  py-3
                  px-5
                "
              >
                Click here
              </nuxt-link>
            </div>
            <div class="col-md-3 hide-sm">
              <img src="/images/specta-card.png" height="170" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="sect-direct">
          <div class="row">
            <div class="col-8">
              <h3 class="sect-heading">SOLAR PANEL</h3>
            </div>
            <div class="col-4">
              <div class="text-right">
                <nuxt-link class="sect-link" to="/"> View all ⟶</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="my-5">
          <div class="row">
            <div
              class="col-md-3"
              v-for="(deal, index) in hotDeals"
              v-if="index < 4"
              :key="index"
            >
              <ProductCard :data="deal" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="sect-direct">
          <div class="row">
            <div class="col-8">
              <h3 class="sect-heading">INVERTERS</h3>
            </div>
            <div class="col-4">
              <div class="text-right">
                <nuxt-link class="sect-link" to="/"> View all ⟶</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="my-5">
          <div class="row">
            <div
              class="col-md-3"
              v-for="(deal, index) in hotDeals"
              v-if="index < 4"
              :key="index"
            >
              <ProductCard :data="deal" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="makeRequest">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5">
            <div>
              <img
                src="/images/power-user.png"
                style="width: 90%"
                class="img-fluid mb-sm"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-7">
            <div>
              <h4 class="power-service mb-3">
                <img
                  src="/images/power-service.png"
                  height="50"
                  class="mr-2"
                  alt=""
                />
                Power as a Service
              </h4>
              <p class="f-16 text-dark">
                At Imperium, we take care of all your power and energy concerns
                by empowering your homes, stores and businesses with our clean
                energy solutions. By selecting our “Power as a Service” option,
                you are guaranteed clean and reliable power without the burden
                and hassle of installing, maintaining or even owning a
                solar/power solution. Begin to enjoy power today at zero upfront
                cost. You only pay an agreed tariff based on the solution
                deployed.
              </p>
              <nuxt-link
                to="/"
                target="_blank"
                class="
                  mt-4
                  btn btn-imp-secondary
                  bg-primary
                  btn-icon
                  text-white
                  py-3
                  px-5
                "
              >
                Make a request
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="sect-direct">
          <div class="row">
            <div class="col-8">
              <h3 class="sect-heading">BATTERIES</h3>
            </div>
            <div class="col-4">
              <div class="text-right">
                <nuxt-link class="sect-link" to="/"> View all ⟶</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="my-5">
          <div class="row">
            <div
              class="col-md-3"
              v-for="(deal, index) in hotDeals"
              v-if="index < 4"
              :key="index"
            >
              <ProductCard :data="deal" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="sect-direct">
          <div class="row">
            <div class="col-8">
              <h3 class="sect-heading">COMPLETE SOLUTIONS</h3>
            </div>
            <div class="col-4">
              <div class="text-right">
                <nuxt-link class="sect-link" to="/"> View all ⟶</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="my-5">
          <div class="row">
            <div
              class="col-md-3"
              v-for="(deal, index) in hotDeals"
              v-if="index < 4"
              :key="index"
            >
              <ProductCard :data="deal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotDeals: [
        {
          name: "2KVA Inverter",
          description: "Pure sine wave inverter, ups, avr (stabilizer)",
          price: "₦ 162,563",
        },
        {
          name: "5KVA",
          description: "5kva inverter",
          price: "₦ 160,000",
        },
        {
          name: "2KVA Inverter",
          description: "Pure sine wave inverter, ups, avr (stabilizer)",
          price: "₦ 162,563",
        },
        {
          name: "5KVA",
          description: "5kva inverter",
          price: "₦ 160,000",
        },
        {
          name: "2KVA Inverter",
          description: "Pure sine wave inverter, ups, avr (stabilizer)",
          price: "₦ 162,563",
        },
        {
          name: "5KVA",
          description: "5kva inverter",
          price: "₦ 160,000",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.text-head {
  font-weight: 800;
  font-size: 4rem;
  line-height: 69px;
}
.section-pd {
  padding-top: 3rem;
  padding-bottom: 5rem;
}
.card-specta {
  text-align: center;
  background: #cbdfab;
  border-radius: 40px;
  .head {
    font-weight: bold;
    font-size: 42px;
    line-height: 51px;
    color: #255e13;
  }
}
.makeRequest {
  background: #dceac7;
  padding: 66px 0px;
}
@media only screen and (max-width: 768px) {
  .text-head {
    font-size: 2.8rem;
    line-height: 50px;
  }
  .card-specta .head {
    padding: 10px;
  }
  .hide-sm {
    display: none;
  }
  .mb-sm {
    margin-bottom: 32px;
  }
  .margin-non {
    margin: 0px;
  }
  .power-service {
    font-size: 23px;
    img {
      margin: 0;
    }
  }
  .invertersys {
    height: 430px;
  }
}
</style>
