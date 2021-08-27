<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-5">
          <h5 class="mb-4">Update your password</h5>
          <div class="form-group mb-3">
            <label for="">New password</label>
            <input
              v-model="form.password"
              required
              type="password"
              class="form-control text-dark"
            />
          </div>
          <div class="form-group mb-3">
            <label for="">Confirm new password</label>
            <input
              v-model="form.confirm_password"
              required
              type="password"
              class="form-control text-dark"
            />
          </div>
          <div class="form-group mt-5">
            <button
              :disabled="
                loading || form.password == '' || form.confirm_password == ''
              "
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
              <span>Update password</span>
              <BtnLoading v-if="loading" class="btn-loading" />
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import BtnLoading from "@/components/BtnLoading.vue";

export default {
  components: {
    BtnLoading,
  },
  computed: {},
  data() {
    return {
      form: {
        password: "",
        confirm_password: "",
      },
      loading: false,
    };
  },
  mounted() {},
  methods: {
    submitForm() {
      if (this.form.password === this.form.confirm_password) {
        this.loading = true;
        let data = {
          password: this.form.password,
        };
        let payload = {
          data,
          path: "/user/change-password",
        };
        this.$store
          .dispatch("postRequest", payload)
          .then((resp) => {
            this.loading = false;

            this.$toast.success(
              "Password update",
              "New password created successful!",
              this.$toastPosition
            );

            setTimeout(() => {
              this.$store.dispatch("logout").then(() => {
                location.href = "/login";
              });
            }, 1000);
          })
          .catch((err) => {
            if (err.response) {
              this.$toast.info(
                "Password update",
                err.response.data.message,
                this.$toastPosition
              );
            } else {
              this.$toast.info(
                "Password update",
                "Unable to change password, check the details and try again",
                this.$toastPosition
              );
            }

            this.loading = false;
          });
      } else {
        this.$toast.info(
          "Password",
          "Password Mismatch, check passowrd",
          this.$toastPosition
        );
      }
    },
  },
};
</script>
