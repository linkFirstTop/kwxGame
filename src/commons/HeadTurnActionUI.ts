class HeadTurnActionUI extends egret.Sprite{
	private time:egret.Timer;
//-----------------------------------总运行多少毫秒-----------------------------------
	private totalTimeNum:number=-1;
//-----------------------------------毫秒间隔-----------------------------------
	private intervalTime:number = -1;

	private shape:egret.Shape;

	private count:number = 0;

	private img:any;
//-----------------------------------父类-----------------------------------
	private self:any;

	public constructor() {
		super();
	}


	/**
	 * totalTime:总转动多少毫秒
	 * t：每多少毫秒转动一次
	 * 
	 * headTurnActionUI.showTurnAction(10000,100,img,this);
	 */
	public showTurnAction(totalTime:number,t:number,img:any,self:any):void
	{
		this.onClose();
		this.img = img;
		this.self = self;
		this.intervalTime = t;
		this.totalTimeNum = totalTime*1000;
		this.count = 0;
		this.onNewTime();
	}

	private onNewTime():void{
		this.time = new egret.Timer(this.intervalTime,Math.floor( this.totalTimeNum/this.intervalTime ) );
		this.time.addEventListener(egret.TimerEvent.TIMER,this.onStartTimer,this);
		this.time.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerComplete,this);
		this.shape = new egret.Shape();
		this.shape.rotation=-90;
		this.self.addChild(this.shape);
		this.time.repeatCount = Math.floor( this.totalTimeNum / this.intervalTime ) ;
		this.time.delay = this.intervalTime;
		this.time.start();
		this.img.mask = this.shape;
		this.shape.x = this.img.width / 2 + this.img.x;
		this.shape.y = this.img.height / 2 + this.img.y;
		this.shape.visible = true;
	}

	private onStartTimer():void{
		if(this.shape == null) return;
		this.count = this.count + this.intervalTime;
		let n:number = this.totalTimeNum - this.count;
		//let angle:number = 360 - 360*(this.count/this.totalTimeNum);
		let angle:number = 360*(this.count/this.totalTimeNum);
		let r:number =  Math.max(this.img.width, this.img.height) / 2 * 1.5;
		if( n==10 )
		{
			angle = 360;
		}else if( n == 0 )
		{
			angle = 359.9;
		}
		this.shape.graphics.clear();
		this.shape.graphics.beginFill(0x00ffff, 1);
		this.shape.graphics.drawArc( 0, 0, r, 0, angle * Math.PI / 180, true );
		this.shape.graphics.lineTo(0, 0);
		this.shape.graphics.endFill();
	}

//-----------------------------------倒计时结束-----------------------------------
	private onTimerComplete():void{
		this.onClose();
	}
//-----------------------------------停止转动-----------------------------------
	public onStopTurnAction():void{
		this.time.stop();
		this.time.reset();
	}

	public onClose():void
	{
		if(this.time == null){
			return;
		}
		this.dispatchEvent(new egret.Event("HideUserHeadImg",true,true));
		if(this.time)
		{
			this.onStopTurnAction();
			this.time.removeEventListener(egret.TimerEvent.TIMER,this.onStartTimer,this);
			this.time.removeEventListener(egret.TimerEvent.TIMER_COMPLETE,this.onTimerComplete,this);
			this.time = null;
		}
		if( this.img )
		{
			this.img.mask = null;
		}
		if( this.shape )
		{
			this.shape.visible = false;
			if( this.shape.parent )
				this.self.removeChild(this.shape);
			this.shape = null;
		}

	}
}