import { ajax } from './ajaxModule';
let instance;
export default class Api {
	constructor(url = '/graphql', type = 'POST') {
		if(instance) {
			return instance;
		}else {
			
			console.log('Новый апи ')
			this.url = url,
			this.type = type,
			instance = this
		}

	}

	
	getAllAuthors() {
		return new Promise((resolve, reject) => {
			const v = '{authors {id firstname lastname posts{text title}}}';
			console.log(this.type);
			ajax(this.type, this.url, v).then((res) => resolve(res)).catch((err) => reject(err));
		})
	}
}
