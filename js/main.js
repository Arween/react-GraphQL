
<script>
	var bu = document.getElementById('id');
	console.log(bu);

	bu.addEventListener('click', function(e) {
		console.log(1);
		var str = '{author(firstname: "Giuseppe") {firstname lastname posts {text author {firstname	lastname }}}}';
		console.log(str);
		ajax('POST', 'localhost:3000/graphiql', str).then(function(res) {
			console.log(res);
		});
	});


function ajax(type, url, val) {

	console.log(2);
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            let v = {};
            if(val) {
                v = val;
            }
            console.log(JSON.stringify(v));
            xhr.open(type, url, true);
//            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(val);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if(this.response) {
                        resolve(JSON.parse(this.response));
                    } else {
                        resolve();
                    }
                };
                if (this.status != 200) {
                    console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
                    reject(this.status ? this.statusText : 'запрос не удался');
                };
            };
        });
    };

</script>
