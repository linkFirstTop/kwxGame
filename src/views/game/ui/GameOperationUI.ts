module game {
	export class GameOperationUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		private arrPosition: Array<number> = [0, 189, 378, 567, 756];
		private gBtns: eui.Group;
		private btnPeng: eui.Image;
		private btnGang: eui.Image;
		private btnTing: eui.Image;
		private btnHu: eui.Image;
		private btnGuo: eui.Image;
		private arrTmp: Array<eui.Image> = [];

		private gCardBg: eui.Group;
		private gPGCards: eui.Group;
		private gTingCards: eui.Group;
		private imgIconHu: eui.Image;
		protected childrenCreated(): void {
			super.childrenCreated();

			this.btnPeng.source = "gameBtns_json.btnPeng_" + Global.language;
			this.btnGang.source = "gameBtns_json.btnKong_" + Global.language;
			this.btnHu.source = "gameBtns_json.btnHu_" + Global.language;
			this.btnTing.source = "gameBtns_json.btnLiang_" + Global.language;
			this.btnGuo.source = "gameBtns_json.btnPass_" + Global.language;
			this.imgIconHu.source = "gameBtns_json.btnHu_" + Global.language;

			this.initBtns();
			this.btnPeng.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPeng, this);
			this.btnGang.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGang, this);
			this.btnTing.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTing, this);
			this.btnHu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHu, this);
			this.btnGuo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGuo, this);
			this.gPGCards.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPGGroupTap, this);
		}

		public initBtns(): void {
			this.arrTmp = [];
			this.btnPeng.visible = false;
			this.btnGang.visible = false;
			this.btnTing.visible = false;
			this.btnHu.visible = false;
			this.btnGuo.visible = false;
			this.gCardBg.visible = false;
			this.gPGCards.visible = false;
			this.gTingCards.visible = false;
		}

		public showOpt(arr: Array<any>): void {
			this.initBtns();
			var isChi: boolean = arr[0];
			var isPeng: boolean = arr[1];
			var isGang: boolean = arr[2];
			var isHu: boolean = arr[3];
			var isTing: boolean = arr[4];
			console.log("isPeng:" + isPeng, "isGang:" + isGang, "isHu:" + isHu, "isTing:" + isTing);
			if (isHu) {
				this.arrTmp.unshift(this.btnHu);
				this.btnHu.visible = true;
			}
			if (isGang) {
				this.arrTmp.unshift(this.btnGang);
				this.btnGang.visible = true;
			}
			if (isPeng) {
				this.arrTmp.unshift(this.btnPeng);
				this.btnPeng.visible = true;
			}
			if (isTing) {
				this.arrTmp.unshift(this.btnTing);
				this.btnTing.visible = true;
			}

			if (this.arrTmp.length > 0) {
				this.visible = true;
				this.arrTmp.unshift(this.btnGuo);
				this.btnGuo.visible = true;
			}
			for (let i: number = 0; i < this.arrTmp.length; i++) {
				let img: eui.Image = this.arrTmp[i];
				img.x = this.arrPosition[4 - i];
			}
		}
		private onPeng(): void {
			this.initBtns();
			// let arr:Array<CardsGroupInfo> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.PENG);
			// game.GameWebSocket.instance().gameSender.ReqSendCardsGameFun(GamePlayData.Peng_Groups[0]);

			const mj_opts = game.GamePlayData.GetMJ_Operation();
			let mj_opt: room.MJ_Operation
			mj_opts.forEach(e => {
				if (e.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PONG) {
					mj_opt = e;
				}
			})

			if (!mj_opt) {
				return;
			}

			const opt: room.MJ_Operation = new room.MJ_Operation()
			opt.operationType = mj_opt.operationType;//操作类型
			opt.Tiles = [] //牌组  如果是出牌则数组中只有一张牌
			//如果是吃、碰、杠、胡则以下值需要读取或者写入
			opt.ObtainTile = mj_opt.ObtainTile //需要吃碰杠胡的那一张牌 
			opt.ObtainSeat = mj_opt.ObtainSeat //被吃碰杠胡的那个人的座位号 

			//如果是听，则以下值需要读取或写入
			opt.tingTileInfo = [] //MJ_TingTileInfo /和牌信息

			//如果是胡，则以下值需要读取或写入
			opt.maxFan = 3 //最大番数 
			//opt.fans = 3 // MJ_FanInfo 被吃碰杠胡的那个人的座位号 
			//opt.operationID = Global.userSit + 1 //操作id

			room.RoomWebSocket.instance().roomSender.REQ_USEROPERATIONREQ(opt)
		}
		private onGang(): void {
			this.initBtns();
			// var arr: Array<CardsGroupInfo> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.GANG);
			// 	game.GameWebSocket.instance().gameSender.ReqSendCardsGameFun(GamePlayData.Gang_Groups[0]);
			const mj_opts = game.GamePlayData.GetMJ_Operation();
			let mj_opt: room.MJ_Operation
			mj_opts.forEach(e => {
				if (e.operationType == CardsGroupType.MJ_OperationType.MJ_OT_C_KONG) {
					mj_opt = e;
				}
				if (e.operationType == CardsGroupType.MJ_OperationType.MJ_OT_E_KONG) {
					mj_opt = e;
				}
				if (e.operationType == CardsGroupType.MJ_OperationType.MJ_OT_P_KONG) {
					mj_opt = e;
				}
			})

			if (!mj_opt) {
				return;
			}
			const opt: room.MJ_Operation = new room.MJ_Operation()
			opt.operationType = mj_opt.operationType;//操作类型
			opt.Tiles = [] //牌组  如果是出牌则数组中只有一张牌
			//如果是吃、碰、杠、胡则以下值需要读取或者写入
			opt.ObtainTile = mj_opt.ObtainTile //需要吃碰杠胡的那一张牌 
			opt.ObtainSeat = mj_opt.ObtainSeat //被吃碰杠胡的那个人的座位号 

			//如果是听，则以下值需要读取或写入
			opt.tingTileInfo = [] //MJ_TingTileInfo /和牌信息

			//如果是胡，则以下值需要读取或写入
			opt.maxFan = 3 //最大番数 
			//opt.fans = 3 // MJ_FanInfo 被吃碰杠胡的那个人的座位号 
			opt.operationID = 3 //操作id
			room.RoomWebSocket.instance().roomSender.REQ_USEROPERATIONREQ(opt)
			return;
			// }
			// this.showCardGroups(arr);
		}
		private onTing(): void {
			// if(GameParmes.isCurTing ){
			// 	this.btnTing.visible = false;
			// }
			console.log("GameParmes.isHu:", GameParmes.isHu)
			if (GameParmes.isHu == false) {

				ViewManager.ins.gameView.gameUI.gameHand.showTingFlag(true, "ting");
			}
			this.btnTing.visible = false;
		}

		private onHu(): void {
			if (GameParmes.nHuType == 16) {//此时是天胡情况
				this.dispatchEvent(new egret.Event("ShowTianHuFlag"));
			} else {
				const mj_opts = game.GamePlayData.GetMJ_Operation();
				let mj_opt: room.MJ_Operation
				mj_opts.forEach(e => {
					if (e.operationType == CardsGroupType.MJ_OperationType.MJ_OT_WIN) {
						mj_opt = e;
					}
				})

				if (!mj_opt) {
					return;
				}
				const opt: room.MJ_Operation = new room.MJ_Operation()
				opt.operationType = mj_opt.operationType;//操作类型
				opt.Tiles = [] //牌组  如果是出牌则数组中只有一张牌
				//如果是吃、碰、杠、胡则以下值需要读取或者写入
				opt.ObtainTile = mj_opt.ObtainTile //需要吃碰杠胡的那一张牌 
				opt.ObtainSeat = mj_opt.ObtainSeat //被吃碰杠胡的那个人的座位号 

				//如果是听，则以下值需要读取或写入
				opt.tingTileInfo = [] //MJ_TingTileInfo /和牌信息

				//如果是胡，则以下值需要读取或写入
				opt.maxFan = 3 //最大番数 
				//opt.fans = 3 // MJ_FanInfo 被吃碰杠胡的那个人的座位号 
				opt.operationID = 3 //操作id
				room.RoomWebSocket.instance().roomSender.REQ_USEROPERATIONREQ(opt)

				//game.GameWebSocket.instance().gameSender.ReqSendCardsGameFun(GamePlayData.Hu_Groups[0]);
			}
			this.initBtns();
		}
		private onGuo(): void {
			console.log("GameParmes.isCurTing:", GameParmes.isCurTing)
			if (this.btnTing.visible == true && GameParmes.isCurTing) {
				this.initBtns();
				this.sendGameNoOperation();
				ViewManager.ins.gameView.gameUI.gameHand.showTingFlag(false, "ting");
				return

			}

			if (GameParmes.isCurTing && this.btnTing.visible == false) {
				this.btnTing.visible = true;
				ViewManager.ins.gameView.gameUI.gameHand.showTingFlag(false, "ting");
				return;
			}

			this.initBtns();
			this.sendGameNoOperation();
			ViewManager.ins.gameView.gameUI.gameHand.showTingFlag(false, "ting");

		}

		private sendGameNoOperation(): void {
			// var cardsGroup:CardsGroupInfo = new CardsGroupInfo();
			// cardsGroup.cardsit = Global.userSit;
			// cardsGroup.CardsGroupType = CardsGroupType.NO_OPERATION;
			// game.GameWebSocket.instance().gameSender.ReqSendCardsGameFun(cardsGroup);
			const opt: room.MJ_Operation = new room.MJ_Operation()
			opt.operationType = CardsGroupType.MJ_OperationType.MJ_OT_PASS;//操作类型
			opt.Tiles = [] //牌组  如果是出牌则数组中只有一张牌
			//如果是吃、碰、杠、胡则以下值需要读取或者写入
			opt.ObtainTile = 3 //需要吃碰杠胡的那一张牌 
			opt.ObtainSeat = 3 //被吃碰杠胡的那个人的座位号 

			//如果是听，则以下值需要读取或写入
			opt.tingTileInfo = [] //MJ_TingTileInfo /和牌信息

			//如果是胡，则以下值需要读取或写入
			opt.maxFan = 3 //最大番数 
			//opt.fans = 3 // MJ_FanInfo 被吃碰杠胡的那个人的座位号 
			//opt.operationID = 3 //操作id

			room.RoomWebSocket.instance().roomSender.REQ_USEROPERATIONREQ(opt)
			// room.RoomWebSocket.instance(). .REQ_USEROPERATIONREQ(option)
		}
		/** 
		 * @param arrGroup
		 * 显示吃碰杠牌组
		 */
		private showCardGroups(arrGroup: Array<CardsGroupInfo>): void {
			this.clearCardGroup();
			this.visible = this.gCardBg.visible = this.gPGCards.visible = true;
			let num: number = arrGroup.length;
			for (let i: number = 0; i < num; i++) {
				let cardGroup: CardsGroupInfo = arrGroup[i] as CardsGroupInfo;
				let g: eui.Group = new eui.Group();
				this.gPGCards.addChild(g);
				g.name = "" + i;
				g.touchChildren = false;
				for (let j: number = 0; j < cardGroup.cards.length; j++) {
					let card: CardInfo = cardGroup.cards[j] as CardInfo;
					let item: game.BaseCardUI = new game.BaseCardUI();
					g.addChild(item);
					let cardValue: number = card.CardID//game.GameParmes.getCardID(card);
					item.setCard(cardValue);
					item.x = j * 90;
					g.scaleX = g.scaleY = 0.9;
				}

			}
			this.gCardBg.width = this.gPGCards.width + 58;
		}
		private onPGGroupTap(evt: egret.TouchEvent): void {
			var index: number = Number(evt.target.name);
			game.GameWebSocket.instance().gameSender.ReqSendCardsGameFun(GamePlayData.Gang_Groups[index]);
		}
		/*显示待胡牌*/
		public showTingGroup(nCardID: number): void {
			this.clearTingGroup();
			this.visible = this.gCardBg.visible = this.gTingCards.visible = true;
			let arr: Array<room.MJ_Operation> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.CALL);
			//console.log("=====nCardID",nCardID, arr )
			for (let i: number = 0; i < arr.length; i++) {
				let info: room.MJ_Operation = arr[i];
				if (info.Tiles[0] == nCardID) {
					this.createHuCards(info);
					break;
				}
			}
			this.gCardBg.width = this.gTingCards.width + 58;
		}

		private createHuCards(info: room.MJ_Operation): void {
			for (let i: number = 0; i < info.tingTileInfo.length; i++) {
				let opt = info.tingTileInfo[i]

				let item: game.BaseTingCardUI = new game.BaseTingCardUI();
				this.gTingCards.addChild(item);
				let cardNum: number = opt.callTileCount //4 - GamePlayData.arrLPCards[arr[i].CardIndex + 1].length;
				cardNum = cardNum > -1 ? cardNum : 0;
				item.setInfo(opt.callTile, opt.fans, cardNum);
			}
		}

		private clearTingGroup(): void {
			while (this.gTingCards.numChildren > 1) {
				let item = this.gTingCards.removeChildAt(1);
				item = null;
			}
		}
		private clearCardGroup(): void {
			while (this.gPGCards.numChildren > 0) {
				let item = this.gPGCards.removeChildAt(0);
				item = null;
			}
		}
	}
}