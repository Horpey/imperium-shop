<template>
  <div>
    <div class="section section-pd bg-pr-trans">
      <div class="page-header">
        <div
          class="
            container
            shape-container
            d-flex
            align-items-center
            text-center-sm
          "
        >
          <div class="col px-0">
            <div class="row align-items-center justify-content-center">
              <div class="col-lg-5">
                <h1 class="text-dark display-1 f-bold text-head mb-3">
                  General Calculation
                </h1>
                <p class="f-16 text-dark mb-0">
                  Enter your energy consumption rate and we will recommend the
                  best renewable energy providers for you.
                </p>
                <div class="btn-wrapper mt-3">
                  <router-link
                    to="/"
                    class="
                      btn btn-imp-secondary
                      bg-primary
                      text-white
                      btn-icon
                      mt-2
                      py-3
                      px-5
                    "
                  >
                    <span class="nav-link-inner--text"
                      >Request Energy Audits</span
                    >
                  </router-link>
                </div>
              </div>
              <div class="col-md-7">
                <div class="text-center">
                  <img
                    class="headerimg"
                    src="/assets/images/svgs/evaluation.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sectionPad">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-7">
                <div class="calHeading">
                  <img
                    class="mr-3"
                    src="/assets/images/svgs/archive-tick.svg"
                    alt="check"
                  />
                  <h2 class="">
                    <span class="text-capitalize">{{ calculation }}</span>
                    Calculation
                  </h2>
                </div>
              </div>
              <div class="col-md-5">
                <div class="text-right">
                  <div class="basedClass">
                    <div
                      @click="switchFormToGeneral(true)"
                      :class="{ active: calculation == 'general' }"
                    >
                      General Based
                    </div>
                    <div
                      @click="switchFormToGeneral(false)"
                      :class="{ active: calculation == 'device' }"
                    >
                      Device Based
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="formView mt-5">
              <div class="row justify-content-center">
                <div class="col-md-10">
                  <div v-if="calculation == 'general'" class="row">
                    <div class="col-md-6">
                      <h5 class="f-semibold text-dark mb-3">
                        Your Calculation
                      </h5>
                      <form @submit.prevent="computeGeneratorPrice()">
                        <div class="form-group calForm">
                          <label class="">Fuel type</label>
                          <select
                            @change="onChangeFuelType($event)"
                            required
                            name=""
                            class="form-control"
                            id=""
                          >
                            <option
                              value=""
                              disabled="disabled"
                              selected="selected"
                            >
                              Fuel type
                            </option>
                            <option value="petrol">Petrol</option>
                            <option value="diesel">Diesel</option>
                          </select>
                        </div>
                        <div class="form-group calForm">
                          <label class="">Whats your generator capacity?</label>
                          <div class="inputDesc">
                            <input
                              v-model="generator.size"
                              required=""
                              class="form-control"
                              type="number"
                            />
                            <span>KVA</span>
                          </div>
                        </div>
                        <div class="form-group calForm">
                          <label class=""
                            >What's your daily generator On-time?
                          </label>
                          <div class="inputDesc">
                            <input
                              v-model="generator.on_time"
                              required=""
                              class="form-control"
                              type="number"
                            />
                            <span>Hrs/Day</span>
                          </div>
                        </div>
                        <!-- <div class="form-group calForm">
                          <label class=""
                            >Percentage loading in gallons/hour?
                          </label>
                          <select
                            v-model="generalCal.load"
                            name=""
                            class="form-control"
                            id=""
                          >
                            <option
                              value=""
                              disabled="disabled"
                              selected="selected"
                            ></option>
                            <option value="25">25%</option>
                            <option value="50">50%</option>
                            <option value="50">75%</option>
                            <option value="50">100%</option>
                          </select>
                        </div> -->
                        <div class="form-group calForm">
                          <label class="">Period of usage in months</label>
                          <input
                            v-model="generator.period_of_usage"
                            required
                            class="form-control"
                            type="number"
                          />
                        </div>
                        <div class="form-group">
                          <button
                            class="
                              btn btn-imp-secondary
                              bg-primary
                              text-white
                              btn-block
                              mt-2
                              py-3
                              px-5
                            "
                          >
                            <span class="nav-link-inner--text">Compute</span>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-6">
                      <div class="maintenn">
                        <h5 class="f-semibold text-dark mb-3">
                          Maintenance Information
                        </h5>
                        <div class="form-group calForm">
                          <label class="">Price of Generator</label>
                          <input
                            readonly
                            v-model="priceOfGenerator"
                            class="form-control disabledd"
                            type="text"
                          />
                        </div>
                        <div class="form-group calForm">
                          <label class="">Monthly Maintenance Cost</label>
                          <input
                            readonly
                            class="form-control disabledd"
                            v-model="monthlyMaintenanceCost"
                            type="text"
                          />
                        </div>
                        <div class="form-group calForm">
                          <label class="">Cost of fuel per litre</label>
                          <input
                            readonly
                            class="form-control disabledd"
                            type="text"
                            v-model="costOfFuelPerLitre"
                          />
                        </div>

                        <button
                          class="
                            btn btn-imp-secondary
                            bg-primary
                            text-white
                            btn-block
                            mt-2
                            py-3
                            px-5
                          "
                          :disabled="generatorCal"
                          v-if="formGeneralIsActive && priceOfGenerator"
                          @click="calculateCostAndEnergyConsumption()"
                        >
                          <span class="nav-link-inner--text">
                            Suggested Product</span
                          >
                          <BtnLoading v-if="generatorCal" class="btn-loading" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div v-else class="row">
                    <div class="col-md-7">
                      <div class="yourCal">
                        <h5 class="f-semibold text-dark mb-3">
                          Your Calculation
                        </h5>
                        <form @submit.prevent="addAppliance()">
                          <div class="form-group calForm">
                            <label class="">Choose Device</label>
                            <select
                              name=""
                              class="form-control"
                              id=""
                              required=""
                              ref="applianceName"
                              @change="onDeviceItemChange($event)"
                            >
                              <option value="" disabled selected>
                                Choose a device
                              </option>
                              <option
                                v-for="(appliance, index) in appliances"
                                :key="index"
                              >
                                {{ appliance.name }}
                              </option>
                            </select>
                          </div>
                          <div class="form-group calForm">
                            <label class="">Power rating</label>
                            <div class="inputDesc">
                              <input
                                type="number"
                                step="any"
                                class="form-control"
                                ref="capacityNum"
                                v-model="capcityOfSelectedDevice"
                                disabled
                                required
                              />
                              <span ref="powerMeasurment">Watt</span>
                            </div>
                          </div>
                          <div class="form-group calForm">
                            <label class="">Quantity</label>
                            <input
                              class="form-control"
                              type="number"
                              ref="quantity"
                              required
                            />
                          </div>
                          <div class="form-group calForm">
                            <label class="">Hours of usage daily</label>
                            <input
                              class="form-control"
                              type="number"
                              ref="dailyUsageHours"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <button
                              class="
                                btn btn-imp-secondary
                                bg-primary
                                text-white
                                btn-block
                                mt-2
                                py-3
                                px-5
                              "
                              ref="buttonAddAppliance"
                            >
                              <span class="nav-link-inner--text">Add</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="maintenn" v-if="!formGeneralIsActive">
                        <h5 class="f-semibold text-dark mb-3">
                          Your appliances
                        </h5>
                        <div
                          class="appliance"
                          v-for="(device, index) in devices"
                          :key="index"
                        >
                          <div>
                            <p class="name">{{ device.name }}</p>
                            <p class="descr">
                              {{ device.quantity }} | {{ device.size }} |
                              {{ device.on_time }}
                              hrs daily
                            </p>
                          </div>
                          <span @click="removeAppliance(index)">⨯</span>
                        </div>
                        <div class="form-group">
                          <button
                            :disabled="generatorCal"
                            class="
                              btn btn-imp-secondary
                              bg-primary
                              text-white
                              btn-block
                              mt-2
                              py-3
                              px-5
                            "
                            @click="calculateCostAndEnergyConsumption()"
                          >
                            <span class="nav-link-inner--text">Proceed</span>
                            <BtnLoading
                              v-if="generatorCal"
                              class="btn-loading"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnLoading from "@/components/BtnLoading.vue";

