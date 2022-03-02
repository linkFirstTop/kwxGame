class BaseSheetButton extends egret.Sprite{
	public constructor(name: string,sheetName: string = "") {
		super();
		
		this.onInit(name,sheetName);
	}
	private gContent:eui.Group;
	private display:egret.Bitmap;
	private onInit(name: string,sheetName: string = ""):void{
		
		if(sheetName == ""){
			this.display = this.createBitmapByName(name);
		}else{
			this.display = this.createBitmapFromSheet(name,sheetName);
		}
		
		this.gContent = new eui.Group();
		this.addChild(this.gContent);

		this.gContent.addChild(this.display);

		this.display.x = this.display.anchorOffsetX = this.width/2;
		this.display.y = this.display.anchorOffsetY = this.height/2;
		
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
		this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchCancel, this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchCancel, this);
	}

	private touchCancel(event: egret.TouchEvent):void{
		this.display.scaleX = 1;
		this.display.scaleY = 1;
	}

	private touchBegin(event: egret.TouchEvent):void{
		sound.SoundManager.getInstance().playEffect("gamebuttontap_mp3");
		this.display.scaleX = 0.9;
		this.display.scaleY = 0.9;
	}
	 private createBitmapByName(name: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * 根据name关键字创建一个Bitmap对象。此name 是根据TexturePacker 组合成的一张位图
     */
    private createBitmapFromSheet(name: string,sheetName: string = ""): egret.Bitmap {
        var sheet: egret.SpriteSheet = RES.getRes(sheetName);
        var texture: egret.Texture = sheet.getTexture(name);
        var result: egret.Bitmap = new egret.Bitmap();
        result.texture = texture;
        return result;
    }
}