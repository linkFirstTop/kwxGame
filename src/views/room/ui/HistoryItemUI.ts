module room {
	export class HistoryItemUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}

		private lbZD:eui.Label;
		private lbTime:eui.Label;
		private lbJu:eui.Label;
		private lbSF:eui.Label;
		private lbResult:eui.Label;
		protected childrenCreated():void
		{
			super.childrenCreated();
		}
		
		public setInfo(mode:any):void{
			this.lbZD.text = mode.ID+"";
			this.lbTime.text = mode.CreateTime+"";
			this.lbJu.text = mode.RoundID+"";
			if(mode.IsBanker == 1){
				this.lbSF.text = Global.dic["庄"];
			}else{
				this.lbSF.text = Global.dic["闲"];
			}
			
			var n:number = mode.Money+mode.ServiceMoney;
			if(n >= 0){
				this.lbResult.text = "+"+ChipUtils.formatCoin(n);
			}else{
				this.lbResult.text = "-"+ChipUtils.formatCoin(-n);
			}
		}
	}
}