module room {
	export class ChangeHeadUI extends eui.Component{

		public constructor() {
			super();

			this.init();
		}
		private maskBg:eui.Rect;
		private gContent:eui.Group;
		private nHeadNum:number = 15;
		private headScroll:eui.Scroller;
		private gItems:eui.Group;
		private nIndex:number = 1;
		private init():void{
			this.maskBg = new eui.Rect();
			this.addChild(this.maskBg);
			this.maskBg.width = GameConfig.curWidth();;
			this.maskBg.height = GameConfig.curHeight();
			this.maskBg.fillColor = 0x000000;
			this.maskBg.fillAlpha = 0.3;
			this.maskBg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onHideUI,this);

			this.gContent = new eui.Group();
			this.addChild(this.gContent);
			this.gContent.horizontalCenter = this.gContent.verticalCenter = 0;

			let imgBg:eui.Image = new eui.Image();
			this.gContent.addChild(imgBg);
			imgBg.source = "changeHeadbg_png";

			let btnSave:eui.Image = new eui.Image();
			this.gContent.addChild(btnSave);
			btnSave.source = "resource/assets/language/"+Global.language+"/comm/commButton_sure.png";
			
			let btnCancel:eui.Image = new eui.Image();
			this.gContent.addChild(btnCancel);
			btnCancel.source = "resource/assets/language/"+Global.language+"/comm/commButton_cancel.png";

			btnSave.bottom = btnCancel.bottom = 50;
			btnSave.horizontalCenter = 150;
			btnCancel.horizontalCenter = -150;

			btnSave.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
			btnSave.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this);
			btnSave.addEventListener(egret.TouchEvent.TOUCH_END, this.onSaveHead, this);
			btnSave.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchCancel, this);
			btnCancel.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
			btnCancel.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.touchCancel, this);
			btnCancel.addEventListener(egret.TouchEvent.TOUCH_END, this.onCancelHead, this);
			btnCancel.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchCancel, this);


			this.headScroll = new eui.Scroller();
			this.gContent.addChild(this.headScroll);
			this.headScroll.width = 980;
			this.headScroll.height = 500;
			this.headScroll.horizontalCenter = 0;
			this.headScroll.y = 60;

			this.gItems = new eui.Group();
			this.gContent.addChild(this.gItems);
			this.headScroll.viewport = this.gItems;
			this.gItems.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onItemTap,this);
		}
		private touchCancel(evt: egret.TouchEvent):void{
			evt.target.scaleX = evt.target.scaleY = 1;
		}

		private touchBegin(evt: egret.TouchEvent):void{
			sound.SoundManager.getInstance().playEffect("gamebuttontap_mp3");
			evt.target.scaleX = evt.target.scaleY = 0.9;
		}
		public showUI():void{
			this.visible = true;
			this.gContent.scaleX = this.gContent.scaleY = 0.8;
			egret.Tween.get(this.gContent).to({scaleX:1,scaleY:1},500,egret.Ease.backOut);

			if(this.gItems.numChildren == 0){
				this.addHead();
			}else{
				this.clearChoose();
				this.showHead();
			}
		}
		private addHead():void{
			for(var i:number = 0;i < this.nHeadNum;i++){
				let item:eui.Group = new eui.Group();
				this.gItems.addChild(item);
				item.name = ""+(i+1);
				item.touchChildren = false;
				let img:eui.Image = new eui.Image();
				item.addChild(img);
				img.source = Global.commURL+"head/iconHead"+(i+1)+".png";
				img.width = img.height = 130;
				let icon:eui.Image = new eui.Image();
				item.addChild(icon);
				icon.source = "icon_chooseHead_png";
				icon.right = -20;
				icon.visible = false;
				item.x = 200*(i%5) + 20;
				item.y = 170*Math.floor(i/5)+20;
			}
			this.showHead();
		}
		private clearChoose():void{
			for(let i:number = 0;i < this.gItems.numChildren;i++){
				(this.gItems.getChildAt(i) as eui.Group).getChildAt(1).visible = false;
			}
		}
		private showHead():void{
			var index:number = Global.userHead;
			if(index <= this.gItems.numChildren && index > 0){
				this.nIndex = index;
				(this.gItems.getChildAt(index-1) as eui.Group).getChildAt(1).visible = true;
			}
		}
		private onItemTap(evt:egret.TouchEvent):void{
			let target:eui.Group = evt.target;
			if(target.name != null && target.name != ""){
				(this.gItems.getChildByName(""+this.nIndex) as eui.Group).getChildAt(1).visible = false;
				this.nIndex = Number(target.name);
				target.getChildAt(1).visible = true;
			}
			
		}
		private onSaveHead(evt:egret.TouchEvent):void{
			evt.target.scaleX = evt.target.scaleY = 1;
			Global.userHead = this.nIndex;
			BaseHttpRequest.sendRequestGetOnce(Global.baseURL+"SetUserInfo", this.onChangeMyHead, this, "token=" + Global.token+"&icon="+this.nIndex);
		}
		private onCancelHead(evt:egret.TouchEvent):void{
			evt.target.scaleX = evt.target.scaleY = 1;
			this.onHideUI();
		}
		private onHttpError():void{
        
    	}
		private onChangeMyHead(evt:egret.Event):void{
			var json = evt.target.data;
			if (json == "") {
				return;
			}
			var jsondata = eval("(" + json + ")");
			if(jsondata.state == 0){
				this.dispatchEvent(new egret.Event("ChangeHeadSuccess"));
				this.onHideUI();
			}
		}
		private onHideUI():void{
			this.gContent.scaleX = this.gContent.scaleY = 1;
			egret.Tween.get(this.gContent).to({scaleX:0.8,scaleY:0.8},500,egret.Ease.backIn).call(function(){
				this.visible = false;
			},this);
		}
	}
}