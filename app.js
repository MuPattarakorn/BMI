function getBMIProgram() {
  // Get input weight and height from user
  var w = document.getElementById('weight').value;
  var h = document.getElementById('height').value;
  var bmi = w / ((h / 100) ** 2);
  // Calculate BMI
  var totalBMI = "<span>ค่าดัชนีมวลกายของคุณ คือ " + "<b>" + bmi.toFixed(2) + "</b></span>";

  // Display BMI value
  if (bmi < 18.5) {
    document.getElementById('bmi').innerHTML = totalBMI +
      "<h3 class='underweight'>น้ำหนักต่ำกว่าเกณฑ์/ผอม<h3/></b>";
  } else if (bmi >= 18.5 && bmi < 23) {
    document.getElementById('bmi').innerHTML = totalBMI +
      "<h3 class='normal'>น้ำหนักปกติ<h3/>";
  } else if (bmi >= 23 && bmi < 25) {
    document.getElementById('bmi').innerHTML = totalBMI +
      "<h3 class='plump'>น้ำหนักเกิน/ท้วม<h3/>";
  } else if (bmi >= 25 && bmi < 30) {
    document.getElementById('bmi').innerHTML = totalBMI +
      "<h3 class='overweight'>อ้วน<h3/>";
  } else if (bmi >= 30) {
    document.getElementById('bmi').innerHTML = totalBMI +
      "<h3 class='obese'>อ้วนมาก<h3/>";
  }
}

// Tab menu
function openBMI(evt, evtName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("BMI");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab-pink", "");
  }
  document.getElementById(evtName).style.display = "block";
  evt.currentTarget.className += " tab-pink";
}