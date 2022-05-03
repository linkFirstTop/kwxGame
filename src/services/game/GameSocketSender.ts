module game {
	export class GameSocketSender {
		public constructor() {
		}
		//心跳
		public HEART_BEAT():void
		{
			let data = new game.DuxLiveTick();
			data.time = 1;
			let body = game.DuxLiveTick.encode(data).finish();
			game.GameWebSocket.instance().SendMeseage(GameProtocol.REQ | GameProtocol.OGID_DUXLIVETICK,body)
		}
			
		//请求进入游戏服务
		public ReqEnterGameFun():void
		{
			Global.log("请求进入游戏服务");
			let data = new game.ReqEnterGame();
			data.GameID = Global.myPos.tableGuid;
			data.UserName = Global.userName;
			data.ticket = Global.gameTicket;
			let body = game.ReqEnterGame.encode(data).finish();
			game.GameWebSocket.instance().SendMeseage(GameProtocol.REQ | GameProtocol.OGID_CLIENT_ENTER_GAME,body);
		}
		//请求准备游戏
		public  ReqReadyGameFun():void
		{
			let data = new game.ReqReadyGame();
			data.GameID = Global.myPos.tableGuid;
			data.UserName = Global.userName;
			let body = game.ReqReadyGame.encode(data).finish();
			Global.log("请求准备游戏");
			game.GameWebSocket.instance().SendMeseage(GameProtocol.REQ | GameProtocol.OGID_CLIENT_READY_GAME,body);
		}
		
		//请求游戏服务理牌结束
		public ReqHandCardsOverGameFun():void
		{
			let data = new game.ReqHandCardsOver();
			data.Sit = Global.userSit;
			let body = game.ReqHandCardsOver.encode(data).finish();
			game.GameWebSocket.instance().SendMeseage(GameProtocol.REQ | GameProtocol.OGID_CLIENT_HANDCARDS_OVER,body);
		}
		
		//请求游戏的操作
		public ReqSendCardsGameFun(cardsGroup:CardsGroupInfo):void
		{
			var cardsArray:any[] = [];
			var ObtainCardSit:number=0;

			var ObtainCard;
			if(cardsGroup.obtainCard.CardID!=0)
			{
				ObtainCard = new game.CardInfo();
				ObtainCard.CardID = cardsGroup.obtainCard.CardID;
				ObtainCardSit = cardsGroup.obtainCard.Sit;
			}

			for(var i:number=0;i<cardsGroup.cards.length;i++)
			{
				var cardInfobody = new game.CardInfo();
				cardInfobody.CardID = cardsGroup.cards[i].CardID;
				cardsArray.push(cardInfobody);
			}

			const cardsGroupbody = new game.CardsGroup();
			cardsGroupbody.Sit = Global.userSit;
			cardsGroupbody.Type = cardsGroup.CardsGroupType;
			cardsGroupbody.Cards = cardsArray;
			cardsGroupbody.ObtainCard = ObtainCard;
			cardsGroupbody.ObtainCardSit = ObtainCardSit;

			let data = new game.ReqSendCard();
			data.Card = cardsGroupbody;
			let body = game.ReqSendCard.encode(data).finish();
			Global.log("请求游戏的操作");
			game.GameWebSocket.instance().SendMeseage(GameProtocol.REQ | GameProtocol.OGID_CLIENT_SEND_CARD,body);
		}

		//请求延时
		public ReqGameDelayFun():void
		{
			let data = new game.ReqGameDelay();
			data.Sit = Global.userSit;
			let body = game.ReqGameDelay.encode(data).finish();
			Global.log("请求延时:"+body);
			game.GameWebSocket.instance().SendMeseage(GameProtocol.REQ | GameProtocol.OGID_CLIENT_GAME_DELAY,body);
		}
		
		//发送聊天消息
		public ReqChat(msg:string,type:number=0):void
		{  
			let data = new game.OGNtcGameChatMessage();
			data.sit = Global.userSit;
			data.type = type;
			data.msg = msg;
			let body = game.OGNtcGameChatMessage.encode(data).finish();
			game.GameWebSocket.instance().SendMeseage(GameProtocol.REQ | GameProtocol.OGID_GAME_CHAT,body);
		}
		//发牌器抓拍
		public ReqZhuaPai(id:number):void
		{
			console.log(id,'---id');
			let data = new room.MagicTilesReq();
			data.tile = id;
			let body = room.MagicTilesReq.encode(data).finish();
			room.RoomWebSocket.instance().SendMeseage(GameProtocol.REQ | GameProtocol.GLID_CLIENT_SET_WALL_TLE,body);
		}
		//川麻消息
    	//换三张
		public ReqHuanSanZhang(cards:any[]):void
		{
			var arr:any[] = [];

			for(var i:number=0;i<cards.length;i++){
				var cards_body = new game.CardInfo();
				cards_body.CardID = cards[i].CardID;
				arr.push(cards_body);
			}
			let data = new game.ReqHuanSanZhang();
			data.seat = Global.userSit;
			data.huan_san_zhang = arr;
			let body = game.ReqHuanSanZhang.encode(data).finish();
			game.GameWebSocket.instance().SendMeseage(GameProtocol.REQ | GameProtocol.OGID_SCMJ_HUAN_SAN_ZHANG,body);
		}
		//换三张结束
		public ReqHuanSanZhangEnd():void
		{
			let data = new game.ReqHuanSanZhangEnd();
			data.username = Global.userName;
			let body = game.ReqHuanSanZhangEnd.encode(data).finish();
			game.GameWebSocket.instance().SendMeseage(GameProtocol.REQ | GameProtocol.OGID_SCMJ_HUAN_SAN_ZHANG_END,body);
		}
		//定缺
		public ReqDingQue(color:number):void
		{
			let data = new game.ReqDingQue();
			data.seat = Global.userSit;
			data.dingque = color;
			let body = game.ReqDingQue.encode(data).finish();
			game.GameWebSocket.instance().SendMeseage(GameProtocol.REQ | GameProtocol.OGID_SCMJ_DING_QUE,body);
		}
	}
}