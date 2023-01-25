(function() {
    const decrease = document.getElementById("decrease");
    const reset = document.getElementById("reset");
    const increase = document.getElementById("increase");
    let num = document.getElementById("num");
    let count = 0;

    decrease.addEventListener("click", function() {
        count--;
        num.innerHTML = count;
        checkSign();
    });

    reset.addEventListener("click", function() {
        count = 0;
        num.innerHTML = 0;
        checkSign();
    });

    increase.addEventListener("click", function() {
        count++;
        num.innerHTML = count;
        checkSign();
    })

    function checkSign() {
        if (count < 0) { // im sure theres an easier way
            num.classList.remove("text-green-600", "text-black");
            num.classList.add("text-red-600");
        } else if (count === 0) {
            num.classList.remove("text-red-600", "text-green-600");
            num.classList.add("text-black")
        }
        else {
            num.classList.remove("text-red-600", "text-black");
            num.classList.add("text-green-600")
        } 
    }


})();