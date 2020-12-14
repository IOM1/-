window.onload = function () {
  var plusBtn = document.getElementById('plus');
  var popup = document.getElementById('plus_plan');
  var submit = document.getElementById('submit');
  var a = 1, b = 1, c = 1, d=1, e=1, f=1,g=1,h=1,i=1,j=1,k=1, l=1, m=1,n=1,o=1,p=1,q=1,r=1,s=1,t=1;
  plusBtn.onclick = function () {
    popup.style.opacity = 1;
    popup.style.zIndex = 1;
  }
  submit.onclick = function () {
    popup.style.opacity = 0;
    popup.style.zIndex = 0;
    var input = document.getElementById('input').value;
    if (a == 1){
      document.getElementById('t01').innerHTML = input;
      a = 0;
    }
    else if(b == 1) {
      document.getElementById('t02').innerHTML = input;
      b = 0;
    }
    else if(c == 1) {
      document.getElementById('t03').innerHTML = input;
      c= 0;
    }
    else if(d == 1) {
      document.getElementById('t04').innerHTML = input;
      d = 0;
    }
    else if(e == 1) {
      document.getElementById('t05').innerHTML = input;
      e = 0;
    }
    else if(f == 1) {
      document.getElementById('t06').innerHTML = input;
      f = 0;
    }
    else if(g == 1) {
      document.getElementById('t07').innerHTML = input;
      g = 0;
    }
    else if(h == 1) {
      document.getElementById('t08').innerHTML = input;
      h = 0;
    }
    else if(i == 1) {
      document.getElementById('t09').innerHTML = input;
      i = 0;
    }
    else if(j == 1) {
      document.getElementById('t10').innerHTML = input;
      j = 0;
    }
    else if(k == 1) {
      document.getElementById('t11').innerHTML = input;
      k = 0;
    }
    else if(l == 1) {
      document.getElementById('t12').innerHTML = input;
      i = 0;
    }
    else if(m == 1) {
      document.getElementById('t13').innerHTML = input;
      m = 0;
    }
    else if(n == 1) {
      document.getElementById('t14').innerHTML = input;
      n = 0;
    }
    else if(o == 1) {
      document.getElementById('t15').innerHTML = input;
      o = 0;
    }
    else if(p == 1) {
      document.getElementById('t16').innerHTML = input;
      p =0;
    }
    else if(q == 1) {
      document.getElementById('t17').innerHTML = input;
      q = 0;
    }
    else if(r == 1) {
      document.getElementById('t18').innerHTML = input;
      r = 0;
    }
    else if(s == 1) {
      document.getElementById('t19').innerHTML = input;
      s = 0;
    }
    else if(t == 20) {
      document.getElementById('t20').innerHTML = input;
      t = 0;
    }
  }
}