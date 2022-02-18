module game {
	export class CardsGroupType {
		public constructor() {
		}
		/**
		 *抓牌
			* **/
		public static  CATCH:number = 1;
		/**
		 *正常打牌（非摸打）
			* **/
		public static  PLAY:number = 2;
		/**
		 *理牌补花
			* **/
		public static  BUHUA:number = 3;
		/**
		 *吃牌
			* **/
		public static  CHI:number = 4;
		/**
		 *碰牌
			* **/
		public static  PENG:number = 5;
		/**
		 *明杠牌
			* **/
		public static  MINGGANG:number = 6;
		/**
		 *暗杠牌
			* **/
		public static  ANGANG:number = 7;
		/**
		 *胡牌
			* **/
		public static  HU:number = 8;
		/**
		 *摸牌补花
			* **/
		public static  BUHUAMO:number = 9;
		/**
		 *摸牌杠牌
			* **/
		public static  GANGMO:number = 10;
		/** 
		 *过
			* **/
		public static  NO_OPERATION:number = 11;
		/**
		 *手牌
			* **/
		public static  HANDCARDS:number = 12;
		
		/**
		 *补杠
			* **/
		public static  BUGANG:number = 13;
		/**
		 *摸打
			* **/
		public static  MOPLAY:number = 14;
		
		/**
		 *听
		* **/
		public static CALL:number = 15;
		/*天胡*/
		public static TIHU:number = 16;
		/**
		 * 客户端统一杠的现实
		 * */
		public static GANG:number = 17;
	}
}