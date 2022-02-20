module game {
	export class GameSocketReceive {
		public constructor() {
		}
		public initHandlers(id: number, byte: egret.ByteArray): void {
			console.log(88888, '--game接受消息socket');
			switch (id) {
				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_ENTER_GAME://返回进入游戏服务结果
					this.ON_ACK_ENTERGAME(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_READY_GAME://服务器返回准备结果
					this.OGID_CLIENT_READY_GAME(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_GAME_OVER://返回游戏未开时突然结束的广播消息
					this.ON_ACK_OVERGAME(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_GAME_STAGE://发游戏阶段消息
					this.ON_ACK_GAMESTAGE(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_PLAYER_LIST://接收服务器发送的用户列表
					this.ON_ACK_GAMEPLAYERLIST(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_GAME_RULE://接收服务器发送的游戏规则
					this.ON_ACK_GAMERULE(byte);
					break;

				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_DICE_AND_CARDS://接收服务器发送的色子和手牌
					this.ON_ACK_DICEANDCARDS(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_SEND_CARD://接收服务器游戏的操作
					this.ON_ACK_SENDCARDS(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_USER_OPERATION://接收服务器客户端能够操作的权限   比如能否吃碰杠胡
					this.ON_ACK_USEROPERATION(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_SCMJ_GAME_HU_RESULT:
					this.OGID_SCMJ_GAME_HU_RESULT(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_GANE_RESULT://服务器通知客户端结果消息
					this.ON_ACK_GAMERESULT(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_PLAYER_TRUST://服务器通知客户端托管
					this.ON_ACK_GAMEPLAYERTRUST(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_PLAYER_RELIEVE_TRUST://服务器通知客户端解除托管
					this.ON_ACK_GAMEPLAYERRELIEVETRUST(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_GAME_CONTINUED://断线续完同步消息 发完玩家列表和规则后下发此消息 
					this.ON_ACK_GAMECONTINUED(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_DUXLIVETICK://心跳
					this.OGID_DUXLIVETICK(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_SCMJ_HUAN_SAN_ZHANG://换三张
					this.OGID_SCMJ_HUAN_SAN_ZHANG(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_SCMJ_DING_QUE://定缺
					this.OGID_SCMJ_DING_QUE(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_SCMJ_GAME_STATUS://玩家状态
					this.OGID_SCMJ_GAME_STATUS(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_GAME_CHAT:
					this.OGID_GAME_CHAT(byte);
					break;
			}

		}
		//返回进入游戏服务结果
		private ON_ACK_ENTERGAME(byte: egret.ByteArray): void {

			var body: game.AckEnterGame = game.AckEnterGame.decode(byte.bytes);
			Global.log("收到进入游戏返回消息:" + body.game_guid);
			Global.strGameGUID = body.game_guid;
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_ENTERGAME));
			GamePlayData.initData();
			GameParmes.initData();
			if (body.Result) {
				game.GameWebSocket.instance().gameSender.ReqReadyGameFun();
			} else {
				Global.log("进入游戏body.Result=" + body.Result + "~~~~~~~~~~~~~~~~" + body.ErrorID);
				game.GameWebSocket.instance().clearSocket();
				room.RoomWebSocket.instance().roomSender.REQ_ROOMENTERROOM(Global.myPos.roomID);
			}
		}

		//服务器返回准备结果
		private OGID_CLIENT_READY_GAME(byte: egret.ByteArray): void {
			Global.log("服务器返回准备结果");
		}
		//返回游戏未开时突然结束的广播消息
		private ON_ACK_OVERGAME(byte: egret.ByteArray): void {
			var body: game.AckGameOver = game.AckGameOver.decode(byte.bytes);
			Global.log("返回游戏未开时突然结束的广播消息：" + body.ErrorID);
			game.GameWebSocket.instance().clearSocket();
			GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.ACK_OVERGAME, true, true, body.ErrorID));
		}
		//发游戏阶段消息
		private ON_ACK_GAMESTAGE(byte: egret.ByteArray): void {
			var body: game.AckGameStage = game.AckGameStage.decode(byte.bytes);
			Global.log("游戏阶段消息:" + body.Stage);
			console.log("游戏阶段消息*********");
			console.log("游戏阶段消息:" + body.Stage);
			console.log("游戏阶段消息*********");
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAMESTAGE, true, true, body));
			GameParmes.gameStage = body.Stage;
			if (GameParmes.gameStage == GameStageType.STARGAME) {

			} else if (GameParmes.gameStage == GameStageType.PLAYING) {
				game.GamePlayData.M_C_P_G_sit = GameParmes.firstSit;
				GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAME_STARTPLAYING));
			}
			//  else if (GameParmes.gameStage == GameStageType.CHANGE) {//广播换三张
			// 	game.GamePlayData.M_C_P_G_sit = GameParmes.firstSit;
			// 	GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_HSZ_STATE));
			// } else if (GameParmes.gameStage == GameStageType.DINGQUE) {//定缺
			// 	game.GamePlayData.M_C_P_G_sit = GameParmes.firstSit;
			// 	GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_DINGQUE_STATE));
			// }

		}
		//接收服务器发送的用户列表
		private ON_ACK_GAMEPLAYERLIST(byte: egret.ByteArray): void {
			var body: game.AckPlayerList = game.AckPlayerList.decode(byte.bytes);
			Global.log("收到玩家列表");
			// game.GameUserList.saveUserListInfo(body.PlayerList);
			// GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAMEPLAYERLIST,true,true));
		}
		//接收服务器发送的游戏规则
		private ON_ACK_GAMERULE(byte: egret.ByteArray): void {
			Global.log("接收服务器发送的游戏规则");
			var body: game.AckGameRule = game.AckGameRule.decode(byte.bytes);
			GameController.AckGameRuleFun(body);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAMERULE, true, true));
		}

		//接收服务器发送的色子和手牌
		private ON_ACK_DICEANDCARDS(byte: egret.ByteArray): void {
			var body: game.AckDiceAndCards = game.AckDiceAndCards.decode(byte.bytes);
			GameController.AckGameDiceAndCards(body);
			Global.log("接收服务器发送的色子和手牌",body);
		}
		//接收服务器游戏的操作
		private ON_ACK_SENDCARDS(byte: egret.ByteArray): void {
			var body: game.AckSendCard = game.AckSendCard.decode(byte.bytes);
			GameController.AckGameSendCards(body);
		}

		//接收服务器客户端能够操作的权限   比如能否吃碰杠胡
		private ON_ACK_USEROPERATION(byte: egret.ByteArray): void {
			var body: game.AckUserOperation = game.AckUserOperation.decode(byte.bytes);
			GameController.AckGameUserOperation(body);
			Global.log("接收服务器客户端能够操作的权限");
		}
		//服务器通知客户端单次胡
		private OGID_SCMJ_GAME_HU_RESULT(byte: egret.ByteArray): void {
			Global.log("服务器通知单次胡牌");
			var body: game.HuResultAck = game.HuResultAck.decode(byte.bytes);
			GameController.AckGameOnResult(body);
		}
		//服务器通知客户端结果消息
		private ON_ACK_GAMERESULT(byte: egret.ByteArray): void {
			var body: game.AckGameResult = game.AckGameResult.decode(byte.bytes);
			Global.log("服务器通知客户端结果消息");
			GameController.AckGameResult(body);
			game.GameWebSocket.instance().clearSocket();
		}

		//断线续完同步消息 发完玩家列表和规则后下发此消息
		private ON_ACK_GAMECONTINUED(byte: egret.ByteArray): void {
			var body: game.AckGameContinued = game.AckGameContinued.decode(byte.bytes);
			Global.log("断线续完同步消息:" + body.game_guid, "当前阶段:" + body.Stage);
			Global.strGameGUID = body.game_guid;
			GameController.AckPlayerContinued(body);
			if (body.Stage == GameStageType.GAMEOVER) {
				game.GameWebSocket.instance().gameSender.ReqReadyGameFun();
			}

		}

		//心跳返回
		public OGID_DUXLIVETICK(byte: egret.ByteArray): void {
			/*GameFlowController.getInstance().timeCount = 0;
			GameEventDispatcher.getInstance().dispatchEvent(new DateEvent(GameMessage.OGID_DUXLIVETICK,null));*/
		}

		//******************************************************************************************************* */

		//服务器通知客户端托管
		private ON_ACK_GAMEPLAYERTRUST(byte: egret.ByteArray): void {
			Global.log("服务器通知客户端托管");
			var body: game.AckPlayerTrust = game.AckPlayerTrust.decode(byte.bytes);
			console.log("托管玩家座位号:" + body.TrustSit, "我的座位号:" + Global.userSit);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAMEPLAYERTRUST));
		}
		//服务器通知客户端解除托管
		private ON_ACK_GAMEPLAYERRELIEVETRUST(byte: egret.ByteArray): void {
			Global.log("服务器通知客户端解除托管");
			var body: game.AckPlayerRelieveTrust = game.AckPlayerRelieveTrust.decode(byte.bytes);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAMEPLAYERRELIEVETRUST));
		}

		private OGID_GBMJ_NTC_MESSAGE(byte: egret.ByteArray): void {
			var body: game.OGNtcMessage = game.OGNtcMessage.decode(byte.bytes);
			Global.log("收到通知消息:" + body.msg);
		}
		//广播聊天消息
		private OGID_GAME_CHAT(byte: egret.ByteArray): void {
			Global.log("服务器通知客户端 聊天");
			var body: game.OGNtcGameChatMessage = game.OGNtcGameChatMessage.decode(byte.bytes);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAME_CHAT, true, true, body));
		}

		//广播换三张
		private OGID_SCMJ_HUAN_SAN_ZHANG(byte: egret.ByteArray): void {
			Global.log("服务器通知客户端换三张广播");
			var body: game.AckHuanSanZhang = game.AckHuanSanZhang.decode(byte.bytes);
			GameController.AckHuanSanZhang(body);
		}

		//定缺
		private OGID_SCMJ_DING_QUE(byte: egret.ByteArray): void {
			Global.log("服务器通知客户端定缺");
			var body: game.AckDingQue = game.AckDingQue.decode(byte.bytes);
			GameController.AckDingQue(body);
		}
		//玩家状态
		private OGID_SCMJ_GAME_STATUS(byte: egret.ByteArray): void {
			var body: game.AckGameStatus = game.AckGameStatus.decode(byte.bytes);
		}
	}
}