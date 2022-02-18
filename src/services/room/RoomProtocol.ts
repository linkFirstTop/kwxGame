module room {
	export class RoomProtocol {
		public constructor() {
		}
		public static REQ: number = 0x00000000; //请求消息类型 
		public static ACK: number = 0x08000000; //应答消息类型

		public static OGID_CLIENT_LIST_BASE: number = 0x00256C00;
		//登录
		public static OGID_CLIENT_LIST_LOGIN: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x01;
		//心跳消息
		public static DuxLiveTick: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x00;
		//请求房间列表
		public static OGID_CLIENT_LIST_ROOM_LIST: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x02;
		//请求进入房间
		public static OGID_CLIENT_LIST_ROOM_ENTERROOM: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x03;
		//请求离开房间
		public static OGID_CLIENT_LIST_ROOM_LEAVEROOM: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x04;
		//开始游戏
		public static OGID_CLIENT_LIST_ROOM_QUICKGAME: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x05;
		//广播快速开始游戏
		public static OGID_CLIENT_LIST_ROOM_STARTGAME: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x84;
		//金币变化
		public static OGID_CLIENT_LIST_ROOM_UPDATECOIN: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x08;
		//断线续玩
		public static OGID_CLIENT_LIST_ROOM_CONTINUE_GAME: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x09;


		//请求进入房间游戏服务
		public static OGID_CLIENT_ENTER_GAME: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x01;
		// 对应的message 请求：ReqEnterGame 回复：AckEnterGame
		// C => S : OGID_REQ | OGID_CLIENT_ENTER_GAME
		// S => C : OGID_ACK | OGID_CLIENT_ENTER_GAME


		//客户端请求准备游
		public static OGID_CLIENT_READY_GAME: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x02;
		// 对应的message 请求：ReqReadyGame 回复：AckEnterGame
		// C => S : OGID_REQ | OGID_CLIENT_READY_GAME
		// S => C : OGID_ACK | OGID_CLIENT_READY_GAME


		//服务器通知客户端散桌
		public static OGID_CLIENT_GAME_OVER: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x03;
		// 对应的message AckGameOver
		// S => C : OGID_ACK | OGID_CLIENT_GAME_OVER

		//客户端请求准备游 用户列表 同步消息
		public static OGID_CLIENT_PLAYER_LIST: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x84;
		// 对应的message：AckPlayerList
		// S => C : OGID_ACK | OGID_CLIENT_PLAYER_LIST

		//服务器下发当前游戏规则
		public static OGID_CLIENT_GAME_RULE: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x05;
		// 对应的message: AckGameRule
		// S => C ：OGID_ACK | OGID_CLIENT_GAME_RULE

		//服务器下发骰子，以及发牌
		public static OGID_CLIENT_DICE_AND_CARDS: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x06;
		// 对应的message: AckDicAndCards
		// S => C : OGID_ACK | OGID_CLIENT_DICE_AND_CARDS

		//客户端通知服务器例牌结束
		public static OGID_CLIENT_HANDCARDS_OVER: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x07;
		// 对应的message：ReqHandCardsOver 
		// C => S : OGID_REQ | OGID_CLIENT_HANDCARDS_OVER

		// 服务器通知客户端游戏阶段
		public static OGID_CLIENT_GAME_STAGE: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x08;
		// 对应的message：AckGameStage
		// S => C : OGID_ACK | OGID_CLIENT_GAME_STAGE

		// 客户端游戏中对牌的操作
		public static OGID_CLIENT_SEND_CARD: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x09;
		// 对应的message: 请求: ReqSendCard 回复：AckSendCard
		// C => S : OGID_REQ | OGID_CLIENT_SEND_CARD
		// S => C : OGID_ACK | OGID_CLIENT_SEND_CARD

		// 服务器返回客户端可进行吃碰杠的操作
		public static OGID_CLIENT_USER_OPERATION: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x0a;
		// 对应的message: AckUserOpearation
		// S => C : OGID_ACK | OGID_CLIENT_USER_OPERATION

		// 服务器通知客户端结果消息
		public static OGID_CLIENT_GANE_RESULT: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x0b;
		// 对应的message：AckGameResult
		// S => C : OGID_ACK | OGID_CLIENT_GANE_RESULT

		// 服务器通知客户端托管
		public static OGID_CLIENT_PLAYER_TRUST: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x0c;
		// 对应的message: AckPlayerTrust
		// S => C : OGID_ACK | OGID_CLIENT_PLAYER_TRUST

		// 客户端通知服务器解除托管
		public static OGID_CLIENT_PLAYER_RELIEVE_TRUST: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x0d;
		// 对应的message：ReqPlayerRelieveTrust
		// C => S : OGID_REQ | OGID_CLIENT_PLAYER_RELIEVE_TRUST

		//客户端请求延时操作
		public static OGID_CLIENT_GAME_DELAY: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x0e;
		// 对应的message：请求：ReqGameDelay 回复：AckGameDelay 
		// C => S : OGID_REQ | OGID_CLIENT_GAME_DELAY
		// S => C : OGID_ACK | OGID_CLIENT_GAME_DELAY

		// 断线续完同步消息 发完玩家列表和规则后下发此消息
		public static OGID_CLIENT_GAME_CONTINUED: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x0f;

		// 心跳消息
		public static OGID_DUXLIVETICK: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x10;
		// 对应的message：AckGameContinued
		// S => C : OGID_ACK | OGID_CLIENT_GAME_CONTINUED
		// /诈和
		public static OGID_CLIENT_ZHAHU: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x13;
		//游戏内发起散桌
		public static OGID_CLIENT_DELETE_TABLE: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x14;
		//游戏内散桌投票
		public static OGID_CLIENT_DELETE_VOTE: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x15;
		//通知消息
		public static OGID_GBMJ_NTC_MESSAGE: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x16;

		//Game服务发送整局游戏结果信息
		public static OGID_RANK_GAME_RESULT: number = 0xE000 + 0x08;
		//Game服务发送聊天消息
		public static OGID_GAME_CHAT: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x17;
		//Game服务玩家断线状态
		// public static OGID_GAME_DISCONNECTED:number = RoomProtocol.OGID_CLIENT_LIST_BASE +　0x18;

		//*******************发牌器****************************************************************
		// 发牌器初始化
		public static GLID_CLIENT_SET_OPEN_DOOR_TILE: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x12;
		// /发牌器抓拍
		public static GLID_CLIENT_SET_WALL_TLE: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x11;

		//换三张 
		public static OGID_SCMJ_HUAN_SAN_ZHANG: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x18;
		//换三张 整理牌结束
		public static OGID_SCMJ_HUAN_SAN_ZHANG_END: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x19;

		//定缺
		public static OGID_SCMJ_DING_QUE: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x1a;
		//玩家状态  0：正常状态，1：听牌 2:胡 3：认输
		public static OGID_SCMJ_GAME_STATUS: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x1b;
		//单次胡
		public static OGID_SCMJ_GAME_HU_RESULT: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x20


		// 全新socket
		//同步游戏
		public static VGID_GAME_SYNCGAMEDATA: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x84;
		//游戏状态广播消息
		public static VGID_GAME_GAMESTATUS: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x80;
		//开始游戏广播消息
		public static VGID_GAME_GAMESTART: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x88;
		//发牌广播消息
		public static VGID_GAME_SENDCARD: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x8C;
		//行牌单播消息
		public static VGID_GAME_OPERATION: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x94;
		//结算广播消息
		public static VGID_GAME_GAMERESULT: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0x94;
		//玩家打漂消息
		public static VGID_USER_DAPIAO: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0xC1;
		//玩家行牌消息
		public static VGID_USER_OPERATION: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0xC0
		//玩家托管消息
		public static VGID_USER_MANAGED: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0xC2;
		//玩家聊天消息
		public static VGID_USER_CHAT: number = RoomProtocol.OGID_CLIENT_LIST_BASE + 0xC4;
	}
}