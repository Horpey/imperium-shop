<template>
  <div>
    <MainHeader />
    <Calculator />
    <Categories />
    <HotDeals :hotDeals="hotDeals" />
    <PayWithSpecta />
    <CategoryProducts category="SOLAR PANEL" :hotDeals="hotDeals" />
    <CategoryProducts category="INVERTERS" :hotDeals="hotDeals" />
    <MakeRequest />
    <CategoryProducts category="BATTERIES" :hotDeals="hotDeals" />
    <CategoryProducts category="COMPLETE SOLUTIONS" :hotDeals="hotDeals" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotDeals: [
        {
          name: "2KVA Inverter",
          description: "Pure sine wave inverter, ups, avr (stabilizer)",
          price: "₦ 162,563",
        },
        {
          name: "5KVA",
          description: "5kva inverter",
          price: "₦ 160,000",
        },
        {
          name: "2KVA Inverter",
          description: "Pure sine wave inverter, ups, avr (stabilizer)",
          price: "₦ 162,563",
        },
        {
          name: "5KVA",
          description: "5kva inverter",
          price: "₦ 160,000",
        },
        {
          name: "2KVA Inverter",
          description: "Pure sine wave inverter, ups, avr (stabilizer)",
          price: "₦ 162,563",
        },
        {
          name: "5KVA",
          description: "5kva inverter",
          price: "₦ 160,000",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
