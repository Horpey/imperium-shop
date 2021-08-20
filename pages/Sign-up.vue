<template>
  <div class="formview">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="text-center">
            <p class="w-back mb-0">Welcome to Imperium!</p>
            <h3 class="formheader f-semibold text-dark">Create account</h3>
          </div>
          <form @submit.prevent="submitForm">
            <div class="my-5">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <input
                      v-model="form.first_name"
                      placeholder="First name"
                      type="text"
                      class="form-control text-dark"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <input
                      v-model="form.last_name"
                      placeholder="Last name"
                      type="text"
                      class="form-control text-dark"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <input
                      v-model="form.email"
                      placeholder="Email address"
                      type="email"
                      class="form-control text-dark"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <input
                      placeholder="Phone number"
                      v-model="form.phone_number"
                      class="form-control text-dark"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <input
                      placeholder="Password"
                      v-model="form.password"
                      type="password"
                      class="form-control text-dark"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <input
                      placeholder="Confirm Password"
                      type="password"
                      v-model="form.confirm_password"
                      class="form-control text-dark"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group mb-3">
                    <input
                      v-model="form.address.street"
                      placeholder="Street"
                      class="form-control text-dark"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-6">
                      <div class="form-group mb-3">
                        <input
                          v-model="form.address.lga"
                          placeholder="LGA"
                          class="form-control text-dark"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group mb-3">
                        <input
                          v-model="form.address.state"
                          placeholder="State"
                          class="form-control text-dark"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group text-center mt-5">
                <button
                  :disabled="loading"
                  class="
                    btn btn-imp-secondary
                    bg-primary
                    btn-icon
                    text-secondary
                    py-3
                    px-5
                    btn-block
                  "
                  type="submit"
                >
                  <span>Create account</span>
                  <BtnLoading v-if="loading" class="btn-loading" />
                </button>
              </div>
              <div class="text-center mt-4">
                Already have an account?
                <nuxt-link class="text-primary" to="/login">Login</nuxt-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        email: "hellodfjsdi@gmail.com",
        first_name: "kksfdk",
        last_name: "kkfsf",
        password: "12345678",
        confirm_password: "12345678",
        phone_number: "08118273823",
        address: {
          lga: "Surule",
          state: "Lagos",
          street: "8 Hughes",
        },
      },
    };
  },

  methods: {
    submitForm() {
      if (this.password === this.confirm_password) {
        this.loading = true;
        let data = this.form;
        let payload = {
          data,
          path: "/customer",
        };
        this.$store
          .dispatch("authRequest", payload)
          .then((resp) => {
            this.loading = false;
            let token = resp.data.data.token;
            let user = resp.data.data.user;
            let customer = resp.data.data.customer;

            this.$store.commit("set_user", user);
            this.$store.commit("set_token", token);
            this.$store.commit("set_customer", customer);
            this.$notify.success({
              title: "",
              message: "New account created successful!",
              position: "topCenter",
            });

            location.href = "/categories/all";
          })
          .catch((err) => {
            if (err.response) {
              this.$notify.error({
                title: "",
                message: err.response.data.message,
                position: "topCenter",
              });
            } else {
              this.$notify.error({
                title: "",
                message: "Unable to login, check the details and try again",
                position: "topCenter",
              });
            }

            this.loading = false;
          });
      } else {
        this.$notify.error({
          title: "",
          message: "Password Mismatch, check passowrd",
          position: "topCenter",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.w-back {
  font-weight: bold;
  font-size: 16px;
  line-height: 52px;
  color: #255e13;
}
.formheader f-bold {
  font-size: 24px;
  color: #121113;
}
.formview {
  padding: 55px 0px;
  min-height: 90vh;
}
</style>