export default {
  name: "Calculator",
  components: { BtnLoading },
  data() {
    return {
      loading: false,
      generatorCal: false,
      calculation: "general",
      formGeneralIsActive: true,
      fuelType: false,
      costOfFuelPerLitre: "",
      priceOfGenerator: null,
      monthlyMaintenanceCost: null,
      pertrol_per_litre: null,
      diesel_per_litre: null,

      appliance: {
        size: null,
        name: "",
        on_time: 0,
        quantity: 0,
      },

      devices: [],
      appliances: null,
      capcityOfSelectedDevice: null,

      generator: {
        size: null,
        cost_per_litre: null,
        type: "",
        on_time: null,
        // name: "generator",
        // quantity: 1,
        period_of_usage: null,
        load: 0.25,
      },
    };
  },
  mounted() {
    this.getAppliances();
    this.getFuelCostPerLitre();
  },
  watch: {
    fuelType: function () {
      this.computeGeneratorPrice();
    },
  },
  computed: {
    costperlitre() {
      if (this.generalCal.type) {
        console.log(this.generalCal.type);
        if (this.generalCal.type == "petrol") {
          return `₦ ${this.prices.GASOLINE_PER_LITRE} / litre`;
        } else if (this.generalCal.type == "diesel") {
          return `₦ ${this.prices.DIESEL_PER_LITRE} / litre`;
        }
      } else {
        return ``;
      }
    },
  },
  methods: {
    computeGeneratorPrice() {
      const multiplier = this.fuelType === "diesel" ? 90000 : 30000;
      let genPrice = multiplier * this.generator.size;
      this.priceOfGenerator = genPrice.toLocaleString("NGN", {
        style: "currency",
        currency: "NGN",
      });
      this.priceOfGenerator =
        this.priceOfGenerator == "NGN 0.00" ? null : this.priceOfGenerator;
      this.monthlyMaintenanceCost = (0.015 * genPrice).toLocaleString("NGN", {
        style: "currency",
        currency: "NGN",
      });
      this.monthlyMaintenanceCost =
        this.monthlyMaintenanceCost == "NGN 0.00"
          ? null
          : this.monthlyMaintenanceCost;
    },
    getFuelCostPerLitre() {
      let payload = {
        path: `calculation/fuel-prices`,
      };
      this.$store
        .dispatch("getRequest", payload)
        .then((resp) => {
          this.loading = false;
          this.pertrol_per_litre = resp.data.data.GASOLINE_PER_LITRE;
          this.diesel_per_litre = resp.data.data.DIESEL_PER_LITRE;
        })
        .catch((err) => {
          if (err.response) {
            this.$toast.info(
              "Price List",
              err.response.data.message,
              this.$toastPosition
            );
          } else {
            this.$toast.info(
              "Price List",
              "Unable to get fuel price list, please try again",
              this.$toastPosition
            );
          }
          this.loading = false;
        });
    },
    getAppliances() {
      let payload = {
        path: `device`,
      };
      this.$store
        .dispatch("getRequest", payload)
        .then((resp) => {
          this.loading = false;
          this.appliances = resp.data.data;
        })
        .catch((err) => {
          if (err.response) {
            this.$toast.info(
              "Device List",
              err.response.data.message,
              this.$toastPosition
            );
          } else {
            this.$toast.info(
              "Device List",
              "Unable to get all devices, please try again",
              this.$toastPosition
            );
          }
          this.loading = false;
        });
    },
    onDeviceItemChange(event) {
      this.capcityOfSelectedDevice =
        this.appliances[event.target.selectedIndex - 1].rating;
    },

    onChangeFuelType(event) {
      this.fuelType = event.target.value;
      if (this.fuelType === "diesel") {
        this.costOfFuelPerLitre = "₦ " + this.diesel_per_litre + " / litre";
      } else if (this.fuelType === "petrol") {
        this.costOfFuelPerLitre = "₦ " + this.pertrol_per_litre + " / litre";
      } else {
        this.costOfFuelPerLitre = "";
      }
      this.generator.type = this.fuelType === "diesel" ? "diesel" : "gasoline";
    },

    computeGeneratorPrice() {
      const multiplier = this.fuelType === "diesel" ? 90000 : 30000;
      let genPrice = multiplier * this.generator.size;

      this.priceOfGenerator = genPrice.toLocaleString("NGN", {
        style: "currency",
        currency: "NGN",
      });
      this.priceOfGenerator =
        this.priceOfGenerator == "NGN 0.00" ? null : this.priceOfGenerator;

      this.monthlyMaintenanceCost = (0.015 * genPrice).toLocaleString("NGN", {
        style: "currency",
        currency: "NGN",
      });
      this.monthlyMaintenanceCost =
        this.monthlyMaintenanceCost == "NGN 0.00"
          ? null
          : this.monthlyMaintenanceCost;
    },

    clearGeneratorInputField() {
      this.generator.size = null;
      this.generator.on_time = null;
      this.generator.period_of_usage = null;
    },

    clearMaintenanceInfo() {
      this.priceOfGenerator = null;
      this.monthlyMaintenanceCost = null;
      this.costOfFuelPerLitre = "";
    },

    clearApplianceInputFields() {
      this.$refs.applianceName.selectedIndex = 0;
      this.$refs.capacityNum.value = 0;
      this.$refs.powerMeasurment.value = 0;
      this.$refs.quantity.value = 0;
      this.$refs.dailyUsageHours.value = 0;
      this.capcityOfSelectedDevice = null;
    },

    clearAddedAppliance() {
      this.devices = [];
    },

    switchFormToGeneral(val) {
      this.formGeneralIsActive = val;

      if (this.formGeneralIsActive) {
        this.calculation = "general";
        this.clearApplianceInputFields();
        this.clearAddedAppliance();
      } else {
        this.calculation = "device";
        this.clearGeneratorInputField();
        this.clearMaintenanceInfo();
      }
    },

    removeAppliance(index) {
      this.devices.splice(index, 1);
    },

    addAppliance() {
      let appliance = this.$refs.applianceName;
      let name = appliance.options[appliance.selectedIndex].value;
      let size = parseFloat(this.$refs.capacityNum.value);
      let quantity = parseInt(this.$refs.quantity.value);
      let on_time = parseInt(this.$refs.dailyUsageHours.value);
      this.appliance = { size, name, on_time, quantity };
      this.devices.push(this.appliance);
      this.clearApplianceInputFields();
    },

    onDieselPercentageLoadingChange(e) {
      this.generator.load = e.target.value / 100;
    },

    calculateCostAndEnergyConsumption() {
      if (this.formGeneralIsActive) {
        localStorage.calculationType = "genrator-based";

        this.generatorCal = true;

        let payload = {
          data: this.generator,
          path: "/calculation/generator",
        };

        this.$store
          .dispatch("postRequest", payload)
          .then(({ data }) => {
            this.generatorCal = false;
            localStorage.monthlyMaintenanceCost =
              data.data.monthlyMaintenanceCost;
            localStorage.yearlyMaintenanceCost =
              data.data.yearlyMaintenanceCost;
            localStorage.totalMaintenanceCost = data.data.totalMaintenanceCost;

            localStorage.fuelCostPerWeek = data.data.fuelCostPerWeek;
            localStorage.fuelCostPerMonth = data.data.fuelCostPerMonth;
            localStorage.fuelCostPerYear = data.data.fuelCostPerYear;

            this.$router.push("/calculator-result");

            this.$toast.success(
              "Result Generation",
              "Result generated successfully",
              this.$toastPosition
            );
          })
          .catch((err) => {
            if (err.response) {
              this.$toast.info(
                "Result Generation",
                err.response.data.message,
                this.$toastPosition
              );
            } else {
              this.$toast.info(
                "Result Generation",
                "Unable to generate result, check the details and try again",
                this.$toastPosition
              );
            }
            this.generatorCal = false;
          });
      } else {
        if (this.devices.length === 0) {
          this.$toast.info(
            "Info",
            "Please add devices to proceed",
            this.$toastPosition
          );

          return;
        } else {
          localStorage.calculationType = "device-based";
          this.generatorCal = true;

          let payload = {
            data: { devices: this.devices },
            path: "/calculation/device",
          };

          this.$store
            .dispatch("postRequest", payload)
            .then(({ data }) => {
              this.generatorCal = false;
              localStorage.totalDeviceEnergy = data.data.totalDeviceEnergy;
              localStorage.energyConsumptionPerMonth =
                data.data.energyConsumptionPerMonth;
              localStorage.energyConsumptionPerWeek =
                data.data.energyConsumptionPerWeek;
              localStorage.energyConsumptionPerYear =
                data.data.energyConsumptionPerYear;

              this.$router.push("/calculator-result");

              this.$toast.success(
                "Result Generation",
                "Result generated successfully",
                this.$toastPosition
              );
            })
            .catch((err) => {
              if (err.response) {
                this.$toast.info(
                  "Result Generation",
                  err.response.data.message,
                  this.$toastPosition
                );
              } else {
                this.$toast.info(
                  "Result Generation",
                  "Unable to generate result, check the details and try again",
                  this.$toastPosition
                );
              }
              this.generatorCal = false;
            });
        }
      }
    },
  },
};
</script>

