module game {
	export class GameOperationUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}
		private arrPosition:Array<number> = [0,189,378,567,756];
		private gBtns:eui.Group;
		private btnPeng:eui.Image;
		private btnGang:eui.Image;
		private btnTing:eui.Image;
		private btnHu:eui.Image;
		private btnGuo:eui.Image;
		private arrTmp:Array<eui.Image> = [];

		private gCardBg:eui.Group;
		private gPGCards:eui.Group;
		private gTingCards:eui.Group;
		private imgIconHu:eui.Image;
		protected childrenCreated():void
		{
			super.childrenCreated();

			this.btnPeng.source = "gameButton_peng_"+Global.language;
			this.btnGang.source = "gameButton_gang_"+Global.language;
			this.btnHu.source = "gameButton_hu_"+Global.language;
			this.btnTing.source = "gameButton_ting_"+Global.language;
			this.btnGuo.source = "gameButton_guo_"+Global.language;
			this.imgIconHu.source = "gameIcon_hu_"+Global.language;

			this.initBtns();
			this.btnPeng.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPeng,this);
			this.btnGang.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGang,this);
			this.btnTing.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTing,this);
			this.btnHu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onHu,this);
			this.btnGuo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGuo,this);
			this.gPGCards.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPGGroupTap,this);
		}
		public initBtns():void{
			this.arrTmp = [];
			this.btnPeng.visible = false;
			this.btnGang.visible = false;
			this.btnTing.visible = false;
			this.btnHu.visible = false;
			this.btnGuo.visible = false;
			this.gCardBg.visible = false;
			this.gPGCards.visible = false;
			this.gTingCards.visible= false;
		}
		public showOpt(arr:Array<any>):void{
			this.initBtns();
			var isChi:boolean = arr[0];
			var isPeng:boolean = arr[1];
			var isGang:boolean = arr[2];
			var isHu:boolean = arr[3];
			var isTing:boolean = arr[4];
			console.log("isPeng:"+isPeng,"isGang:"+isGang,"isHu:"+isHu,"isTing:"+isTing);
			if(isHu){
				this.arrTmp.unshift(this.btnHu);
				this.btnHu.visible = true;
			}
			if(isGang){
				this.arrTmp.unshift(this.btnGang);
				this.btnGang.visible = true;
			}
			if(isPeng){
				this.arrTmp.unshift(this.btnPeng);
				this.btnPeng.visible = true;
			}
			if(isTing){
				//this.arrTmp.unshift(this.btnTing);
				//this.btnTing.visible = true;
			}
			
			if(this.arrTmp.length > 0){
				this.visible = true;
				this.arrTmp.unshift(this.btnGuo);
				this.btnGuo.visible = true;
			}
			for(let i:number = 0;i < this.arrTmp.length;i++){
				let img:eui.Image = this.arrTmp[i];
				img.x = this.arrPosition[4-i];
			}
		}
		private onPeng():void{
			this.initBtns();
			let arr:Array<CardsGroupInfo> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.PENG);
			game.GameWebSocket.instance().gameSender.ReqSendCardsGameFun(GamePlayData.Peng_Groups[0]);
		}
		private onGang():void{
			this.initBtns();
			var arr:Array<CardsGroupInfo> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.GANG);
			if(arr.length == 1){
				game.GameWebSocket.instance().gameSender.ReqSendCardsGameFun(GamePlayData.Gang_Groups[0]);
				return ;
			}
			this.showCardGroups(arr);
		}
		private onTing():void{
			
		}
		private onHu():void{
			if(GameParmes.nHuType == 16){//此时是天胡情况
				this.dispatchEvent(new egret.Event("ShowTianHuFlag"));
			}else{
				game.GameWebSocket.instance().gameSender.ReqSendCardsGameFun(GamePlayData.Hu_Groups[0]);
			}
			this.initBtns();
		}
		private onGuo():void{
			this.initBtns();
			this.sendGameNoOperation();
		}
		private sendGameNoOperation():void{
			var cardsGroup:CardsGroupInfo = new CardsGroupInfo();
			cardsGroup.cardsit = Global.userSit;
			cardsGroup.CardsGroupType = CardsGroupType.NO_OPERATION;
			game.GameWebSocket.instance().gameSender.ReqSendCardsGameFun(cardsGroup);
		}
		/** 
		 * @param arrGroup
		 * 显示吃碰杠牌组
		 */			
		private showCardGroups(arrGroup:Array<CardsGroupInfo>):void{
			this.clearCardGroup();
			this.visible = this.gCardBg.visible = this.gPGCards.visible = true;
			let num:number = arrGroup.length;
			for(let i:number = 0;i < num;i++){
				let cardGroup:CardsGroupInfo = arrGroup[i] as CardsGroupInfo;
				let g:eui.Group = new eui.Group();
				this.gPGCards.addChild(g);
				g.name = ""+i;
				g.touchChildren = false;
				for(let j:number = 0;j < cardGroup.cards.length;j++){
					let card:CardInfo = cardGroup.cards[j] as CardInfo;
					let item:game.BaseCardUI = new game.BaseCardUI();
					g.addChild(item);
					let cardValue:number = game.GameParmes.getCardID(card);
					item.setCard(cardValue);
					item.x = j*90;
					g.scaleX = g.scaleY = 0.9;
				}
				
			}
			this.gCardBg.width = this.gPGCards.width + 58;
		}
		private onPGGroupTap(evt:egret.TouchEvent):void{
			var index:number = Number(evt.target.name);
			game.GameWebSocket.instance().gameSender.ReqSendCardsGameFun(GamePlayData.Gang_Groups[index]);
		}
		/*显示待胡牌*/
		public showTingGroup(nIndex:number):void{
			this.clearTingGroup();
			this.visible = this.gCardBg.visible = this.gTingCards.visible = true;
			let arr:Array<any> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.CALL);
			for(let i:number = 0;i < arr.length;i++){
				let info:any = arr[i];
				if(info.ObtainCardIndex+1 == nIndex){
					this.createHuCards(info.CallCards);
					break;
				}
			}
			this.gCardBg.width = this.gTingCards.width + 58;
		}
		private createHuCards(arr:Array<any>):void{
			for(let i:number = 0;i < arr.length;i++){
				let item:game.BaseTingCardUI = new game.BaseTingCardUI();
				this.gTingCards.addChild(item);
				let cardNum:number = 4-GamePlayData.arrLPCards[arr[i].CardIndex+1].length;
				cardNum = cardNum > -1 ? cardNum : 0;
				item.setInfo(arr[i].CardIndex+1,arr[i].FanType,cardNum);
			}
		}
		private clearTingGroup():void{
			while(this.gTingCards.numChildren > 1){
				let item = this.gTingCards.removeChildAt(1);
				item = null;
			}
		}
		private clearCardGroup():void{
			while(this.gPGCards.numChildren > 0){
				let item = this.gPGCards.removeChildAt(0);
				item = null;
			}
		}
	}
}