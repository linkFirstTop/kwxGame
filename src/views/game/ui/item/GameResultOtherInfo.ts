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

		private imgLiang : eui.Image;
		private paiInfos : eui.Group;

		protected childrenCreated():void
		{
			super.childrenCreated();
		}
		public setResult(info:room.VGUserInfo):void{
			this.lbName.text = GameUtils.getShowName(info.userName);
			console.log("===GameUtils.getShowName(info.userName)==",GameUtils.getShowName(info.userName))
			if(info.resultCoin >= 0){
				this.lbCoin.font = "resultWinFnt_fnt";
				this.lbCoin.text = "+"+ChipUtils.formatCoin(Number(info.resultCoin) );
			}else{
				this.lbCoin.font = "resultLoseFnt_fnt";
				this.lbCoin.text = "-"+ChipUtils.formatCoin(Number(-info.resultCoin) );
			}

			this.imgBank.source = "";
			if(info.userPos.seatID == 1){
				this.imgBank.source = "resultZhuang_"+Global.language;
			}

			this.imgLiang.visible = false;
			
			this.imgPosition.source = "resultPosition_"+this.getPosition(info.userPos.seatID-1)+"_"+Global.language;

			this.imgHead.source = Global.commURL + "head/iconHead"+Global.getHeadByName(info.userName)+".png";

			//fan
			this.paiInfos.$children.forEach((e:eui.Label,i)=>{
				//console.log('=====EEE',e)
				if(info.fan[i] ){
					e.text = CardsGroupType.FanTypeString[info.fan[i].type]
					if( info.fan[i].type == 20 ){
						this.imgLiang.visible = true;
					}
				}else{
					e.text = "";
				}
			})
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