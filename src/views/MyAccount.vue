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
  mounted() {},
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>
