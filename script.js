//your JS code here. If required.
function callme(){
	return new promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!");
		})
	})
}
callme().then((data)=>{
	const element=document.getElementById("output");
	element.innerText=data;
})