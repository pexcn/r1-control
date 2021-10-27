var xiaofei = true;
if(!ip){
	var ip = '';
}
if(!ver){
    var ver = 1000;
}
if(!u_ver){
	var u_ver = 1000;
}
if(!custom_ip){
	var custom_ip = false;
}
var bak_lrc = '';
var List = [];
var asrMaxDuration_value = document.createElement('text');
var asrMaxDuration_timer = -1;
var asrMaxDuration = document.createElement('input');
var inputs = [];
var Bluetooth_prompt_tone_btn = null;
var info = [];
var play_type = 0;
var Submit_Play_Record_btn = null;
var update_background_timer = -1;
var Data = [];
var update_device_info_timer = -1;
var dormancy_btn = null;
var dev_name = '';
var hostname = '';
var music_progress_timer = -1;
var Main_Wakeup_Benchmark_timer = -1;
var Main_Wakeup_Benchmark = document.createElement('input');
var memo_list = [];
var is_new_unisound = true;
var is_unisound = true;
var reload = false;
var unisound_init_timer = -1;
var unisound_init_timer1 = -1;
var useless_services_list = [];
var test_arr = [];
var time_lock = false;
var update_device_info_time = 0;
var device_info_data = [];
var device_info = document.createElement('div');
var iframe = document.createElement('iframe');
var qrcode_load = false;
var web_ver = 2023;
var main_div = document.createElement('div');
var connect_timer = -1;
var qrstate = 0;
var ping_timer = -1;
var login_state_timer = -1;
var qrstate_timer = -1;
var qrcode_msg = document.createElement('text');
var qrcode = document.createElement('img');
var login_div = document.createElement('div');
var mousedown = false;
var sound_effects_timer = -1;
var preset_div = document.createElement('div');
var eqs_div = document.createElement('div');
var bass_div = document.createElement('div');
var loudness_div = document.createElement('div');
var sound_effects_div = document.createElement('div');
var music_lrc = document.createElement('span');
var popup = document.createElement('div');
var play_index = 0;
var music_title = '';
var title_scrolling_timer = -1;
var switch_btns = document.createElement('div');
var btn_states = [];
var info_time = [];
var title_display_time = 0;
var lrcs = [];
var lrc_timer = -1;
var api_music_info = null;
var init_state = true;
var ws = null;
var tips_data = [];
var current_page = null;
var mousewheel_interval = -1;
var startx = -1;
var starty = -1;
var vols_disabled_timer = -1;
var music_id = '';
var timer = -1;
var screen_timer = -1;
var screen_div = document.createElement('div');
var h3 = document.getElementsByTagName('h3')[0];
var divs = document.createElement('div');
var texts_div = document.createElement('div');
var btns_div = document.createElement('div');
var musics_div = document.createElement('div');
var vols = document.createElement('input');
var music_pic = document.createElement('img');
var music_time = document.createElement('input');
var music_time_position = document.createElement('text');
var music_time_duration = document.createElement('text');
var div_list = document.createElement('div');
var lists = document.createElement('div');
var list = document.createElement('table');
var vol_text = document.createElement('text');
var buttons = [['点播音乐',{ws_type:'send_message',input:'obj',param:{what:65536,arg1:0,arg2:1,obj:'web_播放${obj}'},type:1,min_ver:1600,min_uver:1700,err:'请输入要点播的音乐！',succ:'点播成功！'}],
['点播电台',{ws_type:'send_message',input:'obj',param:{what:65536,arg1:0,arg2:1,obj:'web_收听${obj}'},type:1,min_ver:1600,min_uver:1700,err:'请输入要点播的电台名称！',succ:'点播成功！'}],
['点播歌单',{ws_type:'send_message',input:'obj',param:{what:65536,arg1:0,arg2:9,obj:'${obj}'},type:1,min_ver:1700,min_uver:1700,err:'请输入要点播的歌单链接！',succ:'点播成功！'}],
['我的收藏',{ws_type:'send_message',param:{what:65536,arg1:0,arg2:8},type:0,min_ver:1700,min_uver:1700,succ:'好的，播放收藏歌单！'}],
['打开蓝牙',{ws_type:'send_message',param:{what:64,arg1:1,arg2:-1},type:0,max_ver:1810,max_uver:1000,succ:'已开启蓝牙！'}],
['打开蓝牙',{ws_type:'send_message',param:{what:256,arg1:3,arg2:-1},type:0,max_ver:1810,min_uver:1001,succ:'已开启蓝牙！'}],
['关闭蓝牙',{ws_type:'send_message',param:{what:64,arg1:2,arg2:-1},type:0,max_ver:1810,succ:'已关闭蓝牙！'}],
['打开氛围灯',{ws_type:'send_message',param:{what:4,arg1:64,arg2:1},type:0,max_ver:1810,succ:'已开启氛围灯！'}],
['关闭氛围灯',{ws_type:'send_message',param:{what:4,arg1:64,arg2:0},type:0,max_ver:1810,succ:'已关闭氛围灯！'}],
['打开蓝牙',{ws_type:'send_message',title:['打开蓝牙','关闭蓝牙'],param:[{what:64,arg1:1,arg2:-1},{what:64,arg1:2,arg2:-1}],type:2,min_ver:1820,max_uver:1000,is_unisound:false,succ:['已开启蓝牙！','已关闭蓝牙！'],state:[0,'device_state',[[0,1,2],3]]}],
['打开蓝牙',{ws_type:'send_message',title:['打开蓝牙','关闭蓝牙'],param:[{what:256,arg1:3,arg2:-1},{what:64,arg1:2,arg2:-1}],type:2,min_ver:1820,max_uver:1000,is_unisound:true,succ:['已开启蓝牙！','已关闭蓝牙！'],state:[0,'device_state',[[0,1,2],3]]}],
['打开蓝牙',{ws_type:'send_message',title:['打开蓝牙','关闭蓝牙'],param:[{what:256,arg1:3,arg2:-1},{what:64,arg1:2,arg2:-1}],type:2,min_ver:1820,min_uver:1001,succ:['已开启蓝牙！','已关闭蓝牙！'],state:[0,'device_state',[[0,1,2,5],3]]}],
['执行shell',{ws_type:'shell',input:'shell',param:{shell:'${shell}'},type:1,err:'请输入要执行的命令！'}],
['重启小讯',{type:-1,is_unisound:true,itemType:'reboot_unisound'}],
['重启音箱',{type:-1,itemType:'reboot'}],
['打开氛围灯',{ws_type:'send_message',title:['打开氛围灯','关闭氛围灯'],param:[{what:4,arg1:64,arg2:1},{what:4,arg1:64,arg2:0}],type:2,min_ver:1820,succ:['已开启氛围灯！','已关闭氛围灯！'],state:[0,'music_light_enable',[false,true]]}],
['修改唤醒词',{ws_type:'send_message',input:'obj',param:{what:65536,arg1:0,arg2:3,obj:'${obj}'},type:1,min_uver:1600,err:'请输入要修改的唤醒词！',succ:'唤醒词修改成功！'}],
['修改设备名',{ws_type:'set_dev_name',input:'dev_name',param:{dev_name:'${dev_name}'},type:1,min_ver:1841,err:"请输入要修改的设备名！",succ:"设备名修改成功！\r\n如当前正在使用蓝牙、DLNA、AirPlay则会在下次启动时生效！"}],
['设置氛围灯亮度',{ws_type:'send_message',input:'arg2',param:{what:4,arg1:65,arg2:'${arg2}'},type:1,err:'请输入要修改的亮度(默认100，最低可设置1，最高不建议超过200)！',succ:'氛围灯亮度修改成功！'}],
['切换官方氛围效果',{ws_type:'send_message',param:{what:4,arg1:67,arg2:0},type:0,max_ver:1500,succ:'已切换为官方氛围效果！'}],
['切换七彩氛围效果',{ws_type:'send_message',param:{what:4,arg1:67,arg2:1},type:0,max_ver:1500,succ:'已切换为七彩氛围效果！'}],
['切换官方氛围效果',{ws_type:'send_message',param:{what:4,arg1:68,arg2:0},type:0,min_ver:1600,max_ver:1810,succ:'已切换为官方氛围效果！'}],
['切换七彩氛围效果',{ws_type:'send_message',param:{what:4,arg1:68,arg2:2},type:0,min_ver:1600,max_ver:1810,succ:'已切换为七彩氛围效果！'}],
['切换七彩氛围效果',{ws_type:'send_message',title:['切换七彩氛围效果','切换官方氛围效果'],param:[{what:4,arg1:68,arg2:2},{what:4,arg1:68,arg2:0}],type:2,min_ver:1820,max_ver:1828,succ:['已切换为七彩氛围效果！','已切换为官方氛围效果！'],state:[0,'music_light_mode',[0,[1,2,3]]]}],
['切换七彩氛围效果',{ws_type:'send_message',title:['官方氛围效果','七彩氛围效果','七彩旋转效果','七彩旋转效果1'],param:[{what:4,arg1:68,arg2:2},{what:4,arg1:68,arg2:1},{what:4,arg1:68,arg2:3},{what:4,arg1:68,arg2:0}],type:2,min_ver:1829,succ:['已切换为七彩氛围效果！','已切换为七彩旋转效果！','已切换为七彩旋转效果1！','已切换为官方氛围效果！'],state:[0,'music_light_mode',[0,2,1,3]]}],
['设置颜色渐变速度',{ws_type:'send_message',input:'arg2',param:{what:4,arg1:66,arg2:'${arg2}'},type:3,err:'请输入要修改的速度(默认4，最低可设置1，最高100)！',succ:'氛围灯颜色渐变速度修改成功！',state:['music_light_mode',[0,1,3]],hide:true}],
['设置背景图片',{type:-1,itemType:'set_background'}],
['开灯',{ws_type:'shell',param:{shell:'lights_test set 7fffff8000 ffffff'},type:0,succ:'已开！'}],
['关灯',{ws_type:'shell',param:{shell:'lights_test set 7fffff8000 0'},type:0,succ:'已关！'}],
['TTS',{ws_type:'send_message',input:'obj',param:{what:65536,obj:'${obj}'},type:1,min_uver:1800,err:'请输入要阅读的文本',succ:''}],
['打开网络配置',{type:-1,itemType:'open_net_config'}],
['设置IOT_API',{ws_type:'send_message',input:'iot_api',param:{what:65536,arg1:0,arg2:10,obj:{type:"set_iot_api",iot_api:"${iot_api}"}},type:1,min_uver:1816,err:'请输入要设置的API，例如：http://r1.wxfsq.com/iot.php，返回示例：{"status":200,"message":"ok","text":"tts内容"}',succ:'IOT_API设置成功！'}],
['上传文件页面',{type:-1,min_ver:1835,itemType:'upload_page'}],
['打开DLNA、AirPlay常开',{ws_type:'Set_Service_Normally_Open',title:['打开DLNA、AirPlay常开','关闭DLNA、AirPlay常开'],param:[{open:true},{open:false}],type:2,min_ver:1839,max_ver:1839,succ:['已打开！','已关闭！'],state:[0,'Service_Normally_Open',[false,true]]}],
['打开蓝牙、DLNA、AirPlay常开',{ws_type:'Set_Service_Normally_Open',title:['打开蓝牙、DLNA、AirPlay常开','关闭蓝牙、DLNA、AirPlay常开'],param:[{open:true},{open:false}],type:2,min_ver:1840,succ:['已打开！','已关闭！'],state:[0,'Service_Normally_Open',[false,true]]}],
['设备连接页面',{type:-1,itemType:'connect_page'}],
//['测试',{type:-1,itemType:'test'}]
];
var reg_ip = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
var background = 'background-color:#A9D0F5';
var update_log = ['2021-03-19:音量条增加防误触(双击激活后可调节)。',
'2021-03-20:增加顶部歌词显示，页面按钮精简(1.8.2.0版本生效)。',
'2021-03-22:更新页面效果，增加滚动歌词(双击封面切换)。',
'2021-03-26:增加音效控制页面(1.8.2.2版本生效)。',
'2021-04-01:优化布局，修复最后最后一句歌词显示错误。',
'2021-04-15:适配new_Unisound1.8、EchoService1.8.25登录功能。',
'2021-04-16:增加音箱连接页面，优化页面布局。',
'2021-04-30:增加设备信息页面。',
'2021-05-01:修复IOS浏览器下UI异常。',
'2021-05-05:适配new_EchoService1.8.28进度调节。',
'2021-05-07:单击“音量”标题可解锁音量控制。',
'2021-05-08:适配new_EchoService1.8.29氛围灯效果切换，增加设置氛围灯颜色渐变速度功能。',
'2021-05-24:隐藏不支持功能。',
'2021-05-28:增加开关灯功能。',
'2021-06-01:修改部分歌词解析异常。',
'2021-06-07:修改部分歌词解析异常，适配new_Unisound1.8.16版本的IOT_API设置。',
'2021-06-20:修复火狐input显示异常（滑块不会改）。',
'2021-06-25:设备信息页面增加隐藏无用服务按钮（无可隐藏服务时不显示，此功能可有效释放运存！），设备信息页面增加清除小讯数据按钮。',
'2021-07-23:适配新版本，设备信息页面增加清除闹铃/提醒按钮(闹铃/提醒为空时不显示，new_Unisound1.8.20、new_EchoService1.8.35版本生效)。',
'2021-08-01:app增加音量按键监听。',
'2021-08-06:设备信息页面增加唤醒难度控制功能，优化播放进度调节体验。',
'2021-08-10:优化设备连接页面。',
'2021-08-12:设备信息页面增加开始/退出休眠按钮。',
'2021-08-18:设备信息页面增加信息实时更新（登录信息和授权信息非实时），设备信息页面增加打开/关闭提交播放记录按钮(提交播放记录、播放时间至当前登录的账号(new_Unisound1.8.24版本生效))。',
'2021-08-21:增加打开/关闭DLNA、AirPlay常开按钮(new_EchoService1.8.39版本生效)。',
'2021-08-24:设备信息页面增加清理进程按钮。',
'2021-08-29:设备信息页面增加打开/关闭蓝牙提示音按钮(new_Unisound1.8.25、new_EchoService1.8.41版本生效)。',
'2021-08-31:设备信息页面支持new_EchoService旧版本。',
'2021-09-28:设备连接页面支持使用设备名称连接音箱(例如：Phicomm_R1_2B11)。',
'2021-10-27:修复1.8.22版本下切换播放模式无效果问题。'
];
load();
window.onload = function(){
	if(location.href.substring(0,6) == 'https:'){
		location.href = 'http:' + location.href.substring(6);
	}
	if(location.href.indexOf('?message') > -1){
		iframe.style.display = 'none';
		main_div.appendChild(iframe);
		if(window.addEventListener){
			window.addEventListener("message",displayMessage, false);
		}else{
			window.attachEvent("onmessage", displayMessage);
		}

		function displayMessage(e){
			var data = e.data;
			//console.log(data)
			//alert(JSON.stringify(data));
			if(data.type == 'set_background'){
				if(data.value == ''){
					localStorage.removeItem(data.hostname+'_background');
				}else{
					img = 'background: url("'+data.value+'") center top / cover no-repeat fixed;';
					localStorage.setItem(data.hostname+'_background',img);
				}
				document.getElementsByTagName("body")[0].style.cssText = img;
			}else if(data.type == 'hostname'){
				data = data.data;
				if(data){
					//alert(JSON.stringify(data));
					if(data.url.indexOf(data.ip) > -1){
						iframe.url = 'http://'+data.ip+':8080';
						iframe.src = iframe.url+'/?message';
					}else{
						iframe.url = data.url;
						iframe.src = iframe.url+'?message';
					}
					var device_list = localStorage.getItem('device_list');
					if(device_list != ''){
						device_list = JSON.parse(device_list);
					}
					if(device_list == null){
						device_list = [];
					}
					var is = false;
					for(var i=0;i<device_list.length;i++){
						if(device_list[i].hostname == data.hostname){
							device_list[i] = data;
							is = true;
							break;
						}
					}
					if(!is){
						device_list.push(data);
					}
					localStorage.setItem('device_list',JSON.stringify(device_list));
					Data = data;
					setTimeout(function(){
						iframe.contentWindow.postMessage({type:'update_background',hostname:Data.hostname,background:localStorage.getItem(Data.hostname+'_background')},iframe.url);
					},1000);
					
					
				}
			}else if(data.type == 'update_background'){
				if(data.hostname){
					hostname = data.hostname;
					var img = data.background;
					var img1 = localStorage.getItem('background');
					if(img){
						if(img1){
							if(img != img1){
								localStorage.setItem('background',img);
								document.getElementsByTagName("body")[0].style.cssText = img;
							}
						}else{
							localStorage.setItem('background',img);
							document.getElementsByTagName("body")[0].style.cssText = img;
						}
					}else{
						if(img1){
							img = background;
							localStorage.removeItem('background');
							document.getElementsByTagName("body")[0].style.cssText = img;
						}
					}
				}
				localStorage.setItem('update_background',1);
			}
		};
		return;
	}
	
	if(custom_ip){
		custom_ip_page();
	}else{
		init_login();
		init();
	}
}

