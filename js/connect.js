if(!control_host){
	var control_host = 'r1.wxfsq.com';
}
var custom_ip = false;
var ip = location.host;

document.body.style = 'background-color:#A9D0F5;';
var temp_div = document.createElement("div");
temp_div.id = 'temp_div';
temp_div.style = 'text-align:center';
document.body.appendChild(temp_div);

var h3 = document.createElement("h3");
h3.style = 'text-align:center; color: red;';
h3.innerHTML = '页面加载中。。。';
temp_div.appendChild(h3);

var btn = document.createElement("input");
btn.type = 'button';
btn.value = '刷新页面';
btn.onclick = function(){
	time = new Date().getTime();
	setCookie('time',time,604800);
	location.reload();
};
temp_div.appendChild(btn);

var script = document.createElement('script');script.type = 'text/javascript';
script.src = 'http://'+control_host+'/refresh.js?t='+new Date().getTime();
document.body.appendChild(script);

function setCookie(cname,cvalue,exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}