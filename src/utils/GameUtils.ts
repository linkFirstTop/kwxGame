/**
 *
 * @author 
 *
 */
class GameUtils {
    public static createBitmapByName(name: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 根据name关键字创建一个Bitmap对象。此name 是根据TexturePacker 组合成的一张位图
     */
    public static createBitmapFromSheet(name: string,sheetName: string = "gameRes"): egret.Bitmap {
        var sheet: egret.SpriteSheet = RES.getRes(sheetName);
        var texture: egret.Texture = sheet.getTexture(name);
        var result: egret.Bitmap = new egret.Bitmap();
        result.texture = texture;
        return result;
    }

    public static getTextureFromSheet(name: string,sheetName: string = "gameRes"): egret.Texture {
        var sheet: egret.SpriteSheet = RES.getRes(sheetName);
        var result: egret.Texture = sheet.getTexture(name);
        return result;
    }
    public static createText(size:number,color:number=0xffffff):egret.TextField{
        var txt: egret.TextField = new egret.TextField();
        txt.textAlign = egret.HorizontalAlign.LEFT;
        txt.fontFamily = "微软雅黑";
        txt.textColor = color;
        txt.size = size;
        return txt;
	}
    public static decodeString(source:any):egret.ByteArray{
        var result:egret.ByteArray = new egret.ByteArray();
        result.writeUTFBytes(source);
        return result;
    }
    
    public static encodeString(source:any):string
    {
        if(source == null){
            return "";
        }
        var bytes:egret.ByteArray = new egret.ByteArray(source.buffer);
        bytes.endian = egret.Endian.LITTLE_ENDIAN;
        bytes.position =  source.offset;
        var result:string = bytes.readUTFBytes(source.limit-source.offset);
        
        return result;
    }
    public static getUrl(url: string): string {

        return url != "" ? url : "";
    }
    /**
     * 去掉前后空格
     * @param str
     * @returns {string}
     */
    public static trimSpace(str:string):string {
        return str.replace(/^\s*(.*?)[\s\n]*$/g, '$1');
    }
	/*渠道兑换率*/
	public static getChangeNum():void{
		if(Global.strChange != ""){
			var strChannel:string = Global.userName.split("_")[0];
			var arr:Array<string> = Global.strChange.split("#");
			if(arr.length > 0){
				for(var i:number = 0;i < arr.length;i++){
					var str:string = arr[i];
					var arrEX:Array<string> = str.split(":");
					if(arrEX.length > 0){
						if(arrEX[0] == strChannel){
							Global.nChange = Number(arrEX[1]);
						}
					}
				}
			}
		}
	}
    public static addTouchTapListener(display: egret.DisplayObject,listener: Function,thisObj: any): void {
        var startX: number = -1;
        var startY: number = -1;
        display.touchEnabled = true;
        display.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(event: egret.TouchEvent) {
            startX = event.stageX;
            startY = event.stageY;
        },display);
        display.addEventListener(egret.TouchEvent.TOUCH_END,function(event: egret.TouchEvent) {
            if(Math.abs(startX - event.stageX) < 10 && Math.abs(startY - event.stageY) < 10) {
                listener.call(thisObj);
            }
            startX = -1;
            startY = -1;
        },display);
    }

    public static fixNumber(num: number): string {
        var result: string = "";
        if(num > 10000) {
            num = Math.floor(num / 10000);
            result = num.toString() + "w";
        }
        else {
            result = num.toString();
        }
        return result;
    }

    public static lock(key: string): void {
        var stage: egret.Stage = egret.MainContext.instance.stage;
        stage.touchEnabled = stage.touchChildren = false;
    }

    public static unlock(key: string): void {
        var stage: egret.Stage = egret.MainContext.instance.stage;
        stage.touchEnabled = stage.touchChildren = true;
    }


    public static replaceTextureByUrl(url: string,obj: egret.Bitmap) {
        RES.getResByUrl(url,function(texture): void {
            obj.texture = texture;
        },this,RES.ResourceItem.TYPE_IMAGE);
    }

    public static getIsTodayFirstIn(): boolean {
        var date: Date = new Date();
        var lastDate: string = window.localStorage.getItem("LoginDate");
        if(lastDate == null) {
            lastDate = date.getMonth().toString() + date.getDay().toString();
            window.localStorage.setItem("LoginDate",lastDate);
            return true;
        }
        else {
            var currentDate = date.getMonth().toString() + date.getDay().toString();
            window.localStorage.setItem("LoginDate",currentDate);
            return currentDate != lastDate;
        }
    }

    public static overLength(key: string, num: number = 12): string {
        var len :number = key.length;
        var newString: string= "";
        if(len>num) {
             newString = key.substring(0,num)+"...";
            return newString; 
        }else{
            for(var n:number=len;n<num+1;n++){
                key += "  ";
            }
            return key;
        }
    }

    public static frontLength(key:string,num:number = 3): string
    {
        var len :number = key.length;
        if(len>num){
            var newString: string = "..." + key.substring(key.length-num,key.length);
            return newString; 
        }else{
            return key;
        }
    }
    public static ReplaceChar(str:string,maxChar:number,del:number=0,replaceText:string="...",):string 
    {
        var step:number  = 0;
        if(str==null) return "";
        
        var copyStr:string ="";
        var fun:Function = function(item:string):Boolean{
            var zh_char:Array<string> = item.match(/[\u4E00-\u9FA5\uf900-\ufa2d]/ig);
            if(zh_char!=null&&zh_char.length!=0){
                return true;
            }
            return false;
        }
        for(var i:number = 0;i<str.length;i++){
            var itemStr:string = str.charAt(i);
            if(fun(itemStr)){
                step+=2;
            }else{
                step+=1;
            }
            if(step > maxChar){
                copyStr = copyStr.slice(0,maxChar-del);
                copyStr += replaceText;
                break;
            }
            copyStr += itemStr;
        }	
        return copyStr.toUpperCase();
    }
    public static  getCharLength(str:string):number{
			var step:number = 0;
			var fun:Function = function(item:String):Boolean{
				var zh_char:Array<string> = item.match(/[\u4E00-\u9FA5\uf900-\ufa2d]/ig);
				if(zh_char!=null&&zh_char.length!=0){
					return true;
				}
				return false;
			}
				
			for(var i:number = 0;i<str.length;i++){
				var itemStr:String = str.charAt(i);
				if(fun(itemStr)){
					step+=2;
				}else{
					step+=1;
				}
			}
			return step;
		}
		
		public static  ReplaceCharEx(str:string,maxChar:number,replaceText:string):string
		{
			if(str==null) return "";
			
			var copyStr:string = str;// str.substr(0,maxChar);
			
			var len:number = this.getCharLength(str);
			if(len>=maxChar){
				copyStr    = str.slice(0,maxChar-1);
				copyStr += replaceText;
			}else{
				for(var i:number = 0;i < maxChar-len+replaceText.length+1;i++){
					copyStr += "0";
				}
			}
			return copyStr;
		}
        public static getShowName(userName:string):string{
            var str:string = "";
            if(Global.userName == userName){
				str = Global.userName;
                if(Global.showName != ""){
                    if (Global.showName.length > 9) {
                        str = Global.showName.substr(0, 6) + "...";;
                    } else {
                        str = Global.showName;
                    }
                }
			}else{
				str = "***"+ userName.substr((userName.length-3),3);
			}
            return str.toUpperCase();
        }
}
