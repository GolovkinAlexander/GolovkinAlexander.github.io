window.addEventListener("DOMContentLoaded", function (event)
{
    console.log("DOM fully loaded and parsed");

    function calc()
    {
        let price = document.getElementById("price").value;
        let count = document.getElementById("count").value;
        let r = document.getElementById("result");
        
        
        let onlydigit=/^(?!(0))\d+$/;
        if(price.match(onlydigit)===null || count.match(onlydigit)===null)
        {
          alert("Цена и количество должны быть положительными числами\n(Без незначащих 0)");
        }
        else
        {
          r.innerHTML = parseFloat(price) * parseFloat(count);
        }
      }

    let c = document.getElementById("my-button");
    c.addEventListener("click", calc);
    return false;
});
