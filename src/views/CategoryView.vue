<template>
  <div>
    <CategoryHeading :category="category" />
    <Breadcrumb id="CategoryView" :category="category" :meta="meta" />
    <CategoryProductListing
      style="min-height: 50vh"
      :loading="loading"
      :pageCount="2"
      :products="products"
    />
    <div class="container mb-5">
      <div class="row">
        <div class="col-md-12">
          <div class="text-center pb-5">
            <Pagination
              @pageChange="handlePageChange"
              :totalRecord="pagination.totalRecords"
              :currentPage="pagination.page"
              :perPage="pagination.per_page"
              :loading="loading"
            />
            <!-- <button
              v-if="moreContentAvailable"
              @click="incrementPage()"
              :disabled="moreLoading"
              class="btn btn-imp-secondary"
            >
              Load more products

              <BtnLoading v-if="moreLoading" class="btn-loading" />
            </button> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <MoreProducts title="RECOMMENDED FOR YOU" :data="[]" /> -->
  </div>
</template>
<script>
import CategoryHeading from "@/components/CategoryHeading.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import CategoryProductListing from "@/components/CategoryProductListing.vue";
import MoreProducts from "@/components/MoreProducts.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    CategoryHeading,
    Breadcrumb,
    CategoryProductListing,
    MoreProducts,
    Pagination,
  },
  data() {
    return {
      loading: true,
      moreLoading: false,
      current_page: 1,
      products: [],
      meta: {},
      pagination: {},
    };
  },
  computed: {
    category() {
      return this.$store.getters.categorySelect;
    },
    moreContentAvailable() {
      if (
        Math.floor(this.meta.totalRecords / this.meta.per_page) >=
        this.current_page
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    category: function () {
      this.products = [];
      this.loading = true;
      this.getProductsbyCategory();
    },
    current_page: function () {
      this.getProductsbyCategory(true);
    },
  },
  mounted() {
    this.getBl();
  },
  methods: {
    incrementPage() {
      this.current_page = this.meta.page++;
    },
    getBl() {
      this.loading = true;
      this.getProductsbyCategory(false);
    },
    handlePageChange(page) {
      this.loading = true;
      document.querySelector("#CategoryView").scrollIntoView();
      this.current_page = page;
    },
    getProductsbyCategory(divLoad) {
      if (divLoad) {
        this.moreLoading = true;
      }

      let categ = this.category;
      if (categ == "all") {
        categ = "";
      }
      let payload = {
        path: `product?category=${categ}&page=${this.current_page}&per_page=12`,
      };
      this.$store
        .dispatch("getRequest", payload)
        .then((resp) => {
          this.loading = false;
          // this.products = this.products.concat(resp.data.data.result);
          this.products = resp.data.data.result;

          this.pagination = resp.data.data;
          this.meta = resp.data.data;
          this.moreLoading = false;
        })
        .catch((err) => {
          this.moreLoading = false;
          this.loading = false;
        });
    },
  },
};
</script>
