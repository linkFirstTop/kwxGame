module room {
	export class RoomItemUI extends eui.Component implements eui.UIComponent {
		public constructor() {
			super();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}
		private group: eui.Group;
		private animGroup: eui.Group;
		private lbBase: eui.Label;
		private lbEnter: eui.Label;
		private nRoomID: number = 0;
		private imgItem: eui.Image;

		private txtBg1: eui.Image;
		private txtBg2: eui.Image;

		private info: any;
		private nLoadNum: number = 0;
		private bonesJson: any;
		private textureJson: any;
		private texture: any;
		protected childrenCreated(): void {
			super.childrenCreated();

			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
			this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this);
			this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
			this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchCancel, this);
		}

		private touchCancel(event: egret.TouchEvent): void {
			this.group.scaleX = 1;
			this.group.scaleY = 1;
		}

		private touchBegin(event: egret.TouchEvent): void {
			sound.SoundManager.getInstance().playEffect("gamebuttontap_mp3");
			this.group.scaleX = 0.9;
			this.group.scaleY = 0.9;

		}
		private touchEnd(): void {
			this.group.scaleX = 1;
			this.group.scaleY = 1;
			this.dispatchEvent(new egret.Event("OnItemClick", true, true, this.nRoomID));
		}
		public setItem(data: any): void {
			//console.log('setItem',data);
			this.info = data;
			this.lbBase.text = Global.dic["底注"] + " " + ChipUtils.formatCoin(data.basic_bet, true);
			this.lbEnter.text = Global.dic["准入"] + " " + ChipUtils.formatCoin(data.entry_min, true);
			this.nRoomID = data.roomID;
			if (this.nRoomID > 3) {
				this.imgItem.source = "roomItembg2_png";
				this.txtBg1.source = "roomTxtbg2_png";
				this.txtBg2.source = "roomItembg2_1_png"
			} else {
				this.imgItem.source = "roomItembg1_png";
				this.txtBg1.source = "roomTxtbg1_png";
				this.txtBg2.source = "roomItembg1_1_png"
			}

			console.log("===this.roomID", this.nRoomID)

			//文字4
			const Animdata1 = RES.getRes(`roomTxt${this.nRoomID}_${Global.language}_json`);
			const txtr1 = RES.getRes(`roomTxt${this.nRoomID}_${Global.language}_png`);
			const mcFactory1: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(Animdata1, txtr1);
			const mc1: egret.MovieClip = new egret.MovieClip(mcFactory1.generateMovieClipData());
			mc1.x = -45;
			mc1.y = -54;
			this.animGroup.addChild(mc1);
			mc1.gotoAndPlay(0, -1)

			//动画2
			const Animdata3 = RES.getRes(`room${this.nRoomID}Anim2_json`);
			const txtr3 = RES.getRes(`room${this.nRoomID}Anim2_png`);
			const mcFactory3: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(Animdata3, txtr3);
			const mc3: egret.MovieClip = new egret.MovieClip(mcFactory3.generateMovieClipData());
			mc3.x = -20;
			mc3.y = -80;
			this.animGroup.addChild(mc3);
			mc3.gotoAndPlay(0, -1)

			//动画1
			const Animdata2 = RES.getRes(`room${this.nRoomID}Anim1_json`);
			const txtr2 = RES.getRes(`room${this.nRoomID}Anim1_png`);
			//console.log("=-=txtr2=", txtr2)
			const mcFactory2: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(Animdata2, txtr2);
			const mc2: egret.MovieClip = new egret.MovieClip(mcFactory2.generateMovieClipData());
			mc2.x = 100;
			mc2.y = -30;
			this.animGroup.addChild(mc2,);
			mc2.gotoAndPlay(0, -1)

			if (this.nRoomID == 6) {
				const Animdata4 = RES.getRes(`room6Anim3_json`);
				const txtr4 = RES.getRes(`room6Anim3_png`);
				//console.log("=-=txtr2=", txtr2)
				const mcFactory4: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(Animdata4, txtr4);
				const mc4: egret.MovieClip = new egret.MovieClip(mcFactory4.generateMovieClipData());
				mc4.x = 80;
				mc4.y = -150;
				this.animGroup.addChild(mc4);
				mc4.gotoAndPlay(0, -1)

				mc2.x = 100;
				mc2.y = 20;

			}

			if (this.nRoomID == 1) {
				//动画2
				mc3.x = -45;
				mc3.y = -30;

				//动画1
				mc2.x = 10;
				mc2.y = -50;
			}

			if(this.nRoomID == 2){
				mc2.x = 100;
				mc2.y = -30;
			}


			if(this.nRoomID == 3){
				mc2.x = 100;
				mc2.y = -60;
			}

			if(this.nRoomID == 4){
				mc2.x = 100;
				mc2.y = -70;
			}




			// try {
			// 	RES.getResByUrl("resource/assets/language/"+Global.language+"/roomitem/roomItem"+this.nRoomID+"_ske.json",function(text:any){
			// 		if(text){
			// 			this.bonesJson = text;
			// 			this.getAnimComplete();
			// 		}

			// 	},this,RES.ResourceItem.TYPE_JSON);
			// 	RES.getResByUrl("resource/assets/language/"+Global.language+"/roomitem/roomItem"+this.nRoomID+"_tex.json",function(text:any){
			// 		if(text){
			// 			this.textureJson = text;
			// 			this.getAnimComplete();
			// 		}

			// 	},this,RES.ResourceItem.TYPE_JSON);
			// 	RES.getResByUrl("resource/assets/language/"+Global.language+"/roomitem/roomItem"+this.nRoomID+"_tex.png",function(texture:any){
			// 		if(texture){
			// 			this.texture = texture;
			// 			this.getAnimComplete();
			// 		}

			// 	},this,RES.ResourceItem.TYPE_IMAGE);
			// } catch (error) {}


		}
		private getAnimComplete(): void {
			this.nLoadNum += 1;
			return;
			if (this.nLoadNum == 3) {
				let factory: dragonBones.EgretFactory = new dragonBones.EgretFactory();
				factory.parseDragonBonesData(this.bonesJson);
				factory.parseTextureAtlasData(this.textureJson, this.texture);

				let str: string = "";
				if (this.nRoomID == 1) {
					str = "rmg";
				}
				if (this.nRoomID == 2) {
					str = "cjg";
				}
				if (this.nRoomID == 3) {
					str = "zjg";
				}
				if (this.nRoomID == 4) {
					str = "gjg";
				}
				if (this.nRoomID == 5) {
					str = "djg";
				}
				if (this.nRoomID == 6) {
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