class BaseButton extends eui.Button implements eui.UIComponent{
	public constructor() {
		super();
	}
	
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	private display:any;
	protected childrenCreated():void
	{
		super.childrenCreated();

		this.display = this.getChildAt(0);

		this.display.x = this.display.anchorOffsetX = this.width/2;
		this.display.y = this.display.anchorOffsetY = this.height/2;
		
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
		this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchCancel, this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchCancel, this);
	}
	public setImg(imgURL:string):void{
		this.display.source = imgURL;
	}
	private touchCancel(event: egret.TouchEvent):void{
		//egret.Tween.removeTweens(this);
		this.display.scaleX = 1;
		this.display.scaleY = 1;

	}

	private touchBegin(event: egret.TouchEvent):void{
		sound.SoundManager.getInstance().playEffect("gamebuttontap_mp3");
		
		this.display.scaleX = 0.9;
		this.display.scaleY = 0.9;
	}
}