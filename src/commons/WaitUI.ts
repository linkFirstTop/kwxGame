 class WaitUI extends egret.Sprite{
		
		public constructor() {
			super();
			this.init();
		}

		private imgLoading:eui.Image;
		private lbMsg:eui.Label;
		private bg:eui.Image;

		private init() {
			this.width = GameConfig.curWidth();
			this.height = GameConfig.curHeight();

			this.bg = new eui.Image(RES.getRes("black_png"));
			this.addChild(this.bg);
			this.bg.width = GameConfig.curWidth();
			this.bg.height = GameConfig.curHeight();
			this.bg.alpha = 0.5;

			this.lbMsg = new eui.Label();
			this.addChild( this.lbMsg );
			this.lbMsg.size = 30;
			this.lbMsg.fontFamily = "微软雅黑";
			this.lbMsg.text = "网络连接中，请稍候！";
			
			this.imgLoading = new eui.Image(RES.getRes("waitloading_png"));
			this.addChild( this.imgLoading );
			this.imgLoading.anchorOffsetX = 73;
			this.imgLoading.anchorOffsetY = 72;
			this.imgLoading.x = GameConfig.curWidth() / 2;
			this.imgLoading.y = GameConfig.curHeight() / 2;

			this.lbMsg.y = this.imgLoading.y + 100;
			this.lbMsg.x = (GameConfig.curWidth() - this.lbMsg.width) / 2;

			//this.stage.addEventListener(egret.Event.RESIZE,this.onResize,this);
		}

		public onResize():void{
			this.width = GameConfig.curWidth();
			this.height = GameConfig.curHeight();

			this.bg.width = this.width;
			this.bg.height = this.height;

			this.imgLoading.x = GameConfig.curWidth() / 2;
			this.imgLoading.y = GameConfig.curHeight() / 2;
			
			this.lbMsg.y = this.imgLoading.y + 72;
			this.lbMsg.x = (GameConfig.curWidth() - this.lbMsg.width) / 2;
		}
		public showWait(str:string):void{
			this.visible = true;
			this.lbMsg.text = str;
			this.lbMsg.x = (GameConfig.curWidth() - this.lbMsg.width) / 2;
			this.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
		}
		private onEnterFrame():void{
			this.imgLoading.rotation += 2;
		}
		public hideWait():void{
			this.visible = false;
			this.removeEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
		}
	}
