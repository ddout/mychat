import axios from 'axios';

// 自定义配置新建一个 ajax 实例
const ajax = axios.create({
	baseURL: 'https://api.openai.com/', // baseURL 我们自己使用的接口的公共部分，也就是基础地址
	timeout: 1000 * 60, // timeout  指定请求超时的毫秒数(0 表示无超时时间)
});

// 添加请求拦截器
ajax.interceptors.request.use(function(config) {
	// 在发送请求之前做些什么
	// config.params={...config.params,token:'1ec949a15fb709370f'} // 我的接口需要添加一个token才能进行验证
	config.headers['content-type'] = 'application/json; charset=utf-8'
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
ajax.interceptors.response.use(function(response) {
	let res = response.data
	if (res && res.choices !== undefined) {
		if(res.choices.length > 0){
			var text = res.choices[0].text;
			if (text && text !== undefined) {
				return text;
			}
		}
	}
	// 对响应数据做点什么
	return '';
}, function(error) {
	if(error.code == 'ECONNABORTED') {
		return '链接中断了,你可以描述更精确一些在重试'
	} else if (error.response.status == 401) {
		return '未授权或授权码错误,请刷新后输入：授权码=xx'
	} else if(error.response.status !== 200){
		return '哦豁，打了个盹，请重试!!'
	}
	// 对响应错误做点什么
	return Promise.reject(error);
});

export default ajax; // 默认抛出这个实例
