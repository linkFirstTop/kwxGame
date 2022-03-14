module game {
	export class GameHSZUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		private gDQTip: eui.Group;
		private gHSZTip: eui.Group;
		private btnSure: eui.Image;
		private btnWan: eui.Image;
		private btnTong: eui.Image;
		private btnTiao: eui.Image;
		private gSelectBtn: eui.Group;
		private nSelectType: number = -1;
		private mcDQ: dragonBones.EgretArmatureDisplay;
		private imgHSZTip1: eui.Image;
		private imgHSZTip2: eui.Image;

		private gp_dapiaoOption: eui.Group;
		private gp_dapiaoGroup: eui.Group;
		private go_dapiao: eui.Group;
		protected childrenCreated(): void {
			super.childrenCreated();
			this.btnSure.source = "gameButtonSure_" + Global.language;
			this.btnWan.source = "gameButton_wan_" + Global.language;
			this.btnTiao.source = "gameButton_tiao_" + Global.language;
			this.btnTong.source = "gameButton_tong_" + Global.language;
			this.imgHSZTip1.source = "gameHszTip1_" + Global.language;
			this.imgHSZTip2.source = "gameHszTip2_" + Global.language;

			this.btnSure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSure, this);
			this.btnWan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectWan, this);
			this.btnTong.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectTong, this);
			this.btnTiao.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSelectTiao, this);

			let opitonLength = this.gp_dapiaoOption.numChildren;
			for (let i = 0; i < opitonLength; i++) {
				let img = this.gp_dapiaoOption.getChildAt(i) as eui.Image;
				img['optionData'] = i;
				img.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUserSelectedDapiaoEvent, this)

			}
		}

		public showDapiaoPanel(bool: boolean) {
			this.gp_dapiaoGroup.visible = bool;
			this.go_dapiao.visible = bool;
		}

		private onUserSelectedDapiaoEvent(evt: egret.Event) {
			let target = evt.currentTarget;
			let option = target['optionData'];
			//console.log("====OPTION===",option)
			room.RoomWebSocket.instance().roomSender.REQ_DAPIAOINFO(option)
			this.showDapiaoPanel(false);
		}
		public init(): void {
			for (let i: number = 0; i < 4; i++) {
				this["imgLose" + i].source = "";
			}
			this.initCoinAnim();
			this.initHSZ();
		}
		public initHSZ(): void {
			for (let i: number = 0; i < 4; i++) {
				this["imgTip" + i].source = "";
			}
			this.gHSZTip.visible = false;
			this.gDQTip.visible = false;
			this.nSelectType = -1;
			this.showDapiaoPanel(false);
			if (this.mcDQ == null) {
				this.mcDQ = dragonBones.EgretFactory.factory.buildArmatureDisplay("dq");
				this.mcDQ.animation.stop();
				this.mcDQ.scaleX = this.mcDQ.scaleY = 1.4;
				this.gSelectBtn.addChild(this.mcDQ);
			} else {
				this.mcDQ.animation.stop();
			}
		}
		public initCoinAnim(): void {
			for (let i: number = 0; i < 4; i++) {
				this["lbCoinWinAnim" + i].visible = false;
				this["lbCoinLoseAnim" + i].visible = false;
			}
		}
		public showHSZTips(): void {
			for (let i: number = 0; i < 3; i++) {
				this["imgTip" + i].source = "gameIcon_xp_" + Global.language;
			}
			this.gHSZTip.visible = true;
			this.gDQTip.visible = false;
		}
		/*1 逆时针 2 对家 3 顺时针*/
		public showHSZAnim(type: number): void {
			let str: string = "";
			if (type == 1) {
				str = "nszhp";
			} else if (type == 2) {
				str = "djhp";
			} else if (type == 3) {
				str = "sszhp";
			}

			let ar: dragonBones.EgretArmatureDisplay = comm.DragonAnim.ins.getAnimByName(str);
			ar.animation.play(str, 1);
			ar.armature.addEventListener(dragonBones.EgretEvent.COMPLETE, this.onPlayCompletedAnimation, this);
			ar.x = 950;
			ar.y = 660;
			this.addChild(ar);
		}
		private onPlayCompletedAnimation(event: dragonBones.EgretEvent) {
			let keyname: string = event.armature.name;
			this.removeChild(event.armature.display);
			event.armature.dispose();
			this.dispatchEvent(new egret.Event("OnHSZAnimComplete"));
		}
		public showDQTips(): void {
			for (let i: number = 0; i < 3; i++) {
				this["imgTip" + i].source = "gameIcon_dq_" + Global.language;
			}
			this.gHSZTip.visible = false;
			this.gDQTip.visible = true;
			this.findLessCard();
		}
		/*显示玩家认输*/
		public showUserLose(sit: number): void {
			let p: number = Global.getUserPosition(sit);
			this["imgLose" + p].source = "gameIcon_lose_" + Global.language;
		}
		public showCoinAnim(p: number, coin: number): void {
			this["lbCoinWinAnim" + p].text = this["lbCoinLoseAnim" + p].text = "";
			if (coin > 0) {
				this["lbCoinWinAnim" + p].text = "+" + ChipUtils.formatCoin(coin, true);
				this["lbCoinWinAnim" + p].visible = true;
				this["lbCoinWinAnim" + p].y = 0;
				egret.Tween.get(this["lbCoinWinAnim" + p]).wait(2000).to({ y: -200, visible: false }, 500);
			} else {
				this["lbCoinLoseAnim" + p].text = "-" + ChipUtils.formatCoin(-coin, true);
				this["lbCoinLoseAnim" + p].visible = true;
				this["lbCoinLoseAnim" + p].y = 0;
				egret.Tween.get(this["lbCoinLoseAnim" + p]).wait(1500).to({ y: -200, visible: false }, 500);
			}
		}
		private onSelectWan(): void {
			if (this.nSelectType == 0) {
				this.sendDQ(0);
			} else {
				this.chooseDQType(0);
			}

		}
		private onSelectTiao(): void {
			if (this.nSelectType == 1) {
				this.sendDQ(1);
			} else {
				this.chooseDQType(1);
			}
		}
		private onSelectTong(): void {
			if (this.nSelectType == 2) {
				this.sendDQ(2);
			} else {
				this.chooseDQType(2);
			}
		}
		private chooseDQType(type: number): void {
			this.nSelectType = type;
			if (this.mcDQ) {
				if (this.nSelectType == 0) {//wan
					this.mcDQ.x = this.btnWan.x + 67;
					this.mcDQ.y = this.btnWan.y + 67;
				} else if (this.nSelectType == 1) {//tiao
					this.mcDQ.x = this.btnTiao.x + 67;
					this.mcDQ.y = this.btnTiao.y + 67;
				} else if (this.nSelectType == 2) {//tong
					this.mcDQ.x = this.btnTong.x + 67;
					this.mcDQ.y = this.btnTong.y + 67;
				}
				this.mcDQ.animation.play("dq", 0);
			}

		}

		private sendDQ(type: number): void {
			game.GameWebSocket.instance().gameSender.ReqDingQue(type);
			this.init();
		}
		private onSure(): void {

			if (GamePlayData.HSZUserChoose.length == 3) {
				if (game.GameParmes.getColor(GamePlayData.HSZUserChoose[0]) == game.GameParmes.getColor(GamePlayData.HSZUserChoose[1]) &&
					game.GameParmes.getColor(GamePlayData.HSZUserChoose[0]) == game.GameParmes.getColor(GamePlayData.HSZUserChoose[2])) {
					game.GameWebSocket.instance().gameSender.ReqHuanSanZhang(GamePlayData.HSZUserChoose);
					this.init();
					this.dispatchEvent(new egret.Event("OnSendHSZCards"));
				} else {
					TipsUtils.showTipsFromCenter(Global.dic["同花色"]);
				}
			} else {
				TipsUtils.showTipsFromCenter(Global.dic["数量不符"]);
			}
		}
		public autoHSZ(): void {
			if (GamePlayData.HSZUserChoose.length == 3) {
				if (game.GameParmes.getColor(GamePlayData.HSZUserChoose[0]) == game.GameParmes.getColor(GamePlayData.HSZUserChoose[1]) &&
					game.GameParmes.getColor(GamePlayData.HSZUserChoose[0]) == game.GameParmes.getColor(GamePlayData.HSZUserChoose[2])) {
					game.GameWebSocket.instance().gameSender.ReqHuanSanZhang(GamePlayData.HSZUserChoose);
				} else {
					GamePlayData.HSZUserChoose = GamePlayData.HSZRecommend;
					game.GameWebSocket.instance().gameSender.ReqHuanSanZhang(GamePlayData.HSZRecommend);//选择推荐的换三张
				}
			} else {
				GamePlayData.HSZUserChoose = GamePlayData.HSZRecommend;
				game.GameWebSocket.instance().gameSender.ReqHuanSanZhang(GamePlayData.HSZRecommend);//选择推荐的换三张
			}
			this.init();
			this.dispatchEvent(new egret.Event("OnSendHSZCards"));
		}
		/*找出花色最少的牌*/
		private findLessCard(): void {
			let arr: Array<Array<any>> = [[], [], []];
			let arrHandCard: Array<CardInfo> = GamePlayData.getHandCards(Global.userSit);
			for (let i = 0; i < arrHandCard.length; i++) {//把手牌整合在一起再比较谁最少
				let info: CardInfo = arrHandCard[i];
				let hua: number = game.GameParmes.getColor(info);
				arr[hua].push({ "cardInfo": CardInfo });
			}
			//hua：0是万，1是条，2是筒
			var minNum: number = -1;
			minNum = Math.min(arr[0].length, arr[1].length, arr[2].length);
			if (minNum == arr[0].length) {
				this.chooseDQType(0);
			} else if (minNum == arr[1].length) {
				this.chooseDQType(1);
			} else {
				this.chooseDQType(2);
			}
		}
	}
}