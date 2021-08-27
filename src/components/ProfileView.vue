<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-5">
          <h5 class="mb-4">Personal Information</h5>
          <div class="row">
            <div class="col-6">
              <div class="form-group mb-3">
                <label for="">First name</label>
                <input
                  v-model="form.first_name"
                  required
                  placeholder="Enter your first name"
                  class="form-control text-dark"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group mb-3">
                <label for="">Last name</label>
                <input
                  v-model="form.last_name"
                  required
                  placeholder="Enter your last name"
                  class="form-control text-dark"
                />
              </div>
            </div>
          </div>
          <div class="form-group mb-3">
            <label for="">Email address</label>
            <input
              v-model="form.email"
              required
              id="email"
              placeholder="Enter your email"
              type="email"
              class="form-control text-dark"
            />
          </div>
          <div class="form-group mb-3">
            <label for="">Phone number</label>
            <input
              v-model="form.phone_number"
              required
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              type="number"
              maxlength="11"
              placeholder="Enter your phone number"
              class="form-control text-dark"
            />
          </div>
        </div>
        <div class="col-md-5">
          <h5 class="mb-4">Address Information</h5>
          <div class="form-group mb-3">
            <label for="">Street</label>
            <input
              v-model="form.street"
              required
              placeholder="Enter your street address"
              class="form-control text-dark"
            />
          </div>
          <div class="row">
            <div class="col-6">
              <div class="form-group mb-3">
                <label for="">State</label>
                <input
                  v-model="form.state"
                  required
                  placeholder="Enter your state"
                  class="form-control text-dark"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group mb-3">
                <label for="">LGA</label>
                <input
                  v-model="form.lga"
                  required
                  placeholder="Enter your LGA"
                  class="form-control text-dark"
                />
              </div>
            </div>
          </div>
          <div class="form-group mt-3">
            <button
              :disabled="loading"
              class="
                btn btn-imp-secondary
                bg-primary
                btn-icon
                text-secondary
                py-3
                px-5
              "
              type="submit"
            >
              <span>Update profile</span>
              <BtnLoading v-if="loading" class="btn-loading" />
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import ProfileView from "@/components/ProfileView.vue";
import BtnLoading from "@/components/BtnLoading.vue";

export default {
  props: ["customer"],
  components: {
    ProfileView,
    BtnLoading,
  },
  computed: {},
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        lga: "",
        state: "",
        street: "",
      },
      loading: false,
    };
  },
  mounted() {
    let { first_name, last_name } = this.customer;
    this.form.first_name = first_name;
    this.form.last_name = last_name;

    if (this.customer.user) {
      let { email, phone_number } = this.customer.user;
      let { lga, state, street } = this.customer.address;
      this.form.email = email;
      this.form.phone_number = phone_number;
      this.form.lga = lga;
      this.form.state = state;
      this.form.street = street;
    }
  },
  methods: {
    submitForm() {
      this.loading = true;
      let data = this.form;
      let payload = {
        data,
        path: "/customer",
      };
      this.$store
        .dispatch("putRequest", payload)
        .then((resp) => {
          this.loading = false;
          console.log(resp);

          this.$toast.success(
            "Account",
            "Account updated successful!",
            this.$toastPosition
          );
        })
        .catch((err) => {
          if (err.response) {
            this.$toast.info(
              "Account",
              err.response.data.message,
              this.$toastPosition
            );
          } else {
            this.$toast.info(
              "Sign up",
              "Unable to update profile, check the details and try again",
              this.$toastPosition
            );
          }

          this.loading = false;
        });
    },
  },
};
</script>
