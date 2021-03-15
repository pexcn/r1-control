if(!ip){
	var ip = '';
}
if(!ver){
    var ver = 1000;
}
var u_ver = 1000;
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
var buttons = [['点播音乐',{url:ip+'/send_message',input:'obj',param:{what:65536,arg1:0,arg2:1,obj:'播放${obj}'},type:1,min_ver:1600,err:'请输入要点播的音乐！',succ:'点播成功！'}],
['点播电台',{url:ip+'/send_message',input:'obj',param:{what:65536,arg1:0,arg2:1,obj:'收听${obj}'},type:1,min_ver:1600,err:'请输入要点播的音乐！',succ:'点播成功！'}],
['点播歌单',{url:ip+'/send_message',input:'obj',param:{what:65536,arg1:0,arg2:9,obj:'${obj}'},type:1,min_ver:1700,err:'请输入要点播的歌单链接！',succ:'点播成功！'}],
['我的收藏',{url:ip+'/send_message',param:{what:65536,arg1:0,arg2:8},type:0,min_ver:1700,succ:'好的，播放收藏歌单！'}],
['打开蓝牙',{url:ip+'/send_message',param:{what:256,arg1:3,arg2:-1},type:0,succ:'已开启蓝牙！'}],
['关闭蓝牙',{url:ip+'/send_message',param:{what:64,arg1:2,arg2:-1},type:0,succ:'已关闭蓝牙！'}],
['打开氛围灯',{url:ip+'/send_message',param:{what:4,arg1:64,arg2:1},type:0,succ:'已开启氛围灯！'}],
['关闭氛围灯',{url:ip+'/send_message',param:{what:4,arg1:64,arg2:0},type:0,succ:'已关闭氛围灯！'}],
['执行命令',{url:ip+'/shell',input:'shell',param:{shell:'${shell}'},type:1,err:'请输入要执行的命令！'}],
['修改唤醒词',{url:ip+'/send_message',input:'obj',param:{what:65536,arg1:0,arg2:3,obj:'${obj}'},type:1,min_ver:1600,err:'请输入要修改的唤醒词！',succ:'唤醒词修改成功！'}],
['设置氛围灯亮度',{url:ip+'/send_message',input:'arg2',param:{what:4,arg1:65,arg2:'${arg2}'},type:1,err:'请输入要修改的亮度值！',succ:'氛围灯亮度修改成功！'}],
['切换官方氛围效果',{url:ip+'/send_message',param:{what:4,arg1:67,arg2:0},type:0,max_ver:1500,succ:'已切换为官方氛围效果！'}],
['切换七彩氛围效果',{url:ip+'/send_message',param:{what:4,arg1:67,arg2:1},type:0,max_ver:1500,succ:'已切换为七彩氛围效果！'}],
['切换官方氛围效果',{url:ip+'/send_message',param:{what:4,arg1:68,arg2:0},type:0,min_ver:1600,succ:'已切换为官方氛围效果！'}],
['切换七彩氛围效果',{url:ip+'/send_message',param:{what:4,arg1:68,arg2:2},type:0,min_ver:1600,succ:'已切换为七彩氛围效果！'}],
['设置背景图片',{type:-1,itemType:'set_background'}]
];
var background = 'background:url("data:image/jpeg;base64,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") no-repeat center top;background-size:cover;background-repeat:no-repeat;background-attachment: fixed;';
//['播放音乐',{url:ip+'/send_message',type:2,itemType:'play'}]];
load();
window.onload = function(){
	init();
}


function init(){
	if(ver < 1){
		ver = 1000;
	}
	
	var h3 = document.getElementsByTagName('h3')[0];
	if(ver > 1500){
		h3.innerHTML = '请稍后。。。';
		success = function(data){
			if(data.code != 200){
				document.getElementsByTagName('h3')[0].innerHTML = '音箱连接失败，请刷新页面重试！';
				return;
			}
			data = JSON.parse(data.data);
			new_index(data);
		};
		error = function(data){
			document.getElementsByTagName('h3')[0].innerHTML = '音箱连接失败，请刷新页面重试！';
		};
		$.ajax({type:'GET',url:ip+'/get_info',dataType:'jsonp',success:success,error:error});
		
		
	}else{
	    index();
	}
}


