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
		 * 服务器返回补花吃碰杠胡的操作
		 * */
		public static AckGameSendCards(body:game.AckSendCard):void
		{
			let card:game.CardInfo;
			let dataArray:any[] = [];
			switch(body.Card.Type)
			{
				// case CardsGroupType.CATCH://抓牌
				// 	game.GamePlayData.SetCardsWallIndex("Head",1);
				// 	game.GamePlayData.AddHandCards(body.Card.Sit,body.Card);
				// 	game.GamePlayData.SaveOperationSit(body.Card.Sit);
				// 	//玩家自己抓的牌
				// 	card =  body.Card.Cards[0] as CardInfo;
				// 	card.Sit = body.Card.Sit;
				// 	if(body.Card.Sit==Global.userSit)
				// 	{
				// 		game.GamePlayData.SaveCurrentCard(body.Card.Cards[0].CardID,body.Card.Sit);
				// 	}
				// 	dataArray.push(card);
				// 	GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_ZHUAPAI,true,true,dataArray));
				// 	break;
				// case CardsGroupType.PLAY://正常打牌(非摸打)
				// 	card =  body.Card.Cards[0] as CardInfo;
				// 	card.Sit = body.Card.Sit;

				// 	game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(body.Card.Sit),[card],body.Card.Sit);
				// 	game.GamePlayData.AddCardPool(body.Card.Cards,body.Card.Sit);
				// 	if(body.Card.Sit==Global.userSit)
				// 	{
				// 		game.GamePlayData.SaveCurrentCard(0,-1);
				// 	}
				// 	dataArray.push(card);
				// 	dataArray.push(false);
				// 	GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_SENDCARD,true,true,dataArray));
				// 	break;
				// case CardsGroupType.MOPLAY://正常打牌（摸打）
				// 	card =  body.Card.Cards[0] as game.CardInfo;
				// 	card.Sit = body.Card.Sit;
				// 	//*************容错断线回来  服务器发送该出牌的人的牌是13张   但是又发送该他出牌的消息   故容错***************
				// 	var handcardsNum:number = game.GamePlayData.getHandCards(body.Card.Sit).length;
				// 	if(handcardsNum%3!=1)
				// 	{
				// 		game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(body.Card.Sit),[card],body.Card.Sit);
				// 	}
					
				// 	game.GamePlayData.AddCardPool(body.Card.Cards,body.Card.Sit);
				// 	if(body.Card.Sit==Global.userSit)
				// 	{
				// 		game.GamePlayData.SaveCurrentCard(0,-1);
				// 	}
				// 	dataArray.push(card);
				// 	dataArray.push(true);
				// 	GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_SENDCARD,true,true,dataArray));
				// 	break;
				// case CardsGroupType.CHI://吃牌
				// 	game.GamePlayData.SaveOperationSit(body.Card.Sit);
				// 	card = game.GamePlayData.AddChiPengGangCards(body.Card,body.Card.Sit);
					
				// 	dataArray.push(body.Card.Sit);
				// 	dataArray.push(card);
				// 	GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_CHIPAI,true,true,dataArray));
				// 	break;
				// case CardsGroupType.PENG://碰牌
				// 	game.GamePlayData.SaveOperationSit(body.Card.Sit);
				// 	card = game.GamePlayData.AddChiPengGangCards(body.Card,body.Card.Sit);
					
				// 	dataArray.push(body.Card.Sit);
				// 	dataArray.push(card);
				// 	GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_PENGPAI,true,true,dataArray));
				// 	break;
				// case CardsGroupType.MINGGANG://明杠牌
				// 	game.GamePlayData.SaveOperationSit(body.Card.Sit);
				// 	card = game.GamePlayData.AddChiPengGangCards(body.Card,body.Card.Sit);
					
				// 	dataArray.push(body.Card.Sit);
				// 	dataArray.push(card);
				// 	dataArray.push(body.Card.ObtainCardSit);
				// 	dataArray.push(body.gangCoin);
				// 	GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_MINGGANGPAI,true,true,dataArray));
				// 	break;
				// case CardsGroupType.ANGANG://暗杠牌
				// 	game.GamePlayData.SaveCurrentCard(0,-1);
				// 	game.GamePlayData.SaveOperationSit(body.Card.Sit);
				// 	card = game.GamePlayData.AddChiPengGangCards(body.Card,body.Card.Sit);
					
				// 	dataArray.push(body.Card.Sit);
				// 	dataArray.push(card);
				// 	dataArray.push(body.Card.ObtainCardSit);
				// 	dataArray.push(body.gangCoin);
				// 	GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_ANGANGPAI,true,true,dataArray));
				// 	break;
				// case CardsGroupType.BUGANG://补杠牌  先碰再杠
				// 	game.GamePlayData.SaveOperationSit(body.Card.Sit);
				// 	card = game.GamePlayData.AddChiPengGangCards(body.Card,body.Card.Sit);
				// 	game.GamePlayData.SaveCurrentCard(0,-1);

				// 	dataArray.push(body.Card.Sit);
				// 	dataArray.push(card);
				// 	dataArray.push(body.Card.ObtainCardSit);
				// 	dataArray.push(body.gangCoin);
				// 	GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_BUGANGPAI,true,true,dataArray));
				// 	break;
				// case CardsGroupType.GANGMO://杠牌牌尾摸牌
				// 	game.GamePlayData.SetCardsWallIndex("Tail",1);
				// 	game.GamePlayData.AddHandCards(body.Card.Sit,body.Card);
				// 	card =  body.Card.Cards[0] as game.CardInfo;
				// 	card.Sit = body.Card.Sit;
				// 	if(body.Card.Sit==Global.userSit){
				// 		game.GamePlayData.SaveCurrentCard(card.CardID,card.Sit);
				// 	}
				// 	dataArray.push(card);
				// 	GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_PAIWEIMOPAI,true,true,dataArray));
				// 	break;
				// case CardsGroupType.NO_OPERATION://过    
				// 	game.GamePlayData.M_C_P_G_sit = (game.GamePlayData.M_C_P_G_sit+1)%4;
				// 	GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAME_NO_OPERATION,true,true,body.Card.Sit));
				// 	break;
				
			}
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
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_GAME_USEROPERATION,true,true,dataArray));
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
			game.GamePlayData.SaveResultHandCard(body.playerInfo);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_ALLGAMERESULT,true,true,body));
		}
		
		
		/**
		 *断线续完同步消息 发完玩家列表和规则后下发此消息
			* */
		public static AckPlayerContinued(body:game.AckGameContinued):void
		{
			game.GamePlayData.M_C_P_G_sit = body.CurrentSit;
			if(game.GamePlayData.M_C_P_G_sit==-1){
				game.GamePlayData.M_C_P_G_sit = GameParmes.firstSit;
			}
			GameParmes.TrustNum = body.TrustNum;
			GameParmes.gameDelayRestrictions = body.DelayTimes;
			GameParmes.onBreakPlayerState = body.PlayerState;//玩家状态
			GameParmes.hu_player = body.hu_player;
			GameParmes.onBreakPlayerHuCards = [body.hupai0,body.hupai1,body.hupai2,body.hupai3];
			let p = Global.getUserPosition(Global.userSit)
			if(GameParmes.onBreakPlayerHuCards[p].length > 0){
				GameParmes.isHu = true;
			}
			for(let n:number = 0;n < GameParmes.onBreakPlayerHuCards.length;n++){
				if(GameParmes.onBreakPlayerHuCards[n].length > 0){
					GameParmes.isGameFlower = false;
					break ;
				}
			}
			GameParmes.nHSZComplete = body.huan_san_zhang;//0:没有换  1:已经换了
			GameParmes.arrDQState = body.dingque_color;//-1没有定缺
			game.GamePlayData.firstDice = body.FirstDice;
			game.GamePlayData.secondDice = body.SecondDice;
			Global.strGameGUID = body.game_guid;
			GameParmes.gameStage = body.Stage;
			var is_Card:game.CardInfo = new game.CardInfo();
			if(GameParmes.gameStage!=GameStageType.GAMEOVER){
				game.GamePlayData.CardsWall_Head_Index = body.BeginCardindex;
				game.GamePlayData.CardsWall_Tail_Index = body.EndCardindex;
				if(body.CurrentCard){
					var card:CardInfo = game.GamePlayData.SaveCurrentCard(body.CurrentCard.Cards[0].CardID,body.CurrentCard.Sit);
				}
				var i:number=0;
				//添加牌池
				for(i=0;i<body.CardPond.length;i++){
					//校验胡牌次数
					for(var n:number=0;n<GameParmes.onBreakPlayerHuCards[i].length;n++){
						for(var m:number=0;m<body.CardPond[i].Cards.length;m++){
							if(body.CardPond[i].Cards[m].CardID==GameParmes.onBreakPlayerHuCards[i][n]){
								body.CardPond[i].Cards.splice(m,1);
								break;
							}
						}
					}
					game.GamePlayData.AddCardPool(body.CardPond[i].Cards,i);
				}
				//手牌数据
				for(i=0;i<body.HandCards.length;i++){
					var playerHandCards = body.HandCards[i];
					game.GamePlayData.SetHandCardsValue(playerHandCards.Cards,-1,i);
					if(body.IsMoPai&&i==body.CurrentSit){
						is_Card.Sit = i;
						for(var x=0;x<playerHandCards.Cards.length;x++){
							var cardsGroup = playerHandCards.Cards[x];
							if(cardsGroup.Type==CardsGroupType.HANDCARDS){
								is_Card.CardID = cardsGroup.Cards[cardsGroup.Cards.length-1].CardID;
								game.GamePlayData.SaveCurrentCard(cardsGroup.Cards[cardsGroup.Cards.length-1].CardID,cardsGroup.Cards[cardsGroup.Cards.length-1].Sit);
								break;
							}
						}
					}
					
				}
				game.GamePlayData.SetHandCardsSorting(Global.userSit);
			}
			
			//处理玩家定缺
			for(i=0;i<body.dingque_color.length;i++){
				game.GameUserList.getPlayerformSit(i).CardID = body.dingque_color[i];
			}
			if(body.IsMoPai){
				GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.ACK_GAMECONTINUED,true,true,[body.CallCards,is_Card]));
			}else{
				GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.ACK_GAMECONTINUED,true,true,[body.CallCards,null]));
			}
			
		}
		
		//川麻换三张
		public static AckHuanSanZhang(body:game.AckHuanSanZhang):void
		{
			// var cards:Array<CardInfo> = [];
			// var count:number = body.req_huan.length;
			// for(var i:number = 0;i < count;i++){
			// 	var card:CardInfo = new CardInfo();
			// 	card.CardID = body.req_huan[i].CardID;
			// 	card.Sit = Global.userSit;
			// 	cards.push(card);
			// }
			// GamePlayData.HSZGetCards = body.huan_san_zhang;
			// game.GamePlayData.ClearHandCards(game.GamePlayData.getHandCards(Global.userSit),cards,Global.userSit);
			// game.GamePlayData.AddHuanSanZhangCards(game.GamePlayData.getHandCards(Global.userSit),body.huan_san_zhang);
			// GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_HSZ,true,true,body));
		}
		//定缺
		public static AckDingQue(body:game.AckDingQue):void
		{
			for(var i:number=0;i<body.dingque.length;i++){
				game.GameUserList.getPlayerformSit(i).CardID = body.dingque[i];
			}
			GDGame.Msg.ins.dispatchEvent(new egret.Event(GameMessage.ACK_USER_DINGQUE));
		}
	}
}