function custom_ip_page(){
	var ip_connect = localStorage.getItem('ip_connect') != 'false';
	
	document.title = 'R1音箱连接页面'
	document.getElementsByTagName('h3')[0].innerHTML = '请输入音箱IP进行连接！';
	var div = document.createElement('div');
	div.id = 'custom_ip_page';
	
	if(ip_connect){
		var tmp_ip = localStorage.getItem('ip') ? localStorage.getItem('ip') : localStorage.getItem('hostname');
	}else{
		var tmp_ip = localStorage.getItem('hostname') ? localStorage.getItem('hostname') : localStorage.getItem('ip');
	}
	
	if(tmp_ip != null && tmp_ip != ''){
		tmp_ip = tmp_ip.substring(0,tmp_ip.indexOf(':'));
	}else{
		tmp_ip = '';
	}
	var device_list = localStorage.getItem('device_list');
	if(device_list){
		device_list = JSON.parse(device_list);
	}
	if(device_list != null){
		document.getElementsByTagName('h3')[0].innerHTML = '请选择或输入音箱IP进行连接！';
		var arr = device_list;
		var text = document.createElement('text');
		text.innerHTML = '设备：';
		div.appendChild(text);
		var device_list = document.createElement('select');
		device_list.id = 'device_list';
		device_list.style = 'display:block;margin:10px auto;width:70%;height:50px;font-size: 16px;color: red;border-color: #66ccff;outline: none;background:rgba(255, 255, 255, 0.2);border-radius: 15px;';
		device_list.onchange = function(){
			var input = document.getElementById('input');
			if(ip_connect && this[parseInt(this.value)].getAttribute('ip') != ''){
				input.value = this[parseInt(this.value)].getAttribute('ip');
			}else{
				input.value = this[parseInt(this.value)].getAttribute('hostname');
			}
			input.oninput();
		}
		for(var i=0;i<arr.length;i++){
		var option = document.createElement('option');
			option.innerHTML = arr[i].dev_name ? arr[i].dev_name : arr[i].hostname;
			option.setAttribute('hostname',arr[i].hostname);
			option.setAttribute('ip',arr[i].ip);
			option.value = i;
			if(arr[i].ip == tmp_ip || arr[i].hostname.toLowerCase() == tmp_ip.toLowerCase()){
				if(ip_connect){
					tmp_ip = arr[i].ip ? arr[i].ip : arr[i].hostname;
				}else{
					tmp_ip = arr[i].hostname ? arr[i].hostname : arr[i].ip;
				}
			}
			device_list.appendChild(option);
		}
		device_list.value = '';
		div.appendChild(device_list);
	}
	
	var text = document.createElement('text');
	text.innerHTML = 'IP、设备名称(不需要输入端口)：';
	div.appendChild(text);
	var input = document.createElement('input');
    input.type = 'text';
    input.id = 'input';
	input.oninput = function(){
		var device_list = document.getElementById('device_list');
		if(device_list){
			for(var i=0;i<device_list.length;i++){
				console.log(device_list[i].getAttribute('ip'));
				if(this.value.toLowerCase() == device_list[i].getAttribute('hostname').toLowerCase() || this.value == device_list[i].getAttribute('ip')){
					device_list[i].selected = 'selected';
					var background_text = localStorage.getItem(device_list[i].getAttribute('hostname')+'_background');
					if(background_text){
						document.getElementsByTagName("body")[0].style.cssText = background_text;
					}else{
						document.getElementsByTagName("body")[0].style.cssText = background;
					}
					return;
				}
			}
			device_list.value = '';
			document.getElementsByTagName("body")[0].style.cssText = background;
		}
	}
    div.appendChild(input);
	
	var btn = document.createElement("input");
	btn.type = 'button';
	btn.className = 'btn';
	btn.value = '连接';
	btn.setAttribute('data','');
	btn.onclick = function(){
		test_connect();
	};
	div.appendChild(btn);
	
	var btn = document.createElement("input");
	btn.type = 'button';
	btn.className = 'btn';
	if(ip_connect){
		btn.value = '切换设备名连接';
	}else{
		btn.value = '切换IP连接';
	}
	btn.setAttribute('data','');
	btn.onclick = function(){
		if(ip_connect){
			if(!confirm("切换后将使用设备名连接音箱，是否继续？")){
				return;
			}
			localStorage.setItem('ip_connect',false);
		}else{
			if(!confirm("切换后将使用IP连接音箱，是否继续？")){
				return;
			}
			localStorage.setItem('ip_connect',true);
		}
		location.reload();
	};
	var div1 = document.createElement('div');
	div1.appendChild(btn);
	if(device_list != null && device_list.length > 0){
		div.appendChild(div1);
	}
	
	var div1 = document.createElement('div');//占位
	div1.style.height = '10px';
	div.appendChild(div1);
	divs.appendChild(div);
	if(reg_ip.test(tmp_ip) || /phicomm_r1_\S+/u.test(tmp_ip.toLowerCase())){
		main_div.onclick = function(){
			main_div.onclick = function(){};
			clearTimeout(connect_timer);
			connect_timer = -1;
			document.getElementsByTagName('h3')[0].innerHTML = '已取消自动连接！';
			setTimeout(function(){
				if(document.getElementsByTagName('h3')[0].innerHTML == '已取消自动连接！'){
					if(document.getElementById('device_list')){
						document.getElementsByTagName('h3')[0].innerHTML = '请选择或输入音箱IP、设备名称进行连接！';
					}else{
						document.getElementsByTagName('h3')[0].innerHTML = '请输入音箱IP、设备名称进行连接！';
					}
				}
			},1000);
		};
		input.value = tmp_ip;
		document.getElementsByTagName('h3')[0].innerHTML = '检测到上次连接记录，2秒后自动连接，点击页面空白处取消连接！';
		connect_timer = setTimeout(function(){
			main_div.onclick = function(){};
			test_connect();
		},2000);
	}
	
	if(input.value != ''){
        input.oninput();
		var background_text = null;
		var device_list = document.getElementById('device_list');
		if(device_list){
			for(var i=0;i<device_list.length;i++){
				if(input.value.toLowerCase() == device_list[i].getAttribute('hostname').toLowerCase() || input.value == device_list[i].getAttribute('ip')){
					background_text = localStorage.getItem(device_list[i].getAttribute('hostname')+'_background');
					break;
				}
			}
		}
		if(background_text){
			document.getElementsByTagName("body")[0].style.cssText = background_text;
		}else{
			document.getElementsByTagName("body")[0].style.cssText = background;
		}
	}else{
		document.getElementsByTagName("body")[0].style.cssText = background;
	}
	
	//config_net_page
	var div = document.createElement('div');
	div.id = 'config_net_page';
	div.style = 'display:none;';
}

function test_connect(){
	var test_connect_state = false;
	var input_ip = document.getElementById('input');
	ip = input_ip.value;
	if(!reg_ip.test(ip) && !/phicomm_r1_\S+/u.test(ip.toLowerCase())){
		alert('请输入正确的IP！');
	}else{
		document.getElementsByTagName('h3')[0].innerHTML = '请稍候，正在连接音箱。。。';
		ip = ip + ':8080';
		ws = new WebSocket("ws://"+ip);
		ws.onopen = function(data){
			divs.removeChild(document.getElementById('custom_ip_page'));
			test_connect_state = true;
			document.getElementsByTagName('h3')[0].innerHTML = '连接音箱成功，正在初始化。。。';
			if(reg_ip.test(ip)){
				window.localStorage.removeItem('hostname');
				window.localStorage.setItem('ip',ip);
			}else{
				window.localStorage.removeItem('ip');
				window.localStorage.setItem('hostname',ip);
			}
			if(window.location.href.indexOf('test') == -1){
				ws.close();
				custom_ip_page();
				window.location.href = 'http://'+ip;
				return;
			}
			init_login();
			init();
			ws.send(JSON.stringify({type:'get_info'}));
		};
		ws.onclose = function(data){
			test_connect_state = true;
			if(data.code == 1006){
				document.getElementsByTagName('h3')[0].innerHTML = '请输入音箱IP进行连接！';
				var msg = '连接音箱失败，请检查音箱IP是否正确或重启音箱再试！';
				alert(msg);
			}
		};
		setTimeout(function(){
			if(!test_connect_state){
				document.getElementsByTagName('h3')[0].innerHTML = '请输入音箱IP进行连接！';
				ws.close();
				var msg = '连接音箱超时，请检查音箱IP是否正确或重启音箱再试！';
				alert(msg);
			}
		},6000);
	}
}

function init(){
	if(ver < 1){
		ver = 1000;
	}
	var h3 = document.getElementsByTagName('h3')[0];
	if(h3.innerHTML == ''){
		h3.innerHTML = '请稍后。。。';
	}
	h3.style.minHeight = h3.clientHeight;
	
	if(ip == ''){
		ip = document.location.host;
	}
	if(ws == null || ws.readyState == WebSocket.CLOSED){
		ws = new WebSocket("ws://"+ip);
		var h3 = document.getElementsByTagName('h3')[0];
		h3.innerHTML = '正在连接音箱，请稍候。。。';
	}
	ws.onopen = function(data){
		var h3 = document.getElementsByTagName('h3')[0];
		if(init_state){
			//ping_timer = setInterval(function(){ws.send(JSON.stringify({type:'ping'}));},3000);
			h3.innerHTML = '连接音箱成功，正在初始化。。。';
			if(unisound_init_timer == -1){
				if(ver > 1825){
					unisound_init_timer = setTimeout(function(){
						reload = true;
						var btn = document.createElement("input");
						btn.type = 'button';
						btn.className = 'btn';
						btn.value = '取消隐藏小讯';
						btn.onclick = function(){
							this.value = '请稍候。。。';
							//document.getElementsByTagName('h3')[0].innerHTML = '请稍候。。。';
							ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/pm unhide com.phicomm.speaker.device'}));
							setTimeout(function(){
								ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
								ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am startservice com.phicomm.speaker.player/.EchoService'}));
								setTimeout(function(){
									document.getElementsByTagName('h3')[0].innerHTML = '等待小讯初始化。。。(请确保您当前安装的new_Unisound版本是1.8或以上！)';
									alert('操作完毕！');
									location.reload();
								},3000);
							},3000);
						};
						//document.getElementsByTagName('h3')[0].parentNode.appendChild(btn);

						var btn = document.createElement("input");
						btn.type = 'button';
						btn.className = 'btn';
						btn.value = '重启小讯';
						btn.onclick = function(){
							this.value = '重启中。。。';
							ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am force-stop com.phicomm.speaker.device'}));
							setTimeout(function(){
								ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
								ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am startservice com.phicomm.speaker.player/.EchoService'}));
								setTimeout(function(){
								document.getElementsByTagName('h3')[0].innerHTML = "等待小讯初始化。。。(请确保您当前安装的new_Unisound版本是1.8或以上！)";
								alert('重启完毕！');
								location.reload();
								},10000);
							},3000);
						};
						document.getElementsByTagName('h3')[0].parentNode.appendChild(btn);
						
						var btn = document.createElement("input");
						btn.type = 'button';
						btn.className = 'btn';
						btn.value = '重启音箱';;
						btn.onclick = function(){
							this.value = '重启中。。。';
							ws.send(JSON.stringify({type:'shell',shell:'stop adbd&&start adbd&&adb reboot'}));
							setTimeout(function(){
								alert('重启完毕！');
								location.reload();
							},10000);
						};
						document.getElementsByTagName('h3')[0].parentNode.appendChild(btn);
					},6000);
				}
			}
			start_unisound();
			ws.send(JSON.stringify({type:'get_info'}));
		}else{
			start_updateinfo();
			h3.innerHTML = '已恢复连接！';
			setTimeout(function(){
				var h3 = document.getElementsByTagName('h3')[0];
				if(current_page == null){
					current_page = document.getElementById('btn_page_music');
				}
				var data = current_page;
				title = data.getAttribute('data');
				if(title == data.value){
					h3.innerHTML = 'R1音箱控制页面'+dev_name;
				}else{
					data.value = title;
					switch_page(data);
				}
			},1000);
		}
	};
	
	ws.onclose = function(data){
		clearInterval(ping_timer);
		stop_updateinfo();
		if(data.code == 1006){
			var h3 = document.getElementsByTagName('h3')[0];
			if(init_state){
				h3.innerHTML = '连接音箱失败，3秒后重试。。。';
				setTimeout("init();",3000);
			}else{
				h3.innerHTML = '与音箱断开连接，1秒后尝试重新连接。。。';
				setTimeout("init();",1000);
			}
		}else if(data.code == 1005){
			
		}
	};
	
	ws.onerror = function(data){
		
	};
	
	ws.onmessage = function(data){
		
		if(typeof(data.data) == "string"){
			data = JSON.parse(data.data);
			message(data);
		}else{
			if(screen_div.style.display != 'none'){
				document.getElementById('screen_img').src = URL.createObjectURL(data.data);
			}else{
				stop_screen();
			}
		}
	};
}

function start_unisound(){
	if(ver > 1825){
		ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
	}
}

function init_login(){
	login_div.style = 'display:none;';
	qrcode.style = 'margin: 10px auto;position: relative;';
	login_div.appendChild(qrcode_msg);
	login_div.appendChild(document.createElement('div'));
	login_div.appendChild(qrcode);
	var div = document.createElement('div');
	var btn = document.createElement("input");
	btn.type = 'button';
	btn.className = 'btn';
	btn.value = '刷新二维码';
	btn.setAttribute('data','');
	btn.onclick = function(){
		update_qrcode();
	};
	div.appendChild(btn);
	
	if(ver > 1825){
		var btn = document.createElement("input");
		btn.type = 'button';
		btn.className = 'btn';
		btn.value = '重启小讯';
		btn.setAttribute('data','');
		btn.onclick = function(){
			document.getElementsByTagName('h3')[0].innerHTML = '重启中。。。';
			ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am force-stop com.phicomm.speaker.device'}));
			setTimeout(function(){
				ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
				setTimeout(function(){
					document.getElementsByTagName('h3')[0].innerHTML = 'R1音箱登录页面';
					alert('重启完毕！');
				},10000);
			},3000);
		};
		div.appendChild(btn);
	}
	
	login_div.appendChild(div);
	var div = document.createElement('div');//占位
	div.style.height = '10px';
	login_div.appendChild(div);
}


function onhide_login(){
	var tips = "本次登录将会登录您的QQ音乐、QQ会员帐号，是否继续？";
	if(u_ver > 1814){
		tips = "本次登录将会登录您的QQ音乐、QQ会员、网易云音乐帐号，是否继续？";
	}
	qrcode.style = 'margin: 10px auto;position: relative;';
	if(!confirm(tips)){
		ws.close();
		window.opener = null;
		window.open("about:blank","_self").close();
		window.location.href = "about:blank";
		document.body.innerHTML = "";
	}else{
		document.getElementsByTagName('h3')[0].innerHTML = 'R1音箱登录页面';
		login_div.style.display = 'block';
		//update_qrcode();
		load_qrcode();
	}
}

function hide_login(){
	stop_update_qrstate();
	login_div.style.display = 'none';
}

function load_qrcode(){
	var qrcode_state = localStorage.getItem('qrcode_state');
	var qrcode_data = localStorage.getItem('qrcode_data');
	if(qrcode_state == 1 && qrcode_data != ''){
		qrcode_load = false;
		qrcode_msg.innerHTML = '<h3>请稍候。。。</h3><h3></h3>';
		qrcode.onload = function(){
			qrcode_load = true;
			qrcode.onload = function(){}
			qrcode_msg.getElementsByTagName('h3')[0].innerText = '请扫码登录！(可在手机QQ内粘贴打开此页面地址，长按二维码图片扫码登录！)';
			start_update_qrstate();
		}
		update_qrcode_data(JSON.parse(qrcode_data));
	}else{
		update_qrcode();
	}
}

function update_qrcode(){
	qrcode_load = false;
	qrcode_msg.innerHTML = '<h3>请稍候。。。</h3><h3></h3>';
	qrcode.onload = function(){
		qrcode_load = true;
		qrcode.onload = function(){}
		qrcode_msg.getElementsByTagName('h3')[0].innerText = '请扫码登录！(可在手机QQ内粘贴打开此页面地址，长按二维码图片扫码登录！)';
		start_update_qrstate();
	}
	setTimeout(function(){
		if(!qrcode_load){
			ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
			qrcode_msg.innerHTML = '<h3>二维码加载超时，请点击刷新二维码(如多次加载超时请点击重启小讯，提示重启完毕后再点击刷新二维码！)！</h3><h3></h3>';
		}
	},5000);
	ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'get_qrcode'}}));
}

function start_update_qrstate(){
	stop_update_qrstate();
	qrstate_timer = setInterval(function(){
		ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'qrcode_state',qrsig:qrcode.qrsig}}));
	},1500);
}

