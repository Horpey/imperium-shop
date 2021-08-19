<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-4">
        <h4 class="text-dark f-bold">Specification</h4>
        <p class="text-dark">
          {{ product.description }}
        </p>
      </div>
      <div class="col-md-4">
        <h4 class="text-dark f-bold">Recommended load</h4>
        <ul class="text-dark">
          <li>Laptop - 3pcs</li>
          <li>Led tv set - 1pcs</li>
          <li>Ceiling fan - 2pcs</li>
          <li>Standing fan - 1pcs</li>
          <li>Fridge (energy-savers) - 1pcs</li>
          <li>Bulb - 8pcs</li>
        </ul>
      </div>
      <div class="col-md-4">
        <h4 class="text-dark f-bold">Delivery Location</h4>

        <ul class="locationList">
          <li
            class="text-dark"
            v-for="(location, index) in product.vendor_location"
            :key="index"
          >
            {{ location }}
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <h4 class="text-dark f-bold">Available stock</h4>
        <p class="text-dark">
          {{ product.stock ? product.stock.quantity_available : "" }} pcs
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style lang="scss" scoped>
.locationList {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto;
  margin-bottom: 1rem;
  li {
    font-size: 1rem;
    margin: 0 1rem;
  }
}
</style>
