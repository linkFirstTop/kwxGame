module game {
	export class GameView extends egret.DisplayObjectContainer {
		public constructor() {
			super();
		}
		public gameUI: game.GameMainUI;
		private gameMatch: game.GameMatchUserUI;
		private gameResult: game.GameResultUI;
		/*添加view*/
		public onAddView(): void {
			console.log("游戏ui");
			this.gameUI = new game.GameMainUI();
			this.addChild(this.gameUI);

			this.gameResult = new game.GameResultUI();
			this.addChild(this.gameResult);
			this.gameResult.addEventListener("OnHideResult", this.onHideResult, this);

			this.addEventListener("OnGameContinue", this.onGameContinue, this);
			console.log('开始游戏ui匹配');

			this.gameMatch = new game.GameMatchUserUI();
			this.addChild(this.gameMatch);
			if (!Global.isContinue) {
				this.gameMatch.startAnim();
			}

			if (Global.isDeal) {
				let gamezhuapai: GameZhuaPaiQiUI = new GameZhuaPaiQiUI();
				this.addChild(gamezhuapai);
			}

			GameParmes.gameTurn = GameTurnType.OTHERTURN;

			this.addMEL();
		}
		private addMEL(): void {
			// 进入游戏
			GDGame.Msg.ins.addEventListener(room.RoomMessage.ACK_ENTER_TABLE, this.onEnterGame, this);

			GDGame.Msg.ins.addEventListener(room.RoomMessage.ACK_GAMEPLAYERLIST, this.onUserList, this);

			//游戏全部结束
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_ALLGAMERESULT, this.ACK_ALL_GAMERESULT, this);
			//服务器通知客户端托管操作
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMEPLAYERTRUST, this.ACK_USER_PLAYERTRUST, this);

			//返回游戏未开时突然结束的广播消息
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_OVERGAME, this.ACK_OVER_GAME, this);
			GDGame.Msg.ins.addEventListener(GameMessage.NTF_ROOM_STATE, this.ACK_GAME_STATUS_CHANGED, this);
			//开始发牌
			GDGame.Msg.ins.addEventListener(game.GameMessage.START_GET_CARD, this.startDealCard, this);

			//牌器
			GDGame.Msg.ins.addEventListener(GameMessage.VGID_SERVICE_MAGICTILES, this.ACK_MAGIC_TILES, this);

			//显示打漂信息
			GDGame.Msg.ins.addEventListener(GameMessage.SHOW_DAPIAO_INFO, this.showDapiaoInfo, this);
			GDGame.Msg.ins.addEventListener(GameMessage.VGID_USER_DAPIAO, this.ACK_USER_DAPIAO, this);
			//行牌单播消息
			GDGame.Msg.ins.addEventListener(GameMessage.VGID_GAME_OPERATION, this.ACK_GAME_OPERATION, this);
			//行牌应答
			GDGame.Msg.ins.addEventListener(GameMessage.VGID_USER_OPERATION, this.ACK_USER_OPERATION, this);

			//断线重联
			GDGame.Msg.ins.addEventListener(room.RoomMessage.ACK_GAME_CONTINUE, this.onGameContinue, this);
		}

		/** 
		 * @param msg
		 * 返回游戏未开时突然结束的广播消息
		 */
		private ACK_OVER_GAME(body: egret.Event): void {
			this.gameMatch.stopAnim();
		}

		public onUserList() {
			this.gameUI.initUser();
		}

		/*游戏*/
		private onEnterGame(evt: egret.Event): void {
			console.log("===onEnterGame=")

			this.gameUI.initPosition();
		}

		private startDealCard(evt: egret.Event) {
			const body: any = evt.data;
			this.gameUI.showRoomGUID(body.roundGuid);
			this.gameUI.showWallCount(body["remainCount"])//
		}

		/*
		*收到玩家列表
		*/
		private onGameContinue(): void {

			this.gameUI.initUser();

			//断线重联 在这里处理
			//这里处理断线 的 牌
			game.GamePlayData.arrPoolCards = [[], [], []]
			const arr = game.GameUserList.arrUserList;
			// console.log("====arr", arr)
			GamePlayData.MJ_LiangOtherPais = [];
			arr.forEach((e: any, i) => {
				const user: room.VGUserInfo = e.origin;
				let nSit: number = user.userPos.seatID;
				let p = Global.getUserPosition(user.userPos.seatID);

				if (user.isTing) {
					GamePlayData.MJ_LiangSitArr.push(nSit);
					this.gameUI.onShowUserLiang(nSit)
				}

				const tileSets = user.tileSets;
				tileSets.forEach((tiles: room.MJ_TileSet) => {

					if (tiles.Type == 1) { }//吃牌
					//碰牌
					if (tiles.Type == 2) {
						let card: CardInfo = { CardID: tiles.ObtainTile, Sit: tiles.ObtainSeat };
						const body = {
							ObtainCard: card,
							Type: CardsGroupType.PENG,
							ObtainCardSit: tiles.ObtainSeat,
							sit: nSit,
							Cards: [
								{ CardID: tiles.ObtainTile, Sit: nSit },
								{ CardID: tiles.ObtainTile, Sit: nSit },
								{ CardID: tiles.ObtainTile, Sit: nSit },
							],
						}

						card = game.GamePlayData.AddChiPengGangCards(body, nSit);
						this.gameUI.updataUserCPG(nSit, card);
					}
					//暗杠牌
					if (tiles.Type == 3) {
						let card: CardInfo = { CardID: tiles.ObtainTile, Sit: tiles.ObtainSeat };
						const body = {
							ObtainCard: card,
							Type: CardsGroupType.ANGANG,
							ObtainCardSit: tiles.ObtainSeat,
							sit: nSit,
							Cards: [
								{ CardID: tiles.ObtainTile, Sit: nSit },
								{ CardID: tiles.ObtainTile, Sit: nSit },
								{ CardID: tiles.ObtainTile, Sit: nSit },
								{ CardID: tiles.ObtainTile, Sit: nSit },
							],
						}

						game.GamePlayData.AddChiPengGangCards(body, nSit);
						this.gameUI.updataUserCPG(nSit, card);

					}
					//明杠牌
					if (tiles.Type == 4) {
						let card: CardInfo = { CardID: tiles.ObtainTile, Sit: tiles.ObtainSeat };
						const body = {
							ObtainCard: card,
							Type: CardsGroupType.MINGGANG,
							ObtainCardSit: tiles.ObtainSeat,
							sit: nSit,
							Cards: [
								{ CardID: tiles.ObtainTile, Sit: nSit },
								{ CardID: tiles.ObtainTile, Sit: nSit },
								{ CardID: tiles.ObtainTile, Sit: nSit },
								{ CardID: tiles.ObtainTile, Sit: nSit },
							],
						}
						game.GamePlayData.AddChiPengGangCards(body, nSit);
						this.gameUI.updataUserCPG(nSit, card);
					}
					//补杠牌					
					if (tiles.Type == 5) {
						let card: CardInfo = { CardID: tiles.ObtainTile, Sit: tiles.ObtainSeat };
						const body = {
							ObtainCard: card,
							Type: CardsGroupType.BUGANG,
							ObtainCardSit: tiles.ObtainSeat,
							sit: nSit,
							Cards: [
								{ CardID: tiles.ObtainTile, Sit: nSit },
								{ CardID: tiles.ObtainTile, Sit: nSit },
								{ CardID: tiles.ObtainTile, Sit: nSit },
								{ CardID: tiles.ObtainTile, Sit: nSit },
							],
						}
						game.GamePlayData.AddChiPengGangCards(body, nSit);
						this.gameUI.updataUserCPG(nSit, card);
					}
					//牌池的牌
					if (tiles.Type == 10) {
						// console.log("===tiles.Type100===")
						const tmpArr = []

						for (let j = 0; j < tiles.Tiles.length; j++) {
							// console.log(j, tiles[j])
							let card: CardInfo = new CardInfo();
							card.CardID = tiles.Tiles[j];
							card.Sit = user.userPos.seatID;
							tmpArr[j] = card;
						}
						game.GamePlayData.arrPoolCards[p] = tmpArr;
					}
				});

				//处理听的牌
				const tileInfo = user.tingTileInfo;
				// console.log("===user.tingTileInfo==",user.tingTileInfo)
				if (nSit != Global.userSit) {
					tileInfo.forEach((o: any) => {
						GamePlayData.MJ_LiangOtherPais.push(o)
					})
				} else {
					tileInfo.forEach((o: any) => {
						GamePlayData.MJ_selfTingarr.push(o)
					})

					this.gameUI.onShowTingTip()
				}

				this.gameUI.gameHand.createLiangPai(nSit)
			})
			//console.log("===GamePlayData.MJ_LiangOtherPais CONTINUE==",GamePlayData.MJ_LiangOtherPais);
			this.gameMatch.stopAnim();
			this.gameUI.onGameContinue();

		}

		//打漂应答
		private ACK_USER_DAPIAO(evt: egret.Event) {
			const body: room.VGUserDapiaoAck = evt.data;

			//console.log("==ACK_USER_DAPIAO==",body)
			if (body.userInfo) {
				let seatid = body.userInfo.userPos.seatID;
				let p = Global.getUserPosition(seatid);
				if (this.gameUI["gameUser" + p]) {
					this.gameUI["gameUser" + p].user.setUserDapiaoInfo(body.userInfo.dapiao);
					this.gameUI["gameUser" + p].showDapiaoInfo();
				}

			}
		}

		// 发牌器
		private ACK_MAGIC_TILES(evt: egret.Event) {
			const body: room.MagicTilesAck = evt.data;
			console.log("==获得了 发牌")
			console.log("==获得了 发牌:", body)
			console.log("==获得了 发牌")
		}

		/**
		 * 行牌单播消息  根据这个显示操作按钮
		 * @param evt 
		 */
		private ACK_GAME_OPERATION(evt: egret.Event) {
			const body: room.VGGameOperationNtc = evt.data;
			console.log(">>行牌单播消息  根据这个显示操作按钮", body)
			const nSit = body.seatid;
			console.log(`>>需要操作的玩家的座位=${nSit}, 自己座位${Global.userSit}`,)
			this.gameUI.showRoomGUID(body.roundGuid);
			//	body.remainCount
			this.gameUI.startTime(body.second);
			game.GamePlayData.M_C_P_G_sit = nSit;
			this.gameUI.changeUserRight();

			GameParmes.isCurTing = false;

			if (body.operation.length == 0) {
				// 其他人的操作通知
				return;
			}


			if (nSit != Global.userSit) {
				//座位号 不是 自己
				GameParmes.gameTurn = GameTurnType.OTHERTURN;
				return;
			}

			game.GamePlayData.SaveMJ_Operation(body.operation);
			const optArr = [false, false, false, false, false];

			//玩家自己操作
			body.operation.forEach((opt: room.MJ_Operation) => {
				//摸牌s
				//if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_DRAW) {}

				//手切，打出的是手中的牌，吃碰之后都是手切
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_H_DISCARD) {
					GameParmes.gameStage = GameStageType.PLAYING;
					GameParmes.gameTurn = GameTurnType.SELFTURN;

				}
				//摸切，打出的是刚摸到的牌s
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_D_DISCARD) {
					GameParmes.gameStage = GameStageType.PLAYING;
					GameParmes.gameTurn = GameTurnType.SELFTURN;
				}

				//左吃，吃的牌是最小点, 例如45吃3
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_L_CHOW) {
					optArr[0] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}
				//中吃，吃的牌是中间点，例如24吃3
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_M_CHOW) {
					optArr[0] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}
				//右吃，吃的牌是最大点，例如12吃3
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_R_CHOW) {
					optArr[0] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}

				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PONG) {
					optArr[1] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}

				//暗杠
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_C_KONG) {
					//吃 碰 杠 胡 停
					optArr[2] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}

				//直杠
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_E_KONG) {
					//吃 碰 杠 胡 停
					optArr[2] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}

				//补杠
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_P_KONG) {
					//吃 碰 杠 胡 停
					optArr[2] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}

				//听
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_TING) {
					console.log("=====收到了 停的  操作请求 ==")
					optArr[4] = true;
					game.GamePlayData.SaveChiPengGangHu(body);
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
					GameParmes.isCurTing = true;

					//let arr: Array<any> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.CALL);
				}

				//和
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_WIN) {
					optArr[3] = true;
					GameParmes.gameTurn = GameTurnType.OTHERTURN;
				}

				//过
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PASS) {
				}
			})

			const isShow = optArr.some((e) => (e))
			console.log(">>>>操作按钮 数组<<<<", isShow, optArr)
			if (isShow) {
				this.gameUI.onShowOpt(optArr)
			}
		}
		/**
		 * 行牌应答 这是玩家操作的结果
		 * @param evt 
		 */

		private ACK_USER_OPERATION(evt: egret.Event) {
			const body: room.VGGameOperationNtc = evt.data;
			console.log("****行牌应答:这是玩家操作的结果:", body)
			//console.log("=== 行牌应答 这是玩家操作的seat:", body["seatID"])
			const nSit = body["seatID"];
			GameParmes.gameStage = GameStageType.PLAYING;
			this.gameUI.showWallCount(body["remainCount"])//

			let p = Global.getUserPosition(nSit)
			console.log(`****当前操作玩家座位号:${nSit}，和局部座位号:${p},玩家座位号：${Global.userSit}`)
			const opt: room.MJ_Operation = <any>body.operation;
			GameParmes.isCurTing = false;
			if (!opt) {
				return;
			}

			//摸牌s
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_DRAW) {
				// game.GamePlayData.SetCardsWallIndex("Head", 1);

				const card: CardInfo = new CardInfo();
				card.CardID = opt.Tiles[0];
				card.Sit = nSit;
				// console.log("====MOPAI=====",card)
		
				game.GamePlayData.AddHandCards(nSit, card);
				this.gameUI.getOneCard(card);
				//room.RoomWebSocket.instance().roomSender.REQ_MAGICTILES()
			}

			//手切，打出的是手中的牌，吃碰之后都是手切
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_H_DISCARD) {
				//	console.log("=====打出的是手中的牌，吃碰之后都是手切==")
				const card: CardInfo = new CardInfo();
				card.CardID = opt.Tiles[0];
				card.Sit = nSit;

				const Cards = [card];
				game.GamePlayData.ClearHandCards(p, [card], nSit);
				game.GamePlayData.AddCardPool(Cards, nSit);
				if (nSit == Global.userSit) {
					game.GamePlayData.SaveCurrentCard(0, -1);
				}

				const b: boolean = false;
				this.gameUI.userSendCard(card, b);
				SoundModel.playEffect(SoundModel.CHU);
			}

			//摸切，打出的是刚摸到的牌s
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_D_DISCARD) {
				//console.log("=====摸切==")
				const card: CardInfo = new CardInfo();
				card.CardID = opt.Tiles[0];
				card.Sit = nSit;
				//*************容错断线回来  服务器发送该出牌的人的牌是13张   但是又发送该他出牌的消息   故容错***************
				// const handcardsNum: number = game.GamePlayData.getHandCards(p).length;
				// if (handcardsNum % 3 != 1) {
				// 	game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(p), [card], nSit);
				// }

				game.GamePlayData.ClearHandCards(p, [card], nSit);
				const Cards = [card];
				game.GamePlayData.AddCardPool(Cards, nSit);
				if (nSit == Global.userSit) {
					game.GamePlayData.SaveCurrentCard(0, -1);
				}

				const b: boolean = false;
				this.gameUI.userSendCard(card, b);
				SoundModel.playEffect(SoundModel.CHU);
			}
			//左吃，吃的牌是最小点, 例如45吃3
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_L_CHOW) {
				//console.log("=====左吃==")
			}

			//中吃，吃的牌是中间点，例如24吃3
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_M_CHOW) {
				//console.log("=====中吃，吃的牌是中间点，例如24吃3==")
			}

			//右吃，吃的牌是最大点，例如12吃3
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_R_CHOW) {
				//console.log("=====右吃，吃的牌是最大点，例如12吃3==")
			}

			//碰
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PONG) {
				this.ON_USER_PENGPAI(opt, body["seatID"])
			}

			//暗杠
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_C_KONG) {
				//	game.GamePlayData.SaveOperationSit(body.Card.Sit);
				let card: CardInfo = { CardID: opt.ObtainTile, Sit: opt.ObtainSeat };
				const body = {
					ObtainCard: card,
					Type: CardsGroupType.ANGANG,
					ObtainCardSit: opt.ObtainSeat,
					sit: nSit,
					Cards: [
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
					],
				}
				game.GamePlayData.SaveCurrentCard(0, -1);
				game.GamePlayData.AddChiPengGangCards(body, nSit);

				this.ON_USER_ANGANGPAI(card, nSit);
			}
			//直杠
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_E_KONG) {
				let card: CardInfo = { CardID: opt.ObtainTile, Sit: opt.ObtainSeat };
				const body = {
					ObtainCard: card,
					Type: CardsGroupType.MINGGANG,
					ObtainCardSit: opt.ObtainSeat,
					sit: nSit,
					Cards: [
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
					],
				}

				game.GamePlayData.AddChiPengGangCards(body, nSit);

				this.ON_USER_MINGGANGPAI(card, nSit, opt.ObtainSeat);
			}
			//补杠
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_P_KONG) {
				let card: CardInfo = { CardID: opt.ObtainTile, Sit: opt.ObtainSeat };
				const body = {
					ObtainCard: card,
					Type: CardsGroupType.BUGANG,
					ObtainCardSit: opt.ObtainSeat,
					sit: nSit,
					Cards: [
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
						{ CardID: opt.ObtainTile, Sit: nSit },
					],
				}
				game.GamePlayData.AddChiPengGangCards(body, nSit);
				game.GamePlayData.SaveCurrentCard(0, -1);

				this.ON_USER_BUGANGPAI(card, nSit);
			}

			//听
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_TING) {
				//this.gameUI.onShowTHFlag();
				//console.log("=====收到了 停的  操作通知 ==")
				const card: CardInfo = new CardInfo();
				card.CardID = opt.Tiles[0];
				card.Sit = nSit;

				const Cards = [card];
				//game.GamePlayData.ClearHandCards(p, [card], nSit);
				game.GamePlayData.AddCardPool(Cards, nSit);
				if (nSit == Global.userSit) {
					game.GamePlayData.SaveCurrentCard(0, -1);

				}

				const b: boolean = false;
				this.gameUI.userSendCard(card, b);
				SoundModel.playEffect(SoundModel.CHU);

				if (nSit != Global.userSit) {
					opt.tingTileInfo.forEach((o: room.MJ_TingTileInfo) => {
						GamePlayData.MJ_LiangOtherPais.push(o)
					})

					//console.log("==GamePlayData.MJ_LiangOtherPais===",GamePlayData.MJ_LiangOtherPais)
				} else {
					GamePlayData.isSelfTing = true;
					opt.tingTileInfo.forEach((o: any) => {
						GamePlayData.MJ_selfTingarr.push(o)
					})

					this.gameUI.onShowTingTip()
				}
				this.gameUI.onShowUserLiang(nSit)

				GamePlayData.MJ_LiangSitArr.push(nSit);
				this.gameUI.gameHand.createLiangPai(nSit)
			}

			//和
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_WIN) {
				this.gameUI.gameOpt.visible = false;
				GamePlayData.isSelfTing = false;
				GamePlayData.MJ_LiangOtherPais = [];
		

				if (opt.ObtainSeat != nSit) {
					
					//--
					const card: CardInfo = new CardInfo();
					card.CardID = opt.ObtainTile;
					card.Sit = opt.ObtainSeat;

					let op = Global.getUserPosition(opt.ObtainSeat);
					this.gameUI.gamePool.removeCardToPool(opt.ObtainSeat, card);
					GamePlayData.DelectCardPool(GamePlayData.getCardsPool(op));

				}
				if (nSit == Global.userSit) {
					console.log("===SElf hu")
					this.gameUI.showHuCard(nSit, opt.ObtainTile, 3);
					GameParmes.isHu = true;
					this.gameUI.hideTingFlag();
				} else {
					this.gameUI.gameHand.delHandCard(nSit);
					console.log("===Other hu")
					this.gameUI.showHuCard(nSit, opt.ObtainTile, 0);
				}

				this.checkHuInfo(opt, nSit);
			}

			//过
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PASS) {
				//this.gameUI.changeUserRight();
			}
			// this.gameUI.startTime(body.second);
		}




		/** 
		* @param msg
		* 服务器通知客户端碰牌
		*/
		private ON_USER_PENGPAI(data: room.MJ_Operation, seat: number): void {
			let nSit: number = seat;

			let card: CardInfo = { CardID: data.ObtainTile, Sit: data.ObtainSeat };

			const body = {
				ObtainCard: card,
				Type: CardsGroupType.PENG,
				ObtainCardSit: data.ObtainSeat,
				sit: nSit,
				Cards: [
					{ CardID: data.ObtainTile, Sit: nSit },
					{ CardID: data.ObtainTile, Sit: nSit },
					{ CardID: data.ObtainTile, Sit: nSit },
				],
				DelCards: [
					{ CardID: data.ObtainTile, Sit: nSit },
					{ CardID: data.ObtainTile, Sit: nSit },
				]
			}

			if (nSit == data.ObtainSeat) {
				// console.log("=====ADD DEL")
				body.DelCards.push({ CardID: data.ObtainTile, Sit: nSit })
			}

			card = game.GamePlayData.AddChiPengGangCards(body, nSit);

			this.gameUI.playAnim("peng", nSit);
			this.gameUI.updataUserCPG(nSit, card);
			SoundModel.playEffect(SoundModel.PENG);
		}



		/** 
		 * @param msg
		 * 服务器通知客户端明杠
		 */
		private ON_USER_MINGGANGPAI(card, seat: number, obSit): void {
			const nSit: number = seat;

			this.gameUI.updataUserCPG(nSit, card);
			this.gameUI.playAnim("mingGang", nSit, obSit);
			//const arrCoin: Array<number> = data.Tiles;
			//this.gameUI.showCoinChange(arrCoin);
			SoundModel.playEffect(SoundModel.GANG);
		}


		private ON_USER_ANGANGPAI(card, seat: number): void {
			const nSit: number = seat;

			this.gameUI.updataUserCPG(nSit, card);

			this.gameUI.playAnim("anGang", nSit);
			// const arrCoin: Array<number> = data.Tiles;
			// this.gameUI.showCoinChange(arrCoin);
			SoundModel.playEffect(SoundModel.GANG);
		}

		private ON_USER_BUGANGPAI(card, seat: number): void {
			const nSit: number = seat;

			this.gameUI.updataUserCPG(nSit, card);
			this.gameUI.playAnim("buGang", nSit);
			// const arrCoin: Array<number> = data.Tiles;
			// this.gameUI.showCoinChange(arrCoin);
			SoundModel.playEffect(SoundModel.GANG);
		}
		/** 
		 * @param msg
		 * 服务器通知客户端 单次胡牌
		 */
		private ACK_GAME_RESULT(evt: egret.Event): void {
			let body: game.HuResultAck = evt.data;
			let arrScore: Array<number> = [0, 0, 0, 0];
			for (let i: number = 0; i < body.hulist.length; i++) {
				//this.checkHuInfo(body.hulist[i]);
				for (let j: number = 0; j < body.hulist[i].huInfo.score_change.length; j++) {
					arrScore[j] += body.hulist[i].huInfo.score_change[j];
				}
			}
			if (body.hulist.length > 1) {//一炮多响
				this.gameUI.playAnim("ypdx", body.hulist[0].seat, body.hulist[0].huInfo.obtainsit);
			}
			this.gameUI.showCoinChange(arrScore);
		}

		private checkHuInfo(info: room.MJ_Operation, nSit: number): void {
			//return ;
			//info.
			this.gameUI.playAnim("hu", nSit, info.ObtainSeat);
			//	this.gameUI.showHuCard(nSit, info.Tiles[0], fan.type);
			GameParmes.nHuType = 0;//把天胡的标记重置，胡了一次后就没用了
		}

		/** 
		 * @param msg
		 * 服务器通知客户端 全部结束
		 */
		private ACK_ALL_GAMERESULT(evt: egret.Event): void {

			let nTime: number = 1200;
			let body: room.VGGameResultNtc = evt.data;
			//console.log("=!!!!SHOW RESULT=====", body)
			GameParmes.isGameFlower = true;
			for (let i: number = 0; i < body.userInfos.length; i++) {
				const user = body.userInfos[i]
				if (user.resultCoin > 0) {//自己胡做下标记
					GameParmes.isGameFlower = false;
					break;
				}
			}

			//this.gameUI.playAnim("djjs", -1);
			if (GameParmes.isGameFlower) {//播放流局动画
				egret.setTimeout(function () {
					this.gameUI.playAnim("liuju", -1);
				}, this, 1200);
				nTime = 2400;
			}

			game.GamePlayData.SaveHandCarsd(body.userInfos);
			GameParmes.gameTurn = GameTurnType.OTHERTURN;

			let isAnim: boolean = false;
			for (let i: number = 0; i < body.userInfos.length; i++) {
				this.gameUI.updataUserCoin(body.userInfos[i].userPos.seatID, Number(body.userInfos[i].gameCoin));
			}

			if (isAnim) {
				nTime = 2400;
			}
			egret.setTimeout(function () {

				egret.setTimeout(function () {
					this.gameResult.showResult(body);
				}, this, 1000);

				this.gameUI.showAllHandCard(body);


			}, this, nTime);
			ViewManager.ins.changeTimer(true);
		}


		private onHideResult(): void {
			this.gameUI.showResultBtn();
		}

		/** 
		 * @param msg
		 * 托管消息
		 */
		private ACK_USER_PLAYERTRUST(evt: egret.Event): void {
			let body: room.VGUserManagedAck = evt.data;

			if (body.isManaged == 1) {
				this.gameUI.showTrust(true);
			} else {
				this.gameUI.showTrust(false);
			}
		}


		private ACK_GAME_STATUS_CHANGED(evt: egret.Event): void {

			let status = game.RoomInfo.ins.status;
			// console.log("游戏状态变更==============");
			console.log("游戏状态变更", status);
			// console.log("游戏状态变更==============");
			let lastStatus = game.RoomInfo.ins.lastStatus;

			//打漂状态
			if (status == game.RoomStatus.MJ_GS_DP) {
				this.gameUI.gameHSZ.showDapiaoPanel(true);
			}
			////开局状态
			if (status == game.RoomStatus.MJ_GS_KJ) {
				this.gameUI.initPosition();

			}
			////发牌状态
			if (status == game.RoomStatus.MJ_GS_FP) {
				this.gameUI.gameHSZ.showDapiaoPanel(false);
				this.gameUI.initHandCard();
			}
			//行牌状态
			if (status == game.RoomStatus.MJ_GS_XP) {

			}
			if (status == game.RoomStatus.MJ_GS_JS) {
				//打开结算UI
				//this.gameResult.showResult()
			}

			//默认状态什么都不处理
			if (lastStatus == game.RoomStatus.MJ_GS_DF) {
				comm.DragonAnim.ins.playAnimByName("ksyx", -1);
			}

			if (status != game.RoomStatus.MJ_GS_DF) {
				this.gameMatch.stopAnim();
			}

		}

		private showDapiaoInfo() {
			// console.log("*********************")
			// console.log("*********showDapiaoInfo************")
			// console.log("*********************")
			this.gameUI.showDapiaoInfo();
		}
		private removeMEL(): void {
			this.removeEventListener("OnGameContinue", this.onGameContinue, this);
			//游戏阶段
			GDGame.Msg.ins.removeEventListener(room.RoomMessage.ACK_ENTER_TABLE, this.onEnterGame, this);
			GDGame.Msg.ins.removeEventListener(room.RoomMessage.ACK_GAMEPLAYERLIST, this.onUserList, this);
			//服务器通知客户端 单次胡牌消息
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMERESULT, this.ACK_GAME_RESULT, this);
			//游戏全部结束
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_ALLGAMERESULT, this.ACK_ALL_GAMERESULT, this);
			//服务器通知客户端托管操作
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMEPLAYERTRUST, this.ACK_USER_PLAYERTRUST, this);
			//返回游戏未开时突然结束的广播消息
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_OVERGAME, this.ACK_OVER_GAME, this);

			//房间状态变更
			GDGame.Msg.ins.removeEventListener(GameMessage.NTF_ROOM_STATE, this.ACK_GAME_STATUS_CHANGED, this);

			//显示打漂信息
			GDGame.Msg.ins.removeEventListener(GameMessage.SHOW_DAPIAO_INFO, this.showDapiaoInfo, this);

			//打漂应答
			GDGame.Msg.ins.removeEventListener(GameMessage.VGID_USER_DAPIAO, this.ACK_USER_DAPIAO, this);

			//行牌单播消息
			GDGame.Msg.ins.removeEventListener(GameMessage.VGID_GAME_OPERATION, this.ACK_GAME_OPERATION, this);
			GDGame.Msg.ins.removeEventListener(GameMessage.VGID_USER_OPERATION, this.ACK_USER_OPERATION, this);

			GDGame.Msg.ins.removeEventListener(GameMessage.VGID_SERVICE_MAGICTILES, this.ACK_MAGIC_TILES, this);

			GDGame.Msg.ins.removeEventListener(game.GameMessage.START_GET_CARD, this.startDealCard, this);
		}

		/*移除view的时候必须调用*/
		public onRemoveView(): void {
			this.removeMEL();
			if (this.gameUI) {
				this.gameUI.dispose();
				this.gameUI.parent.removeChild(this.gameUI);
				this.gameUI = null;
			}
			if (this.gameResult) {
				this.gameResult.removeEventListener("OnHideResult", this.onHideResult, this);
				this.gameResult.parent.removeChild(this.gameResult);
				this.gameResult = null;
			}
			if (this.gameMatch) {
				this.gameMatch.parent.removeChild(this.gameMatch);
				this.gameMatch = null;
			}
		}
	}
}