module game {
	export class GameResultInfoItem extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}
		private lbInfo:eui.Label;
		private jhinfo:eui.Label;
		private lbCoin:eui.Label;
		private lbSeat:eui.Label;

		protected childrenCreated():void
		{
			super.childrenCreated();
		}
		public setInfo(info:ScoreDescDetail):void{
			let str:string = this.getTypeName(info.type);
			let score:number = info.score_change[info.selfseat];
			this.lbSeat.text = "";
			if(score > 0){//赢
				this.lbInfo.text = str;
				this.lbCoin.text = "+"+ChipUtils.formatCoin(score);
				if(info.type == 3 || info.type == 4){
					let strFan:string = ""
					for(let i:number = 0;i < info.fan_zhong.length;i++){
						if(i == info.fan_zhong.length-1){
							strFan += GameParmes.fanIdConvertString(info.fan_zhong[i]);
						}else{
							strFan += GameParmes.fanIdConvertString(info.fan_zhong[i]) + " ";
						}
						
					}
					this.lbInfo.text += "("+strFan+")";
				}
				let num:number = 0;
				for(let i:number = 0;i < info.score_change.length;i++){
					let p:number = Global.getUserPosition(i);
					if(p != 3 && info.score_change[i] < 0){
						if(this.lbSeat.text == ""){
							this.lbSeat.text += this.getUserPosition(p);
						}else{
							this.lbSeat.text += " "+this.getUserPosition(p);
						}
						num += 1;
					}
				}
				if(num == 3){
					this.lbSeat.text = GameParmes.dic["全体"];
				}
			}
			if(score < 0){//输
				this.lbInfo.text = str;
				/*if(info.type != 10){//10 有限责任制
					this.lbInfo.text = "被"+str;
				}*/
				this.lbCoin.text = "-"+ChipUtils.formatCoin(-score);
				let num:number = 0;
				for(let i:number = 0;i < info.score_change.length;i++){
					let p:number = Global.getUserPosition(i);
					if(p != 3 && info.score_change[i] > 0){
						if(this.lbSeat.text == ""){
							this.lbSeat.text += this.getUserPosition(p);
						}else{
							this.lbSeat.text += " "+this.getUserPosition(p);
						}
						num += 1;
					}
				}
				if(num == 3){
					this.lbSeat.text = GameParmes.dic["全体"];
				}
			}
		}
		private getUserPosition(p:number):string{
			let str:string = "";
			if(p == 0){
				str = GameParmes.dic["上家"];
			}else if(p == 1){
				str = GameParmes.dic["对家"];
			}else if(p == 2){
				str = GameParmes.dic["下家"];
			}
			return str;
		}
		/*1刮风 2下雨 3自摸 4胡  5花猪  6大叫 7呼叫转移 8补杠 9退税*/
		private getTypeName(type:number):string{
			let str:string = "";
			switch(type){
				case 1:
					str = GameParmes.dic["刮风"]
					break;
				case 2:
					str = GameParmes.dic["下雨"]
					break;
				case 3:
					str = GameParmes.dic["自摸"]
					break;
				case 4:
					str = GameParmes.dic["胡"]
					break;
				case 5:
					str = GameParmes.dic["花猪"]
					break;
				case 6:
					str = GameParmes.dic["大叫"]
					break;
				case 7:
					str = GameParmes.dic["呼叫转移"]
					break;
				case 8:
					str = GameParmes.dic["刮风"]//补杠"
					break;
				case 10:
					str = GameParmes.dic["有限责任制"];
					break;
			}
			return str;
		}
	}
}