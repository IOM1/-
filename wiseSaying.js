window.onload = function () {
  var text = document.getElementById('wisesaying');
  var i = 1;
  text.onclick = function () {
    console.log("ok");
    if(i == 1){
      document.getElementById('saying').innerHTML = "중요한 건 당신이 어떻게 시작했는가가 아니라 어떻게 끝내는가이다.";
      document.getElementById('author').innerHTML = "-앤드류 매튜스-";
      text.style.backgroundImage = "url('./img/01.jpg')";
    }
    if(i == 2){
      document.getElementById('saying').innerHTML = "모든 삶이 정각에 출발하는 것은 아니고 모든 삶이 정각에 도착하는 것도 아니다";
      document.getElementById('author').innerHTML = "-칼 필레머-";
      text.style.backgroundImage = "url('./img/02.jpg')";
    }
    if(i == 3){
      document.getElementById('saying').innerHTML = "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 믿는 대로 될 것이다.";
      document.getElementById('author').innerHTML = "-헨리 포드-";
      text.style.backgroundImage = "url('./img/03.jpg')";
    }
    if(i == 4){
      document.getElementById('saying').innerHTML = "미래는 현재 우리가 무엇을 하는가에 달려 있다 ";
      document.getElementById('author').innerHTML = "-간디-";
      text.style.backgroundImage = "url('./img/04.jpg')";
    }
    if(i == 5){
      document.getElementById('saying').innerHTML = "나는 그대의 영혼속에 깃들어 있는 영웅을 절대 버리지 않기를";
      document.getElementById('author').innerHTML = "-니체, '차라투스트라는 이렇게 말했다.' (중 -";
      text.style.backgroundImage = "url('./img/05.jpg')";
      document.getElementById('author').style.left = '20%';
    }
    if(i == 6){
      document.getElementById('saying').innerHTML = "실패란 넘어지는 것이 아니라, 넘어진 자리에 머무는 것이다.";
      document.getElementById('author').innerHTML = "--";
      text.style.backgroundImage = "url('./img/06.jpg')";
      document.getElementById('author').style.left = '43%';
    }
    if(i == 7){
      document.getElementById('saying').innerHTML = "삶은 순간의 연속이다. 한 순간 한 순간 최선을 다하여 사는 것이 성공하는 것이다";
      document.getElementById('author').innerHTML = "-켄트-";
      text.style.backgroundImage = "url('./img/07.jpg')";
      text.style.color = 'black'
    }
    if(i == 8){
      document.getElementById('saying').innerHTML = "과거는 지나갔고 현재는 추억이되어 어느 한곳에 잘 머물러 있을 것이다. 그러니 후회와 미련을 가지지 않고 앞으로 나아가 주길";
      document.getElementById('author').innerHTML = "-이지민-";
      text.style.backgroundImage = "url('./img/08.png')";
    }
    if( i == 9){
      document.getElementById('saying').innerHTML = "백 권의 책에 쓰인 말보다 한 가지 성실한 마음이 더 크게 사람을 움직인다.";
      document.getElementById('author').innerHTML = "-프랭클린-";
      text.style.backgroundImage = "url('./img/09.jpg')";
      i = 0;
    }
    i++;
  }
  var plusBtn = document.getElementById('plus');
  var popup = document.getElementById('plus_plan');
  var submit = document.getElementById('submit');
  var a = 1, b = 1, c = 1, d=1, e=1, f=1,g=1,h=1,i=1,j=1,k=1, l=1, m=1,n=1,o=1,p=1,q=1,r=1,s=1,t=1;
  plusBtn.onclick = function () {
    popup.style.opacity = 1;
    popup.style.zIndex = 1;
  }
  submit.onclick = function () {
    if (!document.getElementById('input').value){
      alert("내용을 입력해주세요");
    }
    else {
      popup.style.opacity = 0;
      popup.style.zIndex = -5;
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
        c = 0;
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
      else if(t == 1) {
        document.getElementById('t20').innerHTML = input;
        t = 0;
      }
      document.getElementById('input').value = "";
    }
  }

  var del = document.getElementById('del');
  var c01 = document.getElementById('c01');
  var c02 = document.getElementById('c02');
  var c03 = document.getElementById('c03');
  var c04 = document.getElementById('c04');
  var c05 = document.getElementById('c05');
  var c06 = document.getElementById('c06');
  var c07 = document.getElementById('c07');
  var c08 = document.getElementById('c08');
  var c09 = document.getElementById('c09');
  var c10 = document.getElementById('c10');
  var c11 = document.getElementById('c11');
  var c12 = document.getElementById('c12');
  var c13 = document.getElementById('c13');
  var c14 = document.getElementById('c14');
  var c15 = document.getElementById('c15');
  var c16 = document.getElementById('c16');
  var c17 = document.getElementById('c17');
  var c18 = document.getElementById('c18');
  var c19 = document.getElementById('c19');
  var c20 = document.getElementById('c20');
  var okBtn = document.getElementById('ok');
  del.onclick = function () {
    console.log("ok");
    c01.style.opacity = 1;
    c02.style.opacity = 1;
    c03.style.opacity = 1;
    c04.style.opacity = 1;
    c05.style.opacity = 1;
    c06.style.opacity = 1;
    c07.style.opacity = 1;
    c08.style.opacity = 1;
    c09.style.opacity = 1;
    c10.style.opacity = 1;
    c11.style.opacity = 1;
    c12.style.opacity = 1;
    c13.style.opacity = 1;
    c14.style.opacity = 1;
    c15.style.opacity = 1;
    c16.style.opacity = 1;
    c17.style.opacity = 1;
    c18.style.opacity = 1;
    c19.style.opacity = 1;
    c20.style.opacity = 1;
    okBtn.style.opacity = 1;
    okBtn.style.zIndex = 1;
  }
  
  okBtn.onclick = function () {
    if (c01.checked == true){
      document.getElementById('t01').innerHTML ="";
      a = 1;
      c01.checked = false
    }
    if(c02.checked == true) {
      document.getElementById('t02').innerHTML = "";
      b = 1;
      c02.checked = false
    }
    if(c03.checked == true) {
      document.getElementById('t03').innerHTML = "";
      c = 1;
      c03.checked = false
    }
    if(c04.checked == true) {
      document.getElementById('t04').innerHTML = "";
      d = 1;
      c04.checked = false
    }
    if(c05.checked == true) {
      document.getElementById('t05').innerHTML = "";
      e = 1;
      c05.checked = false
    }
    if(c06.checked == true) {
      document.getElementById('t06').innerHTML = "";
      f = 1;
      c06.checked = false
    }
    if(c07.checked == true) {
      document.getElementById('t07').innerHTML = "";
      g = 1;
      c07.checked = false
    }
    if(c08.checked == true) {
      document.getElementById('t08').innerHTML = "";
      h = 1;
      c08.checked = false
    }
    if(c09.checked == true) {
      document.getElementById('t09').innerHTML = "";
      i = 1;
      c09.checked = false
    }
    if(c10.checked == true) {
      document.getElementById('t10').innerHTML = "";
      j = 1;
      c10.checked = false
    }
    if(c11.checked == true) {
      document.getElementById('t11').innerHTML = "";
      k = 1;
      c11.checked = false
    }
    if(c12.checked == true) {
      document.getElementById('t12').innerHTML = "";
      i = 1;
      c12.checked = false
    }
    if(c13.checked == true) {
      document.getElementById('t13').innerHTML = "";
      m = 1;
      c13.checked = false
    }
    if(c14.checked == true) {
      document.getElementById('t14').innerHTML = "";
      n = 1;
      c14.checked = false
    }
    if(c15.checked == true) {
      document.getElementById('t15').innerHTML = "";
      o = 1;
      c15.checked = false
    }
    if(c16.checked == true) {
      document.getElementById('t16').innerHTML = "";
      p = 1;
      c16.checked = false
    }
    if(c17.checked == true) {
      document.getElementById('t17').innerHTML = "";
      q = 1;
      c17.checked = false
    }
    if(c18.checked == true) {
      document.getElementById('t18').innerHTML = "";
      r = 1;
      c18.checked = false
    }
    if(c19.checked == true) {
      document.getElementById('t19').innerHTML = "";
      s = 1;
      c19.checked = false
    }
    if(c20.checked == true) {
      document.getElementById('t20').innerHTML = "";
      t = 1;
      c20.checked = false
    }
    c01.style.opacity = 0;
    c02.style.opacity = 0;
    c03.style.opacity = 0;
    c04.style.opacity = 0;
    c05.style.opacity = 0;
    c06.style.opacity = 0;
    c07.style.opacity = 0;
    c08.style.opacity = 0;
    c09.style.opacity = 0;
    c10.style.opacity = 0;
    c11.style.opacity = 0;
    c12.style.opacity = 0;
    c13.style.opacity = 0;
    c14.style.opacity = 0;
    c15.style.opacity = 0;
    c16.style.opacity = 0;
    c17.style.opacity = 0;
    c18.style.opacity = 0;
    c19.style.opacity = 0;
    c20.style.opacity = 0;
    okBtn.style.opacity = 0;
    okBtn.style.zIndex = -2;
  }
}