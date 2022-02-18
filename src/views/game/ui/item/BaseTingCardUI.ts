module game {
	export class BaseTingCardUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}

		private imgValue:eui.Image;
		private lbFan:eui.Label;
		private lbNum:eui.Label;
		private nLeft:number = 0;
		public cardIndex:number = 0;
		protected childrenCreated():void
		{
			super.childrenCreated();
		}
		/*cardIndex 牌值 type 番型 num 剩余张数*/
		public setInfo(cardIndex:number,type:number,num:number):void{
			this.nLeft = num;
			this.cardIndex = cardIndex;
			this.imgValue.source = "cardValue"+cardIndex;
			if(Global.language == "en"){
				this.lbFan.text = type+"Fan";
				this.lbNum.text = "Rest "+num
			}else{
				this.lbFan.text = type+"番";
				this.lbNum.text = num+"张";
			}
			
		}
		public updataLeftCard():void{
			if(this.nLeft > 1){
				this.nLeft -= 1;
				if(Global.language == "en"){
					this.lbNum.text = "Rest "+this.nLeft;
				}else{
					this.lbNum.text = this.nLeft+"张";
				}
				
			}
		}
	}
}