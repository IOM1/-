window.onload = function () {
  var weekly = document.getElementById('weekly');
  var weekly_plan = document.getElementById('weekly_plan');
  var plus = document.getElementById('plus');
  var plus_page = document.getElementById('plus_page')
  var submit = document.getElementById('submit');
  var fin = document.getElementById('fin');
  var del = document.getElementById('del');

  weekly.onclick = function () {
    weekly_plan.style.opacity = 1;
    weekly_plan.style.zIndex = 1;
  }
  plus.onclick = function () {
    plus_page.style.opacity = 1;
    plus_page.style.zIndex = 2;
  }
  del.onclick = function () {
    
  }
  submit.onclick = function () {
    plus_page.style.opacity = 0;
    plus_page.style.zIndex = -2;
    var title = document.getElementById('input').value;
    var weekPlan = document.getElementById('input2').value;
    var a=1, b=1, c=1, d=1;
    if (a == 1){
      document.getElementById('ti01').innerText = title;
      document.getElementById('w01').innerText = weekPlan;
      a=0;
    }
    else if ( b == 1 ){
      document.getElementById('ti02').innerText = title;
      document.getElementById('w02').innerText = weekPlan;
      b=0;
    }
    else if ( c == 1 ){
      document.getElementById('ti03').innerText = title;
      document.getElementById('w03').innerText = weekPlan;
      c=0;
    }
    else if ( d == 1 ){
      document.getElementById('ti04').innerText = title;
      document.getElementById('w04').innerText = weekPlan;
      d=0;
    }
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