function index(){
	var text = document.createElement('text');
	text.style = 'color:#FF6347;';
	text.innerHTML = '状态：';
	divs.append(text);
	var textarea = document.createElement('textarea');
	textarea.setAttribute('readonly','readonly');
	textarea.id = 'text';
	textarea.style = 'display:block; margin:10px auto; width:70%; height:200px;font-size: 16px;color: #FF6347;border-color: #FF6347;outline: none;background:rgba(255, 255, 255, 0.2);border-radius:15px;';
	divs.append(textarea);
	divs.append(document.createElement('br'));
	var text = document.createElement('text');
	text.style = 'color:#FF6347;';
	text.innerHTML = '输入：';
	divs.append(text);
	var input = document.createElement('input');
    input.type = 'text';
    input.id = 'input';
    input.style = 'display:block;margin:10px auto; width:70%; height:50px;font-size: 16px;color: #FF6347;border-color: #FF6347;outline: none;background:rgba(255, 255, 255, 0.2);border-radius:15px;';
    divs.append(input);
    divs.append(document.createElement('br'));
    var text = document.createElement('text');
	text.style = 'color:#FF6347;';
	text.innerHTML = '音量：';
	divs.appendChild(text);
	vols.type = 'range';
    vols.min = 0;
    vols.step = 1;
    vols.max = 15;
    vols.addEventListener('input', function() {vol_text.innerHTML = '   '+this.value+'/'+this.max;$.ajax({type:'GET',url:ip+'/set_vol',dataType:'jsonp',data:{'vol':this.value}})});
	divs.appendChild(vols);
    setInterval(function(){$.ajax({type:'GET',url:ip+'/set_vol',dataType:'jsonp',data:{},success:function(data){if(data.code == 200){vols.value = data.data;vol_text.innerHTML = '   '+vols.value+'/'+vols.max;}}});},1000);
    vol_text = document.createElement('text');
	vol_text.style = 'color:#FF6347;';
	vol_text.innerHTML = ' 0/15';
	divs.appendChild(vol_text);
    divs.append(document.createElement('br'));
	for(var i=0;i<buttons.length;i++){
        if(buttons[i][1].min_ver == null){
            buttons[i][1].min_ver = ver;
        }
        if(buttons[i][1].max_ver == null){
            buttons[i][1].max_ver = ver;
        }
		if((ver+1 > buttons[i][1].min_ver && ver-1 < buttons[i][1].max_ver)){
			var btn = document.createElement("input");
			btn.id = 'btn_'+i;
		    btn.type = 'button';
		    btn.className = 'btn';
		    btn.value = buttons[i][0];
		    btn.setAttribute('data',JSON.stringify(buttons[i][1]));
		    btn.onclick = function(){
			    click(this);
		    };
		    divs.appendChild(btn);
		}
	}
}

