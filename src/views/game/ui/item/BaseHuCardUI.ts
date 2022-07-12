module game {
	export class BaseHuCardUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}
		private imgBack:eui.Image = new eui.Image();
		private imgCard:eui.Image = new eui.Image();
		public cardInfo:game.CardInfo;
		/*p:方位 index:牌的索引 value:牌值 */
		public setCard(p:number,index:number,value:number):void{
			let g:eui.Group = new eui.Group();
			this.addChild(g);
			g.addChild(this.imgBack);
			g.addChild(this.imgCard);
			this.imgBack.horizontalCenter = this.imgBack.verticalCenter = 0;
			if(p == 2){//左
				this.imgBack.source = "SJHP";
				this.imgCard.source = "cardValue"+value;
				this.imgCard.scaleX = this.imgCard.scaleY = 0.6;
				this.imgCard.rotation = 90;
				this.imgCard.skewY = 25;
				this.imgCard.x = 90;
				this.imgCard.y = 0;
			}
			if(p == 3){//上
				this.imgBack.source = "DJHP";
				this.imgCard.source = "cardValue"+value;
				this.imgCard.scaleX = 0.4;
				this.imgCard.scaleY = -0.32;
				this.imgCard.skewX = 20;
				this.imgCard.x = 5;
				this.imgCard.verticalCenter = -11;
			}
			if(p == 1){//右
				this.imgBack.source = "XJHP_"+((index%4)+1);
				this.imgCard.source = "cardValue"+value;
				this.imgCard.scaleX = this.imgCard.scaleY = 0.5;
				this.imgCard.rotation = -90;
				this.imgCard.skewY = -20;
				this.imgCard.x = 26;
				this.imgCard.y = 40;
			}
			if(p == 0){
				// this.imgBack.source = "BJHP_"+((index%4)+1);
				// this.imgCard.source = "cardValue"+value;
				// this.imgCard.scaleX = this.imgCard.scaleY = 0.7;
				// this.imgCard.skewX = -15;
				// this.imgCard.verticalCenter = -12.5;
				// this.imgCard.horizontalCenter = 2;

				this.imgCard.source = "cardValue"+value;

				this.imgBack.source = "card_down_m1";
				this.imgCard.scaleX = this.imgCard.scaleY = 0.9;
				//this.imgCard.verticalCenter = -10;
			}
		}
	}
}