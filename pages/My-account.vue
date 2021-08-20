<template>
  <div class="container">
    <h1>Welcome to your page</h1>
    <span @click="logout">Logout</span>
    <Loading v-if="loading" />
  </div>
</template>
<script>
export default {
  // middleware: "auth",
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login?logout=true");
    },
    getUser() {
      this.loading = true;
      let payload = {
        path: `/cart`,
      };
      this.$store
        .dispatch("getRequest", payload)
        .then((resp) => {
          this.loading = false;
          console.log(resp);
        })
        .catch((err) => {
          this.loading = false;
          if (err.response) {
            this.$notify.error({
              title: "",
              message: err.response.data.message,
              position: "topCenter",
            });
          } else {
            this.$notify.error({
              title: "",
              message: "Unable to load content",
              position: "topCenter",
            });
          }
        });
    },
  },
};
</script>