function new_index(data){
    if(data.ver != null){
        ver = data.ver;
    }
    if(data.u_ver != null){
        u_ver = data.u_ver;
    }
	//首页
	document.getElementsByTagName('h3')[0].innerHTML = 'R1音箱控制页面';
	var text = document.createElement('text');
	text.style = 'color:#FF6347;';
	text.innerHTML = '状态：';
	texts_div.appendChild(text);
	var textarea = document.createElement('textarea');
	textarea.setAttribute('readonly','readonly');
	textarea.id = 'text';
	textarea.style = 'display:block; margin:10px auto; width:70%; height:200px;font-size: 16px;color: #FF6347;border-color: #FF6347;outline: none;background:rgba(255, 255, 255, 0.2);border-radius:15px;';
	texts_div.appendChild(textarea);
	texts_div.appendChild(document.createElement('br'));
	var text = document.createElement('text');
	text.style = 'color:#FF6347;';
	text.innerHTML = '输入：';
	texts_div.appendChild(text);
	var input = document.createElement('input');
    input.type = 'text';
    input.id = 'input';
    input.style = 'display:block;margin:10px auto; width:70%; height:50px;font-size: 16px;color: #FF6347;border-color: #FF6347;outline: none;background:rgba(255, 255, 255, 0.2);border-radius:15px;';
    texts_div.appendChild(input);
	texts_div.appendChild(document.createElement('br'));
	var text = document.createElement('text');
	text.style = 'color:#FF6347;';
	text.innerHTML = '修改发音人：';
	texts_div.appendChild(text);
	var arr = [['萱萱','SWEET'],['小雯','FEMALE'],['糖糖','CHILDREN'],['玲玲','LZL'],['小峰','MALE'],['天天','TIANTIAN']];
	var tts_speaker = document.createElement('select');
    tts_speaker.id = 'tts_speaker';
	tts_speaker.style = 'color: rgb(255, 99, 71); border-radius: 10px; width:50%; background-color: rgba(255, 255, 255, 0.5); font-size: 16px; margin: 15px 10px;';
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
	texts_div.appendChild(tts_speaker);
	texts_div.appendChild(document.createElement('br'));


    if(ver > 1600 && u_ver > 1600){
        var text = document.createElement('text');
	    text.style = 'color:#FF6347;';
	    text.innerHTML = '修改音乐源：';
	    texts_div.appendChild(text);
	    var arr = [['酷我音乐','kuwo'],['QQ音乐','qq'],['网易云音乐','netease']];
	    var music_source = document.createElement('select');
        music_source.id = 'music_source';
	    music_source.style = 'color: rgb(255, 99, 71); border-radius: 10px; width:50%; background-color: rgba(255, 255, 255, 0.5); font-size: 16px; margin: 15px 10px;';
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
	    texts_div.appendChild(music_source);
	    texts_div.appendChild(document.createElement('br'));
    }
    divs.appendChild(texts_div);
    //屏幕控制
	if(ver > 1000){
		screen_div.style = 'display:none;';
		var img = document.createElement('img');
		img.id = 'screen_img';
		img.style = 'max-width:100%;height: auto;';
		img.onclick=function(e){
			x = e.offsetX;
			y = e.offsetY;
			x = (x/this.clientWidth)*720;
			y = (y/this.clientHeight)*480;
			$.ajax({type:'GET',
			url:ip+'/shell',
			dataType:'jsonp',
			data:{shell:'input tap '+x+' '+y},
			success:function(data){}});
		};
		screen_div.appendChild(img);
		screen_div.appendChild(document.createElement('br'));
		var arr = [['上',19],['左',21],['确定',23],['右',22],['下',20]];
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
		var arr = [['返回',4]];
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
		divs.append(screen_div);
		divs.append(document.createElement('br'));
	}

	//音乐
	musics_div.style = 'display: none;';
    music_pic.id= 'music_pic';
	music_pic.style = 'margin: 20px;position: relative;width: 200px;height: 200px;border: 2px solid #FF6347;overflow: hidden;border-radius: 100%;-webkit-animation: img 8s linear infinite;animation: img 8s linear infinite;animation-play-state:paused;';
    music_pic.src = '';
	musics_div.appendChild(music_pic);
	musics_div.appendChild(document.createElement('br'));
	music_time_position.style = 'color:#FF6347;';
	music_time_position.innerHTML = '00:00 ';
	musics_div.appendChild(music_time_position);
	music_time.type = 'range';
    music_time.min = 0;
    music_time.step = 1;
    music_time.max = 0;
	music_time.value = 0;
    //music_time.addEventListener('input', function() {vol_text.innerHTML = '   '+this.value+'/'+this.max;$.ajax({type:'GET',url:ip+'/set_vol',dataType:'jsonp',data:{'vol':this.value}})});
	musics_div.appendChild(music_time);
	music_time_duration.style = 'color:#FF6347;';
	music_time_duration.innerHTML = ' 00:00';
	musics_div.appendChild(music_time_duration);
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
			//click(this);
		};
		musics_div.appendChild(btn);
	}
	musics_div.appendChild(document.createElement('br'));
    var arr = [['随机播放','playmode']];
	for(var i=0;i<arr.length;i++){
		var btn = document.createElement("input");
		btn.id = 'music_btn_'+arr[i][1];
		btn.type = 'button';
		btn.className = 'btn';
		btn.value = arr[i][0];
		arr1 = [['随机播放',1],['顺序播放',2],['单曲循环',3]];
		playmode = arr1[0];
		for(i=0;i<arr1.length;i++){
			if(arr1[i][1] == data.play_mode){
				playmode = arr1[i];
			}
		}
		btn.setAttribute('mode',playmode[1]);
		btn.value = playmode[0];
		btn.onclick = function(){
			arr = [['随机播放',1],['顺序播放',2],['单曲循环',3]];
			mode = parseInt(this.getAttribute('mode'))+1;
			playmode = arr[0];
			for(i=0;i<arr.length;i++){
				if(arr[i][1] == mode){
					playmode = arr[i];
				}
			}
			//this.setAttribute('mode',playmode[1]);
			//this.value = playmode[0];
			$.ajax({type:'GET',url:ip+'/set_play_mode',dataType:'jsonp',data:{mode:playmode[1]},success:function(data){}});
		};
		musics_div.appendChild(btn);
	}
	divs.appendChild(musics_div);
	//音量
    var text = document.createElement('text');
	text.style = 'color:#FF6347;';
	text.innerHTML = '音量：';
	divs.appendChild(text);
	vols.type = 'range';
    vols.min = 0;
    vols.step = 1;
    vols.max = 15;
	vols.value = data.vol;
    vols.addEventListener('input', function() {vol_text.innerHTML = '   '+this.value+'/'+this.max;$.ajax({type:'GET',url:ip+'/set_vol',dataType:'jsonp',data:{'vol':this.value}})});
	divs.appendChild(vols);
    vol_text = document.createElement('text');
	vol_text.style = 'color:#FF6347;';
	vol_text.innerHTML = ' '+vols.value+'/'+vols.max;
	divs.appendChild(vol_text);
    divs.append(document.createElement('br'));
	//音乐列表
	var text = document.createElement('text');
	text.style = 'color:#FF6347;';
	text.innerHTML = '播放列表';
	div_list.style = 'display:none;';
	div_list.appendChild(text);
	div_list.appendChild(lists);
	lists.style = 'margin: 10px auto;max-width:600px;max-height:500px;border-radius:15px;overflow-x:hidden;overflow-y:auto;background-color: rgba(0, 0, 0, 0.5);';
	list.setAttribute('border','0');
	list.setAttribute('cellspacing','0');
	list.setAttribute('cellpadding','0');
	list.setAttribute("style", "color:#FF6347;margin: 5px auto;");
	lists.appendChild(list);
	//按钮
	var arr = [['音乐页面'],['屏幕控制']];
	for(var i=0;i<arr.length;i++){
		var btn = document.createElement("input");
		btn.id = 'btn_'+i;
		btn.type = 'button';
		btn.className = 'btn';
		btn.value = arr[i][0];
		btn.setAttribute('data',arr[i][0]);
		btn.onclick = function(){
			switch_page(this);
		};
		divs.appendChild(btn);
	}
	divs.appendChild(document.createElement('br'));
	divs.appendChild(div_list);
	for(var i=0;i<buttons.length;i++){
        if(buttons[i][1].min_ver == null){
            buttons[i][1].min_ver = ver;
        }
        if(buttons[i][1].max_ver == null){
            buttons[i][1].max_ver = ver;
        }
		if((ver+1 > buttons[i][1].min_ver && ver-1 < buttons[i][1].max_ver)){
			var btn = document.createElement("input");
			btn.id = 'btn_'+i;
		    btn.type = 'button';
		    btn.className = 'btn';
		    btn.value = buttons[i][0];
		    btn.setAttribute('data',JSON.stringify(buttons[i][1]));
		    btn.onclick = function(){
			    click(this);
		    };
		    btns_div.appendChild(btn);
		}
	}
    var ver_div = document.getElementById('ver_div');
    ver_div.innerHTML = '<a style="color:#FF6347;" href="javascript:alert(get_ver());">版本号：'+ver+'</a>';
	divs.appendChild(btns_div);
	start_updateinfo();
}

