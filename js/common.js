function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function getQueryStringByName(name) {
    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}

function addcookie(name, value, expireHours = 0) {
    var cookieString = name + "=" + escape(value) + "; path=/";
    //判断是否设置过期时间
    if(expireHours>0){
        var date=new Date();
        date.setTime(date.getTime()+expireHours*1000*60); //多少分钟
        cookieString = cookieString + ";expires=" + date.toGMTString();
    }else{
        expireHours = 7 * 24;
        var date=new Date();
        date.setTime(date.getTime+expireHours*3600*1000);
        cookieString=cookieString+";expires="+date.toGMTString();
    }
    //console.log(cookieString);
    document.cookie = cookieString;
}

function getcookie(name) {
    var strcookie = document.cookie;
    var arrcookie = strcookie.split("; ");
    for (var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
        if (arr[0] == name) return arr[1];
    }
    return "";
}

function delCookie(name) { //删除cookie
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getcookie(name);
    if (cval != null) document.cookie = name + "=" + cval + "; path=/;expires=" + exp.toGMTString();
}
//删除cookie中所有定变量函数    
function delAllCookie(){
  delCookie('key');
  delCookie('username');
  delCookie('member_id');
  delCookie('lat');
  delCookie('lng');
}  

function logout(){
    delAllCookie();
    window.location = WapSiteUrl + '/member/login.html';
}

function checklogin(state) {
    if (state == 0) {
        location.href = WapSiteUrl + '/member/login.html';
        return false;
    } else {
        return true;
    }
}

function checkcleklogin(state) {
    if (state == 0) {
        location.href = WapSiteUrl + '/smqr/stafflogin.html';
        return false;
    } else {
        return true;
    }
}

function contains(arr, str) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === str) {
            return true;
        }
    }
    return false;
}

function buildUrl(type, data) {
    switch (type) {
        case 'keyword':
            return WapSiteUrl + '/tmpl/product_list.html?keyword=' + encodeURIComponent(data);
        case 'special':
            return WapSiteUrl + '/special.html?special_id=' + data;
        case 'goods':
            return WapSiteUrl + '/tmpl/product_detail.html?goods_id=' + data;
        case 'url':
            return data;
    }
    return WapSiteUrl;
}
//bottom nav 33 hao-v3 by 33h ao.com Qq 1244 986 40
$(function () {
    setTimeout(function () {
        if ($("#content .container").height() < $(window).height()) {
            $("#content .container").css("min-height", $(window).height());
        }
    }, 300);
    $("#bottom .nav .get_down").click(function () {
        $("#bottom .nav").animate({
            "bottom": "-50px"
        });
        $("#nav-tab").animate({
            "bottom": "0px"
        });
    });
    $("#nav-tab-btn").click(function () {
        $("#bottom .nav").animate({
            "bottom": "0px"
        });
        $("#nav-tab").animate({
            "bottom": "-40px"
        });

    });
    setTimeout(function () {
        $("#bottom .nav .get_down").click();
    }, 500);
    $("#scrollUp").click(function (t) {
        $("html, body").scrollTop(300);
        $("html, body").animate({
            scrollTop: 0
        }, 300);
        t.preventDefault()
    });
});

// 页面跳转返回浏览记录
function GetPageScroll() {
    var x, y;
    if (window.pageYOffset) { // all except IE
        y = window.pageYOffset;
        x = window.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) { // IE 6 Strict
        y = document.documentElement.scrollTop;
        x = document.documentElement.scrollLeft;
    } else if (document.body) { // all other IE
        y = document.body.scrollTop;
        x = document.body.scrollLeft;
    }
    //var storage = window.localStorage;
    addcookie('scrollTop', y, 2);
    //storage.pageScrollY=y
}

function getStorageY() {
    //var y=localStorage.getItem("pageScrollY");
    var y = getcookie('scrollTop');
    document.body.scrollTop = y
}
/**
 * 
 * 
 * @param {string} type  生成类型，到店借，转借
 * @param {string} str 字符串
 * @param {string} id 显示在什么地方
 */
function createQrCode(type,str,id){
    $var = type+","+str;
	jQuery(function(){
	    jQuery('#'+id).qrcode($var);
	})
}

//时间格式
function formatDate(nS) {
    var now = new Date(parseInt(nS) * 1000);
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //小于10的在前面补0
    if (month < 10) {
        month = '0' + month;
    }
    if (date < 10) {
        date = '0' + date;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}

template.helper('$getLocalDate', function (nS) {
    var d = new Date(parseInt(nS) * 1000);
    var s = '';
    s += d.getFullYear() + '-';
    var month = d.getMonth() + 1;
    if(month < 10){
        s += '0' + month + '-';
    }else{
        s += month + '-';
    }
    //s += (month) + '-';
    if (d.getDate() < 10) {
        s += "0" + d.getDate() + ' ';
    } else {
        s += d.getDate() + ' ';
    }
    //console.log(s);
    if (d.getHours() < 10) {
        s += "0" + d.getHours() + ':';
    } else {
        s += d.getHours() + ':';
    }
    if (d.getMinutes() < 10) {
        s += "0" + d.getMinutes() + ':';
    } else {
        s += d.getMinutes() + ':';
    }
    if (d.getSeconds() < 10) {
        s += "0" + d.getSeconds() + '';
    } else {
        s += d.getSeconds() + '';
    }
    return s;
});
template.helper('$getLocalYD', function (nS) {
  var d = new Date(parseInt(nS) * 1000);
  var s = '';
  s += d.getFullYear() + '-';
  s += (d.getMonth() + 1) + '-';
  if (d.getDate() < 10) {
    s += "0" + d.getDate() + ' ';
  } else {
    s += d.getDate() + ' ';
  }
  return s;
});

template.helper('$getLocalMd', function (nS) {
  var d = new Date(parseInt(nS) * 1000);
  var s = '';
  var month = d.getMonth() + 1;
  if(month < 10){
    s += "0" + month + '月';
   }else{
    s +=  month + '月';
   }
  if (d.getDate() < 10) {
    s += "0" + d.getDate() + '日';
  } else {
    s += d.getDate() + '日';
  }
  return s;
});

//storage 封装
function Util(){
    this.prefix_ = 'ibookway_';
    this.getSessionStorageItem = function(key){
        return sessionStorage.getItem(this.prefix_+key);
    };
    this.setSessionStorageItem = function(key, value){
        return sessionStorage.setItem(this.prefix_+key, value);
    };
    this.removeSessionStorageItem = function(key){
        return sessionStorage.removeItem(this.prefix_+key);
    };
    this.clearSessionStorage = function(){
        return sessionStorage.clear();
    }
}