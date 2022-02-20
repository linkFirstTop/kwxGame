module game {
	export class GameStageType {
		public constructor() {
		}
		/**
		 * 游戏开始状态
		 * **/
		public static STARGAME: number = 0;
		/**
		 * 游戏打漂状态
		 * **/
		public static DAPIAO: number = 1;
		/**
		 * 游戏打牌阶段
		 * **/
		public static START: number = 2;
		/**
		 * 游戏发牌阶段
		 * **/
		public static DEALCARD: number = 3;
		/**
		 * 游戏打牌阶段
		 * **/
		public static PLAYING: number = 4;
		/**
		 * 游戏换结算状态
		 * **/
		public static GAMEOVER: number = 5;
		// /**
		//  * 游戏定缺状态
		//  * **/
		// public static DINGQUE: number = 7;
	}
}