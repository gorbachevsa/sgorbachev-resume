
document.getElementById("w").onclick = function(){
var z = document.getElementsByName('q'),s=0;
var iq=Math.random();
var reshenie;

var a=0;
var b=0;


for (var i = 0; i < z.length; i++)
	{	
		if  (document.getElementsByName('q')[i].checked == true) {
			reshenie=i;
		} 
		if  (document.getElementsByName('q')[i].checked == false) {
			s = s+1;
		} 
	}
	if(s==3){
			alert("Выбери свое оружие");
		}
	if(s!==3){
	if(reshenie==0){
		reshenie="Камень";
		}
	else if(reshenie==1){
		reshenie="Ножницы"
	}
	else{
		reshenie="Бумага"
	}
	alert("Выбор: " + reshenie);
  
	if (iq < 0.34) {
      iq = "Камень";
    }
    else if (iq <= 0.67) {
      iq = "Ножницы";
    }
    else {
      iq = "Бумага";
    }
    alert("Компьютер: " + iq);

var choice1 = reshenie;
var choice2 = iq;
      if (choice1 === choice2) {
          alert("Никто не победил!");
      }
      else if (choice1 === "Камень") {
        if (choice2 === "Ножницы") {
          alert("Поздравляю вы выйграли.Камень победил!");
		  a++;
		  
        }
        else {
          alert("К сожалению вы проиграли.Бумага победила!");
		  b++;
        }
      }
      else if (choice1 === "Бумага") {
        if (choice2 === "Камень") {
          alert("Поздравляю вы выйграли.Бумага победила!");
		  a++;
        }
        else {
          alert("К сожалению вы проиграли.Ножницы победили!");
		  b++;
        }
      }
      else if (choice1 === "Ножницы") {
        if (choice2 === "Бумага") {
          alert("Поздравляю вы выйграли.Ножницы победили!");
		  a++;
        }
        else {
          alert("К сожалению вы проиграли.Камень победил!");
		  b++;
		}
      }
	 
    var chislo1 = document.getElementById("schetChel");
	var znach1=Number(chislo1.innerHTML);
	chislo1.innerHTML=znach1+a;

	
	var chislo2 = document.getElementById("schetKomp");
	var znach2=Number(chislo2.innerHTML);
	chislo2.innerHTML=b+znach2;
	
	}
}
	
	