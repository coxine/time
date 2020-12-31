setInterval("NowTime()",1000);
function NowTime(){
	//获取年月日
	var time=new Date()
	var y=time.getFullYear(),mo=time.getMonth()+1,d=time.getDate(),h=time.getHours(),m=time.getMinutes(),s=time.getSeconds();
   	//检查是否小于10
   h=check(h);
   m=check(m);
   s=check(s);
   document.getElementById("nowtime").innerHTML=y+"年"+mo+"月"+d+"日  "+h+":"+m+":"+s;
}
 //补位
 function check(i){
	if(i<10){
		i="0"+i;
		}
	return i;
}