function send_keyevent(key){
    $.ajax({type:'GET',
	url:ip+'/shell',
	dataType:'jsonp',
	data:{shell:'input keyevent '+key},
	success:function(data){}});
}

function switch_page(data){
	title = data.getAttribute('data');
	if(data.id == 'btn_0'){
		if(data.value != title){
			hide_music();
            hide_screen();
			onhide_index();
		}else{
			hide_index();
            hide_screen();
			onhide_music();
			update_list();
			
		}
	}else if(data.id == 'btn_1'){
		if(data.value != title){
			hide_screen();
            hide_music();
			onhide_index();
		}else{
			hide_index();
			hide_music();
			onhide_screen();
		}
	}
	
	if(data.value != title){
		data.value = title;
	}else{
		data.value = '返回首页';
	}
}

function onhide_index(){
	document.getElementsByTagName('h3')[0].innerHTML = 'R1音箱控制页面';
	texts_div.style.display = "block";
	btns_div.style.display = "block";
}

function hide_index(){
	texts_div.style.display = "none";
	btns_div.style.display = "none";
}

function onhide_music(){
	document.getElementsByTagName('h3')[0].innerHTML = 'R1音箱音乐控制页面';
	musics_div.style.display = "block";
	div_list.style.display = "block";
}

function hide_music(){
	musics_div.style.display = "none";
	div_list.style.display = "none";
}

