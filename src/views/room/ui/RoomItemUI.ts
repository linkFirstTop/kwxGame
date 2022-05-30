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

      this.addEventListener(
        egret.TouchEvent.TOUCH_BEGIN,
        this.touchBegin,
        this
      );
      this.addEventListener(
        egret.TouchEvent.TOUCH_CANCEL,
        this.touchCancel,
        this
      );
      this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
      this.addEventListener(
        egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,
        this.touchCancel,
        this
      );
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
      this.dispatchEvent(
        new egret.Event("OnItemClick", true, true, this.nRoomID)
      );
    }
    public setItem(data: any): void {
      //console.log('setItem',data);
      this.info = data;
      this.lbBase.text =
        Global.dic["底注"] + " " + ChipUtils.formatCoin(data.basic_bet, true);
      this.lbEnter.text =
        Global.dic["准入"] + " " + ChipUtils.formatCoin(data.entry_min, true);
      this.nRoomID = data.roomID;
      if (this.nRoomID > 3) {
        this.imgItem.source = "roomItembg2_png";
        this.txtBg1.source = "roomTxtbg2_png";
        this.txtBg2.source = "roomItembg2_1_png";
      } else {
        this.imgItem.source = "roomItembg1_png";
        this.txtBg1.source = "roomTxtbg1_png";
        this.txtBg2.source = "roomItembg1_1_png";
      }



      //文字4
      const Animdata1 = RES.getRes(
        `roomTxt${this.nRoomID}_${Global.language}_json`
      ); //
      const txtr1 = RES.getRes(`roomTxt${this.nRoomID}_${Global.language}_png`);
      const mcFactory1: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(Animdata1, txtr1);
      const mc1: egret.MovieClip = new egret.MovieClip(mcFactory1.generateMovieClipData());
      mc1.x = -45;
      mc1.y = -54;
      this.animGroup.addChild(mc1);
      mc1.gotoAndPlay(0, -1);

      if (Global.language == "cn") {
        if (this.nRoomID == 2) {
          mc1.x = -48;
          mc1.y = -74;
        }
        if (this.nRoomID == 3) {
          mc1.x = -38;
          mc1.y = -117;
        }

        if (this.nRoomID == 4 || this.nRoomID == 5) {
          mc1.x = -33;
          mc1.y = -114;
        }
        if (this.nRoomID == 6) {
          mc1.x = -43;
          mc1.y = -110;
        }
      }

      if (Global.language == "tc") {
        mc1.x = -7;
        mc1.y = 40;
      }

      if (Global.language == "en") {
        mc1.x = -4;
        mc1.y = 10;

        if (this.nRoomID == 1) {
          //动画2
          mc1.x = -4;
          mc1.y = 20;
        }

        if (this.nRoomID == 2) {
          mc1.x = -4;
          mc1.y = 10;
        }

        if (this.nRoomID == 3) {
          mc1.x = -4;
          mc1.y = 18;
        }
      }

      let factory: dragonBones.EgretFactory = new dragonBones.EgretFactory();

      factory.parseDragonBonesData(
        RES.getRes(`roomA${this.nRoomID}_1_ske_json`)
      ); //xlrw_tex_webp
      factory.parseTextureAtlasData(
        RES.getRes(`roomA${this.nRoomID}_1_tex_json`),
        RES.getRes(`roomA${this.nRoomID}_1_tex_png`)
      );

      let ar: dragonBones.EgretArmatureDisplay = factory.buildArmatureDisplay("Sprite");
      ar.animation.play("Sprite", 0);
      ar.x = 240;
      ar.y = 160;
      this.animGroup.addChild(ar);

      let factory2: dragonBones.EgretFactory = new dragonBones.EgretFactory();

      factory2.parseDragonBonesData(
        RES.getRes(`roomA${this.nRoomID}_2_ske_json`)
      ); //xlrw_tex_webp
      factory2.parseTextureAtlasData(
        RES.getRes(`roomA${this.nRoomID}_2_tex_json`),
        RES.getRes(`roomA${this.nRoomID}_2_tex_png`)
      );


      let ar2: dragonBones.EgretArmatureDisplay = factory2.buildArmatureDisplay("Sprite");
      ar2.animation.play("Sprite", 0);
      ar2.x = 370;
      ar2.y = 240;


      if(this.nRoomID == 3){
          ar2.x = 370;
          ar2.y = 190;
      }

      this.animGroup.addChild(ar2);

      if (this.nRoomID == 6) {
        let factory3: dragonBones.EgretFactory = new dragonBones.EgretFactory();

        factory3.parseDragonBonesData(
          RES.getRes(`roomA${6}_3_ske_json`)
        ); //xlrw_tex_webp
        factory3.parseTextureAtlasData(
          RES.getRes(`roomA${6}_3_tex_json`),
          RES.getRes(`roomA${6}_3_tex_png`)
        );

        let ar3: dragonBones.EgretArmatureDisplay = factory3.buildArmatureDisplay("Sprite");
        ar3.animation.play("Sprite", 0);
        ar3.x = 360;
        ar3.y = 90;

        this.animGroup.addChild(ar3);

      }





      // //动画1

    }

    private loadAnim() {


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
        let ar: dragonBones.EgretArmatureDisplay =
          factory.buildArmatureDisplay(str);
        ar.animation.play(str, 0);
        this.group.addChild(ar);
        ar.x = 250;
        ar.y = 170;
      }
    }
  }
}
