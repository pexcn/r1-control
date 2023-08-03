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
//var web_ver = 1000;
if(!custom_ip){
	var custom_ip = false;
}
if(!control_host){
	var control_host = 'r1.wxfsq.com';
}
var connect_init = false;
var display_RebootEcho_timer = -1;
var Current_MusicData = null;
var login_timer = -1;
var switch_quality = document.createElement('select');
var quality_text = document.createElement('text');
var temp_song_list = null;
var _hmt = _hmt || [];
var Cover_background_open = false;
var background_div = document.createElement('div');
var connect_id = null;
var connect_ip = -1;
var update_lrc_init = false;
var long_press_timer = -1;
var listonclick_timer = -1;
var Wakeup_set_btn = document.createElement("input");
var update_music_info_timer = -1;
var login_param = {aid:716027609,daid:383,pt_3rd_aid:100497308,u1:'https://graph.qq.com/oauth2.0/login_jump',referer:'https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&daid=383&style=33&theme=2&login_text=%E6%8E%88%E6%9D%83%E5%B9%B6%E7%99%BB%E5%BD%95&hide_title_bar=1&hide_border=1&target=self&s_url=https%3A%2F%2Fgraph.qq.com%2Foauth2.0%2Flogin_jump&pt_3rd_aid=100497308&pt_feedback_link=https%3A%2F%2Fsupport.qq.com%2Fproducts%2F77942%3FcustomInfo%3D.appid100497308'};
var login_app = 'qqmusic';
var bak_lrc_time = -1;
var is_unisound_num = [0,0,0];
var Unisound_info = [];
var touch_disable = false;
var test_connect_timeout_timer = -1;
var test_connect_state = false;
var text_window_div = null;
var color_selection_div = null;
var Auto_restart_device_times = [];
var Auto_restart_device_div = null;
var Time_reporting_list = [];
var Voice_time_reporting_div = null;
var qr_last_update_time = -1;
var qr_update_time = -1;
var device_date = null;
var local_ip = null;
var ping_r1service_time = 0;
var ping_r1service = -1;
var btn_bluetooth_enable = document.createElement("input");
var btn_bluetooth_scan1 = document.createElement("input");
var btn_bluetooth_scan = document.createElement("input");
var bluetooth_scan_devices = document.createElement('div');
var bluetooth_pairing_devices = document.createElement('div');
var bluetooth_lists = document.createElement('div');
var bluetooth_list_div = document.createElement('div');
var update_bluetooth_timer = -1;
var bluetooth_div = document.createElement('div');
var page_list = [];
var bak_lrc = '';
var List = [];
var asrMaxDuration_value = document.createElement('text');
var asrMaxDuration_timer = -1;
var asrMaxDuration = document.createElement('input');
var inputs = [];
var Bluetooth_prompt_tone_btn = document.createElement("input");
var info = [];
var play_type = 0;
var Submit_Play_Record_btn = document.createElement("input");
var update_background_timer = -1;
var Data = [];
var update_device_info_timer = -1;
var dormancy_btn = document.createElement("input");
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
var music_lrc = document.createElement('div');
var popup = document.createElement('div');
var play_index = 0;
var music_title = '';
var title_scrolling_timer = -1;
var switch_btns = document.createElement('div');
var btn_states = [];
var info_time = [];
var title_display_time = 0;
var lrcs = [[-1,'暂无歌词']];
var lrc_timer = -1;
var api_music_info = null;
var music_info = null;
var init_state1 = true;
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
var h3 = document.createElement('h3');
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

var buttons = [['点播音乐',{ws_type:'send_message',input:'obj',param:{what:65536,arg1:0,arg2:1,obj:'web_播放'},type:1,min_ver:1600,min_uver:1700,err:'请输入要点播的音乐，例如：泠鸢yousa 乡情曲！',succ:'点播成功！'}],
['点播广播',{ws_type:'send_message',input:'obj',param:{what:65536,arg1:0,arg2:1,obj:'web_收听'},type:1,min_ver:1600,min_uver:1700,err:'请输入要点播的广播电台名称，例如：山东音乐广播！',succ:'点播成功！'}],
['点播歌单',{ws_type:'send_message',input:'obj',param:{what:65536,arg1:0,arg2:9,obj:''},type:1,min_ver:1700,min_uver:1700,err:'请输入要点播的歌单链接，例如：https://y.qq.com/n/ryqq/playlist/211111！',succ:'点播成功！'}],
//['喜欢的歌',{ws_type:'send_message',input:'obj',param:{what:65536,arg1:0,arg2:1,obj:'web_播放我喜欢的歌'},type:0,min_ver:1600,min_uver:1700,succ:'好的，播放我喜欢的歌！'}],
['个性电台',{ws_type:'send_message',input:'obj',param:{what:65536,arg1:0,arg2:1,obj:'web_播放个性电台'},type:0,min_ver:1600,min_uver:1700,succ:'好的，播放个性电台！'}],
['我的歌单',{type:-1,min_ver:1600,min_uver:1800,itemType:'get_song_list'}],
['小讯收藏',{ws_type:'send_message',param:{what:65536,arg1:0,arg2:8},type:0,min_ver:1700,min_uver:1700,succ:'好的，播放小讯收藏歌单！'}],
['本地音乐',{type:-1,min_ver:1853,itemType:'play_local_music',max_ver:1855}],
['本地音乐',{type:-1,itemType:'play_local_music',min_ver:1856,max_ver:1864,state:['info.Current_PlayerType',[1]]}],
['本地音乐',{type:-1,itemType:'play_local_music',min_ver:1865,state:['info.Current_PlayerType',[1,2]]}],
['打开蓝牙',{ws_type:'send_message',param:{what:64,arg1:1,arg2:-1},type:0,max_ver:1810,max_uver:1000,succ:'已开启蓝牙！'}],
['打开蓝牙',{ws_type:'send_message',param:{what:256,arg1:3,arg2:-1},type:0,max_ver:1810,min_uver:1001,succ:'已开启蓝牙！'}],
['关闭蓝牙',{ws_type:'send_message',param:{what:64,arg1:2,arg2:-1},type:0,max_ver:1810,succ:'已关闭蓝牙！'}],
['打开氛围灯',{ws_type:'send_message',param:{what:4,arg1:64,arg2:1},type:0,max_ver:1810,succ:'已开启氛围灯！'}],
['关闭氛围灯',{ws_type:'send_message',param:{what:4,arg1:64,arg2:0},type:0,max_ver:1810,succ:'已关闭氛围灯！'}],
['打开蓝牙',{ws_type:'send_message',title:['打开蓝牙','关闭蓝牙'],param:[{what:64,arg1:1,arg2:-1},{what:64,arg1:2,arg2:-1}],type:2,min_ver:1820,max_uver:1000,is_unisound:false,succ:['已开启蓝牙！','已关闭蓝牙！'],state:[0,'info.device_state',[[0,1,2],3]]}],
['打开蓝牙',{ws_type:'send_message',title:['打开蓝牙','关闭蓝牙'],param:[{what:256,arg1:3,arg2:-1},{what:64,arg1:2,arg2:-1}],type:2,min_ver:1820,max_uver:1000,is_unisound:true,succ:['已开启蓝牙！','已关闭蓝牙！'],state:[0,'info.device_state',[[0,1,2],3]]}],
['打开蓝牙',{ws_type:'send_message',title:['打开蓝牙','关闭蓝牙'],param:[{what:256,arg1:3,arg2:-1},{what:64,arg1:2,arg2:-1}],type:2,min_ver:1820,min_uver:1001,succ:['已开启蓝牙！','已关闭蓝牙！'],state:[0,'info.device_state',[[0,1,2,5],3]]}],
['执行指令',{ws_type:'send_message',input:'obj',param:{what:65536,arg1:0,arg2:1,obj:'web_'},type:1,min_ver:1600,min_uver:1839,err:'请输入要执行的指令，例如：明天天气！',succ:'已发送指令！'}],
['执行shell',{ws_type:'shell',input:'shell',param:{shell:''},type:1,err:'请输入要执行的shell命令，例如：getprop！'}],
['重启小讯',{type:-1,is_unisound:true,itemType:'reboot_unisound'}],
['重启音箱',{type:-1,itemType:'reboot'}],
['重启Echo',{type:-1,itemType:'reboot_echo',min_ver:1854}],
['打开氛围灯',{ws_type:'send_message',title:['打开氛围灯','关闭氛围灯'],param:[{what:4,arg1:64,arg2:1},{what:4,arg1:64,arg2:0}],type:2,min_ver:1820,succ:['已开启氛围灯！','已关闭氛围灯！'],state:[0,'info.music_light_enable',[false,true]]}],
['修改设备名',{ws_type:'set_dev_name',input:'dev_name',param:{dev_name:''},type:1,min_ver:1841,err:"请输入要修改的设备名！",succ:"设备名修改成功！\r\n如当前正在使用蓝牙、DLNA、AirPlay则会在下次启动时生效！"}],
['修改小讯唤醒词',{ws_type:'send_message',input:'obj',param:{what:65536,arg1:0,arg2:3,obj:''},type:1,min_uver:1600,err:'请输入要修改的小讯唤醒词！',succ:"小讯唤醒词修改成功！\r\n提示：修改小讯唤醒词后，默认的小讯小讯唤醒词仍然可用！"}],
['打开小爱唤醒',{ws_type:'send_message',is_unisound:true,title:['打开小爱唤醒','关闭小爱唤醒'],param:[{what:65536,arg1:0,arg2:10,obj:{type:'set_wakeup_xiaoai',enable:true}},{what:65536,arg1:0,arg2:10,obj:{type:'set_wakeup_xiaoai',enable:false}}],type:2,min_uver:1837,succ:['已开启小爱唤醒！','已关闭小爱唤醒！'],state:[2,'Unisound_info.Wakeup_Xiaoai',[false,true],['Unisound_info.is_xiaoai_exists',true]]}],
['修改小爱唤醒词',{ws_type:'send_message',input:'obj.word',param:{what:65536,arg1:0,arg2:10,obj:{type:'set_wakeup_xiaoai_word',word:''}},type:1,min_uver:1837,err:'请输入要修改的小爱唤醒词！',succ:'小爱唤醒词修改成功！',state:['Unisound_info.is_xiaoai_exists',[true]]}],
//['小爱音色设置',{type:-1,itemType:'xiaoai_tonesettings',state:['Unisound_info.is_xiaoai_exists',[true]]}],
['小爱设置页面',{type:-1,itemType:'xiaoai_settings',state:['Unisound_info.is_xiaoai_exists',[true]]}],
['重启小爱服务',{type:-1,itemType:'reboot_xiaoaiservice',state:['Unisound_info.is_xiaoai_exists',[true]]}],
['一键激活小爱',{type:-1,itemType:'activation_xiaoai',state:['Unisound_info.xiaoai_vercode',[902010020]]}],
['设置语音报时',{type:-1,itemType:'Voice_time_reporting',min_uver:1832}],
['设置自动重启',{type:-1,itemType:'Auto_restart_device',min_ver:1848}],
['设置氛围灯亮度',{ws_type:'send_message',input:'arg2',param:{what:4,arg1:65,arg2:''},type:1,err:'请输入要修改的亮度(默认100，最低可设置1，最高不建议超过200)！',succ:'氛围灯亮度修改成功！'}],
['切换官方氛围效果',{ws_type:'send_message',param:{what:4,arg1:67,arg2:0},type:0,max_ver:1500,succ:'已切换为官方氛围效果！'}],
['切换七彩氛围效果',{ws_type:'send_message',param:{what:4,arg1:67,arg2:1},type:0,max_ver:1500,succ:'已切换为七彩氛围效果！'}],
['切换官方氛围效果',{ws_type:'send_message',param:{what:4,arg1:68,arg2:0},type:0,min_ver:1600,max_ver:1810,succ:'已切换为官方氛围效果！'}],
['切换七彩氛围效果',{ws_type:'send_message',param:{what:4,arg1:68,arg2:2},type:0,min_ver:1600,max_ver:1810,succ:'已切换为七彩氛围效果！'}],
['切换七彩氛围效果',{ws_type:'send_message',title:['切换七彩氛围效果','切换官方氛围效果'],param:[{what:4,arg1:68,arg2:2},{what:4,arg1:68,arg2:0}],type:2,min_ver:1820,max_ver:1828,succ:['已切换为七彩氛围效果！','已切换为官方氛围效果！'],state:[0,'info.music_light_mode',[0,[1,2,3]]]}],
['切换七彩氛围效果',{ws_type:'send_message',title:['当前：官方氛围效果','当前：七彩氛围效果','当前：七彩旋转效果','当前：七彩旋转效果1'],param:[{what:4,arg1:68,arg2:2},{what:4,arg1:68,arg2:1},{what:4,arg1:68,arg2:3},{what:4,arg1:68,arg2:0}],type:2,min_ver:1829,max_ver:1847,succ:['已切换为七彩氛围效果！','已切换为七彩旋转效果！','已切换为七彩旋转效果1！','已切换为官方氛围效果！'],state:[0,'info.music_light_mode',[0,2,1,3]]}],
['切换七彩氛围效果',{ws_type:'send_message',title:['当前：官方氛围效果','当前：七彩氛围效果','当前：七彩旋转效果','当前：七彩旋转效果1','当前：单色氛围效果'],param:[{what:4,arg1:68,arg2:2},{what:4,arg1:68,arg2:1},{what:4,arg1:68,arg2:3},{what:4,arg1:68,arg2:4},{what:4,arg1:68,arg2:0}],type:2,min_ver:1848,succ:['已切换为七彩氛围效果！','已切换为七彩旋转效果！','已切换为七彩旋转效果1！','已切换为单色氛围效果！','已切换为官方氛围效果！'],state:[0,'info.music_light_mode',[0,2,1,3,4]]}],
['设置颜色渐变速度',{ws_type:'send_message',input:'arg2',param:{what:4,arg1:66,arg2:''},type:3,err:'请输入要修改的速度(默认4，最低可设置0，最高100)！',succ:'氛围灯颜色渐变速度修改成功！',state:['info.music_light_mode',[0,1,3]],hide:true}],
//['设置氛围灯光颜色',{ws_type:'send_message',input:'arg2',param:{what:4,arg1:70,arg2:'${arg2}'},type:3,min_ver:1848,err:'请输入要修改的颜色（例如0x66CCFF）！',succ:'氛围灯光颜色修改成功！',state:['info.music_light_mode',[4]],hide:true}],
['设置氛围灯光颜色',{type:-1,itemType:'modify_color',state:['info.music_light_mode',[4]],hide:true}],
['设置背景图片',{type:-1,itemType:'set_background'}],
['开灯',{ws_type:'shell',param:{shell:'lights_test set 7fffff8000 ffffff'},type:0,succ:'已开！'}],
['关灯',{ws_type:'shell',param:{shell:'lights_test set 7fffff8000 0'},type:0,succ:'已关！'}],
['TTS',{ws_type:'send_message',input:'obj',param:{what:65536,obj:''},type:1,min_uver:1800,err:'请输入要阅读的文本',succ:''}],
['打开网络配置',{type:-1,itemType:'open_net_config'}],
['设置IOT_API',{ws_type:'send_message',input:'obj.iot_api',param:{what:65536,arg1:0,arg2:10,obj:'{"type":"set_iot_api","iot_api":""}'},type:1,min_uver:1816,err:'请输入要设置的API，例如：http://r1.wxfsq.com/iot.php，返回示例：{"status":200,"message":"ok","text":"tts内容"}',succ:'IOT_API设置成功！'}],
['上传软件更新',{type:-1,min_ver:1835,itemType:'upload_page'}],
['打开DLNA、AirPlay常开',{ws_type:'Set_Service_Normally_Open',title:['打开DLNA、AirPlay常开','关闭DLNA、AirPlay常开'],param:[{open:true},{open:false}],type:2,min_ver:1839,max_ver:1839,succ:['已打开！','已关闭！'],state:[0,'info.Service_Normally_Open',[false,true]]}],
['允许DLNA服务启动',{ws_type:'Set_DLNA_Open',title:['允许DLNA服务启动','禁止DLNA服务启动'],param:[{open:true},{open:false}],type:2,min_ver:1852,succ:['已允许！','已禁止，如当前正在使用该服务，将在断开后生效！'],state:[0,'info.dlna_open',[false,true]]}],
['允许AirPlay服务启动',{ws_type:'Set_AirPlay_Open',title:['允许AirPlay服务启动','禁止AirPlay服务启动'],param:[{open:true},{open:false}],type:2,min_ver:1852,succ:['已允许！','已禁止，如当前正在使用该服务，将在断开后生效！'],state:[0,'info.airplay_open',[false,true]]}],
['打开蓝牙、DLNA、AirPlay常开',{ws_type:'Set_Service_Normally_Open',title:['打开蓝牙、DLNA、AirPlay常开','关闭蓝牙、DLNA、AirPlay常开'],param:[{open:true},{open:false}],type:2,min_ver:1840,succ:['已打开！','已关闭！'],state:[0,'info.Service_Normally_Open',[false,true]]}],
['设备连接页面',{type:-1,itemType:'connect_page'}],
//['测试',{type:-1,itemType:'test'}]
];
var reg_ip = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
var reg_ip1 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])/;
var background = 'background-color:#A9D0F5';
var update_log = ['2021-03-19：音量条增加防误触(双击激活后可调节)。',
'2021-03-20：增加顶部歌词显示，页面按钮精简(1.8.2.0版本生效)。',
'2021-03-22：更新页面效果，增加滚动歌词(双击封面切换)。',
'2021-03-26：增加音效控制页面(1.8.2.2版本生效)。',
'2021-04-01：优化布局，修复最后最后一句歌词显示错误。',
'2021-04-15：适配new_Unisound1.8、EchoService1.8.25登录功能。',
'2021-04-16：增加音箱连接页面，优化页面布局。',
'2021-04-30：增加设备信息页面。',
'2021-05-01：修复IOS浏览器下UI异常。',
'2021-05-05：适配new_EchoService1.8.28进度调节。',
'2021-05-07：单击“音量”标题可解锁音量控制。',
'2021-05-08：适配new_EchoService1.8.29氛围灯效果切换，增加设置氛围灯颜色渐变速度功能。',
'2021-05-24：隐藏不支持功能。',
'2021-05-28：增加开关灯功能。',
'2021-06-01：修改部分歌词解析异常。',
'2021-06-07：修改部分歌词解析异常，适配new_Unisound1.8.16版本的IOT_API设置。',
'2021-06-20：修复火狐input显示异常（滑块不会改）。',
'2021-06-25：设备信息页面增加禁用无用的服务按钮（此功能可有效释放运存！），设备信息页面增加清除小讯数据按钮。',
'2021-07-23：适配新版本，设备信息页面增加清除闹铃/提醒按钮(闹铃/提醒为空时不显示，new_Unisound1.8.20、new_EchoService1.8.35版本生效)。',
'2021-08-01：app增加音量按键监听。',
'2021-08-06：设备信息页面增加唤醒识别精度控制功能，优化播放进度调节体验。',
'2021-08-10：优化设备连接页面。',
'2021-08-12：设备信息页面增加开始/退出休眠按钮。',
'2021-08-18：设备信息页面增加信息实时更新（登录信息和授权信息非实时），设备信息页面增加打开/关闭提交播放记录按钮(提交播放记录、播放时间至当前登录的账号(new_Unisound1.8.24版本生效))。',
'2021-08-21：增加打开/关闭DLNA、AirPlay常开按钮(new_EchoService1.8.39版本生效)。',
'2021-08-24：设备信息页面增加清理进程按钮。',
'2021-08-29：设备信息页面增加打开/关闭蓝牙提示音按钮(new_Unisound1.8.25、new_EchoService1.8.41版本生效)。',
'2021-08-31：设备信息页面支持new_EchoService旧版本。',
'2021-09-28：设备连接页面支持使用设备名称连接音箱(例如：Phicomm_R1_2B11)。',
'2021-10-22：增加蓝牙控制页面new_EchoService1.8.47版本生效)。',
'2021-10-24：支持自动恢复上次页面。',
'2021-10-31：新增上传背景图片功能。',
'2021-11-01：优化页面加载流程。',
'2021-11-02：支持恢复播放列表收起状态，优化背景图片加载流程。',
'2021-11-25：优化扫码登录体验。',
'2021-11-30：最大音量改为动态获取。',
'2022-01-02：增加语音报时设置(new_Unisound1.8.32版本生效)。',
'2022-01-03：增加12小时制语音报时开关(new_Unisound1.8.33版本生效)，增加自动重启设置，增加重启api（reboot，参数：reason（可空）），增加设置氛围灯光颜色（单色氛围效果可用）（new_EchoService1.8.48版本生效）。',
'2022-01-12：优化歌曲信息缓存。',
'2022-01-14：优化播放列表。',
'2022-01-15：优化进度条，默认隐藏播放列表，设备连接页面增加获取音箱ip功能（数据库获取）。',
'2022-01-17：app自动根据背景设置状态栏颜色。',
'2022-01-18：适配app透明。',
'2022-01-26：修复屏幕页面输入文字时会自动添加undefined问题。',
'2022-02-06：增加"禁止DLNA服务启动、禁止AirPlay服务启动"开关（默认允许启动，new_EchoService1.8.52版本生效）。',
'2022-02-07：增加跳过等待小讯初始化功能（使用非适配版本的小讯时可点击"跳过等待"按钮进入控制页面）。',
'2022-02-15：增加"修改小爱唤醒词"按钮。',
'2022-02-19：设备信息页面增加"登录QQ音乐"、"登录网易云音乐"、"退出登录按钮"按钮。',
'2022-02-24；适配new_EchoService1.8.53api。',
'2022-03-11：屏幕控制支持识别长按事件（仅手机端）。',
'2022-03-23：增加重启Echo功能（网页功能响应很慢时可以使用该功能，new_EchoService1.8.54版本生效），设备信息页面增加禁用/启用小讯功能。',
'2022-03-27：页面优化。',
'2022-03-28：允许非内网ip访问。',
'2022-04-07：支持设置背景模糊，音乐控制页面自动设置封面背景。',
'2022-04-13：播放页面适配new_EchoService1.8.56，设备信息页面增加切换播放器按钮（new_EchoService1.8.56版本生效）。',
'2022-04-16：换了个蓝色。',
'2022-05-05：增加点播当前源歌单功能（请点击我的歌单按钮）。',
'2022-05-08：增加播放音质切换功能（new_EchoService1.8.63版本生效（仅ExoPlayer播放器））。',
'2022-05-13：修复旧版无法更新播放信息问题。',
'2022-05-26：优化封面背景效果，优化多行滚动歌词效果。',
'2022-07-22：适配新版本。'
];
load();
window.onload = function(){
	
	var h3s = document.getElementsByTagName('h3');
	if(h3s.length > 0){
		h3s[0].innerHTML = '页面加载中。。。';
	}
	
	var tmp = localStorage.getItem('Cover_background_open');
	if(tmp == null || tmp == '' || tmp == 'true'){
		tmp = true;
	}else{
		tmp = false;
	}
	Cover_background_open = tmp;
	
	setTimeout(function(){
		var temp_div = document.getElementById('temp_div');
		if(temp_div){
			temp_div.remove();
		}
		
		background_div.id = 'background_div';
		background_div.style = 'z-index: -1; position: fixed; left: 0px; top: 0px; width:100%; height:100%';
		document.body.appendChild(background_div);
		document.body.style.backgroundColor = 'rgba(0,0,0,0.6)';
		
		var img = background;
		if(location.href.indexOf('noimg') == -1 && location.href.indexOf(control_host) == -1){
			var current_hostname = localStorage.getItem('current_hostname');
			if(!current_hostname){
				current_hostname = '';
			}
			hostname = current_hostname;
			var background1 = localStorage.getItem(current_hostname+'_background');
			if(background1){
				img = background1;
			}
		}
		
		set_background_css(img);
		h3.innerHTML = 'R1音箱控制页面';
		var height = h3.clientHeight;
		if(height < 60){
			h3.style.minHeight = height;
		}else{
			h3.style.minHeight = 27;
		}
		if(location.href.substring(0,6) == 'https:'){
			location.href = 'http:' + location.href.substring(6);
		}
		
		var params = getparam(['connect_ip','connect_id','no_auto_connect','ver','u_ver']);
		if(params != null){
			console.log(params);
			if(!params.hasOwnProperty('no_auto_connect')){
				if(params.hasOwnProperty('connect_id')){
					connect_id = params['connect_id'];
				}
				if(params.hasOwnProperty('connect_ip')){
					connect_ip = params['connect_ip'];
					if(connect_ip != null && connect_ip != ''){
						if(connect_ip.indexOf(':')  > -1){
							connect_ip = connect_ip.substring(0,connect_ip.indexOf(':'));
						}
					}else{
						connect_ip = '';
					}
					if(!reg_ip.test(connect_ip) && !/phicomm_r1_\S+/u.test(connect_ip.toLowerCase())){
						connect_ip = -1;
					}
				}
				
				if(params.hasOwnProperty('ver')){
					ver = params['ver'];
					delparam('ver');
				}
				
				if(params.hasOwnProperty('u_ver')){
					u_ver = params['u_ver'];
					delparam('u_ver');
				}
			}
		}
		
		if(custom_ip){
			custom_ip_page();
		}else{
			init_login();
			init();
		}
	},500);
	
}

