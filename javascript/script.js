var message="in global";
console.log("global:log"="+message");

function a (){
	var message="inside a";
	console.log("a:"="+message");
}
a();