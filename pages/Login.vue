<template>
  <div class="formview">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="text-center">
            <p class="w-back mb-0">Welcome Back!</p>
            <h3 class="formheader f-semibold text-dark">
              Login to Your Account
            </h3>
          </div>
          <form @submit.prevent="submitForm">
            <div class="my-5">
              <div class="form-group mb-3">
                <input
                  v-model="email"
                  required
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  class="form-control text-dark"
                />
              </div>
              <div class="form-group mb-3">
                <input
                  required
                  v-model="password"
                  placeholder="Enter your password"
                  type="password"
                  class="form-control text-dark"
                />
                <div class="text-right mt-4">
                  <nuxt-link class="text-primary" to="/forgot-password"
                    >Forgot password?</nuxt-link
                  >
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
                  <span>Login</span>
                  <BtnLoading v-if="loading" class="btn-loading" />
                </button>
              </div>
              <div class="text-center mt-4">
                Dont have an account?
                <nuxt-link class="text-primary" to="/sign-up"
                  >Sign Up</nuxt-link
                >
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
      email: "",
      password: "",
      loading: false,
    };
  },
  mounted() {
    if (this.$route.query.logout) {
      location.href = "/login";
    }
  },
  methods: {
    submitForm() {
      this.loading = true;
      let data = {
        email: this.email,
        password: this.password,
      };
      let payload = {
        data,
        path: "/user/login",
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