function onhide_screen(){
	document.getElementsByTagName('h3')[0].innerHTML = 'R1音箱屏幕控制页面';
	screen_div.style.display = "block";
	start_screen();
}

function hide_screen(){
	screen_div.style.display = "none";
	stop_screen();
}

function start_screen(){
	screen_timer = setInterval('update_screencap()',300);
}

function stop_screen(){
	clearInterval(screen_timer);
	screen_timer = -1;
}


function update_screencap(){
	document.getElementById('screen_img').src = ip+'/screencap?t='+new Date().getTime();
}

function get_ver(){
    return "new_EchoService版本："+ver+"\r\nnew_Unisound版本："+u_ver;
}

function set_music_source(source){
    get('修改音乐源成功！','修改音乐源',ip+'/send_message',{what:65536,arg1:0,arg2:4,obj:source});
}

function update_list(){
	$.ajax({type:'GET',url:ip+'/list',dataType:'jsonp',success:function(data){
		if(data.code != 200){
			return;
		}
		data = JSON.parse(data.data);
		var i = 0;
		if(data.playList.length<1){
			return;
		}
		list.innerHTML = '';
		for(i=0;i<data.playList.length;i++){
			var tr = document.createElement('tr');
			tr.className = 'span';
			if(data.playIndex == i){
				var span = document.createElement('span');
				span.innerHTML = '[正在播放]';
				span.style.color = '#FF0000';
				tr.setAttribute('playing',true);
				tr.appendChild(span);
			}else{
				tr.setAttribute('playing',false);
			}
			tr.onclick  = function(){
				if(this.getAttribute('playing') == 'true'){
					return;
				}
				get(null,'播放指定歌曲',ip+'/play',{index:this.getAttribute('index')});
			};
			var span = document.createElement('span');
            if(data.playList[i].artist){
			    span.innerHTML = (i+1)+'.'+data.playList[i].title+'-'+data.playList[i].artist;
            }else if(data.playList[i].album ){
                span.innerHTML = (i+1)+'.'+data.playList[i].title+'-'+data.playList[i].album;
            }else{
                span.innerHTML = (i+1)+'.'+data.playList[i].title;
            }
			tr.setAttribute('index',i);
			tr.appendChild(span);
			list.appendChild(tr);
		}
        if(data.playIndex>-1){
            lists.scrollTop = list.getElementsByTagName('tr')[data.playIndex].offsetTop;
        }
	}});
	
}

