import { ajax } from './ajaxModule';

export default class Api {
	constructor(url = 'php/apiNew.php', type = 'POST') {
		this.url = url,
		this.type = type,
		this.methods = {
			addBid: 'dbsetter.addBid',
			getInfo: 'dbgetter.getInfo',
			getBidInfo: 'dbgetter.getBidInfo',
			changeStatus: 'dbsetter.changeStatus',
			getTableMaps: 'dbgetter.getTableMaps',
			checkHash: 'auth.checkHashClient'
		}
	}

	
	static addBid(v) {
		return new Promise((resolve, reject) => {
			ajax(this.type, this.url, this.methods.addBid, v).then(resolve(res)).catch(reject(err));
		})
	}
	getInfo(v) {
		console.log(this);
		return new Promise((resolve, reject) => {
			ajax(this.type, this.url, this.methods.getInfo, v).then(resolve(res)).catch(reject(err));
		})
	}
	static getBidInfo(v) {
		return new Promise((resolve, reject) => {
			ajax(this.type, this.url, this.methods.getBidInfo, v).then(resolve(res)).catch(reject(err));
		})
	}
	static changeStatus(v) {
		return new Promise((resolve, reject) => {
			ajax(this.type, this.url, this.methods.changeStatus, v).then(resolve(res)).catch(reject(err));
		})
	}
	static getTableMaps(v) {
		return new Promise((resolve, reject) => {
			ajax(this.type, this.url, this.methods.getTableMaps, v).then(resolve(res)).catch(reject(err));
		})
	}
	static checkHash(v) {
		return new Promise((resolve, reject) => {
			ajax(this.type, this.url, this.methods.checkHash, v).then(resolve(res)).catch(reject(err));
		})
	}
}
