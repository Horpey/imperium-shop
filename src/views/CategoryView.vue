<template>
  <div>
    <CategoryHeading :category="category" />
    <Breadcrumb :category="category" :meta="meta" />
    <CategoryProductListing
      :loading="loading"
      :pageCount="2"
      :products="products"
    />
    <div class="container mb-5" v-if="!loading">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <div class="text-center pb-5">
            <button
              v-if="moreContentAvailable"
              @click="incrementPage()"
              :disabled="moreLoading"
              class="btn btn-imp-secondary"
            >
              Load more products
              <BtnLoading v-if="moreLoading" class="btn-loading" />
            </button>
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
import BtnLoading from "@/components/BtnLoading.vue";

export default {
  components: {
    CategoryHeading,
    Breadcrumb,
    CategoryProductListing,
    MoreProducts,
    BtnLoading,
  },
  data() {
    return {
      loading: true,
      moreLoading: false,
      current_page: 1,
      products: [],
      meta: {},
    };
  },
  computed: {
    category() {
      return this.$store.getters.categorySelect;
    },
    moreContentAvailable() {
      if (
        Math.ceil(this.meta.totalRecords / this.meta.per_page) >=
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
    getProductsbyCategory(divLoad) {
      if (divLoad) {
        this.moreLoading = true;
      }

      let categ = this.category;
      if (categ == "all") {
        categ = "";
      }
      let payload = {
        path: `product?category=${categ}&page=${this.current_page}&per_page=9`,
      };
      this.$store
        .dispatch("getRequest", payload)
        .then((resp) => {
          this.loading = false;
          this.products = this.products.concat(resp.data.data.result);
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
