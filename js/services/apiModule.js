import { ajax } from './ajaxModule';
let instance;
export default class Api {
	constructor(url = '/graphql', type = 'POST') {
		if(instance) {
			return instance;
		}else {
			
			this.url = url,
			this.type = type,
			instance = this
		}

	}

	
	getAllAuthors() {
		return new Promise((resolve, reject) => {
			const v = '{authors {id firstname lastname posts{text title}}}';
			ajax(this.type, this.url, v).then((res) => resolve(res.data.authors)).catch((err) => reject(err));
		})
	}
}
