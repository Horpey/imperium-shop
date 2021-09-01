<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <div class="orderCountView">
          <img src="/assets/images/svgs/cart-green.svg" alt="" />
          <div>
            <h4>{{ orders.totalRecords }}</h4>
            <p>Total order</p>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <ViewItems
          @backtoOrders="viewItemShow = false"
          v-if="viewItemShow"
          :items="viewItem"
        />
        <div v-else>
          <table class="orderTable">
            <tr>
              <th>Date</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Order status</th>
              <th>Delivery address</th>
            </tr>
            <tr
              v-if="!loading"
              v-for="(order, index) in orders.result"
              :key="index"
            >
              <td>{{ $helpers.formatTime(order.created_at) }}</td>
              <td>
                <p @click="previewItems(order)" class="text-primary itemView">
                  {{ order.items.length }} item
                </p>
              </td>
              <td>{{ $helpers.formatPrice(order.total_price) }}</td>
              <td class="text-capitalize">{{ order.status }}</td>
              <td>
                <p>
                  {{ order.shipping_address.street }},
                  {{ order.shipping_address.lga }}
                  {{ order.shipping_address.state }}
                </p>
              </td>
            </tr>
          </table>
          <Loading v-if="loading" />
          <div class="text-center pb-5">
            <Pagination
              @pageChange="handlePageChange"
              :totalRecord="pagination.totalRecords"
              :currentPage="pagination.page"
              :perPage="pagination.per_page"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination.vue";
import Loading from "@/components/Loading.vue";
import ViewItems from "@/components/ViewItems.vue";

export default {
  components: {
    Pagination,
    Loading,
    ViewItems,
  },
  data() {
    return {
      loading: true,
      current_page: 1,
      moreLoading: false,
      orders: {},
      viewItemShow: false,
      viewItem: [],
      pagination: {},
    };
  },
  methods: {
    handlePageChange(page) {
      this.loading = true;
      this.current_page = page;
    },
  },
  watch: {
    current_page: function () {
      this.getProductsbyCategory(true);
    },
  },
  mounted() {
    this.getBl();
  },
  methods: {
    previewItems(order) {
      this.viewItemShow = true;
      this.viewItem = order.items;
    },
    getBl() {
      this.loading = true;
      this.getCustomerOrder(false);
    },
    getCustomerOrder(divLoad) {
      this.loading = true;

      if (divLoad) {
        this.moreLoading = true;
      }

      let payload = {
        path: `order?page=${this.current_page}&per_page=12`,
      };
      this.$store
        .dispatch("getRequest", payload)
        .then((resp) => {
          this.loading = false;
          let { orders } = resp.data.data;
          this.pagination = resp.data.data.orders;
          this.orders = orders;
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
    handlePageChange(page) {
      this.loading = true;
      this.current_page = page;
    },
  },
};
</script>
<style lang="scss" scoped>
.orderCountView {
  background: #f1f1f1;
  border-radius: 20px;
  padding: 13px;
  display: flex;
  div {
    padding-left: 10px;
    h4 {
      font-weight: bold;
      color: #255e13;
      margin: 0px;
    }
    p {
      font-size: 14px;
      margin: 0px;
      color: #121113;
    }
  }
}
.orderTable {
  width: 100%;
  tr {
    th {
      padding: 20px;
      border-bottom: 2px solid #00000030;
    }
    td {
      padding: 20px;
      border-bottom: 1px solid #00000030;
      .itemView {
        margin: 0px;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
