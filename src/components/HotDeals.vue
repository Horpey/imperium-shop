<template>
  <div class="section bg-lightt pb-3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-3">
          <div class="text-center">
            <div>
              <img src="/assets/images/svgs/hot-deal.svg" alt="" />
            </div>

            <h4 class="mb-2 ht-deals mt-4">Hot Deals</h4>
            <p class="text-dark">Power your home with our range of products</p>
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="row">
          <div
            class="col-md-3"
            v-for="(deal, index) in hotDeals"
            v-if="index < 4"
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
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { ProductCard },
  props: ["hotDeals"],
};
</script>