function custom_ip_page(){
	var ip_connect = localStorage.getItem('ip_connect') != 'false';
	
	document.title = 'R1音箱连接页面';
	h3.innerHTML = '请输入音箱IP进行连接！';
	h3.ondblclick = function(){
		this.ondblclick = function(){};
		load_console();
	};
	var div = document.createElement('div');
	div.id = 'custom_ip_page';
	
	if(ip_connect){
		var tmp_ip = localStorage.getItem('ip') ? localStorage.getItem('ip') : localStorage.getItem('hostname');
	}else{
		var tmp_ip = localStorage.getItem('hostname') ? localStorage.getItem('hostname') : localStorage.getItem('ip');
	}
	
	if(connect_ip != -1){
		tmp_ip = connect_ip; 
	}
	
	if(tmp_ip != null && tmp_ip != ''){
		if(tmp_ip.indexOf(':')  > -1){
			tmp_ip = tmp_ip.substring(0,tmp_ip.indexOf(':'));
		}
	}else{
		tmp_ip = '';
	}
	
	var device_list = localStorage.getItem('device_list');
	if(device_list){
		device_list = JSON.parse(device_list);
	}
	if(device_list != null){
		h3.innerHTML = '请选择或输入音箱IP进行连接！';
		var arr = device_list;
		var text = document.createElement('text');
		text.innerHTML = '设备：';
		div.appendChild(text);
		var device_list = document.createElement('select');
		device_list.id = 'device_list';
		device_list.style = 'display:block;margin:10px auto;width:70%;height:50px;font-size: 16px;color: rgba(238, 0, 0, 1);border-color: rgba(0,160,255,1);outline: none;background:rgba(255, 255, 255, 0.2);border-radius: 15px;';
		device_list.onchange = function(){
			var input = document.getElementById('input');
			if(ip_connect && this[parseInt(this.value)].getAttribute('ip') != ''){
				input.value = this[parseInt(this.value)].getAttribute('ip');
			}else{
				input.value = this[parseInt(this.value)].getAttribute('hostname');
			}
			input.setAttribute('connect_id',this[parseInt(this.value)].getAttribute('connect_id'));
			input.oninput();
		}
		for(var i=0;i<arr.length;i++){
		var option = document.createElement('option');
			option.innerHTML = arr[i].dev_name ? arr[i].dev_name : arr[i].hostname;
			option.setAttribute('hostname',arr[i].hostname);
			option.setAttribute('ip',arr[i].ip);
			var device_sid = arr[i].device_sid;
			if(!device_sid){
				device_sid = '';
			}
			option.setAttribute('device_sid',device_sid);
			
			var id = arr[i].device_msid;
			if(!id){
				id = '';
			}
			option.setAttribute('connect_id',id);
			option.value = i;
			
			if(arr[i].ip == tmp_ip || arr[i].hostname.toLowerCase() == tmp_ip.toLowerCase() || (connect_id != null && connect_id == id) || (connect_ip != -1 && (arr[i].ip == connect_ip || arr[i].hostname.toLowerCase() == connect_ip.toLowerCase()))){
				if(ip_connect){
					tmp_ip = arr[i].ip ? arr[i].ip : arr[i].hostname;
				}else{
					tmp_ip = arr[i].hostname ? arr[i].hostname : arr[i].ip;
				}
				if(!(connect_id != null && connect_id == id)){
					connect_id = null;
				}
				//option.selected = 'selected';
			}
			device_list.appendChild(option);
		}
		device_list.value = '';
		div.appendChild(device_list);
	}else{
		connect_id = null;
	}
	
	var text = document.createElement('text');
	text.innerHTML = 'IP、设备名称(不需要输入端口)：';
	text.ondblclick = function(){
		if(input.value == ''){
			input.value = 'Phicomm_R1_';
		}
	}
	div.appendChild(text);
	var input = document.createElement('input');
    input.type = 'text';
    input.id = 'input';
	input.oninput = function(){
		var device_list = document.getElementById('device_list');
		if(device_list){
			for(var i=0;i<device_list.length;i++){
				if(this.value.toLowerCase() == device_list[i].getAttribute('hostname').toLowerCase() || this.value == device_list[i].getAttribute('ip')){
					device_list[i].selected = 'selected';
					hostname = device_list[i].getAttribute('hostname');
					var background_text = localStorage.getItem(hostname+'_background');
					if(background_text){
						set_background_css(background_text);
					}else{
						set_background_css(background);
					}
					update_StatusBar();
					var device_sid = device_list[i].getAttribute('device_sid');
					var btn = document.getElementById('get_ip_btn');
					if(device_sid != ''){
						btn.setAttribute('device_sid',device_sid);
						btn.style.display = 'inline-block';
					}else{
						btn.setAttribute('device_sid','');
						btn.style.display = 'none';
					}
					var id = device_list[i].getAttribute('connect_id');
					id = id == 'undefined' ? '' : id;
					this.setAttribute('connect_id',id);
					return;
				}
			}
			var btn = document.getElementById('get_ip_btn');
			btn.setAttribute('device_sid','');
			this.setAttribute('connect_id','');
			btn.style.display = 'none';
			device_list.value = '';
			set_background_css(background);
			update_StatusBar();
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
	btn.id = 'get_ip_btn';
	btn.value = '获取IP并连接';
	btn.style.display = 'none';
	btn.onclick = function(){
		get_ip();
	};
	//var div1 = document.createElement('div');
	//div1.appendChild(btn);
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
	
	div.appendChild(document.createElement('div'));
	var btn = document.createElement("input");
	btn.type = 'button';
	btn.className = 'btn';
	btn.value = '进入配网页面';
	btn.onclick = function(){
		location.href = './config_wifi';
	};
	div.appendChild(btn);
	
	var div1 = document.createElement('div');//占位
	div1.style.height = '10px';
	div.appendChild(div1);
	
	divs.appendChild(div);
	
	if(reg_ip.test(tmp_ip) || /phicomm_r1_\S+/u.test(tmp_ip.toLowerCase())){
		input.value = tmp_ip;
		if(window.location.href.indexOf('no_auto_connect') == -1){
			main_div.onclick = function(){
				main_div.onclick = function(){};
				clearTimeout(connect_timer);
				connect_timer = -1;
				h3.innerHTML = '已取消自动连接！';
				setTimeout(function(){
					if(h3.innerHTML == '已取消自动连接！'){
						if(document.getElementById('device_list')){
							h3.innerHTML = '请选择或输入音箱IP、设备名称进行连接！';
						}else{
							h3.innerHTML = '请输入音箱IP、设备名称进行连接！';
						}
					}
				},1000);
			};
		
			h3.innerHTML = '检测到上次连接记录，2秒后自动连接，点击页面空白处取消连接！';
			connect_timer = setTimeout(function(){
				main_div.onclick = function(){};
				if(document.getElementById('get_ip_btn').style.display != 'none'){
					get_ip();
				}else{
					test_connect();
				}
			},2000);
		}
	}
	
	if(input.value != ''){
		input.oninput();
		var background_text = null;
		var device_list = document.getElementById('device_list');
		if(device_list){
			for(var i=0;i<device_list.length;i++){
				if(input.value.toLowerCase() == device_list[i].getAttribute('hostname').toLowerCase() || input.value == device_list[i].getAttribute('ip')){
					hostname = device_list[i].getAttribute('hostname');
					background_text = localStorage.getItem(hostname+'_background');
					break;
				}
			}
		}
		if(background_text){
			set_background_css(background_text);
		}else{
			set_background_css(background);
		}
	}else{
		set_background_css(background);
	}
	update_StatusBar();
	//config_net_page
	var div = document.createElement('div');
	div.id = 'config_net_page';
	div.style = 'display:none;';
	
	if(connect_ip != -1 || connect_id != null){
		setTimeout(function(){
			if(connect_timer == -1){
				return;
			}
			test_connect();
		},100);
	}
}

function get_ip(){
	var get_ip_btn = document.getElementById('get_ip_btn');
	var input = document.getElementById('input');
	var device_sid = get_ip_btn.getAttribute('device_sid');
	get_ip_btn.value1 = get_ip_btn.value;
	if(device_sid != ''){
		var success = function(data){
			if(data.code == 1){
				get_ip_btn.value = '获取成功！';
				input.value = data.local_ip;
				test_connect();
			}else if(data.code == 2){
				get_ip_btn.value = '获取成功！';
				//get_ip_btn.value = '获取成功，但此设备超过一天未上线，IP可能已过期！';
				input.value = data.local_ip;
				alert('获取成功，但此设备超过一天未上线，IP可能已过期！');
				test_connect();
			}else{
				get_ip_btn.value = '获取失败('+data.msg+')！';
				alert(get_ip_btn.value);
			}
			setTimeout(function(){
				get_ip_btn.value = get_ip_btn.value1;
				get_ip_btn.disabled = false;
			},1000);
		};
		
		var error = function(){
			get_ip_btn.value = '获取失败！';
			setTimeout(function(){
				get_ip_btn.value = get_ip_btn.value1;
				get_ip_btn.disabled = false;
			},1000);
		};
		
		if(control_host.indexOf('r1.wxfsq.com') > -1){
			input.value = '';
			$.ajax({type:'POST',url:'http://r1.wxfsq.com/ip',data:{device_sid:device_sid},dataType:'json',success:success,error:error});
		}else{
			console.log(input.value);
			setTimeout(function(){
				success({code:1,local_ip:input.value});
			},500);
		}
		get_ip_btn.value = '正在获取IP，请稍候。。。';
		get_ip_btn.disabled = true;
	}else{
		alert('抱歉，当前不可获取！');
	}
}

function test_connect(){
	var input_ip = document.getElementById('input');
	ip = input_ip.value;
	if(!reg_ip.test(ip) && !/phicomm_r1_\S+/u.test(ip.toLowerCase())){
		alert('请输入正确的IP！');
	}else{
		if(ws != null){
			clearTimeout(test_connect_timeout_timer);
			test_connect_timeout_timer = -1;
			ws.onclose = function(){}
			ws.close();
			ws = null;
		}
		h3.innerHTML = '请稍候，正在连接音箱。。。';
		ip = ip + ':8080';
		ws = new WebSocket("ws://"+ip);
		ws.onopen = function(data){
			connect_id = document.getElementById('input').getAttribute('connect_id');
			connect_id = connect_id != '' ? connect_id : null;
			clearTimeout(test_connect_timeout_timer);
			test_connect_timeout_timer = -1;
			divs.removeChild(document.getElementById('custom_ip_page'));
			test_connect_state = true
			connect_init = true;
			display_RebootEcho(true);
			h3.innerHTML = '连接音箱成功，正在初始化。。。';
			if(reg_ip1.test(ip)){
				window.localStorage.removeItem('hostname');
				window.localStorage.setItem('ip',input_ip.value);
			}else{
				window.localStorage.removeItem('ip');
				window.localStorage.setItem('hostname',input_ip.value);
			}
			if(false && window.location.href.indexOf('no_jump') == -1 && window.location.href.indexOf('app') == -1){
				ws.close();
				custom_ip_page();
				window.location.href = 'http://'+ip;
				return;
			}
			init_login();
			init();
			ws_send(JSON.stringify({type:'get_info'}));
		};
		ws.onclose = function(data){
			clearTimeout(test_connect_timeout_timer);
			test_connect_timeout_timer = -1;
			test_connect_state = true;
			if(data.code == 1006){
				h3.innerHTML = '请输入音箱IP进行连接！';
				var msg = '连接音箱失败，请检查音箱IP是否正确或重启音箱再试！';
				alert(msg);
			}
		};
		clearTimeout(test_connect_timeout_timer);
		test_connect_timeout_timer = -1;
		test_connect_timeout_timer = setTimeout(function(){
			if(!test_connect_state){
				h3.innerHTML = '请输入音箱IP进行连接！';
				ws.onclose = function(){}
				ws.close();
				var msg = '连接音箱超时，请检查音箱IP是否正确或重启音箱再试！';
				alert(msg);
			}
		},8000);
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
	
	main_div.onclick = function(){};
	clearTimeout(connect_timer);
	connect_timer = -1;
	
	delparam(['no_auto_connect','connect_ip','connect_id']);
	
	if(location.host.indexOf(control_host) != -1){
		if(connect_id != null){
			putparam({connect_id:connect_id});
		}
	
		putparam({connect_ip:ip});
	}
	
	if(ip == ''){
		ip = location.host;
	}
	if(ws == null || ws.readyState == WebSocket.CLOSED){
		ws = new WebSocket("ws://"+ip);
		var h3 = document.getElementsByTagName('h3')[0];
		h3.innerHTML = '正在连接音箱，请稍候。。。';
	}else{
		setTimeout(function(){
			ws_send(JSON.stringify({type:'shell',type_id:'ping_r1service',shell:'date & ping -w 1 r1service.wxfsq.com'}));
		},600);
	}
	ws.onopen = function(data){
		var h3 = document.getElementsByTagName('h3')[0];
		if(init_state){
			//ping_timer = setInterval(function(){ws_send(JSON.stringify({type:'ping'}));},3000);
			connect_init = true;
			display_RebootEcho(true);
			h3.innerHTML = '连接音箱成功，正在初始化。。。';
			setTimeout(function(){
				ws_send(JSON.stringify({type:'shell',type_id:'ping_r1service',shell:'date & ping -w 1 r1service.wxfsq.com'}));
			},600);
			if(unisound_init_timer == -1){
				if(ver > 1825){
					unisound_init_timer = setTimeout(function(){
						reload = true;
						var btn = document.createElement("input");
						btn.type = 'button';
						btn.className = 'btn';
						btn.value = '取消禁用小讯';
						btn.onclick = function(){
							this.value = '请稍候。。。';
							//h3.innerHTML = '请稍候。。。';
							ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/pm unhide com.phicomm.speaker.device'}));
							setTimeout(function(){
								ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
								ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am startservice com.phicomm.speaker.player/.EchoService'}));
								setTimeout(function(){
									h3.innerHTML = '等待小讯初始化。。。(请确保您当前安装的new_Unisound版本是1.8或以上！)';
									alert('操作完毕！');
									location.reload();
								},3000);
							},3000);
						};
						//h3.parentNode.appendChild(btn);

						var btn = document.createElement("input");
						btn.type = 'button';
						btn.className = 'btn';
						btn.value = '重启小讯';
						btn.onclick = function(){
							this.value = '重启中。。。';
							ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am force-stop com.phicomm.speaker.device'}));
							setTimeout(function(){
								ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
								ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am startservice com.phicomm.speaker.player/.EchoService'}));
								setTimeout(function(){
								h3.innerHTML = "等待小讯初始化。。。(请确保您当前安装的new_Unisound版本是1.8或以上！)";
								alert('重启完毕！');
								location.reload();
								},10000);
							},3000);
						};
						h3.parentNode.appendChild(btn);
						
						var btn = document.createElement("input");
						btn.type = 'button';
						btn.className = 'btn';
						btn.value = '重启音箱';;
						btn.onclick = function(){
							this.value = '重启中。。。';
							ws_send(JSON.stringify({type:'shell',shell:'stop adbd&&start adbd&&adb reboot'}));
							setTimeout(function(){
								alert('重启完毕！');
								location.reload();
							},10000);
						};
						h3.parentNode.appendChild(btn);
					},6000);
				}
			}
			start_unisound();
			ws_send(JSON.stringify({type:'get_info'}));
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
			if(connect_init == true){
				connect_init = false;
				display_RebootEcho(false);
			}
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

function display_RebootEcho(display = true){
	clearTimeout(display_RebootEcho_timer);
	var btn = document.getElementById("RebootEcho_btn");
	if(btn != null){
		btn.remove();
	}
	
	if(display_RebootEcho == true){
		display_RebootEcho_timer = setTimeout(function(){
			var btn = document.createElement("input");
			btn.id = 'RebootEcho_btn';
			btn.type = 'button';
			btn.className = 'btn';
			btn.value = '重启echo';
			btn.onclick = function(){
				this.value = '重启中。。。';
				this.disabled = true;
				ws_send(JSON.stringify({type:'reboot_echo'}));
			};
			h3.parentNode.appendChild(btn);
		},3000);
	}
}

function start_unisound(){
	ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
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
	
	var btn = document.createElement("input");
	btn.type = 'button';
	btn.className = 'btn';
	btn.value = '重启小讯';
	btn.setAttribute('data','');
	btn.onclick = function(){
		var reboot_unisound_btn = this;
		this.value = '重启中。。。';
		ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am force-stop com.phicomm.speaker.device'}));
		setTimeout(function(){
			ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
			setTimeout(function(){
				reboot_unisound_btn.value = '重启小讯';
				alert('重启完毕！');
			},10000);
		},3000);
	};
	div.appendChild(btn);
	
	
	var btn = document.createElement("input");
	btn.type = 'button';
	btn.className = 'btn';
	btn.value = '校准音箱时间';
	btn.setAttribute('data','');
	btn.onclick = function(){
		var btn = this;
		this.value = '正在校准。。。';
		setTimeout(function(){
			btn.value = '校准音箱时间';
		},2000);
		ws_send(JSON.stringify({type:'shell',type_id:"set_date",shell:'settings put global ntp_server ntp1.aliyun.com&date '+new Date().getTime().toString().substring(0,10)}));
	};
	div.appendChild(btn);
	
	login_div.appendChild(div);
	var div = document.createElement('div');//占位
	div.style.height = '10px';
	login_div.appendChild(div);
}


function onhide_login(){
	
	if(login_app == 'kuwo'){
		var div = document.createElement("div");
		div.id = 'login_selection_div';
		div.style = 'text-align: center;';
		
		divs.appendChild(div);
		var title = document.createElement("h3");
		title.innerHTML = '登录酷我音乐';
		div.appendChild(title);
		
		var btn = document.createElement("input");
		btn.type = 'button';
		btn.className = 'btn';
		btn.value = 'QQ登录';
		btn.setAttribute('data','');
		btn.onclick = function(){
			login_app = 'kuwo_qq';
			onhide_login();
		};
		div.appendChild(btn);
		
		var btn = document.createElement("input");
		btn.type = 'button';
		btn.className = 'btn';
		btn.value = '密码登录';
		btn.setAttribute('data','');
		btn.onclick = function(){
			login_app = 'kuwo_pwd';
			onhide_login();
		};
		div.appendChild(btn);
		return;
	}
	
	var tips = "";
	if(login_app == 'qqmusic'){
		tips = "本次登录将会使用QQ互联登录您的QQ音乐账号，是否继续？";
	}else if(login_app == 'netease'){
		tips = "本次登录将会使用QQ互联登录您的网易云音乐账号，是否继续？";
	}else if(login_app == 'kuwo_qq'){
		tips = "本次登录将会使用QQ互联登录您的酷我音乐账号，是否继续？";
	}else if(login_app == 'kuwo_pwd'){
		tips = "本次将会登录您的酷我音乐账号，是否继续？";
	}
	qrcode.style = 'margin: 10px auto;position: relative;';
	if(!confirm(tips)){
		ws.close();
		//window.opener = null;
		//window.open("about:blank","_self").close();
		//window.location.href = "about:blank";
		document.body.innerHTML = "";
		var div = document.createElement("div");
		div.style = 'text-align: center;';
		document.body.appendChild(div);

		var btn = document.createElement("input");
		btn.type = 'button';
		btn.className = 'btn';
		btn.value = '刷新页面';
		btn.setAttribute('data','');
		btn.onclick = function(){
			location.reload();
		};
		div.appendChild(btn);
	}else{
		if(document.getElementById('login_selection_div') != null){
			document.getElementById('login_selection_div').remove();
		}
		if(login_app == 'kuwo_pwd'){
			var pwd_login_div = document.createElement("div");
			pwd_login_div.id = 'pwd_login_div';
			pwd_login_div.appendChild(qrcode_msg);
			pwd_login_div.appendChild(document.createElement('div'));
			var div = document.createElement('div');
			pwd_login_div.appendChild(div);
			pwd_login_div.appendChild(qrcode);
			divs.appendChild(pwd_login_div);
			qrcode_msg.innerHTML = '<h3>登录酷我音乐</h3><h3></h3>';
			
			var text = document.createElement('text');
			text.innerHTML = '账号：';
			div.appendChild(text);
			var username = document.createElement('input');
			username.type = 'text';
			username.id = 'username';
			username.className = 'input';
			div.appendChild(username);
			
			div.appendChild(document.createElement('div'));
			
			var text = document.createElement('text');
			text.innerHTML = '密码：';
			div.appendChild(text);
			var password = document.createElement('input');
			password.type = 'password';
			password.id = 'password';
			password.className = 'input';
			div.appendChild(password);
			
			div.appendChild(document.createElement('div'));
			
			var btn = document.createElement("input");
			btn.type = 'button';
			btn.className = 'btn';
			btn.value = '登录';
			btn.id = 'pwd_login_btn';
			btn.setAttribute('data','');
			btn.onclick = function(){
				this.disabled = true;
				this.value = '登录中。。。';
				ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'login_kuwo',username:username.value,password:password.value}}));
			};
			div.appendChild(btn);
			return;
		}
		
		h3.innerHTML = 'R1音箱登录页面';
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
	var tmp_login_app = (localStorage.getItem('qrcode_app') == null ? login_app : localStorage.getItem('qrcode_app'));
	if(tmp_login_app != login_app){
		localStorage.removeItem('qrcode_state');
		localStorage.removeItem('qrcode_data');
		localStorage.removeItem('qrcode_app');
		qrcode_state = 0;
		qrcode_data = '';
	}
	if(qrcode_state == 1 && qrcode_data != ''){
		login_app = tmp_login_app;
		if(login_app == 'netease'){
			login_param['pt_3rd_aid'] = 100495085;
		}else if(login_app == 'kuwo_qq'){
			login_param['pt_3rd_aid'] = 100243533;
		}
		qrcode_load = false;
		qrcode_msg.innerHTML = '<h3>请稍候。。。</h3><h3></h3>';
		qrcode.onload = function(){
			qrcode_load = true;
			qrcode.onload = function(){}
			qrcode_msg.getElementsByTagName('h3')[0].innerText = '请使用手机QQ扫码登录！(可在手机QQ内粘贴打开此页面地址，长按二维码图片扫码登录！)';
			start_update_qrstate();
		}
		update_qrcode_data(JSON.parse(qrcode_data));
	}else{
		if(login_app == 'netease'){
			login_param['pt_3rd_aid'] = 100495085;
		}else if(login_app == 'kuwo_qq'){
			login_param['pt_3rd_aid'] = 100243533;
		}
		update_qrcode();
	}
}

function update_qrcode(){
	//http://'+control_host+'/pic/nopic.jpg
	qrcode.src = '';
	qrcode.qrsig = '';
	localStorage.removeItem('qrcode_state');
	localStorage.removeItem('qrcode_data');
	localStorage.removeItem('qrcode_app');
	
	qrcode_load = false;
	qrcode_msg.innerHTML = '<h3>正在加载二维码，请稍候。。。<br>提示：第一次加载二维码会比较慢，请耐心等待！</h3><h3></h3>';
	qrcode.onload = function(){
		qrcode_load = true;
		qrcode.onload = function(){}
		qrcode_msg.getElementsByTagName('h3')[0].innerText = '请使用手机QQ扫码登录！(可在手机QQ内粘贴打开此页面地址，长按二维码图片扫码登录！)';
		start_update_qrstate();
	}
	setTimeout(function(){
		if(!qrcode_load){
			ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
			var device_time = (device_date != null ? set_time((''+device_date.getTime()).substring(0,10)) : null);
			qrcode_msg.innerHTML = '<h3>二维码加载超时，请点击刷新二维码(如多次加载超时请点击重启小讯，提示重启完毕后再点击刷新二维码！)！<br><p id="device_time" style="display:inline">音箱时间：'+device_time+'</p>，如音箱时间错误，请点击校准时间按钮后刷新二维码</h3><h3></h3>';
		}
	},30000);
	ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'get_qrcode',login_param:login_param}}));
}

function start_update_qrstate(){
	qrcode_msg.getElementsByTagName('h3')[1].innerText = '等待二维码状态返回。。。';
	stop_update_qrstate();
	qr_update_time = new Date().getTime();
	qr_last_update_time = -1;
	var update_qrcodef = function(){
		if(qr_update_time != qr_last_update_time){
			qr_last_update_time = qr_update_time;
			ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'qrcode_state',qrsig:qrcode.qrsig,login_param:login_param}}));
		}
	};
	update_qrcodef();
	qrstate_timer = setInterval(update_qrcodef,2000);
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
	localStorage.setItem('qrcode_app',login_app);
	
}

function update_qrstate(data){
	if(qrstate == 1){
		return;
	}
	qr_update_time = new Date().getTime();
	qrcode_state = data.qrcode_state;
	call = qrcode_state[qrcode_state.call];
	msg = call[4];
	console.log(qrcode_state);
	if((qrcode_state.code != 66 && qrcode_state.code != 67) || data.code == 0){
		localStorage.removeItem('qrcode_state');
		localStorage.removeItem('qrcode_data');
		localStorage.removeItem('qrcode_app');
		console.log('1');
		stop_update_qrstate();
	}
	
	if(qrcode_state.code == '0'){
		stop_update_qrstate();
		qrstate = 1;
		//cookies = get_cookies(qrcode_state.cookies);
		//cookies = cookies.concat(get_cookies(qrcode_state.location.cookies));
		var uin = get_uin(qrcode_state.location.cookies.p_uin);
		qrcode_msg.getElementsByTagName('h3')[0].innerText = "扫码登录QQ："+call[5]+"("+uin+")";
		msg = "正在查询用户信息，请稍候。。。";
		qrcode.style = 'margin: 10px auto;position: relative;border-radius: 100%;height:120px;';
		qrcode.src = "//favicon.ico";
		console.log(JSON.stringify(qrcode_state));
		clearTimeout(login_timer);
		login_timer = setTimeout(function(){
			if(login_app == 'qqmusic'){
				ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'login',qrcode_state:qrcode_state}}));
			}else if(login_app == 'netease'){
				msg = "正在登录网易云音乐，请稍候。。。";
				ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'login_netease_music',qrcode_state:qrcode_state}}));
			}else if(login_app == 'kuwo_qq'){
				msg = "正在登录酷我音乐，请稍候。。。";
				ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'login_kuwo_music',qrcode_state:qrcode_state}}));
			}
		},1000);
	}
	qrcode_msg.getElementsByTagName('h3')[1].innerText = msg;
}

function login(data){
	if(data.code == 1){
		if(data.login_state == 1){
			ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'login_state'}}));
			alert('登录成功,欢迎'+data.nick+'['+data.userid+']');
		}else{
			alert(data.login_msg);
			
			ws.close();
			document.body.innerHTML = "";
			var div = document.createElement("div");
			div.style = 'text-align: center;';
			document.body.appendChild(div);
			var btn = document.createElement("input");
			btn.type = 'button';
			btn.className = 'btn';
			btn.value = '刷新页面';
			btn.setAttribute('data','');
			btn.onclick = function(){
				location.reload();
			};
			div.appendChild(btn);
			
			//window.opener = null;
			//window.open("about:blank","_self").close();
			//window.location.href = "about:blank";
			//document.body.innerHTML = "";
		}
	}
}


function login_netease_music(data,type){
	if(type == 0){
		if(data.code == 1 && data.data.code == 200 && data.data.profile){
			var nickname = data.data.profile.nickname;
			var userId = data.data.profile.userId;
			qrcode.src = data.data.profile.avatarUrl;
			qrcode_msg.getElementsByTagName('h3')[1].innerHTML = '网易云音乐登录成功！<br>用户：'+nickname+'['+userId+']<br><div>正在提交登录数据。。。</div>';
			ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'api',data:{type:'login_netease_music',data:data.data}}}));
		}else{
			qrcode_msg.getElementsByTagName('h3')[1].innerText = '网易云音乐登录失败！';
			alert(qrcode_msg.getElementsByTagName('h3')[1].innerText);
			location.reload();
		}
	}else if(type == 1){
		qrcode_msg.getElementsByTagName('h3')[1].getElementsByTagName('div')[0].innerHTML = '数据已提交，正在重启小讯。。。';
		ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am force-stop com.phicomm.speaker.device'}));
		setTimeout(function(){
			ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
			ws_send(JSON.stringify({type:'send_message',what:65536,arg1:3,arg2:0,obj:'{"type":"login_state","code":1,"login_state":"0"}'}));
			setTimeout(function(){
				location.reload();
			},1000);
		},3000);
	}
}


function login_kuwo_music(data,type){
	if(type == 0){
		if(data.code == 1 && data.data.result == "succ" && data.data.userInfo){
			var userInfo = data.data.userInfo;
			var nickname = userInfo.nickName;
			var userId = userInfo.uid;
			qrcode.src = userInfo.pic;
			qrcode_msg.getElementsByTagName('h3')[1].innerHTML = '酷我音乐登录成功！<br>用户：'+nickname+'['+userId+']<br><div>正在提交登录数据。。。</div>';
			setTimeout(function(){
				ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'api',data:{type:'login_kuwo_music',data:data.data}}}));
			},1000);
		}else{
			qrcode_msg.getElementsByTagName('h3')[1].innerText = '酷我音乐登录失败！';
			alert(qrcode_msg.getElementsByTagName('h3')[1].innerText);
			location.reload();
		}
	}else if(type == 1){
		if(data.code == 200){
			qrcode_msg.getElementsByTagName('h3')[1].getElementsByTagName('div')[0].innerHTML = '数据已提交，正在重启小讯。。。';
			ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am force-stop com.phicomm.speaker.device'}));
			setTimeout(function(){
				ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
				ws_send(JSON.stringify({type:'send_message',what:65536,arg1:3,arg2:0,obj:'{"type":"login_state","code":1,"login_state":"0"}'}));
				setTimeout(function(){
					location.reload();
				},1000);
			},3000);
		}else{
			qrcode_msg.getElementsByTagName('h3')[1].innerText = "数据提交失败！\r\n" + data.msg;
			alert(qrcode_msg.getElementsByTagName('h3')[1].innerText);
			location.reload();
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
			//ws_send(JSON.stringify({type:'get_info'}));
			return;
		}
		if(data.login_state == 0){
			if(unisound_init_timer != -1){
				clearTimeout(unisound_init_timer);
			}
			start_unisound();
			h3.innerHTML = '等待小讯初始化。。。(请确保您当前安装的new_Unisound版本是1.8或以上！)';
			if(!document.getElementById('Skip_Waiting')){
				var btn = document.createElement("input");
				btn.id = 'Skip_Waiting';
				btn.type = 'button';
				btn.className = 'btn';
				btn.value = '跳过等待';
				btn.onclick = function(){
					ws_send(JSON.stringify({type:'send_message',what:65536,arg1:3,arg2:0,obj:'{"type":"login_state","code":1,"login_state":"1"}'}));
					this.value = '已发送指令！';
					this.disabled = true;
					setTimeout(function(){
						h3.parentNode.removeChild(document.getElementById('Skip_Waiting'));
					},1000);
				};
				h3.parentNode.appendChild(btn);
			}
			login_state_timer = setTimeout(function(){ws_send(JSON.stringify({type:'get_info'}));},1000);
			if(unisound_init_timer1 == -1){
				if(ver > 1825){
					unisound_init_timer1 = setTimeout(function(){
						reload = true;
						var btn = document.createElement("input");
						btn.type = 'button';
						btn.className = 'btn';
						btn.value = '取消禁用小讯';
						btn.onclick = function(){
							this.value = '请稍候。。。';
							//h3.innerHTML = '请稍候。。。';
							ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/pm unhide com.phicomm.speaker.device'}));
							setTimeout(function(){
								ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
								setTimeout(function(){
									h3.innerHTML = '等待小讯初始化。。。(请确保您当前安装的new_Unisound版本是1.8或以上！)';
									alert('操作完毕！');
									location.reload();
								},3000);
							},3000);
						};
						//h3.parentNode.appendChild(btn);

						var btn = document.createElement("input");
						btn.type = 'button';
						btn.className = 'btn';
						btn.value = '重启小讯';
						btn.onclick = function(){
							this.value = '重启中。。。';
							ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am force-stop com.phicomm.speaker.device'}));
							setTimeout(function(){
								ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
								setTimeout(function(){
								h3.innerHTML = '等待小讯初始化。。。(请确保您当前安装的new_Unisound版本是1.8或以上！)';
								alert('重启完毕！');
								location.reload();
								},10000);
							},3000);
						};
						h3.parentNode.appendChild(btn);
						
						var btn = document.createElement("input");
						btn.type = 'button';
						btn.className = 'btn';
						btn.value = '重启音箱';;
						btn.onclick = function(){
							this.value = '重启中。。。';
							ws_send(JSON.stringify({type:'shell',shell:'stop adbd&&start adbd&&adb reboot'}));
							setTimeout(function(){
								alert('重启完毕！');
								location.reload();
							},10000);
						};
						h3.parentNode.appendChild(btn);
						
						var btn = document.createElement("input");
						btn.type = 'button';
						btn.className = 'btn';
						btn.value = '校准音箱时间';
						btn.setAttribute('data','');
						btn.onclick = function(){
							ws_send(JSON.stringify({type:'shell',type_id:"set_date",shell:'settings put global ntp_server ntp1.aliyun.com&date '+new Date().getTime().toString().substring(0,10)}));
						};
						h3.parentNode.appendChild(btn);
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
			
			if(document.getElementById('Skip_Waiting')){
				h3.parentNode.removeChild(document.getElementById('Skip_Waiting'));
			}
			
			hide_login();
			onhide_index();
			ws_send(JSON.stringify({type:'get_info'}));
		}else if(data.login_state == -4){
			if(unisound_init_timer != -1){
				clearTimeout(unisound_init_timer);
				unisound_init_timer = -1;
			}
	
			if(unisound_init_timer1 != -1){
				clearTimeout(unisound_init_timer1);
				unisound_init_timer1 = -1;
			}
			var Data = data;
			var ping_r1service_function = function(){
				var msg = '';
				var time = (''+ping_r1service_time).substring(0,10);
				if(ping_r1service == 1){
					msg = '成功('+time+')';
				}else if(ping_r1service == 0){
					msg = '失败('+time+')';
				}else if(ping_r1service == -1){
					msg = '等待('+time+')';
				}
				var device_time = (device_date != null ? set_time((''+device_date.getTime()).substring(0,10)) : null);
				var time = set_time((''+new Date().getTime()).substring(0,10));
				h3.innerHTML = Data.login_msg + '<br><p id="device_time" style="display:inline">音箱时间：'+device_time+'</p><br>测试PING授权服务器：'+msg;
				ws_send(JSON.stringify({type:'shell',type_id:'ping_r1service',shell:'date & ping -w 1 r1service.wxfsq.com'}));
			}
			ping_r1service_function();
			login_state_timer = setTimeout(function(){
				ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'login_state'}}));
			},1000);
			
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
				var btn = document.createElement("input");
				btn.type = 'button';
				btn.className = 'btn';
				btn.value = '重启小讯';
				btn.onclick = function(){
					h3.innerHTML = '重启中。。。';
					ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am force-stop com.phicomm.speaker.device'}));
					setTimeout(function(){
						ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
						ws_send(JSON.stringify({type:'send_message',what:65536,arg1:3,arg2:0,obj:'{"type":"login_state","code":1,"login_state":"0"}'}));
						setTimeout(function(){
							h3.innerHTML = 'R1音箱登录页面';
							alert('重启完毕！');
							location.reload();
						},10000);
					},3000);
				};
				h3.parentNode.appendChild(btn);
				h3.innerHTML = data.login_msg;
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
		if(data.code == 1 || data.code == 2){
			if(data.type == 'get_qrcode'){
				update_qrcode_data(data.data);
				return;
			}else if(data.type == 'qrcode_state'){
				update_qrstate(data.data);
				return;
			}else if(data.type == 'login'){
				login(data);
				return;
			}else if(data.type == 'login_state'){
				login_state(data);
				return;
			}else if(data.type == 'login_netease_music'){
				login_netease_music(data,0);
			}else if(data.type == 'login_kuwo_music'){
				login_kuwo_music(data,0);
			}else if(data.type == 'login_kuwo'){
				var pwd_login_btn = document.getElementById('pwd_login_btn');
				if(pwd_login_btn == null){
					return;
				}
				if(data.code == 1){
					pwd_login_btn.value = data.data.msg;
					if(data.data.result == 'succ'){
						login_kuwo_music(data,0);
						return;
					}
				}else{
					pwd_login_btn.value = data.msg;
				}
				alert(pwd_login_btn.value);
				setTimeout(function(){
					pwd_login_btn.disabled = false;
					pwd_login_btn.value = '登录';
				},1000);
			}else if(data.type == 'exit_login'){
				alert('已退出登录！');
				location.reload();
				return;
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
				return;
			}else if(data.type == 'get_memo' || data.type == 'add_memo' || data.type == 'update_memo' || data.type == 'del_memo' || data.type == 'delall_memo'){
				memo_info(data);
				return;
			}else if(data.type == 'Main_Wakeup_Benchmark'){
				Main_Wakeup_Benchmark_info(data);
			}else if(data.type == 'User_Wakeup_Benchmark'){
				User_Wakeup_Benchmark_info(data);
			}else if(data.type == 'get_info'){
				update_unisound_info(data);
				return;
			}else if(data.type == 'Submit_Play_Record'){
				
			}else if(data.type == 'asrMaxDuration'){
				asrMaxDuration_info(data);
				return;
			}else if(data.type == 'Voice_time_reporting'){
				create_Voice_time_reporting(data);
				return;
			}else if(data.type.substr(0,18) == 'set_Time_reporting' || data.type == 'set_Whole_point_prompt' || data.type == 'set_Half_dot_prompt'){
				Voice_time_reporting();
				if(data.type == 'set_Whole_point_prompt' || data.type == 'set_Half_dot_prompt'){
					alert('已保存！');
				}
				return;
			}else if(data.type == 'is_xiaoai'){
				return;
					//var arr = document.getElementsByTagName('input');
					var arr = btn_states;
					for(var i=0;i<arr.length;i++){
						console.log(arr[i].value);
						if(arr[i].value == 'TTS' || arr[i].value == '执行指令'){
							arr[i].setAttribute('skip',1);
							arr[i].style.display = '';
						}
					}
				
			}
			setTimeout(function(){
				ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'get_info'}}));
			},500);
			
		}
	}
}


