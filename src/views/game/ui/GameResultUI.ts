module game {
	export class GameResultUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}
		private imgBg:eui.Image;
		private imgTitle:eui.Image;
		private btnClose:BaseButton;
		private btnContinue:BaseButton;
		private lbName:eui.Label;
		private lbCoin:eui.BitmapLabel;
		private imgHead:eui.Image;
		private gInfo:eui.Group;
		private imgPosition:eui.Image;
		private imgBank:eui.Image;
		protected childrenCreated():void
		{
			super.childrenCreated();

			this.visible = false;

			this.btnContinue.setImg("resultButtonContinue_"+Global.language);

			this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClose,this);
			this.btnContinue.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onContinue,this);
		}
		private onContinue():void{
			this.visible = false;
			this.dispatchEvent(new egret.Event("OnGameContinue",true,true));
		}
		private onClose():void{
			this.visible = false;
			this.dispatchEvent(new egret.Event("OnHideResult"));
		}
		public showResult(body:game.AckGameResult):void{
			this.visible = true;
			let arr:Array<any> = body.playerInfo;
			if(body.IsOver == 2){
				this.imgBg.source = "resultLosebg_png";
				this.imgTitle.source = "resultTitle_flow_"+Global.language;
			}
			for(let i:number = 0;i < 4;i++){
				let info:PlayerResultInfo = arr[i];
				let p:number = Global.getUserPosition(info.seat);
				if(p == 3){//玩家自己
					this.imgPosition.source = "resultPosition_"+this.getPosition(info.seat)+"_"+Global.language;
					this.imgBank.source = "";
					if(info.seat == 0){
						this.imgBank.source = "result_bank_"+Global.language;
					}
					this.lbName.text = GameUtils.ReplaceChar(GameUtils.getShowName(Global.userName),9,3);
					if(info.Coin >= 0){
						this.imgTitle.source = "resultTitle_win_"+Global.language;
						this.lbCoin.font = "resultWinFnt_fnt";
						this.lbCoin.text = "+"+ChipUtils.formatCoin(info.Coin);
						if(info.Coin > 0){
							this.imgBg.source = "resultWinbg_png";
						}
					}else{
						this.imgTitle.source = "resultTitle_lose_"+Global.language;
						this.lbCoin.font = "resultLoseFnt_fnt";
						this.lbCoin.text = "-"+ChipUtils.formatCoin(-info.Coin);
						this.imgBg.source = "resultLosebg_png";
					}
					this.showDetailInfo(info.result_list_detail);
					this.imgHead.source = Global.commURL + "head/iconHead"+Global.userHead+".png";
				}else{//其他玩家
					this["user"+p].setResult(info);
				}
			}
		}
		/*显示详细信息*/
		private showDetailInfo(arr:Array<any>):void{
			while(this.gInfo.numChildren > 0){
				let item = this.gInfo.removeChildAt(0);
				item = null;
			}
			for(let i:number = 0;i < arr.length;i++){
				let item:game.GameResultInfoItem = new game.GameResultInfoItem();
				this.gInfo.addChild(item);
				item.setInfo(arr[i]);
				item.y += 10
			}
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