// let j = '{"Name":"Krishna","Email":"XYZ","CN":"12345"}';
// let a = JSON.parse(j);
// console.log(a);

// let j = {Name:"Krishna",Email:"XYZ",CN:"12345"};
// let a = JSON.stringify(j);
// alert(a);




//////////tnayin date/////////////

// let date = new Date();
// let d = date.getDay();
// let m = (date.getMonth());
// let y = date.getFullYear();

// if(d<10){
// 	d = "0"+date.getDay();
// }if(m<10){
// 	m = "0"+date.getMonth();
// }
// console.log(d+"/"+m+"/"+y)


// function month(x){
// 	var m = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// 	return m[x.getMonth()];
// }
// console.log(month(new Date("10/6/2021")))



// function age(x){
// 	var date = new Date();
// 	var now = date.getFullYear();
// 	return now-x;
// }
// console.log(age(1998))



// function weekend(x){
// 	let day = x.getDate();
// 	let week = x.getDay();
// 	let short = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// 	if(short[week]=="Sat" || short[week]=="Sun"){
// 		return "hangstyan or";
// 	}else{
// 		return "ashxatanqayin or";
// 	}
// }
// console.log(weekend(new Date("10/6/2021")))


// function hours(x){
// 	let time = x.getHours();
// 	if(time>=12){
// 		return time+"pm"
// 	}else{
// 		return time+"am"
// 	}
// }
// console.log(hours(new Date()));