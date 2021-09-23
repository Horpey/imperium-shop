<template>
  <div class="section pt-1 bg-pr-trans">
    <div id="calculator-result" class="container">
      <section class="result-container">
        <h2>Your Result</h2>
        <div class="device-result" v-if="calculationType == 'device-based'">
          <div class="left">
            <div>
              <h3>{{ energyConsumption }}</h3>
              <p>Your energy consumption</p>
            </div>
          </div>
          <div class="right">
            <!-- <img src="@/assets/images/chevron-down.svg" alt="chevron icon" /> -->
            <select name="" @change="onDeviceDurationChange($event)">
              <option value="Weekly">Weekly</option>
              <option value="Monthly" selected>Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
        </div>
        <div class="gen-result" v-else>
          <div class="left">
            <div>
              <h3>₦ {{ totalOperatingCost }}</h3>
              <p>Total operating cost</p>
            </div>
            <div>
              <h3>₦ {{ fuelCost }}</h3>
              <p>Total fueling cost</p>
            </div>
            <div>
              <h3>₦ {{ maintenanceCost }}</h3>
              <p>Total maintenance cost</p>
            </div>
          </div>
          <div class="right">
            <!-- <img src="@/assets/images/chevron-down.svg" alt="chevron icon" /> -->
            <select name="" @change="onGenDurationChange($event)">
              <option value="Weekly">Weekly</option>
              <option value="Monthly" selected>Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
        </div>
        <router-link
          to="/calculator"
          class="restart-calculator font-weight-bold"
        >
          Restart Calculator
        </router-link>

        <div class="mt-5">
          <h2>Suggested Products</h2>
          <Loading v-if="loading" />
          <div class="row">
            <div
              class="col-6 col-md-3"
              v-for="(product, index) in suggestedProduct"
              :key="index"
            >
              <div>
                <ProductCard :data="product" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: {
    Loading,
    ProductCard,
  },
  data() {
    return {
      totalOperatingCost: null,
      energyConsumption: 0,
      energyConsumptionPerMonth: 0,
      energyConsumptionPerWeek: 0,
      energyConsumptionPerYear: 0,
      fuelCost: null,
      fuelCostPerYear: null,
      fuelCostPerWeek: null,
      fuelCostPerMonth: 0,
      maintenanceCost: null,
      monthlyMaintenanceCost: null,
      yearlyMaintenanceCost: null,
      totalMaintenanceCost: null,
      weeklyMaintenanceCost: null,
      calculationType: null,
      totalCost: "",
      suggestedProduct: [],
      shopURL: "https://imperium-shop.netlify.app/",
      contentLoaderText: "Nothing to show",
      show: true,
      loading: true,
    };
  },
  mounted() {
    this.calculationType = localStorage.calculationType;

    if (this.calculationType == "device-based") {
      this.energyConsumption = localStorage.energyConsumptionPerMonth;
      this.energyConsumptionPerMonth = localStorage.energyConsumptionPerMonth;
      this.energyConsumptionPerWeek = localStorage.energyConsumptionPerWeek;
      this.energyConsumptionPerYear = localStorage.energyConsumptionPerYear;

      this.fuelCost =
        this.fuelCostPerYear =
        this.fuelCostPerWeek =
        this.fuelCostPerMonth =
          "Not applicable";
    } else {
      this.fuelCostPerMonth = localStorage.fuelCostPerMonth;
      this.fuelCostPerWeek = localStorage.fuelCostPerWeek;
      this.fuelCostPerYear = localStorage.fuelCostPerYear;

      this.monthlyMaintenanceCost = this.totalCost =
        localStorage.monthlyMaintenanceCost;
      this.yearlyMaintenanceCost = localStorage.yearlyMaintenanceCost;
      this.totalMaintenanceCost = localStorage.totalMaintenanceCost;
      this.weeklyMaintenanceCost = String(
        Math.round(parseInt(this.monthlyMaintenanceCost.replace(/,/g, "")) / 4)
      ).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      this.fuelCost = this.fuelCostPerMonth;
      this.maintenanceCost = this.monthlyMaintenanceCost;

      this.totalOperatingCost = String(
        parseInt(this.fuelCost.replace(/,/g, "")) +
          parseInt(this.maintenanceCost.replace(/,/g, ""))
      ).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    this.getSudggestedProducts();
  },
  methods: {
    goTo(page) {
      this.$router.push(page);
    },

    navigateTo(page) {
      this.$router.push(page);
    },

    fillArray(requiredSize, initialSize) {
      const emptyProductSpace = requiredSize - initialSize;
      const emptyObject = {};
      const emptyProductArray = new Array(emptyProductSpace).fill(emptyObject);
      return emptyProductArray;
    },

    shuffleArray(array) {
      return array
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1]);
    },

    getSudggestedProducts() {
      if (this.calculationType == "device-based") {
        let capacity = parseFloat(
          this.energyConsumptionPerWeek.substring(
            0,
            this.energyConsumptionPerWeek.length - 4
          )
        );
        let category = "bundle";

        let payload = {
          path: `/product?category=${category}&min_capacity=${capacity}`,
        };
        this.$store
          .dispatch("getRequest", payload)
          .then((response) => {
            if (response.data.data.result.length === 0) {
              this.show = false;
              return;
            }
            if (response.data.data.result.length < 4) {
              const fill = this.fillArray(4, response.data.data.result.length);
              this.suggestedProduct = response.data.data.result.concat(fill);
              this.loading = false;
            } else {
              this.suggestedProduct = this.shuffleArray(
                response.data.data.result
              ).slice(-4);
              this.loading = false;
            }
          })
          .catch((err) => {
            if (err.response) {
              this.$toast.info(
                "Product Load",
                err.response.data.message,
                this.$toastPosition
              );
            } else {
              this.$toast.info(
                "Product Load",
                "Unable to load product",
                this.$toastPosition
              );
            }
          });
      } else {
        let suggestedCost = this.totalOperatingCost.replace(/,/g, "") * 12;

        let category = "bundle";

        let payload = {
          path: `/product?category=${category}&min_price=${suggestedCost}`,
        };
        this.$store
          .dispatch("getRequest", payload)
          .then((response) => {
            if (response.data.data.result.length === 0) {
              this.show = false;
              return;
            }
            if (response.data.data.result.length < 4) {
              const fill = this.fillArray(4, response.data.data.result.length);
              this.suggestedProduct = response.data.data.result.concat(fill);
              this.loading = false;
            } else {
              this.suggestedProduct = this.shuffleArray(
                response.data.data.result
              ).slice(-4);
              this.loading = false;
            }
          })
          .catch((err) => {
            if (err.response) {
              this.$toast.info(
                "Product Load",
                err.response.data.message,
                this.$toastPosition
              );
            } else {
              this.$toast.info(
                "Product Load",
                "Unable to load product",
                this.$toastPosition
              );
            }
          });
      }
    },

    onConsumptionPerDurationChange(event) {
      if (event.target.value == "Monthly") {
        this.energyConsumption = this.energyConsumptionPerMonth;
      } else if (event.target.value == "Weekly") {
        this.energyConsumption = this.energyConsumptionPerWeek;
      } else {
        this.energyConsumption = this.energyConsumptionPerYear;
      }
    },

    onGenDurationChange(event) {
      if (event.target.value == "Monthly") {
        this.energyConsumption = this.energyConsumptionPerMonth;
        this.maintenanceCost = this.monthlyMaintenanceCost;
        this.fuelCost = this.fuelCostPerMonth;
      } else if (event.target.value == "Weekly") {
        this.energyConsumption = this.energyConsumptionPerWeek;
        this.maintenanceCost = this.weeklyMaintenanceCost;
        this.fuelCost = this.fuelCostPerWeek;
      } else {
        this.energyConsumption = this.energyConsumptionPerYear;
        this.maintenanceCost = this.yearlyMaintenanceCost;
        this.fuelCost = this.fuelCostPerYear;
      }

      this.totalOperatingCost = String(
        parseInt(this.fuelCost.replace(/,/g, "")) +
          parseInt(this.maintenanceCost.replace(/,/g, ""))
      ).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    onDeviceDurationChange(event) {
      if (event.target.value == "Monthly") {
        this.energyConsumption = this.energyConsumptionPerMonth;
        this.maintenanceCost = this.monthlyMaintenanceCost;
        this.fuelCost = this.fuelCostPerMonth;
      } else if (event.target.value == "Weekly") {
        this.energyConsumption = this.energyConsumptionPerWeek;
        this.maintenanceCost = this.weeklyMaintenanceCost;
        this.fuelCost = this.fuelCostPerWeek;
      } else {
        this.energyConsumption = this.energyConsumptionPerYear;
        this.maintenanceCost = this.yearlyMaintenanceCost;
        this.fuelCost = this.fuelCostPerYear;
      }
    },

    onPaymentDuration(event) {
      if (event.target.value == "Monthly") {
        this.totalCost = this.monthlyMaintenanceCost;
      } else if (event.target.value == "Yearly") {
        this.totalCost = this.yearlyMaintenanceCost;
      }
      // else if(event.target.value == "Payment"){
      //   this.totalCost = "0,00";
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
#calculator-result {
  animation-name: fadeIn;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .result-container {
    margin-top: 4rem;

    h2 {
      font-size: 2.4rem;
      font-weight: bold;
      color: #1d1d1d;
    }

    .device-result {
      display: grid;
      grid-template-columns: 3fr 1fr;
      column-gap: 3rem;
      margin-bottom: 1.6rem;

      @media screen and (max-width: 680px) {
        grid-template-columns: 1fr;
      }

      .left {
        border-radius: 18px;
        background: white;

        div {
          text-align: center;
          padding: 2rem 0;

          h3 {
            font-size: 1.4rem;
            font-weight: bold;
            color: black;
            margin-block-start: 0;
            margin-block-end: 0;
          }

          p {
            color: #00000094;
            margin-top: 0.6rem;
            margin-bottom: 0;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 12px;
            letter-spacing: 1px;
          }
        }
      }

      .right {
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 18px;
        background: white;

        @media screen and (max-width: 680px) {
          padding: 1rem 0;
          margin-top: 1.6rem;
        }

        img {
          position: absolute;
          top: 4.4rem;
          z-index: -10;

          @media screen and (max-width: 680px) {
            top: 2rem;
          }
        }

        select {
          outline: 0;
          border: 0px;
          text-align-last: center;
          font-size: 1.2rem;
        }
      }
    }

    .gen-result {
      display: grid;
      grid-template-columns: 3fr 1fr;
      column-gap: 3rem;
      margin-bottom: 1.6rem;

      @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
      }

      .left {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-radius: 18px;
        background: white;

        @media screen and (max-width: 900px) {
          grid-template-columns: 1fr 1fr;
        }

        div {
          text-align: center;
          padding: 2rem 0;

          h3 {
            font-size: 1.4rem;
            font-weight: bold;
            color: black;
            margin-block-start: 0;
            margin-block-end: 0;
          }

          p {
            color: #00000094;
            margin-top: 0.6rem;
            margin-bottom: 0;
            text-transform: uppercase;
            font-weight: bold;
            font-size: 12px;
            letter-spacing: 1px;
          }

          &:nth-child(2) {
            border-left: 1px solid #1d1d1d1c;
            border-right: 1px solid #1d1d1d1c;

            @media screen and (max-width: 900px) {
              border-right: none;
            }
          }

          &:nth-child(3) {
            @media screen and (max-width: 900px) {
              grid-column-start: 1;
              grid-column-end: 3;
              border-top: solid 1px #1d1d1d;
            }
          }
        }
      }

      .right {
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
        border-radius: 18px;
        background: white;

        @media screen and (max-width: 900px) {
          padding: 1rem 0;
          margin-top: 1.6rem;
        }

        img {
          position: absolute;
          top: 4.4rem;
          z-index: -10;

          @media screen and (max-width: 900px) {
            top: 2rem;
          }
        }

        select {
          outline: 0;
          border: 0px;
          text-align-last: center;
          font-size: 1.2rem;
        }
      }
    }

    .restart-calculator {
      text-decoration: none;
      color: #59a358;
    }
  }

  .products {
    margin-top: 5rem;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
    }
    .products-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border: solid 1px #000000;
      border-right: none;
      border-bottom: none;

      @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 3rem;
      }

      @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
      }

      .product-item {
        display: flex;
        justify-content: center;
        border-right: solid 1px #000000;
        border-bottom: solid 1px black;
        padding-top: 2.125rem;
        cursor: pointer;

        .centered-content {
          width: 85%;

          @media screen and (max-width: 900px) {
            width: 80%;
          }

          animation-name: fadeIn;
          animation-iteration-count: 1;
          animation-timing-function: ease-in-out;
          animation-duration: 1s;
          animation-fill-mode: forwards;

          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .img-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            height: 15rem;
            padding-bottom: 1.8rem;

            @media screen and (max-width: 900px) {
              height: 10rem;
            }

            img {
              width: 60%;
              position: relative;
              object-position: bottom;
              object-fit: contain;
              max-height: 100%;

              @media screen and (max-width: 900px) {
                width: 60%;
              }
            }
          }

          .product-name {
            font-size: 1.1rem;
            font-weight: 500;
            color: #000000;
            margin-top: 1.5rem;
            margin-bottom: 0.2rem;
            overflow: hidden;
          }

          .product-description {
            font-size: 0.9rem;
            color: #000000;
            font-weight: 500;
            margin-bottom: 0.5rem;
            line-height: 1.4rem;
            opacity: 0.8;
            overflow: hidden;
          }

          .price {
            font-size: 1.125rem;
            color: #000000;
            font-weight: 500;
            margin-bottom: 1.4rem;
            line-height: 1.4rem;
          }
        }
      }
    }
  }
}
</style>