function message(data){
	var type = data.type;
	//console.log(data);
	
	if(type == 'sends'){
		console.log(data);
		if(data.code == 200){
			var list = data.data;
			for(var i in list){
				message(list[i]);
			}
		}
		return;
	}else if(type == 'get_info'){
		if(unisound_init_timer != -1){
			clearTimeout(unisound_init_timer);
			unisound_init_timer = -1;
		}
	
		if(unisound_init_timer1 != -1){
			clearTimeout(unisound_init_timer1);
			unisound_init_timer1 = -1;
		}
		
		data = JSON.parse(data.data);
		if(init_state || init_state1){
			if(document.getElementById('Skip_Waiting') != null){
				h3.parentNode.removeChild(document.getElementById('Skip_Waiting'));
			}
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
	}else if(type == 'BT_Device'){
		update_bluetooth_data(data.data);
		console.log(data.data);
	}else if(type == 'BT_enable'){
		btn_bluetooth_enable.wait = false;
	}else if(type == 'BT_disable'){
		btn_bluetooth_enable.wait = false;
	}else if(type.substr(0,3) == 'BT_'){
		if(data.code != 200){
			alert(data.msg + '['+data.code+']');
		}
		console.log(data);
		var list = popup.getElementsByTagName('div');
		for(var i=0;i < list.length;i++){
			if(list[i].id == 'bluetooth_device_config_div'){
				popup.onclose();
				break;
			}
		}
	}else if(type == 'max_vol'){
		if(data.code == 200){
			vols.max = data.data;
			vol_text.innerHTML = ' '+vols.value+'/'+vols.max;
		}
	}else if(type == 'Auto_restart_device'){
		if(data.code == 200){
			create_Auto_restart_device(data.data);
		}
	}else if(type == 'set_Auto_restart_device_open' || type == 'set_Auto_restart_device_time'){
		if(data.code == 200){
			Auto_restart_device();
		}
	}else if(type == 'play_local_music'){
		if(data.code != 200){
			var msg = '[播放本地音乐]:'+data.msg;
			document.getElementById('text').value = msg;
			alert(msg);
		}else{
			document.getElementById('text').value = '[播放本地音乐]:'+data.data;
		}
	}else if(type == 'reboot_echo' && data.type_id != 'switch_player'){
		alert('已重启EchoService！');
	}else if(type == 'switch_player' || data.type_id == 'switch_player'){
		console.log(data);
		if(data.code == 200){
			if(type == 'reboot_echo'){
				var btn = document.getElementById('switch_player');
				var player = btn.getAttribute('PlayerType') == 2 ? 'ExoPlayer' : 'MediaPlayer';
				alert('已切换为'+player+'播放器！');
				return;
			}
			var btn = document.getElementById('switch_player');
			if(data.data.player == 2){
				btn.setAttribute('PlayerType',2);
				btn.value = '切换MediaPlayer播放器';
			}else{
				btn.setAttribute('PlayerType',1);
				btn.value = '切换ExoPlayer播放器';
			}
			ws_send(JSON.stringify({type:'reboot_echo',type_id:'switch_player'}));
		}else{
			alert("切换失败！"+data.msg);
		}
	}else{
		//console.log(data);
		if(type == 'set_dev_name' || type == 'rec_dev_name'){
			ws_send(JSON.stringify({type:'shell',type_id:'get_hostname',shell:"getprop net.hostname && netcfg"}));
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
			btn.value = '已禁用无用的服务！';
			btn.disabled = true;
			setTimeout(function(){
				ws_send(JSON.stringify({type:'shell',type_id:'useless_services_detection',shell:'/system/bin/pm list packages'}));
			},2000);
		}else if(data.type == 'shell' && data.type_id == 'get_hostname'){
			hide = true;
			
			if(init_state){
				init_state = false;
				ws_send(JSON.stringify({type:'get_info'}));
			}
			
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
							local_ip = value.split('/')[0];
							ip = local_ip+':8080';
						}
					});
					if(hostname != ''){
						update_device_list({hostname:hostname,ip:ip.substring(0,ip.indexOf(':')),dev_name:info.device_name,url:location.href.indexOf('?') > -1 ? location.href.split('?')[0] : location.href.split('#')[0]});
						localStorage.setItem('current_hostname',hostname);
						update_background_timer = setTimeout(function(){
							var img = localStorage.getItem(hostname+'_background');
							if(img){
								set_background_css(img);
							}else{
								Restore_background(background);
							}
							update_StatusBar();
						},50);
						dev_name = '['+hostname.substr(-4)+']';
					}
					if(document.title.substr(-6) != dev_name && document.title.indexOf('正在获取设备信息') == -1){
						if(document.title.substr(-1) == ']'){
							document.title = document.title.substr(0,document.title.length-6) + dev_name;
						}else{
							document.title += dev_name;
						}
						h3.innerHTML = document.title;
					}
				}
			}
		}else if(data.type == 'shell' && data.type_id == 'ps'){
			hide = true;
			ps_message(data.data)
		}else if(data.type == 'shell' && data.type_id == 'ping_r1service'){
			hide = true;
			console.log(data);
			if(data.code == 200){
				ping_r1service_time = new Date().getTime();
				data = data.data;
				if(data){
					var arr = data.split("\r\n");
					for(var i = 0;i<arr.length;i++){
						var str = arr[i];
						if(str != '' && str.indexOf('CST') > -1){
							device_date = new Date(str+' +0800');
							break;
						}
					}
					var device_time = (device_date != null ? set_time((''+device_date.getTime()).substring(0,10)) : null);
					if(document.getElementById('device_time')){
						document.getElementById('device_time').innerHTML = '音箱时间：'+device_time;
					}
					if(data.indexOf('icmp_seq=1') > -1){
						ping_r1service = 1;
					}else{
						ping_r1service = 0;
					}
				}else{
					ping_r1service = -2;
				}
			}else{
				ping_r1service = code;
			}
		}else if(data.type == 'shell' && data.type_id == 'set_date'){
			hide = true;
			console.log(data);
			alert('已校准音箱时间！');
			ws_send(JSON.stringify({type:'shell',type_id:'ping_r1service',shell:'date & ping -w 1 r1service.wxfsq.com'}));
		}else if(data.type == 'shell' && data.type_id == 'reboot_xiaoaiservice'){
			hide = true;
			ws_send(JSON.stringify({type:'shell',shell:'am broadcast -a android.intent.action.BOOT_COMPLETED -n com.xiaomi.xiaoailite/.ai.BootReceiver&am broadcast -a android.intent.action.BOOT_COMPLETED -n com.xiaomi.xiaoailite/com.taobao.accs.EventReceiver'}));
		}else if(data.type == 'shell' && data.type_id == 'activation_xiaoai'){
			hide = true;
			ws_send(JSON.stringify({type:'shell',shell:'am broadcast -a android.intent.action.BOOT_COMPLETED -n com.xiaomi.xiaoailite/.ai.BootReceiver&am broadcast -a android.intent.action.BOOT_COMPLETED -n com.xiaomi.xiaoailite/com.taobao.accs.EventReceiver'}));
		}else if(data.type == 'play'){
			hide = true;
		}else if(data.type == 'send_message' && data.type_id == 'dormancy'){
			hide = true;
			ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'get_info'}}));
		}else if(data.type_id == 'modify_color'){
			hide = true;
			alert('已保存！');
		}else if(data.type_id == 'get_device_info'){
			hide = true;
			set_systeminfo1(data.data);
		}
		var type_id = data.type_id;
		if(type_id != null  && !hide){
			var text = document.getElementById('text');
			var tips_text = '';
			if(data.code == 200){
				if(type_id.substr(0,2) == '点播' || type_id == '小讯收藏' || type_id == '个性电台'){
					switch_page(document.getElementById('btn_page_music'));
				}
				var tips = get_tips(type_id);
				if(tips != null){
					tips_text = '['+type_id+']:'+tips;
				}else{
                    tips_text = '['+type_id+']:'+data.data;
				}
            }else{
                tips_text = '['+type_id+']:'+data.msg;
            }
			text.value = tips_text;
			alert(tips_text);
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
    }
}

function index(data){
	if(reload){
		location.reload();
		return;
	}
	
	info = data;
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
	
	if(init_state){
		document.title = '正在获取设备信息。。。';
		h3.innerHTML = document.title;
		ws_send(JSON.stringify({type:'shell',type_id:'get_hostname',shell:'getprop net.hostname && netcfg'}));
		return;
	}
	init_state1 = false;	
	
	//首页
	document.title = 'R1音箱控制页面'+dev_name;
	h3.innerHTML = document.title;
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
	
	
	//蓝牙页面
	if(ver +1 > 1847){
		var bluetooth_list = document.createElement('div');
		bluetooth_div.style = 'display:none;';
		bluetooth_div.id = 'bluetooth';
		
		btn_bluetooth_enable.type = 'button';
		btn_bluetooth_enable.className = 'btn';
		btn_bluetooth_enable.value = '打开蓝牙适配器';
		btn_bluetooth_enable.disabled = true;
		btn_bluetooth_enable.wait = false;
		btn_bluetooth_enable.enable = -1;
		btn_bluetooth_enable.onclick = function(){
			if(btn_bluetooth_enable.enable == 0){
				btn_bluetooth_enable.wait = true;
				btn_bluetooth_enable.disabled = true;
				btn_bluetooth_enable.value = '正在打开。。。';
				ws_send(JSON.stringify({type:'BT_enable'}));
			}else if(btn_bluetooth_enable.enable == 1){
				btn_bluetooth_enable.wait = true;
				btn_bluetooth_enable.disabled = true;
				btn_bluetooth_enable.value = '正在关闭。。。';
				ws_send(JSON.stringify({type:'BT_disable'}));
			}
		};
		bluetooth_div.append(btn_bluetooth_enable);
		
		btn_bluetooth_scan1.type = 'button';
		btn_bluetooth_scan1.className = 'btn';
		btn_bluetooth_scan1.value = '打开蓝牙可发现';
		btn_bluetooth_scan1.disabled = true;
		btn_bluetooth_scan1.onclick = function(){
			if(info != null && info.Service_Normally_Open == false){
				ws_send(JSON.stringify({type:'BT_setScanMode',mode:(btn_bluetooth_scan1.ScanMode == 23 ? 20 : 23)}));
			}else{
				ws_send(JSON.stringify({type:'BT_setScanMode',mode:(btn_bluetooth_scan1.ScanMode == 23 ? 21 : 23)}));
			}
			ws_send(JSON.stringify({type:'BT_Device'}));
		};
		bluetooth_div.append(btn_bluetooth_scan1);
		
		btn_bluetooth_scan.type = 'button';
		btn_bluetooth_scan.className = 'btn';
		btn_bluetooth_scan.value = '扫描蓝牙设备';
		btn_bluetooth_scan.disabled = true;
		btn_bluetooth_scan.onclick = function(){
			//btn_bluetooth_scan.value = '扫描中。。。';
			//btn_bluetooth_scan.disabled = true;
			ws_send(JSON.stringify({type:'BT_StartScan'}));
			ws_send(JSON.stringify({type:'BT_Device'}));
		};
		bluetooth_div.append(btn_bluetooth_scan);
		
		bluetooth_list_div.style = 'max-width:600px;margin: 10px auto;background-color: rgba(0, 0, 0, 0.7);border-radius:15px;';
		var div = document.createElement('div');//占位
		div.style.height = '15px';
		bluetooth_list_div.appendChild(div);
		var div = document.createElement('div');
		var text = document.createElement('text');
		text.id = 'bluetooth_list_title';
		text.style = 'color:rgba(0,160,255,1);font-size: 15px;';
		text.innerHTML = '蓝牙列表';
		div.appendChild(text);
		var text = document.createElement('text');
		text.id = 'bluetooth_list_ico';
		text.style = 'font-size: 13px;color:rgba(0,160,255,1);';
		text.innerHTML = '	▼';
		div.appendChild(text);
		//bluetooth_list_div.appendChild(document.createElement('br'));
		div.onclick = function(){
			var list_ico = document.getElementById('bluetooth_list_ico');
			var list_occupancy = document.getElementById('bluetooth_list_occupancy');
			if(bluetooth_lists.style.display == 'none'){
				list_occupancy.style.display = 'none';
				bluetooth_lists.style.display = 'block';
				list_ico.innerHTML = '	▼';
			}else{
				list_occupancy.style.display = 'block';
				bluetooth_lists.style.display = 'none';
				list_ico.innerHTML = '	▲';
			}
		}
		bluetooth_list_div.appendChild(div);
		var div = document.createElement('div');//占位
		div.id = 'bluetooth_list_occupancy';
		div.style.display = 'none';
		div.style.height = '15px';
		bluetooth_list_div.appendChild(div);
		bluetooth_list_div.appendChild(bluetooth_lists);
		bluetooth_lists.style = 'margin: 0px auto;max-height:500px;overflow-x:hidden;overflow-y:auto;';
		bluetooth_list.setAttribute('border','0');
		bluetooth_list.setAttribute('cellspacing','0');
		bluetooth_list.setAttribute('cellpadding','0');
		bluetooth_list.setAttribute("style", "width:100%;color:rgba(0,160,255,1);margin: 0px auto;");
		bluetooth_lists.appendChild(bluetooth_list);
		
		
		var div = document.createElement('div');//占位
		//div.style.height = '15px';
		bluetooth_list.appendChild(div);
		
		var hr = document.createElement('hr');
		hr.size = 1;
		hr.className = 'hr1';
		div.appendChild(hr);
		
		var div = document.createElement('div');
		div.id = 'margin: 5px auto;';
		var text = document.createElement('text');
		text.id = 'bluetooth_pairing_title';
		text.style = 'color:rgba(0,160,255,1);font-size: 13px;';
		text.innerHTML = '已配对的设备[0]';
		div.appendChild(text);
		
		bluetooth_list.appendChild(div);
		bluetooth_list.appendChild(bluetooth_pairing_devices);
		
		var div = document.createElement('div');//占位
		//div.style.height = '15px';
		bluetooth_list.appendChild(div);
		var div = document.createElement('div');
		div.id = 'margin: 5px auto;';
		var text = document.createElement('text');
		text.id = 'bluetooth_scan_title';
		text.style = 'color:rgba(0,160,255,1);font-size: 13px;';
		text.innerHTML = '扫描到的设备[0]';
		var hr = document.createElement('hr');
		hr.size = 1;
		hr.className = 'hr1';
		div.appendChild(hr);
		div.appendChild(text);
		
		bluetooth_list.appendChild(div);
		bluetooth_list.appendChild(bluetooth_scan_devices);
		
		var hr = document.createElement('hr');
		hr.size = 1;
		hr.className = 'hr1';
		bluetooth_list.appendChild(hr);
		
		bluetooth_div.appendChild(bluetooth_list_div);
		divs.appendChild(bluetooth_div);
	}
	
	//设备信息
	if(ver+1 > 1825 || (ver < 1823 && ver > 1800)){
		device_info.style = 'display:none;';
		var div = document.createElement('div');
		div.style = 'max-width:600px;margin: 10px auto;background-color: rgba(0, 0, 0, 0.7);border-radius:15px;';
		device_info.appendChild(div)
		var div1 = document.createElement('div');//占位
		div1.style.height = '15px';
		div.appendChild(div1);
		
		if(is_new_unisound && u_ver+1 > 1800 && ver+1 > 1825){
			var text = document.createElement('text');
			text.style.color = 'rgba(0,160,255,1)';
			text.innerHTML = "登录信息：<br>";
			div.appendChild(text);
			var user_info_text = document.createElement('text');
			user_info_text.style.color = 'rgba(0,160,255,1)';
			user_info_text.id = 'user_info_text';
			div.appendChild(user_info_text);
			div.appendChild(document.createElement('br'));
		
			var text = document.createElement('text');
			text.innerHTML = "<br>授权信息：<br>";
			text.style.color = 'rgba(0,160,255,1)';
			div.appendChild(text);
			var sq_info_text = document.createElement('text');
			sq_info_text.style.color = 'rgba(0,160,255,1)';
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
		text.style.color = 'rgba(0,160,255,1)';
		div.appendChild(text);
		var text = document.createElement('text');
		text.style.color = 'rgba(0,160,255,1)';
		text.id = 'state_info_text';
		div.appendChild(text);
		div.appendChild(document.createElement('br'));
		
		var div1 = document.createElement('div');//占位
		div1.style.height = '15px';
		div.appendChild(div1);
		
		if(is_new_unisound && u_ver+1 > 1822 && ver+1 > 1825){
			var Main_Wakeup_Benchmark_div = document.createElement('div');
			var text = document.createElement('text');
			text.innerHTML = '唤醒识别精度';
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
			Main_Wakeup_Benchmark.maxvalue = 600;
			Main_Wakeup_Benchmark.value = 0;
			Main_Wakeup_Benchmark.disabled = true;
			Main_Wakeup_Benchmark.addEventListener('input', function() {
				clearTimeout(Main_Wakeup_Benchmark_timer);
				Main_Wakeup_Benchmark_timer = setTimeout(function(){
					if(u_ver+1 > 1848){
						ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'User_Wakeup_Benchmark',User_Wakeup_Benchmark:parseInt(Main_Wakeup_Benchmark.value)/100}}));
					}else{
						ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'Main_Wakeup_Benchmark',Benchmark:parseInt(Main_Wakeup_Benchmark.value)/100}}));
					}
				},100);
			});
			Main_Wakeup_Benchmark_div.appendChild(Main_Wakeup_Benchmark);
			var text = document.createElement('text');
			text.innerHTML = '高';
			var div = document.createElement('div');div.style = 'width:50px;display:inline-block;';div.appendChild(text);
			Main_Wakeup_Benchmark_div.appendChild(div);
			Main_Wakeup_Benchmark_div.style = 'color:rgba(238, 0, 0, 1);';
			device_info.appendChild(Main_Wakeup_Benchmark_div);
		}
		
		if(is_new_unisound && u_ver+1 > 1822 && ver+1 > 1828){
			var asrMaxDuration_div = document.createElement('div');
			var text = document.createElement('text');
			text.innerHTML = '最大录音时间';
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
			asrMaxDuration.disabled = true;
			text.innerHTML = '当前：';
			asrMaxDuration.addEventListener('input', function() {
				clearTimeout(asrMaxDuration_timer);
				asrMaxDuration_timer = setTimeout(function(){
					asrMaxDuration_value.innerHTML = asrMaxDuration.value+'秒';
					ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'asrMaxDuration',Duration:parseInt(asrMaxDuration.value)*1000}}));
				},100);
			});
			asrMaxDuration_div.appendChild(asrMaxDuration);
			asrMaxDuration_value.innerHTML = '未知';
			var div = document.createElement('div');div.style = 'width:50px;display:inline-block;';div.appendChild(asrMaxDuration_value);
			asrMaxDuration_div.appendChild(div);
			asrMaxDuration_div.style = 'color:rgba(238, 0, 0, 1);';
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
			btn.value = '重登录QQ音乐';
			btn.onclick = function(){
				if(confirm("确定要重新登录QQ音乐？\r\n请使用上次登录的QQ进行登录！")){
					login_app = 'qqmusic';
					hide_device_info();
					stop_updateinfo();
					divs.innerHTML = '<h3></h3>';
					divs.appendChild(login_div);
					onhide_login();
				}
			};
			device_info.appendChild(btn);
			
			if(u_ver +1 > 1844){
				var btn = document.createElement("input");
				btn.type = 'button';
				btn.className = 'btn';
				btn.value = '重登录酷我音乐';
				btn.onclick = function(){
					if(confirm("确定要重新登录酷我音乐？")){
						login_app = 'kuwo';
						hide_device_info();
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
			btn.value = '重登录网易云音乐';
			btn.onclick = function(){
				if(confirm("确定要重新登录网易云音乐？")){
					login_app = 'netease';
					hide_device_info();
					stop_updateinfo();
					divs.innerHTML = '<h3></h3>';
					divs.appendChild(login_div);
					onhide_login();
				}
			};
			device_info.appendChild(btn);
			
			
			var btn = document.createElement("input");
			btn.type = 'button';
			btn.className = 'btn';
			btn.value = '退出登录';
			btn.onclick = function(){
				if(confirm("确定要退出登录吗？")){
					ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'exit_login'}}));
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
			var btn = this;
			btn.disabled = true;
			btn.value = '请稍候。。。';
			ws_send(JSON.stringify({type:'shell',type_id:'ps',shell:'ps'}));
		};
		device_info.appendChild(btn);
		
		
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
			},2000);
			
			if(dormancy_btn.dormancy_state != -1){
				if(!confirm("确定要"+this.value+"吗？")){
					return;
				}
			}
			
			if(dormancy_btn.dormancy_state == 1){
				ws_send(JSON.stringify({type:'send_message',what:256,arg1:1,arg2:-1,obj:true}));
			}else if(dormancy_btn.dormancy_state == 0){
				ws_send(JSON.stringify({type:'send_message',what:256,arg1:2,arg2:-1,obj:true}));
			}
		}
		device_info.appendChild(dormancy_btn);
		
		if(u_ver+1 > 1840){
			Wakeup_set_btn.type = 'button';
			Wakeup_set_btn.className = 'btn';
			dormancy_btn.id = 'Wakeup_set_btn';
			Wakeup_set_btn.value = '启用/禁用麦克风';
			Wakeup_set_btn.style.display = 'none';
			Wakeup_set_btn.Wakeup_set_state = -1;
			
			Wakeup_set_btn.onclick = function(){
				var data1 = this;
				data1.disabled = true;
				setTimeout(function(){
					data1.disabled = false;
				},2000);
				
				if(Wakeup_set_btn.Wakeup_set_state != -1){
					if(!confirm("确定要"+(Wakeup_set_btn.Wakeup_set_state == 0 ? "启用麦克风" : "禁用麦克风")+"吗？\r\n提示：此功能为临时开关！")){
						return;
					}
				}
				
				if(Wakeup_set_btn.Wakeup_set_state == 1){
					ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'stop_wakeup'}}));
				}else if(Wakeup_set_btn.Wakeup_set_state == 0){
					ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'enter_wakeup'}}));
				}
			}
			device_info.appendChild(Wakeup_set_btn);
		}
		
		var btn = document.createElement("input");
		btn.type = 'button';
		btn.className = 'btn';
		btn.id = 'hide_useless_services';
		btn.value = '无可禁用的无用服务';
		//btn.style.display = 'none';
		btn.disabled = true;
		btn.setAttribute('wait',0);
		btn.onclick = function(){
			var btn = document.getElementById('hide_useless_services');
			btn.disabled = true;
			btn.value = '请稍候。。。';
			btn.setAttribute('wait',new Date().getTime() + 30000);
			var arr = [];
			for(var i=0;i<useless_services_list.length;i++){
				arr.push('/system/bin/pm hide '+useless_services_list[i]);
			}
			ws_send(JSON.stringify({type:'shell',type_id:'hide_useless_services',shell:arr.join(' && ')}));
		};
		device_info.appendChild(btn);
		
		if(ver+1 > 1835){
			var btn = document.createElement("input");
			btn.id = 'disable_unisound';
			btn.type = 'button';
			btn.className = 'btn';
			btn.value = is_unisound ? '禁用小讯' : '启用小讯';
			btn.onclick = function(){
				if(confirm("确定要"+this.value+"吗？")){
					var data1 = this;
					data1.disabled = true;
					setTimeout(function(){
						data1.disabled = false;
					},1000); 
					if(this.value == '禁用小讯'){
						ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/pm hide com.phicomm.speaker.device'}));
					}else{
						ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/pm unhide com.phicomm.speaker.device'}));
					}
				}
			};
			device_info.appendChild(btn);
		}
		
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
					ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/pm clear com.phicomm.speaker.device'}));
					setTimeout(function(){
					ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
					alert('清除完毕，稍候请重新扫码登录！');
					btn.disabled = false;
					btn.value = '清除小讯数据';
					},3000);
				}
			};
			device_info.appendChild(btn);
		}
		
		
		
		if(u_ver+1 > 1825 && ver +1 > 1841){
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
					ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'Set_Bluetooth_prompt_tone',enable:false}}));
					ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'get_info'}}));
				}else if(Bluetooth_prompt_tone_btn.state == 0){
					ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'Set_Bluetooth_prompt_tone',enable:true}}));
					ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'get_info'}}));
				}
			}
			device_info.appendChild(Bluetooth_prompt_tone_btn);
		}
		
		if(u_ver+1 > 1824){
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
					ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'Submit_Play_Record',enable:false}}));
					ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'get_info'}}));
				}else if(Submit_Play_Record_btn.state == 0){
					ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'Submit_Play_Record',enable:true}}));
					ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'get_info'}}));
				}
			}
			device_info.appendChild(Submit_Play_Record_btn);
		}
		
		if(is_new_unisound && u_ver+1 > 1820 && ver+1 > 1815){
			var btn = document.createElement("input");
			btn.id = 'clear_memo';
			btn.type = 'button';
			btn.className = 'btn';
			btn.value = '无可清除的闹铃/提醒';
			//btn.style.display = 'none';
			btn.disabled = true;
			btn.setAttribute('wait',0);
			btn.onclick = function(){
				if(confirm("确定要清除吗？")){
					var btn = document.getElementById('clear_memo');
					btn.disabled = true;
					btn.value = '请稍候。。。';
					if(u_ver+1 > 1840){
						ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'delall_memo'}}));
					}else{
						ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'del_memo',data:memo_list}}));
					}
					btn.setAttribute('wait',new Date().getTime() + 30000);
				}
			};
			device_info.appendChild(btn);
		}
		
		if(ver+1 > 1856){
			var btn = document.createElement("input");
			btn.id = 'switch_player';
			btn.type = 'button';
			btn.className = 'btn';
			if(info.PlayerType == 2){
				btn.setAttribute('PlayerType',2);
				btn.value = '切换MediaPlayer播放器';
			}else{
				btn.setAttribute('PlayerType',1);
				btn.value = '切换ExoPlayer播放器';
			}
			btn.onclick = function(){
				var PlayerType = this.getAttribute('PlayerType');
				var player = PlayerType == 2 ? 1 : 2;
				if(PlayerType == 2){
					PlayerType = 'MediaPlayer播放器';
				}else{
					PlayerType = 'ExoPlayer播放器';
				}
				if(confirm("确定要切换为"+PlayerType+"吗？")){
					ws_send(JSON.stringify({type:'switch_player',player:player}));
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
			ws_send(JSON.stringify({type:'set_eq_enable',enable:this.checked}));
			ws_send(JSON.stringify({type:'get_eq_config'}));
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
			ws_send(JSON.stringify({type:'set_bass_enable',enable:this.checked}));
			ws_send(JSON.stringify({type:'get_eq_config'}));
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
			ws_send(JSON.stringify({type:'set_loudness_enable',enable:this.checked}));
			ws_send(JSON.stringify({type:'get_eq_config'}));
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
			x = (x/this.clientWidth)*720;
			y = (y/this.clientHeight)*480;
			x = parseInt(x);
			y = parseInt(y);
			ws_send(JSON.stringify({type:'input',input:'tap '+x+' '+y}));
		};
		function handleTouchEvent(event) {
        var output = document.getElementById("output");
		console.log(event.type);
        switch (event.type) {
            case "touchstart":
				clearTimeout(long_press_timer);
				var x = event.changedTouches[0].clientX;
				var y = event.changedTouches[0].clientY;
				x = (x/this.clientWidth)*720;
				y = (y/this.clientHeight)*480;
				x = parseInt(x);
				y = parseInt(y);
				startx = x - 10;
				starty = y - 150;
				var long_press_fun = function(){
					long_press_timer = -1;
					ws_send(JSON.stringify({type:'input',input:'swipe '+startx+' '+starty+' '+(startx+1)+' '+(starty+1)+' 1000'}));
					//var input = 'swipe '+startx+' '+starty+' '+(startx+1)+' '+(starty+1)+' 500';
				};
				long_press_timer = setTimeout(long_press_fun,500);
               // output.innerHTML = "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
                break;
            case "touchend":
				clearTimeout(long_press_timer);
				if(long_press_timer == -1){
					//ws_send(JSON.stringify({type:'input',input:'swipe '+startx+' '+starty+' '+(startx+1)+' '+(starty+1)+' 1000'}));
					return;
				}
				if(touch_disable){
					break;
				}
				var x = event.changedTouches[0].clientX;
				var y = event.changedTouches[0].clientY;
				x = (x/this.clientWidth)*720;
				y = (y/this.clientHeight)*480;
				x = parseInt(x) - 10;
				y = parseInt(y) - 150;
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
					ws_send(JSON.stringify({type:'input',input:'swipe '+startx+' '+starty+' '+x+' '+y}));
				}
				startx = -1;
				starty = -1;
                //output.innerHTML += "Touch ended (" + event.changedTouches[0].clientX + "," + event.changeTouches[0].clientY + ")";
                break;
            case "touchmove":
				clearTimeout(long_press_timer);
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
				var new_y = y - 100;
			}else{
				var new_y = y + 100;
			}
			if(new Date().valueOf() - mousewheel_interval > 0){
				mousewheel_interval = new Date().valueOf() + 500;
				ws_send(JSON.stringify({type:'input',input:'swipe '+x+' '+y+' '+x+' '+new_y}));
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
					btn.id = 'input_text_btn';
					btn.onclick = function(){
						this.disabled = true;
						stop_screen();
						setTimeout(function(){
							var input = prompt('请输入内容！','');
							var btn = document.getElementById("input_text_btn");
							btn.disabled = false;
							setTimeout(function(){start_screen()},500);
							if(input != null){
								inputs = input.split('');
								input_function = function(){
									var input_text = '';
									for(var i = 0;(i < 2 || inputs.length > 0);i++){
										var str = inputs.shift();
										if(typeof(str) != 'undefined' && str != ''){
											input_text += str;
										}else{
											break;
										}
									}
									if(input_text != ''){
										send_input("text "+input_text);
										setTimeout(input_function,100);
									}
								};
								input_function();
							}
						},600);
						
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
		
		screen_div.appendChild(document.createElement("br"));
		var btn = document.createElement("input");
		btn.type = 'button';
		btn.className = 'btn';
		btn.value = '重置分辨率';
		btn.onclick = function(){
			var btn = this;
			btn.disabled = true;
			btn.value = '已重置分辨率为720x480！';
			setTimeout(function(){
				btn.value = '重置分辨率';
				btn.disabled = false;
			},1000);
			ws_send(JSON.stringify({type:'shell',shell:'wm size 720x480'}));
		}
		screen_div.appendChild(btn);
		divs.append(screen_div);
	}
	//音乐
	musics_div.style = 'display: none;';
    music_pic.id = 'music_pic';
	music_pic.style = 'display: block;margin: 0px auto;position: relative;width: 183px;height: 183px;border: 6px solid rgba(0, 0, 0, 0.1);overflow: hidden;border-radius: 100%;-webkit-animation: img 30s linear infinite;animation: img 30s linear infinite;animation-play-state:paused;';
	music_pic.nopic = 'http://'+control_host+'/pic/nopic.jpg';
    music_pic.src = music_pic.nopic;
	
	music_pic.onload = function(){
		musicpic_background();
	};
	
	music_pic.onerror = function(){
		this.src = music_pic.nopic;
	}
	
	music_lrc.innerHTML = '';
	musics_div.appendChild(music_pic); 
	music_lrc.style = 'display: none; width: 100%;height: 195px;';
	musics_div.appendChild(music_lrc);
	music_pic.ondblclick = function(){
		if(music_info != null){
			var title = get_music_title(music_info);
			h3.innerHTML = '正在播放：'+title;
			document.title = dev_name+h3.innerHTML;
		}
		music_pic.style.display = 'none';
		music_lrc.style.display = 'block';
		update_lrc(true);
		localStorage.setItem(hostname+'_lrc_mode',1);
	};
	music_lrc.ondblclick = function(){
		music_lrc.style.display = 'none';
		music_pic.style.display = 'block';
		localStorage.setItem(hostname+'_lrc_mode',0);
	};
	
	var lrc_mode = localStorage.getItem(hostname+'_lrc_mode');
	if(lrc_mode){
		if(lrc_mode == 1){
			music_pic.style.display = 'none';
			music_lrc.style.display = 'block';
			setTimeout(function(){
				update_lrc(true,true);
			},10);
		}
	}
	
	var div = document.createElement('div');div.style = 'height:25px;';
	musics_div.appendChild(div);
	
	music_time_position.innerHTML = '00:00';
	var div = document.createElement('div');div.style = 'width:50px;display:inline-block;';div.appendChild(music_time_position);
	musics_div.appendChild(div);
	music_time.type = 'range';
    music_time.min = 0;
    music_time.step = 1;
    music_time.max = 0;
	music_time.value = 0;
	music_time.style.margin = '5px 5px';
	if(ver > 1827){
		music_time.addEventListener('mousedown', function() {
			time_lock = true;
		});
		
		music_time.addEventListener('mouseup', function() {
			setTimeout(function(){
				time_lock = false;
			},600);
		});
		
		music_time.addEventListener('input', function() {
			clearTimeout(music_progress_timer);
			var position = music_time.value;
			info_time[0] = -1;
			info_time[1] = position;
			info_time[2] = music_info.duration;
			music_time_position.innerHTML = ms_to_is(position);
			update_lrc(false);
			music_progress_timer = setTimeout(function(){
				send(null,null,'set_position',{position:position});
				send(null,null,'send_message',{what:4,arg1:3,arg2:-1,obj:true});
			},60);
		});
	}
	musics_div.appendChild(music_time);
	//music_time_duration.style = 'color:rgba(0,160,255,1);';
	music_time_duration.innerHTML = '00:00';
	var div = document.createElement('div');div.style = 'width:50px;display:inline-block;';div.appendChild(music_time_duration);
	musics_div.appendChild(div);
	
	var div = document.createElement('div');
	div.id = 'quality_div';
	div.style = 'display: none; max-height:60px;';
	var text = document.createElement('text');
	text.style = '';
	text.innerHTML = '音质：';
	div.appendChild(text);

	switch_quality.style.margin = '5px 5px 0px 0px';
	switch_quality.style.minWidth = '60px';
	switch_quality.style.height = '25px';
	
	var arr = [['Hi-Res',3],['无损',2],['超品',1],['高品',0]];
	for(var i=0;i<arr.length;i++){
	    var option = document.createElement('option');
	    option.innerHTML = arr[i][0];
	    option.value = arr[i][1];
		
	    if(option.value == data.ExoPlayer_Quality){
		    option.selected = 'selected';
	    }
		switch_quality.appendChild(option);
	}
	
	if(info.Support_Flac != true){
		if(switch_quality.length > 2){
			switch_quality[0].style.display = 'none';
			switch_quality[1].style.display = 'none';
			switch_quality[2].selected = 'selected';
		}
	}
	
	switch_quality.onchange = function(){
		ws_send(JSON.stringify({type:'switch_quality',quality:this.value}));
	}

	div.appendChild(switch_quality);
	quality_text.style = '';
	div.appendChild(quality_text);
	
	musics_div.appendChild(div);
	musics_div.appendChild(document.createElement('div'));
	
	if(data.Current_PlayerType == 2 && ver+1 > 1863){
		div.style.display = 'block';
	}
	
	//musics_div.appendChild(document.createElement('br'));
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
				ws_send(JSON.stringify({type:'set_play_mode',mode:playmode[1]}));
				ws_send('{"type":"get_info"}');
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
	
	var div = document.createElement('div');
	musics_div.appendChild(div);
	var btn = document.createElement("input");
	btn.type = 'button';
	btn.className = 'btn';
	btn.value = Cover_background_open == true ? '关闭封面背景' : '打开封面背景';
	btn.onclick = function(){
		var msg;
		if(Cover_background_open){
			msg = '确定要关闭封面背景吗？';
		}else{
			msg = "确定要打开封面背景吗？\r\n提示：打开后可能会导致页面卡顿！";
		}
		if(!confirm(msg)){
			return;
		}
		Cover_background_open = Cover_background_open == true ? false : true;
		localStorage.setItem('Cover_background_open',Cover_background_open);
		if(Cover_background_open == true){
			this.value = '关闭封面背景';
			musicpic_background();
		}else{
			this.value = '打开封面背景';
			Restore_background();
		}
	}
	div.appendChild(btn);
	
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
    vols.max = data.vol;
	vols.value = data.vol;
	
    vols.addEventListener('input', function() {
		clearTimeout(vols_disabled_timer);
		vols_disabled_timer = setTimeout(function(){vols.disabled = true;},3000);
		vol_text.innerHTML = '   '+this.value+'/'+this.max;
		ws_send(JSON.stringify({type:'set_vol',vol:this.value}));
		ws_send(JSON.stringify({type:'get_info'}));
	});
	vols.disabled = true;
	vols_div.appendChild(vols);
    vol_text = document.createElement('text');
	vol_text.innerHTML = ' '+vols.value+'/'+vols.max;
	var div = document.createElement('div');div.style = 'width:30px;display:inline-block;';div.appendChild(vol_text);
	vols_div.appendChild(div);
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
	div_list.style = 'max-width:600px;display:none;margin: 10px auto;background-color: rgba(0, 0, 0, 0.7);border-radius:15px;';
	div.appendChild(text);
	var text = document.createElement('text');
	text.id = 'list_ico';
	text.style = 'font-size: 13px';
	text.innerHTML = '	▲';
	div.appendChild(text);
	
	localStorage.setItem(hostname+'_music_list_hide',1);
	//div_list.appendChild(document.createElement('br'));
	div.onclick = function(){
		var list_ico = document.getElementById('list_ico');
		var list_occupancy = document.getElementById('list_occupancy');
		if(lists.style.display == 'none'){
			var list_occupancy = document.getElementById('list_occupancy');
			if(list_occupancy){
				list_occupancy.style.height = '14px';
			}
			lists.style.display = 'block';
			list_ico.innerHTML = '	▼';
			//localStorage.setItem(hostname+'_music_list_hide',0);
			if(List.playIndex>-1){
				lists.scrollTop = list.getElementsByTagName('tr')[List.playIndex].offsetTop;
			}
		}else{
			if(list_occupancy){
				list_occupancy.style.height = '15px';
			}
			lists.style.display = 'none';
			list_ico.innerHTML = '	▲';
			//localStorage.setItem(hostname+'_music_list_hide',1);
		}
	}
	div_list.appendChild(div);
	
	var div = document.createElement('div');//占位
	div.id = 'list_occupancy';
	div.style.display = 'block';
	div.style.height = '15px';
	div_list.appendChild(div);
	div_list.appendChild(lists);
	lists.style = 'margin: 1px auto;max-height:500px;overflow-x:hidden;overflow-y:auto;';
	
	list.setAttribute('border','0');
	list.setAttribute('cellspacing','0');
	list.setAttribute('cellpadding','0');
	list.setAttribute("style", "width:100%;color:rgba(0,160,255,1);margin: 0px auto;");
	lists.appendChild(list);
	
	var music_list_hide = localStorage.getItem(hostname+'_music_list_hide');
	if(music_list_hide){
		if(music_list_hide == 1){
			div.style.display = 'block';
			lists.style.display = 'none';
			text.innerHTML = '	▲';
		}
	}
	
	
	//按钮
	//switch_btns.appendChild(document.createElement('br'));
	var arr = [['音乐','music',1000],['屏幕','screen',1000],['音效','sound_effects',1822],['蓝牙','bluetooth',1847],['设备信息','device_info',1822]];
	page_list = [];
	for(var i=0;i<arr.length;i++){
		if(ver+1 > arr[i][2]){
		var btn = document.createElement("input");
		btn.id = 'btn_page_'+arr[i][1];
		var data = [];
		data[0] = arr[i][0];
		data[1] = arr[i][1];
		data[2] = btn.id;
		page_list.push(data);
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
			//if(buttons[i][1].type > 1){
				btn_states.push(btn);
			//}
		    btns_div.appendChild(btn);
		}
	}
	ws_send(JSON.stringify({type:'max_vol'}));
	update_btn_state();
    var ver_div = document.getElementById('ver_div');
    ver_div.innerHTML = '<a style="color:rgba(238, 0, 0, 1);" href="javascript:create_text_window(null,get_ver());">版本号：'+ver+'</a>';
	divs.appendChild(btns_div);
	start_updateinfo();
	ws_send(JSON.stringify({type:'get_eq_config'}));
	if(navigator.userAgent.indexOf('Firefox') > -1){
		insertStyle('input[type=range] {background:rgba(0,160,255,1);vertical-align:middle;height: 12px;}');
	}
	
	if(typeof plus != 'undefined'){
		plus.key.addEventListener("volumeupbutton", function(e){
			if(parseInt(vols.value)+1 > vols.max){
				return;
			}
			var vol = parseInt(vols.value)+1;
			vol_text.innerHTML = '   '+vols.value+'/'+vols.max;
			vols.value = vol;
			ws_send(JSON.stringify({type:'set_vol',vol:vol}));
			ws_send(JSON.stringify({type:'get_info'}));
		});
		plus.key.addEventListener("volumedownbutton", function(e){
			if(parseInt(vols.value)-1<0){
				return;
			}
			var vol = parseInt(vols.value)-1;
			vol_text.innerHTML = '   '+vols.value+'/'+vols.max;
			vols.value = vol;
			ws_send(JSON.stringify({type:'set_vol',vol:vols.value}));
			ws_send(JSON.stringify({type:'get_info'}));
		});
		update_StatusBar();
	}
	
	//ws_send(JSON.stringify({type:'shell',type_id:'get_hostname',shell:'getprop net.hostname && netcfg'}));
	var page = localStorage.getItem(hostname+'_page');
	if(page != '' && page != 'index'){
		page = document.getElementById('btn_page_'+page);
		if(page){
			switch_page(page);
		}
	}
	update_info(info);
	if(web_ver != localStorage.getItem('web_ver1')){
		//setTimeout(function(){
			create_text_window(null,get_ver());
		//},2000);
		localStorage.setItem('web_ver1',web_ver);
	}
	
	if(ver+1 > 1855){
		var sends = [];
		sends.push({type:'send_to_unisound',data:{type:'get_info'}});
		if(is_new_unisound){
			sends.push({type:'send_to_unisound',data:{type:'api',data:{type:'info'}}});
		}
		ws_send(JSON.stringify({type:'sends',list:sends}));
	}else{
		if(is_new_unisound){
			setTimeout(function(){
				ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'api',data:{type:'info'}}}));
			},2000);
		}
		ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'get_info'}}));
	}
}

