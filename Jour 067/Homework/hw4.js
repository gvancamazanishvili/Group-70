// 4) შექმენი 3 <div class="card"></div>.
// getElementsByClassName-ით წამოიღე ყველა card და:
// მხოლოდ პირველს გაუკეთე წითელი border, მეორეს მწვანე, მესამეს ლურჯი.


const divs = document.getElementsByClassName("card");

divs[0].style.border = "2px solid red";
divs[1].style.border = "3px solid green"
divs[2].style.border = "4px solid blue";