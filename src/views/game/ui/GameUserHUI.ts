module game {
	export class GameUserHUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}

		private lbName:eui.Label;
		private lbCoin:eui.Label;
		private imgHead:eui.Image;
		private imgDQ:eui.Image;
		private imgZhuang:eui.Image;
		private nCoin:number = 0;
		//private lbCoinWinAnim:eui.BitmapLabel;
		//private lbCoinLoseAnim:eui.BitmapLabel;
		private anim:dragonBones.EgretArmatureDisplay;
		private nSit:number = -1;
		protected childrenCreated():void
		{
			super.childrenCreated();
		}
		public initUser():void{
			this.imgDQ.source = "";
			this.imgHead.source = "";
			this.imgZhuang.source = "";
		}
		public setUserInfo(user:game.GameUserInfo):void{
			let strName:string = "";
			if(user.userShowName == ""){
				strName = user.userName;
			}else{
				strName = user.userShowName;
			}
			this.lbName.text = GameUtils.ReplaceChar(GameUtils.getShowName(strName),9,3);

	
			this.lbCoin.text = ChipUtils.formatCoin(user.userCoin,true);
			this.nCoin = user.userCoin;
			this.nSit = user.userSit;
			this.imgZhuang.source = "";
			
			if(this.nSit == 0){
				this.imgZhuang.source = "gameIcon_zhuang_"+Global.language;
			}else{
				this.imgZhuang.source = "";
			}
			if(this.nCoin <= 0){
				this.nCoin = 0;
				this.dispatchEvent(new egret.Event("UserLoseGame",true,true,this.nSit));
			}
			if(Global.userName == user.userName){
				this.imgHead.source = Global.commURL + "head/iconHead"+Global.userHead+".png";
			}else{
				this.imgHead.source = Global.commURL + "head/iconHead"+Global.getHeadByName(user.userName)+".png";
			}
		}
		public showResultCoin(coin:number):void{
			this.lbCoin.text = ChipUtils.formatCoin(coin,true);
			this.nCoin = coin;
		}
		public showCurrentAnim(b:boolean):void{
			if(b){
				if(this.anim == null){
					this.anim = comm.DragonAnim.ins.getAnimByName("txhhxd");
					this.addChild(this.anim);
					this.anim.x = 174;
					this.anim.y = 80;
				}
				this.anim.visible = true;
				this.anim.animation.play("txhhxd",0);
			}else{
				if(this.anim){
					this.anim.visible = false;
					this.anim.animation.stop();
				}
			}
		}
		public updataCoin(coin:number):void{
			this.nCoin += coin;
			if(this.nCoin <= 0){
				this.nCoin = 0;
				this.dispatchEvent(new egret.Event("UserLoseGame",true,true,this.nSit));
			}
			this.lbCoin.text = ChipUtils.formatCoin(this.nCoin,true);
			
			
		}
		
		public setUserDQ(type:number,str:string):void{
			this.imgDQ.source = "";
			if(type == 0){//万
				this.imgDQ.source = "gameIcon_wan_"+Global.language;
			}else if(type == 1){//条
				this.imgDQ.source = "gameIcon_tiao_"+Global.language;
			}else if(type == 2){//饼
				this.imgDQ.source = "gameIcon_tong_"+Global.language;
			}
			if(str == "left"){
				this.imgDQ.x = 15;
			}else{
				this.imgDQ.x = 95;
			}
		}
	}
}