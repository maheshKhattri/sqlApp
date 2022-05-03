"use strict";

function generatePrime(arr) {
  var num = document.getElementById("number").value;

  for (var i = 2; i <= num; i++) {
    let counter = 0;
    for (var j = 2; j <= i; j++) i % j == 0 ? counter++ : false;
    if (counter == 1) arr.push(i);
  }
}

var button = document.getElementById("generate");

button.addEventListener("click", () => {
  var arr = [];
  generatePrime(arr);

  var txt = "";
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    // console.log(typeof division);
    txt+= "<div><span>" + arr[i] + "</span></div>";
  }
  console.log(txt);
  
  document.getElementById("displayResult").innerHTML = txt;
  
  var delet = "<br><button>Delete</button>";
  document.querySelector("#deleteBTn").innerHTML = delet;
  deleteBTn.addEventListener("click", () => {
    document.getElementById("displayResult").innerHTML = "";

    // document.querySelector("#deleteBTn").innerHTML = "";
  });
  var back = "<button>Back</button>";
  document.querySelector("#goBack").innerHTML = back;
});
