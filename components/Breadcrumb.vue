<template>
  <div class="container pb-4 pt-5" style="border-bottom: 1px solid gainsboro">
    <div class="row">
      <div class="col-7 col-md-6">
        <a-breadcrumb separator=">">
          <a-breadcrumb-item>Shop</a-breadcrumb-item>
          <a-breadcrumb-item href=""> Category </a-breadcrumb-item>
          <a-breadcrumb-item>Solar Panel</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div class="col-5 col-md-6">
        <h5 class="mb-0 text-dark text-right">{{ count }} Items</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["count"],
};
</script>
