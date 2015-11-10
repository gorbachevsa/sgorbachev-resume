document.getElementById("w").onclick = function(){
var z = document.getElementsByName('q'),s=0;
var iq=Math.random();
var reshenie;
for (var i = 0; i < z.length; i++)
	{	
		if  (document.getElementsByName('q')[i].checked == true) {
			reshenie=i;
		} 
		if  (document.getElementsByName('q')[i].checked == false) {
			s = s+1;
		} 
		if(s==3){
			alert("Выбери свое оружие");
		}
	}
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
          alert("Камень победил!");
        }
        else {
          alert("Бумага победила!");
        }
      }
      else if (choice1 === "Бумага") {
        if (choice2 === "Камень") {
          alert("Бумага победила!");
        }
        else {
          alert("Ножницы победили!");
        }
      }
      else if (choice1 === "Ножницы") {
        if (choice2 === "Бумага") {
          alert("Ножницы победили!");
        }
        else {
          alert("Камень победил!");
		}
      }
    }