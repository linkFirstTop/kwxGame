module game {
	export class GameMessage {
		public static GAME_BASE: string = "GAME_MSG_BASE";
		public static CLIENT_BASE: string = "GAME_CLIENT_BASE";
		/**
		 *请求进入GameID创建的游戏服务
			*/
		public static REQ_ENTERGAME: string = GameMessage.GAME_BASE + "REQ_ENTERGAME";
		/**
		 *返回进入游戏服务的结果
			*/
		public static ACK_ENTERGAME: string = GameMessage.GAME_BASE + "ACK_ENTERGAME";
		/**
		 *请求游戏服务准备状态
			*/
		public static REQ_READYGAME: string = GameMessage.GAME_BASE + "REQ_READYGAME";
		/**
		 *返回游戏未开时突然结束的广播消息
			*/
		public static ACK_OVERGAME: string = GameMessage.GAME_BASE + "ACK_OVERGAME";
		/**
		 *下发游戏阶段消息
			*/
		public static ACK_GAMESTAGE: string = GameMessage.GAME_BASE + "ACK_GAMESTAGE";
		/**
		 *下发游戏玩家列表
			*/
		public static ACK_GAMEPLAYERLIST: string = GameMessage.GAME_BASE + "ACK_GAMEPLAYERLIST";
		/**
		 *下发游戏规则
			*/
		public static ACK_GAMERULE: string = GameMessage.GAME_BASE + "ACK_GAMERULE";
		/**
		 *接收服务器发送的色子和手牌
			*/
		public static ACK_GAMEDICEANDCARDS: string = GameMessage.GAME_BASE + "ACK_GAMEDICEANDCARDS";
		/*庄家开始出牌*/
		public static ACK_GAME_STARTPLAYING: string = GameMessage.GAME_BASE + "ACK_GAME_STARTPLAYING";
		/**
		 *客户端请求服务器理牌结束
			*/
		public static REQ_GAMEHANDCARDSOVER: string = GameMessage.GAME_BASE + "REQ_GAMEHANDCARDSOVER";

		/**
		 *游戏中请求的操作
			*/
		public static REQ_GAMESENDCARD: string = GameMessage.GAME_BASE + "REQ_GAMESENDCARD";
		/**
		 *游戏中返回玩家的操作
			*/
		public static ACK_GAMESENDCARD: string = GameMessage.GAME_BASE + "ACK_GAMESENDCARD";
		/**
		 *服务器通知客户端能够进行操作的权限  比如能吃碰杠胡的显示
			*/
		public static ACK_GAMEUSEROPERATION: string = GameMessage.GAME_BASE + "ACK_GAMEUSEROPERATION";
		/**
		 *服务器通知客户端结果消息
			*/
		public static ACK_GAMERESULT: string = GameMessage.GAME_BASE + "ACK_GAMERESULT";

		public static ACK_ALLGAMERESULT: string = GameMessage.GAME_BASE + "ACK_ALLGAMERESULT";
		/**
		 *客户端请求服务器托管
			*/
		public static REQ_GAMEPLAYERTRUST: string = GameMessage.GAME_BASE + "REQ_GAMEPLAYERTRUST";
		/**
		 *服务器通知客户端托管
			*/
		public static ACK_GAMEPLAYERTRUST: string = GameMessage.GAME_BASE + "ACK_GAMEPLAYERTRUST";
		/**
		 *客户端请求服务器解除托管
			*/
		public static REQ_GAMEPLAYERRELIEVETRUST: string = GameMessage.GAME_BASE + "REQ_GAMEPLAYERRELIEVETRUST";
		/**
		 *服务器通知客户端解除托管
			*/
		public static ACK_GAMEPLAYERRELIEVETRUST: string = GameMessage.GAME_BASE + "ACK_GAMEPLAYERRELIEVETRUST";
		/**
		 *客户端请求服务器延时操作
			*/
		public static REQ_GAMEDELAY: string = GameMessage.GAME_BASE + "REQ_GAMEDELAY";
		/**
		 *服务器通知客户端延时操作
			*/
		public static ACK_GAMEDELAY: string = GameMessage.GAME_BASE + "ACK_GAMEDELAY";
		/**
		 *断线续完同步消息 发完玩家列表和规则后下发此消息
			*/
		public static ACK_GAMECONTINUED: string = GameMessage.GAME_BASE + "ACK_GAMECONTINUED";

		/**
		 *广播聊天
		*/
		public static ACK_GAME_CHAT: string = GameMessage.GAME_BASE + "ACK_GAME_CHAT";
		/**
		 *广播断线
		*/
		public static ACK_GAME_DISCONNECTED: string = GameMessage.GAME_BASE + "ACK_GAME_DISCONNECTED";
		/**
		 * GPS
		 */
		public static ACK_GAME_GPS: string = GameMessage.GAME_BASE + "ACK_GAME_GPS";
		/**
		 * 心跳
		 */
		public static OGID_DUXLIVETICK: string = GameMessage.GAME_BASE + "OGID_DUXLIVETICK";

		//========================================client==========================================
		/**
		 *服务器通知客户端能够进行操作的权限  比如能吃碰杠胡的显示
			*/
		public static ACK_GAME_USEROPERATION: string = GameMessage.CLIENT_BASE + "ACK_GAME_USEROPERATION";
		/**
		 *服务器通知客户端抓拍
			*/
		public static ACK_USER_ZHUAPAI: string = GameMessage.CLIENT_BASE + "ACK_USER_ZHUAPAI";
		/**
		 *服务器通知客户端请求补花操作
			*/
		public static ACK_USER_SELECTBUHUA: string = GameMessage.CLIENT_BASE + "ACK_USER_SELECTBUHUA";
		/**
		 *服务器通知客户端牌尾摸牌（补花摸牌）
			*/
		public static ACK_USER_PAIWEIMOPAI: string = GameMessage.CLIENT_BASE + "ACK_USER_PAIWEIMOPAI";
		/**
		 *服务器通知客户端打牌操作
			*/
		public static ACK_USER_SENDCARD: string = GameMessage.CLIENT_BASE + "ACK_USER_SENDCARD";
		/**
		 *服务器通知客户端吃牌
			*/
		public static ACK_USER_CHIPAI: string = GameMessage.CLIENT_BASE + "ACK_USER_CHIPAI";
		/**
		 *服务器通知客户端碰牌
			*/
		public static ACK_USER_PENGPAI: string = GameMessage.CLIENT_BASE + "ACK_USER_PENGPAI";
		/**
		 *服务器通知客户端明杠牌
			*/
		public static ACK_USER_MINGGANGPAI: string = GameMessage.CLIENT_BASE + "ACK_USER_MINGGANGPAI";
		/**
		 *服务器通知客户端暗杠牌
			*/
		public static ACK_USER_ANGANGPAI: string = GameMessage.CLIENT_BASE + "ACK_USER_ANGANGPAI";
		/**
		 *服务器通知客户端补杠牌
			*/
		public static ACK_USER_BUGANGPAI: string = GameMessage.CLIENT_BASE + "ACK_USER_BUGANGPAI";
		/**
		 *服务器通知客户端“过牌”的操作
			*/
		public static ACK_GAME_NO_OPERATION: string = GameMessage.CLIENT_BASE + "ACK_GAME_NO_OPERATION";

		/*服务器通知客户端定缺*/
		public static ACK_USER_DINGQUE: string = GameMessage.CLIENT_BASE + "ACK_USER_DINGQUE";
		public static ACK_USER_DINGQUE_STATE: string = GameMessage.CLIENT_BASE + "ACK_USER_DINGQUE_STATE";
		/*换三张*/
		public static ACK_USER_HSZ: string = GameMessage.CLIENT_BASE + "ACK_USER_HSZ";
		public static ACK_USER_HSZ_STATE: string = GameMessage.CLIENT_BASE + "ACK_USER_HSZ_STATE";

		/**房间状态变更广播 */
		public static NTF_ROOM_STATE: string = GameMessage.CLIENT_BASE + "NTF_ROOM_STATE";

		/**显示打漂信息*/
		public static SHOW_DAPIAO_INFO: string = GameMessage.CLIENT_BASE + "SHOW_DAPIAO_INFO";

		/**发牌信息 */
		public static START_GET_CARD: string = GameMessage.CLIENT_BASE + "START_GET_CARD";

		/**发牌信息 */
		public static VGID_GAME_OPERATION: string = GameMessage.CLIENT_BASE + "VGID_GAME_OPERATION";

	}

}