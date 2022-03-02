class MessageUI extends egret.Sprite {
	private static _ins:MessageUI;
	public static get ins(): MessageUI{
        if(MessageUI._ins == null) {
             MessageUI._ins = new MessageUI;
        }
        return MessageUI._ins;
    }
	private arrMsg:Array<string> = [];
	private sprBg:egret.Sprite;
	private group:eui.Group;
	private txt:egret.TextField;
	private isRunning:boolean = false;
	private scroll:eui.Scroller;
	private 
	public constructor() {
		super();
		this.visible = false;

		this.sprBg = new egret.Sprite();
		this.addChild(this.sprBg);

		var imgBg:egret.Bitmap = GameUtils.createBitmapByName("messageBg_png");
		this.sprBg.addChild(imgBg);
		var imgMsg:egret.Bitmap = GameUtils.createBitmapByName("icon_msg_png");
		this.sprBg.addChild(imgMsg);

		this.group = new eui.Group();
		this.addChild(this.group);

	
		this.txt = new egret.TextField();
		this.txt.size = 30;
		this.txt.text = "测试测试测试测试测试";
		this.txt.textColor = 0xfcf7a4;
		this.txt.fontFamily = "微软雅黑";
		this.txt.x = imgBg.width;
		this.txt.y = (imgBg.height - this.txt.height)/2;
		this.group.addChild(this.txt);
		
		this.scroll = new eui.Scroller();
		this.scroll.touchEnabled = false;
		this.scroll.x = 60;
		this.scroll.width = imgBg.width-65;
		this.scroll.height = imgBg.height;
		this.scroll.viewport = this.group;
		this.addChild(this.scroll);

	}
	
	public showMessage(msg:Array<string>):void{
		this.visible = true;
		for(var i:number = 0;i < msg.length;i++){
			this.arrMsg.push(msg[i]);
		}
		if(this.isRunning == false){
			this.isRunning = true;
			this.restMsg();
		}
	}
	private restMsg():void{
		if(this.arrMsg.length > 0){
			this.txt.textFlow = new egret.HtmlTextParser().parser(this.arrMsg.shift());
			this.txt.x = this.sprBg.width;
			this.scroll.viewport.scrollH = 0;
			var min:number = 5000+this.txt.text.length*100;
			var w:number = this.sprBg.width + this.txt.width;
			egret.Tween.get(this.scroll.viewport).to({scrollH:w},min).call(this.restMsg,this);
		}else{
			this.isRunning = false;
			this.visible = false;
		}
	}
}