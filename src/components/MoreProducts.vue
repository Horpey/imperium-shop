<template>
  <div class="container">
    <div style="margin: 100px 0px">
      <h3 class="rec-heading text-center mb-5">{{ title }}</h3>
      <Loading v-if="loading" />
      <div class="row">
        <div
          class="col-md-3"
          v-for="(deal, index) in data"
          v-if="index < 8"
          :key="index"
        >
          <ProductCard :data="deal" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "data", "loading"],
};
</script>
