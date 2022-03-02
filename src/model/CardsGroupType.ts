module game {
	export class CardsGroupType {
		public constructor() {
		}
		/**
		 *抓牌
			* **/
		public static CATCH: number = 1;
		/**
		 *正常打牌（非摸打）
			* **/
		public static PLAY: number = 2;
		/**
		 *理牌补花
			* **/
		public static BUHUA: number = 3;
		/**
		 *吃牌
			* **/
		public static CHI: number = 4;
		/**
		 *碰牌
			* **/
		public static PENG: number = 5;
		/**
		 *明杠牌
			* **/
		public static MINGGANG: number = 6;
		/**
		 *暗杠牌
			* **/
		public static ANGANG: number = 7;
		/**
		 *胡牌
			* **/
		public static HU: number = 8;
		/**
		 *摸牌补花
			* **/
		public static BUHUAMO: number = 9;
		/**
		 *摸牌杠牌
			* **/
		public static GANGMO: number = 10;
		/** 
		 *过
			* **/
		public static NO_OPERATION: number = 11;
		/**
		 *手牌
			* **/
		public static HANDCARDS: number = 12;

		/**
		 *补杠
			* **/
		public static BUGANG: number = 13;
		/**
		 *摸打
			* **/
		public static MOPLAY: number = 14;

		/**
		 *听
		* **/
		public static CALL: number = 15;
		/*天胡*/
		public static TIHU: number = 16;
		/**
		 * 客户端统一杠的现实
		 * */
		public static GANG: number = 17;

		public static MJ_OperationType = {
				MJ_OT_DRAW : 0,	//摸牌
				MJ_OT_H_DISCARD : 1,	//手切，打出的是手中的牌，吃碰之后都是手切
				MJ_OT_D_DISCARD : 2,	//摸切，打出的是刚摸到的牌
				MJ_OT_L_CHOW : 3,	//左吃，吃的牌是最小点, 例如45吃3
				MJ_OT_M_CHOW : 4,	//中吃，吃的牌是中间点，例如24吃3
				MJ_OT_R_CHOW : 5,	//右吃，吃的牌是最大点，例如12吃3
				MJ_OT_PONG : 6,	//碰
				MJ_OT_C_KONG : 7,	//暗杠
				MJ_OT_E_KONG : 8,	//直杠
				MJ_OT_P_KONG : 9,	//补杠
				MJ_OT_TING : 10,	//听
				MJ_OT_WIN : 11,	//和
				MJ_OT_PASS : 12,	//过
		}


		public static FanType = {

			//32	三龙七对		由7个对子组成的胡牌，且手上有3组4张一样的牌，不能杠或碰出，不计七对、双龙七对、四归一
			FAN_3LONG7DUI: 0,
			//32	双龙七对		由7个对子组成的胡牌，且手上有2组4张一样的牌，不能杠或碰出，不计七对、四归一
			FAN_2LONG7DUI: 1,
			//16	三元七对		七对中包含3个中发白的对子，不计七对、四归一
			FAN_3YUAN7DUI: 2,
			//8		龙七对		由7个对子组成的胡牌，且手上有1组4张一样的牌，不能杠或碰出，不计七对、四归一
			FAN_LONG7DUI: 3,
			//8		大三元		包含有中发白3副刻子（或杠）的胡牌
			FAN_DA3YUAN: 4,
			//4		七对			由7个对子组成的胡牌
			FAN_7DUI: 5,
			//4		暗四归一		有一个暗刻，并胡该刻子的第4张
			FAN_AN4GUI1: 6,
			//4		小三元		手中有中发白其中两个刻子（或杠），另外一个为对子
			FAN_XIAO3YUAN: 7,
			//4		清一色		全部由条或筒中的某一种花色组成的胡牌
			FAN_QING1SE: 8,
			//4		手抓一		胡牌时其他牌都被碰牌、杠牌，手牌中只剩下一张牌单吊的胡牌
			FAN_4ZHUA1: 9,
			//2		明四归一		有一个明刻，并胡该刻子的第四张牌
			FAN_MING4GUI1: 10,
			//2		卡五星		卡五筒或五条胡牌（只要能做出来算卡的都算）
			FAN_KA5XING: 11,
			//2		碰碰胡		由4个刻子（或杠牌）及将牌组成的胡牌
			FAN_PENGPENGHU: 12,
			//2		海底炮		摸到牌墙中的最后一1张牌，打出后点炮胡牌
			FAN_HAIDIPAO: 13,
			//2		海底捞		摸到牌墙中的最后1张牌胡牌
			FAN_HAIDILAO: 14,
			//2		暗杠			收取其他两个玩家每人2倍底分
			FAN_ANGANG: 15,
			//2		点杠			只收取放杠者2倍底分
			FAN_DIANGANG: 16,
			//2		杠上开花		杠牌后，补张自摸
			FAN_GANGSHANGKAIHUA: 17,
			//2		杠上炮		杠牌后，打出的牌其他玩家可以胡
			FAN_GANGSHANGPAO: 18,
			//2		抢杠胡		玩家听牌时，其他玩家补杠的牌正好是该玩家能胡的牌
			FAN_QIANGGANGHU: 19,
			//2		亮倒			玩家亮倒时胡牌
			FAN_LIANGDAO: 20,
			//1		补杠			收取每位玩家1倍底分
			FAN_BUGANG: 21,
			//1		自摸			玩家自己抓牌胡牌，收取每个玩家1倍底分
			FAN_ZIMO: 22,
			//1		屁胡			由4个刻字或顺子组成的胡牌
			FAN_PIHU: 23,
		}

		public static FanTypeString = {

			//32 FAN_3LONG7DUI			由7个对子组成的胡牌，且手上有3组4张一样的牌，不能杠或碰出，不计七对、双龙七对、四归一
			0: "三龙七对",
			//32 FAN_2LONG7DUI			由7个对子组成的胡牌，且手上有2组4张一样的牌，不能杠或碰出，不计七对、四归一
			1: "双龙七对",
			//16		 FAN_3YUAN7DUI	七对中包含3个中发白的对子，不计七对、四归一
			2: "三元七对",
			//8		 FAN_LONG7DUI		由7个对子组成的胡牌，且手上有1组4张一样的牌，不能杠或碰出，不计七对、四归一
			3: "龙七对",
			//8 FAN_DA3YUAN				包含有中发白3副刻子（或杠）的胡牌
			4: "大三元",
			//4			FAN_7DUI		由7个对子组成的胡牌
			5: "七对",
			//4		 FAN_AN4GUI1		有一个暗刻，并胡该刻子的第4张
			6: "暗四归一",
			//4		 FAN_XIAO3YUAN		手中有中发白其中两个刻子（或杠），另外一个为对子
			7: "小三元",
			//4		 FAN_QING1SE		全部由条或筒中的某一种花色组成的胡牌
			8: "清一色",
			//4		 FAN_4ZHUA1		胡牌时其他牌都被碰牌、杠牌，手牌中只剩下一张牌单吊的胡牌
			9: "手抓一",
			//2	FAN_MING4GUI1			有一个明刻，并胡该刻子的第四张牌
			10: "明四归一",
			//2			 FAN_KA5XING	卡五筒或五条胡牌（只要能做出来算卡的都算）
			11: "卡五星",
			//2		 FAN_PENGPENGHU		由4个刻子（或杠牌）及将牌组成的胡牌
			12: "碰碰胡",
			//2	FAN_HAIDIPAO			摸到牌墙中的最后一1张牌，打出后点炮胡牌
			13: "海底炮",
			//2			 FAN_HAIDILAO	摸到牌墙中的最后1张牌胡牌
			14: "海底捞",
			//2		 FAN_ANGANG			收取其他两个玩家每人2倍底分
			15: "暗杠",
			//2			 FAN_DIANGANG		只收取放杠者2倍底分
			16: "点杠",
			//2		 FAN_GANGSHANGKAIHUA		杠牌后，补张自摸
			17: "杠上开花",
			//2		 FAN_GANGSHANGPAO		杠牌后，打出的牌其他玩家可以胡
			18: "杠上炮",
			//2			 FAN_QIANGGANGHU	玩家听牌时，其他玩家补杠的牌正好是该玩家能胡的牌
			19: "抢杠胡",
			//2		FAN_LIANGDAO			玩家亮倒时胡牌
			20: "亮倒",
			//1		 FAN_BUGANG			收取每位玩家1倍底分
			21: "补杠",
			//1		 : "FAN_ZIMO"			玩家自己抓牌胡牌，收取每个玩家1倍底分
			22: "自摸",
			//1		 FAN_PIHU			由4个刻字或顺子组成的胡牌
			23: "屁胡",
		}
	}
}