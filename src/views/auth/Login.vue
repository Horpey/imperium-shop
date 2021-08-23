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
                  <router-link class="text-primary" to="/forgot-password"
                    >Forgot password?</router-link
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
                <router-link class="text-primary" to="/sign-up"
                  >Sign Up</router-link
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
import BtnLoading from "@/components/BtnLoading.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  components: { BtnLoading },
  mounted() {},
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
          let user = {
            user: resp.data.data.user,
            customer: resp.data.data.customer,
          };

          token = this.CryptoJS.AES.encrypt(token, this.$passPhrase).toString();

          user = this.CryptoJS.AES.encrypt(
            JSON.stringify(user),
            this.$passPhrase
          ).toString();

          localStorage.setItem("token", token);
          localStorage.setItem("user", user);

          this.$toast.success(
            "Login",
            "Login successful.",
            this.$toastPosition
          );

          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        })
        .catch((err) => {
          if (err.response) {
            this.$toast.info(
              "Login",
              err.response.data.message,
              this.$toastPosition
            );
          } else {
            this.$toast.info(
              "Login",
              "Unable to login, check the details and try again",
              this.$toastPosition
            );
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
