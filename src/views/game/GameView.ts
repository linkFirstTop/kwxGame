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
			console.log(GameMessage.ACK_ENTERGAME, '--GameMessage.ACK_ENTERGAME');

			this.gameUI = new game.GameMainUI();
			this.addChild(this.gameUI);

			this.gameResult = new game.GameResultUI();
			this.addChild(this.gameResult);
			this.gameResult.addEventListener("OnHideResult", this.onHideResult, this);

			this.addEventListener("OnGameContinue", this.onGameContinue, this);
			console.log('开始游戏ui匹配');

			this.gameMatch = new game.GameMatchUserUI();
			this.addChild(this.gameMatch);
			this.gameMatch.startAnim();

			if (Global.isDeal) {
				let gamezhuapai: GameZhuaPaiQiUI = new GameZhuaPaiQiUI();
				this.addChild(gamezhuapai);
			}

			this.addMEL();
		}
		private addMEL(): void {
			//进入游戏结果
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_ENTERGAME, this.onEnterGame, this);
			//游戏阶段
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMESTAGE, this.onGameStage, this);
			//玩家列表
			console.log('查看玩家列表', GameMessage.ACK_GAMEPLAYERLIST);
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMEPLAYERLIST, this.ACK_GAME_PLAYERLIST, this);
			//游戏规则
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMERULE, this.ACK_GAME_RULE, this);
			//骰子、手牌消息
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMEDICEANDCARDS, this.ACK_GAME_DICEANDCARDS, this);
			//庄家准备开始出牌
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAME_STARTPLAYING, this.ACK_GAME_STARTPLAYING, this);
			//断线续玩
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMECONTINUED, this.ACK_USER_CONTINUED, this);
			//玩家出牌
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_SENDCARD, this.ACK_USER_SENDCARD, this);
			//吃碰杠权限
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAME_USEROPERATION, this.ACK_GAME_USEROPERATION, this);
			//服务器通知客户端 单次胡牌消息
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMERESULT, this.ACK_GAME_RESULT, this);
			//游戏全部结束
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_ALLGAMERESULT, this.ACK_ALL_GAMERESULT, this);
			//服务器通知客户端托管操作
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMEPLAYERTRUST, this.ACK_USER_PLAYERTRUST, this);
			//服务器通知客户端解除托管操作
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAMEPLAYERRELIEVETRUST, this.ACK_USER_PLAYERRELIEVETRUST, this);
			//返回游戏未开时突然结束的广播消息
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_OVERGAME, this.ACK_OVER_GAME, this);
			//服务器广播过牌消息
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_GAME_NO_OPERATION, this.ACK_GAME_NO_OPERATION, this);
			//服务器广播牌尾摸牌消息
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_PAIWEIMOPAI, this.ACK_USER_PAIWEIMOPAI, this);
			//服务器广播正常抓牌消息
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_ZHUAPAI, this.ACK_USER_ZHUAPAI, this);
			//服务器通知客户端  碰牌
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_PENGPAI, this.ACK_USER_PENGPAI, this);
			//服务器通知客户端  明杠
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_MINGGANGPAI, this.ACK_USER_MINGGANGPAI, this);
			//服务器通知客户端  暗杠
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_ANGANGPAI, this.ACK_USER_ANGANGPAI, this);
			//服务器通知客户端  补杠
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_BUGANGPAI, this.ACK_USER_BUGANGPAI, this);
			//服务器通知客户端定缺
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_DINGQUE_STATE, this.ACK_USER_DINGQUESTATE, this);
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_DINGQUE, this.ACK_USER_DINGQUE, this);
			//服务器通知客户端换三张
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_HSZ_STATE, this.ACK_USER_HSZSTATE, this);
			GDGame.Msg.ins.addEventListener(GameMessage.ACK_USER_HSZ, this.ACK_USER_HSZ, this);

			//房间状态变更
			GDGame.Msg.ins.addEventListener(GameMessage.NTF_ROOM_STATE, this.ACK_GAME_STATUS_CHANGED, this);

			//牌器
			GDGame.Msg.ins.addEventListener(GameMessage.VGID_SERVICE_MAGICTILES, this.ACK_MAGIC_TILES, this);

			//显示打漂信息
			//GDGame.Msg.ins.addEventListener(GameMessage.SHOW_DAPIAO_INFO, this.showDapiaoInfo, this);
			GDGame.Msg.ins.addEventListener(GameMessage.VGID_USER_DAPIAO, this.ACK_USER_DAPIAO, this);
			//行牌单播消息
			GDGame.Msg.ins.addEventListener(GameMessage.VGID_GAME_OPERATION, this.ACK_GAME_OPERATION, this);
			//行牌应答
			GDGame.Msg.ins.addEventListener(GameMessage.VGID_USER_OPERATION, this.ACK_USER_OPERATION, this);
		}

		/*返回游戏服务登录结果*/
		private onEnterGame(evt: egret.Event): void {
			var body = evt.data;
			this.gameUI.initGame();
			ViewManager.ins.changeTimer(false);
		}
		/** 
		 * @param msg
		 * 返回游戏未开时突然结束的广播消息
		 */
		private ACK_OVER_GAME(body: egret.Event): void {
			this.gameMatch.stopAnim();
		}
		/*返回游戏阶段信息*/
		private onGameStage(evt: egret.Event): void {

		}
		/*
		*收到玩家列表
		*/
		private ACK_GAME_PLAYERLIST(): void {
			console.log('同步游戏的数据');
			this.gameUI.initUser();
		}
		/*
		*收到游戏规则
		*/
		private ACK_GAME_RULE(): void {
			this.gameUI.initPosition();
			//this.gameUI.initHandCard();
		}
		/*
		*骰子、手牌消息
		*/
		private ACK_GAME_DICEANDCARDS(): void {
			console.log("===ACK_GAME_DICEANDCARDS==")
			//this.gameUI.initHandCard();
		}

		//打漂应答
		private ACK_USER_DAPIAO(evt: egret.Event) {
			const body: room.VGUserDapiaoAck = evt.data;

			let seatid = body.userInfo.userPos.seatID;
			let p = Global.getUserPosition(seatid - 1);
			this.gameUI["gameUser" + p].user.setUserDapiaoInfo(body.userInfo.dapiao);
			this.gameUI["gameUser" + p].showDapiaoInfo();
		}

		// 发牌器
		private ACK_MAGIC_TILES(evt: egret.Event) {
			const body: room.MagicTilesAck = evt.data;
			console.log("==获得了 发牌")
			console.log("==获得了 发牌:",body)
			console.log("==获得了 发牌")
		}

		/**
		 * 行牌单播消息  根据这个显示操作按钮
		 * @param evt 
		 */
		private ACK_GAME_OPERATION(evt: egret.Event) {
			const body: room.VGGameOperationNtc = evt.data;

			const nSit = body.seatid;
			this.gameUI.startTime(body.second);
			game.GamePlayData.M_C_P_G_sit = nSit - 1
			this.gameUI.changeUserRight();
			if (body.operation.length == 0) {
				// 其他人的操作通知
				return;
			}

			body.operation.forEach((opt: room.MJ_Operation) => {
				//摸牌s
				console.log("=====摸牌=======", opt.operationType, opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_DRAW)
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_DRAW) {
					console.log("=====摸牌=======")
					console.log("=====摸牌=======")
					// GameParmes.gameStage = GameStageType.PLAYING;
					// room.RoomWebSocket.instance().roomSender.REQ_MAGICTILES()
				}
			})

			if (nSit != Global.userSit + 1) {
				//座位号 不是 自己
				return;
			}
			game.GamePlayData.SaveMJ_Operation(body.operation);
			console.log("====SELF 根据这个显示操作按钮 ====", body)

			const optArr = [false, false, false, false, false];

			//玩家自己操作
			body.operation.forEach((opt: room.MJ_Operation) => {
				//摸牌s
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_DRAW) {
					console.log("=====摸牌=======")
					console.log("=====摸牌=======")
					console.log("=====摸牌=======")
					GameParmes.gameStage = GameStageType.PLAYING;
					room.RoomWebSocket.instance().roomSender.REQ_MAGICTILES()
				}

				//手切，打出的是手中的牌，吃碰之后都是手切
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_H_DISCARD) {
					GameParmes.gameStage = GameStageType.PLAYING;

				}
				//摸切，打出的是刚摸到的牌s
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_D_DISCARD) {
					GameParmes.gameStage = GameStageType.PLAYING;
				}
				//左吃，吃的牌是最小点, 例如45吃3
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_L_CHOW) {
					optArr[0] = true;
					console.log("==左吃=====")
				}
				//中吃，吃的牌是中间点，例如24吃3
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_M_CHOW) {
					optArr[0] = true;
					console.log("==中吃=====")
				}
				//右吃，吃的牌是最大点，例如12吃3
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_R_CHOW) {
					optArr[0] = true;
					console.log("==右吃=====")
				}

				//碰
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PONG) {
					
					//吃 碰 杠 胡 停
					optArr[1] = true;
				}

				//暗杠
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_C_KONG) {
					//吃 碰 杠 胡 停
					optArr[2] = true;
				}

				//直杠
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_E_KONG) {
					//吃 碰 杠 胡 停
					optArr[2] = true;
				}

				//补杠
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_P_KONG) {
					//吃 碰 杠 胡 停
					optArr[2] = true;
				}

				//听
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_TING) {
					console.log("=====收到了 停的  操作 ==")
					//game.GamePlayData.SaveChiPengGangHu(body);

					//吃 碰 杠 胡 停
					if (GameParmes.isHu == false) {
						this.gameUI.gameHand.showTingFlag(true, "ting");
					}

					this.gameUI.checkLPCards();
					let arr: Array<any> = GamePlayData.GetChiPengGangHuGroup(CardsGroupType.CALL);
					for (let i: number = 0; i < arr.length; i++) {
						this.gameUI.arrCallCards.push(arr[i]);
					}
				}
				//和
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_WIN) {
					//吃 碰 杠 胡 停
					optArr[3] = true;
				}
				//过
				if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PASS) {

				}
			})

		
			const isShow = optArr.some((e) => (e))
			console.log("====操作按钮 数组===", isShow,optArr)
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
			console.log("=== 行牌应答 这是玩家操作的结果:", body)
			//console.log("=== 行牌应答 这是玩家操作的seat:", body["seatID"])
			const nSit = body["seatID"] - 1;
			const opt: room.MJ_Operation = <any>body.operation;

			if( !opt ){
				return;
			}
	
			//摸牌s
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_DRAW) {
				// game.GamePlayData.SetCardsWallIndex("Head", 1);

				// const cardGroup = {
				// 	sit: nSit,
				// 	Cards: [
				// 		{ CardID: opt.Tiles[0], Sit: nSit },
				// 	],
				// }
				// if (nSit == Global.userSit) {
				// 	game.GamePlayData.SaveCurrentCard(opt.Tiles[0], nSit);
				// }
				// const cardInfo: CardInfo = new CardInfo();
				// cardInfo.CardID = opt.Tiles[0]
				// cardInfo.Sit = nSit;
				// game.GamePlayData.AddHandCards(nSit, cardGroup);

				// //game.GamePlayData.SaveOperationSit(nSit);
				// this.gameUI.getOneCard(cardInfo);
			}

			//手切，打出的是手中的牌，吃碰之后都是手切
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_H_DISCARD) {
				//	console.log("=====打出的是手中的牌，吃碰之后都是手切==")
				const card: CardInfo = new CardInfo();
				card.CardID = opt.Tiles[0];
				card.Sit = nSit;

				const body = {
					ObtainCard: card,
					Type: CardsGroupType.PLAY,
					ObtainCardSit: opt.ObtainSeat - 1,
					sit: nSit,
					Cards: [
						{ CardID: opt.Tiles[0], Sit: nSit },
					],
				}
				game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(nSit), [card], nSit);
				game.GamePlayData.AddCardPool(body.Cards, nSit);
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
				var handcardsNum: number = game.GamePlayData.getHandCards(nSit).length;
				if (handcardsNum % 3 != 1) {
					game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(nSit), [card], nSit);
				}

				const body = {
					ObtainCard: card,
					Type: CardsGroupType.MOPLAY,
					ObtainCardSit: opt.ObtainSeat - 1,
					sit: nSit,
					Cards: [
						{ CardID: opt.Tiles[0], Sit: nSit },
					],
				}
				game.GamePlayData.AddCardPool(body.Cards, nSit);
				if (nSit == Global.userSit) {
					game.GamePlayData.SaveCurrentCard(0, -1);
				}
				// let dataArray: any[] = [];
				// dataArray.push(card);
				// dataArray.push(true);
				// GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_SENDCARD, true, true, dataArray));

				var b: boolean = false;
				this.gameUI.userSendCard(card, b);
				SoundModel.playEffect(SoundModel.CHU);
			}
			//左吃，吃的牌是最小点, 例如45吃3
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_L_CHOW) {
				console.log("=====左吃==")
				//game.GamePlayData.SaveOperationSit(body.Card.Sit);
				let card: CardInfo = { CardID: opt.ObtainTile, Sit: opt.ObtainSeat };
				const body = {
					ObtainCard: card,
					Type: CardsGroupType.CHI,
					ObtainCardSit: opt.ObtainSeat - 1,
					sit: nSit,
					Cards: [
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
					],
				}
				card = game.GamePlayData.AddChiPengGangCards(body, nSit);
				// let dataArray:any[] = [];
				// dataArray.push(nSit);
				// dataArray.push(card);
				// GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_CHIPAI,true,true,dataArray));

			}
			//中吃，吃的牌是中间点，例如24吃3
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_M_CHOW) {
				console.log("=====中吃，吃的牌是中间点，例如24吃3==")
				let card: CardInfo = { CardID: opt.ObtainTile, Sit: opt.ObtainSeat-1 };
				const body = {
					ObtainCard: card,
					Type: CardsGroupType.CHI,
					ObtainCardSit: opt.ObtainSeat - 1,
					sit: nSit,
					Cards: [
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
					],
				}
				card = game.GamePlayData.AddChiPengGangCards(body, nSit);
				// let dataArray:any[] = [];
				// dataArray.push(nSit);
				// dataArray.push(card);
			}

			//右吃，吃的牌是最大点，例如12吃3
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_R_CHOW) {
				console.log("=====右吃，吃的牌是最大点，例如12吃3==")
				let card: CardInfo = { CardID: opt.ObtainTile, Sit: opt.ObtainSeat-1 };
				const body = {
					ObtainCard: card,
					Type: CardsGroupType.CHI,
					ObtainCardSit: opt.ObtainSeat - 1,
					sit: nSit,
					Cards: [
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
					],
				}
				card = game.GamePlayData.AddChiPengGangCards(body, nSit);
				// let dataArray:any[] = [];
				// dataArray.push(nSit);
				// dataArray.push(card);
			}
			//碰
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PONG) {
				this.ON_USER_PENGPAI(opt, body["seatID"])
			}

			//暗杠
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_C_KONG) {
				//	game.GamePlayData.SaveOperationSit(body.Card.Sit);
				let card: CardInfo = { CardID: opt.ObtainTile, Sit: opt.ObtainSeat-1 };
				const body = {
					ObtainCard: card,
					Type: CardsGroupType.ANGANG,
					ObtainCardSit: opt.ObtainSeat - 1,
					sit: nSit,
					Cards: [
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
					],
				}
				game.GamePlayData.SaveCurrentCard(0, -1);
				//game.GamePlayData.SaveOperationSit(b);
			    game.GamePlayData.AddChiPengGangCards(body, nSit);

				this.ON_USER_ANGANGPAI(card, nSit);
			}
			//直杠
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_E_KONG) {
				let card: CardInfo = { CardID: opt.ObtainTile, Sit: opt.ObtainSeat-1 };
				const body = {
					ObtainCard: card,
					Type: CardsGroupType.MINGGANG,
					ObtainCardSit: opt.ObtainSeat - 1,
					sit: nSit,
					Cards: [
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
					],
				}

				game.GamePlayData.AddChiPengGangCards(body, nSit);
		
				this.ON_USER_MINGGANGPAI(card, nSit,opt.ObtainSeat-1 );
			}
			//补杠
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_P_KONG) {

				//∂ 	game.GamePlayData.SaveOperationSit(body.Card.Sit);
				let card: CardInfo = { CardID: opt.ObtainTile, Sit: opt.ObtainSeat-1 };
				const body = {
					ObtainCard: card,
					Type: CardsGroupType.BUGANG,
					ObtainCardSit: opt.ObtainSeat - 1,
					sit: nSit,
					Cards: [
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
						{ CardID: opt.ObtainTile },
					],
				}
				game.GamePlayData.AddChiPengGangCards(body, nSit);
				game.GamePlayData.SaveCurrentCard(0, -1);
	
				//dataArray.push(body.gangCoin);
				//GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_BUGANGPAI,true,true,dataArray))
				this.ON_USER_BUGANGPAI(card, nSit);
			}

			//听
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_TING) {
				//this.gameUI.onShowTHFlag();
			}

			//和
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_WIN) {

			}
			//过
			if (opt.operationType == CardsGroupType.MJ_OperationType.MJ_OT_PASS) {
				//this.gameUI.changeUserRight();
			}
			// this.gameUI.startTime(body.second);
		}

		/*
		*某玩家出牌
		*/
		private ACK_USER_SENDCARD(evt: egret.Event): void {
			var arr = evt.data;
			var card: CardInfo = arr[0];
			var b: boolean = arr[1];
			this.gameUI.userSendCard(card, b);
			SoundModel.playEffect(SoundModel.CHU);
		}
		/** 
		 * 显示吃碰杠等按钮
		 */
		public ACK_GAME_USEROPERATION(evt: egret.Event): void {
			this.gameUI.onShowOpt(evt.data);
		}
		/** 
		 * @param msg
		 * 服务器广播过牌消息
		 */
		private ACK_GAME_NO_OPERATION(evt: egret.Event): void {
			var nSit: number = evt.data;
			Global.log("有人选择过====" + nSit + "自己的座位号=" + Global.userSit);

			//this.gameUI.changeUserRight();
		}
		/** 
		 * @param msg
		 * 服务器广播牌尾摸牌消息
		 */
		private ACK_USER_PAIWEIMOPAI(evt: egret.Event): void {
			console.log("======ACK_USER_PAIWEIMOPAI=====")
			var cardInfo: CardInfo = evt.data[0] as CardInfo;
			this.gameUI.getOneCard(cardInfo);
			//SoundModel.playEffect(SoundModel.ZHUA);
		}
		/** 
		 * @param msg
		 * 服务器广播正常抓牌消息
		 */
		private ACK_USER_ZHUAPAI(evt: egret.Event): void {
			var cardInfo: CardInfo = evt.data[0] as CardInfo;
			this.gameUI.getOneCard(cardInfo);
			//SoundModel.playEffect(SoundModel.ZHUA);
		}

		/** 
		* @param msg
		* 服务器通知客户端碰牌
		*/
		private ON_USER_PENGPAI(data: room.MJ_Operation, seat: number): void {
			let nSit: number = seat - 1;

			let card: CardInfo = { CardID: data.ObtainTile, Sit: data.ObtainSeat - 1 };

			const body = {
				ObtainCard: card,
				Type: CardsGroupType.PENG,
				ObtainCardSit: data.ObtainSeat - 1,
				sit: nSit,
				Cards: [
					{ CardID: data.ObtainTile, Sit: nSit },
					{ CardID: data.ObtainTile, Sit: nSit },
					{ CardID: data.ObtainTile, Sit: nSit },
				],
			}

			// game.GamePlayData.SaveOperationSit(body.Card.Sit);
			card = game.GamePlayData.AddChiPengGangCards(body, nSit);

			this.gameUI.playAnim("peng", nSit);
			this.gameUI.updataUserCPG(nSit, card);
			SoundModel.playEffect(SoundModel.PENG);
		}

		/** 
		 * @param msg
		 * 服务器通知客户端碰牌
		 */
		private ACK_USER_PENGPAI(evt: egret.Event): void {

			let nSit: number = evt.data[0];
			let card: CardInfo = evt.data[1];
			this.gameUI.playAnim("peng", nSit);
			this.gameUI.updataUserCPG(nSit, card);
			SoundModel.playEffect(SoundModel.PENG);
		}
		/** 
		 * @param msg
		 * 服务器通知客户端明杠
		 */
		private ACK_USER_MINGGANGPAI(evt: egret.Event): void {
			var nSit: number = evt.data[0];
			var card: CardInfo = evt.data[1];
			var obSit: number = evt.data[2];
			this.gameUI.updataUserCPG(nSit, card);
			this.gameUI.playAnim("mingGang", nSit, obSit);
			var arrCoin: Array<number> = evt.data[3];
			this.gameUI.showCoinChange(arrCoin);
			SoundModel.playEffect(SoundModel.GANG);
		}

		/** 
		 * @param msg
		 * 服务器通知客户端明杠
		 */
		private ON_USER_MINGGANGPAI(card, seat: number,obSit): void {
			const nSit: number = seat ;
		
			this.gameUI.updataUserCPG(nSit, card);
			this.gameUI.playAnim("mingGang", nSit, obSit);
			//const arrCoin: Array<number> = data.Tiles;
			//this.gameUI.showCoinChange(arrCoin);
			SoundModel.playEffect(SoundModel.GANG);
		}
		/** 
		 * @param msg
		 * 服务器通知客户端暗杠
		 */
		private ACK_USER_ANGANGPAI(evt: egret.Event): void {
			var nSit: number = evt.data[0];
			var card: CardInfo = evt.data[1];
			this.gameUI.updataUserCPG(nSit, card);
			this.gameUI.playAnim("anGang", nSit);
			var arrCoin: Array<number> = evt.data[3];
			this.gameUI.showCoinChange(arrCoin);
			SoundModel.playEffect(SoundModel.GANG);
		}

		private ON_USER_ANGANGPAI(card, seat: number): void {
			const nSit: number = seat ;

			this.gameUI.updataUserCPG(nSit, card);

			this.gameUI.playAnim("anGang", nSit);
			// const arrCoin: Array<number> = data.Tiles;
			// this.gameUI.showCoinChange(arrCoin);
			SoundModel.playEffect(SoundModel.GANG);
		}
		/** 
		 * @param msg
		 * 服务器通知客户端补杠
		 */
		private ACK_USER_BUGANGPAI(evt: egret.Event): void {
			var nSit: number = evt.data[0];
			var card: CardInfo = evt.data[1];
			this.gameUI.updataUserCPG(nSit, card);
			this.gameUI.playAnim("buGang", nSit);
			var arrCoin: Array<number> = evt.data[3];
			this.gameUI.showCoinChange(arrCoin);
			SoundModel.playEffect(SoundModel.GANG);
		}

		private ON_USER_BUGANGPAI(card, seat: number): void {
			const nSit: number = seat ;

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
				this.checkHuInfo(body.hulist[i]);
				for (let j: number = 0; j < body.hulist[i].huInfo.score_change.length; j++) {
					arrScore[j] += body.hulist[i].huInfo.score_change[j];
				}
			}
			if (body.hulist.length > 1) {//一炮多响
				this.gameUI.playAnim("ypdx", body.hulist[0].seat, body.hulist[0].huInfo.obtainsit);
			}
			this.gameUI.showCoinChange(arrScore);
		}
		private checkHuInfo(info: any): void {
			let str: string = "";
			let arrFan: Array<number> = info.huInfo.fan_zhong;
			if (arrFan && arrFan.length > 0) {//12杠上开花 13杠上炮(呼叫转移) 14抢杠胡
				if (arrFan.indexOf(12) > -1) {
					str = "gskh";
				}
				if (arrFan.indexOf(13) > -1) {
					str = "hjzy";
				}
				if (arrFan.indexOf(14) > -1) {
					str = "qgh";
				}
				if (str != "") {
					this.gameUI.playAnim(str, info.seat);
				}
			}
			if (info.huInfo.type == 3) {//1刮风 2下雨 3自摸 4胡  5花猪  6大叫 7呼叫转移 8补杠 9退税
				if (str == "") {
					this.gameUI.playAnim("zm", info.seat);
				}
				SoundModel.playEffect(SoundModel.ZIMO);
			}
			if (info.huInfo.type == 4) {
				if (str == "") {
					this.gameUI.playAnim("hu", info.seat);
				}
				this.gameUI.delPoolCard(info.huInfo.obtainsit);
				SoundModel.playEffect(SoundModel.HU);
			}
			if (info.seat == Global.userSit) {//自己胡牌
				GameParmes.isHu = true;
				this.gameUI.hideTingFlag();
			}

			this.gameUI.showHuCard(info.seat, info.huInfo.huCardID, info.huInfo.type);
			GameParmes.nHuType = 0;//把天胡的标记重置，胡了一次后就没用了
		}
		/** 
		 * @param msg
		 * 服务器通知客户端 全部结束
		 */
		private ACK_ALL_GAMERESULT(evt: egret.Event): void {
			console.log("=!!!!SHOW RESULT=====")
			let nTime: number = 1200;
			this.gameUI.playAnim("djjs", -1);
			if (GameParmes.isGameFlower) {//播放流局动画
				egret.setTimeout(function () {
					this.gameUI.playAnim("liuju", -1);
				}, this, 1200);
				nTime = 2400;
			}
			let body: room.VGGameResultNtc = evt.data;


			let isAnim: boolean = false;
			// for (let i: number = 0; i < body.userInfos.length; i++) {
			// 	this.gameUI.updataUserCoin(body.userInfos[i].userPos.seatID, Number(body.userInfos[i].gameCoin) );
			// 	let arr: Array<any> = body.userInfos[i].result_list_detail;
			// 	for (let j: number = 0; j < arr.length; j++) {
			// 		let info: any = arr[j];
			// 		if (info.type == 5 && info.score < 0) {
			// 			isAnim = true;
			// 			egret.setTimeout(function () {
			// 				this.gameUI.playAnim("hz", info.selfseat);
			// 			}, this, 1200);
			// 			break;
			// 		}
			// 		if (info.type == 6 && info.score < 0) {
			// 			isAnim = true;
			// 			egret.setTimeout(function () {
			// 				this.gameUI.playAnim("dj", info.selfseat);
			// 			}, this, 1200);
			// 			break;
			// 		}
			// 	}
			// }
			if (isAnim) {
				nTime = 2400;
			}
			egret.setTimeout(function () {
				this.gameUI.showAllHandCard(body);
				this.gameResult.showResult(body);
			}, this, nTime);
			ViewManager.ins.changeTimer(true);
		}
		private onGameContinue(): void {
			room.RoomWebSocket.instance().roomSender.REQ_ROOMENTERROOM(Global.myPos.roomID);
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

			if(body.isManaged == 1){
				this.gameUI.showTrust(true);
			}else{
				this.gameUI.showTrust(false);
			}
			 
		}
		/** 
		 * @param msg
		 * 解除托管消息
		 */
		private ACK_USER_PLAYERRELIEVETRUST(): void {
			
		}
		/*庄家开始出牌*/
		private ACK_GAME_STARTPLAYING(): void {
			this.gameUI.showWallCount();
			if (Global.userSit == GameParmes.firstSit && Global.userSit == game.GamePlayData.M_C_P_G_sit) {
				//我是庄的时候，第一次出牌的倒计时时间为15S
				this.gameUI.startTime(GameParmes.gameFirstSendTime);
			}
		}

		/*服务通知客户端开始换三张*/
		private ACK_USER_HSZSTATE(): void {
			this.gameUI.startHSZAndDQ(1);
			GameParmes.hszTime = GameParmes.hszTime - 5;
			this.gameUI.startTime(GameParmes.hszTime, "hsz");
		}
		/*换三张结束*/
		private ACK_USER_HSZ(evt: egret.Event): void {
			this.gameUI.onUserHSZ(evt.data);
		}
		//通知客户端定缺状态
		private ACK_USER_DINGQUESTATE(evt: egret.Event): void {
			this.gameUI.startHSZAndDQ(2);
			this.gameUI.startTime(GameParmes.dqTime);
		}
		/*收到定缺消息*/
		private ACK_USER_DINGQUE(): void {
			this.gameUI.onUserDingQue();
			this.gameUI.changeUserRight();
			this.gameUI.startTime(GameParmes.gamePlayTime);
		}
		/*
		*断线续玩
		*/
		private ACK_USER_CONTINUED(evt: egret.Event): void {
			Global.log("断线续完界面");
			let arr: Array<any> = evt.data[0];
			let cardInfo: game.CardInfo = evt.data[1];
			this.gameUI.onGameContinue(arr, cardInfo);
		}

		private ACK_GAME_STATUS_CHANGED(evt: egret.Event): void {

			let status = game.RoomInfo.ins.status;
			console.log("游戏状态变更==============");
			console.log("游戏状态变更", status);
			console.log("游戏状态变更==============");
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
			//进入游戏结果
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_ENTERGAME, this.onEnterGame, this);
			//游戏阶段
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMESTAGE, this.onGameStage, this);
			//玩家列表
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMEPLAYERLIST, this.ACK_GAME_PLAYERLIST, this);
			//游戏规则
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMERULE, this.ACK_GAME_RULE, this);
			//骰子、手牌消息
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMEDICEANDCARDS, this.ACK_GAME_DICEANDCARDS, this);
			//庄家准备开始出牌
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAME_STARTPLAYING, this.ACK_GAME_STARTPLAYING, this);
			//断线续玩
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMECONTINUED, this.ACK_USER_CONTINUED, this);
			//玩家出牌
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_SENDCARD, this.ACK_USER_SENDCARD, this);
			//吃碰杠权限
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAME_USEROPERATION, this.ACK_GAME_USEROPERATION, this);
			//服务器通知客户端 单次胡牌消息
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMERESULT, this.ACK_GAME_RESULT, this);
			//游戏全部结束
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_ALLGAMERESULT, this.ACK_ALL_GAMERESULT, this);
			//服务器通知客户端托管操作
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMEPLAYERTRUST, this.ACK_USER_PLAYERTRUST, this);
			//服务器通知客户端解除托管操作
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAMEPLAYERRELIEVETRUST, this.ACK_USER_PLAYERRELIEVETRUST, this);
			//返回游戏未开时突然结束的广播消息
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_OVERGAME, this.ACK_OVER_GAME, this);
			//服务器广播过牌消息
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_GAME_NO_OPERATION, this.ACK_GAME_NO_OPERATION, this);
			//服务器广播牌尾摸牌消息
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_PAIWEIMOPAI, this.ACK_USER_PAIWEIMOPAI, this);
			//服务器广播正常抓牌消息
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_ZHUAPAI, this.ACK_USER_ZHUAPAI, this);
			//服务器通知客户端  碰牌
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_PENGPAI, this.ACK_USER_PENGPAI, this);
			//服务器通知客户端  明杠
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_MINGGANGPAI, this.ACK_USER_MINGGANGPAI, this);
			//服务器通知客户端  暗杠
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_ANGANGPAI, this.ACK_USER_ANGANGPAI, this);
			//服务器通知客户端  补杠
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_BUGANGPAI, this.ACK_USER_BUGANGPAI, this);
			//服务器通知客户端定缺
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_DINGQUE_STATE, this.ACK_USER_DINGQUESTATE, this);
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_DINGQUE, this.ACK_USER_DINGQUE, this);
			//服务器通知客户端换三张
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_HSZ_STATE, this.ACK_USER_HSZSTATE, this);
			GDGame.Msg.ins.removeEventListener(GameMessage.ACK_USER_HSZ, this.ACK_USER_HSZ, this);

			//房间状态变更
			GDGame.Msg.ins.removeEventListener(GameMessage.NTF_ROOM_STATE, this.ACK_GAME_STATUS_CHANGED, this);

			//显示打漂信息
			//	GDGame.Msg.ins.removeEventListener(GameMessage.SHOW_DAPIAO_INFO, this.showDapiaoInfo, this);

			//打漂应答
			GDGame.Msg.ins.removeEventListener(GameMessage.VGID_USER_DAPIAO, this.ACK_USER_DAPIAO, this);

			//行牌单播消息
			GDGame.Msg.ins.removeEventListener(GameMessage.VGID_GAME_OPERATION, this.ACK_GAME_OPERATION, this);
			GDGame.Msg.ins.removeEventListener(GameMessage.VGID_USER_OPERATION, this.ACK_USER_OPERATION, this);

			GDGame.Msg.ins.removeEventListener(GameMessage.VGID_SERVICE_MAGICTILES, this.ACK_MAGIC_TILES, this);

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