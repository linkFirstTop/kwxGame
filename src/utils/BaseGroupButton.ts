class BaseGroupButton extends eui.Group implements eui.UIComponent{
	public constructor() {
		super();
	}
	
	protected childrenCreated():void
	{
		super.childrenCreated();

		this.x = this.anchorOffsetX = this.width/2;
		this.y =this.anchorOffsetY = this.height/2;
		
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
		this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchCancel, this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchCancel, this);
	}
	private touchCancel(event: egret.TouchEvent):void{
		this.scaleX = 1;
		this.scaleY = 1;
	}

	private touchBegin(event: egret.TouchEvent):void{
		sound.SoundManager.getInstance().playEffect("gamebuttontap_mp3");
		this.scaleX = 0.9;
		this.scaleY = 0.9;
	}
}