function stop_update_qrstate(){
	clearInterval(qrstate_timer);
	qrstate_timer = -1;
}

function update_qrcode_data(data){
	qrstate = 0;
	qrcode.src = data.image;
	qrcode.qrsig = data.cookies.qrsig;
	localStorage.setItem('qrcode_state',1);
	localStorage.setItem('qrcode_data',JSON.stringify(data));
}

function update_qrstate(data){
	if(qrstate == 1){
		return;
	}
	qrcode_state = data.qrcode_state;
	call = qrcode_state[qrcode_state.call];
	msg = call[4];
	if((qrcode_state.code != 66 && qrcode_state.code != 67) || data.code == 0){
		localStorage.removeItem('qrcode_state');
		localStorage.removeItem('qrcode_data');
		stop_update_qrstate();
	}
	if(qrcode_state.code == '0'){
		qrstate = 1;
		//cookies = get_cookies(qrcode_state.cookies);
		//cookies = cookies.concat(get_cookies(qrcode_state.location.cookies));
		var uin = get_uin(qrcode_state.location.cookies.p_uin);
		qrcode_msg.getElementsByTagName('h3')[0].innerText = "扫码登录用户："+call[5]+"("+uin+")";
		msg = "正在查询用户信息，请稍候。。。";
		qrcode.style = 'margin: 10px auto;position: relative;border-radius: 100%;';
		qrcode.src = "http://q1.qlogo.cn/g?b=qq&nk="+uin+"&s=100";
		console.log(JSON.stringify(qrcode_state));
		ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'login',qrcode_state:qrcode_state}}));
	}
	qrcode_msg.getElementsByTagName('h3')[1].innerText = msg;
}

function login(data){
	if(data.code == 1){
		if(data.login_state == 1){
			ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'login_state'}}));
			alert('登录成功,欢迎'+data.nick+'['+data.userid+']');
		}else{
			alert(data.login_msg);
			window.opener = null;
			window.open("about:blank","_self").close();
			window.location.href = "about:blank";
			document.body.innerHTML = "";
		}
	}
}

function login_state(data){
	clearTimeout(login_state_timer);
	login_state_timer = -1;
	if(data.code == 1){
		if(!init_state){
			location.reload();
			//hide_login();
			//onhide_index();
			//ws.send(JSON.stringify({type:'get_info'}));
			return;
		}
		if(data.login_state == 0){
			if(unisound_init_timer != -1){
				clearTimeout(unisound_init_timer);
			}
			start_unisound();
			document.getElementsByTagName('h3')[0].innerHTML = '等待小讯初始化。。。(请确保您当前安装的new_Unisound版本是1.8或以上！)';
			login_state_timer = setTimeout(function(){ws.send(JSON.stringify({type:'get_info'}));},1000);
			if(unisound_init_timer1 == -1){
				if(ver > 1825){
					unisound_init_timer1 = setTimeout(function(){
						reload = true;
						var btn = document.createElement("input");
						btn.type = 'button';
						btn.className = 'btn';
						btn.value = '取消隐藏小讯';
						btn.onclick = function(){
							this.value = '请稍候。。。';
							//document.getElementsByTagName('h3')[0].innerHTML = '请稍候。。。';
							ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/pm unhide com.phicomm.speaker.device'}));
							setTimeout(function(){
								ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
								setTimeout(function(){
									document.getElementsByTagName('h3')[0].innerHTML = '等待小讯初始化。。。(请确保您当前安装的new_Unisound版本是1.8或以上！)';
									alert('操作完毕！');
									location.reload();
								},3000);
							},3000);
						};
						//document.getElementsByTagName('h3')[0].parentNode.appendChild(btn);

						var btn = document.createElement("input");
						btn.type = 'button';
						btn.className = 'btn';
						btn.value = '重启小讯';
						btn.onclick = function(){
							this.value = '重启中。。。';
							ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am force-stop com.phicomm.speaker.device'}));
							setTimeout(function(){
								ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
								setTimeout(function(){
								document.getElementsByTagName('h3')[0].innerHTML = '等待小讯初始化。。。(请确保您当前安装的new_Unisound版本是1.8或以上！)';
								alert('重启完毕！');
								location.reload();
								},10000);
							},3000);
						};
						document.getElementsByTagName('h3')[0].parentNode.appendChild(btn);
						
						var btn = document.createElement("input");
						btn.type = 'button';
						btn.className = 'btn';
						btn.value = '重启音箱';;
						btn.onclick = function(){
							this.value = '重启中。。。';
							ws.send(JSON.stringify({type:'shell',shell:'stop adbd&&start adbd&&adb reboot'}));
							setTimeout(function(){
								alert('重启完毕！');
								location.reload();
							},10000);
						};
						document.getElementsByTagName('h3')[0].parentNode.appendChild(btn);
					},6000);

					
				}
			}
		}else if(data.login_state == 1){
			if(unisound_init_timer != -1){
				clearTimeout(unisound_init_timer);
				unisound_init_timer = -1;
			}
	
			if(unisound_init_timer1 != -1){
				clearTimeout(unisound_init_timer1);
				unisound_init_timer1 = -1;
			}
			
			hide_login();
			onhide_index();
			ws.send(JSON.stringify({type:'get_info'}));
		}else if(data.login_state == -4){
			if(unisound_init_timer != -1){
				clearTimeout(unisound_init_timer);
				unisound_init_timer = -1;
			}
	
			if(unisound_init_timer1 != -1){
				clearTimeout(unisound_init_timer1);
				unisound_init_timer1 = -1;
			}
			
			document.getElementsByTagName('h3')[0].innerHTML = data.login_msg;
			login_state_timer = setTimeout(function(){
				ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'login_state'}}));
			},10000);
			
		}else{
			if(unisound_init_timer != -1){
				clearTimeout(unisound_init_timer);
				unisound_init_timer = -1;
			}
	
			if(unisound_init_timer1 != -1){
				clearTimeout(unisound_init_timer1);
				unisound_init_timer1 = -1;
			}

			if(data.login_msg.indexOf('授权') > -1){
				if(ver > 1825){
					var btn = document.createElement("input");
					btn.type = 'button';
					btn.className = 'btn';
					btn.value = '重启小讯';
					btn.onclick = function(){
						document.getElementsByTagName('h3')[0].innerHTML = '重启中。。。';
						ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am force-stop com.phicomm.speaker.device'}));
						setTimeout(function(){
							ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
							setTimeout(function(){
								document.getElementsByTagName('h3')[0].innerHTML = 'R1音箱登录页面';
								alert('重启完毕！');
								location.reload();
							},10000);
						},3000);
					};
					document.getElementsByTagName('h3')[0].parentNode.appendChild(btn);
				}
				document.getElementsByTagName('h3')[0].innerHTML = data.login_msg;
				return;
			}
			alert(data.login_msg);
			if(!init_state){
				location.reload();
				return;
			}
			onhide_login();
		}
	}
}

function get_uin(uin){
	uin = uin.substr(1);
	for(i=0;i<uin.length;i++){
		if(uin[i] != 0){
			return uin.substr(i);
		}
	}
	return uin;
}

function get_cookies(data){
	cookies = [];
	for(var key in data){
		if(data.hasOwnProperty(key)){
			cookies.push(key+"="+data[key]);
		}
	}
	return cookies;
}

function Unisound(data){
	data = data.data;
	//console.log(data);
	var data = JSON.parse(data.data);
	if(data != null){
		test_arr = data;
		console.log(data);
		if(data.code == 1){
			if(data.type == 'get_qrcode'){
				update_qrcode_data(data.data);
			}else if(data.type == 'qrcode_state'){
				update_qrstate(data.data);
			}else if(data.type == 'login'){
				login(data);
			}else if(data.type == 'login_state'){
				login_state(data);
			}else if(data.type == 'api'){
				if(typeof(data.data) != 'undefined'){
					if(typeof(data.data) != "object"){
						api(data,1);
					}else{
						api(data,2);
					}
				}else{
					api(data,0);
				}
			}else if(data.type == 'get_memo' || data.type == 'add_memo' || data.type == 'update_memo' || data.type == 'del_memo'){
				memo_info(data);
			}else if(data.type == 'Main_Wakeup_Benchmark'){
				Main_Wakeup_Benchmark_info(data);
			}else if(data.type == 'get_info'){
				unisound_info(data);
			}else if(data.type == 'Submit_Play_Record'){
				
			}else if(data.type == 'asrMaxDuration'){
				asrMaxDuration_info(data);
			}
		}
	}
}


function message(data){
	var type = data.type;
	if(type == 'get_info'){
		if(unisound_init_timer != -1){
			clearTimeout(unisound_init_timer);
			unisound_init_timer = -1;
		}
	
		if(unisound_init_timer1 != -1){
			clearTimeout(unisound_init_timer1);
			unisound_init_timer1 = -1;
		}
		data = JSON.parse(data.data);
		if(init_state){
			index(data);
			return;
		}
		update_info(data);
	}else if(type == 'list'){
		data = JSON.parse(data.data);
		update_list(data);
	}else if(type == 'get_eq_config'){
		data = JSON.parse(data.data);
		update_sound_effects(data);
	}else if(type == 'login_state'){
		login_state(data.data);
	}else if(type == 'Unisound'){
		if(unisound_init_timer != -1){
			clearTimeout(unisound_init_timer);
			unisound_init_timer = -1;
		}
	
		if(unisound_init_timer1 != -1){
			clearTimeout(unisound_init_timer1);
			unisound_init_timer1 = -1;
		}
		Unisound(data);
	}else{
		if(type == 'set_dev_name' || type == 'rec_dev_name'){
			ws.send(JSON.stringify({type:'shell',type_id:'get_hostname',shell:"getprop net.hostname && netcfg"}));
		}
		var hide = false;
		if(data.type == 'shell' && data.type_id == 'query'){
			hide = true;
			set_systeminfo(data.data);
		}else if(data.type == 'shell' && data.type_id == 'useless_services_detection'){
			hide = true;
			useless_services_detection(data.data);
		}else if(data.type == 'shell' && data.type_id == 'hide_useless_services'){
			hide = true;
			var btn = document.getElementById('hide_useless_services');
			btn.value = '已隐藏无用服务！';
			setTimeout(function(){
				document.getElementById('hide_useless_services').style.display = 'none';
				update_device_info();
			},1000);
			
		}else if(data.type == 'shell' && data.type_id == 'get_hostname'){
			console.log(data);
			hide = true;
			if(data.data){
				var arr = data.data.split("\r\n");
				if(arr.length > 1){
					hostname = arr[1];
					var arr1 = [];
					arr.forEach(function(value){
						if(value.indexOf('wlan0') > -1){
							arr1 = value.split(' ');
						}
					});
					var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])/;
					arr1.forEach(function(value){
						if(value != '' && reg.test(value)){
							ip = value.split('/')[0]+':8080';
						}
					});
					if(hostname != ''){
						localStorage.setItem('update_background',0);
						setTimeout(function(){
							iframe.contentWindow.postMessage({type:'hostname',data:{hostname:hostname,ip:ip.substring(0,ip.indexOf(':')),dev_name:info.device_name,url:location.href.indexOf('?') > -1 ? location.href.split('?')[0] : location.href.split('#')[0]}},iframe.url);
						},1000);
						update_background_timer = setInterval(function(){
							var text = document.getElementById('text');
							if(localStorage.getItem('update_background') == 1){
								clearInterval(update_background_timer);
								update_background_timer = -1;
								localStorage.removeItem('update_background');
								var img = localStorage.getItem('background');
								if(img){
									document.getElementsByTagName("body")[0].style.cssText = img;
								}else{
									document.getElementsByTagName("body")[0].style.cssText = background;
								}
							}
						},100);
						dev_name = '['+hostname.substr(-4)+']';
					}
					if(document.title.substr(-6) != dev_name){
						if(document.title.substr(-1) == ']'){
							document.title = document.title.substr(0,document.title.length-6) + dev_name;
						}else{
							document.title += dev_name;
						}
						document.getElementsByTagName('h3')[0].innerHTML = document.title;
					}
				}
			}
		}else if(data.type == 'shell' && data.type_id == 'ps'){
			hide = true;
			ps_message(data.data)
		}else if(data.type == 'play'){
			hide = true;
		}else if(data.type == 'send_message' && data.type_id == 'dormancy'){
			hide = true;
			ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'get_info'}}));
		}
		var type_id = data.type_id;
		if(type_id != null  && !hide){
			var text = document.getElementById('text');
			if(data.code == 200){
				if(type_id.substr(0,2) == '点播' || type_id == '我的收藏'){
					switch_page(document.getElementById('btn_page_music'));
				}
				var tips = get_tips(type_id);
				if(tips != null){
					text.value = '['+type_id+']:'+tips;
				}else{
                    text.value = '['+type_id+']:'+data.data;
				}
            }else{
                text.value = '['+type_id+']:'+data.msg;
            }
		}
	}
}

function get_tips(type_id){
	return tips_data[type_id];
	var tips = null;
	for(var i=0;i<buttons.length;i++){
		var data = buttons[i];
		if(type_id == data[0]){
			return data[1].succ;
		}
	}
	return tips;
}

window.onclick = function(event) {
    if (event.target == popup) {
		popup.onclose();
        popup.style.display = "none";
    }
}

