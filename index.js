function luhn(number) {
  number = number
    .toString() //Convert to Number to String
    .split("") //Convert String to Array
    .reverse(); //Reverse

  var sum = 0;

  for (var i = 0; i < number.length; i++) {
    if (i % 2 == 0) {
      sum += Number(number[i]);
    } else {
      if (Number(number[i]) * 2 > 9) {
        sum += Number(number[i]) * 2 - 9;
      } else {
        sum += Number(number[i]) * 2;
      }
    }
  }

  if (sum % 10 == 0) {
    return true;
  } else {
    return false;
  }
}

var MII = [
  "ISO/TC 68 and other industry assignments",
  "Airlines",
  "Airlines, financial and other future industry assignments",
  "Travel and entertainment",
  "Banking and financial",
  "Banking and financial",
  "Merchandising and banking/financial",
  "Petroleum and other future industry assignments",
  "Healthcare, telecommunications and other future industry assignments",
  "For assignment by national standards bodies"
];

document.getElementById("txtNumber").oninput = function() {
  if (luhn(this.value)) {
    text.innerHTML = "លេខ" + this.value + "អាចប្រើសម្រាប់បង្កើតកាតបាន។<br>";
    text.innerHTML += "<b>Major Industry Identifier: </b>" + MII[this.value[0]];

    text.innerHTML += "<br/>";

    text.innerHTML += "<b>Issuer Identifier Number: </b>";
    if (this.value[0] == "4") {
      text.innerHTML += "Visa Card";
    } else if (this.value.slice(0, 2) >= 51 && this.value.slice(0, 2) <= 55) {
      text.innerHTML += "Master Card";
    } else if (this.value.slice(0, 2) == 34 || this.value.slice(0, 2) == 37) {
      text.innerHTML += "American Express";
    } else {
      text.innerHTML += "None";
    }
    text.innerHTML += "<br/>";
    text.innerHTML +=
      "<b>Personal Account Number: </b>" + this.value.slice(-8, -1) + "<br/>";
    text.innerHTML += "<b>CheckSum: </b>" + this.value.slice(-1);
  } else {
    text.innerHTML = "លេខ" + this.value + "មិនអាចប្រើសម្រាប់បង្កើតកាតបានទេ។";
  }
};
