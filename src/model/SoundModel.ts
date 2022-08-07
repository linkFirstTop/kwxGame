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
		public static CPGEFFECT:string = "cpgEffecc";
		public static CHU:string = "sendCard_mp3";
		public static ZHUA:string = "zhuapai_mp3";
		public static TIME:string = "time_mp3";
		public static huPaiOrDianPao = "HuOrPao_mp3";
		public static xiPai = "xiPai_mp3";
		public static tuoGuan = "tuoGuan_mp3";
		public static dingZhuang = "dingZhuang_mp3";
		public static ticWaring = "ticWarning_mp3";
		public static tianHu = "tianhu_mp3";
		public static StartMatch = "startMatch_mp3";
		public static shouGlod = "shouGlod_mp3";
		public static fanOrLiang = "fanOrLiang_mp3";
		public static LiPai = "liPai_mp3";


		public static paiSoundName = {
			0  : "1w_mp3", //1万				
			1  : "2w_mp3",//2万				
			2  : "3w_mp3",//3万				
			3  : "4w_mp3",//4万				
			4  : "5w_mp3",//5万				
			5  : "6w_mp3",//6万				
			6  : "7w_mp3",//7万				
			7  : "8w_mp3",//8万				
			8  : "9w_mp3",//9万				
			9  : "1t_mp3",//1条
			10 : "2t_mp3",//2条
			11 : "3t_mp3",//3条
			12 : "4t_mp3",//4条
			13 : "5t_mp3",//5条
			14 : "6t_mp3",//6条
			15 : "7t_mp3",//7条
			16 : "8t_mp3",//8条
			17 : "9t_mp3",//9条
			18 : "1b_mp3",//1饼
			19 : "2b_mp3",//2饼
			20 : "3b_mp3",//3饼
			21 : "4b_mp3",//4饼
			22 : "5b_mp3",//5饼
			23 : "6b_mp3",//6饼
			24 : "7b_mp3", //7饼
			25 : "8b_mp3", //8饼
			26 : "9b_mp3",// 9饼
			27 : "dongfeng_mp3", //东风		
			28 : "nanfeng_mp3", //南风		
			29 : "xifeng_mp3", //西风		
			30 : "beifeng_mp3", //北风
			31 : "hongzhong_mp3", //红中		
			32 : "facai_mp3", //绿发		
			33 : "blank_mp3",//白板
		}

		public static playCardSound(card:CardInfo):void{
			let index:number = card.CardID //GameParmes.getCardID(card);
			// sound.SoundManager.getInstance().playEffect(`p${index}_mp3`);
		// 	if(index >= 0 && index <= 8){
		// 		sound.SoundManager.getInstance().playEffect(`${index+1}w_mp3`);
		// 	}
		// 	if(index >= 9 && index <= 17){
		// 		sound.SoundManager.getInstance().playEffect(`${index-8}t_mp3`);
		// 	}
		// 	if(index >= 18 && index <= 26){
		// 		sound.SoundManager.getInstance().playEffect(`${index-17}b_mp3`);
		// 	}
		 }
		public static playEffect(str:string):void{
			sound.SoundManager.getInstance().playEffect(str);
		}
		
	}
}