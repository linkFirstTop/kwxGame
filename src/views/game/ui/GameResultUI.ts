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

		private gInfo:eui.Group;
		private imgPosition:eui.Image;
		private imgBank:eui.Image;
		private userGroup :eui.Group;
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
			// this.dispatchEvent(new egret.Event("OnGameContinue",true,true));

			GameController.onRequeseNextGame();



		}
		private onClose():void{
			this.visible = false;
			this.dispatchEvent(new egret.Event("OnHideResult"));
		}
		public showResult(body:room.VGGameResultNtc):void{
			this.visible = true;


			let arr:Array<any> = body.userInfos;

			
			//let selfData = 
			if(GameParmes.isGameFlower ){
				//this.imgBg.source = "resultLosebg_png";
				this.imgTitle.source = "resultTitle_flow_"+Global.language;
			}

			let isWin = false;
			for(let i:number = 0;i < body.userInfos.length;i++){
				const user =body.userInfos[i]
				if(user.userPos.seatID == Global.userSit && user.resultCoin > 0){//自己胡做下标记
					isWin = true;
					break;
				}
			}

			if(isWin){
				this.imgTitle.source = "resultTitle_win_"+Global.language;
			}else{
				this.imgTitle.source = "resultTitle_lose_"+Global.language;
			}

			for(let i:number = 0;i < 3;i++){
				let info:room.VGUserInfo = arr[i];
				// let data = body.settlementInfos[i];
				//let p:number = Global.getUserPosition(info.userPos.seatID);
				const  User :game.GameResultOtherInfo = <GameResultOtherInfo>this.userGroup.getChildAt(i);
				if( info.userPos.seatID == Global.userSit ){
					User.showPao(body.settlementInfos, Number(info.resultCoin));
				}
				User.setResult(info);
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