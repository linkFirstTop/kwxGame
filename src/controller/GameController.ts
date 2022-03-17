module game {
	export class GameController {
		/**
		 * 接收服务器下发的游戏规则消息
		 * */
		public static AckGameRuleFun(body:any):void
		{
			var rule = body;
			GameParmes.firstSit						 	  =  rule.FirstSit ;// 第一个游戏的人
			GameParmes.gameType 					  =  rule.GameType;// 游戏类型  0：打一副牌结束  1：打一圈牌结束  2：打4圈（一局）
			GameParmes.gameNextChiPengGangTime 				  =  rule.Is_Next_ChiPengGangTime;// 下家吃碰杠考虑时间
			GameParmes.gameNotNextChiPengGangPengTime 			  =  rule.Not_Next_ChiPengGangTime ;//非下家吃碰杠考虑时间
			GameParmes.gameHuTime 				  =  rule.HuTime;//胡牌考虑时间
			GameParmes.gamePlayTime 			  =  rule.PlayTime ;//游戏中打牌时长
			GameParmes.gameDelayTime 			  =  rule.DelayTime;//延时时长
			GameParmes.gameDelayRestrictions =  rule.DelayRestrictions ;//延时限制（几次）
			GameParmes.gameTrustRestrictions  =  rule.TrustRestrictions;//托管次数
			GameParmes.gameBureau 				  =  rule.Bureau ;//当前第几局
			GameParmes.gameRing                      =  rule.Ring ;//当前第几圈
			GameParmes.gamePair 					      =  rule.PAIR;//当前第几副
			GameParmes.gameFirstSendTime      =  rule.FirstSendTime;//第一次出牌时间
			GameParmes.chiPengGangSurplusTime = rule.ChiPengGangSurplusTime;
			GameParmes.ArrangementCardsOverTime = rule.ArrangementCardsOverTime;
			GameParmes.GoOnGaneTime = rule.GoOnGaneTime;
			GameParmes.TrustNum = GameParmes.gameTrustRestrictions;
			GameParmes.gameDelayRestrictions = GameParmes.gameDelayRestrictions;
			GameParmes.hszTime =	rule.HuanSanzhang;
			GameParmes.dqTime =	rule.dingque;
		}
		/**
		 * 接收服务器发送的色子和手牌
		 * */
		public static AckGameDiceAndCards(body:any):void
		{
			// game.GamePlayData.SaveDice(body.FirstDice,body.SecondDice,body.FirstSit,body.SecondSit,body.FirstCardsIndexes);
			// game.GamePlayData.SetCardsWallIndex("Head",53);
			// game.GamePlayData.SaveHandCarsd(body.HandCards);
			// game.GamePlayData.SetHandCardsSorting(Global.userSit);//理牌
			// game.GamePlayData.HSZRecommend = body.huan_san_zhang;
			// GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAMEDICEANDCARDS));
		}
		/**
		 * 客户端通知服务器打牌
		 * 0  cardID
		 * */
		public static ReqUserSendCard(card:CardInfo=null):void{
			
			// var cardsGroup:CardsGroupInfo = new CardsGroupInfo();
			// cardsGroup.cardsit = Global.userSit;
			// cardsGroup.CardsGroupType = CardsGroupType.PLAY;
			/*if(card.CardID==GamePlayData.Current_Card.CardID){
				cardsGroup.CardsGroupType = CardsGroupType.MOPLAY;
			}*/
			// cardsGroup.cards.push(card);
			// game.GameWebSocket.instance().gameSender.ReqSendCardsGameFun(cardsGroup);
		}
		/** 
		 * @param e
		 * 客户端通知服务器听牌
		 */		
		public static ReqCallPai(c:CardInfo):void{
			var cardsGroup:CardsGroupInfo = new CardsGroupInfo();
			cardsGroup.cardsit = Global.userSit;
			cardsGroup.CardsGroupType = CardsGroupType.CALL;
			var card:CardInfo = c;
			cardsGroup.cards.push(card);
			game.GameWebSocket.instance().gameSender.ReqSendCardsGameFun(cardsGroup);
		}
	
				

		/**
		 * 服务器通知客户端能够吃碰杠胡的显示权限 AckUserOperation
		 * */
		public static  AckGameUserOperation(body:game.AckUserOperation):void
		{
			// game.GamePlayData.SaveChiPengGangHu(body);
			var dataArray:any[] = [];
			dataArray.push(body.Chi);
			dataArray.push(body.Peng);
			dataArray.push(body.Gang);
			dataArray.push(body.Hu);
			dataArray.push(body.Call);
			console.log("chi="+body.Chi,"peng="+body.Peng,"gang="+body.Gang,"hu="+body.Hu,"call="+body.Call);
			//GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAME_USEROPERATION,true,true,dataArray));
		}
		/**
		 * 服务器通知客户端单次胡牌
		 * */
		public static AckGameOnResult(body:game.HuResultAck):void{
			console.log("胡牌玩家长度:"+body.hulist.length);
			GameParmes.isGameFlower = false;
			for(let i:number = 0;i < body.hulist.length;i++){
				if(body.hulist[i].seat == Global.userSit){//自己胡做下标记
					GameParmes.isHu = true;
					break;
				}
			}
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAMERESULT,true,true,body));
		}
		/**
		 * 服务器通知客户端结果消息
		 * */
		public static AckGameResult(body:game.AckGameResult):void{
			// game.GamePlayData.SaveResultHandCard(body.playerInfo);
			// GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_ALLGAMERESULT,true,true,body));
		}
		
		
		//定缺
		public static AckDingQue(body:game.AckDingQue):void
		{
			for(var i:number=0;i<body.dingque.length;i++){
				game.GameUserList.getPlayerformSit(i).CardID = body.dingque[i];
			}
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_DINGQUE));
		}

		/**
		 * 请求进行下一轮游戏
		 */
		public static onRequeseNextGame(){
			let roomID = Global.myPos.roomID
			room.RoomWebSocket.instance().roomSender.REQ_ROOMENTERROOM(roomID);
		}
	}
}