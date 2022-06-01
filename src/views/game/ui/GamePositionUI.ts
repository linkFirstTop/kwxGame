module game {
	export class GamePositionUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		/*方位底*/
		private imgLeft: eui.Image;
		private imgUp: eui.Image;
		private imgRight: eui.Image;
		private imgDown: eui.Image;

		/*方位*/
		private imgIconLeft: eui.Image;
		private imgIconUp: eui.Image;
		private imgIconRight: eui.Image;
		private imgIconDown: eui.Image;

		private lbTime: eui.BitmapLabel;

		private mcTimer: egret.Timer;
		private nCount: number = 0;
		private strState: string = "";
		protected childrenCreated(): void {
			super.childrenCreated();

			this.visible = false;

			this.mcTimer = new egret.Timer(1000);
			this.mcTimer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
			this.lbTime.text = GameParmes.chiPengGangSurplusTime + "";
		}

		public setPosition(): void {
			this.visible = true;
			for (var i: number = 0; i < 3; i++) {
				let p: number = i;//Global.getUserPosition(i);
				let str: string = Global.getCurrentPositionName(i);
				let strLan: string = "";
				if (Global.language == "en") {
					strLan = "_en";
				}
				if (str == "east" && Global.language == "tc") {
					strLan = "_tc";
				}
				if (p == 2) {
					//str = "south"
					this.imgLeft.source = "ps_" + str + "_dark_left";
					this.imgIconLeft.source = "ps_" + str + "_dark" + strLan;
				} else if (p == 3) {
					this.imgUp.source = "ps_" + str + "_dark_up";
					this.imgIconUp.source = "ps_" + str + "_dark" + strLan;
				} else if (p == 1) {
					//str = "north"
					this.imgRight.source = "ps_" + str + "_dark_right";
					this.imgIconRight.source = "ps_" + str + "_dark" + strLan;
				} else if (p == 0) {
					//str = "east"
					this.imgDown.source = "ps_" + str + "_dark_down";
					this.imgIconDown.source = "ps_" + str + "_dark" + strLan;
				}
			}
		}
		
		public setCurrentPosition(n: number): void {
			this.setPosition();
			let p: number = Global.getUserPosition(n);
			let str: string = Global.getCurrentPositionName(n);
		
			let strLan: string = "";
			if (Global.language == "en") {
				strLan = "_en";
			}
			if (str == "east" && Global.language == "tc") {
				strLan = "_tc";
			}
			if (p == 2) {
				str = "north"
				this.imgLeft.source = "ps_" + str + "_light_left";
				this.imgIconLeft.source = "ps_" + str + "_light" + strLan;
			} else if (p == 3) {
				str = "south"
				this.imgUp.source = "ps_" + str + "_light_up";
				this.imgIconUp.source = "ps_" + str + "_light" + strLan;
			} else if (p == 1) {
				this.imgRight.source = "ps_" + str + "_light_right";
				this.imgIconRight.source = "ps_" + str + "_light" + strLan;
			} else if (p == 0) {
				str = "east"
				this.imgDown.source = "ps_" + str + "_light_down";
				this.imgIconDown.source = "ps_" + str + "_light" + strLan;
			}
		}
		public stopTime(): void {
			if (this.mcTimer.running) {
				this.mcTimer.stop();
			}
			this.nCount = 0;
			this.lbTime.text = GameParmes.chiPengGangSurplusTime + "";
			this.strState = "";
		}
		public startTime(count: number, str: string = ""): void {
			this.mcTimer.start();
			this.nCount = count;
			this.lbTime.text = this.nCount + "";
			this.strState = str;
		}
		private onTimer(): void {
			if (this.nCount > 0) {
				this.nCount -= 1;
				this.lbTime.text = this.nCount + "";
			} else {
				if (this.mcTimer.running) {
					this.mcTimer.stop();
				}
				if (this.strState != "") {
					this.dispatchEvent(new egret.Event("OnTimeComplete", true, true, this.strState));
				}
			}
			if(this.nCount < 5){
				if( GameParmes.gameStage == 4 )//只有行牌阶段才响
				sound.SoundManager.getInstance().playEffect("time_mp3");
			}
		}
	}
}