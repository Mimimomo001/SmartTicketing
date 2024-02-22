function scrollToSection() {
    var element = document.getElementById("ticket_booking");
    element.scrollIntoView();
}

function setElementValueById(elementId, value) {
    document.getElementById(elementId).innerText = value;
  }

  function priceCounter(id, value) {
    const priceCounter = document.getElementById(id).innerText;
    const priceConvert = parseInt(priceCounter);
    const final_count = priceConvert + parseInt(value);
    setElementValueById(id, final_count);
  }
  
  function getInputValueById(elementId) {
    const input = document.getElementById(elementId);
    const inputValue = input.value;
    return inputValue;
  }
  const TotalSeat = document.querySelectorAll('#button_count');
  let c1 = 0;
  let c2 = 40;
  for(const increaseNumseat of TotalSeat){
      increaseNumseat.addEventListener('click', function(e){
          if(c1 <= 3){
              c1 = c1 + 1;
              c2 = c2 - 1
              priceCounter(
                  "total", document.getElementById("seat_price").innerText
              );
          const selectedArea = e.target.innerText;
          const price = document.getElementById("seat_price").innerText;
          const seats = document.getElementById(
          "seat_selected"
        );
        const dividers = document.createElement("dividers");
        const numSeat = document.createElement("h4");
        numSeat.innerText = selectedArea;
        const classSeat = document.createElement("h4");
        classSeat.innerText = "Economy";
        const priceSeat = document.createElement("h4");
        priceSeat.innerText = price;
        dividers.appendChild(numSeat);
        dividers.appendChild(classSeat);
        dividers.appendChild(priceSeat);
        dividers.className = "flex justify-between w-full text-left mb-4";
        seats.appendChild(dividers);
        e.target.classList.add("text-white");
        e.target.classList.add("bg-green-500");
        e.target.classList.add("pointer-events-none");
      }
      else {
          alert("You can only select 4 seats at a time!");
        }
  
        setElementValueById("seat_num", c1);
        setElementValueById("seat_counter", c2);
        grandpriceCounter();
        const busSeat = parseInt(document.getElementById("seat_num").innerText);
        if (busSeat > 3) {
          document.getElementById("apply").removeAttribute("disabled");
        } else {
          document.getElementById("apply").setAttribute("disabled", true);
        }
  
        document.getElementById("phn").addEventListener(function(event){
          const text = event.target.value.toString().length;
          const button = document.getElementById("next");
          if (text > 0 && busSeat > 0) {
            button.removeAttribute("disabled");
          } else {
            button.setAttribute("disabled", true);
          }
      });
  
      });
  }
  function grandpriceCounter() {
    const priceCounter = document.getElementById("total").innerText;
    const priceConvert = parseInt(priceCounter);
    setElementValueById("final", priceConvert);
  }

  const button = document.getElementById("apply");
  button.addEventListener("click", function(){
    const inputcup =  getInputValueById("cup");
    if(inputcup === "NEW15"){
    const grandTotal = document.getElementById("total").innerText;
    const priceConvert = parseInt(grandTotal);
    const discount = priceConvert * 0.15;
    const GrandpriceCounter = priceConvert - discount;
    document.getElementById("disc").innerText = discount;
    setElementValueById("final", GrandpriceCounter);
    document.getElementById("hidden").className = "hidden";
    document.getElementById("discount_area").classList.remove("hidden");
    }
    else if(inputcup ==="Couple20"){
        const grandTotal = document.getElementById("total").innerText;
    const priceConvert = parseInt(grandTotal);
    const discount = priceConvert * 0.2;
    const GrandpriceCounter = priceConvert - discount;
    document.getElementById("disc").innerText = discount;
    setElementValueById("final", GrandpriceCounter);
    document.getElementById("hidden").className = "hidden";
    document.getElementById("discount_area").classList.remove("hidden");
    }
    else{
        alert("Enter the correct coupon code!");
    }
  });