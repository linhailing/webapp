var SiteUrl = "http://test.ibookway.cn/";
//var SiteUrl_s = "http://localhost/sjshop/";
var ApiUrl = SiteUrl + "mobile";
var pagesize = 10;
var AndroidSiteUrl = SiteUrl+"mobile/apk/AndroidShopNC2014Moblie.apk";


var WapSiteUrl = SiteUrl+"wap";
//var WapSiteUrl = SiteUrl_s + "wap";

//微信登陆插件start
//test
var Appid ="wx9af969088cb3a75d";//"wx1542eb07720bfb44";//"wx9af969088cb3a75d";//"wxe4567fe7a1132d76";
//www
//var Appid ="wx9af969088cb3a75d";
var Redirect_uri =encodeURIComponent(ApiUrl);  //urlencode返回链接
var url=window.location.href;

if(url.substring(url.length-1)=="\/")
	url=url.substring(0,url.length-1);

//var Redirect_uri =encodeURIComponent(url);

//微信登陆插件end*/

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

