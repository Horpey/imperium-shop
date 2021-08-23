<template>
  <div>
    <!-- <a-collapse default-active-key="1" :bordered="false">
      <template #expandIcon="props">
        <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
      </template>
      <a-collapse-panel key="1" header="Sort Products" :style="customStyle">
        <div class="my-3 sortRadio">
          <a-radio-group v-model="filterType">
            <a-radio value="available" class="mb-4"
              >Available Now
              <span class="f-bold">2235</span>
            </a-radio>

            <a-radio value="instock" class="mb-4"
              >In stock
              <span class="f-bold">8</span>
            </a-radio>

            <a-radio value="new" class="mb-4">
              New in
              <span class="f-bold">100</span>
            </a-radio>

            <a-radio value="trending" class="mb-4"
              >Trending
              <span class="f-bold">100</span>
            </a-radio>
          </a-radio-group>
        </div>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="Filter by Price" :style="customStyle">
        <div>
          <a-slider :marks="marks" range :default-value="[20, 50]" />
        </div>
      </a-collapse-panel>
    </a-collapse> -->
    <button class="btn btn-sm text-capitalize filterbtn">Filter</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filterType: "",
      marks: {
        0: "₦100",
        100: "₦2,000",
      },
      customStyle:
        "background: #f9f9f9;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden",
    };
  },
};
</script>
