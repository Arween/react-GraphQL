export function ajax(type, url, f, val) {
	return new Promise(function (resolve, reject) {
    	const xhr = new XMLHttpRequest();
		let hash; 
		if(document.cookie.split(' ').length > 1){
			const cookiemas = document.cookie.split(' ');
			cookiemas.forEach((item) => {
				if(item.split('=')[0] == 'hash') {
					hash = item.split('=')[1];
				}
			})
		} else {
			if(document.cookie.split('=')[0] == 'hash') {
				hash = document.cookie.split('=')[1];
			}
		}
		let v = {};
		if(val) {
			 v = val;
		}
		v.hash = hash;
    	const body = `f=${f}&v=${JSON.stringify(v)}`;
    	xhr.open(type, url, true);
    	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send(body);
        xhr.onreadystatechange = function() {
        	if (xhr.readyState == 4) {
				document.cookie = `hash=${JSON.parse(this.response)[0]}`;
    				resolve(JSON.parse(this.response)[1]);
        	};
        	if (this.status != 200) {
        		console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
    				reject(this.status ? this.statusText : 'запрос не удался');
        	//	return;
        	};
        };
    });
}
