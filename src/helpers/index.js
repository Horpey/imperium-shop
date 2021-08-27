export default {
  formatPrice(price) {
    var formatter = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0
    });
    return formatter.format(price);
  },
  formatTime(time) {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    var days = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
    var d = new Date(time);
    var day = days[d.getDay()];
    var hr = d.getHours();
    var min = d.getMinutes();
    if (min < 10) {
      min = "0" + min;
    }
    var ampm = "am";
    if (hr > 12) {
      hr -= 12;
      ampm = "pm";
    }
    var date = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  }
};
