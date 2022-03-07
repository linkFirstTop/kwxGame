module game {
	export class GameHandUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}
		//[{x:0,y:0},{x:0,y:0},{x:0,y:0}]
		/*左边玩家 手牌 亮牌 吃碰 暗杠等坐标*/
		private arrLHP: Array<any> = [{ x: 202, y: 860 }, { x: 228, y: 800 }, { x: 248, y: 755 }, { x: 267, y: 712 }, { x: 285, y: 670 }, { x: 302, y: 628 },
		{ x: 321, y: 587 }, { x: 337, y: 549 }, { x: 354, y: 510 }, { x: 371, y: 472 }, { x: 387, y: 435 }, { x: 402, y: 399 }, { x: 417, y: 365 }, { x: 431, y: 332 }];

		private arrLLP: Array<any> = [{ x: 200, y: 894 }, { x: 220, y: 842 }, { x: 238, y: 799 }, { x: 255, y: 757 }, { x: 274, y: 715 }, { x: 291, y: 674 },
		{ x: 309, y: 633 }, { x: 326, y: 593 }, { x: 344, y: 555 }, { x: 358, y: 516 }, { x: 374, y: 479 }, { x: 389, y: 443 }, { x: 404, y: 407 }, { x: 420, y: 372 }];

		private arrLCP: Array<any> = [[{ x: 326, y: 356 }, { x: 307, y: 390 }, { x: 289, y: 426 }, { x: 296, y: 369 }], [{ x: 265, y: 481 }, { x: 245, y: 519 }, { x: 225, y: 558 }, { x: 236, y: 499 }],
		[{ x: 197, y: 617 }, { x: 175, y: 659 }, { x: 152, y: 702 }, { x: 164, y: 638 }], [{ x: 121, y: 773 }, { x: 97, y: 818 }, { x: 72, y: 867 }, { x: 86, y: 799 }]];

		private arrLAP: Array<any> = [[{ x: 331, y: 328 }, { x: 312, y: 367 }, { x: 292, y: 407 }, { x: 304, y: 351 }], [{ x: 264, y: 465 }, { x: 245, y: 507 }, { x: 224, y: 550 }, { x: 238, y: 492 }],
		[{ x: 193, y: 611 }, { x: 172, y: 656 }, { x: 150, y: 700 }, { x: 163, y: 638 }], [{ x: 121, y: 771 }, { x: 98, y: 817 }, { x: 75, y: 865 }, { x: 89, y: 802 }]];

		/*右边玩家 手牌 亮牌 吃碰 暗杠等坐标*/
		private arrRHP: Array<any> = [{ x: 1426, y: 332 }, { x: 1445, y: 378 }, { x: 1457, y: 412 }, { x: 1472, y: 448 }, { x: 1485, y: 485 }, { x: 1500, y: 523 },
		{ x: 1517, y: 563 }, { x: 1533, y: 601 }, { x: 1549, y: 641 }, { x: 1566, y: 683 }, { x: 1582, y: 726 }, { x: 1600, y: 769 }, { x: 1617, y: 813 }, { x: 1637, y: 858 }];

		private arrRLP: Array<any> = [{ x: 1411, y: 371 }, { x: 1430, y: 415 }, { x: 1444, y: 452 }, { x: 1459, y: 488 }, { x: 1475, y: 526 }, { x: 1490, y: 563 },
		{ x: 1506, y: 600 }, { x: 1523, y: 640 }, { x: 1539, y: 682 }, { x: 1557, y: 723 }, { x: 1574, y: 765 }, { x: 1592, y: 808 }, { x: 1611, y: 850 }, { x: 1629, y: 894 }];

		private arrRCP: Array<any> = [[{ x: 1733, y: 867 }, { x: 1711, y: 818 }, { x: 1689, y: 773 }, { x: 1723, y: 802 }], [{ x: 1662, y: 702 }, { x: 1643, y: 659 }, { x: 1623, y: 617 }, { x: 1654, y: 638 }],
		[{ x: 1597, y: 558 }, { x: 1579, y: 519 }, { x: 1561, y: 481 }, { x: 1588, y: 500 }], [{ x: 1539, y: 426 }, { x: 1523, y: 390 }, { x: 1507, y: 356 }, { x: 1532, y: 371 }]];

		private arrRAP: Array<any> = [[{ x: 1734, y: 865 }, { x: 1712, y: 817 }, { x: 1691, y: 771 }, { x: 1723, y: 802 }], [{ x: 1665, y: 700 }, { x: 1644, y: 656 }, { x: 1624, y: 611 }, { x: 1656, y: 638 }],
		[{ x: 1597, y: 550 }, { x: 1577, y: 507 }, { x: 1557, y: 465 }, { x: 1586, y: 492 }], [{ x: 1533, y: 407 }, { x: 1514, y: 367 }, { x: 1496, y: 328 }, { x: 1525, y: 351 }]];

		private arrHuP: Array<any> = [[{ x: 319, y: 842 }, { x: 335, y: 799 }, { x: 350, y: 757 }, { x: 367, y: 715 }], [{ x: 496, y: 381 }],
		[{ x: 1335, y: 371 }, { x: 1348, y: 406 }, { x: 1360, y: 443 }, { x: 1372, y: 479 }], [{ x: 1523, y: 863 }, { x: 1457, y: 863 }, { x: 1392, y: 863 }, { x: 1331, y: 863 }]];
		/*四个玩家手牌容器*/
		private gHandCardL: eui.Group = new eui.Group();
		private gHandCardU: eui.Group = new eui.Group();
		private gHandCardR: eui.Group = new eui.Group();
		private gHandCardD: eui.Group = new eui.Group();
		/*四个玩家吃碰杠容器*/
		private gOtherCardL: eui.Group = new eui.Group();
		private gOtherCardU: eui.Group = new eui.Group();
		private gOtherCardR: eui.Group = new eui.Group();
		private gOtherCardD: eui.Group = new eui.Group();
		/*四个玩家胡牌容器*/
		private gHuCardL: eui.Group = new eui.Group();
		private gHuCardU: eui.Group = new eui.Group();
		private gHuCardR: eui.Group = new eui.Group();
		private gHuCardD: eui.Group = new eui.Group();
		private nAutoTime: number = -1;//自动摸打计时器
		private arrHSZCards: Array<BaseHandCardUI> = [];
		private currentCard: BaseHandCardUI;
		private isSortComplete: boolean = false;
		private isHSZStart: boolean = false;
		public initHand(): void {
			this.width = GameConfig.curWidth();
			this.height = GameConfig.curHeight();

			this.arrHSZCards = [];
			this.currentCard = null;
			this.isSortComplete = false;
			this.isHSZStart = false;

			this.addChild(this.gHuCardL);

			this.addChild(this.gHuCardR);
			this.addChild(this.gHuCardD);

			this.addChild(this.gHandCardL);
			this.addChild(this.gHandCardU);

			this.addChild(this.gHuCardU);//调整对家胡牌层级

			this.addChild(this.gHandCardR);
			this.addChild(this.gHandCardD);

			this.gHandCardD.addEventListener("OnClickHandCard", this.onClickHandCard, this);

			this.addChild(this.gOtherCardL);
			this.addChild(this.gOtherCardU);
			this.addChild(this.gOtherCardR);
			this.addChild(this.gOtherCardD);
			this.clearAllGroup();

			/*for(let i:number = 0;i < 4;i++){
				this.showHuCard(i,1,3);
			}*/

			/*for(let j:number = 0;j < 4;j++){
				this.testHand(j,0);
			}*/
		}
		
		/*创建手牌  state 0暗牌状态 1亮牌状态*/
		public createHandCard(isShow: boolean, state: number): void {
			for (let j: number = 0; j < 3; j++) {
				this.updataHandsByPosition(j, state, isShow);
			}
			if (!isShow) {
				this.showHandCard();
			}
		}
		/*用于处理开始的发牌*/
		private showHandCard(): void {

			var len: number = 0;
			for (let j: number = 0; j < 3; j++) {
				for (let i: number = 0; i < 3; i++) {
					let g: eui.Group = this.findHandGroup(i);
					let count: number = len + 4 > g.numChildren ? g.numChildren : len + 4;
					for (let n: number = len; n < count; n++) {
						egret.Tween.get(g).wait(j * 800).call(function () {
							g.getChildAt(n).visible = true;
						}, this);
					}
				}
				len += 4;
			}
			egret.Tween.get(this).wait(3000).call(function () {
				let p =  Global.getUserPosition(Global.userSit); 
				game.GamePlayData.SetHandCardsSorting(p);
				this.updataHandsByPosition(p, 0);
				this.isSortComplete = true;
				this.onShowHSZCards();

				// ViewManager.ins.gameView.gameUI.gameHSZ.showDapiaoPanel(true);
				//ViewManagergame.GameHSZUI.
			}, this);
		}

		/*用于处理开始的发牌*/
		public showResultCard(body: room.VGGameResultNtc): void {
			console.log("====showResultCard=====", body.userInfos)
			//
			body.userInfos.forEach((e, i) => {
				//∂console.log("根据发牌数据创建手牌",e)
				const tiles = e.tileSets[0].Tiles;
				let nSit = e.userPos.seatID ;
				let p: number = Global.getUserPosition(nSit);

				//",nSit,"P:", p,"Global.userSit:", Global.userSit,e.tileSets);

				if( nSit != Global.userSit ){

					let g = this.findHandGroup(p);
					for (let n: number = 0; n < tiles.length; n++) {
						if(n < g.$children.length){
							const c: any = g.getChildAt(n);
							c.updateCard(tiles[n])
						}		
					}
				}
			})

			var len: number = 0;
			for (let j: number = 0; j < 4; j++) {
				for (let i: number = 0; i < 4; i++) {
					let g: eui.Group = this.findHandGroup(i);
					let count: number = len + 4 > g.numChildren ? g.numChildren : len + 4;
					for (let n: number = len; n < count; n++) {
						egret.Tween.get(g).wait(j * 800).call(function () {
							g.getChildAt(n).visible = true;
							const p: any = g.getChildAt(n)
			
						}, this);
					}
				}
				len += 4;
			}
			egret.Tween.get(this).wait(3000).call(function () {
				let p = Global.getUserPosition(Global.userSit)
				game.GamePlayData.SetHandCardsSorting(p);
				this.updataHandsByPosition(p, 0);
				this.isSortComplete = true;
				this.onShowHSZCards();
			}, this);
		}

		/*显示玩家的胡牌*/
		public showHuCard(sit: number, cardID: number, type: number): void {
			let p: number = Global.getUserPosition(sit);
			let card: CardInfo = new CardInfo();
			card.CardID = cardID;
			card.Sit = sit;
			let cardValue: number = card.CardID//game.GameParmes.getCardID(card);
			let gHu: eui.Group = this.findHuGroup(p);
			let len: number = gHu.numChildren;
			let item: game.BaseHuCardUI = new game.BaseHuCardUI();
			item.setCard(p, len, cardValue);
			item.cardInfo = card;
			gHu.addChild(item);
			if (p == 2) {
				if (len < 4) {
					item.x = this.arrHuP[p][len % 4].x;
					item.y = this.arrHuP[p][len % 4].y;
					gHu.addChildAt(item, 0);
				} else {
					item.x = this.arrHuP[p][len % 4].x - 8;
					item.y = this.arrHuP[p][len % 4].y - 20;
					gHu.addChildAt(item, 4);
				}
			}
			if (p == 3) {
				if (len < 4) {
					item.x = this.arrHuP[p][0].x + len * 40;
					item.y = this.arrHuP[p][0].y;
				} else {
					item.x = this.arrHuP[p][0].x + (len % 4) * 40 - 4;
					item.y = this.arrHuP[p][0].y - 10;
				}
			}
			if (p == 1) {
				if (len < 4) {
					item.x = this.arrHuP[p][len % 4].x;
					item.y = this.arrHuP[p][len % 4].y;
				} else {
					item.x = this.arrHuP[p][len % 4].x + 6;
					item.y = this.arrHuP[p][len % 4].y - 10;
				}
			}
			if (p == 0) {
				if (len < 4) {
					item.x = this.arrHuP[p][len % 4].x;
					item.y = this.arrHuP[p][len % 4].y;
				} else {
					item.x = this.arrHuP[p][len % 4].x + 6;
					item.y = this.arrHuP[p][len % 4].y - 16;
				}
			}
			if (type == 3) {//自摸

				game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(sit), [card], sit);
				if (p == 3 && GameParmes.nHuType == 16) {//天胡自摸的时候需要删除手牌中的胡牌
					this.updataHandsByPosition(Global.userSit, 0);
				} else {
					this.delHandCard(p);
				}
				comm.DragonAnim.ins.playAnimByPosition("zmbd", item.x + 50, item.y);
			}
		}
		/*删除自摸胡牌的那张手牌*/
		private delHandCard(p: number): void {
			let g: eui.Group = this.findHandGroup(p);
			let len: number = g.numChildren;
			let item: game.BaseHandCardUI;
			if (p == 2) {//删除第一张
				item = g.removeChildAt(0) as game.BaseHandCardUI;
			} else {//删除最后一张
				item = g.removeChildAt(len - 1) as game.BaseHandCardUI;
			}
			item = null;
		}
		public delOneHandCard(info: CardInfo): void {
			for (let i: number = 0; i < this.gHandCardD.numChildren; i++) {
				let item: BaseHandCardUI = this.gHandCardD.getChildAt(i) as BaseHandCardUI;
				if (item.cardInfo.CardID == info.CardID) {
					this.gHandCardD.removeChild(item);
					break;
				}
			}
			for (let i: number = 0; i < this.gHandCardD.numChildren; i++) {
				let item: BaseHandCardUI = this.gHandCardD.getChildAt(i) as BaseHandCardUI;
				item.x = i * 90;
				item.y = 0;
			}
			this.gHandCardD.y = GameConfig.curHeight() - this.gHandCardD.height;
			this.gHandCardD.x = (GameConfig.curWidth() - this.gHandCardD.width) / 2;
		}
		public getOneCard(info: CardInfo): void {
			let p: number = Global.getUserPosition(info.Sit);
			// let nQue: number = game.GameUserList.arrUserList[p].CardID;
			let ghand: eui.Group = this.findHandGroup(p);
			let card: BaseHandCardUI = new BaseHandCardUI();
			ghand.addChild(card);
			let isQue: boolean = false;
			let cardValue: number = info.CardID; //game.GameParmes.getCardID(info);
			if (p == 0) {
				if (cardValue > 0) {
					let nHua: number = game.GameParmes.getHua(info);
					// if (nHua == nQue) {
					// 	isQue = true;
					// }
				}
				//自动打牌
				if (GameParmes.isHu || isQue) {
					this.nAutoTime = egret.setTimeout(function () {
						egret.clearTimeout(this.nAutoTime);
						this.nAutoTime = -1;
						GameController.ReqUserSendCard(info);
					}, this, 1500);
				}
			}

			card.setCard(p, 0, cardValue, 0, isQue);
			if (p == 2) {
				card.x = this.arrLHP[0].x;
				card.y = this.arrLHP[0].y;
				ghand.addChild(card);
			}
			if (p == 3) {
				card.x = -54;
			}
			if (p == 1) {
				card.setCard(p, 13, 1, 0, isQue);
				card.x = this.arrRHP[0].x;
				card.y = this.arrRHP[0].y;
				ghand.addChildAt(card,0);
			}
			if (p == 0) {
				card.cardInfo = info;
				card.x = (ghand.numChildren - 1) * 90;
				card.x += 10;
			}
		}

		/*停止自动出牌*/
		public stopAutoSendCard(): void {
			if (this.nAutoTime > -1) {
				egret.clearTimeout(this.nAutoTime);
				this.nAutoTime = -1;
			}
		}
		private copyHandCard(arrTmp: Array<CardInfo>): Array<CardInfo> {

			//console.log("=arrTmp==",arrTmp)
			let arr: Array<CardInfo> = [];
			for (let i: number = 0; i < arrTmp.length; i++) {
				let card: CardInfo = new CardInfo();
				card.CardID = arrTmp[i].CardID;
				card.Sit = arrTmp[i].Sit;
				arr.push(card);
			}
			return arr;
		}

		/***
		 * sit 是本地座位
		 */
		public updataHandsByPosition(sit: number, state: number, isShow: boolean = true): void {
			//console.log("===sit",sit)

			let p: number = sit; //
			let ghand: eui.Group = this.findHandGroup(p);

			this.clearGroup(ghand);
			console.log("---clear===")

			let arr: Array<CardInfo> = this.copyHandCard(game.GamePlayData.getHandCards(sit));
			let index: number = 0;
			let len: number = arr.length;
			if (arr.length % 3 == 2) {//玩家有摸牌牌权
				index = 0;
			} else {
				index = 1;
			}
			for (let i: number = 0; i < len; i++) {
				let isQue: boolean = false;
				let info: CardInfo = arr[i];

				let cardValue: number = info.CardID; //game.GameParmes.getCardID(info);
				if (cardValue > 0) {
					let nHua: number = game.GameParmes.getHua(info);
					// if (nHua == nQue) {
					// 	isQue = true;
					// }
				}
				let card: BaseHandCardUI = new BaseHandCardUI();
				ghand.addChild(card);
				card.visible = isShow;

				if (p == 2) {
					card.setCard(p, (i + index), cardValue, state, isQue);
					if (state == 0) {//暗牌
						//console.log("==i + index===",i + index,i)
						card.x = this.arrLHP[i + index].x;
						card.y = this.arrLHP[i + index].y;
					} else {//亮牌

						card.x = this.arrLLP[i + index].x;
						card.y = this.arrLLP[i + index].y;
					}
					ghand.addChildAt(card, 0);
				}
				if (p == 3) {
					card.setCard(p, (i + index), cardValue, state, isQue);
					card.x = i * 44;
					if (index == 0 && i == 0) {
						card.x -= 10;
					}
				}
				if (p == 1) {
					card.setCard(p, 13 - i - index, cardValue, state, isQue);
					// console.log("=====393 index",index, i)
					if (state == 0) {
						card.x = this.arrRHP[i + index].x;
						card.y = this.arrRHP[i + index].y;
					} else {
						//console.log("==this.arrRLP[i + index]=",this.arrRLP[i + index])
						card.x = this.arrRLP[i + index].x;
						card.y = this.arrRLP[i + index].y;
					}
					ghand.addChild(card);
				}
				if (p == 0) {
					card.setCard(p, (i + index), cardValue, state, isQue);
					card.cardInfo = info;
					if (GameParmes.isHu) {
						card.setMaskFlag(false);
						if (i == len - 1 && index == 0) {
							card.setMaskFlag(true);
						}
					}
					card.x = i * 90;
					if (i == len - 1 && index == 0) {
						card.x += 10;
					}
				}
			}
			this.gHandCardU.y = 310;
			this.gHandCardU.x = 600;
			this.gHandCardD.y = GameConfig.curHeight() - this.gHandCardD.height;
			this.gHandCardD.x = GameConfig.curWidth() - this.gHandCardD.width - 300;
		}

		/*增加牌的下落动画*/
		public showHandCardAnim(arr: Array<any>): void {
			for (let i: number = 0; i < this.gHandCardD.numChildren; i++) {
				let item: BaseHandCardUI = this.gHandCardD.getChildAt(i) as BaseHandCardUI;
				for (let j: number = 0; j < arr.length; j++) {
					if (item.cardInfo.CardID == arr[j].CardID) {
						item.y = -50;
						egret.Tween.get(item).to({ y: 0 }, 200);
					}
				}
			}
		}
		/*调整自己手牌位置 换三张后的显示*/
		public adjustMyHandCard(): void {
			for (let j: number = 0; j < GamePlayData.HSZUserChoose.length; j++) {
				for (let i: number = 0; i < this.gHandCardD.numChildren; i++) {
					let item: BaseHandCardUI = this.gHandCardD.getChildAt(i) as BaseHandCardUI;
					if (GamePlayData.HSZUserChoose[j].CardID == item.cardInfo.CardID) {
						this.gHandCardD.removeChild(item);
						break;
					}
				}
			}
			for (let i: number = 0; i < this.gHandCardD.numChildren; i++) {
				let item: BaseHandCardUI = this.gHandCardD.getChildAt(i) as BaseHandCardUI;
				item.x = i * 90;
				item.y = 0;
			}
			this.gHandCardD.y = GameConfig.curHeight() - this.gHandCardD.height;
			this.gHandCardD.x = (GameConfig.curWidth() - this.gHandCardD.width) / 2;
		}
		/*创建全部玩家的吃碰杠数据*/
		public createAllCPG(): void {
			for (let i: number = 0; i < 4; i++) {
				this.createCPGCard(i);
			}
		}
		private copyCardGroup(arrTmp: Array<CardsGroupInfo>): Array<CardsGroupInfo> {
			let arr: Array<CardsGroupInfo> = [];
			for (let i: number = 0; i < arrTmp.length; i++) {
				let tmp: CardsGroupInfo = arrTmp[i];
				let cardsgroup: CardsGroupInfo = new CardsGroupInfo();
				cardsgroup.CardsGroupType = tmp.CardsGroupType;
				cardsgroup.cardsit = tmp.cardsit;
				cardsgroup.obtainCard.Sit = tmp.obtainCard.Sit;
				cardsgroup.obtainCard.CardID = tmp.obtainCard.CardID;
				for (var j: number = 0; j < tmp.cards.length; j++) {
					var card: CardInfo = new CardInfo();
					card.CardID = tmp.cards[j].CardID;
					if (card.CardID == tmp.obtainCard.CardID) {
						card.Sit = tmp.obtainCard.Sit;
					} else {
						card.Sit = tmp.cardsit;
					}
					cardsgroup.cards.push(card);
				}
				arr.push(cardsgroup);
			}
			return arr;
		}
		/*创建吃碰杠牌*/
		public createCPGCard(nSit: number): void {
			let p: number = Global.getUserPosition(nSit);
			let g: eui.Group = this.findOptGroup(p);
			this.clearGroup(g);
			let arrCards: Array<CardsGroupInfo> = game.GamePlayData.getOtherCards(p);//this.copyCardGroup(game.GamePlayData.getOtherCards(nSit));

			// console.log("===ARRCARDS=====",arrCards)
			let nOptCount: number = arrCards.length;//玩家吃碰杠数组

			for (let i: number = 0; i < nOptCount; i++) {
				this.createCPGItem(p, i, arrCards[i]);
			}
			/*测试数据*/
			/*for(let i:number = 0;i < 4;i++){
				this.createCPGItem(nSit,i,null);
			}*/
		}
		/*p 玩家位置 index 牌组索引*/
		private createCPGItem(p: number, index: number, info: CardsGroupInfo): void {
			let g: eui.Group = this.findOptGroup(p);
			let isAnGang: boolean = false;
			if (info.CardsGroupType == CardsGroupType.ANGANG) {
				isAnGang = true;
			} else {
				isAnGang = false;
			}
			let gItem: eui.Group = new eui.Group();
			g.addChild(gItem);
			for (let i: number = 0; i < info.cards.length; i++) {
				let cardValue: number = info.cards[0].CardID //game.GameParmes.getCardID(info.cards[i]);
				let item: BaseOtherCardUI = new BaseOtherCardUI();
				item.cardInfo = info.cards[i];
				gItem.addChild(item);
				if (p == 2) {//左
					if (isAnGang) {
						if (i == 3) {
							item.setCard(p, (index * 4 + i), cardValue, isAnGang);
						} else {
							item.setCard(p, (index * 4 + i), 0, isAnGang);
						}
						item.x = this.arrLAP[index][i].x;
						item.y = this.arrLAP[index][i].y;
					} else {
						item.setCard(p, index * 4 + i, cardValue, isAnGang);
						item.x = this.arrLCP[index][i].x;
						item.y = this.arrLCP[index][i].y;
					}

				}
				if (p == 3) {//上
					if (isAnGang) {
						item.y = 320;
						if (i == 3) {
							item.setCard(p, index, cardValue, isAnGang);
							item.x = GameConfig.curWidth() - index * 140 - (i - 2) * 40 - 650;
							item.y = 300;
						} else {
							item.setCard(p, index, 0, isAnGang);
							item.x = GameConfig.curWidth() - index * 140 - i * 40 - 650;
						}
					} else {
						item.setCard(p, index, cardValue, isAnGang);
						if (i == 3) {
							item.x = GameConfig.curWidth() - index * 140 - (i - 2) * 42 - 650;
							item.y = 305;
						} else {
							item.x = GameConfig.curWidth() - index * 140 - i * 42 - 650;
							item.y = 320;
						}

					}
				}
				if (p == 1) {//右
					if (isAnGang) {
						if (i == 3) {
							gItem.addChild(item);
							item.setCard(p, (index * 4 + i), cardValue, isAnGang);
						} else {
							gItem.addChildAt(item, 0);
							item.setCard(p, (index * 4 + i), 0, isAnGang);
						}
						item.x = this.arrRAP[index][i].x;
						item.y = this.arrRAP[index][i].y + 10;
					} else {
						if (i == 3) {
							gItem.addChild(item);
						} else {
							gItem.addChildAt(item, 0);
						}
						item.setCard(p, index * 4 + i, cardValue, isAnGang);
						item.x = this.arrRCP[index][i].x;
						item.y = this.arrRCP[index][i].y;

					}
				}
				if (p == 0) {//下
					if (isAnGang) {
						item.y = GameConfig.curHeight() - 120;
						if (i == 3) {
							item.setCard(p, index, cardValue, isAnGang);
							item.x = 300 + index * 260 + (i - 2) * 70;
							item.y = GameConfig.curHeight() - 120 - 20;
						} else {
							item.setCard(p, index, 0, isAnGang);
							item.x = 300 + index * 260 + i * 70;
						}
					} else {
						item.setCard(p, index, cardValue, isAnGang);
						if (i == 3) {
							item.x = 300 + index * 260 + (i - 2) * 70;
							item.y = GameConfig.curHeight() - 142;
						} else {
							item.x = 300 + index * 260 + i * 70;
							item.y = GameConfig.curHeight() - 120;
						}


					}
				}
			}

		}
		/*点击了手牌*/
		private onClickHandCard(evt: egret.Event): void {
			let item: BaseHandCardUI = evt.data;
			// if (GameParmes.gameStage == GameStageType.CHANGE) {//换三张阶段
			// 	let index: number = this.arrHSZCards.indexOf(item);
			// 	if (index > -1) {
			// 		if (!item.isSelect) {
			// 			this.arrHSZCards.splice(index, 1);
			// 		}
			// 	} else {
			// 		if (item.isSelect) {
			// 			this.arrHSZCards.push(item);
			// 		}
			// 	}

			// 	if (this.arrHSZCards.length == 4) {
			// 		let popItem: BaseHandCardUI = this.arrHSZCards.shift();
			// 		popItem.onSelectCard();
			// 	}

			// 	GamePlayData.HSZUserChoose.length = 0;
			// 	for (let j: number = 0; j < this.arrHSZCards.length; j++) {
			// 		GamePlayData.HSZUserChoose.push((this.arrHSZCards[j] as BaseHandCardUI).cardInfo);
			// 	}
			// }

			if(GameParmes.gameTurn == GameTurnType.SELFTURN ){//出牌阶段
			// 	this.dispatchEvent(new egret.Event("OnClickHandCard",true,true,this));
			// }

			// if (GameParmes.gameStage == GameStageType.PLAYING) {//出牌阶段
				if (this.currentCard == item) {
					if (game.GamePlayData.M_C_P_G_sit == Global.userSit) {
						if (item.isHuFlag) {
							this.dispatchEvent(new egret.Event("ShowTingTip", true, true, { "isShowTing": true, "index": item.cardIndex }));
						} else {
							this.dispatchEvent(new egret.Event("ShowTingTip", true, true, { "isShowTing": item.isTingFlag, "index": item.cardIndex }));
						}

						const cardInfo: CardInfo = new CardInfo();
						cardInfo.CardID = item.cardInfo.CardID;
						if (GameParmes.nHuType == 16 && item.isHuFlag) {//天胡处理
							let info: CardsGroupInfo = GamePlayData.Hu_Groups[0];
							info.obtainCard.CardID = item.cardInfo.CardID;
							game.GameWebSocket.instance().gameSender.ReqSendCardsGameFun(info);
						} else {
							//GameController.ReqUserSendCard(cardInfo);
							//MJ_Operation
							const opt: room.MJ_Operation = new room.MJ_Operation()
							//手切，打出的是手中的牌，吃碰之后都是手切  摸切，打出的是刚摸到的牌

							console.log("=======item.isMocard",item.isMoCard)
							console.log("=======item.isMocard ID",item.cardInfo.CardID)
							if( item.isMoCard ){
								opt.operationType = CardsGroupType.MJ_OperationType.MJ_OT_D_DISCARD;//摸切
							}else{
								opt.operationType = CardsGroupType.MJ_OperationType.MJ_OT_H_DISCARD;//操作类型
							}
						
							opt.Tiles = [item.cardInfo.CardID] //牌组  如果是出牌则数组中只有一张牌
							room.RoomWebSocket.instance().roomSender.REQ_USEROPERATIONREQ(opt)
							if (this.nAutoTime > -1) {
								egret.clearTimeout(this.nAutoTime);
								this.nAutoTime = -1;
							}
						}
					} else {
						item.onSelectCard();
						this.currentCard = null;
					}

				} else {
					if (this.currentCard != null) {
						this.currentCard.onSelectCard();
						this.currentCard = null;
					}
					this.currentCard = item;
					item.onSelectCard();
					if (item.isTingFlag) {//显示要听的牌
						this.dispatchEvent(new egret.Event("ShowTingGroup", true, true, item.cardInfo.CardID));
					}
				}
			}
		}
		/*选择出换三张推荐的牌*/
		public onShowHSZCards(): void {
			if (this.isSortComplete && this.arrHSZCards.length == 0) {
				this.arrHSZCards = [];
				GamePlayData.HSZUserChoose = [];
				for (let i: number = 0; i < GamePlayData.HSZRecommend.length; i++) {
					let card: CardInfo = GamePlayData.HSZRecommend[i];
					GamePlayData.HSZUserChoose.push(card);
					for (let j: number = 0; j < this.gHandCardD.numChildren; j++) {
						let item: BaseHandCardUI = this.gHandCardD.getChildAt(j) as BaseHandCardUI;
						if (item.cardInfo.CardID == card.CardID) {
							this.arrHSZCards.push(item);
							item.onSelectCard();
						}
					}
				}
			}

		}
		/*重新排序定缺的手牌*/
		/*public sortHandCardQue(type:number):void{
			let arr:Array<CardInfo> = GamePlayData.getHandCards(Global.userSit);
			let num:number = arr.length;
			var count:number = 0;
			for(var i:number = 0;i < num;i++){
				var card:CardInfo = arr[count];
				if(GameParmes.getHua(card) == type){
					arr.push(arr.splice(count,1)[0]);
				}else{
					count += 1;
				}
			}
			this.updataHandsByPosition(Global.userSit,0,true);
		}*/
		/*手牌上显示听牌标志*/
		public showTingFlag(flag: boolean, str: string): void {
			let len: number = this.gHandCardD.numChildren;
			if (flag) {
				let arr: Array<any> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.CALL);
				for (let i: number = 0; i < len; i++) {
					let item: game.BaseHandCardUI = this.gHandCardD.getChildAt(i) as game.BaseHandCardUI;
					for (let j: number = 0; j < arr.length; j++) {
						if (item.cardIndex == arr[j].ObtainCardIndex + 1) {
							item.setTingFlag(true, str);
							break;
						}
					}
				}
			} else {
				for (let i: number = 0; i < len; i++) {
					let item: game.BaseHandCardUI = this.gHandCardD.getChildAt(i) as game.BaseHandCardUI;
					item.setTingFlag(false, "");
					item.clearSelectCard();
				}
			}
		}
		/*给手牌上增加遮罩*/
		public showHuFlag(): void {
			let len: number = this.gHandCardD.numChildren;
			for (let i: number = 0; i < len; i++) {
				let item: game.BaseHandCardUI = this.gHandCardD.getChildAt(i) as game.BaseHandCardUI;
				item.setMaskFlag(false);
			}
		}
		/*查找亮牌张数*/
		public checkLPCards(): void {
			GamePlayData.arrLPCards = [];
			for (let i: number = 0; i < 28; i++) {
				let arr: Array<number> = [];
				GamePlayData.arrLPCards.push(arr);
			}
			//添加手牌数据
			for (let i: number = 0; i < this.gHandCardD.numChildren; i++) {
				let item: BaseHandCardUI = this.gHandCardD.getChildAt(i) as BaseHandCardUI;
				this.addLPCard(item.cardInfo);
			}
			//添加碰杠数据
			for (let i: number = 0; i < 4; i++) {
				let g: eui.Group = this.findOptGroup(i);
				let len: number = g.numChildren;
				for (let j: number = 0; j < len; j++) {
					let gItem: eui.Group = g.getChildAt(j) as eui.Group;
					for (let n: number = 0; n < gItem.numChildren; n++) {
						let item: BaseOtherCardUI = gItem.getChildAt(n) as BaseOtherCardUI;
						this.addLPCard(item.cardInfo);
					}

				}
			}
			//添加胡牌数据
			for (let i: number = 0; i < 4; i++) {
				let g: eui.Group = this.findHuGroup(i);
				let len: number = g.numChildren;
				for (let j: number = 0; j < len; j++) {
					let item: BaseHuCardUI = g.getChildAt(j) as BaseHuCardUI;
					this.addLPCard(item.cardInfo);
				}
			}
		}
		private addLPCard(cardInfo): void {
			if (cardInfo) {
				let cardValue: number = GameParmes.getCardID(cardInfo);
				if (cardValue > 0) {
					if (GamePlayData.arrLPCards[cardValue].indexOf(cardInfo.CardID) == -1) {
						GamePlayData.arrLPCards[cardValue].push(cardInfo.CardID);
					}
				}
			}

		}
		private clearGroup(g: eui.Group): void {
			//console.log("====CLEAR GROUP",g)
			if(!g){
				return;
			}
			while (g.numChildren > 0) {
				
				let item = g.removeChildAt(0);
				item = null;
			}
		}

		private findHandGroup(p: number): eui.Group {
			if (p == 0) {
				return this.gHandCardD;
			}
			if (p == 3) {
				return this.gHandCardU;
			}
			if (p == 1) {
				return this.gHandCardR;
			}
			if (p == 2) {
				return this.gHandCardL;
				
			}
		}
		private findOptGroup(p: number): eui.Group {
			if (p == 0) {
				return this.gOtherCardD;
			}
			if (p == 3) {
				return this.gOtherCardU;
			}
			if (p == 1) {
				return this.gOtherCardR;
			}
			if (p == 2) {
				return this.gOtherCardL;
			}
		}
		private findHuGroup(p: number): eui.Group {
			if (p == 0) {
				return this.gHuCardD;
			}
			if (p == 3) {
				return this.gHuCardU;
			}
			if (p == 1) {
				return this.gHuCardR;
			}
			if (p == 2) {
				return this.gHuCardL;
			}
		}
		private clearAllGroup(): void {
			this.clearGroup(this.gHandCardD);
			this.clearGroup(this.gHandCardL);
			this.clearGroup(this.gHandCardR);
			this.clearGroup(this.gHandCardU);

			this.clearGroup(this.gOtherCardD);
			this.clearGroup(this.gOtherCardL);
			this.clearGroup(this.gOtherCardR);
			this.clearGroup(this.gOtherCardU);

			this.clearGroup(this.gHuCardD);
			this.clearGroup(this.gHuCardL);
			this.clearGroup(this.gHuCardR);
			this.clearGroup(this.gHuCardU);
		}
		/*测试代码*/
		private testHand(sit: number, state: number): void {
			let p: number = sit
			let nQue: number = 1;
			let ghand: eui.Group = this.findHandGroup(p);
			this.clearGroup(ghand);

			let index: number = 0;
			let len: number = 13;
			if (len % 3 == 2) {//玩家有摸牌牌权
				index = 0;
			} else {
				index = 1;
			}
			for (let i: number = 0; i < len; i++) {
				let isQue: boolean = false;
				let cardValue: number = 1 + Math.floor(Math.random() * 27);
				let card: BaseHandCardUI = new BaseHandCardUI();
				ghand.addChild(card);

				if (p == 2) {
					card.setCard(p, (i + index), cardValue, state, isQue);
					if (state == 0) {//暗牌
						card.x = this.arrLHP[i + index].x;
						card.y = this.arrLHP[i + index].y;
					} else {//亮牌
						card.x = this.arrLLP[i + index].x;
						card.y = this.arrLLP[i + index].y;
					}
					ghand.addChildAt(card, 0);
				}
				if (p == 3) {
					card.setCard(p, (i + index), cardValue, state, isQue);
					card.x = i * 44;
					if (index == 0 && i == 0) {
						card.x -= 10;
					}
				}
				if (p == 1) {
					card.setCard(p, 13 - i - index, cardValue, state, isQue);
					if (state == 0) {
						card.x = this.arrRHP[i + index].x;
						card.y = this.arrRHP[i + index].y;
					} else {
						card.x = this.arrRLP[i + index].x;
						card.y = this.arrRLP[i + index].y;
					}
					ghand.addChild(card);
				}
				if (p == 0) {
					card.setCard(p, (i + index), cardValue, state, isQue);
					if (GameParmes.isHu) {
						card.setMaskFlag(false);
						if (i == len - 1 && index == 0) {
							card.setMaskFlag(true);
						}
					}
					card.x = i * 90;
					if (i == len - 1 && index == 0) {
						card.x += 10;
					}
				}
			}
			this.gHandCardU.y = 310;
			this.gHandCardU.x = 700;
			this.gHandCardD.y = GameConfig.curHeight() - this.gHandCardD.height;
			this.gHandCardD.x = GameConfig.curWidth() - this.gHandCardD.width - 300;
		}
	}
}