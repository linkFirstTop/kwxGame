module game {
	export class BaseHandCardUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}
		public cardInfo:game.CardInfo;
		public cardIndex:number = -1;
		public isSelect:boolean = false;
		public isTingFlag:boolean = false;
		public isHuFlag:boolean = false;
		public isMoCard:boolean = false;
		private imgBack:eui.Image = new eui.Image();
		private imgCard:eui.Image = new eui.Image();
		private imgMask:eui.Image = new eui.Image();
		private imgTip:eui.Image;
		public imgPao : eui.Image
		/*p:方位 index:牌的索引 value:牌值 state:0 暗牌 1亮牌 isDQ:是否定缺牌*/
		public setCard(p:number,index:number,value:number,state:number,isDQ:boolean=false):void{
			let g:eui.Group = new eui.Group();
			this.addChild(g);
			g.addChild(this.imgBack);
			g.addChild(this.imgCard);
			this.imgBack.horizontalCenter = this.imgBack.verticalCenter = 0;
			this.imgCard.horizontalCenter = 0;
			if(p == 2){//左
				if(state == 0){
					this.imgBack.source = "card_left_h"+(index + 1);
				}else{
					this.imgBack.source = "card_left_hl"+(index + 1);
					this.imgCard.source = "cardValue"+value;
					this.imgCard.scaleX = this.imgCard.scaleY = 0.6-0.01*index;
					this.imgCard.rotation = 90;
					this.imgCard.skewY = 25;
				}
			}
			if(p == 3){//上
				if(state == 0){
					this.imgBack.source = "card_up_h1";
				}else{
					this.imgBack.source = "card_up_m1";
					this.imgCard.source = "cardValue"+value;
					this.imgCard.scaleX = 0.5;
					this.imgCard.scaleY = -0.4;
					this.imgCard.verticalCenter = -7;
				}
			}
			if(p == 1){//右
				if(state == 0){
					this.imgBack.source = "card_left_h"+(index + 1);
				}else{
					this.imgBack.source = "card_left_hl"+(index + 1);
					this.imgCard.source = "cardValue"+value;
					this.imgCard.scaleX = this.imgCard.scaleY = 0.6-0.01*index;
					this.imgCard.rotation = -90;
					this.imgCard.skewY = -25;
					this.imgCard.verticalCenter = -8;
				}
				this.imgBack.scaleX = -1;
			}
			if(p == 0){
				
				this.imgCard.source = `cardValue${value}`  ;
				this.cardIndex = value;
				//console.log("===STATE====",state)
				if(state == 0){
					this.imgBack.source = "card_down_h1";
					this.imgCard.verticalCenter = 6;
					this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCardTap,this);
					this.isSelect = false;
					this.isTingFlag = false;
					this.isHuFlag = false;
					// if(isDQ){
					// 	this.setMaskFlag();
					// }
				}else{
					this.imgBack.source = "card_down_m1";
					this.imgCard.scaleX = this.imgCard.scaleY = 0.9;
					this.imgCard.verticalCenter = -10;
				}
			}
		}

		public updateCard( value:number){
	
			this.imgCard.source = "cardValue"+value;
		}

		private onCardTap():void{
			console.log("==GameParmes.gameStage==",GameParmes.gameStage)

			if(GameParmes.gameTurn == GameTurnType.SELFTURN ){//出牌阶段
				this.dispatchEvent(new egret.Event("OnClickHandCard",true,true,this));
			}
		}
		public onSelectCard():void{
			this.isSelect = !this.isSelect;
			this.y = this.isSelect ? -50 : 0;
		}
		public clearSelectCard():void{
			this.isSelect = false;
			this.y = 0;
		}
		public setTingFlag(b:boolean,str:string):void{
			
			if(b){//显示听提示
				if(this.imgTip == null){
					this.imgTip = new eui.Image();
					this.addChild(this.imgTip);
					this.imgTip.x = 23;
					this.imgTip.y = -60;
				}else{
					this.imgTip.visible = true;
				}
				if(str == "ting"){
					this.imgTip.source = "gameIcon_ting_"+Global.language;
					this.isTingFlag = true;
				}
				if(str == "hu"){
					this.imgTip.source = "gameIcon_th_"+Global.language;
					this.isHuFlag = true;
				}
				
			}else{
				this.isTingFlag = false;
				this.isHuFlag = false;
				if(this.imgTip){
					this.imgTip.visible = false;
				}
			}
		}

		public setPaoFlag(b:boolean,){
			if(b){//显示听提示
				if(this.imgPao == null){
					console.log("=setPaoFlag==")
					// let g:eui.Group = new eui.Group();
			        //  this.addChild(g);
					this.imgPao = new eui.Image();
					this.addChild(this.imgPao);
					this.imgPao.source = "imgPao_"+Global.language;
					this.imgPao.x = 40;
					this.imgPao.y = 19;
				}else{
					this.imgPao.visible = true;
				}
			}else{
				// this.isTingFlag = false;
				// this.isHuFlag = false;
				if(this.imgPao){
					this.imgPao.visible = false;
				}
			}

		}
		
		public setMaskFlag(isEnabled:boolean=true):void{
			this.imgMask.source = "black_png";
			this.imgMask.width = this.imgBack.width;
			this.imgMask.height = this.imgBack.height;
			this.imgMask.alpha = 0.4;
			this.addChild(this.imgMask);
			this.touchEnabled = this.touchChildren = isEnabled;
		}
	}
}