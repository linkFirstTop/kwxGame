module game {
	export class GameResultOtherInfo extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}

		private lbName:eui.Label;
		private lbCoin:eui.BitmapLabel;
		private imgHead:eui.Image;
		private imgPosition:eui.Image;
		private imgBank:eui.Image;
		protected childrenCreated():void
		{
			super.childrenCreated();
		}
		public setResult(info:PlayerResultInfo):void{
			this.lbName.text = GameUtils.getShowName(info.username);
			if(info.Coin >= 0){
				this.lbCoin.font = "resultWinFnt_fnt";
				this.lbCoin.text = "+"+ChipUtils.formatCoin(info.Coin);
			}else{
				this.lbCoin.font = "resultLoseFnt_fnt";
				this.lbCoin.text = "-"+ChipUtils.formatCoin(-info.Coin);
			}

			this.imgBank.source = "";
			if(info.seat == 0){
				this.imgBank.source = "result_bank_"+Global.language;
			}
			
			this.imgPosition.source = "resultPosition_"+this.getPosition(info.seat)+"_"+Global.language;

			this.imgHead.source = Global.commURL + "head/iconHead"+Global.getHeadByName(info.username)+".png";
		}
		private getPosition(n:number):string{
			var str:string = "";
			if(n == game.GameParmes.firstSit){
				str = "E";
			}else if((game.GameParmes.firstSit+1) % 4 == n){
				str = "S";
			}else if((game.GameParmes.firstSit+2) % 4 == n){
				str = "W";
			}else if((game.GameParmes.firstSit+3) % 4 == n){
				str = "N";
			}
			return str ;
		}
	}
}