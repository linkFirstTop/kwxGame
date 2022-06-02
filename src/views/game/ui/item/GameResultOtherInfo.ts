module game {
	export class GameResultOtherInfo extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}

		private lbName: eui.Label;
		private lbCoin: eui.BitmapLabel;
		private lbPiao: eui.Label;
		private imgHead: eui.Image;
		private imgPosition: eui.Image;
		private imgBank: eui.Image;
		private imgPao: eui.Image;

		private imgLiang: eui.Image;
		private paiInfos: eui.Group;

		protected childrenCreated(): void {
			super.childrenCreated();
		}
		public setResult(info: room.VGUserInfo): void {
			this.lbName.text = GameUtils.getShowName(info.userName);
			//console.log("===GameUtils.getShowName(info.userName)==",GameUtils.getShowName(info.userName))
			if (info.resultCoin >= 0) {
				this.lbCoin.font = "resultWinFnt_fnt";
				
				this.lbCoin.text =  "+" + `${ChipUtils.formatCoin(Math.abs(Number( info.resultCoin)))}`;

				//console.log("==ChipUtils.formatCoin(Math.abs(Number( info.resultCoin)))====",ChipUtils.formatCoin(Math.abs(Number( info.resultCoin))))
			} else {
				this.lbCoin.font = "resultLoseFnt_fnt";
			
			//console.log("====Math.abs(Number( info.resultCoin)))",Math.abs(Number( info.resultCoin)));
				this.lbCoin.text = `-${ChipUtils.formatCoin(Math.abs(Number( info.resultCoin)))}`;
			}

			this.imgBank.source = "";
			if (info.role == 0) {
				this.imgBank.source = "gameIcon_zhuang_" + Global.language;
			}

			if(Global.language == "tc"){
				this.lbPiao.text = `飄${info.dapiao}分`
			}

			if(Global.language == "en"){
				this.lbPiao.text = `PIAO${info.dapiao}分`
			}

			if(Global.language == "cn"){
				this.lbPiao.text = `飘:${info.dapiao}`
			}

			this.imgPao.visible = false;
			this.imgLiang.source = "resultSheet_json.resultLiang_" + Global.userHead; 

			this.imgLiang.visible = false;
			let p = Global.getUserPosition(info.userPos.seatID)

			const ImgSource = `result${this.getPosition(p)}_${Global.language}`
			//console.log("---ImgSource--", ImgSource);

			this.imgPosition.source = ImgSource;

			if( info.userPos.seatID == Global.userSit ){
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.userHead + ".png";
			}else{
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.getHeadByName(info.userName) + ".png";
			}
			

			this.imgLiang.visible = info.isTing == 1;

			//fan
			this.paiInfos.$children.forEach((e: eui.Label, i) => {
				//console.log('=====EEE',e)+
			
				if (info.fan[i]) {
					const type = info.fan[i].type
					//飘分和杠是加或者减 其他的都是乘
					const typs:any = [15,16,17,18,19,20];

					let pre = "x"
					if(typs.includes(type)){
						pre = "+"
					}
					e.text = `${Global.dic[CardsGroupType.FanTypeString[type]]}${pre}${info.fan[i].value}`
			
				} else {
					e.text = "";
				}
			})
		}

		public showPao() {

			this.imgPao.visible = true;

		}

		private getPosition(n: number): string {
			var str: string = "";
			if (n == 0) {
				str = "East";
			} else if (1 == n) {
				str = "Nonth";
			} else if (2 == n) {
				str = "North";
			}
			return str;
		}
	}
}