function update_unisound_info(data){
	if(data.code == 1){
		Unisound_info = data.data;
		if(!is_new_unisound){
			return;
		}
		dormancy_btn.style.display = '';
		data = data.data;
		
		Wakeup_set_btn.style.display = '';

		// && !data.isWakeup
		if(data.isIdle){
			Wakeup_set_btn.Wakeup_set_state = 0;
			Wakeup_set_btn.value = '当前：已禁用麦克风';
			Wakeup_set_btn.style.backgroundColor = 'rgba(238, 0, 0, 1)';
		}else{
			Wakeup_set_btn.Wakeup_set_state = 1;
			Wakeup_set_btn.value = '当前：已启用麦克风';
			Wakeup_set_btn.style.backgroundColor = '';
		}
		
		if(u_ver+1 > 1849){
			if(data.DeviceStatus == 5){
				dormancy_btn.value = '退出休眠';
				dormancy_btn.dormancy_state = 1;
				dormancy_btn.style.backgroundColor = 'rgba(238, 0, 0, 1)';
				Wakeup_set_btn.disabled = true;
				Wakeup_set_btn.style.backgroundColor = '';
			}else{
				dormancy_btn.value = '开始休眠';
				dormancy_btn.dormancy_state = 0;
				dormancy_btn.style.backgroundColor = '';
				Wakeup_set_btn.disabled = false;
			}
		}else{
			if(data.isIdle){
				dormancy_btn.value = '退出休眠';
				dormancy_btn.dormancy_state = 1;
				dormancy_btn.style.backgroundColor = '';
			}else{
				dormancy_btn.value = '开始休眠';
				dormancy_btn.dormancy_state = 0;
				dormancy_btn.style.backgroundColor = '';
			}
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
		
		if(u_ver+1 > 1848){
			var Wakeup_Benchmark = Unisound_info.Wakeup_Benchmark;
			Wakeup_Benchmark.code = 1;
			User_Wakeup_Benchmark_info(Wakeup_Benchmark);
		}else{
			var Main_Wakeup_Benchmark_data = Unisound_info.Main_Wakeup_Benchmark;
			Main_Wakeup_Benchmark_data.code = 1;
			Main_Wakeup_Benchmark_info(Main_Wakeup_Benchmark_data);
		}
		
		var asrMaxDuration = Unisound_info.asrMaxDuration;
		asrMaxDuration.code = 1;
		asrMaxDuration_info(asrMaxDuration);
		
		update_btn_state();
	}
}

function Main_Wakeup_Benchmark_info(data){
	if(data.code == 1 && is_new_unisound && u_ver+1 > 1822){
		Main_Wakeup_Benchmark.disabled = false;
		Main_Wakeup_Benchmark.min = parseFloat(data.Default_Main_WakeupBenchmark)*100;
		Main_Wakeup_Benchmark.max = Main_Wakeup_Benchmark.maxvalue;
		Main_Wakeup_Benchmark.value = parseFloat(data.Main_WakeupBenchmark)*100;
	}
}


function User_Wakeup_Benchmark_info(data){
	if(data.code == 1 && is_new_unisound && u_ver+1 > 1848){
		Main_Wakeup_Benchmark.disabled = false;
		Main_Wakeup_Benchmark.min = 0;
		Main_Wakeup_Benchmark.max = ((Main_Wakeup_Benchmark.maxvalue/100) - data.Default_Main_WakeupBenchmark) * 100;
		Main_Wakeup_Benchmark.value = parseFloat(data.User_WakeupBenchmark) * 100;
	}
}

function asrMaxDuration_info(data){
	if(data.code == 1 && is_new_unisound && u_ver+1 > 1822){
		//if(data.asrMaxDuration < 10000){
		//	ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'asrMaxDuration',Duration:10000}}));
		//}
		//return;
		asrMaxDuration.disabled = false;
		asrMaxDuration.max = parseInt(data.Default_asrMaxDuration)/1000;
		asrMaxDuration.value = parseInt(data.asrMaxDuration)/1000;
		asrMaxDuration_value.innerHTML = parseInt(data.asrMaxDuration)/1000 + "秒";
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
	ws_send(JSON.stringify({type:'input',input:value}));
}

function switch_page(data){
	current_page = data;
	title = data.getAttribute('data');
	if(data.value != title){
		onhide_page('index');
	}else{
		onhide_page(data.id.substr(9));
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

function hide_page(exclude){
	var arr = [];
	if(exclude != 'index'){
		arr.push(['屏幕', 'index', 'index']);
	}
	arr = arr.concat(page_list);
	for(var i=0;i<arr.length;i++){
		var title = arr[i][1];
		window['hide_'+title]();
	}
}

function onhide_page(exclude){
	hide_page(exclude);
	var arr = [];
	if(exclude == 'index'){
		arr.push(['屏幕', 'index', 'index']);
	}
	arr = arr.concat(page_list);
	for(var i=0;i<arr.length;i++){
		var title = arr[i][1];
		if(title == exclude){
			window['onhide_'+title]();
			localStorage.setItem(hostname+'_page',exclude);
		}
	}
}

function onhide_index(){
	document.title = "R1音箱控制页面"+dev_name;
	h3.innerHTML = document.title;
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
	document.title = "R1音箱音乐页面"+dev_name;
	h3.innerHTML = document.title;
	h3.onclick = function(){
		title_display_time = new Date().getTime() + 2000;
		if(music_info.artist){
			var title = music_info.title+'-'+music_info.artist;
		}else{
			var title = music_info.title;
		}
		h3.innerHTML = '正在播放：'+title;
		document.title = dev_name+h3.innerHTML;
	};
	var list_occupancy = document.getElementById('list_occupancy');
	if(list_occupancy){
		list_occupancy.style.height = '15px';
	}
	lists.style.display = 'none';
	document.getElementById('list_ico').innerHTML = '	▲';
	localStorage.setItem(hostname+'_music_list_hide',1);
	musics_div.style.display = "block";
	div_list.style.display = "block";
	musicpic_background();
}

function hide_music(){
	stop_title_scrolling();
	stop_lrc();
	h3.onclick = function(){};
	musics_div.style.display = "none";
	div_list.style.display = "none";
	Restore_background();
}

function start_title_scrolling(){
	stop_title_scrolling();
	setTimeout(function(){
		if(music_info != null){
			var title = get_music_title(music_info);
			h3.innerHTML = '正在播放：'+title;
		}
	},100);
	var title_scrolling = function(){
		if(music_title == ''){
			return;
		}

	music_title = music_title.substring(1) + music_title.substring(0,1);
		document.title = dev_name+'正在播放：' + music_title;
	};
	title_scrolling_timer = setInterval(title_scrolling,500);
}

function stop_title_scrolling(){
	clearInterval(title_scrolling_timer);
}


function start_lrc(){
	title_display_time = new Date().getTime() + 1000;
	stop_lrc();
	setTimeout(function(){
		if(lrc_timer != -1){
			update_lrc(true);
		}
	},1000);
	lrc_timer = setInterval('update_lrc(false)',10);
}

function stop_lrc(){
	clearInterval(lrc_timer);
	lrc_timer = -1;
}

function onhide_screen(){
	document.title = "R1音箱屏幕页面"+dev_name;
	document.getElementById('screen_img').src = '';
	h3.innerHTML = document.title; 
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
	document.title = "R1音箱音效页面"+dev_name;
	h3.innerHTML = document.title; 
	sound_effects_div.style.display = "block";
	start_sound_effects();
}

function hide_sound_effects(){
	sound_effects_div.style.display = "none";
	stop_sound_effects();
}

function start_sound_effects(){
	stop_sound_effects();
	sound_effects_timer = setInterval(function(){ws_send(JSON.stringify({type:'get_eq_config'}));},1000);
}

function stop_sound_effects(){
	clearInterval(sound_effects_timer);
	sound_effects_timer = -1;
}

function start_screen(){
	if(ver+1 > 1855){
		ws_send('{"type":"start_screencap","interval":10}');
	}else{
		ws_send('{"type":"start_screencap","interval":60}');
	}
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
	h3.innerHTML = document.title; 
	device_info.style.display = "block";
	update_device_info();
}

function hide_device_info(){
	clearInterval(update_device_info_timer);
	update_device_info_timer = -1;
	device_info.style.display = "none";
}

function onhide_bluetooth(){
	document.title = "R1音箱蓝牙页面"+dev_name;
	h3.innerHTML = document.title; 
	bluetooth_div.style.display = "block";
	update_bluetooth();
}

function hide_bluetooth(){
	btn_bluetooth_scan.disabled = true;
	btn_bluetooth_scan1.disabled = true;
	btn_bluetooth_enable.disabled = true;
	btn_bluetooth_enable.enable = -1;
	bluetooth_pairing_devices.innerHTML = '';
	bluetooth_scan_devices.innerHTML = '';
	var bluetooth_pairing_title = document.getElementById('bluetooth_pairing_title');
	var bluetooth_scan_title = document.getElementById('bluetooth_scan_title');
	bluetooth_pairing_title.innerHTML = '已配对的设备[0]';
	bluetooth_scan_title.innerHTML = '扫描到的设备[0]';
	clearInterval(update_bluetooth_timer);
	bluetooth_div.style.display = "none";
}

function update_bluetooth(){
	ws_send(JSON.stringify({type:'BT_Device'}));
	update_bluetooth_timer = setInterval(function(){ws_send(JSON.stringify({type:'BT_Device'}));},1000);
}

function update_bluetooth_data(data){
	bluetooth_pairing_devices.innerHTML = '';
	bluetooth_scan_devices.innerHTML = '';
	var bluetooth_pairing_title = document.getElementById('bluetooth_pairing_title');
	var bluetooth_scan_title = document.getElementById('bluetooth_scan_title');
	bluetooth_pairing_title.innerHTML = '已配对的设备[0]';
	bluetooth_scan_title.innerHTML = '扫描到的设备[0]';
	
	
	
	if(data.Scanning == true){
		btn_bluetooth_scan.disabled = true;
		btn_bluetooth_scan.value = '扫描中。。。';
	}else{
		btn_bluetooth_scan.disabled = true;
		if(data.Scanning == false){
			btn_bluetooth_scan.disabled = false;
			btn_bluetooth_scan.value = '扫描蓝牙设备';
		}
	}
	if(!data.Enabled){
		//!btn_bluetooth_enable.value.indexOf('正在打开')
		if(btn_bluetooth_enable.wait == false && btn_bluetooth_enable.enable != 0){
			btn_bluetooth_enable.wait = false;
			btn_bluetooth_enable.enable = 0;
			btn_bluetooth_enable.disabled = false;
			btn_bluetooth_enable.value = '打开蓝牙适配器';
		}
		btn_bluetooth_scan.disabled = true;
		btn_bluetooth_scan1.disabled = true;
		return;
	}
	if(btn_bluetooth_enable.wait == false && btn_bluetooth_enable.enable != 1){
		btn_bluetooth_enable.wait = false;
		btn_bluetooth_enable.enable = 1;
		btn_bluetooth_enable.disabled = false;
		btn_bluetooth_enable.value = '关闭蓝牙适配器';
		if(info.Service_Normally_Open == true){
			ws_send(JSON.stringify({type:'BT_setScanMode',mode:21}));
		}
	}
	
	btn_bluetooth_scan1.disabled = false;
	btn_bluetooth_scan1.ScanMode = data.ScanMode;
	if(data.ScanMode == 23){
		btn_bluetooth_scan1.value = '关闭蓝牙可发现';
	}else{
		btn_bluetooth_scan1.value = '打开蓝牙可发现';
	}
	
	var Bonded_Devices = data.Bonded_Devices;
	var Scan_Devices = data.Scan_Devices;
	var A2dp_ConnectedDevices = data.A2dp_ConnectedDevices;
	var A2dpSink_ConnectedDevices = data.A2dpSink_ConnectedDevices;
	var Bonded = [];
	var ConnectedDevice = '';
	var index = -1;
	var num = 0;
	for(i=0;i<A2dp_ConnectedDevices.length;i++){
		for(ii=0;ii<Bonded_Devices.length;ii++){
			if(Bonded_Devices[ii].Address == A2dp_ConnectedDevices[i]){
				Bonded_Devices[ii].A2dpConnect = true;
			}else{
				Bonded_Devices[ii].A2dpConnect = false;
			}
		}
	}
	for(i=0;i<A2dpSink_ConnectedDevices.length;i++){
		for(ii=0;ii<Bonded_Devices.length;ii++){
			if(Bonded_Devices[ii].Address == A2dpSink_ConnectedDevices[i]){
				Bonded_Devices[ii].A2dpSinkConnect = true;
			}else{
				Bonded_Devices[ii].A2dpSinkConnect = false;
			}
		}
	}
	
	for(i=0;i<Bonded_Devices.length;i++){
		var BluetoothClass = Bonded_Devices[i].BluetoothClass;
		var DeviceClass = BluetoothClass & 8188;
		var MajorDeviceClass = BluetoothClass & 7936;
		var IsService = BluetoothClass & 16769024;
		var DeviceType = '';
		if(MajorDeviceClass == 256){
			DeviceType = 'COMPUTER';
		}else if(MajorDeviceClass == 512){
			DeviceType = 'PHONE';
		}else if(MajorDeviceClass == 768){
			DeviceType = 'NETWORKING';
		}else if(MajorDeviceClass == 1024){
			DeviceType = 'AUDIO_VIDEO';
		}else if(MajorDeviceClass == 1280){
			DeviceType = 'PERIPHERAL';
		}else if(MajorDeviceClass == 1536){
			DeviceType = 'IMAGING';
		}else if(MajorDeviceClass == 1792){
			DeviceType = 'WEARABLE';
		}else if(MajorDeviceClass == 2048){
			DeviceType = 'TOY';
		}else if(MajorDeviceClass == 7936){
			DeviceType = 'UNCATEGORIZED';
		}
		Bonded_Devices[i].Service = IsService;
		Bonded_Devices[i].DeviceType = DeviceType;
		
		if(IsService & 262144 || IsService){
			Bonded_Devices[i].A2dpSink = true;
		}else{
			Bonded_Devices[i].A2dpSink = false;
		}
		
		if(IsService & 524288){
			Bonded_Devices[i].A2dp = true;
		}else{
			Bonded_Devices[i].A2dp = false;
		}
		
	}
	
	for(i=0;i<Scan_Devices.length;i++){
		var BluetoothClass = Scan_Devices[i].BluetoothClass;
		var DeviceClass = BluetoothClass & 8188;
		var MajorDeviceClass = BluetoothClass & 7936;
		var IsService = BluetoothClass & 16769024;
		var DeviceType = '';
		if(MajorDeviceClass == 256){
			DeviceType = 'COMPUTER';
		}else if(MajorDeviceClass == 512){
			DeviceType = 'PHONE';
		}else if(MajorDeviceClass == 768){
			DeviceType = 'NETWORKING';
		}else if(MajorDeviceClass == 1024){
			DeviceType = 'AUDIO_VIDEO';
		}else if(MajorDeviceClass == 1280){
			DeviceType = 'PERIPHERAL';
		}else if(MajorDeviceClass == 1536){
			DeviceType = 'IMAGING';
		}else if(MajorDeviceClass == 1792){
			DeviceType = 'WEARABLE';
		}else if(MajorDeviceClass == 2048){
			DeviceType = 'TOY';
		}else if(MajorDeviceClass == 7936){
			DeviceType = 'UNCATEGORIZED';
		}
		Scan_Devices[i].Service = IsService;
		Scan_Devices[i].DeviceType = DeviceType;
		
		if(IsService & 262144 || IsService){
			Scan_Devices[i].A2dpSink = true;
		}else{
			Scan_Devices[i].A2dpSink = false;
		}
		
		if(IsService & 524288){
			Scan_Devices[i].A2dp = true;
		}else{
			Scan_Devices[i].A2dp = false;
		}
	}
	
	for(i=0;i<Scan_Devices.length;i++){
		var name = Scan_Devices[i].Name;
		if(name){
			for(index in Scan_Devices){
				if(Scan_Devices[index].Name == name && Scan_Devices[index].Address != Scan_Devices[i].Address && !Scan_Devices[index].name){
					var Address = Scan_Devices[index].Address;
					Scan_Devices[index].name = Scan_Devices[index].Name + '['+Address.substr(Address.length-5,5).replace(':','')+']';
				}
			}
			
			for(index in Bonded_Devices){
				if(Bonded_Devices[index].Name == name && Bonded_Devices[index].Address != Scan_Devices[i].Address && !Bonded_Devices[index].name){
					var Address = Bonded_Devices[index].Address;
					Bonded_Devices[index].name = Bonded_Devices[index].Name + '['+Address.substr(Address.length-5,5).replace(':','')+']';
				}
			}
		}
	}
	
	for(i=0;i<Bonded_Devices.length;i++){
		var name = Bonded_Devices[i].Name;
		if(name){
			for(index in Bonded_Devices){
				if(Bonded_Devices[index].Name == name && Bonded_Devices[index].Address != Bonded_Devices[i].Address && !Bonded_Devices[index].name){
					var Address = Bonded_Devices[index].Address;
					Bonded_Devices[index].name = Bonded_Devices[index].Name + '['+Address.substr(Address.length-5,5).replace(':','')+']';
				}
			}
			
			for(index in Scan_Devices){
				if(Scan_Devices[index].Name == name && Scan_Devices[index].Address != Bonded_Devices[i].Address && !Scan_Devices[index].name){
					var Address = Scan_Devices[index].Address;
					Scan_Devices[index].name = Scan_Devices[index].Name + '['+Address.substr(Address.length-5,5).replace(':','')+']';
				}
			}
		}
	}
	
	if(data.ConnectedDevice){
		ConnectedDevice = data.ConnectedDevice;
	}
	for(i=0;i<Bonded_Devices.length;i++){
		var tr = document.createElement('tr');
		tr.className = 'span';
		if((Bonded_Devices[i].Address == ConnectedDevice && (Bonded_Devices[i].A2dpConnect || Bonded_Devices[i].A2dpSinkConnect)) || Bonded_Devices[i].A2dpConnect || Bonded_Devices[i].A2dpSinkConnect){
			var span = document.createElement('span');
			span.innerHTML = '[已连接]';
			tr.setAttribute('Connected',true);
			tr.appendChild(span);
			index = i;
		}else{
			tr.setAttribute('Connected',false);
		}
		tr.onclick  = function(){
			create_bluetooth_device_config(this);
		};
		var span = document.createElement('span');
		span.innerHTML = get_bluetooth_title(Bonded_Devices[i]);
		tr.setAttribute('data',JSON.stringify(Bonded_Devices[i]));
		Bonded[Bonded_Devices[i].Address] = Bonded_Devices[i].Name;
		tr.appendChild(span);
		bluetooth_pairing_devices.appendChild(tr);
		num++;
		if(Bonded_Devices.length-1 != i){
			var hr = document.createElement('hr');
			hr.className = 'hr';
			hr.style.width = '80%';
			hr.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
			bluetooth_pairing_devices.appendChild(hr);
		}
	}
	
	bluetooth_pairing_title.innerHTML = '已配对的设备['+num+']';
	if(num > 0){
		var occupancy = document.createElement('div');//占位
		occupancy.style.height = '5px';
		bluetooth_pairing_title.appendChild(occupancy);
	}
	
	index = -1;
	num = 0;
	var Scan = [];
	var names = [];
	
	for(i=0;i<Scan_Devices.length;i++){
		if(Bonded[Scan_Devices[i].Address]){
			continue;
		}
		if(Scan[Scan_Devices[i].Address]){
			continue;
		}
		Scan[Scan_Devices[i].Address] = true;
		var tr = document.createElement('tr');
		tr.className = 'span';
		if(Scan_Devices[i].Address == ConnectedDevice){
			var span = document.createElement('span');
			span.innerHTML = '[已连接]';
			tr.setAttribute('Connected',true);
			tr.appendChild(span);
			index = i;
		}else{
			tr.setAttribute('Connected',false);
		}
		tr.onclick  = function(){
			create_bluetooth_device_config(this);
		};
		var span = document.createElement('span');
		span.innerHTML = get_bluetooth_title(Scan_Devices[i]);
		tr.setAttribute('data',JSON.stringify(Scan_Devices[i]));
		tr.appendChild(span);
		bluetooth_scan_devices.appendChild(tr);
		num++;
		if(Scan_Devices.length-1 != i){
			var hr = document.createElement('hr');
			hr.className = 'hr';
			hr.style.width = '80%';
			hr.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
			bluetooth_scan_devices.appendChild(hr);
		}
	}
	if(index>-1){
		//bluetooth_scan_devices.scrollTop = bluetooth_scan_devices.getElementsByTagName('tr')[index].offsetTop;
	}
	bluetooth_scan_title.innerHTML = '扫描到的设备['+num+']';
	if(num > 0){
		var occupancy = document.createElement('div');//占位
		occupancy.style.height = '5px';
		bluetooth_scan_title.appendChild(occupancy);
	}
	
}

function create_bluetooth_device_config(tr){
	var data = tr.getAttribute('data');
	console.log(data);
	if(data != ''){
		data = JSON.parse(data);
	}
	if(!data){
		return;
	}
	var Connected = tr.getAttribute('Connected');
	popup.innerHTML = '';
	var bluetooth_device_config_div = document.createElement('div');
	bluetooth_device_config_div.id = 'bluetooth_device_config_div';
	//text-indent:10px;text-align:left;
	bluetooth_device_config_div.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:350px;';
	popup.appendChild(bluetooth_device_config_div);
	
	
	var title_div = document.createElement('div');
	title_div.style = 'background-color: rgba(0,160,255,1);border-radius:15px;';
	bluetooth_device_config_div.appendChild(title_div);
	
	var div1 = document.createElement('div');//占位
	div1.style.height = '1px';
	var div = document.createElement('div');
	div.style = 'border-radius:15px;';
	div.appendChild(div1);
	var title = document.createElement('h3');
	title.id = 'bluetooth_device_config_title';
	title.style = 'font-size: 16px;color:#ffffff';
	title.innerHTML = get_bluetooth_title(data)+'<br><text style="font-size: 12px;color:#ffffff;">MAC：'+data.Address+'<text>';
	
	div.appendChild(title);
	
	title_div.appendChild(div);

	
	var option_div = document.createElement('div');
	option_div.style = 'background-color: #ffffff;border-radius:0 0 15px 15px; margin: 15px auto;max-height:500px;overflow-x:hidden;overflow-y:auto;';
	title_div.appendChild(option_div);
	
	
	if(Connected == 'true'){
		var tr = document.createElement('tr');
		tr.className = 'span1';
		tr.onclick  = function(){
			if(data.A2dpConnect){
				ws_send(JSON.stringify({type:'BT_Disconnect_A2dp_Device',mac:data.Address}));
				ws_send(JSON.stringify({type:'BT_Device'}));
			}else if(data.A2dpSinkConnect){
				ws_send(JSON.stringify({type:'BT_Disconnect_A2dpSink_Device',mac:data.Address}));
				ws_send(JSON.stringify({type:'BT_Device'}));
			}
			//popup.onclose();
		};
		var span = document.createElement('span');
		span.innerHTML = '断开设备';
		//+(data.A2dp ? 'A2dp' : (data.A2dpSink ? 'A2dpSink' : ''));
		tr.appendChild(span);
		option_div.appendChild(tr);
	}else if(data.BondState == 12){
		//"110a": "Audio Source","110b": "Audio Sink"
		var Audio_Source = false;
		var Audio_Sink = false;
		if(data.Uuids){
			for(index in data.Uuids){
				var uuid = data.Uuids[index].mUuid;
				if(uuid.indexOf('110a-') > -1){
					Audio_Source = true;
				}else if(uuid.indexOf('110b-') > -1){
					Audio_Sink = true;
				}
			}
		}
		
		var none = true;
		//data.Type != 2
		if(data.A2dpSink ||  (data.BluetoothClass == 7936 && Audio_Sink)){
			var tr = document.createElement('tr');
			tr.className = 'span1';
			tr.onclick  = function(){
				ws_send(JSON.stringify({type:'BT_Connect_A2dp_Device',mac:data.Address}));
				ws_send(JSON.stringify({type:'BT_Device'}));
				//popup.onclose();
			};
			var span = document.createElement('span');
			span.innerHTML = '连接';
			tr.appendChild(span);
			//option_div.appendChild(tr);
			//none = false;
		}
		//data.Type != 2
		if(data.A2dp || (data.BluetoothClass == 7936 && Audio_Source)){
			var tr = document.createElement('tr');
			tr.className = 'span1';
			tr.onclick  = function(){
				ws_send(JSON.stringify({type:'BT_Connect_A2dpSink_Device',mac:data.Address}));
				ws_send(JSON.stringify({type:'BT_Device'}));
				//popup.onclose();
			};
			var span = document.createElement('span');
			span.innerHTML = '连接设备';
			tr.appendChild(span);
			option_div.appendChild(tr);
			none = false;
			
			var hr = document.createElement('hr');
			hr.className = 'hr';
			option_div.appendChild(hr);
			
		}
		
		if(none){
			var tr = document.createElement('tr');
			tr.className = 'span1';
			tr.onclick  = function(){
			};
			tr.setAttribute('none',none);
			var span = document.createElement('span');
			span.innerHTML = '不支持连接此设备！';
			tr.appendChild(span);
			option_div.appendChild(tr);
			
			var hr = document.createElement('hr');
			hr.className = 'hr';
			option_div.appendChild(hr);
		}
		
	}else{
		var none = true;
		if(data.A2dp ||  (data.BluetoothClass == 7936 && data.Type != 2)){
			//none = false;
		}
		
		if(data.A2dpSink || (data.BluetoothClass == 7936 && data.Type != 2)){
			none = false;
		}
		
		if(none){
			var tr = document.createElement('tr');
			tr.className = 'span1';
			tr.onclick  = function(){
			};
			tr.setAttribute('none',none);
			var span = document.createElement('span');
			//span.innerHTML = '连接A2dpSink';
			span.innerHTML = '不支持连接此设备！';
			tr.appendChild(span);
			option_div.appendChild(tr);
		}else{
			var tr = document.createElement('tr');
			tr.className = 'span1';
			tr.onclick  = function(){
				ws_send(JSON.stringify({type:'BT_createBond',mac:data.Address}));
				ws_send(JSON.stringify({type:'BT_Device'}));
				//popup.onclose();
			};
			var span = document.createElement('span');
			span.innerHTML = '配对';
			tr.appendChild(span);
			option_div.appendChild(tr);
		}
		
	}
	
	if(data.BondState == 12){
		var tr = document.createElement('tr');
		tr.className = 'span1';
		tr.onclick  = function(){
			ws_send(JSON.stringify({type:'BT_removeBond',mac:data.Address}));
			ws_send(JSON.stringify({type:'BT_Device'}));
			popup.onclose();
		};
		var span = document.createElement('span');
		span.innerHTML = '取消配对';
		tr.appendChild(span);
		option_div.appendChild(tr);
	}
	
	popup.style.display = 'block';
	
}

function get_bluetooth_title(data){
	var names = {'COMPUTER':'💻',
	'PHONE':'📱',
	'AUDIO_VIDEO':'🎧',
	'PERIPHERAL':'[外围设备]'};

	var title = '';
	if(data.BondState == 11){
		title += '[配对中]';
	}
	
	if(data.DeviceType != 'UNCATEGORIZED'){
		title += (names[data.DeviceType] ? names[data.DeviceType] : data.DeviceType);
	}
	title += data.name ? data.name : (data.Name ? data.Name : data.Address);
	return title;
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
		
		if(u_ver +1 > 1844){
			if(user_info.kuwo_uid != null){
				var kuwo_uid = user_info.kuwo_uid;
			}else{
				var kuwo_uid = '';
			}
			if(user_info.kuwo_login_state == 1 && kuwo_uid != ''){
				var kuwo_login_state = '已登录('+kuwo_uid+')';
			}else{
				var kuwo_login_state = '未登录';
			}
			user_info_text.innerHTML += '<br>酷我音乐：'+kuwo_login_state;
		}

		user_info_text.innerHTML += '<br>网易云音乐：'+netease_login_state;
		user_info_text.innerHTML += '<br>最后登录时间：'+login_time;
		sq_info_text.innerHTML = '公网IP：'+device_info.ip;
		sq_info_text.innerHTML += '<br>设备SN：'+device_info.sn;
		sq_info_text.innerHTML += '<br>设备MAC：'+device_info.mac;
		var sq_state = '未授权';
		var time = parseInt(new Date().getTime()/1000);
		if(device_info.sq_type == 1 || device_info.sq_type == 2 || device_info.sq_type == 3){
			if(time > device_info.sq_expire_time && device_info.sq_type != 3){
				if(device_info.sq_type == 2){
					sq_state = '试用已过期<br>过期时间：'+set_time(device_info.sq_expire_time);
				}else{
					sq_state = '已过期<br>过期时间：'+set_time(device_info.sq_expire_time);
				}
			}else{
				if(device_info.sq_type == 2){
					sq_state = '试用授权<br>到期时间：'+set_time(device_info.sq_expire_time);
				}else{
					sq_state = '已授权<br>到期时间：';
					if(device_info.sq_type == 3){
						if(!device_info.sq_expire_time_text){
							sq_state += '永久';
						}else{
							sq_state += device_info.sq_expire_time_text;
						}
					}else{
						sq_state += set_time(device_info.sq_expire_time);
					}
				}
			}
		}
		sq_info_text.innerHTML += '<br>授权状态：'+sq_state;
		delparam(['connect_id','connect_ip']);
		if(location.host.indexOf(control_host) != -1){
			putparam({connect_id:device_info.device_msid,connect_ip:ip});
		}
		var data = {hostname:hostname,
		ip:ip.substring(0,ip.indexOf(':')),
		dev_name:info.device_name,
		url:location.href.indexOf('?') > -1 ? location.href.split('?')[0] : location.href.split('#')[0],
		device_sid:device_info.device_sid,
		device_msid:device_info.device_msid
		};
		update_device_list(data);
	}else{
		user_info_text.innerHTML = api_info.msg+'('+api_info.code+')';
	}
}

function update_systeminfo(){
	if(ver+1 > 1853){
		ws_send(JSON.stringify({type:'get_device_info',type_id:'get_device_info'}));
	}else{
		ws_send(JSON.stringify({type:'shell',type_id:'query',shell:'cat /proc/meminfo&&cat /proc/stat&&echo incremental:$(getprop ro.build.version.incremental)'}));
	}
}

function set_systeminfo1(data){
	console.log(data);
	setTimeout(function(){
		if(update_device_info_timer == -1){
			return;
		}
		update_systeminfo();
	},1000);
	update_device_info1();
	var state_info_text = document.getElementById('state_info_text');
	var arr = data.meminfo.split("\r\n");
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
	var online = '0-0';
	var online_cpu = 0;
	var arr = data.cpu.split("\r\n");
	for(var i=0;i<arr.length;i++){
		var arr1 = arr[i].split(':');
		if(arr1[0] == 'online'){
			online = arr1[1];
		}
	}
	
	
	
	var freq = 0;
	for(var i=0;i<data.availableProcessors;i++){
		var arr = data['cpu'+i].split("\r\n");
		for(var ii=0;ii<arr.length;ii++){
			var arr1 = arr[ii].split(':');
			if(arr1[0] == 'scaling_cur_freq'){
				if(parseInt(arr1[1]) > freq){
					freq = parseInt(arr1[1]);
				}
			}
		}
	}
	
	var Current_Player = 'MediaPlayer';
	if(info.Current_PlayerType == 1){
		Current_Player = 'MediaPlayer';
	}else if(info.Current_PlayerType == 2){
		Current_Player = 'ExoPlayer';
		if(info.Support_Flac == true){
			if(ver+1 > 1864){
				Current_Player += '[FLAC]';
			}else if(ver+1 > 1863){
				Current_Player += '[FFmpeg]';
			}else if(ver+1 > 1856){
				Current_Player += '[FLAC]';
			}
		}
	}
	
	state_info_text.innerHTML = '设备名称：'+(info.device_name ? info.device_name + '(' + hostname + ')' : hostname);
	state_info_text.innerHTML += '<br>固件版本：'+data.incremental;
	state_info_text.innerHTML += '<br>设备IP：'+local_ip;
	if(ver+1 > 1856){
		state_info_text.innerHTML += '<br>当前播放器：'+Current_Player;
		if(info.Current_PlayerType == 2 && typeof(info.ExoPlayer_Version) == 'string'){
			state_info_text.innerHTML += '<br>ExoPlayer版本：'+info.ExoPlayer_Version;
		}
	}
	state_info_text.innerHTML += '<br>CPU使用率['+online+']：('+(freq/1000000).toFixed(2)+'Ghz)'+parseInt(data.cpuinfo[3])+"%";
	state_info_text.innerHTML += '<br>可用/全部：'+parseInt((MemFree+Cached)/1024)+"MB/"+parseInt(MemTotal/1024)+"MB";
	state_info_text.innerHTML += '<br>系统已运行：'+formatTimestamp(data.elapsedRealtime);
	state_info_text.innerHTML += '<br>信息更新时间：'+set_time(parseInt(new Date().getTime()/1000));
}

function set_systeminfo(data){
	setTimeout(function(){
		if(update_device_info_timer == -1){
			return;
		}
		update_systeminfo();
	},1000);
	update_device_info1();
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
	state_info_text.innerHTML += '<br>设备IP：'+local_ip;
	state_info_text.innerHTML += '<br>可用/全部：'+parseInt((MemFree+Cached)/1024)+"MB/"+parseInt(MemTotal/1024)+"MB";
	state_info_text.innerHTML += '<br>系统已运行：'+formatTimestamp(new Date().getTime() - (btime*1000));
	state_info_text.innerHTML += '<br>信息更新时间：'+set_time(parseInt(new Date().getTime()/1000));
	
}

function update_device_info(){
	setTimeout(function(){
		if(ver+1 > 1855){
			var sends = [];
			//sends.push({type:'send_to_unisound',data:{type:u_ver+1 > 1848 ? 'User_Wakeup_Benchmark' : 'Main_Wakeup_Benchmark'}});
			//sends.push({type:'send_to_unisound',data:{type:'asrMaxDuration'}});
			//ws_send(JSON.stringify({type:'sends',list:sends}));
		}else{
			//ws_send(JSON.stringify({type:'send_to_unisound',data:{type:u_ver+1 > 1848 ? 'User_Wakeup_Benchmark' : 'Main_Wakeup_Benchmark'}}));
			//ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'asrMaxDuration'}}));
		}
	},100);
	
	var time = new Date().getTime();
	if(time > update_device_info_time && is_new_unisound){
		update_device_info_time = time + (5*1000);
		ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'api',data:{type:'info'}}}));
	}else{
		//console.log('再等'+(update_device_info_time - time)/1000+'秒可刷新！');
	}
	
	if(update_device_info_timer == -1){
		update_device_info_timer = 1;
		update_device_info1();
		update_systeminfo();
	}
	
	//clearInterval(update_device_info_timer);
	//update_device_info_timer = setInterval(update_device_info1,3000);
	
}