function index(data){
	if(reload){
		location.reload();
		return;
	}
	info = data;

	init_state = false;
    if(data.ver != null){
		ver = data.ver;
    }
    if(data.u_ver != null){
		u_ver = data.u_ver;
    }
	
	if(ver+1 > 1835){
		if(!data.Unisound){
			is_unisound = false;
		}else{
			is_unisound = true;
		}
		if(!is_unisound){
			is_new_unisound = false;
		}else{
			if(u_ver > 1000){
				is_new_unisound = true;
			}else{
				is_new_unisound = false;
			}
		}
	}
	
	iframe.style.display = 'none';
	if(custom_ip){
		iframe.url = 'http://'+ip;
	}else{
		if(typeof plus != 'undefined'){
			iframe.url = 'http://xfdown.gitee.io';
		}else{
			iframe.url = 'http://xfdown.gitee.io';
		}
	}
	iframe.src = iframe.url+'/?message';
	main_div.appendChild(iframe);
	popup.className = 'popup';
	popup.onclose = function(){alert('关闭弹窗！')};
	divs.appendChild(popup);
	//首页
	document.title = 'R1音箱控制页面';
	document.getElementsByTagName('h3')[0].innerHTML = 'R1音箱控制页面';
	var text = document.createElement('text');
	text.innerHTML = '信息：';
	texts_div.appendChild(text);
	var textarea = document.createElement('textarea');
	textarea.setAttribute('readonly','readonly');
	textarea.id = 'text';
	texts_div.appendChild(textarea);
	texts_div.appendChild(document.createElement('br'));
	var text = document.createElement('text');
	text.innerHTML = '输入：';
	texts_div.appendChild(text);
	var input = document.createElement('input');
    input.type = 'text';
    input.id = 'input';
    texts_div.appendChild(input);
	//div.appendChild(document.createElement('br'));
    if(ver > 1600 && u_ver > 1700){
		var div = document.createElement('div');
		var text = document.createElement('text');
		text.innerHTML = '发音人:';
		div.appendChild(text);
		var arr = [['萱萱','SWEET'],['小雯','FEMALE'],['糖糖','CHILDREN'],['玲玲','LZL'],['小峰','MALE'],['天天','TIANTIAN']];
		var tts_speaker = document.createElement('select');
		tts_speaker.id = 'tts_speaker';
		tts_speaker.onchange = function(){
			update_TtsSpeaker(this.value);
		}
		for(var i=0;i<arr.length;i++){
			var option = document.createElement('option');
			option.innerHTML = arr[i][0];
			option.value = arr[i][1];
		
			if(option.value == data.ttsModelType){
				option.selected = 'selected';
			}
			tts_speaker.appendChild(option);
		}
		div.appendChild(tts_speaker);
		
        var text = document.createElement('text');
	    text.innerHTML = '音乐源:';
	    div.appendChild(text);
	    var arr = [['QQ音乐','qq'],['酷我音乐','kuwo'],['网易云音乐','netease']];
	    var music_source = document.createElement('select');
        music_source.id = 'music_source';
		music_source.onchange = function(){
	    	set_music_source(this.value);
	    }
	    for(var i=0;i<arr.length;i++){
	    	var option = document.createElement('option');
	    	option.innerHTML = arr[i][0];
	    	option.value = arr[i][1];

	    	if(option.value == data.music_source){
		    	option.selected = 'selected';
	    	}
	    	music_source.appendChild(option);
	    }
	    div.appendChild(music_source);
		texts_div.appendChild(div);
    }else if(ver > 1600 && u_ver > 1600){
        var text = document.createElement('text');
	    text.innerHTML = '音乐源:';
	    div.appendChild(text);
	    var arr = [['酷我音乐','kuwo'],['QQ音乐','qq'],['网易云音乐','netease']];
	    var music_source = document.createElement('select');
        music_source.id = 'music_source';
		music_source.onchange = function(){
	    	set_music_source(this.value);
	    }
	    for(var i=0;i<arr.length;i++){
	    	var option = document.createElement('option');
	    	option.innerHTML = arr[i][0];
	    	option.value = arr[i][1];

	    	if(option.value == data.music_source){
		    	option.selected = 'selected';
	    	}
	    	music_source.appendChild(option);
	    }
	    div.appendChild(music_source);
		texts_div.appendChild(div);
	}
    divs.appendChild(texts_div);
	
	//设备信息
	if(ver+1 > 1825 || (ver < 1823 && ver > 1800)){
		device_info.style = 'display:none;';
		var div = document.createElement('div');
		div.style = 'max-width:600px;margin: 10px auto;background-color: rgba(0, 0, 0, 0.6);border-radius:15px;';
		device_info.appendChild(div)
		var div1 = document.createElement('div');//占位
		div1.style.height = '15px';
		div.appendChild(div1);
		
		if(is_new_unisound && u_ver+1 > 1800 && ver+1 > 1825){
			var text = document.createElement('text');
			text.style.color = '#66ccff';
			text.innerHTML = "登录信息：<br>";
			div.appendChild(text);
			var user_info_text = document.createElement('text');
			user_info_text.style.color = '#66ccff';
			user_info_text.id = 'user_info_text';
			div.appendChild(user_info_text);
			div.appendChild(document.createElement('br'));
		
			var text = document.createElement('text');
			text.innerHTML = "<br>授权信息：<br>";
			text.style.color = '#66ccff';
			div.appendChild(text);
			var sq_info_text = document.createElement('text');
			sq_info_text.style.color = '#66ccff';
			sq_info_text.id = 'sq_info_text';
			div.appendChild(sq_info_text);
			div.appendChild(document.createElement('br'));
		}
		var text = document.createElement('text');
		if(is_new_unisound && u_ver+1 > 1800 && ver+1 > 1825){
			text.innerHTML = "<br>系统信息：<br>";
		}else{
			text.innerHTML = "系统信息：<br>";
		}
		text.style.color = '#66ccff';
		div.appendChild(text);
		var text = document.createElement('text');
		text.style.color = '#66ccff';
		text.id = 'state_info_text';
		div.appendChild(text);
		div.appendChild(document.createElement('br'));
		
		var div1 = document.createElement('div');//占位
		div1.style.height = '15px';
		div.appendChild(div1);
		
		if(is_new_unisound && u_ver+1 > 1822 && ver+1 > 1825){
			var Main_Wakeup_Benchmark_div = document.createElement('div');
			var text = document.createElement('text');
			text.innerHTML = '唤醒难度';
			var div = document.createElement('div');div.appendChild(text);
			Main_Wakeup_Benchmark_div.appendChild(div);
			var text = document.createElement('text');
			text.innerHTML = '低';
			var div = document.createElement('div');div.style = 'width:50px;display:inline-block;';div.appendChild(text);
			Main_Wakeup_Benchmark_div.appendChild(div);
			Main_Wakeup_Benchmark.type = 'range';
			Main_Wakeup_Benchmark.min = 0;
			Main_Wakeup_Benchmark.step = 10;
			Main_Wakeup_Benchmark.max = 600;
			Main_Wakeup_Benchmark.value = 0;
			Main_Wakeup_Benchmark.addEventListener('input', function() {
				clearTimeout(Main_Wakeup_Benchmark_timer);
				Main_Wakeup_Benchmark_timer = setTimeout(function(){
					ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'Main_Wakeup_Benchmark',Benchmark:parseInt(Main_Wakeup_Benchmark.value)/100}}));
				},100);
			});
			Main_Wakeup_Benchmark_div.appendChild(Main_Wakeup_Benchmark);
			var text = document.createElement('text');
			text.innerHTML = '高';
			var div = document.createElement('div');div.style = 'width:50px;display:inline-block;';div.appendChild(text);
			Main_Wakeup_Benchmark_div.appendChild(div);
			Main_Wakeup_Benchmark_div.style = 'color:red;';
			device_info.appendChild(Main_Wakeup_Benchmark_div);
		}
		
		if(is_new_unisound && u_ver+1 > 1822 && ver+1 > 1828){
			var asrMaxDuration_div = document.createElement('div');
			var text = document.createElement('text');
			text.innerHTML = '录音时长';
			var div = document.createElement('div');div.appendChild(text);
			asrMaxDuration_div.appendChild(div);
			var text = document.createElement('text');

			var div = document.createElement('div');div.style = 'width:50px;display:inline-block;';div.appendChild(text);
			asrMaxDuration_div.appendChild(div);
			asrMaxDuration.type = 'range';
			asrMaxDuration.min = 1;
			asrMaxDuration.step = 1;
			asrMaxDuration.max = 10;
			asrMaxDuration.value = 1;
			text.innerHTML = asrMaxDuration.min = '当前';
			asrMaxDuration.addEventListener('input', function() {
				clearTimeout(asrMaxDuration_timer);
				asrMaxDuration_timer = setTimeout(function(){
					asrMaxDuration_value.innerHTML = asrMaxDuration.value+'秒';
					ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'asrMaxDuration',Duration:parseInt(asrMaxDuration.value)*1000}}));
				},100);
			});
			asrMaxDuration_div.appendChild(asrMaxDuration);
			asrMaxDuration_value.innerHTML = '未知';
			var div = document.createElement('div');div.style = 'width:50px;display:inline-block;';div.appendChild(asrMaxDuration_value);
			asrMaxDuration_div.appendChild(div);
			asrMaxDuration_div.style = 'color:red;';
			device_info.appendChild(asrMaxDuration_div);
		}
		
		if(is_new_unisound && u_ver+1 > 1800 && ver+1 > 1825){
			var btn = document.createElement("input");
			btn.type = 'button';
			btn.className = 'btn';
			btn.value = '刷新授权';
			btn.onclick = function(){
				var data1 = this;
				data1.disabled = true;
				setTimeout(function(){
					data1.disabled = false;
				},1000); 
				update_device_info();
			};
			device_info.appendChild(btn);
			
			var btn = document.createElement("input");
			btn.type = 'button';
			btn.className = 'btn';
			btn.value = '重新登录';
			btn.onclick = function(){
				if(confirm("确定要重新登录？")){
					stop_updateinfo();
					divs.innerHTML = '<h3></h3>';
					divs.appendChild(login_div);
					onhide_login();
				}
			};
			device_info.appendChild(btn);
		}

		var btn = document.createElement("input");
		btn.type = 'button';
		btn.className = 'btn';
		btn.id = 'Cleanup_process';
		btn.value = '清理进程';
		btn.onclick = function(){
			var data1 = this;
			data1.disabled = true;
			setTimeout(function(){
				data1.disabled = false;
			},1000); 
			var btn = document.getElementById('Cleanup_process');
			btn.disabled = true;
			btn.value = '请稍候。。。';
			ws.send(JSON.stringify({type:'shell',type_id:'ps',shell:'ps'}));
		};
		device_info.appendChild(btn);
		
		
		dormancy_btn = document.createElement("input");
		dormancy_btn.type = 'button';
		dormancy_btn.className = 'btn';
		dormancy_btn.id = 'dormancy_btn';
		dormancy_btn.value = '开始/退出休眠';
		dormancy_btn.style.display = 'none';
		dormancy_btn.dormancy_state = -1;
		dormancy_btn.onclick = function(){
			var data1 = this;
			data1.disabled = true;
			setTimeout(function(){
				data1.disabled = false;
			},1000);
			
			if(dormancy_btn.dormancy_state != -1){
				if(!confirm("确定要"+this.value+"吗？")){
					return;
				}
			}
			
			if(dormancy_btn.dormancy_state == 1){
				ws.send(JSON.stringify({type:'send_message',what:256,arg1:1,arg2:-1,obj:true}));
			}else if(dormancy_btn.dormancy_state == 0){
				ws.send(JSON.stringify({type:'send_message',what:256,arg1:2,arg2:-1,obj:true}));
			}
		}
		device_info.appendChild(dormancy_btn);
		
		var btn = document.createElement("input");
		btn.type = 'button';
		btn.className = 'btn';
		btn.id = 'hide_useless_services';
		btn.value = '隐藏无用服务';
		btn.style.display = 'none';
		btn.disabled = true;
		btn.onclick = function(){
			var btn = document.getElementById('hide_useless_services');
			btn.disabled = true;
			btn.value = '请稍候。。。';
			var arr = [];
			for(var i=0;i<useless_services_list.length;i++){
				arr.push('/system/bin/pm hide '+useless_services_list[i]);
			}
			ws.send(JSON.stringify({type:'shell',type_id:'hide_useless_services',shell:arr.join(' && ')}));
		};
		device_info.appendChild(btn);
		
		if(is_unisound){
			var btn = document.createElement("input");
			btn.id = 'clear_unisound';
			btn.type = 'button';
			btn.className = 'btn';
			btn.value = '清除小讯数据';
			btn.onclick = function(){
				if(ver+1 > 1825){
					var text ="确定要清除小讯数据吗？\r\n清除后需重新扫码登录才能使用！";
				}else{
					var text ="确定要清除小讯数据吗？";
				}
				if(confirm(text) && confirm("真的要清除小讯数据吗？")){
					var btn = document.getElementById('clear_unisound');
					btn.disabled = true;
					btn.value = '请稍候。。。';
					ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/pm clear com.phicomm.speaker.device'}));
					setTimeout(function(){
					ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
					alert('清除完毕，稍候请重新扫码登录！');
					btn.disabled = false;
					btn.value = '清除小讯数据';
					},3000);
				}
			};
			device_info.appendChild(btn);
		}
		
		if(u_ver+1 > 1825 && ver +1 > 1841){
			Bluetooth_prompt_tone_btn = document.createElement("input");
			Bluetooth_prompt_tone_btn.type = 'button';
			Bluetooth_prompt_tone_btn.className = 'btn';
			Bluetooth_prompt_tone_btn.id = 'Bluetooth_prompt_tone_btn';
			Bluetooth_prompt_tone_btn.value = '打开/关闭蓝牙提示音';
			Bluetooth_prompt_tone_btn.style.display = 'none';
			Bluetooth_prompt_tone_btn.state = -1;
			Bluetooth_prompt_tone_btn.onclick = function(){
				var data1 = this;
			data1.disabled = true;
			setTimeout(function(){
				data1.disabled = false;
			},1000); 
				if(Bluetooth_prompt_tone_btn.state == 1){
					ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'Set_Bluetooth_prompt_tone',enable:false}}));
					ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'get_info'}}));
				}else if(Bluetooth_prompt_tone_btn.state == 0){
					ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'Set_Bluetooth_prompt_tone',enable:true}}));
					ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'get_info'}}));
				}
			}
			device_info.appendChild(Bluetooth_prompt_tone_btn);
		}
		
		if(u_ver+1 > 1824){
			Submit_Play_Record_btn = document.createElement("input");
			Submit_Play_Record_btn.type = 'button';
			Submit_Play_Record_btn.className = 'btn';
			Submit_Play_Record_btn.id = 'Submit_Play_Record_btn';
			Submit_Play_Record_btn.value = '打开/关闭提交播放记录';
			Submit_Play_Record_btn.style.display = 'none';
			Submit_Play_Record_btn.state = -1;
			Submit_Play_Record_btn.onclick = function(){
				var data1 = this;
			data1.disabled = true;
			setTimeout(function(){
				data1.disabled = false;
			},1000); 
				if(Submit_Play_Record_btn.state == 1){
					ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'Submit_Play_Record',enable:false}}));
					ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'get_info'}}));
				}else if(Submit_Play_Record_btn.state == 0){
					ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'Submit_Play_Record',enable:true}}));
					ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'get_info'}}));
				}
			}
			device_info.appendChild(Submit_Play_Record_btn);
		}
		
		if(is_new_unisound && u_ver+1 > 1820 && ver+1 > 1815){
			var btn = document.createElement("input");
			btn.id = 'clear_memo';
			btn.type = 'button';
			btn.className = 'btn';
			btn.value = '清除闹铃/提醒';
			btn.style.display = 'none';
			btn.disabled = true;
			btn.onclick = function(){
				if(confirm("确定要清除吗？")){
					var btn = document.getElementById('clear_memo');
					btn.disabled = true;
					btn.value = '请稍候。。。';
					ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'del_memo',data:memo_list}}));
				}
			};
			device_info.appendChild(btn);
		}
		
		divs.appendChild(device_info);
	}
	//音效页面
	if(ver > 1821){
		sound_effects_div.style = 'display:none;';
		var text = document.createElement('text');
		text.innerHTML = "EQ：";
		sound_effects_div.appendChild(text);
		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = 'eq_switch';
		checkbox.onclick = function(){
			console.log(this.checked);
			ws.send(JSON.stringify({type:'set_eq_enable',enable:this.checked}));
			ws.send(JSON.stringify({type:'get_eq_config'}));
		};
		sound_effects_div.appendChild(checkbox);
		sound_effects_div.appendChild(eqs_div);
		
		var text = document.createElement('text');
		text.innerHTML = "低音：";
		sound_effects_div.appendChild(text);
		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = 'bass_switch';
		checkbox.onclick = function(){
			ws.send(JSON.stringify({type:'set_bass_enable',enable:this.checked}));
			ws.send(JSON.stringify({type:'get_eq_config'}));
		};
		sound_effects_div.appendChild(checkbox);
		sound_effects_div.appendChild(bass_div);
		
		var text = document.createElement('text');
		text.innerHTML = "响度：";
		sound_effects_div.appendChild(text);
		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = 'loudness_switch';
		checkbox.onclick = function(){
			ws.send(JSON.stringify({type:'set_loudness_enable',enable:this.checked}));
			ws.send(JSON.stringify({type:'get_eq_config'}));
		};
		sound_effects_div.appendChild(checkbox);
		sound_effects_div.appendChild(loudness_div);
		sound_effects_div.appendChild(preset_div);
		divs.appendChild(sound_effects_div);
	}
    //屏幕控制
	if(ver > 1000){
		screen_div.id = 'screen_div';
		screen_div.style = 'display:none;';
		var img = document.createElement('img');
		img.id = 'screen_img';
		img.style = 'max-width:100%;height: auto;';
		img.onclick = function(e){
			console.log('onclick');
			x = e.offsetX;
			y = e.offsetY;
			x = (x/this.clientWidth)*this.naturalWidth;
			y = (y/this.clientHeight)*this.naturalHeight;
			x = parseInt(x);
			y = parseInt(y);
			ws.send(JSON.stringify({type:'input',input:'tap '+x+' '+y}));
		};
		function handleTouchEvent(event) {
        var output = document.getElementById("output");
		console.log(event.type);
        switch (event.type) {
            case "touchstart":
				var x = event.changedTouches[0].clientX;
				var y = event.changedTouches[0].clientY;
				x = (x/this.clientWidth)*this.naturalWidth;
				y = (y/this.clientHeight)*this.naturalHeight;
				x = parseInt(x);
				y = parseInt(y);
				startx = x - 10;
				starty = y - 100;
               // output.innerHTML = "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
                break;
            case "touchend":
				var x = event.changedTouches[0].clientX;
				var y = event.changedTouches[0].clientY;
				x = (x/this.clientWidth)*this.naturalWidth;
				y = (y/this.clientHeight)*this.naturalHeight;
				x = parseInt(x) - 10;
				y = parseInt(y) - 100;
				if(startx == -1 || starty == -1){
					break;
				}
			    if(y-starty < 100 && x-startx < 100){
					if(starty-y < 100 && startx-x < 100){
						startx = -1;
						starty = -1;
						break;
					}
				}
				if(startx != -1 && starty != -1){
					console.log('swipe '+startx+' '+starty+' '+x+' '+y);
					ws.send(JSON.stringify({type:'input',input:'swipe '+startx+' '+starty+' '+x+' '+y}));
				}
				startx = -1;
				starty = -1;
                //output.innerHTML += "Touch ended (" + event.changedTouches[0].clientX + "," + event.changeTouches[0].clientY + ")";
                break;
            case "touchmove":
			
				event.preventDefault(); //阻止滚动
                //output.innerHTML += "Touch moved (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
                break;
		}
	}
		img.addEventListener("touchstart", handleTouchEvent, false);
		img.addEventListener("touchend", handleTouchEvent, false);
		img.addEventListener("touchmove", handleTouchEvent, false);
		img.onmousewheel = function(data){
			data.preventDefault();
			var x = data.offsetX;
			var y = data.offsetY;
			x = (x/this.clientWidth)*this.naturalWidth;
			y = (y/this.clientHeight)*this.naturalHeight;
			if(data.deltaY > -1){
				var new_y = y-100;
			}else{
				var new_y = y+100;
			}
			if(new Date().valueOf() - mousewheel_interval>0){
				mousewheel_interval = new Date().valueOf() +100;
				ws.send(JSON.stringify({type:'input',input:'swipe '+x+' '+y+' '+x+' '+new_y}));
			}
		
		}
		screen_div.appendChild(img);
		screen_div.appendChild(document.createElement('br'));
		var arr = [['上',19],['左',21],['确定',23],['右',22],['下',20]];
		arr = [];
		for(var i=0;i<arr.length;i++){
			var btn = document.createElement("input");
			btn.type = 'button';
			btn.className = 'btn';
			btn.value = arr[i][0];
			btn.setAttribute('data',arr[i][1]);
			btn.onclick = function(){
			send_keyevent(this.getAttribute('data'));
			};
			screen_div.appendChild(btn);
		}
		screen_div.appendChild(document.createElement('br'));
		//send_input();
		
		var arr = [['返回',4],['输入',-1,'input'],['删除',67]];
		for(var i=0;i<arr.length;i++){
			var btn = document.createElement("input");
			btn.type = 'button';
			btn.className = 'btn';
			btn.value = arr[i][0];
			if(arr[i][1] == -1){
				btn.setAttribute('data',arr[i][2]);
				if(arr[i][2] == 'input'){
					btn.onclick = function(){
						var input = prompt('请输入内容！','');
						if(input != null){
							inputs = input.split('');
							input_function = function(){
								var input_text = inputs.shift();
								if(input_text != undefined && input_text != ''){
									send_input("text "+input_text);
									setTimeout(input_function,100);
								}
							};
							input_function();
						}
					};
				}
			}else{
				btn.setAttribute('data',arr[i][1]);
				btn.onclick = function(){
					send_keyevent(this.getAttribute('data'));
				};
			}
			screen_div.appendChild(btn);
		}
		divs.append(screen_div);
	}
	//音乐
	musics_div.style = 'display: none;';
    music_pic.id= 'music_pic';
	music_pic.style = 'display: block;margin: 0px auto;position: relative;width: 200px;height: 200px;border: 2px solid #66ccff;overflow: hidden;border-radius: 100%;-webkit-animation: img 30s linear infinite;animation: img 30s linear infinite;animation-play-state:paused;';
    music_pic.src = '';
	music_lrc.innerHTML = '';
	musics_div.appendChild(music_pic); 
	music_lrc.style = 'display: none;margin: 1px auto;width: 100%;height: 203px;';
	musics_div.appendChild(music_lrc);
	music_pic.ondblclick = function(){
		var title = get_music_title(music_info);
		document.getElementsByTagName('h3')[0].innerHTML = '正在播放：'+title;
		music_pic.style.display = 'none';
		music_lrc.style.display = 'block';
		update_lrc(true);
	};
	music_lrc.ondblclick = function(){
		music_lrc.style.display = 'none';
		music_pic.style.display = 'block';
	};
	musics_div.appendChild(document.createElement('br'));
	//music_time_position.style = 'color:#66ccff;';
	music_time_position.innerHTML = '00:00';
	var div = document.createElement('div');div.style = 'width:50px;display:inline-block;';div.appendChild(music_time_position);
	musics_div.appendChild(div);
	music_time.type = 'range';
    music_time.min = 0;
    music_time.step = 1;
    music_time.max = 0;
	music_time.value = 0;
	if(ver > 1827){
		music_time.addEventListener('mousedown', function() {
			time_lock = true;
		});
		
		music_time.addEventListener('mouseup', function() {
			time_lock = false;
		});
		
		music_time.addEventListener('input', function() {
			clearTimeout(music_progress_timer);
			var position = music_time.value;
			info_time[0] = -1;
			info_time[1] = position;
			info_time[2] = music_info.duration;
			music_time_position.innerHTML = ms_to_is(position);
			update_lrc();
			music_progress_timer = setTimeout(function(){
				send(null,null,'set_position',{position:position});
				send(null,null,'send_message',{what:4,arg1:3,arg2:-1,obj:true});
			},60);
		});
	}
	musics_div.appendChild(music_time);
	//music_time_duration.style = 'color:#66ccff;';
	music_time_duration.innerHTML = '00:00';
	var div = document.createElement('div');div.style = 'width:50px;display:inline-block;';div.appendChild(music_time_duration);
	musics_div.appendChild(div);
	musics_div.appendChild(document.createElement('br'));
	var arr = [['上一首','prev'],['播放','play'],['下一首','next']];
	for(var i=0;i<arr.length;i++){
		var btn = document.createElement("input");
		btn.id = 'music_btn_'+arr[i][1];
		btn.type = 'button';
		btn.className = 'btn';
		btn.value = arr[i][0];
		btn.setAttribute('data',arr[i][1]);
		btn.onclick = function(){
			send_music_cmd(this);
		};
		musics_div.appendChild(btn);
	}
	musics_div.appendChild(document.createElement('br'));
	if(u_ver+1 > 1700){
		var arr = [['收藏歌曲','collect'],['取消收藏','cancel_collect'],['随机播放','playmode']];
	}else{
		var arr = [['随机播放','playmode']];
	}
	for(var i=0;i<arr.length;i++){
		var btn = document.createElement("input");
		btn.id = 'music_btn_'+arr[i][1];
		btn.type = 'button';
		btn.className = 'btn';
		btn.value = arr[i][0];
		if(arr[i][1] == 'collect' || arr[i][1] == 'cancel_collect'){
			btn.style.display = 'none';
		}
		if(arr[i][1] == 'playmode'){
			arr1 = [['随机播放',1],['顺序播放',2],['单曲循环',3]];
			playmode = arr1[0];
			for(ii=0;ii<arr1.length;ii++){
				if(arr1[ii][1] == data.play_mode){
					playmode = arr1[ii];
				}
			}
			btn.setAttribute('mode',playmode[1]);
			btn.value = playmode[0];
			btn.onclick = function(){
				arr1 = [['随机播放',1],['顺序播放',2],['单曲循环',3]];
				mode = parseInt(this.getAttribute('mode'))+1;
				playmode = arr1[0];
				for(i=0;i<arr1.length;i++){
					if(arr1[i][1] == mode){
						playmode = arr1[i];
					}
				}
				//this.setAttribute('mode',playmode[1]);
				//this.value = playmode[0];
				ws.send(JSON.stringify({type:'set_play_mode',mode:playmode[1]}));
				ws.send('{"type":"get_info"}');
				//$.ajax({type:'GET',ws_type:'set_play_mode',dataType:'jsonp',data:{mode:playmode[1]},success:function(data){}});
			};
		}else{
			btn.setAttribute('data',arr[i][1]);
			btn.onclick = function(){
				send_music_cmd(this);
			};
		}
		musics_div.appendChild(btn);
	}
	divs.appendChild(musics_div);
	//音量
	var vols_div = document.createElement('div');
    var text = document.createElement('text');
	text.innerHTML = '音量：';
	text.addEventListener('click',function(){
		vols.disabled = false;
		clearTimeout(vols_disabled_timer);
		vols_disabled_timer = setTimeout(function(){vols.disabled = true;},3000);
	});
	var div = document.createElement('div');div.style = 'width:50px;display:inline-block;';div.appendChild(text);
	vols_div.appendChild(div);
	vols.type = 'range';
    vols.min = 0;
    vols.step = 1;
    vols.max = 15;
	vols.value = data.vol;
    vols.addEventListener('input', function() {
		clearTimeout(vols_disabled_timer);
		vols_disabled_timer = setTimeout(function(){vols.disabled = true;},3000);
		vol_text.innerHTML = '   '+this.value+'/'+this.max;
		ws.send(JSON.stringify({type:'set_vol',vol:this.value}));
		ws.send(JSON.stringify({type:'get_info'}));
	});
	vols.disabled = true;
	vols_div.appendChild(vols);
    vol_text = document.createElement('text');
	vol_text.innerHTML = ' '+vols.value+'/'+vols.max;
	var div = document.createElement('div');div.style = 'width:30px;display:inline-block;';div.appendChild(vol_text);
	vols_div.appendChild(div);
	vols_div.style = 'color:red;';
	vols_div.addEventListener('dblclick',function(){
		vols.disabled = false;
		clearTimeout(vols_disabled_timer);
		vols_disabled_timer = setTimeout(function(){vols.disabled = true;},3000);
	});
	document.addEventListener('touchstart', function(event) {
		if (event.touches.length > 1) {
			event.preventDefault();
		}
	});
	divs.appendChild(vols_div);
	//音乐列表
	var div = document.createElement('div');//占位
	div.style.height = '15px';
	div_list.appendChild(div);
	var div = document.createElement('div');
	var text = document.createElement('text');
	text.id = 'list_title';
	text.innerHTML = '播放列表[0]';
	div_list.style = 'max-width:600px;display:none;margin: 10px auto;background-color: rgba(0, 0, 0, 0.6);border-radius:15px;';
	div.appendChild(text);
	var text = document.createElement('text');
	text.id = 'list_ico';
	text.style = 'font-size: 13px';
	text.innerHTML = '	▼';
	div.appendChild(text);
	//div_list.appendChild(document.createElement('br'));
	div.onclick = function(){
		var list_ico = document.getElementById('list_ico');
		var list_occupancy = document.getElementById('list_occupancy');
		if(lists.style.display == 'none'){
			list_occupancy.style.display = 'none';
			lists.style.display = 'block';
			list_ico.innerHTML = '	▼';
		}else{
			list_occupancy.style.display = 'block';
			lists.style.display = 'none';
			list_ico.innerHTML = '	▲';
		}
	}
	div_list.appendChild(div);
	var div = document.createElement('div');//占位
	div.id = 'list_occupancy';
	div.style.display = 'none';
	div.style.height = '15px';
	div_list.appendChild(div);
	div_list.appendChild(lists);
	lists.style = 'margin: 15px auto;max-width:600px;max-height:500px;overflow-x:hidden;overflow-y:auto;';
	list.setAttribute('border','0');
	list.setAttribute('cellspacing','0');
	list.setAttribute('cellpadding','0');
	list.setAttribute("style", "width:100%;color:#66ccff;margin: 0px auto;");
	lists.appendChild(list);
	//按钮
	//switch_btns.appendChild(document.createElement('br'));
	var arr = [['音乐','music',1000],['屏幕','screen',1000],['音效','sound_effects',1822],['设备信息','device_info',1822]];
	for(var i=0;i<arr.length;i++){
		if(ver+1 > arr[i][2]){
		var btn = document.createElement("input");
		btn.id = 'btn_page_'+arr[i][1];
		btn.type = 'button';
		btn.className = 'btn';
		//btn.style = 'padding: 10px 15px;';
		btn.value = arr[i][0];
		btn.setAttribute('data',arr[i][0]);
		btn.onclick = function(){
			switch_page(this);
		};
		switch_btns.appendChild(btn);
		}
	}
	//
	//divs.appendChild(switch_btns);
	if(location.href.indexOf('type=1') != -1){
		switch_btns.style = 'margin: 20px auto;';
		texts_div.before(switch_btns);
	}else{
		vols_div.before(switch_btns);
	}
	divs.appendChild(div_list);
	btn_states = [];
	for(var i=0;i<buttons.length;i++){
        if(buttons[i][1].min_ver == null){
            buttons[i][1].min_ver = ver;
        }
        if(buttons[i][1].max_ver == null){
            buttons[i][1].max_ver = ver;
        }
		if(buttons[i][1].min_uver == null){
            buttons[i][1].min_uver = u_ver;
        }
		if(buttons[i][1].max_uver == null){
            buttons[i][1].max_uver = u_ver;
        }
		if(buttons[i][1].is_unisound == null){
			buttons[i][1].is_unisound = is_unisound;
		}
		
		if((ver+1 > buttons[i][1].min_ver && ver-1 < buttons[i][1].max_ver) && (u_ver+1 > buttons[i][1].min_uver && u_ver-1 < buttons[i][1].max_uver) && buttons[i][1].is_unisound == is_unisound){
			var btn = document.createElement("input");
			btn.id = 'btn_'+i;
		    btn.type = 'button';
		    btn.className = 'btn';
		    btn.value = buttons[i][0];
			if(buttons[i][1].hide){
				btn.style.display = 'none';
			}
		    btn.setAttribute('data',JSON.stringify(buttons[i][1]));
		    btn.onclick = function(){
			    click(this);
		    };
			if(buttons[i][1].type > 1){
				btn_states.push(btn);
			}
		    btns_div.appendChild(btn);
		}
	}
	update_btn_state(data);
    var ver_div = document.getElementById('ver_div');
    ver_div.innerHTML = '<a style="color:red;" href="javascript:alert(get_ver());">版本号：'+ver+'</a>';
	divs.appendChild(btns_div);
	start_updateinfo();
	ws.send(JSON.stringify({type:'get_eq_config'}));
	if(navigator.userAgent.indexOf('Firefox') > -1){
		insertStyle('input[type=range] {vertical-align:middle;height: 10px;box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112;}');
	}
	if(typeof plus != 'undefined'){
		plus.key.addEventListener("volumeupbutton", function(e){
			if(parseInt(vols.value)+1 > vols.max){
				return;
			}
			var vol = parseInt(vols.value)+1;
			vol_text.innerHTML = '   '+vols.value+'/'+vols.max;
			vols.value = vol;
			ws.send(JSON.stringify({type:'set_vol',vol:vol}));
			ws.send(JSON.stringify({type:'get_info'}));
		});
		plus.key.addEventListener("volumedownbutton", function(e){
			if(parseInt(vols.value)-1<0){
				return;
			}
			var vol = parseInt(vols.value)-1;
			vol_text.innerHTML = '   '+vols.value+'/'+vols.max;
			vols.value = vol;
			ws.send(JSON.stringify({type:'set_vol',vol:vols.value}));
			ws.send(JSON.stringify({type:'get_info'}));
		});
	}
	ws.send(JSON.stringify({type:'shell',type_id:'get_hostname',shell:'getprop net.hostname && netcfg'}));
}

