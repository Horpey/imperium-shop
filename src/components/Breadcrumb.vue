<template>
  <div class="container pb-4 pt-5" style="border-bottom: 1px solid gainsboro">
    <div class="row">
      <div class="col-7 col-md-6">
        <ol class="breadcrumb">
          <li><router-link to="/">Shop</router-link></li>
          <li><router-link to="/categories">Category</router-link></li>
          <li class="active text-capitalize">{{ category }}</li>
        </ol>
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
