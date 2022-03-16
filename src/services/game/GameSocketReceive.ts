module game {
	export class GameSocketReceive {
		public constructor() {
		}
		public initHandlers(id: number, byte: egret.ByteArray): void {
			console.log(88888, '--game接受消息socket');
			switch (id) {
		
				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_GAME_STAGE://发游戏阶段消息
					this.ON_ACK_GAMESTAGE(byte);
					break;
		

				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_DICE_AND_CARDS://接收服务器发送的色子和手牌
					this.ON_ACK_DICEANDCARDS(byte);
					break;

				case GameProtocol.ACK | GameProtocol.OGID_SCMJ_GAME_HU_RESULT:
					this.OGID_SCMJ_GAME_HU_RESULT(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_CLIENT_GANE_RESULT://服务器通知客户端结果消息
					this.ON_ACK_GAMERESULT(byte);
					break;
				case GameProtocol.ACK | GameProtocol.VGID_USER_MANAGED://服务器通知客户端托管
					this.ON_ACK_GAMEPLAYERTRUST(byte);
					break;
;
		
				case GameProtocol.ACK | GameProtocol.OGID_DUXLIVETICK://心跳
					this.OGID_DUXLIVETICK(byte);
					break;
		
				case GameProtocol.ACK | GameProtocol.OGID_SCMJ_GAME_STATUS://玩家状态
					this.OGID_SCMJ_GAME_STATUS(byte);
					break;
				case GameProtocol.ACK | GameProtocol.OGID_GAME_CHAT:
					this.OGID_GAME_CHAT(byte);
					break;
			}

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

		}


		//接收服务器发送的色子和手牌
		private ON_ACK_DICEANDCARDS(byte: egret.ByteArray): void {
			var body: game.AckDiceAndCards = game.AckDiceAndCards.decode(byte.bytes);
			GameController.AckGameDiceAndCards(body);
			Global.log("接收服务器发送的色子和手牌",body);
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



		//心跳返回
		public OGID_DUXLIVETICK(byte: egret.ByteArray): void {
			/*GameFlowController.getInstance().timeCount = 0;
			GameEventDispatcher.getInstance().dispatchEvent(new DateEvent(GameMessage.OGID_DUXLIVETICK,null));*/
		}

		//******************************************************************************************************* */

		//服务器通知客户端托管
		private ON_ACK_GAMEPLAYERTRUST(byte: egret.ByteArray): void {
			Global.log("服务器通知客户端托管");
			var body: room.VGUserManagedAck = room.VGUserManagedAck.decode(byte.bytes);
		//	console.log("托管玩家座位号:" + body.TrustSit, "我的座位号:" + Global.userSit);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAMEPLAYERTRUST));
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



		//玩家状态
		private OGID_SCMJ_GAME_STATUS(byte: egret.ByteArray): void {
			var body: game.AckGameStatus = game.AckGameStatus.decode(byte.bytes);
		}
	}
}