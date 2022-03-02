module game {
	export class GameMatchUserUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		private timer: egret.Timer;
		private gItem: eui.Group;
		private index: number = 0;
		private imgTip: eui.Image;
		protected childrenCreated(): void {
			super.childrenCreated();
			this.visible = false;

			this.imgTip.source = "gameIcon_wait1_" + Global.language;
		}
		public startAnim(): void {
			this.visible = true;
			for (let i: number = 0; i < 4; i++) {
				if (i == 0) {
					this.gItem.getChildAt(i).y = -30;
				} else {
					this.gItem.getChildAt(i).y = 0;
				}

			}
			this.index = 0;
			this.playMatchAnim();
		}
		private playMatchAnim(): void {
			let img1: eui.Image = this.gItem.getChildAt(this.index) as eui.Image;
			egret.Tween.get(img1).to({ y: 0 }, 300);
			if (this.index + 1 == 4) {
				this.index = -1;
			}
			let img2: eui.Image = this.gItem.getChildAt(this.index + 1) as eui.Image;
			egret.Tween.get(img2).to({ y: -30 }, 300).call(function () {
				this.index += 1;
				this.playMatchAnim();
			}, this);

		}
		public stopAnim(): void {
			this.visible = false;
			let img1: eui.Image = this.gItem.getChildAt(this.index) as eui.Image;
			let img2: eui.Image = this.gItem.getChildAt(this.index + 1) as eui.Image;

			egret.Tween.removeTweens(img1);
			egret.Tween.removeTweens(img2);

		}
	}
}