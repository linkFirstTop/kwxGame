module comm {
	export class GameRuleUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
			this.skinName = "resource/eui_skins/GameRuleUI.exml";
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}
		private imgHelp:eui.Image;
		private btnClose:BaseButton;
		private gButtons:eui.Group;
		private scroller:eui.Scroller;
		private gContent:eui.Group;
		protected childrenCreated():void
		{
			super.childrenCreated();

			this.width = GameConfig.curWidth();
			this.height = GameConfig.curHeight();

			this.imgHelp.source = "imgHelp1_png";
			(this.gButtons.getChildAt(0) as eui.Button).currentState = "up";

			this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClose,this);
			this.gButtons.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this);
		}
		public showUI():void{
			this.gContent.scaleX = this.gContent.scaleY = 0.8;
			egret.Tween.get(this.gContent).to({scaleX:1,scaleY:1},500,egret.Ease.backOut);
		}
		private onButtonClick(evt:egret.TouchEvent):void{
			/*if(evt.target.currentState == "up"){
				return ;
			}*/
			var nIndex:number = 0;
			for(var i:number = 0;i < this.gButtons.numChildren;i++){
				var btn:eui.Button = this.gButtons.getChildAt(i) as eui.Button;
				if(btn == evt.target){
					nIndex = i;
				}
				/*if(btn.currentState == "up"){
					btn.currentState = "down";
				}*/
				btn.currentState = "down";
			}
			evt.target.currentState = "up";
			this.imgHelp.source = "imgHelp"+(nIndex+1)+"_png";
			this.scroller.stopAnimation();
			this.scroller.viewport.scrollV = 0;
			sound.SoundManager.getInstance().playEffect("gamebuttontap_mp3");
		}
		private onClose():void{
			if(this.parent){
				this.parent.removeChild(this);
			}
		}
	}
}