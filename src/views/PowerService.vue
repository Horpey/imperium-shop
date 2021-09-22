<template>
  <div>
    <div class="section section-pd bg-pr-trans">
      <div class="page-header">
        <div class="container shape-container d-flex align-items-center">
          <div class="col px-0">
            <div class="row justify-content-center mt-5">
              <div class="col-lg-5">
                <h2 class="text-primary mt-4 display-1 f-bold text-head mb-3">
                  Power as a service
                </h2>
                <p class="f-16 text-dark mb-0">
                  At Imperium, we take care of all your power and energy
                  concerns by empowering your homes, stores and businesses with
                  our clean energy solutions. By selecting our “Power as a
                  Service” option, you are guaranteed clean and reliable power
                  without the burden and hassle of installing, maintaining or
                  even owning a solar/power solution. Begin to enjoy power today
                  at zero upfront cost. You only pay an agreed tariff based on
                  the solution deployed.
                </p>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-6">
                <form @submit.prevent="submitForm()" class="my-5">
                  <div class="row">
                    <div class="form-group contactForm col-md-6">
                      <label>First name</label>
                      <input
                        v-model="first_name"
                        required
                        class="form-control"
                        type="text"
                      />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>Last name</label>
                      <input
                        v-model="last_name"
                        required
                        class="form-control"
                        type="text"
                      />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>Email address</label>
                      <input
                        v-model="email"
                        required
                        class="form-control"
                        type="email"
                      />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>Phone number</label>
                      <input
                        v-model="phone_number"
                        required
                        class="form-control"
                        type="text"
                      />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>Contact preference</label>
                      <select
                        v-model="contact_reference"
                        required="required"
                        class="form-control"
                      >
                        <option
                          value=""
                          selected="selected"
                          disabled="disabled"
                        ></option>
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                        <option value="phone-email">
                          Both Phone and Email
                        </option>
                      </select>
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>Contact Date</label>
                      <input
                        v-model="contact_date"
                        required
                        class="form-control"
                        type="date"
                      />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>House Number</label>
                      <input
                        v-model="address.house_number"
                        required
                        class="form-control"
                        type="text"
                      />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>Street Number</label>
                      <input
                        v-model="address.street"
                        required
                        class="form-control"
                        type="text"
                      />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>LGA</label>
                      <input
                        v-model="address.lga"
                        required
                        class="form-control"
                        type="text"
                      />
                    </div>
                    <div class="form-group contactForm col-md-6">
                      <label>State</label>
                      <select
                        v-model="address.state"
                        name="state"
                        required="required"
                        class="form-control"
                      >
                        <option
                          value=""
                          selected="selected"
                          disabled="disabled"
                        ></option>
                        <option value="Abuja FCT">Abuja FCT</option>
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross River">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Edo">Edo</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="Enugu">Enugu</option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nassarawa">Nassarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                        <option value="Zamfara">Zamfara</option>
                        <option value="Outside Nigeria">Outside Nigeria</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <button
                      :disabled="loading"
                      class="
                        btn-block btn btn-imp-secondary
                        bg-dark
                        text-white
                        mt-5
                        py-3
                        px-5
                      "
                      type="submit"
                    >
                      <span class="nav-link-inner--text">Send Request</span>
                      <BtnLoading v-if="loading" class="btn-loading" />
                    </button>
                    <p class="text-center my-3">
                      By clicking the button, you agree to be contacted by the
                      Imperium team.
                    </p>
                  </div>
                </form>
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
  components: { BtnLoading },
  data() {
    return {
      loading: false,
      email: "",
      phone_number: "",
      contact_reference: "",
      contact_date: "",
      address: {
        house_number: "",
        street: "",
        lga: "",
        state: "",
      },
      first_name: "",
      last_name: "",
    };
  },
  methods: {
    submitForm() {
      this.loading = true;
      let data = {
        email: this.email,
        phone_number: this.phone_number,
        contact_reference: this.contact_reference,
        contact_date: this.contact_date,
        address: this.address,
        first_name: this.first_name,
        last_name: this.last_name,
      };
      let payload = {
        data,
        path: "/power",
      };
      this.$store
        .dispatch("postRequest", payload)
        .then((resp) => {
          this.loading = false;
          this.email = "";
          this.phone_number = "";
          this.contact_reference = "";
          this.contact_date = "";
          this.address = "";
          this.first_name = "";
          this.last_name = "";

          this.$toast.success(
            "Request Submit",
            "Your Request has been sent successfully",
            this.$toastPosition
          );
        })
        .catch((err) => {
          if (err.response) {
            this.$toast.info(
              "Request Submit",
              err.response.data.message,
              this.$toastPosition
            );
          } else {
            this.$toast.info(
              "Request Submit",
              "Unable to submit request, check the details and try again",
              this.$toastPosition
            );
          }
          this.loading = false;
        });
    },
  },
};
</script>
<style lang="scss">
#terms-and-conditions {
  color: black;
  h3 {
    color: #219653;
    opacity: 0.8;
    font-weight: bold;
  }
  h4 {
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
}
#terms-and-conditions .details table {
  width: 100%;
  font-size: 1.1rem;
  border-collapse: collapse;
  margin-bottom: 2rem;
  th {
    font-weight: 600;
  }
}
#terms-and-conditions .details table td,
#terms-and-conditions .details table th {
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
  padding-left: 2rem;
}
.contactForm {
  input,
  textarea,
  select {
    border: 1px solid #219653;
    border-radius: 15px;
    color: black;
    &:hover,
    &:focus {
      color: black;
    }
  }
}
.locateInfo {
  background-color: #fff7d6;
  background-image: url("/assets/images/svgs/locateInfobg.svg");
  background-position: center;
  background-size: cover;
  border-radius: 30px;
  padding: 50px 0px;

  div.locateDiv {
    text-align: center;
    border-right: 1px solid #219653 !important;
    min-height: 156px;
    &.last {
      border: none !important;
    }
    img {
      margin: 20px 0px;
    }
    p {
      font-size: 18px;
      text-align: center;
      color: #202020;
    }
  }
}
@media only screen and (max-width: 768px) {
  .contactbannerimg {
    width: 80%;
  }
  .locateInfo {
    div.locateDiv {
      border: none !important;
    }
  }
}
</style>