function unisound_info(data){
	if(data.code == 1){
		if(!is_new_unisound){
			return;
		}
		dormancy_btn.style.display = '';
		data = data.data;
		if(data.isIdle){
			dormancy_btn.value = '退出休眠';
			dormancy_btn.dormancy_state = 1;
		}else{
			dormancy_btn.value = '开始休眠';
			dormancy_btn.dormancy_state = 0;
		}
		if(Submit_Play_Record_btn != null){
			Submit_Play_Record_btn.style.display = '';
			if(data.Submit_Play_Record){
				Submit_Play_Record_btn.value = '关闭提交播放记录';
				Submit_Play_Record_btn.state = 1;
			}else{
				Submit_Play_Record_btn.value = '打开提交播放记录';
				Submit_Play_Record_btn.state = 0;
			}
		}
		if(Bluetooth_prompt_tone_btn != null){
			Bluetooth_prompt_tone_btn.style.display = '';
			if(data.Bluetooth_prompt_tone){
				Bluetooth_prompt_tone_btn.value = '关闭蓝牙提示音';
				Bluetooth_prompt_tone_btn.state = 1;
			}else{
				Bluetooth_prompt_tone_btn.value = '打开蓝牙提示音';
				Bluetooth_prompt_tone_btn.state = 0;
			}
		}
	}
}

function Main_Wakeup_Benchmark_info(data){
	if(data.code == 1 && is_new_unisound && u_ver+1 > 1822){
		Main_Wakeup_Benchmark.min = parseFloat(data.Default_Main_WakeupBenchmark)*100;
		Main_Wakeup_Benchmark.value = parseFloat(data.Main_WakeupBenchmark)*100;
	}
}

function asrMaxDuration_info(data){
	if(data.code == 1 && is_new_unisound && u_ver+1 > 1822){
		asrMaxDuration.max = parseInt(data.Default_asrMaxDuration)/1000;
		asrMaxDuration.value = parseInt(data.asrMaxDuration)/1000;
		asrMaxDuration_value.innerHTML = asrMaxDuration.value + "秒";
	}
}


function dateFormat(date, format) {
    date = new Date(date);
    date.setHours(date.getHours()-14);
    var o = {
        'M+' : date.getMonth() + 1, //month
        'd+' : date.getDate(), //day
        'H+' : date.getHours(), //hour
        'm+' : date.getMinutes(), //minute
        's+' : date.getSeconds(), //second
        'q+' : Math.floor((date.getMonth() + 3) / 3), //quarter
        'S' : date.getMilliseconds() //millisecond
    };

    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

    for (var k in o)
        if (new RegExp('(' + k + ')').test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));

    return format;
}
//————————————————
//版权声明：本文为CSDN博主「楚长川」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
//原文链接：https://blog.csdn.net/weixin_42558461/article/details/82894242


function insertStyle(cssText) {
	var head = document.getElementsByTagName("head")[0];
	var style = document.createElement("style");
	var rules = document.createTextNode(cssText);
	style.type = "text/css";
	if (style.styleSheet) {
		style.styleSheet.cssText = rules.nodeValue;
	} else {
		style.appendChild(rules);
	}
	head.appendChild(style);
	//版权声明：本文为CSDN博主「iteye_7451」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
	//原文链接：https://blog.csdn.net/iteye_7451/article/details/82202731
}


function send_keyevent(key){
	send_input('keyevent '+key);
}