<style lang="scss">
.calHeading {
  display: flex;
  h2 {
    font-weight: bold;
    font-size: 32.256px;
    color: #2b2b2b;
    display: inline-block;
    margin-bottom: 0px;
  }
}
.basedClass {
  background: #e0ecce;
  border-radius: 19px;
  display: inline-block;
  div {
    display: inline-block;
    font-weight: 500;
    font-size: 14.9652px;
    color: #255e13;
    padding: 7px 32px;
    line-height: 51px;
    cursor: pointer;
    &.active {
      background-color: #219653;
      border-radius: 19px;
      color: white;
    }
  }
}
.appliance {
  color: black;
  background: #0000000a;
  padding: 16px;
  margin-bottom: 19px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 31px;
    padding: 1px 7px;
    cursor: pointer;
  }
  .name {
    margin: 0;
    font-weight: bold;
  }
  .descr {
    margin: 0;
    font-size: 14px;
    opacity: 0.6;
  }
}
.bg-prp {
  background: #f5fcf2;
}
@media only screen and (max-width: 768px) {
  .headerimg {
    width: 72%;
    padding-top: 60px;
  }
  .basedClass {
    margin-top: 20px;
  }
  .formView {
    margin-top: 0px !important;
    background: transparent;
  }
  .maintenn {
    margin-top: 45px;
  }
  .yourCal {
    padding: 0px;
    border: none;
  }
}
</style>
