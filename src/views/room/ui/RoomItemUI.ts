module room {
	export class RoomItemUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}
		private group:eui.Group;
		private lbBase:eui.Label;
		private lbEnter:eui.Label;
		private nRoomID:number = 0;
		private imgItem:eui.Image;
		private info:any;
		private nLoadNum:number = 0;
		private bonesJson:any;
		private textureJson:any;
		private texture:any;
		protected childrenCreated():void
		{
			super.childrenCreated();
			
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
			this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this);
			this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
			this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchCancel, this);
		}
		
		private touchCancel(event: egret.TouchEvent):void{
			this.group.scaleX = 1;
			this.group.scaleY = 1;
		}

		private touchBegin(event: egret.TouchEvent):void{
			sound.SoundManager.getInstance().playEffect("gamebuttontap_mp3");
			this.group.scaleX = 0.9;
			this.group.scaleY = 0.9;
			
		}
		private touchEnd():void{
			this.group.scaleX = 1;
			this.group.scaleY = 1;
			this.dispatchEvent(new egret.Event("OnItemClick",true,true,this.nRoomID));
		}
		public setItem(data:any):void{
			console.log('setItem',data);
			this.info = data;
			this.lbBase.text = Global.dic["底注"]+" " + ChipUtils.formatCoin(data.basic_bet,true);
			this.lbEnter.text = Global.dic["准入"]+" " + ChipUtils.formatCoin(data.entry_min,true);
			this.nRoomID = data.roomID;
			if(this.nRoomID > 3){
				this.imgItem.source = "roomItembg2_png";
			}else{
				this.imgItem.source = "roomItembg1_png";
			}

			try {
				RES.getResByUrl("resource/assets/language/"+Global.language+"/roomitem/roomItem"+this.nRoomID+"_ske.json",function(text:any){
					if(text){
						this.bonesJson = text;
						this.getAnimComplete();
					}
					
				},this,RES.ResourceItem.TYPE_JSON);
				RES.getResByUrl("resource/assets/language/"+Global.language+"/roomitem/roomItem"+this.nRoomID+"_tex.json",function(text:any){
					if(text){
						this.textureJson = text;
						this.getAnimComplete();
					}
					
				},this,RES.ResourceItem.TYPE_JSON);
				RES.getResByUrl("resource/assets/language/"+Global.language+"/roomitem/roomItem"+this.nRoomID+"_tex.png",function(texture:any){
					if(texture){
						this.texture = texture;
						this.getAnimComplete();
					}
					
				},this,RES.ResourceItem.TYPE_IMAGE);
			} catch (error) {}

			
		}
		private getAnimComplete():void{
			this.nLoadNum += 1;
			return;
			if(this.nLoadNum == 3){
				let factory:dragonBones.EgretFactory = new dragonBones.EgretFactory();
				factory.parseDragonBonesData( this.bonesJson);
				factory.parseTextureAtlasData( this.textureJson,this.texture);
				
				let str:string = "";
				if(this.nRoomID == 1){
					str = "rmg";
				}
				if(this.nRoomID == 2){
					str = "cjg";
				}
				if(this.nRoomID == 3){
					str = "zjg";
				}
				if(this.nRoomID == 4){
					str = "gjg";
				}
				if(this.nRoomID == 5){
					str = "djg";
				}
				if(this.nRoomID == 6){
					str = "zzg";
				}
				let ar: dragonBones.EgretArmatureDisplay = factory.buildArmatureDisplay(str);
				ar.animation.play(str, 0);
				this.group.addChild(ar);
				ar.x = 250;
				ar.y = 170;
			}
		}
	}
}