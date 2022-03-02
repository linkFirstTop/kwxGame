module game {
	export class PositionType {
		public constructor() {
		}
		/**
		 *东
			* **/
		public static  EAST:number = 0;
		/**
		 * 南
		 * **/
		public static  SOUTH:number = 1;
		/**
		 * 西
		 * **/
		public static  WEST:number = 2;
		/**
		 * 北
		 * **/
		public static  NORTH:number = 3;
		/**
		 * 无效座位号
		 * **/
		public static  NOTHING:number = -1;
	}
}