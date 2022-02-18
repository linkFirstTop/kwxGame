module game {
	export class SoundModel {
		public constructor() {
		}
		public static HU:string = "hu_mp3";
		public static ZIMO:string = "zimo_mp3";
		public static PENG:string = "peng_mp3";
		public static GANG:string = "gang_mp3";
		public static WIN:string = "win_mp3";
		public static LOSE:string = "lose_mp3";
		public static CPGEFFECT:string = "cpgEffect_mp3";
		public static CHU:string = "sendCard_mp3";
		public static ZHUA:string = "zhuapai_mp3";
		public static TIME:string = "time_mp3";
		public static playCardSound(card:CardInfo):void{
			let index:number = GameParmes.getCardID(card);
			if(index >= 1 && index <= 9){
				sound.SoundManager.getInstance().playEffect(index+"w_mp3");
			}
			if(index >= 10 && index <= 18){
				sound.SoundManager.getInstance().playEffect((index-9)+"t_mp3");
			}
			if(index >= 19 && index <= 27){
				sound.SoundManager.getInstance().playEffect((index-18)+"b_mp3");
			}
		}
		public static playEffect(str:string):void{
			sound.SoundManager.getInstance().playEffect(str);
		}
		
	}
}