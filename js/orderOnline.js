const foodArr = Array(100);
let count = 0;
let cartOpened = false;
var ul;
// var r = document.querySelector(":root");
// var rs = getComputedStyle(r);
let goToCartText;

$(document).ready(function () {
  $("#cartPopup").hide();
  ul = document.getElementById("cartUL");
});

$(".addButton").click(function () {
  foodArr[count] = $(this).parent().children("span").children("span").text();
  count++;
  console.log("Food arr is " + foodArr);
  $("#cartPopup").hide();
  $("#goToCartButton").text("Go to Cart(" + count + ")");
});

$("#goToCartButton").click(function () {
  if (cartOpened == false) {
    $("#cartPopup").show();

    $("#goToCartButton").text("Close Cart");
    foodArr.forEach((item) => {
      var li = document.createElement("li");
      li.innerHTML = item;
      ul.append(li);
    });
    cartOpened = true;
  } else {
    cartOpened = false;
    $("#cartPopup").hide();
    ul.innerHTML = "";
    console.log(goToCartText);
    $("#goToCartButton").text("Go to Cart.");
  }
});

$("#orderCompleteButtonFinal").click(function () {
  $("#cartPopup").hide();
  alert("Order placed successfully");
});
