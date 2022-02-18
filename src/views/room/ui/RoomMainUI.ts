module room {
	export class RoomMainUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}
		private imgTopbg:eui.Image;
		private imgInfobg:eui.Image;
		private itemGroup:eui.Group;
		private gTop:eui.Group;
		private imgHead:eui.Image;
		private lbName:eui.Label;
		private lbCoin:eui.Label;
		private gBtns:eui.Group;
		private btnRule:BaseButton;
		private btnRecord:BaseButton;
		private btnHall:BaseButton;
		private btnLanguage:BaseButton;
		private gItems:eui.Group;
		private imgLogo:eui.Image;
		private logo:eui.Image;
		private gRW:eui.Group;
		private nRoomID:number = 0;
		private historyUI:room.HistoryUI;
		private hotGame:room.HotGameUI;
		private changeLanguage:room.ChangeLanguageUI;
		private changeHeadUI:room.ChangeHeadUI;
		protected childrenCreated():void
		{
			super.childrenCreated();

			this.onResize();
			// this.createAnim();
			this.gTop.alpha = 0;
			this.gItems.addEventListener("OnItemClick",this.onItemClick,this);
			GDGame.Msg.ins.addEventListener("OnGameResLoad",this.onGameResLoad,this);
			this.btnRecord.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShowRecord,this);
			this.btnRule.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShowHelp,this);
			this.btnHall.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBackHall,this);
			this.btnLanguage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onChangeLanguage,this);
			this.imgHead.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onChangeHead,this);

			this.imgLogo.source = "resource/assets/language/"+Global.language+"/logo/roomLogo.png";
			this.logo.source = "../public/logo.png";//"https://ts0068.com/public/logo.png";//
			this.logo.x = 0;
            this.logo.y = 30;
		}
		private createAnim():void{
			dragonBones.EgretFactory.factory.parseDragonBonesData(RES.getRes("xlrw_ske_json"));//xlrw_tex_webp
			dragonBones.EgretFactory.factory.parseTextureAtlasData( RES.getRes("xlrw_tex_json"),RES.getRes("xlrw_tex_png"));

			this.gRW = new eui.Group();
			this.addChild(this.gRW);
			let ar: dragonBones.EgretArmatureDisplay = dragonBones.EgretFactory.factory.buildArmatureDisplay("xlrw");
			ar.animation.play( "xlrw", 0);
			this.gRW.addChild(ar);
			this.gRW.x = 290;
			this.gRW.y = 700;
			this.gRW.alpha = 0;
		}
		public onResize():void{
			this.width = GameConfig.curWidth();
			this.height = GameConfig.curHeight();
		}
		public updataUserInfo():void{
			this.lbName.text = GameUtils.ReplaceChar(GameUtils.getShowName(Global.userName),10);
			this.lbCoin.text = ChipUtils.formatCoin(Global.gameCoin);
			this.btnHall.scaleX = Global.isShowHall ? 1 : 0;
			this.gBtns.right = Global.isShowHall ? 30 : -20;
			this.imgHead.source = Global.commURL + "head/iconHead"+Global.userHead+".png";
		}
		public updataRoomList(arrList:Array<any>):void{
			for(let i:number = 0;i < arrList.length;i++){
				let info:any = arrList[i];
				let item:room.RoomItemUI = new room.RoomItemUI();
				this.gItems.addChild(item);
				item.setItem(info);
				item.x = (i%3)*(item.width+10);
				item.y = Math.floor(i/3) * (item.height+10);
			}
			this.addChild(this.gItems);
			this.initTopinfo();
			this.showRoomAnim();
		}
		private onGameResLoad():void{
			if(this.nRoomID > 0){
				room.RoomWebSocket.instance().roomSender.REQ_ROOMENTERROOM(this.nRoomID);
			}
			if(Global.isContinue){
				room.RoomWebSocket.instance().roomSender.REQ_GAMECONTINUR();
			}
		}
		private onItemClick(evt:egret.Event):void{
			this.nRoomID = evt.data;
			console.log(this.nRoomID,'---this.nRoomID');
			Global.myPos.roomID = evt.data;
			if(Global.isGameLoad){
				room.RoomWebSocket.instance().roomSender.REQ_ROOMENTERROOM(this.nRoomID);
			}else{
				ViewManager.ins.showWait("loading...");
			}
		}
		private showRoomAnim():void{
			this.gTop.y = -190;
			egret.Tween.get(this.gTop).to({y:0,alpha:1},1200,egret.Ease.elasticOut);

			// this.gRW.x = -200;
			// egret.Tween.get(this.gRW).to({x:290,alpha:1},1200,egret.Ease.elasticOut);

			this.gItems.right = -200;
			egret.Tween.get(this.gItems).to({right:10},1200,egret.Ease.elasticOut);
			return
			if( this.hotGame == null ){	
				this.hotGame = new HotGameUI();
				this.addChild( this.hotGame );
				this.hotGame.getGameList();
				this.hotGame.y = 170;
			}
		}
		private initTopinfo():void{
			this.imgTopbg.source = Global.commURL + "/shareSheet/commHallTopbg.png";
			this.imgInfobg.source = Global.commURL + "/shareSheet/commHallInfobg.png";
			this.btnHall.setImg(Global.commURL + "/shareSheet/commHallButton_hall.png");
			this.btnRecord.setImg(Global.commURL + "/shareSheet/commHallButton_recode.png");
			this.btnRule.setImg(Global.commURL + "/shareSheet/commHallButton_help.png");
			this.btnLanguage.setImg(Global.commURL + "/shareSheet/commHallButton_language.png");
		}
		
		private onShowRecord():void{
			if(this.historyUI == null){
				this.historyUI = new room.HistoryUI();
				this.addChild(this.historyUI);
			}
			this.historyUI.onShowUI();
		}
		private onShowHelp():void{
			try {
				window["openActiveGame"](4);//打开帮助
			} catch (error) {}
		}
		private onChangeLanguage():void{
			if(this.changeLanguage == null){
				this.changeLanguage = new room.ChangeLanguageUI();
			}
			this.addChild(this.changeLanguage);
			this.changeLanguage.showUI();
		}
		private onBackHall():void{
			if(egret.getOption("showHall") == "2"){
				try{
					window["closeGame"]();
				}catch(e){}
			}else{
				window.location.href = Global.gameHallURL+"?token="+Global.token;
			}
		}
		private onChangeHead():void{
			if(this.changeHeadUI == null){
				this.changeHeadUI = new room.ChangeHeadUI();
				this.addChild(this.changeHeadUI);
				this.changeHeadUI.addEventListener("ChangeHeadSuccess",this.onChangeHeadComplete,this);
			}
			this.changeHeadUI.showUI();
		}
		private onChangeHeadComplete():void{
			this.imgHead.source = Global.commURL + "head/iconHead"+Global.userHead+".png";
		}
	}
}