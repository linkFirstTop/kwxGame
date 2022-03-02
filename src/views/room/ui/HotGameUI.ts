module room {
	export class HotGameUI extends eui.Component{
		public constructor() {
			super();

			this.init();
		}
		private gContent:eui.Group;
		private imgIcon:eui.Image;
		private itemScroll:eui.Scroller;
		private gItems:eui.Group;
		private arrList:Array<any> = [];
		private arrGameNum:Array<any> = [];
		private isOpen:boolean = true;
		private isRandom:boolean = false;
		private init():void{
			this.gContent = new eui.Group();
			this.addChild(this.gContent);
			let imgbg:eui.Image = new eui.Image();
			this.gContent.addChild(imgbg);

			imgbg.source = Global.commURL + "/hotgameLanguage/hotgameBg.png";

			this.itemScroll = new eui.Scroller();
			this.gContent.addChild(this.itemScroll);
			this.itemScroll.width = 240;
			this.itemScroll.height = 860;
			this.itemScroll.x = 5;
			this.itemScroll.y = 15;

			this.gItems = new eui.Group();
			this.gContent.addChild(this.gItems);
			this.itemScroll.viewport = this.gItems;

			this.imgIcon = new eui.Image();
			this.gContent.addChild(this.imgIcon);
			this.imgIcon.source = Global.commURL + "/hotgameLanguage/"+Global.language+"/hotgameTitle.png";
			this.imgIcon.x = 242;
			this.imgIcon.verticalCenter = 0;
			this.imgIcon.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShowUI,this);

			let maskbg:eui.Image = new eui.Image();
			this.addChildAt(maskbg,0);
			maskbg.source = "black_png";
			maskbg.width = 320;
			maskbg.height = 900;
			
			this.mask = maskbg;
			
			this.visible = false;
		}
		public getGameList():void{
			RES.getResByUrl(Global.commURL + "pbConfig.json?ver="+Math.random()*100,function(obj){
				let data = obj;
				this.checkChannel(data.hotGame);
			},this,RES.ResourceItem.TYPE_JSON);
		}
		/*屏蔽某些渠道不显示热门推荐*/
		private checkChannel(str:string):void{
			let arrChannel:Array<string> = str.split(",");
			if(arrChannel.length > 0){
				for(let i:number = 0;i < arrChannel.length;i++){
					if(arrChannel[i] == Global.channel){
						return;
					}
					if(arrChannel[i] == "random"){//随机排序
						this.isRandom = true;
					}
				}
			}
			if(this.arrList.length == 0){
				BaseHttpRequest.sendRequestGetOnce(Global.baseURL+"GetGameList", this.onGetGameList, this, 'token=' + Global.token);
			}
			
		}
		private onShowUI():void{
			this.isOpen = !this.isOpen;
			if(this.isOpen){
				egret.Tween.get(this.gContent).to({x:0},100);
			}else{
				egret.Tween.get(this.gContent).to({x:-246},100);
			}
		}
		private onGetGameList(evt:egret.Event):void{
			var json = evt.target.data;
			if(json==""){
				return;
			}
			var jsondata = eval("("+json+")");
			if(jsondata.state == 0 && jsondata.value != null){
				this.addItem(jsondata.value);
			}
		}
		private addItem(arr:Array<any>):void{
			this.arrList = [];
			for(var i:number = 0;i < arr.length;i++){
				let info:any = arr[i];
				if(info.game > 0 && info.game != Global.gameID && info.isable == 1){//gameid如果是自己就不显示 未开放也不显示
					this.arrList.push(info);
				}
			}
			if(this.arrList.length > 0){
				if(this.isRandom){
					this.arrList.sort(this.randomSort);
				}else{
					this.arrList.sort(this.compareActivity);
				}
				
			}
			this.getOnlineNum();
		}
		private getOnlineNum():void{
			/*egret.clearTimeout(this.timeID);
			Global.getURLInfo("getOnlineNumber",'username=' + Global.userName + '&action=onlinenumber');
			this.timeID = egret.setTimeout(this.getOnlineNum,this,30000);*/
			BaseHttpRequest.sendRequestGetOnce(Global.baseURL+'GetOnlineNumber', this.onLineNumber, this, '');
		}
		private onLineNumber(evt:egret.Event):void{
			var json = evt.target.data;
			if(json==""){
				return;
			}
			var jsondata = eval("("+json+")");
			if(jsondata.state == 0 && jsondata.value != null){
				var oneNum:number = 0;
				this.arrGameNum = jsondata.value;
				if(this.arrGameNum.length > 0){
					for(var i:number = 0;i < this.arrGameNum.length;i++){
						var item = this.arrGameNum[i];
						for(var j:number = 0;j < this.arrList.length;j++){
							var gameInfo = this.arrList[j];
							if(gameInfo.game == item.game_type){
								oneNum = item.online_number;
								item.online_number = oneNum;
								break ;
							}
						}
					}
					this.showAllGameList();
				}
			}
		}
		private showAllGameList():void{
			if(this.gItems.numChildren == 0){
				this.showTypeGameList();
			}else{
				for(var i:number = 0;i < this.gItems.numChildren;i++){
					var item:HotGameItem = this.gItems.getChildAt(i) as HotGameItem;
					for(var j:number = 0;j < this.arrGameNum.length;j++){
						var info = this.arrGameNum[j];
						if(item.gameID == info.game_type){
							item.setNumber(info.online_number);
							break ;
						}
					}
				}
			}
		}
		private clearItems():void{
			while(this.gItems.numChildren > 0){
				let item = this.gItems.removeChildAt(0);
				item = null;
			}
		}
		/*根据游戏类型显示游戏列表*/
		private showTypeGameList():void{
			this.clearItems();
			let count:number = 0;
			for(var i:number = 0;i < this.arrList.length;i++){
				var obj = this.arrList[i];
				if(obj.channel == Global.channel&&obj.category.indexOf("10")>-1){//配置的推荐游戏
					let item:HotGameItem = new HotGameItem();
					this.gItems.addChild(item);
					item.setItem(this.arrList[i]);
					item.y = 190*count;
					for(var j:number = 0;j < this.arrGameNum.length;j++){
						var info = this.arrGameNum[j];
						if(item.gameID == info.game_type){
							item.setNumber(info.online_number);
							break ;
						}
					}
					count += 1;
				}
			}
			if(this.gItems.numChildren > 0){
				this.visible = true;
			}
		}
		/*游戏列表排序*/
		private compareActivity(a: any, b: any): number {
			if(a.order){
				if (Number(a.order) > Number(b.order))
					return -1;
				else if (Number(a.order) < Number(b.order))
					return 1;
			}else{
				if (a.activity > b.activity)
					return -1;
				else if (a.activity < b.activity)
					return 1;
			}
		}

		private randomSort(a:any,b:any):number{
			if(Math.random() > 0.5){
				return -1;
			}else{
				return 1;
			}	
		}
	}
}
class HotGameItem extends eui.Component{
		public constructor() {
			super();
			this.init();
		}
		private gameURL:string = "";
		public gameID:string = "" ;
		private img:eui.Image;
		private lbNum:eui.Label;
		private init():void{
			this.width = 228;
			this.height = 185;

			this.img = new eui.Image();
			this.addChild(this.img);
			
			let gNum:eui.Group = new eui.Group();
			this.addChild(gNum);
			let imgNum:eui.Image = new eui.Image();
			gNum.addChild(imgNum);
			imgNum.source = Global.commURL + "/hotgameLanguage/hotgameNum.png";

			gNum.height = 20;
			gNum.x = 152;
			gNum.y = 5;

			this.lbNum = new eui.Label();
			gNum.addChild(this.lbNum);
			this.lbNum.text = ""+0;
			this.lbNum.horizontalCenter = 8;
			this.lbNum.verticalCenter = 2;
			this.lbNum.size = 20;

			let rect:eui.Rect = new eui.Rect();
			this.addChild(rect);
			/*rect.ellipseWidth = 180;
			rect.ellipseHeight = 200;*/
			rect.width = 228;
			rect.height = 185;
			rect.fillAlpha = 0;
			rect.fillColor = 0xff0000;
			rect.horizontalCenter = 0;
			rect.verticalCenter = 15;
		

			rect.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onItemClick,this);
		}
		private onItemClick():void{
			let url:string = "";
			if(this.gameURL != ""){
				try {
					window["sendUserClick"](Global.userName,Global.gameID,100,this.gameID);
				} catch (error) {}
				let strHall:string = egret.getOption("showHall");
				if(strHall == ""){
					url = this.gameURL + "?token="+Global.token;
				}else{
					url = this.gameURL + "?token="+Global.token+"&showHall="+strHall;
				}
				window.location.href = url;
			}
		}
		public setItem(info:any):void{
			this.gameID = info.game;
			this.gameURL = info.url;
			this.img.source = Global.commURL + "hotgameLanguage/"+Global.language+"/icon/" + "hotGame"+this.gameID+".png?"+Math.random()*100;
		}
		public setNumber(n:number):void{
			this.lbNum.text = ""+n;
		}
}