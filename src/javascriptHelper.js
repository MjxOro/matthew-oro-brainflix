
export const DateConverter = (unixTime) =>{
	let t = new Date(unixTime);
	let y = t.getFullYear();
	let m = t.getMonth();
	let d = t.getDate();		
	if (d<10){
		d = '0' + d;
	}
	if (m<10){
		m = '0' + m;
	}
	return m + '/' + d + '/' + y;
}

export const ArrayFilterMain = (arr,id) => {
	const filtered = arr.filter(elem=>elem.id===id)
	return filtered[0];
}

export const ArrayFilterList = (arr,id) => {
	if (!id){
		return false
	}
	else{
		const filtered = arr.filter(elem=>elem.id!==id)
		return filtered;
	}
}

export const UrlIdCheck = (url,id) =>{
	const check = url.search(id);
	return check > 0 ? true : false 
}
export const UrlIdConverter = (url,arr) => {
	const temp = url.split('').reverse().join('').split('/',1)
	const urlTransform = temp[0].split('').reverse().join('');
	const Obj = ArrayFilterMain(arr,urlTransform)
	if (!Obj){
		return arr[0].id
	}
	else {
		return Obj.id
	}
}
export function SortTimestamp(a,b){
	if ( a.timestamp < b.timestamp ){
		return -1;
	}
	if ( a.timestamp > b.timestamp ){
		return 1;
	}
}

