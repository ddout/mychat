import ajax from '../utils/request';
import CryptoJS from 'crypto-js'


// 抛出实例化过后的请求
export const getGPT = (key, data) => {
	return ajax({
		method: 'POST', // 请求方式
		data: JSON.stringify(data), // 数据的转换
		url: 'v1/completions', // 接口的后半部分
		headers: {
			'Authorization': 'Bearer ' + decode(key)
		}
	})
};

function decode(key) {
	try {
		// 解密
		var key = CryptoJS.enc.Utf8.parse(key + '00000000000'); //十六位十六进制数作为密钥
		var iv = CryptoJS.enc.Utf8.parse('1234567812345678'); //十六位十六进制数作为密钥偏移量
		var target = 'N/NmWcUJbPgCuZXXJenXqJIPN8J2rxROnHP/8g7NU1Auq1mPxbXH8+e1A6yNaG+hFfbcFDU/MQHuEEy4vxrsQw==';
		var decrypted = CryptoJS.AES.decrypt(target, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});

		var decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
		return decryptedStr;
	} catch (e) {
		console.log(e)
		return '';
	}



}
