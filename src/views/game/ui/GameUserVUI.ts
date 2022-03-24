module game {
	export class GameUserVUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		private lbName: eui.Label;
		private lbCoin: eui.Label;
		private nCoin: number = 0;
		private imgHead: eui.Image;
		private imgDQ: eui.Image;
		private imgZhuang: eui.Image;
		private strUserName: string = "";
		private anim: dragonBones.EgretArmatureDisplay;
		private nSit: number = -1;
		private piaofen_result: eui.Image;
		private user: game.GameUserInfo;
		private imgLiang : eui.Image;
		protected childrenCreated(): void {
			super.childrenCreated();
		}

		public setUserInfo(user: game.GameUserInfo): void {
			this.user = user;
			this.piaofen_result.visible = false;
			this.strUserName = user.userName;
			let strName: string = "";
			if (user.userShowName == "") {
				strName = user.userName;
			} else {
				strName = user.userShowName;
			}
			this.lbName.text = GameUtils.ReplaceChar(GameUtils.getShowName(strName), 8, 3);

			this.nCoin = user.userCoin;
			this.nSit = user.userSit;
			this.imgZhuang.source = "";
			if (this.nSit == 0) {
				this.imgZhuang.source = "gameIcon_zhuang_" + Global.language;
			}
			if (this.nCoin <= 0) {
				this.nCoin = 0;
				this.dispatchEvent(new egret.Event("UserLoseGame", true, true, this.nSit));
			}
			if (Global.userName == user.userName) {
				this.lbCoin.text = ChipUtils.formatCoin(user.userCoin);
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.userHead + ".png";
			} else {
				this.lbCoin.text = ChipUtils.formatCoin(user.userCoin, true);
				this.imgHead.source = Global.commURL + "head/iconHead" + Global.getHeadByName(user.userName) + ".png";
			}
			let p: number = Global.getUserPosition(user.userSit);
			if (p == 1) {
				this.imgHead.scaleX = -1;
			}
			this.imgLiang.source = "resultSheet_json.resultLiang_" + Global.language; 
			let isShow = GamePlayData.MJ_LiangSitArr.some( e=>(e==user.origin.userPos.seatID)) 
			this.isShowLiang(false)
			if(isShow ){
				this.isShowLiang(true)
			}
			
		}

		public showResultCoin(coin: number): void {
			if (Global.userName == this.strUserName) {
				this.lbCoin.text = ChipUtils.formatCoin(coin);
			} else {
				this.lbCoin.text = ChipUtils.formatCoin(coin, true);
			}

			this.nCoin = coin;
		}

/**
 * 是否显示亮倒
 */
		public isShowLiang(show:boolean){
			this.imgLiang.visible = show;
		}

		public showDapiaoInfo() {
			let type = this.user.getUserDapiaoInfo()

			//todo多语言
			this.piaofen_result.source = `p${type}f_png`;
			this.piaofen_result.visible = true;
			egret.Tween.get(this.piaofen_result).to({ y: this.piaofen_result.y - 50 }, 700).call(() => {
				this.piaofen_result.visible = false;
				this.piaofen_result.y += 50;
			})
		}

		public showCurrentAnim(b: boolean): void {
			if (b) {
				if (this.anim == null) {
					this.anim = comm.DragonAnim.ins.getAnimByName("txshxd");
					this.addChild(this.anim);
					this.anim.x = 84;
					this.anim.y = 114;
				}
				this.anim.visible = true;
				this.anim.animation.play("txshxd", 0);
			} else {
				if (this.anim) {
					this.anim.visible = false;
					this.anim.animation.stop();
				}
			}
		}
		
		public updataCoin(coin: number): void {
			this.nCoin += coin;
			if (this.nCoin <= 0) {
				this.nCoin = 0;
				this.dispatchEvent(new egret.Event("UserLoseGame", true, true, this.nSit));
			}

			if (Global.userName == this.strUserName) {
				this.lbCoin.text = ChipUtils.formatCoin(this.nCoin);
			} else {
				this.lbCoin.text = ChipUtils.formatCoin(this.nCoin, true);
			}
		}

		public setUserDQ(type: number, str: string): void {
			this.imgDQ.source = "";
			if (type == 0) {//万
				this.imgDQ.source = "gameIcon_wan_" + Global.language;
			} else if (type == 1) {//条
				this.imgDQ.source = "gameIcon_tiao_" + Global.language;
			} else if (type == 2) {//饼
				this.imgDQ.source = "gameIcon_tong_" + Global.language;
			}
			if (str == "left") {
				this.imgDQ.x = 15;
			} else {
				this.imgDQ.x = 95;
			}
		}
	}
}