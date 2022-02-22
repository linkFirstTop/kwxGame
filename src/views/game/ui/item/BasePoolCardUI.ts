module game {
	export class BasePoolCardUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}
		private imgBack:eui.Image = new eui.Image();
		private imgCard:eui.Image = new eui.Image();
		public cardInfo:CardInfo;
		/*p:方位 index:牌的索引 value:牌值 */
		public setCard(p:number,index:number,value:number):void{
			let g:eui.Group = new eui.Group();
			this.addChild(g);
			g.addChild(this.imgBack);
			g.addChild(this.imgCard);
			this.imgBack.horizontalCenter = this.imgBack.verticalCenter = 0;
			this.imgCard.horizontalCenter = 0;
			if(p == 0){
				this.imgBack.source = "card_pool_left_"+(index+1);
				this.imgCard.source = "cardValue"+value;
				this.imgCard.scaleX = this.imgCard.scaleY = 0.5;
				if((index+1)%6 != 0){
					this.imgCard.scaleX = this.imgCard.scaleY = 0.5- 0.02*(6-(index+1)%6);
				}
				this.imgCard.verticalCenter = -12;
				this.imgCard.rotation = 90;
				this.imgCard.skewY = 10;
			}
			if(p == 3){
				this.imgBack.source = "card_pool_up_"+(index+1);
				this.imgCard.source = "cardValue"+value;
				this.imgCard.scaleX = -0.5;//0.4
				this.imgCard.scaleY = -0.43;//0.38
				this.imgCard.verticalCenter = -7;
				if(index%6 == 0){
					this.imgCard.skewX = -6;
				}
				if(index%6 == 1){
					this.imgCard.skewX = -4;
				}
				if(index%6 == 2){
					this.imgCard.skewX = -1;
				}
				if(index%6 == 3){
					this.imgCard.skewX = 1;
				}
				if(index%6 == 4){
					this.imgCard.skewX = 4;
				}
				if(index%6 == 5){
					this.imgCard.skewX = 6;
				}
			}
			if(p == 1){
				this.imgBack.source = "card_pool_right_"+(index+1);
				this.imgBack.scaleX = -1;
				this.imgCard.source = "cardValue"+value;
				if((index+1)%6 == 0){
					this.imgCard.scaleX = this.imgCard.scaleY = 0.4;
				}else{
					this.imgCard.scaleX = this.imgCard.scaleY = 0.5-0.02*((index+1)%6);
				}
				this.imgCard.rotation = -90;
				this.imgCard.skewY = -10;
				this.imgCard.verticalCenter = -12;
			}
			if(p == 2){
				this.imgBack.source = "card_pool_down_"+(index+1);
				this.imgCard.source = "cardValue"+value;
				this.imgCard.scaleX = this.imgCard.scaleY = 0.7-(3-Math.floor((index)/6))*0.05;
				if(index%6 == 0){
					this.imgCard.skewX = 4;
				}
				if(index%6 == 1){
					this.imgCard.skewX = 3;
				}
				if(index%6 == 2){
					this.imgCard.skewX = 1;
				}
				if(index%6 == 3){
					this.imgCard.skewX = -1;
				}
				if(index%6 == 4){
					this.imgCard.skewX = -3;
				}
				if(index%6 == 5){
					this.imgCard.skewX = -4;
				}
			}
		}
	}
}