export function ajax(type, url='/graphql', val) {
	return new Promise(function (resolve, reject) {
    	const xhr = new XMLHttpRequest();
    	const body = JSON.stringify({'query': val});
			console.log(body);
    	xhr.open(type, url, true);
    	xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.setRequestHeader('Accept', 'application/json');
        xhr.send(body);
        xhr.onreadystatechange = function() {
        	if (xhr.readyState == 4) {
    				resolve(JSON.parse(this.response));
        	};
        	if (this.status != 200) {
        		console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
    				reject(this.status ? this.statusText : 'запрос не удался');
        	//	return;
        	};
        };
    });
}