function update_device_info1(){
	if(update_device_info_timer == -1){
		return;
	}
	
	if(ver+1 > 1855){
		var sends = [];
		//sends.push({type:'get_device_info',type_id:'get_device_info'});
		sends.push({type:'shell',type_id:'useless_services_detection',shell:'/system/bin/pm list packages'});
		if(is_new_unisound && u_ver+1 > 1820){
			sends.push({type:'send_to_unisound',data:{type:'get_memo'}});
			sends.push({type:'send_to_unisound',data:{type:'get_info'}});
		}
		ws_send(JSON.stringify({type:'sends',list:sends}));
	}else{
		
		ws_send(JSON.stringify({type:'shell',type_id:'useless_services_detection',shell:'/system/bin/pm list packages'}));
		if(is_new_unisound && u_ver+1 > 1820){
			ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'get_memo'}}));
			setTimeout(function(){
				ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'get_info'}}));
			},200);
		}
	}
}

function useless_services_detection(data){
	useless_services_list = [];
	var list_text = 'com.phicomm.speaker.airskill,com.android.providers.telephony,com.phicomm.speaker.productiontest,com.android.externalstorage,com.android.providers.downloads,com.android.certinstaller,com.phicomm.speaker.bugreport,com.android.inputdevices,com.android.server.telecom,com.android.keychain,com.phicomm.speaker.otaservice,com.android.proxyhandler,com.phicomm.speaker.ijetty,com.android.vpndialogs,com.android.location.fused,com.phicomm.speaker.exceptionreporter';
	if(u_ver+1 > 1845){
		list_text += ',com.phicomm.speaker.systemtool';
	}
	//var list = ['com.phicomm.speaker.exceptionreporter','com.phicomm.speaker.ijetty','com.phicomm.speaker.airskill','com.phicomm.speaker.bugreport','com.phicomm.speaker.otaservice','com.phicomm.speaker.productiontest'];
	var list = list_text.split(',');
	for(var i=0;i<list.length;i++){
		if(data.indexOf(list[i]) > -1){
			useless_services_list.push(list[i]);
		}
	}
	
	if(useless_services_list.length > 0){
		var btn = document.getElementById('hide_useless_services');
		if(new Date().getTime() > parseInt(btn.getAttribute('wait'))){
			btn.value = '禁用['+useless_services_list.length+']个无用的服务';
			btn.style.display = '';
			btn.disabled = false;
		}
	}else{
		var btn = document.getElementById('hide_useless_services');
		btn.value = '无可禁用的无用服务';
		btn.style.display = '';
		btn.disabled = true;
	}
}

function memo_info(data){
	if(data.data != null){
		var btn = document.getElementById('clear_memo');
		if(data.type == 'del_memo' || data.type == 'delall_memo'){
			var num = memo_list.length - data.data.length;
			btn.value = '已清除'+(num < 1 ? '' : num + '个闹铃/提醒')+'！';
		}
		if(data.data.length > 0){
			if(new Date().getTime() > parseInt(btn.getAttribute('wait'))){
				btn.style.display = '';
				btn.disabled = false;
				btn.value = '清除'+data.data.length+'个闹铃/提醒';
			}
		}else{
			setTimeout(function(){
				var btn = document.getElementById('clear_memo');
				//btn.style.display = 'none';
				btn.value = '无可清除的闹铃/提醒';
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
			}else if(data1.type == 'get_xiaoai_id'){
				var btn = document.getElementById('activation_xiaoai');
				btn.value = '已发送激活指令，稍后请自行查看是否可用！';
				btn.disabled = true;
				ws_send(JSON.stringify({type:'shell',type_id:'activation_xiaoai',shell:'am force-stop com.xiaomi.xiaoailite&settings put secure android_id '+data1.data.xiaoai_id}));
				setTimeout(function(){
					var btn = document.getElementById('activation_xiaoai');
					btn.value = '一键激活小爱';
					btn.disabled = false;
				},3000);
			}else if(data1.type == 'login_netease_music'){
				login_netease_music(data1,1);
			}else if(data1.type == 'collect' || data1.type == 'cancel_collect'){
				alert(data1.msg);
			}else if(data1.type == 'get_song_list'){
				get_song_list(data1);
			}else if(data1.type == 'login_kuwo_music'){
				login_kuwo_music(data1,1);
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
		'com.waxrain.airplaydmr',
		'com.xiaomi.xiaoailite',
		'james.dsp'
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
					kill_list.push('am force-stop '+package);
					if(ver < 1855){
						ws_send(JSON.stringify({type:ver+1 > 1825 ? 'shell1' : 'shell',shell:'am force-stop '+package}));
					}
				}
			}
		}
		if(kill_list.length > 0){
			if(ver+1 > 1855){
				ws_send(JSON.stringify({type:'shell1',shells:kill_list}));
			}else{
				ws_send(JSON.stringify({type:ver+1 > 1825 ? 'shell1' : 'shell',shell:kill_list.join(" & ")}));
			}
		}
		var btn = document.getElementById('Cleanup_process');
		btn.value = kill_list.length > 0 ? '已清理['+kill_list.length+']个进程！' : '已清理！';
		setTimeout(function(){
			var btn = document.getElementById('Cleanup_process');
			btn.disabled = false;
			btn.value = '清理进程';
		},1000);
		console.log(kill_list.join("\r\n"));
		
	}else{
		var btn = document.getElementById('Cleanup_process');
		btn.value = '已清理！';
		setTimeout(function(){
			var btn = document.getElementById('Cleanup_process');
			btn.disabled = false;
			btn.value = '清理进程';
		},1000);
	}
	
	
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
	ws_send('{"type":"stop_screencap"}');
	document.onkeyup = function(){};
	//clearInterval(screen_timer);
	//screen_timer = -1;
}

function update_screencap(){
	document.getElementById('screen_img').src = ip+'/screencap?t='+new Date().getTime();
}

