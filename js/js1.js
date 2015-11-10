function monday(){
	var day=new Date();
	var weekday=new Array(7);
	weekday[0]="Воскресенье";
	weekday[1]="Понедельник";
	weekday[2]="Вторник";
	weekday[3]="Среда";
	weekday[4]="Четверг";
	weekday[5]="Пятница";
	weekday[6]="Суббота";
	alert("Сегодня " + weekday[day.getDay()]);
	}
	function data(){
	var day=new Date();
	var month=new Array(11);
	month[0]="января";
	month[1]="февраля";
	month[2]="марта";
	month[3]="апреля";
	month[4]="мая";
	month[5]="июня";
	month[6]="июля";
	month[7]="августа";
	month[8]="сентября";
	month[9]="октября";
	month[10]="ноября";
	month[11]="декабря";
	alert("Сегодня " + day.getDay()+ " " + month[day.getMonth()]+" "+day.getFullYear()+" года, "+"на часах: "+ day.getHours()+":"+day.getMinutes());
	}