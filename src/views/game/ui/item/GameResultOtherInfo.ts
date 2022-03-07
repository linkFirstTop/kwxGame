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
		private lbPiao:eui.Label;
		private imgHead:eui.Image;
		private imgPosition:eui.Image;
		private imgBank:eui.Image;
		private imgPao:eui.Image;

		private imgLiang : eui.Image;
		private paiInfos : eui.Group;

		protected childrenCreated():void
		{
			super.childrenCreated();
		}
		public setResult(info:room.VGUserInfo):void{
			this.lbName.text = GameUtils.getShowName(info.userName);
			//console.log("===GameUtils.getShowName(info.userName)==",GameUtils.getShowName(info.userName))
			if(info.resultCoin >= 0){
				this.lbCoin.font = "resultWinFnt_fnt";
				this.lbCoin.text =   `+${info.resultCoin}` //"+"+ChipUtils.formatCoin(Number(info.resultCoin) );
			}else{
				this.lbCoin.font = "resultLoseFnt_fnt";
				console.log("info.resultCoin",Math.abs(Number( info.resultCoin)))
				this.lbCoin.text =  `${info.resultCoin}`  //`-${ChipUtils.formatCoin(Math.abs(Number( info.resultCoin))  )}`;
			}

			this.imgBank.source = "";
			if(info.role == 0){
				this.imgBank.source = "resultZhuang_"+Global.language;
			}

			this.lbPiao.text = `飘${info.dapiao}分`
			this.imgPao.visible = false;

			this.imgLiang.visible = false;
			let p = Global.getUserPosition(info.userPos.seatID)

			const ImgSource = `result${this.getPosition(p)}_${Global.language}`
			console.log("---ImgSource--",ImgSource);
			
			this.imgPosition.source = ImgSource;
			this.imgHead.source = Global.commURL + "head/iconHead"+Global.getHeadByName(info.userName)+".png";
		//	this.im

			this.imgLiang.visible = info.isTing == 1;

			//fan
			this.paiInfos.$children.forEach((e:eui.Label,i)=>{
				//console.log('=====EEE',e)
				if(info.fan[i] ){
					e.text = CardsGroupType.FanTypeString[info.fan[i].type]
					// if( info.fan[i].type == 20 ){
					// 	this.imgLiang.visible = true;
					// }
				}else{
					e.text = "";
				}
			})
		}

		private getPosition(n:number):string{
			var str:string = "";
			if(n == 0){
				str = "East";
			}else if(1 == n){
				str = "Nonth";
			}else if(2 == n){
				str = "North";
			}
			return str ;
		}
	}
}