function get_ver(){
	
	if(typeof(Unisound_info.xiaoai_vercode) == 'number' && Unisound_info.xiaoai_vercode > 0){
		var xiaoai_ver = (Unisound_info.xiaoai_vercode).toString().split('');
		xiaoai_ver.shift();
		
		var vers = [];
		var num = xiaoai_ver.length;
		for(var i=(num/3);i>0;i--){
			var arr = []
			for(var i1=3;i1>0 && num > -1;i1--){
				arr.push(xiaoai_ver[num-i1]);
			}
			vers[parseInt(i)] = parseInt(arr.join(''));
			num -= 3;
		}
		
		var xiaoai_ver = vers.join('.');
	}
	
	var uver = u_ver.toString().split("").join('.');
	if(!is_new_unisound || u_ver < 1001){
		uver = '未知';
	}
	var arr = update_log;
	var log = '';
	if(update_log.length > 10 && 1 == 2){
		var arr = ['...'];
		for(var i=0;i<10;i++){
			arr.push(update_log[(update_log.length-10)+i]);
		}
	}
	var arr1 = [];
	for(i in arr){
		arr1[arr1.length] = arr[(arr.length-i)-1];
	}
	log = arr1.join("\r\n");
	
	var results = [];
	
	results.push("new_EchoService版本："+ver.toString().split("").join('.'));
	results.push("new_Unisound版本："+uver);
	results.push("WEB页面版本："+web_ver.toString().split("").join('.'));
	if(typeof(xiaoai_ver) == 'string'){
		results.push("小爱Lite版本："+xiaoai_ver);
	}
	results.push("--------------------");
	results.push("提示：双击音量条或点击音量标题可解锁音量调节！");
	results.push('提示：可在上传文件页面（点击"上传软件更新"按钮进入）直接上传软件更新！');
	results.push('提示：双击封面可切换多行滚动歌词！');
	results.push('提示：禁用无用的服务可降低资源占用！');
	results.push('提示：唤醒识别精度越低越容易被唤醒！');
	results.push("--------------------");
	results.push("---WEB更新日志---\r\n"+log);
	
    return results.join("\r\n");
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
			//hz.innerHTML = hz_names[Bands.list[i].Frequency]+'('+(Bands.list[i].Frequency/1000)+'Hz)'+'：';
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
				ws_send(JSON.stringify({type:'set_eq_bandlevel',band:Band,level:(this.value*100)}));
				ws_send(JSON.stringify({type:'get_sq_config'}));
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
			ws_send(JSON.stringify({type:'set_bass_strength',strength:this.value}));
			ws_send(JSON.stringify({type:'get_sq_config'}));
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
			ws_send(JSON.stringify({type:'set_loudness_gain',gain:this.value}));
			ws_send(JSON.stringify({type:'get_sq_config'}));
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
			ws_send(JSON.stringify({type:'set_eq_preset',preset:this.value}));
			ws_send(JSON.stringify({type:'get_sq_config'}));
	    };
		var Preset_names = {'Custom':'自定义',
		'Normal':'标准',
		'Classical':'古典',
		'Dance':'舞曲',
		'Flat':'平直',
		'Folk':'民俗',
		'Heavy Metal':'重金属',
		'Hip Hop':'嘻哈',
		'Jazz':'爵士',
		'Pop':'流行',
		'Rock':'摇滚'
		};
		
		var option = document.createElement('option');
		var name = Preset_names['Custom'];
	    option.innerHTML = name;
		option.style = 'display: none';
	    option.value = -1;
	    if(option.value == Current_Preset){
		   	option.selected = 'selected';
	    }
		preset.appendChild(option);

	    for(var i=0;i<Preset_list.length;i++){
			
			if(Preset_list[i].Preset == -1){
				continue;
			}
			
	    	var option = document.createElement('option');
			var name = Preset_names[Preset_list[i].Name];
			name = name ? name : Preset_list[i].Name;
	    	option.innerHTML = name;
	    	option.value = Preset_list[i].Preset;
	    	if(option.value == Current_Preset){
		    	option.selected = 'selected';
	    	}
	    	preset.appendChild(option);
	    }
	    div.appendChild(preset);
		preset_div.appendChild(div);
	}else{
		var preset = document.getElementById('preset_list');
		var selected = false;
		for(var i=0;i<preset.length;i++){
			if(preset[i].value == Current_Preset){
				selected = true;
				preset[i].selected = 'selected';
			}
		}
		if(!selected){
			preset.value = '';
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
	//list.innerHTML = '';
	list_title.innerHTML = '播放列表['+(data.playIndex+1)+'/'+data.playList.length+']';
	setTimeout(function(){
		update_list1(data);
	},10);
}

function update_list1(data){
		var play_index = data.playIndex;
		if(list.getElementsByTagName('tr').length > data.playList.length){
			list.innerHTML = '';
		}
		for(i=0;i<data.playList.length;i++){
			var tr = list.getElementsByTagName('tr')[i];
			if(tr == null){
				var tr = document.createElement('tr');
				tr.className = 'span';
				list.appendChild(tr);
				var hr = document.createElement('hr');
				hr.className = 'hr';
				hr.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
				list.appendChild(hr);
			}else{
				if(tr.getAttribute('playing') != 'true' && tr.getAttribute('itemId') == data.playList[i].itemId){
					continue;
				}
				tr.innerHTML = '';
				tr.setAttribute('playing',false);
			}
			var span = document.createElement('span');
			span.innerHTML = (i+1)+'.'+get_music_title(data.playList[i]);
			tr.setAttribute('index',i);
			tr.setAttribute('itemId',data.playList[i].itemId);
			tr.appendChild(span);
		}
		
		if(play_index > -1){
			var tr = list.getElementsByTagName('tr')[play_index];
			var span = document.createElement('span');
			span.innerHTML = '[正在播放]';
			//span.style.color = 'rgba(238, 0, 0, 1)';
			tr.setAttribute('playing',true);
			tr.prepend(span);
		}
		
		list.onclick = function(data){
			clearTimeout(listonclick_timer);
			
			var tr = null;
			for(var i in data.path){
				if(data.path[i].localName == 'tr'){
					var tr = data.path[i];
					break;
				}
			}
			
			if(tr == null){
				tr = data.target;
				if(tr != null && tr.localName != 'tr'){
					tr = tr.parentElement;
				}
				
				if(tr != null && tr.localName != 'tr'){
					tr = null;
				}
			}
			
			list.old_click_tr = list.click_tr;
			list.click_tr = tr;
			
			listonclick_timer = setTimeout(function(){
				if(tr != null){
					var index = parseInt(tr.getAttribute('index'));
					var Data = {index:index,music_info:List.playList[index]};
					create_music_info_window(Data);
				}
			},200);
		};
		
		
		list.ondblclick = function(data){
			clearTimeout(listonclick_timer);
			
			var tr = null;
			for(var i in data.path){
				if(data.path[i].localName == 'tr'){
					var tr = data.path[i];
					break;
				}
			}
			
			if(tr == null){
				tr = data.target;
				if(tr != null && tr.localName != 'tr'){
					tr = tr.parentElement;
				}
				
				if(tr != null && tr.localName != 'tr'){
					tr = null;
				}
			}
				
			if(tr != null){
				
				if(list.old_click_tr != null){
					if(list.old_click_tr.getAttribute('index') != tr.getAttribute('index')){
						return;
					}
				}
				
				if(tr.getAttribute('playing') == 'true'){
					return;
				}
				send(null,null,'play',{index:tr.getAttribute('index')});
			}
		}
		
		
        if(data.playIndex>-1 && lists.style.display != 'none'){
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
		if(info.play_type == 0 && List.length < 1 && !info.play_state && info.Recoverable_music){
			send(null,null,'send_message',{what:4,arg1:24,arg2:1,obj:true});
		}else{
			send(null,null,'send_message',{what:4,arg1:3,arg2:-1,obj:true});
		}
	}else if(type == 'collect'){
		if(!confirm("确定要收藏["+get_music_title(music_info)+"]吗？")){
			return;
		}
		ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'api',data:{type:'collect',music_info:music_info}}}));
		//send(null,null,'send_message',{what:65536,arg1:0,arg2:6});
	}else if(type == 'cancel_collect'){
		if(!confirm("确定要取消收藏["+get_music_title(music_info)+"]吗？")){
			return;
		}
		ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'api',data:{type:'cancel_collect',music_info:music_info}}}));
		//send(null,null,'send_message',{what:65536,arg1:0,arg2:7});
	}
	ws_send('{"type":"get_info"}');
}


function get_window_param(param){
	var param_arr = param.split('.');
	var param_temp = null;
	for(var index in param_arr){
		if(index == 0){
			param_temp = window[param_arr[index]];
		}else{
			if(typeof(param_temp) != 'undefined' && param_temp != null){
				param_temp = param_temp[param_arr[index]];
			}
		}
	}
	return param_temp;
}

function update_btn_state(){
	if(btn_states.length > 0){
		for(var i=0;i<btn_states.length;i++){
			if(btn_states[i].getAttribute('skip') == '1'){
				continue;
			}
			var param = JSON.parse(btn_states[i].getAttribute('data'));
			if(param.type == 2){
				if(param.state[0] == 0 || param.state[0] == 2){
					var is = [];
					var index = -1;
					for(var ii=0;ii<param.state[2].length;ii++){
					    if(!Array.isArray(param.state[2][ii])){
					    	is.push(param.state[2][ii]);
					    }else{
					    	is = param.state[2][ii];
					    }
						for(var iii=0;iii<is.length;iii++){
							if(is[iii] == get_window_param(param.state[1])){
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
						if(param.state[0] == 2){
							if(get_window_param(param.state[3][0]) == param.state[3][1]){
								btn_states[i].style.display = '';
							}else{
								btn_states[i].style.display = 'none';
							}
						}else{
							btn_states[i].style.display = '';
						}
						btn_states[i].value = param.title[index];
					}
					
				}
			}else if(param.type == 3){
				var query = false;
				for(var ii=0;ii<param.state[1].length;ii++){
					if(param.state[1][ii] == get_window_param(param.state[0])){
						query = true;
						break;
					}
				}
				if(query){
					btn_states[i].style.display = '';
				}else{
					btn_states[i].style.display = 'none';
				}
			}else{
				if(param.state){
					var query = false;
					for(var ii=0;ii<param.state[1].length;ii++){
						if(param.state[1][ii] == get_window_param(param.state[0])){
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
			if(data.u_ver == 1000){
				if(is_unisound_num[2] > 6){
					location.reload();
					return;
				}else{
					data.u_ver = u_ver;
					is_unisound_num[2] = is_unisound_num[2] + 1;
				}
			}else{
				if(u_ver == 1000){
					location.reload();
					return;
				}
				is_unisound_num[2] = 0;
			}
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
			ver_div.innerHTML = '<a style="color:rgba(238, 0, 0, 1);" href="javascript:create_text_window(null,get_ver());">版本号：'+ver+'</a>';
		}
    }
	if(ver+1 > 1835){
		var disable_unisound_btn = document.getElementById('disable_unisound');
		if(!data.Unisound){
			disable_unisound_btn.value = '启用小讯';
			is_unisound_num[1] = 0;
			if(is_unisound == true){
				if(is_unisound_num[0] > 6){
					location.reload();
					return;
				}else{
					is_unisound_num[0] = is_unisound_num[0] + 1;
				}
			}
		}else{
			disable_unisound_btn.value = '禁用小讯';
			is_unisound_num[0] = 0;
			if(is_unisound == false){
				if(is_unisound_num[1] > 6){
					location.reload();
					return;
				}else{
					is_unisound_num[0] = is_unisound_num[0] + 1;
				}
			}
		}
	}
	if(data.Current_PlayerType == 2){
		
	}
	if(ver+1 > 1856){
		var btn = document.getElementById('switch_player');
		var quality_div = document.getElementById('quality_div');
		if(info.PlayerType == 2){
			btn.setAttribute('PlayerType',2);
			btn.value = '切换MediaPlayer播放器';
		}else{
			btn.setAttribute('PlayerType',1);
			btn.value = '切换ExoPlayer播放器';
		}
	}else{
		var quality_div = document.createElement('div');
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
			update_btn_state();
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
			
			if(typeof(data.music_info) == 'object'){
				var Musicinfo = JSON.parse(JSON.stringify(data.music_info));
				delete Musicinfo.Current_MusicData;
				music_info = Musicinfo;
			}else{
				music_info = null;
			}
			
			if(data.play_type == 2){
				if(music_info == null){
					h3.innerHTML = '正在播放：DLNA模式';
					document.title = dev_name+h3.innerHTML;
				}
			}else if(data.play_type == 3){
				h3.innerHTML = '正在播放：AirPlay模式';
				document.title = dev_name+h3.innerHTML;
			}else if(data.play_type == 4){
				h3.innerHTML = '正在播放：蓝牙模式';
				document.title = dev_name+h3.innerHTML;
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
				
				if(ver+1 > 1863 && info.PlayerType == 2){
					var ExoPlayer_Quality = info.ExoPlayer_Quality;
					
					if(switch_quality.length > 2){
						var display = info.Support_Flac == true ? '' : 'none';
						switch_quality[0].style.display = display;
						switch_quality[1].style.display = display;
					}
					
					if(ExoPlayer_Quality > 1 && info.Support_Flac != true){
						ExoPlayer_Quality = 1;
					}
					
					for(i=0;i<switch_quality.length;i++){
					    if(switch_quality[i].value == ExoPlayer_Quality){
							switch_quality[i].selected = 'selected';
						}
					}
					
					var mCurrent_MusicData = info.music_info.Current_MusicData;
					if(JSON.stringify(mCurrent_MusicData) != JSON.stringify(Current_MusicData)){
						Current_MusicData = mCurrent_MusicData;
						if(Current_MusicData != null && music_info.id != null && music_info.id.toString().substring(0,6) == 'local_'){
							update_music_info();
						}
					}
					
					if(typeof(Current_MusicData) == 'object'){
						if((typeof(Current_MusicData.api_data) == 'object' && Current_MusicData.api_data.quality) || typeof(Current_MusicData.Format) == 'object'){
							var Format = Current_MusicData.Format;
							var text = '';
							if(typeof(Current_MusicData.api_data) == 'object' && typeof(Current_MusicData.api_data.quality) == 'string'){
								text += '当前：' + Current_MusicData.api_data.quality;
							}
							
							if(typeof(Current_MusicData.Format) == 'object'){
								if((typeof(Current_MusicData.api_data) != 'object' || typeof(Current_MusicData.api_data.quality) != 'string')){
									var type = '';
									var quality = '';
									
									switch(Format.sampleMimeType){
										case "audio/flac":
										case "audio/raw":
											break;
										case "audio/vorbis":
											type = '[OGG]';
											break;
										case "audio/mp4a-latm":
											type = '[M4A]';
											break;
										case "audio/mpeg":
											type = '[MP3]';
											break;
										default:
											break;
									}
									
									quality = '标准' + type;
									
									if(Format.bitrate > 320000){
										if(Format.sampleRate > 44100 && Format.pcmEncoding > 0x3){
											quality = 'Hi-Res' + type;
										}else{
											quality = '无损' + type;
										}
									}else if(Format.bitrate > 256000){
										quality = '超品' + type;
									}else if(Format.bitrate > 128000){
										quality = '高品' + type;
									}else if(Format.bitrate < 128000){
										quality = '低品' + type;
									}
									
									text += quality;
								}
								
								var pcmEncoding = Format.pcmEncoding;
								if(typeof(pcmEncoding) == 'number' && pcmEncoding != -1){
									var ENCODING_PCM_8BIT = 0x3;
									/** @see AudioFormat#ENCODING_PCM_16BIT */
									var ENCODING_PCM_16BIT = 0x2;
									/** Like {@link #ENCODING_PCM_16BIT}, but with the bytes in big endian order. */
									var ENCODING_PCM_16BIT_BIG_ENDIAN = 0x10000000;
									/** PCM encoding with 24 bits per sample. */
									var ENCODING_PCM_24BIT = 0x20000000;
									/** PCM encoding with 32 bits per sample. */
									var ENCODING_PCM_32BIT = 0x30000000;
									/** @see AudioFormat#ENCODING_PCM_FLOAT */
									var ENCODING_PCM_FLOAT = 0x4;
									
									var bit = -1;
									switch(pcmEncoding){
										case ENCODING_PCM_8BIT:
											bit = 8;
											break;
										case ENCODING_PCM_16BIT:
										case ENCODING_PCM_16BIT_BIG_ENDIAN:
											bit = 16;
											break;
										case ENCODING_PCM_24BIT:
											bit = 24;
											break;
										case ENCODING_PCM_32BIT:
											bit = 32;
											break;
									}
									
									if(typeof(Current_MusicData.api_data) == 'object' && Current_MusicData.api_data.br > 0){
										text += ' '+parseInt(Current_MusicData.api_data.br/1000)+'Kbps';
									}else if(Format.bitrate > 0){
										if(Format.sampleMimeType != "audio/flac"){
											if(Format.sampleMimeType == 'audio/raw'){
												var bitrate = bit * Format.sampleRate * Format.channelCount;
												if(bitrate != Format.bitrate){
													text += ' '+parseInt(Format.bitrate/1000)+'Kbps';
												}
											}
										}
									}
									
									if(bit != -1){
										text += ' '+bit+'Bit';
									}
									
								}else{
									if(typeof(Current_MusicData.api_data) == 'object' && Current_MusicData.api_data.br > 0){
										text += ' '+parseInt(Current_MusicData.api_data.br/1000)+'Kbps';
									}else if(Format.bitrate > 0){
										if(Format.sampleMimeType != "audio/flac"){
											text += ' '+parseInt(Format.bitrate/1000)+'Kbps';
										}
									}
								}
								
								if(Format.sampleRate > 0){
									text += ' '+(Format.sampleRate/1000)+'kHz';
								}
							}
							
							if(typeof(Current_MusicData.api_data) != 'object'){
								switch_quality.style.display = 'none';
							}else{
								switch_quality.style.display = '';
							}
							quality_div.style.display = 'block';
							if(text != quality_text.innerHTML){
								quality_text.innerHTML = text;
							}
						}else{
							quality_text.innerHTML = '';
							quality_div.style.display = 'none';
						}
					}else{
						quality_text.innerHTML = '';
						quality_div.style.display = 'none';
					}
				}else{
					quality_text.innerHTML = '';
					quality_div.style.display = 'none';
				}
				
				if(ver+1 > 1858){
					if(data.play_state && (music_info.state != 6 && music_info.state != 10)){
						music_pic.style.webkitAnimationPlayState = "running";
						music_btn_play.value = '暂停';
						music_btn_play.setAttribute('data','pause');
					}else{
						music_pic.style.webkitAnimationPlayState = "paused";
						music_btn_play.value = '播放';
						music_btn_play.setAttribute('data','play');
						if(music_info.state == 6 || music_info.state == 10){
							music_btn_play.value = music_info.state == 6 ? '缓冲' : '加载';
							music_btn_play.disabled = true;
						}else{
							music_btn_play.disabled = false;
						}
					}
				}else{
					if((data.play_state && music_info.state != 6) || ((music_info.state != 2 && music_info.state != 3 && music_info.state != 6) && data.play_type != 4) || ((music_info.state == 1 || music_info.state == 2) && data.play_type == 4)){
						music_pic.style.webkitAnimationPlayState = "running";
						music_btn_play.value = '暂停';
						music_btn_play.setAttribute('data','pause');
					}else{
						music_pic.style.webkitAnimationPlayState = "paused";
						music_btn_play.value = '播放';
						music_btn_play.setAttribute('data','play');
						if(music_info.state == 6){
							music_btn_play.value = '缓冲';
							music_btn_play.disabled = true;
						}else{
							music_btn_play.disabled = false;
						}
					}
				}
				
                if((music_id != music_info.id && data.play_type != 2) || (data.play_type == 2 && music_info.title + '-' + music_info.artist + '-' + music_info.albumUrl != music_id) || data.play_type == 4 && data.play_type != 0){
					info_time = [];
					lrcs = [[-1,'暂无歌词']];
					if(data.play_type == 2){
						music_id = music_info.title + '-' + music_info.artist + '-' + music_info.albumUrl;
					}else{
						music_id = music_info.id;
					}
					update_lrc(true);
					if(music_info.albumUrl != null && music_info.albumUrl != ''){
						music_pic.src = music_info.albumUrl;
					}else{
						music_pic.src = music_pic.nopic;
					}
					music_lrc.innerHTML = '';
					stop_title_scrolling();
					music_title = '';
					var title = get_music_title(music_info);
					if(data.play_type == 2){
						if(title != 'undefined'){
							title = '[DLNA模式]'+title;
							h3.innerHTML = '正在播放：'+title;
						}
					}else if(data.play_type == 4){
						if(title != 'undefined'){
							h3.innerHTML = '正在播放：蓝牙模式['+title+']';
						}else{
							h3.innerHTML = '正在播放：蓝牙模式';
						}
					}else{
						h3.innerHTML = '正在播放：'+title;
					}
					document.title = dev_name+h3.innerHTML;
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
				if(title_display_time - new Date().getTime() > 0 && musics_div.style.display == "block"){
					if(data.play_type == 2){
						if(title != 'undefined'){
							title = '[DLNA模式]'+title;
							h3.innerHTML = '正在播放：'+title;
						}
					}else if(data.play_type == 4){
						if(title != 'undefined'){
							h3.innerHTML = '正在播放：蓝牙模式['+title+']';
						}else{
							h3.innerHTML = '正在播放：蓝牙模式';
						}
					}else{
						h3.innerHTML = '正在播放：'+title;
					}
					document.title = dev_name+h3.innerHTML;
				}
            }else{
				
                if(music_id != null || (play_type != 0 && data.play_type == 0)){
					quality_text.innerHTML = '';
					quality_div.style.display = 'none';
					stop_title_scrolling();
					music_title = '';
					info_time = [];
                    music_id = null;
					lrcs = [[-1,'暂无歌词']];
					update_lrc(true);
                    list.innerHTML = '';
					List = [];
					var list_title = document.getElementById('list_title');
					list_title.innerHTML = '播放列表[0]';
					document.title = 'R1音箱音乐页面'+dev_name;
					h3.innerHTML = document.title; 
                    music_pic.src = music_pic.nopic;
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
	if(!data){
		return '';
	}
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
		console.log(data);
		if(data.code == 1){
			var title = get_music_title(music_info);
				title = title + '	';
			if(musics_div.style.display == "block"){
				title_display_time = new Date().getTime() + 1000;
				h3.innerHTML = '正在播放：'+ title;
				document.title = dev_name+h3.innerHTML;
				music_title = title;
				start_title_scrolling();
			}
			if(api_music_info == data.data){
				console.log(data.data);
				return;
			}
			api_music_info = data.data;
			if(music_id != api_music_info.id){
				update_music_info();
				return;
			}
			if(data.update && data.update > 0){
				window.localStorage.removeItem('musicinfo');
				clearTimeout(update_music_info_timer);
				update_music_info_timer = setTimeout(function(){update_music_info();},parseInt(data.update));
			}else{
				window.localStorage.setItem('musicinfo',JSON.stringify(data));
			}
			music_pic.src = api_music_info.pic;
			var lrc = api_music_info.lrc;
			try{
				lrc = lrc.replace(/\[/g,"\r\n[").replace(/\r\n\r\n/g,"\r\n");
			}catch(err){
			}
			var arr = lrc.match(/(\[\d{1,3}:\d{1,2}.\d{1,3}\])(.*)/g);
			if(arr == null || typeof(arr) != 'object'){
				arr = [];
			}
			lrcs = [];
			for(var i = 0;i<arr.length;i++){
				var match = arr[i].match(/(\[\d{1,3}:\d{1,2}.\d{1,3}\])/g);
				if(match != null){
					var time = match[match.length-1];
					var lrc_text = $.trim(arr[i].substring(arr[i].indexOf(time)+time.length));
					//break;
					for(var ii=0;ii<match.length;ii++){
						time = match[ii];
						if(time != ''){
							var lrc = [];
							var key = to_ms(time.substr(1,time.length-2));
							if(!isNaN(key)){
								lrc[0] = key;
								lrc[1] = lrc_text;
								lrcs.push(lrc);
							}
						}
					}
				}
			}
			if(lrcs.length < 1){
				lrcs = [[-1,'暂无歌词']];
			}else{
				lrcs.sort(function(a,b){
					return a[0] - b[0];
				});
				console.log(lrcs);
			}
		}else{
			lrcs = [[-1,'暂无歌词']];
		}
		update_lrc(true);
	};
	var error = function(){
	};
	var data = JSON.parse(window.localStorage.getItem('musicinfo'));
	if(!data){
		data = [];
	}
	if(data.code == 1 && data.data.id == music_id){
		console.log('temp_musicinfo:');
		success(data);
	}else{
		if(!music_info || music_info.ItemType != 4){
			console.log('api_musicinfo:');
			if(music_id != null && music_id.toString().substring(0,6) == 'local_'){
				if(Current_MusicData == null && ver +1 > 1865){
					return;
				}
				data = {info:music_id,file:info.music_info.title,metadata:JSON.stringify(Current_MusicData.MediaMetadata)};
				console.log(data);
			}else if(info.play_type == 2){
				data = {type:'dlna',info:music_id,file:get_music_title(info.music_info)};
			}else{
				data = {info:music_id,music_info:JSON.stringify(music_info)};
			}
			$.ajax({type:'POST',url:'http://music.wxfsq.com/music/index.php',data:data,dataType:'json',success:success,error:error});
		}
	}
	
	ws_send('{"type":"list"}');
}


function update_lrc(update,wait=false){
	if(info_time.length < 1){
		music_time.max = 0;
		music_time.value = 0;
		music_time_duration.innerText = ms_to_is(music_time.max);
		music_time_position.innerText = ms_to_is(music_time.value);
		bak_lrc_time = -1;
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
	
	if(wait){
		var t = new Date().getTime();
		while(info_time[2] < 1 || lrcs.length < 1){
			if((new Date().getTime() - t) > 1000){
				return;
			}
		}
	}
	if(info_time[0] != -1){
		var time = parseInt(info_time[1]+(new Date().getTime() - info_time[0]));
	}else{
		var time = parseInt(info_time[1]);
	}
	
	if(time < bak_lrc_time){
		if(bak_lrc_time - time < 1000){
			time = bak_lrc_time;
		}
	}
	bak_lrc_time = time;
	
	
	if(musics_div.style.display == "block" && !time_lock && info_time[2]){
		music_time.max = parseInt(info_time[2]);
		music_time.value = time;
		music_time_duration.innerText = ms_to_is(music_time.max);
		music_time_position.innerText = ms_to_is(music_time.value);
	}
	
	// && info_time[2] > 0
	
	if(lrcs.length > 0){
		time += 280;
		var index1 = 0;
		var lrcs1 = [];
		var lrcs_index = null;
		var lrcs1_index = null;
		for(index in lrcs){
			if(parseInt(lrcs[index][0]) > time){
				if(lrcs_index == null){
					lrcs_index = (index > 0 ? index -1 : index);
				}
			}else{
				if(index == lrcs.length - 1){
					if(lrcs_index == null){
						lrcs_index = index;
					}
				}
			}
			if(lrcs[index][1] != ''){
				if(parseInt(lrcs[index][0]) > time){
					if(lrcs1_index == null){
						lrcs1_index = (index1 > 0 ? index1 -1 : index1);
					}
				}
				lrcs1.push(lrcs[index]);
				index1++;
			}
		}
		
		if(lrcs1_index == null){
			lrcs1_index = lrcs1.length - 1;
		}
		
		if(music_lrc.style.display == "block"){
			if(lrcs1.length < 2){
				lrcs1_index = 1;
			}
			
			var lrc_list = [];
			lrcs1_index = lrcs1_index+1;
			var lrc_div = music_lrc.getElementsByTagName('div');
			lrc_div = lrc_div != null ? lrc_div[0] : null;
			if(music_lrc.lrcs != lrcs && lrcs1.length > 0){
				var lrc_div = document.createElement('div');
				lrc_div.style = 'width: 100%;height: 193px; overflow-x:hidden; overflow-y:auto;';
				lrc_div.className = 'music_lrc_div';
				music_lrc.lrcs = lrcs;
				music_lrc.innerHTML = '';
				music_lrc.appendChild(lrc_div);
				var num = 1;
				
				if(lrcs1.length < 3){
					num = 3-lrcs1.length;
				}
				
				for(var i=0;i<num;i++){
					var lrc_h3 = document.createElement('h3');
					lrc_h3.className = 'lrc';
					lrc_h3.style = 'height: 20px';
					lrc_div.appendChild(lrc_h3);
				}
				
				
				for(var i=0;i<lrcs1.length;i++){
					if(Array.isArray(lrcs1[i])){
						var lrc = lrcs1[i][1];
					}else{
						var lrc = '';
					}
					var lrc_h3 = document.createElement('h3');
					lrc_h3.className = 'lrc';
					lrc_h3.innerHTML = lrc;
					lrc_div.appendChild(lrc_h3);
				}
				var lrc_h3 = document.createElement('h3');
				lrc_h3.className = 'lrc';
				lrc_h3.style = 'height: 20px';
				lrc_div.appendChild(lrc_h3);
			}
			
			var lrc_h3s = lrc_div != null ? lrc_div.getElementsByTagName('h3') : null;
			if(lrc_h3s !=null && lrc_h3s[lrcs1_index] != null){
				var lrc_h3 = lrc_h3s[lrcs1_index];
				var custom = (String)(lrcs[lrcs_index][1] != '');
				if(lrc_h3.className.indexOf('custom_lrc') == -1 || lrc_h3.getAttribute('custom') != custom){
					$('.custom_lrc').removeClass('custom_lrc');
					lrc_h3.className = 'lrc custom_lrc';
					lrc_h3.setAttribute('custom',custom);
					if(lrc_h3s[lrcs1_index] != null){
						var len = 0;
						
						var clientHeight = lrc_h3s[lrcs1_index].clientHeight;
						if(clientHeight > 30){
							if(clientHeight > 60){
								lrcs1_index++;
							}
							lrcs1_index++;
						}else{
							var clientHeight = lrc_h3s[lrcs1_index-1].clientHeight;
							
							if(clientHeight > 25){
								if(clientHeight > 25){
									lrcs1_index++;
								}
								
								if(clientHeight > 50){
									lrcs1_index++;
								}
							}else if(lrcs1_index-2 > -1){
								var clientHeight = lrc_h3s[lrcs1_index-2].clientHeight;
								if(clientHeight > 25){
									lrcs1_index++;
								}
							}
						}
						
						for(var index = 1;index < lrcs1_index-1;index++){
							len += lrc_h3s[index].offsetTop - lrc_h3s[index-1].offsetTop;
						}
						
						$('.music_lrc_div').animate({ scrollTop:len},100);
					}
				}
			}
			
		}else{
			var lrc = lrcs[lrcs_index];
			if(lrc[1] != h3.innerHTML && lrc[0] != -1){
				h3.innerHTML = lrc[1];
			}
		}
		
	}
	
}

function switch_musicpic(){
	music_lrc.style.display = 'none';
	music_pic.style.display = 'block';
}

function set_h3(text){
	h3.innerHTML = text;
}

function to_ms(time){
	var arr = time.split(':');
	if(!isNaN(arr[0])){
		var ms = (arr[0]*60)*1000;
		ms += (arr[1]*1000);
		return parseInt(ms);
	}else{
		return time;
	}
}


function start_updateinfo(time){
	if(!time){
		time = 500;
	}
	stop_updateinfo();
	clearInterval(ping_timer);
	timer = setInterval(function(){
		if(ws != null){
			ws_send(JSON.stringify({type:'get_info'}));
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
		
		if(input.value != ''){
			if(data.value == '设置氛围灯光颜色'){
				var color = parseInt(input.value);
				if(isNaN(color) || (color == 0 && input.value.toLowerCase().indexOf('0x') == -1)){
					input.value = '';
					param.err = '请输入正确的十六进制颜色！';
				}else{
					input.value = color;
				}
			}
		}
		if(input.value == ''){
			if(data.value == '修改小讯唤醒词'){
				var words = info.main_wakeup_word;
				if(!words){
					words = [];
				}
				param.err = "当前小讯唤醒词为：\r\n"+words.concat('小讯小讯').join("\r\n")+"\r\n"+param.err;
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
			}else if(data.value == '设置氛围灯光颜色'){
				if(info.music_light_color != null){
					var hex_color = info.music_light_color.toString(16);
					for(var i=hex_color.length;i<6;i++){
						hex_color = '0'+hex_color;
					}
					param.err = '当前灯光颜色为：0x'+hex_color.toLocaleUpperCase()+"\r\n"+param.err;
				}
			}else if(data.value == '修改小爱唤醒词'){
				if(Unisound_info.Wakeup_Xiaoai_Word != null && Unisound_info.Wakeup_Xiaoai_Word.length > 0){
					param.err = "当前小爱唤醒词为：\r\n"+Unisound_info.Wakeup_Xiaoai_Word+"\r\n"+param.err;
				}
			}
			if(param.err != null){
			     var text = document.getElementById('text');
			     text.value = '['+data.value+']:'+param.err;
				 alert('['+data.value+']:'+param.err);
			     return;
			}
		}
		
		var arr = param.input.split('.');

		if(arr.length > 1){
			var obj = [];
			for(var i in arr){
				if(i == 0){
					obj[i] = param.param[arr[i]];
					if(typeof(obj[i]) != 'object'){
						obj[i] = JSON.parse(obj[i]);
					}
				}else{
					obj[i] = obj[i-1][arr[i]];
				}
			}
            console.log(JSON.stringify(obj))
			if(obj[obj.length-1]){
				obj[obj.length-2][arr[arr.length-1]] += input.value;
			}else{
				obj[obj.length-2][arr[arr.length-1]] = input.value;
			}
			console.log(JSON.stringify(obj));
			param.param[arr[0]] = obj[0];
		}else{
			if(param.param[param.input]){
				param.param[param.input] += input.value;
			}else{
				param.param[param.input] = input.value;
			}
		}
		
		if(data.value == '执行指令'){
			if(!confirm("确定要执行以下指令吗？\r\n"+input.value)){
				return;
			}
		}
		
        var json = JSON.stringify(param.param);
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
		if(param.state[0] == 0 || param.state[0] == 2){
			if(data.value == '打开氛围灯' || data.value == '关闭氛围灯'){
				//setTimeout(function(){send(param.succ[index],'打开氛围灯','send_message',{what:4,arg1:67,arg2:0})},500);
			}
			
			if(!(param.state[0] == 0 && param.state[1] == 'info.music_light_mode')){
				if(!confirm(data.value+'？')){
					return;
				}
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
		ws_send('{"type":"get_info"}');
    }else if(param.type == -1){
        if(param.itemType == 'set_background'){
			create_set_background_page();
			return;
			var text = document.getElementById('text');
			//text.value = '当前背景：'+(localStorage.getItem('background') ? localStorage.getItem('background') : '默认背景');
			
			
        }else if(param.itemType == 'reboot_unisound'){
			if(!confirm("确定要重启小讯吗？")){
				return;
			}
			h3.innerHTML = '重启中。。。';
			ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am force-stop com.phicomm.speaker.device'}));
			setTimeout(function(){
				ws_send(JSON.stringify({type:'shell1',shell:'/system/bin/am start com.phicomm.speaker.device/.ui.MainActivity'}));
				setTimeout(function(){
					h3.innerHTML = document.title;
					alert('重启完毕！');
				},10000);
			},3000);
		}else if(param.itemType == 'reboot'){
			if(!confirm("确定要重启音箱吗？")){
				return;
			}
			//h3.innerHTML = '重启中。。。';
			if(ver > 1847){
				ws_send(JSON.stringify({type:'reboot'}));
			}else{
				ws_send(JSON.stringify({type:'shell',shell:'stop adbd&&start adbd&&adb reboot'}));
			}
			alert('已发送重启请求！');
			//setTimeout(function(){
			//	h3.innerHTML = document.title;
			//	
			//},10000);
			
		}else if(param.itemType == 'open_net_config'){
			if(!confirm("确定要打开配网模式吗？\r\n打开后网页控制将断开！")){
				return;
			}
			ws_send(JSON.stringify({type:'send_message',what:262144,arg1:1}));
			ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'NetworkConfigOutputEvent',status:1}}));
			alert("已打开！\r\n请使用配网工具进行配网！");
			location.href = './config_wifi';
		}else if(param.itemType == 'upload_page'){
			if(location.href.indexOf(control_host) > -1){
				location.href = 'http://'+ip+'/upload';
			}else{
				location.href = '/upload';
			}
		}else if(param.itemType == 'test'){
			test();
		}else if(param.itemType == 'connect_page'){
			var url = 'http://'+control_host+'/';
			if(typeof plus != 'undefined'){}
			if(location.href.indexOf(control_host) > -1){
				url = location.href;
			}else{
				location.href = url + '?no_auto_connect';
				return;
			}
			//location.href = url + (url.indexOf('no_auto_connect') == -1 ? (url.split('?').length > 1 ? '&no_auto_connect' : '?no_auto_connect') : '');
			//new Date().getTime();
			delparam(['connect_ip','connect_id']);
			putparam({no_auto_connect:null});
			location.reload();
		}else if(param.itemType == 'Voice_time_reporting'){
			Voice_time_reporting();
		}else if(param.itemType == 'Auto_restart_device'){
			Auto_restart_device();
		}else if(param.itemType == 'modify_color'){
			create_color_selection();
		}else if(param.itemType == 'xiaoai_tonesettings'){
			if(!confirm("确定要打开小爱音色设置页面吗？\r\n打开后会导致音箱卡顿，请在设置完成后重启小爱服务！")){
				return;
			}
			ws_send(JSON.stringify({type:'shell1',shell:'am start -n com.xiaomi.xiaoailite/.presenter.activity.ToneSettingActivity'}));
			alert('已打开，请前往屏幕页面查看！');
		}else if(param.itemType == 'xiaoai_settings'){
			if(!confirm("确定要打开小爱设置页面吗？\r\n打开后会导致音箱卡顿，请在设置完成后重启小爱服务！\r\n建议在设置前禁用麦克风！")){
				return;
			}
			ws_send(JSON.stringify({type:'shell1',shell:'am start -n com.xiaomi.xiaoailite/.presenter.info.PersonalInfoActivity'}));
			alert('已打开，请前往屏幕页面查看！');
		}else if(param.itemType == 'reboot_xiaoaiservice'){
			if(!confirm("确定要重启小爱服务吗？")){
				return;
			}
			ws_send(JSON.stringify({type:'shell',type_id:'reboot_xiaoaiservice',shell:'am force-stop com.xiaomi.xiaoailite'}));
			alert('已发送指令！');
		}else if(param.itemType ==  'activation_xiaoai'){
			if(!confirm("确定要激活小爱吗？")){
				return;
			}
			data.value = '正在获取激活id，请稍候。。。';
			data.id = 'activation_xiaoai';
			data.disabled = true;
			ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'api',data:{type:'get_xiaoai_id'}}}));
		}else if(param.itemType == 'play_local_music'){
			var path = '/sdcard/music/';
			if(input.value != ''){
				path = input.value;
			}
			
			var tips = "播放["+path+"]目录下的音乐？";
			
			if(info.Current_PlayerType == 2 && !info.Support_Flac){
				tips += "\r\n提示：当前ExoPlayer播放器未安装flac支持库，flac格式音乐将无法正常播放！";
			}
			
			if(!confirm(tips)){
				return;
			}
			ws_send(JSON.stringify({type:'play_local_music',path:path,play:true}));
		}else if(param.itemType == 'reboot_echo'){
			if(!confirm("确定要重启EchoService吗？")){
				return;
			}
			ws_send(JSON.stringify({type:'reboot_echo'}));
		}else if(param.itemType == 'get_song_list'){
			var data = null;
			if(temp_song_list != null && (new Date().getTime() - temp_song_list.time) < (600 * 1000) && temp_song_list.music_source == info.music_source){
				setTimeout(function(){
					create_song_list_window(temp_song_list.data);
				},200);
			}else{
				temp_song_list = {music_source:info.music_source};
				ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'api',data:{type:'get_song_list',music_source:info.music_source}}}));
			}
			create_song_list_window(null);
		}
    }else{
        if(data.value == '打开氛围灯' && ver > 1500){
            setTimeout(function(){send(param.succ,'打开氛围灯','send_message',{what:4,arg1:67,arg2:0})},500);
        }
		
		if(data.value  == '小讯收藏' || data.value == '喜欢的歌' || data.value == '个性电台'){
			if(!confirm('点播'+data.value+'？')){
				return;
			}
		}else{
			if(!confirm(data.value+'？')){
				return;
			}
		}
		
		

        send(param.succ,data.value,param.ws_type,param.param);
	}
	
}

function set_background(data){
	if(data == ''){
		var img = background;
		localStorage.removeItem(hostname+'_background');
		text.value = '已恢复默认背景！';
	}else{
		var img = 'background: url("'+data+'") center top / cover no-repeat fixed;';
		localStorage.setItem(hostname+'_background',img);
		text.value = '设置背景图片成功！';
	}
	set_background_css(img);
	update_StatusBar();
	setTimeout(function(){alert(text.value);},600);
}

function musicpic_background(){
	if(musics_div.style.display != "block" || !Cover_background_open){
		return;
	}
	var url = music_pic.src;
	if(url != '' && url != 'http://localhost/' && url.indexOf('nopic') == -1){
		background_div.style.filter = '';
		background_div.style.width = '100%';
		background_div.style.height = '100%';
		if(document.body.offsetHeight > document.body.offsetWidth){
			var size = document.body.offsetHeight;
		}else{
			var size = document.body.offsetWidth;
		}
		var img = 'z-index: -1; background: url("'+url+'"); background-repeat: no-repeat; background-size: cover; background-attachment: fixed; background-position-x: center;';
		img += 'filter: blur(36px) brightness(100%) contrast(100%); opacity: 0.66; transform: translate(-0%,-0%);';
		set_background_css(img);
		main_div.style = 'position: fixed; z-index: 0; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0, 0, 0, 0.0);';
	}else{
		Restore_background();
	}
}

function Restore_background(){
	var img = localStorage.getItem(hostname+'_background');
	if(img == null){
		img = background;
	}
	background_div.style.width = '100%';
	background_div.style.height = '100%';
	set_background_css(img);
	update_StatusBar();
}

function set_background_css(cssText,id = '#background_div'){
	cssText = id+"{"+cssText+"}";
	var head = document.getElementsByTagName("head")[0];
	var style = document.getElementById(id+"_style");
	if(!style){
		var style = document.createElement("style");
		style.id = id+'_style';
		style.type = "text/css";
		head.appendChild(style);
	}
	style.innerHTML = '';
	var rules = document.createTextNode(cssText);
	if (style.styleSheet) {
		style.styleSheet.cssText = rules.nodeValue;
	} else {
		style.appendChild(rules);
	}
}


function send(tips,type,ws_type,data,call){
	if(!call){
		call = null;
	}
	if(type != null){
		tips_data[type] = tips;
		var text = document.getElementById('text');
		text.value = '['+type+']:请稍候。。。';
		data.type_id = type;
	}
	data.type = ws_type;
	
	if(data.what == 65536 && data.arg2 == 1){
		if(is_new_unisound && u_ver+1 > 1849 && Unisound_info.DeviceStatus == 5){
			ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'UpdateDeviceStatus',status:0}}));
		}
	}
	
	ws_send(JSON.stringify(data));
}


