if (!control_host) {
	var control_host = 'r1.wxfsq.com';
}
var web_ver = 2773;
if (localStorage.getItem('web_ver') && localStorage.getItem('web_ver') != web_ver) {
	localStorage.setItem('web_ver', web_ver);
	var time = new Date().getTime();
	setCookie('time', time, 604800);
	document.getElementsByTagName("h3")[0].innerHTML = '数据更新。。。';
	setTimeout(function () {
		location.reload();
	}, 500);
} else {
	if (!localStorage.getItem('web_ver')) {
		localStorage.setItem('web_ver', web_ver);
	}
	var script = document.createElement('script'); script.type = 'text/javascript';
	var time = getCookie('time');
	if (time == '') {
		time = new Date().getTime();
		setCookie('time', time, 604800);
	}
	document.getElementsByTagName("head")[0].innerHTML += "<link rel='stylesheet' href='" + location.protocol + "//" + control_host + "/new_r1_control.css?t=" + time + "'/>";
	script.src = location.protocol + '//' + control_host + '/js/r1_control.js?t=' + time;
	document.body.appendChild(script);
}
