<template>
  <div class="section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-3">
          <div class="text-center">
            <div>
              <img src="/images/svgs/hot-deal.svg" alt="" />
            </div>

            <h4 class="mb-2 ht-deals mt-4">HOT DEALS</h4>
            <p class="text-dark">Power your home with our range of products</p>
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="row">
          <div
            class="col-md-4"
            v-for="(deal, index) in hotDeals"
            v-if="index < 3"
            :key="index"
          >
            <ProductCard :data="deal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["hotDeals"],
};
</script>
