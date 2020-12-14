window.onload = function () {
  var weekly = document.getElementById('weekly');
  var weekly_plan = document.getElementById('weekly_plan');
  var plus = document.getElementById('plus');
  var plus_page = document.getElementById('plus_page')
  var submit = document.getElementById('submit');
  var fin = document.getElementById('fin');
  weekly.onclick = function () {
    weekly_plan.style.opacity = 1;
    weekly_plan.style.zIndex = 1;
  }
  plus.onclick = function () {
    plus_page.style.opacity = 1;
    plus_page.style.zIndex = 2;
  }
  submit.onclick = function () {
    var input = document.getElementById('input').value;
    document.getElementById('list0').value = input;
    input = document.getElementById('input2').value;
    plus_page.style.opacity = 0;
    plus_page.style.zIndex = -2;
    document.getElementById('list1').value = input;
  }
  fin.onclick = function () {
    weekly_plan.style.opacity = 0;
    weekly_plan.style.zIndex = -2;
  }
  var month = document.getElementById('month');
  month.onclick = function() {
    console.log("ok");
    weekly_plan.style.opacity = 1;
    weekly_plan.style.zIndex = 1;
  }
  var no_due = document.getElementById('no_due');
  no_due.onclick = function () {
    console.log("ok");
    weekly_plan.style.opacity = 1;
    weekly_plan.style.zIndex = 1;
  }
  var bucketList = document.getElementById('bucketList');
  bucketList.onclick = function () {
    console.log("ok");
    weekly_plan.style.opacity = 1;
    weekly_plan.style.zIndex = 1;
  }
}