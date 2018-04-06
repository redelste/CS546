function isPalindrome(){
    var isItPalindrome = inputPally.value;
    var og = isItPalindrome.toLowerCase().replace(/[^\w]|_/g, "");
    var reverse = isItPalindrome.toLowerCase().replace(/[^\w]|_/g, "").split("").reverse().join("");


    if (og == reverse){
      var newItem = document.createElement("li")
      newItem.setAttribute("class", "succ")
      newItem.innerHTML = og;
      var palindromeList = document.getElementById("listyboy")
      palindromeList.appendChild(newItem)
    }

    else{
      var newItem = document.createElement("li")
      newItem.setAttribute("class", "fail")
      newItem.innerHTML= og;
      var palindromeList = document.getElementById("listyboy")
      palindromeList.appendChild(newItem)
    }
  }

window.onload = ()=> {
    submitbutton.addEventListener("submit", (e) =>{
      e.preventDefault();
      isPalindrome();
    })
  }
