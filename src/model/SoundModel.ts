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
			if(index >= 0 && index <= 8){
				sound.SoundManager.getInstance().playEffect(`${index+1}w_mp3`);
			}
			if(index >= 9 && index <= 17){
				sound.SoundManager.getInstance().playEffect(`${index-8}t_mp3`);
			}
			if(index >= 18 && index <= 26){
				sound.SoundManager.getInstance().playEffect(`${index-17}b_mp3`);
			}
		}
		public static playEffect(str:string):void{
			sound.SoundManager.getInstance().playEffect(str);
		}
		
	}
}