module GDGame {
	export class Msg extends egret.EventDispatcher {

		private static _ins:GDGame.Msg;

		public constructor() {
			super();
		}
		public static get ins():GDGame.Msg{
			if(GDGame.Msg._ins==null){
				GDGame.Msg._ins = new GDGame.Msg();
			}
			return GDGame.Msg._ins;
		}
	}
}