<template>
  <div class="container pb-4 pt-5" style="border-bottom: 1px solid gainsboro">
    <div class="row">
      <div class="col-7 col-md-6">
        <a-breadcrumb separator=">">
          <a-breadcrumb-item href="/">Shop</a-breadcrumb-item>
          <a-breadcrumb-item href=""> Category </a-breadcrumb-item>
          <a-breadcrumb-item class="text-capitalize">{{
            category
          }}</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div class="col-5 col-md-6">
        <h5 class="mb-0 text-dark text-right" v-if="meta.totalRecords">
          {{ meta.totalRecords }} Items
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["meta", "category"],
};
</script>
