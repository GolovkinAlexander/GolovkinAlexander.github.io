window.addEventListener("DOMContentLoaded", function (event)
{
    console.log("DOM fully loaded and parsed");
    function calc()
    {
        let price = document.getElementById("price").value;
        let count = document.getElementById("count").value;
        let r = document.getElementById("result");

        if(price === "" || count === "")
        {
            alert("Все поля должны быть заполнены числами");
        }
        else
            if (price<0 || count <0)
            {alert("Цена и количество не могут быть отрицательными";}
            else      
              {r.innerHTML = parseFloat(price)*parseFloat(count) + " rub";}
    }
    let c = document.getElementById("my-button");
    c.addEventListener("click", calc);
    return false;
});