function send_input(value){
	ws.send(JSON.stringify({type:'input',input:value}));
}

function switch_page(data){
	current_page = data;
	title = data.getAttribute('data');
	if(data.id == 'btn_page_music'){
		if(data.value != title){
			hide_music();
            hide_screen();
			hide_sound_effects();
			hide_device_info();
			onhide_index();
		}else{
			hide_index();
            hide_screen();
			hide_sound_effects();
			hide_device_info();
			onhide_music();
			ws.send('{"type":"list"}');
		}
	}else if(data.id == 'btn_page_screen'){
		if(data.value != title){
			hide_screen();
            hide_music();
			hide_sound_effects();
			hide_device_info();
			onhide_index();
		}else{
			hide_index();
			hide_music();
			hide_sound_effects();
			hide_device_info();
			onhide_screen();
		}
	}else if(data.id == 'btn_page_sound_effects'){
		if(data.value != title){
			hide_screen();
            hide_music();
			hide_sound_effects();
			hide_device_info();
			onhide_index();
		}else{
			hide_index();
			hide_music();
			hide_screen();
			hide_device_info();
			onhide_sound_effects();
		}
	}else if(data.id == 'btn_page_device_info'){
		if(data.value != title){
			hide_screen();
            hide_music();
			hide_sound_effects();
			hide_device_info();
			onhide_index();
		}else{
			hide_index();
			hide_music();
			hide_screen();
			hide_sound_effects();
			onhide_device_info();
		}
	}
	
	if(data.value != title){
		var arr = document.getElementsByClassName('btn');
		for(var i=0;i<arr.length;i++){
			if(arr[i].id.substr(0,8) == 'btn_page' && arr[i].id != data.id){
				arr[i].value = arr[i].getAttribute('data');
			}
		}
		data.value = title;
	}else{
		var arr = document.getElementsByClassName('btn');
		for(var i=0;i<arr.length;i++){
			if(arr[i].id.substr(0,8) == 'btn_page' && arr[i].id != data.id){
				arr[i].value = arr[i].getAttribute('data');
			}
		}
		if(data.getAttribute('data').length > 2){
			data.value = '返回首页';
		}else{
			data.value = '首页';
		}
		
	}
}

function onhide_index(){
	document.title = "R1音箱控制页面"+dev_name;
	document.getElementsByTagName('h3')[0].innerHTML = document.title;
	texts_div.style.display = "block";
	btns_div.style.display = "block";
}

function hide_index(){
	texts_div.style.display = "none";
	btns_div.style.display = "none";
}

function onhide_music(){
	start_title_scrolling();
	start_lrc();
	document.title = "R1音箱音乐控制页面"+dev_name;
	document.getElementsByTagName('h3')[0].innerHTML = document.title;
	document.getElementsByTagName('h3')[0].onclick = function(){
		title_display_time = new Date().getTime() + 2000;
		if(music_info.artist){
			var title = music_info.title+'-'+music_info.artist;
		}else{
			var title = music_info.title;
		}
		document.getElementsByTagName('h3')[0].innerHTML = '正在播放：'+title;
	};
	musics_div.style.display = "block";
	div_list.style.display = "block";
}

function hide_music(){
	stop_title_scrolling();
	stop_lrc();
	document.getElementsByTagName('h3')[0].onclick = function(){};
	musics_div.style.display = "none";
	div_list.style.display = "none";
}

function start_title_scrolling(){
	stop_title_scrolling();
	var title_scrolling = function(){
		if(music_title == ''){
			return;
		}

	music_title = music_title.substring(1) + music_title.substring(0,1);
		document.title = '正在播放：' + music_title;
	};
	title_scrolling_timer = setInterval(title_scrolling,500);
}

function stop_title_scrolling(){
	clearInterval(title_scrolling_timer);
}


function start_lrc(){
	title_display_time = new Date().getTime() + 1000;
	stop_lrc();
	lrc_timer = setInterval('update_lrc()',10);
}

function stop_lrc(){
	clearInterval(lrc_timer);
	lrc_timer = -1;
}

function onhide_screen(){
	document.title = "R1音箱屏幕控制页面"+dev_name;
	document.getElementsByTagName('h3')[0].innerHTML = document.title; 
	screen_div.style.display = "block";
	start_screen();
}

function hide_screen(){
	stop_screen();
	if(screen_div.style.display != 'none'){
		screen_div.style.display = "none";
	}
}

function onhide_sound_effects(){
	document.title = "R1音箱音效控制页面"+dev_name;
	document.getElementsByTagName('h3')[0].innerHTML = document.title; 
	sound_effects_div.style.display = "block";
	start_sound_effects();
}

function hide_sound_effects(){
	sound_effects_div.style.display = "none";
	stop_sound_effects();
}

function start_sound_effects(){
	stop_sound_effects();
	sound_effects_timer = setInterval(function(){ws.send(JSON.stringify({type:'get_eq_config'}));},1000);
}

function stop_sound_effects(){
	clearInterval(sound_effects_timer);
	sound_effects_timer = -1;
}

function start_screen(){
	ws.send('{"type":"start_screencap","interval":1}');
	document.onkeydown = function(data){
			if(data.keyCode == 13){
				send_keyevent(23);
				return false;
			}else if(data.keyCode == 37){
				send_keyevent(21);
				return false;
			}else if(data.keyCode == 38){
				send_keyevent(19);
				return false;
			}else if(data.keyCode == 39){
				send_keyevent(22);
				return false;
			}else if(data.keyCode == 40){
				send_keyevent(20);
				return false;
			}
		};
	//screen_timer = setInterval('update_screencap()',300);
}

function onhide_device_info(){
	document.title = "R1音箱信息页面"+dev_name;
	document.getElementsByTagName('h3')[0].innerHTML = document.title; 
	device_info.style.display = "block";
	update_device_info();
}

function hide_device_info(){
	clearInterval(update_device_info_timer);
	device_info.style.display = "none";
}

function load_device_info(){
	var user_info_text = document.getElementById('user_info_text');
	var sq_info_text = document.getElementById('sq_info_text');
	var api_info = device_info_data.api_info;
	if(api_info.code == 200){
		if(api_info.data.nameValuePairs){
			var data = api_info.data.nameValuePairs;
		}else{
			var data = api_info.data;
		}
		var device_info = data.device_info.nameValuePairs ? data.device_info.nameValuePairs : data.device_info;
		var user_info = data.user_info.nameValuePairs ? data.user_info.nameValuePairs : data.user_info;
		user_info_text.innerHTML = '用户：'+user_info.nick+'('+user_info.userid+')';
		if(user_info.qqmusic_login_state == 1){
			var qqmusic_login_state = '已登录('+user_info.userid+')';
		}else{
			var qqmusic_login_state = '未登录';
		}
		if(user_info.netease_uid != null){
			var netease_uid = user_info.netease_uid;
		}else{
			var netease_uid = '';
		}
		if(user_info.netease_login_state == 1 && netease_uid != ''){
			var netease_login_state = '已登录('+netease_uid+')';
		}else{
			var netease_login_state = '未登录';
		}
		if(user_info.login_time){
			var login_time = set_time(user_info.login_time);
		}else{
			var login_time = '未知';
		}
		user_info_text.innerHTML += '<br>QQ音乐：'+qqmusic_login_state;
		user_info_text.innerHTML += '<br>网易云音乐：'+netease_login_state;
		user_info_text.innerHTML += '<br>最后登录时间：'+login_time;
		sq_info_text.innerHTML = '公网IP：'+device_info.ip;
		sq_info_text.innerHTML += '<br>设备SN：'+device_info.sn;
		sq_info_text.innerHTML += '<br>设备MAC：'+device_info.mac;
		var sq_state = '未授权';
		var time = parseInt(new Date().getTime()/1000);
		if(device_info.sq_type == 1 || device_info.sq_type == 2){
			if(time > device_info.sq_expire_time){
				if(device_info.sq_type == 2){
					sq_state = '试用已过期<br>过期时间：'+set_time(device_info.sq_expire_time);
				}else{
					sq_state = '已过期<br>过期时间：'+set_time(device_info.sq_expire_time);
				}
			}else{
				if(device_info.sq_type == 2){
					sq_state = '试用授权<br>到期时间：'+set_time(device_info.sq_expire_time);
				}else{
					sq_state = '已授权<br>到期时间：'+set_time(device_info.sq_expire_time);
				}
			}
		}
		sq_info_text.innerHTML += '<br>授权状态：'+sq_state;
	}else{
		user_info_text.innerHTML = api_info.msg+'('+api_info.code+')';
	}
	update_systeminfo();
}

function update_systeminfo(){
	ws.send(JSON.stringify({type:'shell',type_id:'query',shell:'cat /proc/meminfo&&cat /proc/stat&&echo incremental:$(getprop ro.build.version.incremental)'}));
}

function set_systeminfo(data){
	var state_info_text = document.getElementById('state_info_text');
	var arr = data.split("\r\n");
	var MemTotal = -1;
	var MemFree = -1;
	var Cached = -1;
	var index = 0;
	for(var i=0;i<arr.length;i++){
		var arr1 = arr[i].split(':');
		if(arr1[0] == 'MemTotal'){
			MemTotal = parseInt(arr1[1]);
		}else if(arr1[0] == 'MemFree'){
			MemFree = parseInt(arr1[1]);
		}else if(arr1[0] == 'Cached'){
			Cached = parseInt(arr1[1]);
		}
		if(MemTotal != -1 && MemFree != -1 && Cached != -1){
			index = i+1;
			break;
		}
	}
	var cpu = null;
	var cpu1 = null;
	var btime = null;
	for(var i=index;i<arr.length;i++){
		if(arr[i].substring(0,5) == 'cpu  ' && cpu == null){
			cpu = arr[i].substring(5).split(" ");
		}else if(arr[i].substring(0,6) == 'btime '){
			btime = arr[i].substring(6);
		}else if(arr[i].substring(0,5) == 'cpu  '  && cpu1 == null){
			cpu1 = arr[i].substring(5).split(" ");
		}
		if(cpu != null && cpu1 != null && btime != null){
			index = i+1;
			break;
		}
	}
	var incremental = 0;
	for(var i=index;i<arr.length;i++){
		var arr1 = arr[i].split(':');
		if(arr1[0] == 'incremental'){
			incremental = arr1[1];
		}
	}
	state_info_text.innerHTML = '设备名称：'+(info.device_name ? info.device_name + '(' + hostname + ')' : hostname);
	state_info_text.innerHTML += '<br>固件版本：'+incremental;
	state_info_text.innerHTML += '<br>可用运存：'+parseInt((MemFree+Cached)/1024)+"MB/"+parseInt(MemTotal/1024)+"MB";
	state_info_text.innerHTML += '<br>系统已运行：'+formatTimestamp(new Date().getTime() - (btime*1000));
	state_info_text.innerHTML += '<br>信息更新时间：'+set_time(parseInt(new Date().getTime()/1000));
	
}

function update_device_info(){
	ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'Main_Wakeup_Benchmark'}}));
	ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'asrMaxDuration'}}));
	var time = new Date().getTime();
	if(time > update_device_info_time && is_new_unisound){
		update_device_info_time = time + (5*1000);
		ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'api',data:{type:'info'}}}));
	}else{
		//console.log('再等'+(update_device_info_time - time)/1000+'秒可刷新！');
	}
	clearInterval(update_device_info_timer);
	update_device_info_timer = setInterval(update_device_info1,1200);
	update_device_info1();
	
}

function update_device_info1(){
	update_systeminfo();
	ws.send(JSON.stringify({type:'shell',type_id:'useless_services_detection',shell:'/system/bin/pm list packages'}));
	if(is_new_unisound && u_ver+1 > 1820){
		ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'get_memo'}}));
		ws.send(JSON.stringify({type:'send_to_unisound',data:{type:'get_info'}}));
	}
}

function useless_services_detection(data){
	useless_services_list = [];
	var list = ['com.phicomm.speaker.exceptionreporter','com.phicomm.speaker.ijetty','com.phicomm.speaker.airskill','com.phicomm.speaker.bugreport','com.phicomm.speaker.otaservice','com.phicomm.speaker.productiontest'];
	for(var i=0;i<list.length;i++){
		if(data.indexOf(list[i]) > -1){
			useless_services_list.push(list[i]);
		}
	}
	if(useless_services_list.length > 0){
		var btn = document.getElementById('hide_useless_services');
		btn.value = '隐藏无用服务';
		btn.style.display = '';
		btn.disabled = false;
	}
}

function memo_info(data){
	if(data.data != null){
		var btn = document.getElementById('clear_memo');
		if(data.type == 'del_memo'){
			btn.value = '已清除'+(memo_list.length - data.data.length)+'个闹铃/提醒！';
		}
		if(data.data.length > 0){
			btn.style.display = '';
			btn.disabled = false;
			btn.value = '清除'+data.data.length+'个闹铃/提醒';
		}else{
			setTimeout(function(){
				var btn = document.getElementById('clear_memo');
				btn.style.display = 'none';
				btn.disabled = true;
			},1000);
		}
		memo_list = data.data;
	}
}

function api(data,type){
	if(data){
		if(data.login_state != 1){
			var user_info_text = document.getElementById('user_info_text');
			user_info_text.innerHTML = data.login_msg+'('+data.login_state+')';
		}else{
			if(type == 1){
				var data1 = JSON.parse(data.data).nameValuePairs;
			}else if(type == 2){
				var data1 = data.data;
			}
			if(data1.type == 'info'){
				device_info_data.api_info = data1;
				load_device_info();
			}
		}
	}
}

function ps_message(data){
	if(data){
		var list = data.split("\r\n");
		var list1 = [];
		var packages_list = [];
		for(var i=2;i<list.length;i++){
			var arr = list[i].split(" ");
			var arr1 = [];
			for(var ii=0;ii<arr.length;ii++){
				if(arr[ii] != ""){
					arr1.push(arr[ii]);
				}
			}
			list1.push(arr1);
			if(/\S+\.\S+/.test(arr1[arr1.length-1])){
				packages_list.push(arr1);
			}
			
		}
		list = list1;
		
		var white_list = ['com.android.bluetooth',
		'com.vipercn.viper4android_v2',
		'com.phicomm.speaker.launcher',
		'com.phicomm.speaker.systemtool',
		'com.phicomm.speaker.netctl',
		'com.phicomm.speaker.device',
		'com.phicomm.speaker.player',
		'com.droidlogic.mediacenter',
		'com.waxrain.airplaydmr'
		];
		var kill_list = [];
		for(var i=0;i<packages_list.length;i++){
			var arr = packages_list[i];
			var is_white_list = false;
			var package = arr[arr.length-1];
			for(var ii=0;ii<white_list.length;ii++){
				if(package.indexOf(white_list[ii]) > -1){
					is_white_list = true;
					break;
				}
			}
			if(!is_white_list){
				if(package.indexOf(':') < 0){
					ws.send(JSON.stringify({type:ver+1 > 1825 ? 'shell1' : 'shell',shell:'am force-stop '+package}));
					kill_list.push(package);
				}
			}
		}
		console.log(kill_list.join("\r\n"));
		
	}
	var btn = document.getElementById('Cleanup_process');
	btn.value = '已清理！';
	setTimeout(function(){
		var btn = document.getElementById('Cleanup_process');
		btn.disabled = false;
		btn.value = '清理进程';
	},1000);
	
}

//此代码来自https://www.pianshen.com/article/6116355004/
function formatTimestamp(timestamp, fullFormat) {
	var daysMillisecond = 86400000; // 一天毫秒数 1000 * 60 * 60 * 24
	var hoursMillisecond = 3600000; // 一小时毫秒数 1000 * 60 * 60
	var minutesMillisecond = 60000; // 一分钟毫秒数 1000 * 60
	
    var days = parseInt(timestamp / daysMillisecond ); 
    var hours = parseInt(timestamp % daysMillisecond / hoursMillisecond);
    var minutes = parseInt(timestamp % hoursMillisecond / minutesMillisecond );
    var seconds = parseInt(timestamp % minutesMillisecond / 1000);
    // 完整格式
    if(fullFormat){
		return days + " 天 " + hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
    }else{
    	var arr = [];
    	if(days){ arr.push(days + " 天 "); }
    	if(hours || days){ arr.push(hours + " 小时 "); }
    	if(minutes || hours || days){ arr.push(minutes + " 分钟 "); }
    	if(seconds || minutes || hours || days){ arr.push(seconds + " 秒 "); }
    	return arr.join('');
    }
}


