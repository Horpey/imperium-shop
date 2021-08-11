<template>
  <div>
    <CategoryHeading />
    <Breadcrumb :count="2235" />
    <CategoryProductListing :pageCount="2" :products="products" />
    <MoreProducts title="RECOMMENDED FOR YOU" :data="products" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
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
