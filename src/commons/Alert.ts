module comm {
	export class Alert extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
			this.skinName = "resource/eui_skins/Alert.exml";
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}
		private btnSure:BaseButton;
		private btnClose:BaseButton;
		private lbMsg:eui.Label;
		private func:Function;
		private gContent:eui.Group;
		private imgTitle:eui.Image;
		protected childrenCreated():void
		{
			super.childrenCreated();

			this.onResize();

			this.imgTitle.source = "resource/assets/language/"+Global.language+"/comm/commTitle_tip.png";
			this.btnSure.setImg("resource/assets/language/"+Global.language+"/comm/commButton_sure.png");

			this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onHideAlert,this);
			this.btnSure.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onHideAlert,this);
		}
		public onResize():void{
			this.width = GameConfig.curWidth();
			this.height = GameConfig.curHeight();
		}
		private onHideAlert():void{
			this.visible = false;
			if(this.func != null){
				this.func();
			}
		}
		public showAlert(msg:string,fun=null):void{
			this.func = fun;
			if(this.func == null){
				this.btnClose.visible = true;
			}else{
				this.btnClose.visible = false;
			}
			this.lbMsg.text = msg;
			this.visible = true;
			this.gContent.scaleX = this.gContent.scaleY = 0.8;
			egret.Tween.get(this.gContent).to({scaleX:1,scaleY:1},500,egret.Ease.backOut);
		}
	}
}