//此代码来自https://zhuanlan.zhihu.com/p/56397071
//int str uinx 时间戳
//如果是uinx时间戳记得乘于1000
function set_time(str){
  var n = parseInt(str)*1000;
  var D = new Date(n);
  var year = D.getFullYear();//四位数年份

  var month = D.getMonth()+1;//月份(0-11),0为一月份
  month = month<10?('0'+month):month;

  var day = D.getDate();//月的某一天(1-31)
  day = day<10?('0'+day):day;

  var hours = D.getHours();//小时(0-23)
  hours = hours<10?('0'+hours):hours;

  var minutes = D.getMinutes();//分钟(0-59)
  minutes = minutes<10?('0'+minutes):minutes;

  var seconds = D.getSeconds();//秒(0-59)
  seconds = seconds<10?('0'+seconds):seconds;
  // var week = D.getDay();//周几(0-6),0为周日
  // var weekArr = ['周日','周一','周二','周三','周四','周五','周六'];

  var now_time = year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
  return now_time;
}

function stop_screen(){
	ws.send('{"type":"stop_screencap"}');
	document.onkeyup = function(){};
	//clearInterval(screen_timer);
	//screen_timer = -1;
}

function update_screencap(){
	document.getElementById('screen_img').src = ip+'/screencap?t='+new Date().getTime();
}

function get_ver(){
	var uver = u_ver.toString().split("").join('.');
	if(!is_new_unisound){
		uver = '未知';
	}
	var log = '';
	if(update_log.length > 10){
		var arr = ['...'];
		for(var i=0;i<10;i++){
			arr.push(update_log[(update_log.length-10)+i]);
		}
		log = arr.join("\r\n");
	}else{
		log = update_log.join("\r\n");
	}
    return "new_EchoService版本："+ver.toString().split("").join('.')+"\r\nnew_Unisound版本："+uver+"\r\nWEB页面版本："+web_ver.toString().split("").join('.')+"\r\n---WEB更新日志---\r\n"+log;
}

function set_music_source(source){
    send('修改音乐源成功！','修改音乐源','send_message',{what:65536,arg1:0,arg2:4,obj:source});
}

function update_sound_effects(data){
	console.log(data);
	var eq = data.eq;
	var bass = data.bass;
	var loudness = data.loudness;
	document.getElementById("eq_switch").checked = (eq.sound_effects_eq_enable == true);
	document.getElementById("bass_switch").checked = (bass.sound_effects_bass_enable == true);
	document.getElementById("loudness_switch").checked = (loudness.sound_effects_loudness_enable == true);
	
	if(eqs_div.innerHTML == ''){
		var init = false;
	}else{
		var init = true;
	}
	var Bands = eq.Bands;
	var hz_names = {60000:'低频',230000:'中低',910000:'中频',3600000:'中高',14000000:'高频'};
	for(var i=0;i<Bands.list.length;i++){
		if(!init){
			var hz = document.createElement('text');
			//hz.innerHTML = (Bands.list[i].Frequency/1000)+'Hz：';
			hz.innerHTML = hz_names[Bands.list[i].Frequency]+'：';
			var div = document.createElement('div');div.style = 'width:80px;display:inline-block;';div.appendChild(hz);
			eqs_div.appendChild(div);
			var band  = document.createElement('input');
			band.id = 'band_'+Bands.list[i].Band;
			band.type = 'range';
			band.min = parseInt(Bands.minBandLevel/100);
			band.max = parseInt(Bands.maxBandLevel/100);
			band.setAttribute('Band',Bands.list[i].Band);
			band.addEventListener('input', function() {
				var Band = this.getAttribute('Band');
				//document.getElementById('band_text_'+Band).innerHTML = '   '+parseInt(this.value/100)+'dB';
				document.getElementById('band_text_'+Band).innerHTML = '   '+this.value+'dB';
				ws.send(JSON.stringify({type:'set_eq_bandlevel',band:Band,level:(this.value*100)}));
				ws.send(JSON.stringify({type:'get_sq_config'}));
			});
			eqs_div.appendChild(band);
			
			var text = document.createElement('text');
			text.id = 'band_text_'+Bands.list[i].Band;
			var div = document.createElement('div');div.style = 'width:50px;display:inline-block;';div.appendChild(text);
			eqs_div.appendChild(div);
			
			eqs_div.appendChild(document.createElement('div'));
		}else{
			var band  = document.getElementById('band_'+Bands.list[i].Band);
			var text = document.getElementById('band_text_'+Bands.list[i].Band);
		}
		
		if(!mousedown){
			band.value = parseInt(Bands.list[i].BandLevel/100);
		}
		text.innerHTML = '   '+(Bands.list[i].BandLevel/100)+'dB';
	}
	
	if(bass_div.innerHTML == ''){
		var init = false;
	}else{
		var init = true;
	}
	if(!init){
		var title = document.createElement('text');
		title.innerHTML = '低音增强：';
		var div = document.createElement('div');div.style = 'width:80px;display:inline-block;';div.appendChild(title);
		bass_div.appendChild(div);
		
		var range  = document.createElement('input');
		range.id = 'bass_value';
		range.type = 'range';
		range.min = 0;
		range.max = 1000;
		range.addEventListener('input', function() {
			document.getElementById('bass_text_value').innerHTML = '   '+(this.value/10)+'%';
			ws.send(JSON.stringify({type:'set_bass_strength',strength:this.value}));
			ws.send(JSON.stringify({type:'get_sq_config'}));
		});
		bass_div.appendChild(range);
		
		var text = document.createElement('text');
		text.id = 'bass_text_value';
		var div = document.createElement('div');div.style = 'width:50px;display:inline-block;';div.appendChild(text);
		bass_div.appendChild(div);
	}else{
		var range  = document.getElementById('bass_value');
		var text = document.getElementById('bass_text_value');
	}
	
	if(!mousedown){
		range.value = bass.Current_Strength;
	}
	text.innerHTML = '   '+(bass.Current_Strength/10)+'%';
	
	if(loudness_div.innerHTML == ''){
		var init = false;
	}else{
		var init = true;
	}
	if(!init){
		var title = document.createElement('text');
		title.innerHTML = '响度控制：';
		var div = document.createElement('div');div.style = 'width:80px;display:inline-block;';div.appendChild(title);
		loudness_div.appendChild(div);
		
		var range  = document.createElement('input');
		range.id = 'loudness_value';
		range.type = 'range';
		range.min = -3000;
		range.max = 3000;
		range.addEventListener('input', function() {
			document.getElementById('loudness_text_value').innerHTML = '   '+(this.value/100)+'dB';
			ws.send(JSON.stringify({type:'set_loudness_gain',gain:this.value}));
			ws.send(JSON.stringify({type:'get_sq_config'}));
		});
		loudness_div.appendChild(range);
		
		var text = document.createElement('text');
		text.id = 'loudness_text_value';
		var div = document.createElement('div');div.style = 'width:50px;display:inline-block;';div.appendChild(text);
		loudness_div.appendChild(div);
	}else{
		var range  = document.getElementById('loudness_value');
		var text = document.getElementById('loudness_text_value');
	}
	
	if(!mousedown){
		range.value = loudness.Current_Gain;
	}
	text.innerHTML = '   '+(loudness.Current_Gain/100)+'dB';
	
	if(preset_div.innerHTML == ''){
		var init = false;
	}else{
		var init = true;
	}
	var Preset_list = eq.Preset_list;
	var Current_Preset = eq.Current_Preset;
	if(Preset_list.length > 0 && Current_Preset == -1){
		Preset_list.unshift({Preset:-1,Name:'Custom'});
	}
	if(!init){
		var title = document.createElement('text');
		title.innerHTML = '预设EQ：';
		var div = document.createElement('div');div.style = 'display:inline-block;';div.appendChild(title);
	    var preset = document.createElement('select');
        preset.id = 'preset_list';
		preset.onchange = function(){
			ws.send(JSON.stringify({type:'set_eq_preset',preset:this.value}));
			ws.send(JSON.stringify({type:'get_sq_config'}));
	    };
	    for(var i=0;i<Preset_list.length;i++){
	    	var option = document.createElement('option');
	    	option.innerHTML = Preset_list[i].Name;
	    	option.value = Preset_list[i].Preset;
	    	if(option.value == Current_Preset){
		    	option.selected = 'selected';
	    	}
	    	preset.appendChild(option);
	    }
	    div.appendChild(preset);
		//preset_div.appendChild(div);
	}else{
		var preset = document.getElementById('preset_list');
		for(var i=0;i<preset.length;i++){
			if(preset[i].value == Current_Preset){
				preset[i].selected = 'selected';
			}
		}
	}
}

function update_list(data){
		
		var i = 0;
		var list_title = document.getElementById('list_title');
		if(data.playList.length<1){
			List = [];
			list.innerHTML = '';
			list_title.innerHTML = '播放列表[0]';
			return;
		}
		List = data;
		list.innerHTML = '';
		list_title.innerHTML = '播放列表['+data.playList.length+']';
		play_index = data.playIndex;
		for(i=0;i<data.playList.length;i++){
			var tr = document.createElement('tr');
			tr.className = 'span';
			if(data.playIndex == i){
				var span = document.createElement('span');
				span.innerHTML = '[正在播放]';
				//span.style.color = 'red';
				tr.setAttribute('playing',true);
				tr.appendChild(span);
			}else{
				tr.setAttribute('playing',false);
			}
			tr.onclick  = function(){
				if(this.getAttribute('playing') == 'true'){
					return;
				}
				send(null,null,'play',{index:this.getAttribute('index')});
			};
			var span = document.createElement('span');
			span.innerHTML = (i+1)+'.'+get_music_title(data.playList[i]);
			tr.setAttribute('index',i);
			tr.appendChild(span);
			list.appendChild(tr);
		}
        if(data.playIndex>-1){
            lists.scrollTop = list.getElementsByTagName('tr')[data.playIndex].offsetTop;
        }
}

function send_music_cmd(data){
	type = data.getAttribute('data');
	if(type == 'prev'){
		send(null,null,'prev',{});
	}else if(type == 'next'){
		send(null,null,'next',{});
	}else if(type == 'pause'){
		send(null,null,'send_message',{what:4,arg1:2,arg2:-1,obj:true});
	} if(type == 'play'){
		send(null,null,'send_message',{what:4,arg1:3,arg2:-1,obj:true});
	}else if(type == 'collect'){
		if(!confirm("确定要收藏["+get_music_title(music_info)+"]吗？")){
			return;
		}
		send(null,null,'send_message',{what:65536,arg1:0,arg2:6});
	}else if(type == 'cancel_collect'){
		if(!confirm("确定要取消收藏["+get_music_title(music_info)+"]吗？")){
			return;
		}
		send(null,null,'send_message',{what:65536,arg1:0,arg2:7});
	}
	ws.send('{"type":"get_info"}');
}

function update_btn_state(data){
	if(btn_states.length > 0){
		for(var i=0;i<btn_states.length;i++){
			var param = JSON.parse(btn_states[i].getAttribute('data'));
			if(param.type == 2){
				if(param.state[0] == 0){
					var is = [];
					var index = -1;
					for(var ii=0;ii<param.state[2].length;ii++){
					    if(!Array.isArray(param.state[2][ii])){
					    	is.push(param.state[2][ii]);
					    }else{
					    	is = param.state[2][ii];
					    }
						for(var iii=0;iii<is.length;iii++){
							if(is[iii] == data[param.state[1]]){
								index = ii;
								break;
							}
						}
						if(index != -1){
							break;
						}
					}
					if(index == -1){
						btn_states[i].style.display = 'none';
					}else{
						btn_states[i].style.display = '';
						btn_states[i].value = param.title[index];
					}
					
				}
			}else if(param.type == 3){
				var query = false;
				for(var ii=0;ii<param.state[1].length;ii++){
					if(param.state[1][ii] == data[param.state[0]]){
						query = true;
						break;
					}
				}
				if(query){
					btn_states[i].style.display = '';
				}else{
					btn_states[i].style.display = 'none';
				}
			}
		}
	}
}


function update_info(data){
	$('input[type=range]').bind('mousedown',function(){mousedown = true;});
	$('input[type=range]').bind('mouseup',function(){mousedown = false;});
	
	if(data.ver != null){
		if(ver != data.ver){
			location.reload();
			return;
		}
	}
	if(data.u_ver != null){
		if(u_ver != data.u_ver){
			location.reload();
		return;
		}
	}
	
	info = data;
	
	if(data.u_ver != null){
       u_ver = data.u_ver;
    }
	
    if(data.ver != null){
		if(ver != data.ver){
			ver = data.ver;
			var ver_div = document.getElementById('ver_div');
			ver_div.innerHTML = '<a style="color:red;" href="javascript:alert(get_ver());">版本号：'+ver+'</a>';
		}
    }
	if(ver+1 > 1835){
		if(!data.Unisound){
			if(is_unisound == true){
				location.reload();
				return;
			}
		}else{
			if(is_unisound == false){
				location.reload();
				return;
			}
		}
	}
	
	if(!mousedown){
		vols.value = data.vol;
	}
			vol_text.innerHTML = '   '+vols.value+'/'+vols.max;
            var tts_speaker = document.getElementById('tts_speaker');
            if(tts_speaker != null){
			    for(i=0;i<tts_speaker.length;i++){
			    	if(tts_speaker[i].value == data.ttsModelType){
			    		tts_speaker[i].selected = 'selected';
			    	}
		    	}
            }
			update_btn_state(data);
            if(ver > 1600){
                if(u_ver > 1600){
                    var music_source = document.getElementById('music_source');
				    if(music_source){
					    for(i=0;i<music_source.length;i++){
					    	if(music_source[i].value == data.music_source){
						    	music_source[i].selected = 'selected';
						    }
					    }
				    }
                }
                arr = [['随机播放',1],['顺序播放',2],['单曲循环',3]];
                playmode = arr[0];
                for(i=0;i<arr.length;i++){
                    if(arr[i][1] == data.play_mode){
                        playmode = arr[i];
                    }
                }
                btn = document.getElementById('music_btn_playmode');
                btn.setAttribute('mode',playmode[1]);
                btn.value = playmode[0];
            }
			if(u_ver+1 > 1700){
				if(data.music_info){
					if(data.music_info.ItemType == 0 || data.music_info.ItemType == 1){
						document.getElementById('music_btn_collect').style.display = '';
						document.getElementById('music_btn_cancel_collect').style.display = '';
					}else{
						document.getElementById('music_btn_collect').style.display = 'none';
						document.getElementById('music_btn_cancel_collect').style.display = 'none';	
					}
				}else{
					document.getElementById('music_btn_collect').style.display = 'none';
					document.getElementById('music_btn_cancel_collect').style.display = 'none';
				}
			}

	        if(musics_div.style.display == "none"){
		        return;
	        }
			music_info = data.music_info;
			if(data.play_type == 2){
				if(music_info == null){
					document.getElementsByTagName('h3')[0].innerHTML = '正在播放：DLNA模式';
					document.title = document.getElementsByTagName('h3')[0].innerHTML;
				}
			}else if(data.play_type == 3){
				document.getElementsByTagName('h3')[0].innerHTML = '正在播放：AirPlay模式';
				document.title = document.getElementsByTagName('h3')[0].innerHTML;
			}else if(data.play_type == 4){
				document.getElementsByTagName('h3')[0].innerHTML = '正在播放：蓝牙模式';
				document.title = document.getElementsByTagName('h3')[0].innerHTML;
			}
			
			if(data.play_type == 2 || data.play_type == 3){
				document.getElementById('music_btn_prev').disabled = true;
				document.getElementById('music_btn_next').disabled = true;
				if(data.play_type == 3){
					document.getElementById('music_btn_play').disabled = true;
				}
				document.getElementById('music_btn_playmode').style.display = 'none';
			}else{
				document.getElementById('music_btn_play').disabled = false;
				document.getElementById('music_btn_prev').disabled = false;
				document.getElementById('music_btn_next').disabled = false;
				if(data.play_type == 1){
					document.getElementById('music_btn_playmode').style.display = '';
				}else{
					document.getElementById('music_btn_playmode').style.display = 'none';
				}
			}
			
			var music_btn_play = document.getElementById('music_btn_play');
            if(music_info != null){
				if(typeof(music_info.arist) != 'undefined'){
					music_info.artist = music_info.arist;
				}
                if(data.play_state || (data.music_info.state != 2 && data.play_type != 4) || ((data.music_info.state == 1 || data.music_info.state == 2) && data.play_type == 4)){
				    music_pic.style.webkitAnimationPlayState = "running";
                    music_btn_play.value = '暂停';
                    music_btn_play.setAttribute('data','pause');
                }else{
                    music_pic.style.webkitAnimationPlayState = "paused";
				    music_btn_play.value = '播放';
                    music_btn_play.setAttribute('data','play');
                }
                if(music_id != music_info.id || data.play_type == 2 || data.play_type == 4){
					info_time = [];
					lrcs = [];
					music_id = music_info.id;
					
					if(music_info.albumUrl != null && music_info.albumUrl != ''){
						music_pic.src = music_info.albumUrl;
					}else{
						music_pic.src = '';
					}
					music_lrc.innerHTML = '';
					stop_title_scrolling();
					music_title = '';
					var title = get_music_title(music_info);
					if(data.play_type == 2){
						if(title != 'undefined'){
							title = '[DLNA模式]'+title;
							document.getElementsByTagName('h3')[0].innerHTML = '正在播放：'+title;
						}
					}else if(data.play_type == 4){
						if(title != 'undefined'){
							document.getElementsByTagName('h3')[0].innerHTML = '正在播放：蓝牙模式['+title+']';
						}else{
							document.getElementsByTagName('h3')[0].innerHTML = '正在播放：蓝牙模式';
						}
					}else{
						document.getElementsByTagName('h3')[0].innerHTML = '正在播放：'+title;
					}
					update_music_info();
				}
				
				if(!time_lock){
					info_time[0] = parseInt(music_info.timestamp);
					info_time[0] = new Date().getTime();
					if(music_info.position > 0 || music_info.duration > 0){
						if(music_info.position > music_info.duration){
							info_time[1] = music_info.position;
							info_time[2] = music_info.position;
							if(music_info.duration < 1){
								music_time.disabled = true;
							}
						}else{
							music_time.disabled = false;
							info_time[1] = music_info.position;
							info_time[2] = music_info.duration;
						}
					}else{
						music_time.disabled = false;
						info_time[1] = music_info.position;
						info_time[2] = music_info.duration;
					}
				}
                var title = get_music_title(music_info);
				if(title_display_time - new Date().getTime() > 0){
					if(data.play_type == 2){
						if(title != 'undefined'){
							title = '[DLNA模式]'+title;
							document.getElementsByTagName('h3')[0].innerHTML = '正在播放：'+title;
						}
					}else if(data.play_type == 4){
						if(title != 'undefined'){
							document.getElementsByTagName('h3')[0].innerHTML = '正在播放：蓝牙模式['+title+']';
						}else{
							document.getElementsByTagName('h3')[0].innerHTML = '正在播放：蓝牙模式';
						}
					}else{
						document.getElementsByTagName('h3')[0].innerHTML = '正在播放：'+title;
					}
				}
            }else{
                if(music_id != null || (play_type != 0 && data.play_type == 0)){
					stop_title_scrolling();
					music_title = '';
					info_time = [];
                    music_id = null;
					lrcs = [];
                    list.innerHTML = '';
					var list_title = document.getElementById('list_title');
					list_title.innerHTML = '播放列表[0]';
					document.title = 'R1音箱音乐控制页面'+dev_name;
					document.getElementsByTagName('h3')[0].innerHTML = document.title; 
                    music_pic.src = '';
					music_lrc.innerHTML = '';
                }

                if(data.play_state){
				    music_pic.style.webkitAnimationPlayState = "running";
                    music_btn_play.value = '暂停';
                    music_btn_play.setAttribute('data','pause');
                }else{
                    music_pic.style.webkitAnimationPlayState = "paused";
				    music_btn_play.value = '播放';
                    music_btn_play.setAttribute('data','play');
				}
			}
		play_type = data.play_type;
}

