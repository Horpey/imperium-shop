const helperService = {
  name: "helperService",
  formatPrice(price) {
    var formatter = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0
    });
    return formatter.format(price);
  }
};

export default ({ app }, inject) => {
  inject("helperService", helperService);
};
