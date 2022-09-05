module game {
	export class GameMainUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		private gGameInfo: eui.Group;
		private lbInfo: eui.Label;
		private duyi: eui.Label;
		private lbLeftCard: eui.Label;
		public gameHand: game.GameHandUI;
		public gamePool: game.GamePoolUI;
		private gamePosition: game.GamePositionUI;
		public gameOpt: game.GameOperationUI;
		public gameHSZ: game.GameHSZUI;
		private gameTrust: eui.Group;
		private btnTrust: eui.Image;
		private imgBtnbg: eui.Image;
		private gBtns: eui.Group;
		private btnMore: BaseButton;
		private gSound: eui.Group;
		private btnSoundOff: BaseButton;
		private btnSoundOn: BaseButton;
		private btnRule: BaseButton;
		private btnBack: BaseButton;
		private isGaming: boolean = false;
		private imgTHTip: eui.Image;

		private gTingTip: eui.Group;
		private gTingCards: eui.Group;
		private arrTingCards: Array<any> = [];
		public arrCallCards: Array<any> = [];
		private btnContinue: eui.Image;
		private imgTHIcon: eui.Image;
		private imgTGTip: eui.Image;
		private paiNode:eui.Group;

		private iconTing : eui.Image;
		protected childrenCreated(): void {
			super.childrenCreated();

			comm.DragonAnim.ins.topLayer = this;

			if (Global.language == "en") {
				this.lbLeftCard.text = "Rest 0";
			} else if (Global.language == "tc") {
				this.lbLeftCard.text = "餘牌:0" + "張";
			} else {
				this.lbLeftCard.text = "余牌:0" + "张";
			}
			this.btnContinue.source = "resultButtonContinue_" + Global.language;

			this.btnTrust.source = "gameButton_cancelTrust_" + Global.language;
			this.imgTHIcon.source = "gameIcon_hu_" + Global.language;
			this.imgTHTip.source = "gameIcon_tianhu_" + Global.language;
			this.imgTGTip.source = "gameIcon_tuoguan_" + Global.language;

			this.gamePool = new game.GamePoolUI();
			this.paiNode.addChild(this.gamePool);
			this.gamePool.initCard();

			this.gameHand = new game.GameHandUI();
			this.paiNode.addChildAt(this.gameHand,3);
			this.gameHand.addEventListener("ShowTingGroup", this.onShowTingGroup, this);
			this.gameHand.addEventListener("ShowTingTip", this.onShowTingTip, this);
			this.gameHand.initHand();
			//this.gameHand.touch

			this.gTingTip.zIndex = 100;
		
			this.addChild(this.gameOpt);
			this.gameOpt.addEventListener("ShowTianHuFlag", this.onShowTHFlag, this);
			this.addChild(this.gameHSZ);


			this.addChild(this.gameTrust);
			this.btnTrust.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelTrust, this);

			this.addChild(this.gBtns);
			this.btnMore.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShowMoreBtns, this);
			this.gSound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSoundChange, this);
			this.btnRule.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShowRule, this);
			this.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackRoom, this);
	
			this.btnContinue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnContinue, this);

			this.addEventListener("UserLoseGame", this.onUserLoseGame, this);
			this.gamePosition.addEventListener("OnTimeComplete", this.onTimeComplete, this);
			this.duyi.text = `${Global.dic["局号"]}:${0}`;
			
			this.iconTing = new eui.Image();
			this.iconTing.source = "gameIcon_tip";
			this.iconTing.x = 26;
			this.iconTing.y = 710;
			this.iconTing.visible = false;
			this.iconTing.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTingTipClick, this);
			this.addChild(this.iconTing);

			this.initGame();
			this.initBtns();
		}
		
		public initGame(): void {
			this.btnContinue.visible = false;
			this.gGameInfo.visible = false;
			this.gameTrust.visible = false;
			this.imgTHTip.visible = false;
			this.iconTing.visible = false;
			this.gTingTip.visible = false;
			this.isGaming = true;
			this.arrTingCards = [];
			this.gameHSZ.init();
			this.gamePool.initCard();
			this.gameHand.initHand();
			this.gameOpt.initBtns();
			for (let i: number = 0; i < 3; i++) {
				this["gameUser" + i].visible = false;
			}
			this.changeMoreGroup(false, false);
			this.onShowSoundState();
		}
		private initBtns(): void {
			this.btnMore.setImg(Global.commURL + "/shareSheet/commGameButton_more.png");
			this.btnSoundOn.setImg(Global.commURL + "/shareSheet/commGameButton_soundon.png");
			this.btnSoundOff.setImg(Global.commURL + "/shareSheet/commGameButton_soundoff.png");
			this.btnRule.setImg(Global.commURL + "/shareSheet/commGameButton_help.png");
			this.btnBack.setImg(Global.commURL + "/shareSheet/commGameButton_back.png");
		}
		private onShowMoreBtns(): void {
			if (this.gSound.visible) {
				this.changeMoreGroup(false, true);
			} else {
				this.changeMoreGroup(true, true);
			}
		}
		private changeMoreGroup(b: boolean, isAnim: boolean): void {
			if (isAnim) {
				if (b) {
					this.gSound.visible = this.btnRule.visible = this.btnBack.visible = true;
					this.gSound.y = this.btnRule.y = this.btnBack.y = 0;
					this.imgBtnbg.height = 0;
					egret.Tween.get(this.btnRule).to({ y: 120 }, 80);
					egret.Tween.get(this.gSound).to({ y: 240 }, 160);
					egret.Tween.get(this.btnBack).to({ y: 360 }, 240);
					egret.Tween.get(this.imgBtnbg).to({ height: 360 }, 240);
				} else {
					egret.Tween.get(this.btnRule).to({ y: 0 }, 80);
					egret.Tween.get(this.gSound).to({ y: 0 }, 160);
					egret.Tween.get(this.imgBtnbg).to({ height: 0 }, 240);
					egret.Tween.get(this.btnBack).to({ y: 0 }, 240).call(function () {
						this.gSound.visible = this.btnRule.visible = this.btnBack.visible = false;
					}, this);
				}
			} else {
				this.gSound.visible = this.btnRule.visible = this.btnBack.visible = b;
				this.imgBtnbg.height = b ? 360 : 0;
			}

		}
		private onSoundChange(): void {
			Global.isSound = !Global.isSound;
			this.onShowSoundState();
			sound.SoundManager.getInstance().setBgOn(Global.isSound);
			sound.SoundManager.getInstance().setEffectOn(Global.isSound);
			let nSound: number = Global.isSound ? 1 : 2;
			BaseHttpRequest.sendRequestGetOnce(Global.baseURL + "SetUserInfo", function () { }, this, "token=" + Global.token + "&sound=" + nSound);
		}
		private onShowSoundState(): void {
			this.btnSoundOn.visible = Global.isSound;
			this.btnSoundOff.visible = !Global.isSound;
		}
		private onShowRule(): void {
			try {
				window["openActiveGame"](4);//打开帮助
			} catch (error) { }
		}
		private onBackRoom(): void {
			if (!this.isGaming) {
				ViewManager.ins.switchToRoom();
			} else {
				TipsUtils.showTipsFromCenter(Global.dic["游戏未结束"]);
			}
		}
		/*初始化四个玩家*/
		public initUser(): void {
			console.log('初始化四个玩家');
			
			this.isGaming = true;
			let len: number = game.GameUserList.arrUserList.length;
		
			for (let i: number = 0; i < len; i++) {
				let user: game.GameUserInfo = game.GameUserList.arrUserList[i];
				console.log(user.userName, user.userSit, Global.userSit)
				let p: number = Global.getUserPosition(user.userSit);
				//console.log("=====PP", p)
				this["gameUser" + p].setUserInfo(user);
				this["gameUser" + p].visible = true;

				const girlArr = [20,19,18,17,6,5,4,3,2,1,0 ]

				let Gidx =  Global.getHeadByName(user.userName);
				if (Global.userName == user.userName) {
					Gidx =  Global.userHead;
			
				} else {
					
					Gidx =Global.getHeadByName(user.userName)
				}
	
				const sex = girlArr.some(e=>(e == Gidx)) ? "f" : "m";
		
				this["gameUser" + p].sex = sex;
			}

			this.showGameInfo();
		}

		public showDapiaoInfo() {
			let len: number = game.GameUserList.arrUserList.length;
			//console.log("===showDapiaoInfo===",len)
			for (let i: number = 0; i < len; i++) {
				let user: game.GameUserInfo = game.GameUserList.arrUserList[i];
				let p: number = Global.getUserPosition(user.userSit);
				this["gameUser" + p].showDapiaoInfo();
			}
		}
		private showGameInfo(): void {
			this.gGameInfo.visible = true;
			this.lbInfo.text = this.findRoomName() + " " + Global.strGameGUID;

		}
		public showRoomGUID(guid: string) {

			this.duyi.text = `${Global.dic["局号"]}:${guid}`;
		}

		public initPosition(): void {
			this.gamePosition.setPosition();
		}
		private drawHandTimer:egret.Timer;
		/*初始化玩家手牌*/
		public initHandCard(): void {
			SoundModel.playEffect(SoundModel.LiPai);
			this.drawHandTimer = new egret.Timer(700,2);
			this.drawHandTimer.start()
			this.drawHandTimer.addEventListener(egret.TimerEvent.TIMER,this.onDrawHandsTimer,this);
			this.drawHandTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onDrawCardsComplete,this);
			this.gameHand.createHandCard(false, 0);
			let len: number = game.GameUserList.arrUserList.length;
		
			for (let i: number = 0; i < len; i++) {
				let user: game.GameUserInfo = game.GameUserList.arrUserList[i];
				console.log(user.userName, user.userSit, Global.userSit)
				let p: number = Global.getUserPosition(user.userSit);
				//console.log("=====PP", p)
				this["gameUser" + p].setUserInfo(user);
				this["gameUser" + p].visible = true;
			}
		}
		private onDrawHandsTimer(evt:egret.TimerEvent):void{
			SoundModel.playEffect(SoundModel.LiPai);
		}
		private onDrawCardsComplete(evt:egret.TimerEvent):void{
		}

		public showWallCount(count: number): void {
			if (Global.language == "en") {
				//if (108 - GamePlayData.CardsWall_Head_Index - GamePlayData.CardsWall_Tail_Index > 0) {
				this.lbLeftCard.text = "Rest " + (count);
				//} else {
				//	this.lbLeftCard.text = "Rest 0";
				//}
			} else if (Global.language == "tc") {
				//if (108 - GamePlayData.CardsWall_Head_Index - GamePlayData.CardsWall_Tail_Index > 0) {
				this.lbLeftCard.text = "餘牌:" + (count) + "張";
				//} else {
				//this.lbLeftCard.text = "餘牌:0" + "张";
				//}
			} else {
				//if (108 - GamePlayData.CardsWall_Head_Index - GamePlayData.CardsWall_Tail_Index > 0) {
				this.lbLeftCard.text = "余牌:" + (count) + "张";
				// } else {
				// 	this.lbLeftCard.text = "余牌:0" + "张";
				// }
			}

		}

		public startHSZAndDQ(state: number): void {
			if (state == 1) {//换三张提示
				this.gameHSZ.showHSZTips();
				this.gameHand.onShowHSZCards();
			} else {//定缺提示
				this.gameHSZ.showDQTips();
			}

		}


		/*玩家出牌*/
		public userSendCard(card: CardInfo, b: boolean): void {
			this.gameOpt.visible = false;
			this.gamePool.addCardToPool(card);
			let p: number = Global.getUserPosition(card.Sit);
			this.gameHand.updataHandsByPosition(p, 0);

			const sex =  this["gameUser" + p].sex ;
			SoundModel.playEffect(`${sex}${SoundModel.paiSoundName[card.CardID]}`)
	
			//处理托管出牌，没有显示听牌提示的问题

		}
		/*显示吃碰杠等操作按钮*/
		public onShowOpt(arr: Array<any>): void {
			this.arrCallCards = [];
			this.gameOpt.showOpt(arr);//0 吃 1碰 2杠 3胡 4听
			if (GameParmes.isHu) {//如果玩家胡牌后，这时候再次胡或杠停止自动出牌
				if (arr[2] || arr[3]) {
					this.gameHand.stopAutoSendCard();
				}
			}
			if (arr[3] && GameParmes.nHuType == 16) {//此时是天胡情况 下面的判断就不用走了
				if (arr[4] == true) {
					this.checkLPCards();
					let arr: Array<any> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.CALL);
					for (let i: number = 0; i < arr.length; i++) {
						this.arrCallCards.push(arr[i]);
					}
				}
				return;
			}
			if (arr[4] == false && arr[3] == false) {//非听牌与非胡牌 隐藏听牌提示
				//this.iconTing.visible = false;
				this.gTingTip.visible = false;
			}
			if (arr[4]) {

			}
		}

		public checkLPCards(): void {//需要同时调用，顺序固定，先手牌在牌池
			this.gameHand.checkLPCards();
			this.gamePool.checkLPCards();
		}
		/*显示*/
		private onShowTHFlag(): void {
			this.gameHand.showTingFlag(true, "hu");
			this.imgTHTip.visible = true;
		}
		private onShowTingGroup(evt: egret.Event): void {
			let nCardID: number = evt.data;
			this.gameOpt.showTingGroup(nCardID);
		}

		/*显示托管界面*/
		public showTrust(b: boolean): void {
			this.gameTrust.visible = b;
		}
		/*取消托管*/
		private onCancelTrust(): void {
			//console.log("===onCancelTrust====")
			room.RoomWebSocket.instance().roomSender.ReqGamePlayerReleveTrustFun()
			// room.RoomSocketSender.ins().gameSender.ReqGamePlayerReleveTrustFun();
		}
		/**
		 * @param card 得到的牌的信息
		 */
		public getOneCard(card: CardInfo): void {
			this.gameOpt.visible = false;

			this.gameHand.getOneCard(card);

		}
		public hideTingFlag(): void {
			this.gameHand.showTingFlag(false, "");
			this.gameHand.showHuFlag();
		}
		/**
		 * 
		 * @param sit 
		 * @param huCardID 
		 * @param type 3 = 自摸
		 */
		public showHuCard(sit: number, huCardID: number): void {
			this.imgTHTip.visible = false;
			this.gameHand.showHuCard(sit, huCardID);

		}

		public delPoolCard(sit: number): void {
			this.gamePool.playHuAnim(sit);//播放闪电动画,然后移除这张牌
		}
		/** 
		 * @param nSit 吃碰杠玩家座位号
		 * 有玩家进行了吃碰杠操作ch
		 */
		public updataUserCPG(nSit: number, card: CardInfo): void {

			let p: number = Global.getUserPosition(nSit);

			this.gameHand.updataHandsByPosition(p, 0, true);
			this.gameHand.createCPGCard(nSit);
			if (card.Sit != nSit) {//吃碰杠的牌的座位号和吃碰的人的座位号不等，牌池的牌消失
				//console.log("=====吃碰杠的牌的座位号和吃碰的人的座位号不等，牌池的牌消失", card.Sit)
				this.gamePool.removeCardToPool(card.Sit, card);
			}
			this.gamePosition.stopTime();
			this.gamePosition.startTime(GameParmes.chiPengGangSurplusTime);
			this.gameOpt.visible = false;
			//this.changeUserRight();
		}

		public onGameContinue(): void {
			console.log("===onGameContinue===")
			if(GamePlayData.isSelfTing){
				this.iconTing.visible = true;
			}else{
				this.iconTing.visible = false;
			}
			this.gameHand.createHandCard(true, 0);//还原手牌
			this.gameHand.createAllCPG();//还原吃碰杠牌

			this.gamePool.reductionCardsPool();//还原牌池
			this.showGameInfo();


			// room.RoomWebSocket.instance().roomSender.ReqGamePlayerReleveTrustFun();//解除托管
			// if (GameParmes.gameStage == GameStageType.PLAYING) {
			// 	//this.onUserDingQue();
			// }
			
			//还原胡牌数据
			// for (let i: number = 0; i < GameParmes.onBreakPlayerHuCards.length; i++) {
			// 	let arr: Array<number> = GameParmes.onBreakPlayerHuCards[i];
			// 	for (let j: number = 0; j < arr.length; j++) {
			// 		this.showHuCard(i, arr[j], 4);
			// 	}
			// }
			//this.changeUserRight();
			// if (arr && arr.length > 0) {
			// 	this.iconTing.visible = true;
			// 	this.copyTingCards(arr[0].CallCards);
			// 	this.createHuCards(arr[0].CallCards);
			// }
			// if (card) {//断线回来自己摸了一张牌，特殊处理这张牌
			// 	this.gameHand.delOneHandCard(card);
			// 	this.gameHand.getOneCard(card);
			// }
		}
		public showAllHandCard(body: room.VGGameResultNtc): void {
			this.iconTing.visible = false;
			this.gTingTip.visible = false;
			this.gameTrust.visible = false;
			this.gameOpt.visible = false;
			this.isGaming = false;

			//this.gameHand.clearAllHand();
			this.gameHand.createHandCard(true, 1);//全部亮开手牌

			for (let i: number = 0; i < 3; i++) {
				this["gameUser" + i].showCurrentAnim(false);
			}
		}
		
		/*玩家金币变化*/
		public showCoinChange(arrCoin: Array<number>): void {
			//延迟1s显示加减金币动画
			for (let i: number = 0; i < arrCoin.length; i++) {
				if (arrCoin[i] != 0) {
					let p: number = Global.getUserPosition(i);
					let coin: number = arrCoin[i];
					egret.setTimeout(function () {
						this["gameUser" + p].updataCoin(coin);
						this.gameHSZ.showCoinAnim(p, coin);
					}, this, 1000);
				}
			}
		}
		/*更新玩家金币*/
		public updataUserCoin(sit: number, coin: number): void {
			let p: number = Global.getUserPosition(sit);
			this["gameUser" + p].showResultCoin(coin);
			if (Global.userSit == sit) {
				Global.gameCoin = coin;
			}
		}
		/*某玩家认输*/
		public onUserLoseGame(evt: egret.Event): void {
			let nSit: number = evt.data;
			this.gameHSZ.showUserLose(evt.data);
			if (nSit == Global.userSit) {//如果是自己认输，自己手牌置灰
				this.gameHand.showHuFlag();
			}
		}

		public playAnim(str: string, sit: number, obSit: number = -1): void {
			let p: number = Global.getUserPosition(sit);
			let op: number = Global.getUserPosition(obSit);
			if (str == "peng") {
				comm.DragonAnim.ins.playAnimByName(str, p);
				SoundModel.playEffect(SoundModel.CHU);
				
			}
			if (str == "mingGang") {
				comm.DragonAnim.ins.playAnimByName("gf", p);
				comm.DragonAnim.ins.playAnimByName("ljf", op);
			
			}
			if (str == "anGang") {
				comm.DragonAnim.ins.playAnimByName("gf", p);
				comm.DragonAnim.ins.playAnimByName("ljf", -1);
			
			}
			if (str == "buGang") {
				comm.DragonAnim.ins.playAnimByName("gf", p);
				comm.DragonAnim.ins.playAnimByName("ljf", -1);
			
			}
			if (str == "hu" || str == "zm") {
				const sex =  this["gameUser" + p].sex ;
				SoundModel.playEffect(`${sex}${SoundModel.HU}`);
				comm.DragonAnim.ins.playAnimByName(str, p);
			}
			if (str == "gskh" || str == "hjzy" || str == "qgh") {//杠上开花 呼叫转移 抢杠胡
				comm.DragonAnim.ins.playAnimByName(str, p);
			}
			if (str == "ypdx") {//一炮多响
				comm.DragonAnim.ins.playAnimByName("ypdx", op);
				SoundModel.playEffect(SoundModel.huPaiOrDianPao);
			}
			if (str == "djjs" || str == "liuju") {//对局结束
				comm.DragonAnim.ins.playAnimByName(str, -1);
			}
			if (str == "dj" || str == "hz") {//大叫，花猪
				comm.DragonAnim.ins.playAnimByName(str, p);
			}
		}

		public changeUserRight(): void {
			const nCurrent: number = game.GamePlayData.M_C_P_G_sit;//当前操作人的座位号

			this.gamePosition.setCurrentPosition(nCurrent);
			let p: number = Global.getUserPosition(nCurrent);
			for (let i: number = 0; i < 3; i++) {
				if (p == i) {
					this["gameUser" + i].showCurrentAnim(true);
				} else {
					this["gameUser" + i].showCurrentAnim(false);
				}
			}
		}

		public showResultBtn(): void {
			this.btnContinue.visible = true;
			this.addChild(this.btnContinue);
		}
		/**
		 * 点击继续游戏
		 */
		private onBtnContinue(): void {
			this.btnContinue.visible = false;

			GameController.onRequeseNextGame();

			//this.dispatchEvent(new egret.Event("OnGameContinue", true, true));
		}
		public startTime(count: number, str: string = ""): void {
			this.gamePosition.startTime(count, str);
		}
		private onTingTipClick(): void {
			console.log("==show ting pai")
			this.gTingTip.visible = !this.gTingTip.visible;
			if(this.gTingTip.visible){
				this.showTingGroup();
			}else{
				this.gTingTip.visible = false;
				this.arrTingCards = [];
			}
		}
		/*显示听牌的灯泡提示*/
		public onShowTingTip(): void {
			console.log("==show ting pai")
			this.iconTing.visible = true;
		}

		public onShowUserLiang(nSit:number){
			let p = Global.getUserPosition(nSit);
			
			this["gameUser" + p].isShowLiang(true);

			this["gameUser" + p].shake();

		}


		/*显示待胡牌*/
		private showTingGroup(): void {
			// let arr: Array<room.MJ_Operation> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.CALL);

			 let arr: Array<room.MJ_TingTileInfo> = GamePlayData.MJ_selfTingarr;//GamePlayData.GetChiPengGangHuGroup(CardsGroupType.CALL);
			console.log("==showTingGroup=arr",arr)
		
			this.copyTingCards(arr);
			this.createHuCards(arr);
		
		}
		
		private copyTingCards(arr: Array<any>): void {
			this.arrTingCards = [];
			for (let i: number = 0; i < arr.length; i++) {
				this.arrTingCards.push(arr[i]);
			}
		}
		private createHuCards(arr: Array<any>): void {
			while (this.gTingCards.numChildren > 1) {
				let item = this.gTingCards.removeChildAt(1);
				item = null;
			}
			this.gTingTip.visible = true;

			
	
			//console.log("===xxx==creat hu=== " ,arr)
		
			for (let i: number = 0; i < arr.length; i++) {
				let item: game.BaseTingCardUI = new game.BaseTingCardUI();
				this.gTingCards.addChild(item);
				let info: room.MJ_TingTileInfo = arr[i];
				//console.log("-==create hu pai", info)
				//if (info.ObtainCardIndex + 1 == nIndex) {
				let cardNum = info.callTileCount;

				item.setInfo(info.callTile, info.fans, cardNum);
			}
			this.gTingTip.width = this.gTingCards.width + 58;
		}

		private onTimeComplete(evt: egret.Event): void {
			let str: string = evt.data;
			if (str == "hsz") {//玩家未操作,帮他处理
				this.gameHSZ.autoHSZ();
			}
		}
		private findRoomName(): string {
			let str: string = "";
			switch (Global.myPos.roomID) {
				case 1:
					str = Global.dic["入门馆"];
					break;
				case 2:
					str = Global.dic["初级馆"];
					break;
				case 3:
					str = Global.dic["中级馆"];
					break;
				case 4:
					str = Global.dic["高级馆"];
					break;
				case 5:
					str = Global.dic["顶级馆"];
					break;
				case 6:
					str = Global.dic["至尊馆"];
					break;
			}
			return str;
		}
		public dispose(): void {

		}

	}
}