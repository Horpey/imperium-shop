<template>
  <div class="formview">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="text-center">
            <h3 class="formheader f-semibold text-dark">Forgot Password</h3>
            <p class="text-dark">
              Enter the email address registered with yout account
            </p>
          </div>
          <form @submit.prevent="submitForm">
            <div class="my-5">
              <div class="form-group mb-3">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  required
                  v-model="email"
                  class="form-control text-dark"
                />
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
                  <span>Reset password</span>
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
      email: "",
      loading: false,
    };
  },

  methods: {
    submitForm() {
      this.loading = true;
      let data = {
        email: this.email,
      };
      let payload = {
        data,
        path: "/user/reset-password",
      };
      this.$store
        .dispatch("authRequest", payload)
        .then((resp) => {
          this.loading = false;
          this.email = "";
          this.$notify.success({
            title: "",
            message: "Password reset link has been sent to your email address",
            position: "topCenter",
          });
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
              message:
                "Unable to send email address, check the details and try again",
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