function get_music_title(data){
	if(!data.title){
        return data.album;
	}else if(data.artist){
		return data.title+'-'+data.artist;
    }else if(data.album){
        return data.title+'-'+data.album;
    }else{
		return data.title;
	}
}

function update_music_info(){
	var success = function(data){
		if(data.code == 1){
			var title = get_music_title(music_info);
			title = title + '	';
			title_display_time = new Date().getTime() + 1000;
			document.getElementsByTagName('h3')[0].innerHTML = '正在播放：'+title;
			document.title = '正在播放：' + title;
			music_title = title;
			start_title_scrolling();
			api_music_info = data.data;
			if(music_id != api_music_info.id){
				update_music_info();
				return;
			}
			music_pic.src = api_music_info.pic;
			var arr = api_music_info.lrc.replace(/\]\[/g,']\r\n[').match(/(\[\d{1,3}:\d{1,2}.\d{1,3}\])(.*)/g);
			lrcs = [];
			for(var i = 0;i<arr.length;i++){
				var match = arr[i].match(/(\[\d{1,3}:\d{1,2}.\d{1,3}\])/g);
				if(match != null){
					var time = match[match.length-1];
					var text = $.trim(arr[i].substring(arr[i].indexOf(time)+time.length));
					//break;
					for(var ii=0;ii<match.length;ii++){
						time = match[ii];
						if(time != ''){
							var lrc = [];
							var key = is_to_ms(time.substr(1,time.length-2));
							if(!isNaN(key)){
								lrc[0] = key;
								lrc[1] = text;
								lrcs.push(lrc);
							}
						}
					}
				}
			}
			lrcs.sort(function(a,b){
				if(a[0] > b[0]){
					return 0;
				}else{
					return -1;
				}
			});
		}else{
			lrcs = [];
		}
		update_lrc(true);
	};
	var error = function(){
	};
	$.ajax({type:'GET',url:'http://wxfsq.com:86/music/',dataType:'jsonp',data:{info:music_id},success:success,error:error});
	ws.send('{"type":"list"}');
}

function update_lrc(update=false){
	
	if(info_time.length < 1){
		music_time.max = 0;
		music_time.value = 0;
		music_time_duration.innerText = ms_to_is(music_time.max);
		music_time_position.innerText = ms_to_is(music_time.value);
	}
	
	if(update == false){
		if(title_display_time - new Date().getTime() > 0 || music_pic.style.webkitAnimationPlayState != 'running'){
			if(info_time.length > 1){
				music_time.max = parseInt(info_time[2]);
				music_time.value = parseInt(info_time[1]);
				music_time_duration.innerText = ms_to_is(music_time.max);
				music_time_position.innerText = ms_to_is(music_time.value);
			}
			return;
		}
	}
	
	if(info_time[0] != -1){
		var time = parseInt(info_time[1]+(new Date().getTime() - info_time[0]));
	}else{
		var time = parseInt(info_time[1]);
	}
	
	if(musics_div.style.display == "block" && !time_lock && info_time[2]){
		music_time.max = parseInt(info_time[2]);
		music_time.value = time;
		music_time_duration.innerText = ms_to_is(music_time.max);
		music_time_position.innerText = ms_to_is(music_time.value);
	}
	
	
	
	var arr = [];
	for(var i=0;i<lrcs.length;i++){
		if(lrcs[i][1] != ''){
			arr.push(lrcs[i]);
		}
	}
	
	if(arr.length > 0 && info_time[2] > 0){
		var index = -1;
		for(var i=0;i<arr.length;i++){
			if(parseInt(arr[i][0]) > time){
				if(i > 0){
					index = i - 1;
				}else{
					index = i;
				}
				break;
			}else{
				if(i == arr.length-1){
					index = i;
				}
			}
		}
		var index1 = -1;
		for(var i=0;i<lrcs.length;i++){
			if(parseInt(lrcs[i][0]) > time){
				if(i > 0){
					index1 = i - 1;
				}else{
					index1 = i;
				}
				break;
			}else{
				if(i == lrcs.length-1){
					index1 = i;
				}
			}
		}
		if(index1 > -1){
			if(music_lrc.style.display != "block"){
				lrc = lrcs[index1][1];
				if(lrc != document.getElementsByTagName('h3')[0].innerHTML){
					document.getElementsByTagName('h3')[0].innerHTML = lrc;
				}
				
			}else{
				index -= 1;
				var lrc_list = [];
				for(var i=0;i<3;i++){
					if(Array.isArray(arr[index+i])){
						var lrc = arr[index+i][1];
					}else{
						var lrc = "";
					}
					
					var html = "";
						if(i == 1){
							if(lrcs[index1][1] == ''){
								html = "<h3 class='lrc' style='font-size: 19px;'>"+lrc+"<br></br></h3>";
							}else{
								html = "<h3 class='lrc' style='font-size: 19px;color:red;'>"+lrc+"<br></br></h3>";
							}
						}else if(i == 2){
							html = "<h3 class='lrc' style=''>"+lrc+"</h3>";
						}else{
							html = "<h3 class='lrc' style='height:13px'></h3><h3 class='lrc' style=''>"+lrc+"<br></br></h3>";
						}
						lrc_list.push(html);
				}
				
				if(bak_lrc != lrc_list.join("")){
					music_lrc.innerHTML = lrc_list.join("");
					bak_lrc = lrc_list.join("");
				}
			}
		}
		
	}
}

function switch_musicpic(){
	music_lrc.style.display = 'none';
	music_pic.style.display = 'block';
}

function set_h3(text){
	document.getElementsByTagName('h3')[0].innerHTML = text;
}

function is_to_ms(time){
	var arr = time.split(':');
	if(!isNaN(arr[0])){
		var ms = (arr[0]*60)*1000;
		ms += (arr[1]*1000);
		return parseInt(ms);
	}else{
		return time;
	}
}


function start_updateinfo(time=1000){
	stop_updateinfo();
	clearInterval(ping_timer);
	timer = setInterval(function(){
		if(ws != null){
			ws.send(JSON.stringify({type:'get_info'}));
		}
	},time);
}

function ms_to_is(m){
	s = parseInt(m/1000);
	i = ''+parseInt(s/60);
	s = ''+parseInt(s%60);
	if(s.length < 2)s = '0'+s;
	if(i.length < 2)i = '0'+i;
	return i+':'+s;
}

function stop_updateinfo(){
	clearInterval(timer);
	timer = -1;
}

function update_TtsSpeaker(value){
	send('修改发音人成功！','修改发音人','send_message',{what:65536,arg1:0,arg2:2,obj:value});
}


function click(data){
	var data1 = data;
	data1.disabled = true;
	setTimeout(function(){
		data1.disabled = false;
	},1000); 
	var param = JSON.parse(data.getAttribute('data'));
	var input = document.getElementById('input');
	if(param.type == 1 || param.type == 3){
		if(input.value == ''){
			if(data.value == '修改唤醒词'){
				if(info.main_wakeup_word != null && info.main_wakeup_word.length > 0){
					param.err = '当前唤醒词为：'+info.main_wakeup_word[0]+"\r\n"+param.err;
				}
			}else if(data.value == '修改设备名'){
				if(info.device_name != null){
					param.err = '当前设备名为：'+info.device_name+"\r\n"+param.err;
				}
			}else if(data.value == '设置氛围灯亮度'){
				if(info.music_light_luma != null){
					param.err = '当前亮度为：'+info.music_light_luma+"\r\n"+param.err;
				}
			}else if(data.value == '设置颜色渐变速度'){
				if(info.music_light_chroma != null){
					param.err = '当前渐变速度为：'+info.music_light_chroma+"\r\n"+param.err;
				}
			}
			if(param.err != null){
			     var text = document.getElementById('text');
			     text.value = '['+data.value+']:'+param.err;
				 alert('['+data.value+']:'+param.err);
			     return;
			}
		}
        var json = JSON.stringify(param.param).replace('${'+param.input+'}',input.value);
		if(data.value != '执行shell'){
			input.value = '';
		}
		send(param.succ,data.value,param.ws_type,JSON.parse(json));
	}else if(param.type == 2){
		var index = 0;
		for(var i=0;i<param.title.length;i++){
			if(param.title[i] == data.value){
				index = i;
				break;			
			}
		}
		if(param.state[0] == 0){
			if(data.value == '打开氛围灯' || data.value == '关闭氛围灯'){
				//setTimeout(function(){send(param.succ[index],'打开氛围灯','send_message',{what:4,arg1:67,arg2:0})},500);
			}
			send(param.succ[index],data.value,param.ws_type,param.param[index]);
		}else if(param.state[0] == 1){
			if(input.value == ''){
			    if(param.err != null){
			         var text = document.getElementById('text');
			         text.value = '['+data.value+']:'+param.err[index];
			         return;
			    }
		    }
            var json = JSON.stringify(param.param[index]).replace('${'+param.input[index]+'}',input.value[index]);
		    send(param.succ[index],data.value,param.ws_type,JSON.parse(json));
		}
		ws.send('{"type":"get_info"}');
    }else if(param.type == -1){
        if(param.itemType == 'set_background'){
			var text = document.getElementById('text');
			//text.value = '当前背景：'+(localStorage.getItem('background') ? localStorage.getItem('background') : '默认背景');
			if(!confirm(input.value == '' ? "确定要恢复默认背景吗？" : "确定要设置新的背景吗？")){
				return;
			}
			iframe.contentWindow.postMessage({type:'set_background',value:input.value,ip:ip.substring(0,ip.indexOf(':')),hostname:hostname},iframe.url);
            if(input.value == ''){
                img = background;
                localStorage.removeItem('background');
                text.value = '已恢复默认背景！';
            }else{
                img = 'background: url("'+input.value+'") center top / cover no-repeat fixed;';
                localStorage.setItem('background',img);
                text.value = '设置背景图片成功！';
            }
            document.getElementsByTagName("body")[0].style.cssText = img;
        }else if(param.itemType == 'reboot_unisound'){
			if(!confirm("确定要重启小讯吗？")){
				return;
			}
			document.getElementsByTagName('h3')[0].innerHTML = '重启中。。。';
			ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am force-stop com.phicomm.speaker.device'}));
			setTimeout(function(){
				ws.send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
				setTimeout(function(){
					document.getElementsByTagName('h3')[0].innerHTML = document.title;
					alert('重启完毕！');
				},10000);
			},3000);
		}else if(param.itemType == 'reboot'){
			if(!confirm("确定要重启音箱吗？")){
				return;
			}
			document.getElementsByTagName('h3')[0].innerHTML = '重启中。。。';
			ws.send(JSON.stringify({type:'shell',shell:'stop adbd&&start adbd&&adb reboot'}));
			setTimeout(function(){
				document.getElementsByTagName('h3')[0].innerHTML = document.title;
				alert('重启完毕！');
			},10000);
		}else if(param.itemType == 'open_net_config'){
			if(!confirm("确定要打开配网模式吗？\r\n打开后网页控制将断开！")){
				return;
			}
			ws.send(JSON.stringify({type:'send_message',what:262144,arg1:1}));
			alert("已打开！\r\n请使用配网工具进行配网！");
		}else if(param.itemType == 'upload_page'){
			location.href = '/upload';
		}else if(param.itemType == 'test'){
			localStorage.removeItem('background');
			alert('ok');
		}else if(param.itemType == 'connect_page'){
			if(typeof plus != 'undefined'){
				location.href = 'http://xfdown.gitee.io/?t='+new Date().getTime();
			}else{
				location.href = 'http://xfdown.gitee.io/?t='+new Date().getTime();
			}
		}
    }else{
        if(data.value == '打开氛围灯' && ver > 1500){
            setTimeout(function(){send(param.succ,'打开氛围灯','send_message',{what:4,arg1:67,arg2:0})},500);
        }
        send(param.succ,data.value,param.ws_type,param.param);
	}
	
}


function send(tips,type,ws_type,data,call=null){
	if(type != null){
		tips_data[type] = tips;
		var text = document.getElementById('text');
		text.value = '['+type+']:请稍候。。。';
		data.type_id = type;
	}
	data.type = ws_type;
	ws.send(JSON.stringify(data));
}

function load(){

    var head = "<meta charset='UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1,user-scalable=0,maximum-scale=1,viewport-fit=cover'><meta name='format-detection' content='telephone=no'><meta name='renderer' content='webkit'/><meta name='force-rendering' content='webkit'/><meta http-equiv='X-UA-Compatible' content='IE=Edge,chrome=1'/><meta name='referrer' content='never'><title>R1音箱控制页面</title><link rel='stylesheet' href='//xfdown.gitee.io/new_r1_control.css?t="+new Date().getTime()+"'/><link rel='shortcut icon' href='//q1.qlogo.cn/g?b=qq&nk=203017966&s=100' sizes='100x100'/></head>";
    document.getElementsByTagName("head")[0].innerHTML = head;
	document.body.appendChild(main_div);
	main_div.style = 'height:100%';
	main_div.appendChild(divs);
    divs.id = 'divs';
    divs.style = 'text-align: center;display:block;margin:0px auto;';
    //document.getElementsByTagName("body")[0].innerHTML = "" + document.getElementsByTagName("body")[0].innerHTML;;
    divs.innerHTML = '<h3></h3>';
	divs.appendChild(login_div);
	
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//xfdown.gitee.io/jquery.min.js';
    main_div.appendChild(script);
	if(location.href.indexOf('noimg') == -1){
		var background1 = localStorage.getItem('background');
		if(background1){
			document.getElementsByTagName("body")[0].style.cssText = background1;
		}else{
			document.getElementsByTagName("body")[0].style.cssText = background;
		}
	}else{
		document.getElementsByTagName("body")[0].style.cssText = background;
	}
    var div = document.createElement('div');
    div.id = 'qun_div';
    //div.style = 'position:relative; bottom: 10px;';
    div.style = 'position: absolute;';
    div.innerHTML = "<a id='qun' style='color:red;' href='https://jq.qq.com/?_wv=1027&k=hTbg34eR'>斐讯R1音箱交流群：772694950</a>";
    main_div.appendChild(div);
    var div = document.createElement('div');
    div.id = 'ver_div';
    div.style = 'position: absolute; right:5px;color:red;';
    main_div.appendChild(div);
	var div = document.createElement('div');//占位
	div.style.height = '18px';
	main_div.appendChild(div);
}