function send_music_cmd(data){
	type = data.getAttribute('data');
	if(type == 'prev'){
		get(null,'上一首',ip+'/prev',{});
		//get('上一首',ip+'/send_message',{what:4,arg1:5,arg2:0});
		//setTimeout(function(){get('上一首',ip+'/send_message',{what:4,arg1:3,arg2:0});},500);
	}else if(type == 'next'){
		get(null,'下一首',ip+'/next',{});
		//get('下一首',ip+'/send_message',{what:4,arg1:6,arg2:0});
		//setTimeout(function(){get('下一首',ip+'/send_message',{what:4,arg1:3,arg2:0});},500);
	}else if(type == 'pause'){
		//get('暂停',ip+'/pause',{});
		get(null,'暂停',ip+'/send_message',{what:4,arg1:2,arg2:0});
	} if(type == 'play'){
		//get('播放',ip+'/play',{});
		get(null,'播放',ip+'/send_message',{what:4,arg1:3,arg2:0});
	}
	
}


function start_updateinfo(){
	success = function(data){
			if(data.code != 200){
				return;
			}
			data = JSON.parse(data.data);
            if(data.u_ver != null){
                u_ver = data.u_ver;
            }
            if(data.ver != null){
                ver = data.ver;
                 var ver_div = document.getElementById('ver_div');
                 ver_div.innerHTML = '<a style="color:#FF6347;" href="javascript:alert(get_ver());">版本号：'+ver+'</a>';
            }
            
			vols.value = data.vol;
			vol_text.innerHTML = '   '+vols.value+'/'+vols.max;
            var tts_speaker = document.getElementById('tts_speaker');
            if(tts_speaker != null){
			    for(i=0;i<tts_speaker.length;i++){
			    	if(tts_speaker[i].value == data.ttsModelType){
			    		tts_speaker[i].selected = 'selected';
			    	}
		    	}
            }

            if(ver > 1600 && u_ver > 1600){
                var music_source = document.getElementById('music_source');
                for(i=0;i<music_source.length;i++){
				    if(music_source[i].value == data.music_source){
				    	music_source[i].selected = 'selected';
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

	        if(musics_div.style.display != "block"){
		        return;
	        }
			music_info = data.music_info;
			if(data.play_type == 2){
				document.getElementsByTagName('h3')[0].innerHTML = '正在播放：DLNA模式';
			}else if(data.play_type == 3){
				document.getElementsByTagName('h3')[0].innerHTML = '正在播放：投屏模式';
			}else if(data.play_type == 4){
				document.getElementsByTagName('h3')[0].innerHTML = '正在播放：蓝牙模式';
			}
			
			var music_btn_play = document.getElementById('music_btn_play');
            if(music_info != null){
                if(data.play_state || data.music_info.state != 2){
				    music_pic.style.webkitAnimationPlayState = "running";
                    music_btn_play.value = '暂停';
                    music_btn_play.setAttribute('data','pause');
                }else{
                    music_pic.style.webkitAnimationPlayState = "paused";
				    music_btn_play.value = '播放';
                    music_btn_play.setAttribute('data','play');
                }
                if(music_id != music_info.id){
					music_id = music_info.id;
					//music_pic.src = 'https://service-8knxpnnt-1256217539.cd.apigw.tencentcs.com/release/xiaofei?pic='+music_id;
                    music_pic.src = 'http://wxfsq.com:86/music/?pic='+music_id;
					update_list();
				}
				music_time.max = music_info.duration;
				music_time.value = music_info.position;
				music_time_duration.innerText = m_to_is(music_time.max);
				music_time_position.innerText = m_to_is(music_time.value);
                if(music_info.arist){
                    var title = music_info.title+'-'+music_info.arist;
                }else{
                    var title = music_info.title;
                }
				document.getElementsByTagName('h3')[0].innerHTML = '正在播放：'+title;
            }else{
                if(music_id != null){
                    music_id = null;
                    list.innerHTML = '';
                    document.getElementsByTagName('h3')[0].innerHTML = 'R1音箱音乐控制页面';
                    music_pic.src = '';
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
		};
	timer = setInterval(function(){$.ajax({type:'GET',url:ip+'/get_info',dataType:'jsonp',success:success})},1000);
}


function m_to_is(m){
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
	get('修改发音人成功！','修改发音人',ip+'/send_message',{what:65536,arg1:0,arg2:2,obj:value});
}


function click(data){
	var param = JSON.parse(data.getAttribute('data'));
	var input = document.getElementById('input');
	if(param.type == 1){
		if(input.value == ''){
			if(param.err != null){
			     var text = document.getElementById('text');
			     text.value = '['+data.value+']:'+param.err;
			     return;
			}
		}
        var json = JSON.stringify(param.param).replace('${'+param.input+'}',input.value);
		get(param.succ,data.value,param.url,JSON.parse(json));
	}else if(param.type == 2){
        if(param.itemType == 'play'){
            var json = '{"itemList":[{"itemType":0,"title":" ","url":"'+input.value+'","itemId":"1","album":"","artist":" "}]}';
            var call = function(d){
                    var text = document.getElementById('text');
                    if(d.code == 200){
                        text.value = '['+data.value+']:已提交，开始播放。。。';
                        get(param.succ,data.value+'[play]',param.url,{what:4,arg1:3});
                    }else{
                        text.value = '['+data.value+']:'+d.msg;
                    }
                };
            get(param.succ,data.value,param.url,{what:4,arg1:1,obj:json},call);
        }
    }else if(param.type == -1){
        if(param.itemType == 'set_background'){
            var text = document.getElementById('text');
            if(input.value == ''){
                img = background;
                localStorage.removeItem('background');
                text.value = '已恢复默认背景！';
            }else{
                img = 'background: url("'+input.value+'") center top / cover no-repeat fixed;';
                localStorage.setItem('background',img);
                text.value = '设置背景图片成功！';
            }
            document.getElementsByTagName("body")[0].style.cssText=img;
        }
    }else{
        if(data.value == '打开氛围灯' && ver > 1500){
            setTimeout(function(){get(param.succ,'打开氛围灯',ip+'/send_message',{what:4,arg1:67,arg2:0})},500);
        }
        get(param.succ,data.value,param.url,param.param);
	}
}


function get(tips,type,url,data,call=null){
    var text = document.getElementById('text');
    text.value = '['+type+']:请稍后。。。';
    if(call == null){
        call = function(data){
            var text = document.getElementById('text');
            if(data.code == 200){
                if(type.substr(0,2) == '点播'){
                    switch_music();
                }
				if(tips != null){
					text.value = '['+type+']:'+tips;
				}else{
                    text.value = '['+type+']:'+data.data;
				}
            }else{
                text.value = '['+type+']:'+data.msg;
            }
        };
    }
	$.ajax({type:'GET',
	url:url,
	dataType:'jsonp',
	data:data,
	success:call});
}

function load(){
    var head = "<meta charset='UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1,user-scalable=0,viewport-fit=cover'><meta name='format-detection' content='telephone=no'><meta name='referrer' content='never'><title>R1音箱控制页面</title><link rel='stylesheet' href='https://xfdown.gitee.io/r1_control.css?t="+new Date().getTime()+"'/></head>";
     document.getElementsByTagName("head")[0].innerHTML = head;
     divs.id = 'divs';
     divs.style = 'text-align: center;display:block;margin:10px auto';
     document.getElementsByTagName("body")[0].innerHTML = "<h3>R1音箱控制页面</h3>" + document.getElementsByTagName("body")[0].innerHTML;;
     document.getElementsByTagName("body")[0].appendChild(divs);
     var script = document.createElement('script');
     script.type = 'text/javascript';
     script.src = 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js';
     document.getElementsByTagName("body")[0].appendChild(script);
     var background1 = localStorage.getItem('background');
     if(background1){
         document.getElementsByTagName("body")[0].style.cssText = background1;
    }else{
        document.getElementsByTagName("body")[0].style.cssText = background;
    }
     var div = document.createElement('div');
     div.id = 'qun_div';
     //div.style = 'position:relative; bottom: 10px;';
     div.style = 'position: absolute;';
     div.innerHTML = "<a id='qun' style='color:#FF6347;' href='https://jq.qq.com/?_wv=1027&k=hTbg34eR'>斐讯R1音箱交流群：772694950</a>";
     document.getElementsByTagName("body")[0].appendChild(div);
     var div = document.createElement('div');
     div.id = 'ver_div';
     div.style = 'position: absolute; right:5px;color:#FF6347;';
     document.getElementsByTagName("body")[0].appendChild(div);
}