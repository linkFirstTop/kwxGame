class ScreenManager {
 
	private static _baseUI: egret.DisplayObjectContainer;
	/**构造 */
	public constructor(ui: egret.DisplayObjectContainer) {
		if (egret.Capabilities.os.toLowerCase() != "ios" || !egret.Capabilities.isMobile)
		return;
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    	var btype:string = this.getBrowerType(); //判断是否Safari浏览器
		if(btype == "Sarfari"){//仅针对safari浏览器
			ScreenManager._baseUI = ui;
			window.addEventListener("resize", this.windowResizeHandler);
			this.windowResizeHandler(null);
		}
	}
	private getBrowerType():string{
		var ua = navigator.userAgent; //取得浏览器的userAgent字符串
		var browserType:string = "";
		if (ua.indexOf("AppleWebKit") > -1) {
			browserType = "Sarfari";
		}
		if (ua.indexOf("MQQBrowser") > -1) {
			browserType = "IOSQQBrowser";
		}
		if (ua.indexOf("CriOS") > -1) {
			browserType = "IOSChrome";
		}
		if (ua.indexOf("QihooBrowser") > -1) {
			browserType = "IOS360Browser";
		}
		//搜狗浏览器
		if (ua.indexOf("SogouMobileBrowser") > -1) {
			browserType = "IOSSogou";
		}
		//火狐浏览器
		if (ua.indexOf("FxiOS") > -1) {
			browserType = "IOSFirefox";
		}
		//百度浏览器
		if (ua.indexOf("baidubrowser") > -1) {
			browserType = "IOSBaidu";
		}
		//uc浏览器
		if (ua.indexOf("UCBrowser") > -1) {
			browserType = "IOSUC";
		}
		//遨游浏览器
		if (ua.indexOf("MXiOS") > -1) {
			browserType = "IOSAOYOU";
		}
		return browserType;
	} 
	private changeSize():void{
		if (window.innerHeight > window.innerWidth) {
			ScreenManager._baseUI.scaleY = 1;
			window.scrollTo(0,0);
			return;
		}
		else {
			if (window.innerHeight >= document.documentElement.clientHeight) {
				ScreenManager._baseUI.scaleY = 1;
				window.scrollTo(0,0);
				return;
			}
			else {
				ScreenManager._baseUI.scaleY = window.innerHeight/document.documentElement.clientHeight;
				window.scrollTo(0,0);
			}
		}
	}
	private windowResizeHandler(evt: any): void {
		if(window.parent == window){//独立页面
			this.changeSize();
		}else{//嵌入
			if(egret.getOption("showHall") == ""){//其他渠道嵌入(跨域，不能调用window.parent)
				this.changeSize();
			}else{//大厅打开 同一个域名，可以用
				if (window.parent.innerHeight > window.parent.innerWidth) {
					ScreenManager._baseUI.scaleX = ScreenManager._baseUI.scaleY = 1;
					ScreenManager._baseUI.x = 0;
					window.scrollTo(0,0);
					return;
				}else {
					if (window.parent.innerHeight >= window.parent.document.documentElement.clientHeight) {
						ScreenManager._baseUI.scaleX = ScreenManager._baseUI.scaleY = 1;
						ScreenManager._baseUI.x = 0;
						window.scrollTo(0,0);
						return;
					}else {
						let scale:number = Number((window.parent.innerHeight/window.parent.document.documentElement.clientHeight).toFixed(2));
						ScreenManager._baseUI.scaleX = ScreenManager._baseUI.scaleY = scale;
						ScreenManager._baseUI.x = (GameConfig.curWidth()-GameConfig.curWidth()*scale)/2;
						window.scrollTo(0,0);
					}
				}
			}
		}
	}
}