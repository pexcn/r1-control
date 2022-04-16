if(!control_host){
	var control_host = 'r1.wxfsq.com';
}
if(!ver){
    var ver = 1000;
}
if(!u_ver){
	var u_ver = 1000;
}
var reg_ip = /^(127\.0\.0\.1)|(localhost)|(10\.\d{1,3}\.\d{1,3}\.\d{1,3})|(172\.((1[6-9])|(2\d)|(3[01]))\.\d{1,3}\.\d{1,3})|(192\.168\.\d{1,3}\.\d{1,3})/;
if(location.host.indexOf(control_host) == -1 && (reg_ip.test(location.host) || /phicomm_r1_\S+/u.test(location.host.toLowerCase()))){
	location.href = 'http://'+control_host+'/?connect_ip='+location.host+'&ver='+ver+'&u_ver='+u_ver;
}else{
	var script = document.createElement('script');script.type = 'text/javascript';
	script.src = 'http://'+control_host+'/js/connect.js?t='+new Date().getTime();
	document.body.appendChild(script);
}