function updatePrice(v) {
  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }

  let radioDiv = document.getElementById("prodOptions");
  radioDiv.style.display = ((select.value === "1" || select.value === "3") ? "none" : "block");

  if (select.value === "2") {
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
      if (radio.checked) {
        let optionPrice = prices.prodOptions[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });
  }

  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = (select.value === "3" ? "block" : "none");
  
  
  if (select.value === "3") {
    let checkboxes = document.getElementsByName("checkboxes");
    checkboxes.forEach(function (checkboxes) {
      if (checkboxes.checked) {
        let checkboxPrice = prices.prodProperties[checkboxes.value];
        if (checkboxPrice !== undefined) {
          price += checkboxPrice;
        }
      }
    });
  }

  let prodPrice = document.getElementById("result");
  if (v.match(/^(?!(0))\d+$/) === null) {
    prodPrice.innerHTML = "Количество введено некорректно";
  }
  else {
    prodPrice.innerHTML = "<span> Итого: </span> <br>" + v * price + " рублей";
  }

}

function getPrices() {
  return {
    prodTypes: [100, 200, 300],
    prodOptions: {
      option2: 5,
      option3: 10
    },
    prodProperties: {
      check1: 277,
      check2: 133
    }
  };
}




window.addEventListener("DOMContentLoaded", function (event) {

  let radioDiv = document.getElementById("prodOptions");
  radioDiv.style.display = "none";

  let checkboxDiv = document.getElementById("checkboxes");
  checkboxDiv.style.display = "none";

  let v = document.getElementById("count");
  v.addEventListener("input", function (event) {
    updatePrice(v.value);
  });

  let s = document.getElementsByName("prodType");
  let select = s[0];
  select.addEventListener("change", function (event) {
    let target = event.target;
    updatePrice(v.value);
  });

  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function (radio) {
    radio.addEventListener("change", function (event) {
      let r = event.target;
      updatePrice(v.value);
    });
  });

  let checkboxes = document.getElementsByName("checkboxes");
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function (event) {
      let c = event.target;
      updatePrice(v.value);
    });
  });

});
