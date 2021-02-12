if(!ip){
	var ip = '';
}
var h3 = document.getElementsByTagName('h3')[0];
var divs = document.createElement('div');
var buttons = [['打开蓝牙',{url:ip+'/send_message',param:{what:64,arg1:1,arg2:-1},type:0}],
['关闭蓝牙',{url:ip+'/send_message',param:{what:64,arg1:2,arg2:-1},type:0}],
['打开氛围灯',{url:ip+'/send_message',param:{what:4,arg1:64,arg2:1},type:0}],
['关闭氛围灯',{url:ip+'/send_message',param:{what:4,arg1:64,arg2:0},type:0}],
['重启音箱',{url:ip+'/shell',param:{shell:'reboot'},type:0}],
['执行命令',{url:ip+'/shell',input:'shell',param:{shell:'${shell}'},type:1}],
['播放音乐',{url:ip+'/send_message',type:2,itemType:'play'}]];

window.onload = function(){
	load();
	var text = document.createElement('text');
	text.style = 'color:#FF6347;';
	text.innerHTML = '状态：';
	divs.append(text);
	var textarea = document.createElement('textarea');
	textarea.setAttribute('readonly','readonly');
	textarea.id = 'text';
	textarea.style = 'display:block; margin:10px auto; width:80%; height:200px;font-size: 16px;color: #FF6347;border-color: #FF6347;outline: none;background:rgba(255, 255, 255, 0.2);border-radius:15px;';
	divs.append(textarea);
	divs.append(document.createElement('br'));
	var text = document.createElement('text');
	text.style = 'color:#FF6347;';
	text.innerHTML = '输入：';
	divs.append(text);
	var input = document.createElement('input');
    input.type = 'text';
    input.id = 'input';
    input.style = 'display:block;margin:10px auto; width:80%; height:50px;font-size: 16px;color: #FF6347;border-color: #FF6347;outline: none;background:rgba(255, 255, 255, 0.2);border-radius:15px;';
    divs.append(input);
    divs.append(document.createElement('br'));
	
	
	for(var i=0;i<buttons.length;i++){
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


function click(data){
	var param = JSON.parse(data.getAttribute('data'));
	var input = document.getElementById('input');
	if(param.type == 1){
        var json = JSON.stringify(param.param).replace('${'+param.input+'}',input.value);
		get(data.value,param.url,JSON.parse(json));
	}else if(param.type == 2){
        if(param.itemType == 'play'){
            var json = '{"itemList":[{"itemType":0,"title":" ","url":"'+input.value+'","itemId":"1","album":"","artist":" "}]}';
            var call = function(d){
                    var text = document.getElementById('text');
                    if(d.code == 200){
                        text.value = '['+data.value+']:已提交，开始播放。。。';
                        get(data.value+'[play]',param.url,{what:4,arg1:3});
                    }else{
                        text.value = '['+data.value+']:'+d.msg;
                    }
                };
            get(data.value,param.url,{what:4,arg1:1,obj:json},call);
        }
    }else{
		get(data.value,param.url,param.param);
	}
}


function get(type,url,data,call=null){
    var text = document.getElementById('text');
    text.value = '['+type+']:请稍后。。。';
    if(call == null){
        call = function(data){
            var text = document.getElementById('text');
            if(data.code == 200){
                text.value = '['+type+']:'+data.data;
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
    var head = "<meta charset='UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1,user-scalable=0,viewport-fit=cover'><meta name='format-detection' content='telephone=no'><meta name='referrer' content='never'><title>R1音箱控制页面</title><style>h3{text-align:center;color:#FF6347;}.div_list{	border-radius:15px;}.more{	background-color: rgba(0, 0, 0, 0.5);	color: #FF6347;	text-align: center;	display: block;	margin: 5px auto;	font-size: 16px;	padding: 15px 100px;	border-radius:15px;}.more:active{	background-color: rgba(0, 0, 0, 0.6);}.span{	color: #FF6347;	text-align: center;	display: block;	margin: 10 auto;	font-size: 16px;	padding: 15px 100px;	border-radius:15px;}.table{	border-radius:15px;	background-color: rgba(0, 0, 0, 0.5);}.span:hover{	background-color: rgba(0, 0, 0, 0.6);}.btn {background-color: #FF6347;border-radius:15px;border-color: rgba(255, 255, 255, 0.5);color: #fff;padding: 10px 30px;font-size: 16px;text-align: center;text-decoration: none;margin: 15px 10px;border-radius:15px;}.btn:hover {background-size: 100% 100%;color: #fff;}</style></head>";
	 var img = 'background:url("data:image/jpeg;base64,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") no-repeat center top;background-size:cover;background-repeat:no-repeat;background-attachment: fixed;';
     document.getElementsByTagName("head")[0].innerHTML = head;
     divs.id = 'divs';
     divs.style = 'text-align: center;display:block;margin:10px auto';
     document.getElementsByTagName("body")[0].innerHTML = "<h3>R1音箱控制页面</h3>" + document.getElementsByTagName("body")[0].innerHTML;;
     document.getElementsByTagName("body")[0].appendChild(divs);
     var script = document.createElement('script');
     script.type = 'text/javascript';
     script.src = 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js';
     document.getElementsByTagName("body")[0].appendChild(script);
	 document.getElementsByTagName("body")[0].style.cssText = img;
     var div = document.createElement('div');
     div.id = 'qun_div';
     div.style = 'position:relative; bottom: 10px;';
     div.innerHTML = "<a id='qun' style='color:#FF6347;' href='https://jq.qq.com/?_wv=1027&k=hTbg34eR'>斐讯R1音箱交流群：772694950</a>";
     divs.appendChild(div);
}