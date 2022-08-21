export const formatDate=(timeStamp)=>{
	let Date= JSON.stringify(timeStamp);
	let a= Date.substring(0,11);
	let b= Date.substring(12,17);
   return a+' '+b
}
