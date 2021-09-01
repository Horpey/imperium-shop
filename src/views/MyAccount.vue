<template>
  <div class="container">
    <div class="py-5" style="min-height: 96vh">
      <div class="accountTabs">
        <span
          @click="active = 'account'"
          :class="{ active: active == 'account' }"
          >Account</span
        >
        <span @click="active = 'order'" :class="{ active: active == 'order' }"
          >Order History</span
        >
        <span
          @click="active = 'password'"
          :class="{ active: active == 'password' }"
          >Change Password</span
        >
        <span class="logout" @click="logout()">Logout</span>
      </div>

      <div class="my-5">
        <Loading v-if="loading" />
        <div v-else>
          <ProfileView v-if="active == 'account'" :customer="customer" />
          <OrderHistory v-else-if="active == 'order'" :orders="orders" />
        </div>
        <ChangePassword v-if="active == 'password'" />
      </div>
    </div>
  </div>
</template>
<script>
import ProfileView from "@/components/ProfileView.vue";
import OrderHistory from "@/components/OrderHistory.vue";
import ChangePassword from "@/components/ChangePassword.vue";
import Loading from "@/components/Loading.vue";

export default {
  components: { ProfileView, OrderHistory, ChangePassword, Loading },
  data() {
    return {
      active: "account",
      loading: false,
      orders: {},
      customer: {},
    };
  },

  mounted() {
    this.getCustomerOrder();
  },
  methods: {
    getCustomerOrder() {
      this.loading = true;
      let payload = {
        path: `order?page=1`,
      };
      this.$store
        .dispatch("getRequest", payload)
        .then((resp) => {
          this.loading = false;
          let { orders } = resp.data.data;
          let { customer } = resp.data.data;
          this.orders = orders;
          this.customer = customer;
        })
        .catch((err) => {
          if (err.response) {
            this.$toast.info(
              "Profile data",
              err.response.data.message,
              this.$toastPosition
            );
          } else {
            this.$toast.info(
              "Profile data",
              "Unable to load Profile data",
              this.$toastPosition
            );
          }
          this.loading = false;
        });
    },
    logout() {
      this.$store.dispatch("logout").then(() => {
        location.href = "/login";
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.accountTabs {
  border-bottom: 3px solid gainsboro;
  padding: 16px 0px;
  span {
    font-size: 19px;
    color: #646464;
    padding: 16px 23px;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    &.logout {
      color: red;
      float: right;
      margin-top: -15px;
    }
    &.active {
      color: #255e13;
      font-weight: bold;
      border-bottom: 3px solid #255e13;
    }
  }
}
</style>