function create_set_background_page(){
	popup.innerHTML = '';
	var uploadpic_div = document.createElement('div');
	uploadpic_div.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:350px;';
	popup.appendChild(uploadpic_div);
	popup.style.display = 'block';
	
	var title_div = document.createElement('div');
	title_div.style = 'background-color: rgba(0,160,255,1);border-radius:15px;';
	uploadpic_div.appendChild(title_div);
	
	var div1 = document.createElement('div');//占位
	div1.style.height = '1px';
	var div = document.createElement('div');
	div.style = 'border-radius:15px;';
	div.appendChild(div1);
	var title = document.createElement('h3');
	title.style = 'font-size: 16px;color:#ffffff';
	title.title = '设置背景图片';
	title.innerHTML = title.title;
	div.appendChild(title);
	title_div.appendChild(div);
	var content_div = document.createElement('div');
	content_div.style = 'background-color: #ffffff;border-radius:0 0 15px 15px; margin: 15px auto;max-height:500px;overflow-x:hidden;overflow-y:auto;';
	title_div.appendChild(content_div);
	var upload_div = document.createElement('div');
	content_div.appendChild(upload_div);

	var div1 = document.createElement('div');//占位
	div1.style.height = '10px';
	upload_div.appendChild(div1);
	
	var text = document.createElement('text');
	text.innerHTML = '上传图片：';
	upload_div.appendChild(text);
	var upload_input = document.createElement('input');
	upload_input.type = 'file';
	upload_input.accept= 'image/*';
	upload_input.style = 'color:rgba(238, 0, 0, 1);height:30px;width:180px';
	upload_div.appendChild(upload_input);
	
	var div1 = document.createElement('div');//占位
	div1.style.height = '5px';
	upload_div.appendChild(div1);
	
	var text = document.createElement('text');
	text.innerHTML = '图片地址：'
	upload_div.appendChild(text);
	var text_input = document.createElement('input');
	text_input.style = 'height:30px;width:180px';
	text_input.type = 'text';
	upload_div.appendChild(text_input);
	
	var div1 = document.createElement('div');//占位
	div1.style.height = '5px';
	upload_div.appendChild(div1);
	
	
	var BackgroundBlur_div = document.createElement('div');
    var text = document.createElement('text');
	text.innerHTML = '背景模糊：';
	BackgroundBlur_div.appendChild(text);
	
	var BackgroundBlurValue = localStorage.getItem(hostname+'_BackgroundBlur');
	if(BackgroundBlurValue == null || BackgroundBlurValue == ''){
		BackgroundBlurValue = 0;
	}
	
	var Blur = document.createElement('input');
	Blur.id = 'BackgroundBlur';
	Blur.style.width = '130px';
	Blur.type = 'range';
    Blur.min = 0;
    Blur.step = 1;
    Blur.max = 100
	Blur.value = BackgroundBlurValue;
    Blur.addEventListener('input', function() {
		var BackgroundBlurValue = this.value;
		localStorage.setItem(hostname+'_BackgroundBlur',BackgroundBlurValue);
		BackgroundBlurText = document.getElementById('BackgroundBlurText');
		BackgroundBlurText.innerHTML = BackgroundBlurValue + 'px';
		background_div.style.filter = 'blur('+BackgroundBlurValue+'px)';
		update_StatusBar();
	});
	BackgroundBlur_div.appendChild(Blur);
	
    var text = document.createElement('text');
	text.id = 'BackgroundBlurText';
	text.innerHTML = BackgroundBlurValue + 'px';
	BackgroundBlur_div.appendChild(text);
	
	upload_div.appendChild(BackgroundBlur_div);
	
	var div1 = document.createElement('div');//占位
	div1.style.height = '5px';
	upload_div.appendChild(div1);
	
	
	var set_btn = document.createElement('input');
	set_btn.type = 'button';
	set_btn.value = '设置背景图片';
	set_btn.className = 'btn';
	set_btn.style.margin = '5px';
	set_btn.style.padding = '10px 23px';
	set_btn.onclick = async function(){
		if(upload_input.value != ''){
			if(!confirm("确定要设置新的背景吗？")){
				return;
			}
			var file = upload_input.files[0];
			var file1 = file;
			console.log(file.size);
			var max_size = 1048576;//2097152
			if(file.size+1 > max_size){
				var size = file.size/1024/1024;
				title.innerHTML = '图片文件过大，正在尝试压缩。。。<br>'+size.toFixed(2)+'MB';
				for(var d=10;d>0;d--){
					const blob = await compressImage(file,(d/10));
					file1 = blob.compressFile;
					console.log(d+':'+file1.size);
					if(file1.size+1 > max_size){}else{break;}
				}
				title.innerHTML = title.title;
				if(file1.size+1 > max_size){
					alert('抱歉，图片过大，请手动压缩后再上传！');
					return;
				}else{
					file = file1;
				}
			}
			var reader = new FileReader();
			reader.onload = function(e) {
				set_background(this.result);
			};
			reader.readAsDataURL(file);
		}else if(text_input.value != ''){
			if(!confirm("确定要设置新的背景吗？")){
				return;
			}
			set_background(text_input.value);
			
		}else{
			alert('请先选择图片文件或输入图片地址！');
			return;
		}
		popup.onclose();
	}
	upload_div.appendChild(set_btn);
	
	var div1 = document.createElement('div');//占位
	upload_div.appendChild(div1);
	
	var rec_btn = document.createElement('input');
	rec_btn.type = 'button';
	rec_btn.value = '恢复默认背景';
	rec_btn.className = 'btn';
	rec_btn.style.margin = '5px';
	rec_btn.style.padding = '10px 23px';
	rec_btn.onclick = function(){
		if(!confirm("确定要恢复默认背景吗？")){
			return;
		}
		set_background('');
		popup.onclose();
	}
	upload_div.appendChild(rec_btn);
	
	var div1 = document.createElement('div');//占位
	
		
	var btn = document.createElement('input');
	btn.type = 'button';
	btn.value = '查看当前背景';
	btn.className = 'btn';
	btn.style.margin = '5px';
	btn.style.padding = '10px 23px';
	btn.onclick = function(){
		var body_style = document.getElementById("body_style");
		var css_text = body_style.innerHTML;
		var body_background = css_text.substring(css_text.indexOf('background'),css_text.lastIndexOf('}'));
		alert(body_background);
	}
	//upload_div.appendChild(div1);
	//upload_div.appendChild(btn);
	
	var div1 = document.createElement('div');//占位
	div1.style.height = '10px';
	upload_div.appendChild(div1);
	
	
	
}

function Voice_time_reporting(){
	ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'Voice_time_reporting'}}));
}

function create_Voice_time_reporting(data){
	if(data != null){
		Time_reporting_list = data.Time_reporting_list;
	}else{
		return;
	}
	if(Voice_time_reporting_div == null){
		Voice_time_reporting_div = document.createElement('div');
		Voice_time_reporting_div.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:350px;';
		
		popup.innerHTML = '';
		popup.appendChild(Voice_time_reporting_div);
		popup.style.display = 'block';
	
		var title_div = document.createElement('div');
		title_div.style = 'background-color: rgba(0,160,255,1);border-radius:15px;';
		Voice_time_reporting_div.appendChild(title_div);
	
		var div1 = document.createElement('div');//占位
		div1.style.height = '1px';
		var div = document.createElement('div');
		div.style = 'border-radius:15px;';
		div.appendChild(div1);
		var title = document.createElement('h3');
		title.style = 'font-size: 16px;color:#ffffff';
		title.title = '设置语音报时';
		title.innerHTML = title.title;
		div.appendChild(title);
		title_div.appendChild(div);
		var content_div = document.createElement('div');
		content_div.style = 'background-color: #ffffff;border-radius:0 0 15px 15px; margin: 15px auto;max-height:500px;overflow-x:hidden;overflow-y:auto;';
		title_div.appendChild(content_div);
		var settings_div = document.createElement('div');
		content_div.appendChild(settings_div);
		var div1 = document.createElement('div');//占位
		div1.style.height = '10px';
		settings_div.appendChild(div1);
	
		var time_reporting_switch = document.createElement('input');
		time_reporting_switch.type = 'checkbox';
		time_reporting_switch.id = 'time_reporting_switch';
		time_reporting_switch.onclick = function(){
			ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'set_Time_reporting_open',open:this.checked}}));
		};
		settings_div.appendChild(time_reporting_switch);
		var text = document.createElement('text');
		text.style.margin = '6px';
		text.innerHTML = "语音报时";
		settings_div.appendChild(text);
		
		
		var div1 = document.createElement('div');//占位
		div1.style.display = 'inline';
		settings_div.appendChild(div1);
		
		var Half_an_hour_switch = document.createElement('input');
		Half_an_hour_switch.type = 'checkbox';
		Half_an_hour_switch.id = 'Half_an_hour_switch';
		Half_an_hour_switch.onclick = function(){
			for(var i in Time_reporting_list){
				var state = Time_reporting_list[i];
				if(state > 0){
					Time_reporting_list[i] = this.checked ? 3 : 1;
				}
			}
			ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'set_Time_reporting_list',list:Time_reporting_list}}));
		};
		settings_div.appendChild(Half_an_hour_switch);
		var text = document.createElement('text');
		text.style.margin = '6px';
		text.innerHTML = "半点报时";
		settings_div.appendChild(text);
		
		if(u_ver+1 > 1833){
			var div1 = document.createElement('div');//占位
			div1.style.display = 'inline';
			settings_div.appendChild(div1);

			var Time_reporting_12h_switch = document.createElement('input');
			Time_reporting_12h_switch.type = 'checkbox';
			Time_reporting_12h_switch.id = 'Time_reporting_12h_switch';
			Time_reporting_12h_switch.onclick = function(){
				ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'set_Time_reporting_12h',open:this.checked}}));
			};
			settings_div.appendChild(Time_reporting_12h_switch);
			var text = document.createElement('text');
			text.style.margin = '6px';
			text.innerHTML = "12小时制";
			settings_div.appendChild(text);
		}
		
		var div1 = document.createElement('div');//占位
		div1.style.height = '10px';
		settings_div.appendChild(div1);
		
		var num = 0;
		for(var i=0;i<24;i++){
			if(num > 3){
				num = 0;
				var div1 = document.createElement('div');//占位
				div1.style.height = '10px';
				settings_div.appendChild(div1);
			}
			var checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.id = 'time_reporting_'+i;
			
			checkbox.onclick = function(){
				i = parseInt(this.id.substr(this.id.lastIndexOf('_')+1));
				var Half_an_hour_switch = document.getElementById('Half_an_hour_switch');
				Time_reporting_list[i] = this.checked ? (Half_an_hour_switch.checked ? 3 : 1) : 0;
				ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'set_Time_reporting_list',list:Time_reporting_list}}));
			};
			settings_div.appendChild(checkbox);
			var text = document.createElement('text');
			text.style.margin = '6px';
			text.innerHTML = i+"点";
			settings_div.appendChild(text);
			num++;
		}
		
		var div1 = document.createElement('div');//占位
		div1.style.height = '10px';
		settings_div.appendChild(div1);
		
		var text = document.createElement('text');
		text.innerHTML = "整点提示：";
		settings_div.appendChild(text);
		var Whole_point_prompt = document.createElement('input');
		Whole_point_prompt.type = 'text';
		Whole_point_prompt.id = 'Whole_point_prompt';
		Whole_point_prompt.style = 'height:40px;width:150px';
		settings_div.appendChild(Whole_point_prompt);
		var btn = document.createElement('input');
		btn.type = 'button';
		btn.value = '保存';
		btn.className = 'btn';
		btn.style.margin = '2px';
		btn.style.padding = '6px 12px';
		btn.onclick = function(){
			var Whole_point_prompt = document.getElementById('Whole_point_prompt');
			if(Whole_point_prompt.value != ''){
				if(Whole_point_prompt.value.indexOf('[hour]') == -1){
					alert('请添加[hour]字段！');
					return;
				}
			}
			ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'set_Whole_point_prompt',prompt:Whole_point_prompt.value}}));
		}
		settings_div.appendChild(btn);
		
		var div1 = document.createElement('div');//占位
		div1.style.height = '10px';
		settings_div.appendChild(div1);
		
		var text = document.createElement('text');
		text.innerHTML = "半点提示：";
		settings_div.appendChild(text);
		var Half_dot_prompt = document.createElement('input');
		Half_dot_prompt.type = 'text';
		Half_dot_prompt.id = 'Half_dot_prompt';
		Half_dot_prompt.style = 'height:40px;width:150px';
		settings_div.appendChild(Half_dot_prompt);
		var btn = document.createElement('input');
		btn.type = 'button';
		btn.value = '保存';
		btn.className = 'btn';
		btn.style.margin = '2px';
		btn.style.padding = '6px 12px';
		btn.onclick = function(){
			var Half_dot_prompt = document.getElementById('Half_dot_prompt');
			if(Half_dot_prompt.value != ''){
				if(Half_dot_prompt.value.indexOf('[hour]') == -1){
					alert('请添加[hour]字段！');
					return;
				}
			}
			ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'set_Half_dot_prompt',prompt:Half_dot_prompt.value}}));
		}
		settings_div.appendChild(btn);
		
		
		var div1 = document.createElement('div');//占位
		div1.style.height = '10px';
		settings_div.appendChild(div1);
	}else{
		if(popup.style.display != 'block'){
			popup.innerHTML = '';
			popup.appendChild(Voice_time_reporting_div);
			popup.style.display = 'block';
			
		}
		var time_reporting_switch = document.getElementById('time_reporting_switch');
		var Half_an_hour_switch = document.getElementById('Half_an_hour_switch');
		var Time_reporting_12h_switch = document.getElementById('Time_reporting_12h_switch');
		var Whole_point_prompt = document.getElementById('Whole_point_prompt');
		var Half_dot_prompt = document.getElementById('Half_dot_prompt');
	}
	time_reporting_switch.checked = data.Time_reporting_open;
	Half_an_hour_switch.checked = false;
	for(var i in Time_reporting_list){
		if(Time_reporting_list[i] > 1){
			Half_an_hour_switch.checked = true;
		}
		var checkbox = document.getElementById('time_reporting_'+i);
		checkbox.checked = Time_reporting_list[i] > 0;
	}
	if(u_ver+1 > 1833){
		Time_reporting_12h_switch.checked = data.Time_reporting_12h;
	}
	Whole_point_prompt.value = data.Whole_point_prompt;
	Half_dot_prompt.value = data.Half_dot_prompt;
}

function Auto_restart_device(){
	ws_send(JSON.stringify({type:'Auto_restart_device'}));
}

function create_Auto_restart_device(data){
	if(data != null){
		Auto_restart_device_times = data.Auto_restart_device_time;
	}
	if(Auto_restart_device_div == null){
		Auto_restart_device_div = document.createElement('div');
		Auto_restart_device_div.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:350px;';
		
		popup.innerHTML = '';
		popup.appendChild(Auto_restart_device_div);
		popup.style.display = 'block';
	
		var title_div = document.createElement('div');
		title_div.style = 'background-color: rgba(0,160,255,1);border-radius:15px;';
		Auto_restart_device_div.appendChild(title_div);
	
		var div1 = document.createElement('div');//占位
		div1.style.height = '1px';
		var div = document.createElement('div');
		div.style = 'border-radius:15px;';
		div.appendChild(div1);
		var title = document.createElement('h3');
		title.style = 'font-size: 16px;color:#ffffff';
		title.title = '设置自动重启';
		title.innerHTML = title.title;
		div.appendChild(title);
		title_div.appendChild(div);
		var content_div = document.createElement('div');
		content_div.style = 'background-color: #ffffff;border-radius:0 0 15px 15px; margin: 15px auto;max-height:500px;overflow-x:hidden;overflow-y:auto;';
		title_div.appendChild(content_div);
		var settings_div = document.createElement('div');
		content_div.appendChild(settings_div);
		var div1 = document.createElement('div');//占位
		div1.style.height = '10px';
		settings_div.appendChild(div1);
	
		var Auto_restart_device_switch = document.createElement('input');
		Auto_restart_device_switch.type = 'checkbox';
		Auto_restart_device_switch.id = 'Auto_restart_device_switch';
		Auto_restart_device_switch.onclick = function(){
			ws_send(JSON.stringify({type:'set_Auto_restart_device_open',open:this.checked}));
		};
		settings_div.appendChild(Auto_restart_device_switch);
		var text = document.createElement('text');
		text.style.margin = '8px';
		text.innerHTML = "开关";
		settings_div.appendChild(text);
		var div1 = document.createElement('div');//占位
		div1.style.height = '10px';
		settings_div.appendChild(div1);
		
		
		var text = document.createElement('text');
		text.style.margin = '8px';
		text.innerHTML = "每天";
		settings_div.appendChild(text);
		var Auto_restart_device_time = document.createElement('input');
		Auto_restart_device_time.type = 'time';
		Auto_restart_device_time.id = 'Auto_restart_device_time';
		Auto_restart_device_time.onchange = function(){
			if(this.value){
				var arr = this.value.split(':');
				if(arr.length > 1){
					var times = [];
					times[0] = parseInt(arr[0]);
					times[1] = parseInt(arr[1]);
					ws_send(JSON.stringify({type:'set_Auto_restart_device_time',times:JSON.stringify(times)}));
				}
			}
		};
		settings_div.appendChild(Auto_restart_device_time);
		var text = document.createElement('text');
		text.style.margin = '8px';
		text.innerHTML = "自动重启";
		settings_div.appendChild(text);
		
		var div1 = document.createElement('div');//占位
		div1.style.height = '10px';
		settings_div.appendChild(div1);
		
	}else{
		if(popup.style.display != 'block'){
			popup.innerHTML = '';
			popup.appendChild(Auto_restart_device_div);
			popup.style.display = 'block';
			
		}
		var Auto_restart_device_switch = document.getElementById('Auto_restart_device_switch');
		var Auto_restart_device_time = document.getElementById('Auto_restart_device_time');
	}
	
	Auto_restart_device_switch.checked = data.Auto_restart_device_open;
	var times = Auto_restart_device_times;
	var time = (times[0] < 10 ? '0'+times[0] : times[0]) + ':' + (times[1] < 10 ? '0'+times[1] : times[1]);
	Auto_restart_device_time.value = time;
	
}


