window.addEventListener('DOMContentLoaded', function (event) 
{
    console.log("DOM fully loaded and parsed");
    
    function calc(e) 
    {
        e.preventDefault();
        let price = document.getElementById("price").value;
        let count = document.getElementById("count").value;
        let r = document.getElementById("result");

        if(price == "" || count == "")
        {
            alert("Все поля должны быть заполнены")
        }
        else
            if(isNaN(parseInt(price)) || isNaN(parseInt(count)))
                alert("Вводить можно только числа")
            else
                r.innerHTML = parseInt(price)*parseInt(count) + " rub";
    }
    let c = document.getElementById("my-button");
    c.addEventListener("click", calc);
    return false;
});