function create_text_window(title_text,value){
	if(title_text == null){
		title_text = '提示';
	}
	if(text_window_div != null){
		text_window_div.innerHTML = '';
		text_window_div = null;
	}
	if(text_window_div == null){
		text_window_div = document.createElement('div');
		text_window_div.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:350px;';
		
		popup.innerHTML = '';
		popup.appendChild(text_window_div);
		popup.style.display = 'block';
	
		var title_div = document.createElement('div');
		title_div.style = 'background-color: rgba(0,160,255,1);border-radius:15px;';
		text_window_div.appendChild(title_div);
	
		var div1 = document.createElement('div');//占位
		div1.style.height = '1px';
		var div = document.createElement('div');
		div.style = 'border-radius:15px;';
		div.appendChild(div1);
		var title = document.createElement('h3');
		title.style = 'font-size: 16px;color:#ffffff';
		title.title = title_text;
		title.innerHTML = title.title;
		div.appendChild(title);
		title_div.appendChild(div);
		var content_div = document.createElement('div');
		content_div.style = 'background-color: #ffffff;max-width:600px;overflow-x:hidden;overflow-y:auto;';
		content_div.style.maxHeight = '500px';
		if(document.body.clientHeight < 600){
			content_div.style.maxHeight = document.body.clientHeight - 100;
		}
		title_div.appendChild(content_div);
		var text_div = document.createElement('div');
		text_div.id = 'text_window_text';
		text_div.style = 'color: rgba(238, 0, 0, 1);text-align:left;margin: 10px 30px;';
		content_div.appendChild(text_div);
		//var div1 = document.createElement('div');//占位
		//div1.style.height = '10px';
		//content_div.appendChild(div1);
		var close_btn = document.createElement('span');
		close_btn.className = 'span1';
		close_btn.style.borderRadius = '0 0 15px 15px';
		close_btn.innerHTML = '关闭';
		close_btn.onclick = function(){
			popup.onclose();
		};
		var hr = document.createElement('hr');
		hr.className = 'hr1';
		//title_div.appendChild(hr);
		title_div.appendChild(close_btn);
	}else{
		if(popup.style.display != 'block'){
			popup.innerHTML = '';
			popup.appendChild(text_window_div);
			popup.style.display = 'block';
		}
		var text_div = document.getElementById('text_window_text');
	}
	text_div.innerHTML = '';
	var arr = value.split("\r\n");
	for(var index in arr){
		text_div.innerHTML += arr[index]+'<br>';
	}
	
	
}

function create_color_selection(){
	
	if(color_selection_div == null){
		color_selection_div = document.createElement('div');
		color_selection_div.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:350px;';
		
		popup.innerHTML = '';
		popup.appendChild(color_selection_div);
		popup.style.display = 'block';
			
		var title_div = document.createElement('div');
		title_div.style = 'background-color: rgba(0,160,255,1);border-radius:15px;';
		color_selection_div.appendChild(title_div);
		
		var div1 = document.createElement('div');//占位
		div1.style.height = '1px';
		var div = document.createElement('div');
		div.style = 'border-radius:15px;';
		div.appendChild(div1);
		var title = document.createElement('h3');
		title.style = 'font-size: 16px;color:#ffffff';
		title.title = '设置氛围灯颜色';
		title.innerHTML = title.title;
		div.appendChild(title);
		title_div.appendChild(div);
		var content_div = document.createElement('div');
		content_div.style = 'background-color: #ffffff;border-radius:0 0 15px 15px; margin: 15px auto;max-height:500px;overflow-x:hidden;overflow-y:auto;';
		title_div.appendChild(content_div);
		var settings_div = document.createElement('div');
		content_div.appendChild(settings_div);
		var div1 = document.createElement('div');//占位
		div1.style.height = '10px';
		settings_div.appendChild(div1);
	
		var text = document.createElement('text');
		text.style.margin = '8px';
		text.innerHTML = "选择颜色：";
		settings_div.appendChild(text);
	
		var div1 = document.createElement('div');//占位
		div1.style.height = '10px';
		settings_div.appendChild(div1);
	
		var color_selection = document.createElement('input');
		color_selection.id = 'color_selection';
		color_selection.type = 'color';
		color_selection.style.width = '200px';
		color_selection.style.height = '120px';
		color_selection.onchange = function(){
			var color_value = document.getElementById('color_value');
			color_value.value = this.value.toLocaleUpperCase();
			
		};
		settings_div.appendChild(color_selection);
	
	
		var div1 = document.createElement('div');//占位
		div1.style.height = '10px';
		settings_div.appendChild(div1);
		
		var text = document.createElement('text');
		text.innerHTML = "颜色值：";
		settings_div.appendChild(text);
		var color_value = document.createElement('input');
		color_value.type = 'text';
		color_value.id = 'color_value';
		color_value.style = 'height:40px;width:136px';
		color_value.onchange = function(){
			var color_selection = document.getElementById('color_selection');
			color_selection.value = this.value.toLocaleUpperCase();;
		};
		settings_div.appendChild(color_value);
		
		var div1 = document.createElement('div');//占位
		div1.style.height = '10px';
		settings_div.appendChild(div1);
		
		var btn = document.createElement('input');
		btn.type = 'button';
		btn.value = '保存';
		btn.className = 'btn';
		btn.style.margin = '5px';
		btn.style.padding = '10px 23px';
		btn.onclick = function(){
			var color_value = document.getElementById('color_value');
			if(color_value.value != ''){
				var color = '0x'+color_value.value.substr(1);
				console.log(color);
				color = parseInt(color);
				console.log(color);
				ws_send(JSON.stringify({type:'send_message',type_id:'modify_color',what:4,arg1:70,arg2:color}));
			}else{
				alert('颜色值错误！');
			}
		};
		settings_div.appendChild(btn);
		
		
		var div1 = document.createElement('div');//占位
		div1.style.height = '10px';
		settings_div.appendChild(div1);
	}else{
		if(popup.style.display != 'block'){
			popup.innerHTML = '';
			popup.appendChild(color_selection_div);
			popup.style.display = 'block';
		}
		var color_selection = document.getElementById('color_selection');
		var color_value = document.getElementById('color_value');
	}
	
	if(info.music_light_color != null){
		var hex_color = info.music_light_color.toString(16);
		for(var i=hex_color.length;i<6;i++){
			hex_color = '0'+hex_color;
		}
		var color = '#'+hex_color.toLocaleUpperCase();
		color_selection.value = color;
		color_value.value = color;
	}
}


function create_music_info_window(data){
	var temp_api_musicinfo = [];
	console.log(data);
	music_info_div = document.createElement('div');
	music_info_div.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:350px;';
	
	popup.innerHTML = '';
	popup.appendChild(music_info_div);
	popup.style.display = 'block';
	
	var title_div = document.createElement('div');
	title_div.style = 'background-color: rgba(0,160,255,1);border-radius:15px;';
	music_info_div.appendChild(title_div);
	
	var div = document.createElement('div');
	div.style = 'display: flex; justify-content: center;';
	title_div.appendChild(div);
	
	var pic = document.createElement('img');
	pic.style = 'border-radius: 10%; height: 66px; margin: 10px 10px 0px 5px;';
	div.appendChild(pic);
	
	var div1 = document.createElement('div');
	div1.style = 'margin: 10px 10px 0px 0px; display: flex; justify-content: center; align-items: flex-start;flex-direction: column;';
	div.appendChild(div1);
	title_div.appendChild(div);
	var div = div1;
	
	var title = document.createElement('text');
	title.style = 'font-size: 16px; font-weight: bold; color: #ffffff; text-align:left;';
	
	var artist = document.createElement('text');
	artist.style = 'font-size: 12px; font-weight: bold; color: #ffffff; text-align:left;';
	
	div.appendChild(title);
	div.appendChild(artist);

	var option_div = document.createElement('div');
	option_div.style = 'background-color: #ffffff;border-radius:0 0 15px 15px; margin: 10px auto;max-height:500px;overflow-x:hidden;overflow-y:auto;';
	option_div.style.maxHeight = '500px';
	if(document.body.clientHeight < 600){
		option_div.style.maxHeight = document.body.clientHeight - 100;
	}
	title_div.appendChild(option_div);
	
	title.innerHTML = '正在获取歌曲信息，请稍候。。。';
	
	var option_list = [];
	
	option_list.push({title:'播放歌曲',onclick:function(){
		if(List.playIndex == data.index){
			popup.onclose();
			return;
		}
		send(null,null,'play',{index:data.index});
		popup.onclose();
	}});
	
	if(is_new_unisound){
		option_list.push({title:'收藏歌曲',onclick:function(){
			if(!confirm("确定要收藏["+get_music_title(data.music_info)+"]吗？")){
				popup.onclose();
				return;
			}
			ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'api',data:{type:'collect',music_info:data.music_info}}}));
			popup.onclose();
		}});
		option_list.push({title:'取消收藏',onclick:function(){
			if(!confirm("确定要取消收藏["+get_music_title(data.music_info)+"]吗？")){
				popup.onclose();
				return;
			}
			ws_send(JSON.stringify({type:'send_to_unisound',data:{type:'api',data:{type:'cancel_collect',music_info:data.music_info}}}));
			popup.onclose();
		}});
	}
	
	option_list.push({title:'歌曲信息',onclick:function(){
		var types = {'qq':"QQ音乐",
		"netease":"网易云音乐",
		"kuwo":"酷我音乐",
		"kugou":"酷狗音乐",
		"migu":"咪咕音乐",
		"5singyc":"5sing原创",
		"5singfc":"5sing翻唱",
		"5singbz":"5sing伴奏"
		};
		var text_arr = [];
		text_arr.push("歌曲名称："+temp_api_musicinfo.name);
		text_arr.push("歌手名称："+temp_api_musicinfo.artist);
		var arr = temp_api_musicinfo.id.split(',');
		var type = types[arr[1]];
		if(!type){
			if(arr[0].substring(0,6) == 'MUSIC_'){
				type = '酷我音乐';
				arr[0] = arr[0].substring(6);
			}else if(arr[0].substring(0,6) == 'local_'){
				type = '本地';
			}else{
				type = arr[1];
			}
		}
		var html = "<a style='color:rgba(238, 0, 0, 1);' target='_blank' href='"+temp_api_musicinfo.link+"'>"+arr[0]+"</a>";
		text_arr.push("歌曲ID："+html);
		text_arr.push("歌曲来源："+type);
		text_arr.push("------歌词------");
		if(typeof(temp_api_musicinfo.lrc) == 'string'){
			var arr = temp_api_musicinfo.lrc.match(/(\[\d{1,3}:\d{1,2}.\d{1,3}\])(.*)/g);
			for(var i in arr){
				//var time = arr[i].match(/(\[\d{1,3}:\d{1,2}.\d{1,3}\])/g);
				//var lrc_text = $.trim(arr[i].substring(arr[i].indexOf(time)+time.length));
				text_arr.push(arr[i]);
			}
		}
		create_text_window('歌曲信息',text_arr.join("\r\n"));
	}});
	
	var success = function(Data){
		if(Data.code == 1){
			temp_api_musicinfo = Data.data;
			
			title.innerHTML = Data.data.name;
			artist.innerHTML = Data.data.artist;
			pic.src = Data.data.pic;
			
			for(index in option_list){
				var tr = document.createElement('tr');
				tr.className = 'span1';
				tr.onclick  = option_list[index].onclick;
				var span = document.createElement('span');
				span.innerHTML = option_list[index].title;
				tr.appendChild(span);
				option_div.appendChild(tr);
				if(option_list.length-1 != index){
					var hr = document.createElement('hr');
					hr.className = 'hr';
					option_div.appendChild(hr);
				}
			}
			
		}else{
			title.innerHTML = '获取歌曲信息失败！';
		}
	};
	var error = function(){
		title.innerHTML = '获取歌曲信息失败！';
	};
	
	if(music_id.substring(0,6) == 'local_'){
		title.innerHTML = data.music_info.title;
		for(index in option_list){
			var tr = document.createElement('tr');
			tr.className = 'span1';
			tr.onclick  = option_list[index].onclick;
			var span = document.createElement('span');
			span.innerHTML = option_list[index].title;
			tr.appendChild(span);
			option_div.appendChild(tr);
			if(option_list.length-1 != index){
				var hr = document.createElement('hr');
				hr.className = 'hr';
				option_div.appendChild(hr);
			}
			break;
		}
		return;
		//var post_data = {info:data.music_info.itemId,file:data.music_info.title};
	}else{
		var post_data = {info:data.music_info.itemId,music_info:JSON.stringify(data.music_info)};
	}
	
	if(List.playIndex == data.index){
		success({code:1,data:api_music_info});
		return;
	}
	
	$.ajax({type:'POST',url:'http://music.wxfsq.com/music/index.php',data:post_data,dataType:'json',success:success,error:error});
	
	return;

}


function get_song_list(data){
	if(data.code == '200'){
		temp_song_list.time = new Date().getTime();
		temp_song_list.data = data;
	}else{
		temp_song_list.time = -1;
	}
	create_song_list_window(data);
}


function create_song_list_window(data){
	
	var song_list_div = document.getElementById('song_list_div');
	
	if(song_list_div == null){
		song_list_div = document.createElement('div');
		song_list_div.style = 'position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width: auto;min-width:350px;';
		
		popup.innerHTML = '';
		popup.appendChild(song_list_div);
		popup.style.display = 'block';
		
		var title_div = document.createElement('div');
		title_div.style = 'background-color: rgba(0,160,255,1);border-radius:15px;';
		song_list_div.appendChild(title_div);
		
		var div = document.createElement('div');
		div.style = 'height: 15px';
		title_div.appendChild(div);
		
		var title = document.createElement('text');
		title.style = 'font-size: 16px; font-weight: bold; color: #ffffff;';
		title.id = 'song_list_title';
		title.innerHTML = '正在加载歌单列表。。。';
		title_div.appendChild(title);
		
		var song_list_div = document.createElement('div');
		song_list_div.style = 'background-color: #ffffff;border-radius:0 0 15px 15px; margin: 15px auto; max-height:500px; overflow-x:hidden; overflow-y:auto; text-align:left;';
		song_list_div.id = 'song_list_div';
		song_list_div.style.maxHeight = '500px';
		
		if(document.body.clientHeight < 600){
			song_list_div.style.maxHeight = document.body.clientHeight - 100;
		}
		
		song_list_div.onclick = function(data){
			clearTimeout(listonclick_timer);
			
			var click = null;
			for(var i in data.path){
				if(data.path[i].localName == 'div' && data.path[i].className == 'click'){
					var click = data.path[i];
					break;
				}
			}
			
			if(click == null){
				click = data.target;
				if(click != null && click.className != 'click'){
					click = click.parentElement;
				}
				
				if(click != null && click.className != 'click'){
					click = null;
				}
			}
			
			if(click != null){
				var id = click.getAttribute('id');
				var text1 = click.getElementsByTagName('text1');
				
				if(!confirm('点播歌单['+text1[0].innerHTML+']？')){
					return;
				}
				
				ws_send(JSON.stringify({type:'send_message',what:65536,arg1:0,arg2:9,obj:id.toString()}));
				popup.onclose();
				switch_page(document.getElementById('btn_page_music'));
			}
			
		};
		
		title_div.appendChild(song_list_div);
	}
	
	if(data != null){
		var song_list_div = document.getElementById('song_list_div');
		var song_list_title = document.getElementById('song_list_title');
		if(data.code == 200){
			data = data.data;
			song_list_title.innerHTML = data.title;
			data = data.data;
			for(var key in data){
				var list = data[key].list;
				var div = document.createElement('div');
				div.style.height = '5px';
				song_list_div.appendChild(div);
				
				var title = document.createElement('text');
				title.style = 'font-size: 16px; color: #000000; margin: 0px 0px 0px 5px;';
				
				title.innerHTML = data[key].title + '['+list.length+']';
				song_list_div.appendChild(title);
		
				var div = document.createElement('div');
				div.style.height = '5px';
				song_list_div.appendChild(div);
				
				for(var index in list){
					var div = document.createElement('div');
					div.className = 'click';
					div.setAttribute('id',list[index].id);
					song_list_div.appendChild(div);
					
					var pic = document.createElement('img');
					pic.style = 'border-radius: 10%;  margin: 0px 10px 0px 5px; min-height: 66px; min-width: 66px; max-height: 66px; max-width: 66px;';
					div.appendChild(pic);
					
					var div1 = document.createElement('div');
					div1.style = 'margin: 0px 5px 0px 0px; display: flex; justify-content: center; align-items: flex-start;flex-direction: column;';
					div.appendChild(div1);
					song_list_div.appendChild(div);
					var div = div1;
					
					var title = document.createElement('text1');
					title.style = 'font-size: 16px; text-align:left;';
					div.appendChild(title);
					
					var content = document.createElement('text1');
					content.style = 'font-size: 12px; text-align:left;';
					div.appendChild(content);
					
					pic.src = list[index].pic;
					title.innerHTML = list[index].title;
					content.innerHTML = list[index].content;
				}
			}
		}else{
			song_list_title.innerHTML = data.msg;
		}
	}
	
	
}

function compressImage(file,d) {
      // 参数file,是通过input 选择本地文件获取的
      return new Promise((resolve, reject) => {
        const { type, name } = file
        let img = new Image()
        // 创建一个reader实例
        let reader = new FileReader()

        // 读取拿到的文件
        reader.readAsDataURL(file)
        reader.onload = function(e) {
          // 文件加载成功后去转成Img对象，为了拿到图片的原始宽高
          img.src = e.target.result
          img.onload = function() {
            // 创建画布canvas
            let canvas = document.createElement('canvas')
            let content = canvas.getContext('2d')

            // 设置画布的宽高
			let width = img.width;
			let height = img.height;
			if(width > 1920 || height > 1920){
				if(width > height){
					width = 1920;
					//height = 1080;
				}else{
					//height = 1920;
					width = 1080;
				}
			}
            canvas.width = width  // 需要压缩到的图片宽度
            canvas.height = width * (img.height / img.width)
            // 将图片画在画布上
            content.drawImage(img, 0, 0, canvas.width, canvas.height)
            //画布转成blob格式的图片
            canvas.toBlob(function(blob) {
              // blob 格式的图片 转成file对象，这里主要看接口支不支持blob格式的文件上传，如果支持就没有必要转
              let file = new File([blob], name, { type: type })
              resolve({type: type, compressFile: file})
            }, `image/jpeg`, d)  // 0.7 是文件压缩程度//`image/${type.split('/')[1]}`
          }
        }
      });
}

function findTextColor(colorValue) {
    // #123456或者rgb(12,34,56)转为rgb数组[12,34,56]
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var that = colorValue;
    if (/^(rgb|RGB)/.test(that)) {
        // 处理rgb转为数组
        var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        return resBgColor(aColor);
    } else if (reg.test(that)) {
        // 处理十六进制色值
        var sColor = colorValue.toLowerCase();
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return resBgColor(sColorChange);
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/**
 * 转换字体颜色
 * 
 * @param {array} rgbArr rgb数组
 */
//https://juejin.cn/post/6844903960487149582
function resBgColor(rgbArr) {
    // 当color值大于128时,color值偏向255,即#ffffff,此时字体颜色应为#000000
    // 当color值小于128时,color值偏向0,即#000000,此时字体颜色应为#ffffff
    var color = 0.213 * rgbArr[0] + 0.715 * rgbArr[1] + 0.072 * rgbArr[2] > 255 / 2;
    return color? '#000000': '#ffffff'
}

function get_background_data(){
	var body_style = document.getElementById("body_style");
	var css_text = body_style.innerHTML;
	if(css_text != ''){
		var img_data = css_text.substring(css_text.indexOf('url("')+5,css_text.lastIndexOf('")'));
		return img_data;
	}
	return '';
}


function get_background_color(x,y,fun){
	var img_data = get_background_data();
	if(img_data != ''){
		var img = document.createElement('img');
		img.src = img_data;
		var canvas = null;
		img.onload = function(){
			canvas = document.createElement('canvas');
			
			window.canvas = canvas;
			window.img = img;
		
			canvas.height = this.height;
			canvas.width = this.width;
			canvas.getContext('2d').drawImage(img, 0, 0);
			fun(canvas.getPixelColor(x,y).hex);
		}
	}else{
		var rgb_color = document.body.style.backgroundColor;
		var arr = rgb_color.substr(4,rgb_color.length-1).split(',');
		var color = '';
		for(var i in arr){
			color += parseInt(arr[i]).toString(16);
		}
		fun('#'+color);
	}
}

function get_background_color1(fun){
	var img_data = get_background_data();
	if(img_data != ''){
		var img = document.createElement('img');
		img.src = img_data;
		var canvas = null;
		img.onload = function(){
			canvas = document.createElement('canvas');
			
			window.canvas = canvas;
			window.img = img;
		
			canvas.height = this.height;
			canvas.width = this.width;
			canvas.getContext('2d').drawImage(img, 0, 0);
			fun(canvas.getPixelColor(parseInt(canvas.width/2),10).hex);
		}
	}else{
		var rgb_color = document.body.style.backgroundColor;
		var arr = rgb_color.substr(4,rgb_color.length-1).split(',');
		var color = '';
		for(var i in arr){
			color += parseInt(arr[i]).toString(16);
		}
		fun('#'+color);
	}
}

function update_StatusBar(){
	if(typeof(plus) != 'undefined'){
		var StatusBar_div = document.getElementById('StatusBar');
		if(plus.navigator.isImmersedStatusbar()){
			StatusBar_div.style.height = (parseInt(plus.navigator.getStatusbarHeight()/2)+10) + 'px';
            StatusBar_div.style.display = 'block';
		}else{
			StatusBar_div.style.display = 'none';
            get_background_color1(function(color){
				plus.navigator.setStatusBarBackground(color);
				if(findTextColor(color) == '#000000'){
					plus.navigator.setStatusBarStyle('dark');
				}else{
					plus.navigator.setStatusBarStyle('light');
				}
			});
		}
		//plus.navigator.setFullscreen(true);//全屏
	}
	main_div.style = 'position: fixed; z-index: 0; left: 0; top: 0; width: 100%; height: 100%; overflow: auto;background-color: rgba(0,0,0,0.0);';
	var BackgroundBlurValue = localStorage.getItem(hostname+'_BackgroundBlur');
	if(BackgroundBlurValue == null || BackgroundBlurValue == ''){
		BackgroundBlurValue = '0';
	}
	background_div.style.filter = 'blur('+BackgroundBlurValue+'px)';
	if(parseInt(BackgroundBlurValue) > 0){
		//main_div.style = 'position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto;background-color: rgba(0,0,0,0.1);';
	}
	divs.style.width = '96%';
}


function getparam(keys){
	if(typeof(keys) == 'string'){
		keys = [keys];
	}
	var list = [];
	var num = 0;
	var arr = getparam_arr();
	for(var index in keys){
		var key = keys[index];
		if(arr.hasOwnProperty(key)){
			list[key] = arr[key];
			num++;
		}
	}
	if(num < 1){
		return null;
	}
	return list;
}

function putparam(list){
	var arr = getparam_arr();
	for(var key in list){
		arr[key] = list[key];
	}
	setparam_arr(arr);
}

function delparam(keys){
	if(typeof(keys) == 'string'){
		keys = [keys];
	}
	var num = 0;
	var arr = getparam_arr();
	for(var index in keys){
		var key = keys[index];
		if(arr.hasOwnProperty(key)){
			delete arr[key];
			num++;
		}
	}
	if(num > 0){
		setparam_arr(arr);
	}
	return num;
}

function getparam_arr(){
	var list = [];
	var arr = location.search.substring(1).split('&');
	for(var index in arr){
		var arr1 = arr[index].split('=');
		if(arr1[0] != ''){
			if(arr1.length < 2){
				list[arr1[0]] = null;
			}else{
				list[arr1[0]] = arr1[1];
			}
		}
	}
	return list;
}

function setparam_arr(list){
	var arr = [];
	for(var key in list){
		if(list[key] === null){
			arr.push(key);
		}else{
			arr.push(key + '=' + list[key]);
		}
	}
	window.history.pushState(null, document.title, (arr.length > 0 ? '/?' : '/') + arr.join('&'));
}

function update_device_list(data){
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
			var arr = []
			if(Object.keys(device_list[i]).length > Object.keys(data).length){
				arr = device_list[i];
			}else{
				arr = data;
							}
			for(var key in arr){
				if(data[key] != device_list[i][key]){
					if(data[key]){
						device_list[i][key] = data[key];
					}
				}
			}
			is = true;
			break;
		}
	}
	if(!is){
		device_list.push(data);
	}
	localStorage.setItem('device_list',JSON.stringify(device_list));
}

function ws_send(data){
	if(ws != null && ws.readyState == 1){
		ws.send(data);
	}
}

function load(){
	var h3s = document.getElementsByTagName('h3');
	if(h3s.length > 0){
		h3s[0].innerHTML = '页面加载中。。';
	}
	
	main_div.style = 'height: 100%';
	document.body.appendChild(main_div);
	
	if(location.href.indexOf('message') > -1){
		return;
	}
	var time = getCookie('time');
	if(!time){
		time = new Date().getTime();
		setCookie('time',time,604800);
	}
	
	var head = "<meta charset='UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1,user-scalable=0,maximum-scale=1,viewport-fit=cover'><meta name='format-detection' content='telephone=no'><meta name='renderer' content='webkit'/><meta name='force-rendering' content='webkit'/><meta http-equiv='X-UA-Compatible' content='IE=Edge,chrome=1'/><title>R1音箱控制页面</title><link rel='stylesheet' href='http://"+control_host+"/new_r1_control.css?t="+time+"'/><link rel='shortcut icon' href='/favicon.ico' sizes='256x256'/><meta name='apple-mobile-web-app-capable' content='yes'><meta name='apple-touch-fullscreen' content='yes'><meta name='apple-mobile-web-app-status-bar-style' content='black'><meta name='full-screen' content='yes'><meta name='browsermode' content='application'><meta name='x5-fullscreen' content='true'><meta name='x5-page-mode' content='app'><meta name='keywords' content='R1,斐讯R1,R1音箱,R1音箱控制,R1音箱控制页面'>";
	
    document.getElementsByTagName("head")[0].innerHTML = head;
	
	var div = document.createElement('div');
	div.id = 'StatusBar';
	div.style.display = 'none';
	main_div.appendChild(div);
	
	if(location.href.indexOf('debug') > -1){
		load_console();
	}
	
	main_div.appendChild(divs);
    divs.id = 'divs';
    divs.style = 'text-align: center;display:block;margin:0px auto;';
    //document.getElementsByTagName("body")[0].innerHTML = "" + document.getElementsByTagName("body")[0].innerHTML;;
    divs.innerHTML = '';
	divs.appendChild(h3);
	divs.appendChild(login_div);
	
	
	popup.className = 'popup2';
	popup.style = 'text-align: center;';
	popup.onclose = function(){
		setTimeout(function(){
			popup.innerHTML = '';
			popup.style.display = "none";
		},100);
	};
	main_div.appendChild(popup);
	
    var script = document.createElement('script');
	script.onerror = function(){
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'http://'+control_host+'/jquery-3.6.0.min.js';
		main_div.appendChild(script);
	}
    script.type = 'text/javascript';
	script.src = 'jquery-3.6.0.min.js';
    main_div.appendChild(script);
	
	//var script = document.createElement('script');
	//script.type = 'text/javascript';
	//script.src = 'http://'+control_host+'/getcanvaspixelcolor.js';
	//main_div.appendChild(script);
	
    var div = document.createElement('div');
    div.id = 'qun_div';
    div.style = 'position: absolute; left: 5px; z-index: 0;';
    if(window.screen.width > 800){
		div.style = 'position: absolute; left: 5px; z-index: 0; white-space:nowrap; word-break:keep-all; overflow:hidden; text-overflow:ellipsis; max-width:40%';
	}
	
	if(typeof(beian) == 'string'){
		var div = document.createElement('div');
		div.id = 'beian_div';
		div.style = 'position: relative;';
		
		var div1 = document.createElement('div');
		div1.style = 'position: absolute; left: 0; right: 0; text-align: center;';
		div1.innerHTML = "<a style='color:rgba(238, 0, 0, 1);' target='_blank' href='https://beian.miit.gov.cn/'>"+beian+"</a>";
		div.appendChild(div1);
		
		if(window.screen.width > 800){
			main_div.appendChild(div);
		}
	}
	
    var div = document.createElement('div');
    div.id = 'ver_div';
    div.style = 'position: absolute; right:5px; color:rgba(238, 0, 0, 1);';
    main_div.appendChild(div);
	
	var div = document.createElement('div');//占位
	div.style.height = '18px';
	main_div.appendChild(div);
	document.addEventListener('plusready',function(){
		update_StatusBar();
	});
	
}

function load_console(){
	if(document.getElementById('console_script') != null){
		return;
	}
	var script = document.createElement('script');
	script.id = 'console_script';
	script.onerror = function(){
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'http://unpkg.com/vconsole@latest/dist/vconsole.min.js';
		script.onload = function(){
			window.mVConsole = new window.VConsole();
		};
		main_div.appendChild(script);
	};
	script.type = 'text/javascript';
	script.src = 'http://'+control_host+'/js/vconsole.min.js';
	script.onload = function(){
		window.mVConsole = new window.VConsole();
	};
	main_div.appendChild(script);
}

function no_referrer(){
	var meta = document.createElement('meta');
	meta.name = 'referrer';
	meta.content = 'never';
	document.getElementsByTagName('head')[0].appendChild(meta);
}

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
