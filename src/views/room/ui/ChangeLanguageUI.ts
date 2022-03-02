module room {
	export class ChangeLanguageUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}
		private gItems:eui.Group;
		private btnTitle:eui.Image;
		private btnSure:BaseButton;
		private btnCancel:BaseButton;
		private btnClose:BaseButton;
		private strLanguage:string = "";
		private ntype:number = 1;
		protected childrenCreated():void
		{
			super.childrenCreated();

			this.btnTitle.source = "resource/assets/language/"+Global.language+"/comm/commTitle_language.png";
			this.btnSure.setImg("resource/assets/language/"+Global.language+"/comm/commButton_sure.png");
			this.btnCancel.setImg("resource/assets/language/"+Global.language+"/comm/commButton_cancel.png");

			this.gItems.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onChangeLanguage,this);
			this.btnSure.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnSure,this);
			this.btnCancel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnCancel,this);
			this.btnClose.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnCancel,this);
		}
		public showUI():void{
			this.visible = true;
			this.initLanguage();
			if(Global.language != ""){
				this["btnSelect_"+Global.language].source = "icon_select_yes_png";
				this.strLanguage = Global.language;
			}
		}
		private initLanguage():void{
			this["btnSelect_cn"].source = "icon_select_no_png";
			this["btnSelect_en"].source = "icon_select_no_png";
			this["btnSelect_tc"].source = "icon_select_no_png";
		}
		private onChangeLanguage(evt:egret.Event):void{
			let targetName:string = evt.target.name;
			if(targetName == ""){
				return ;
			}
			this.initLanguage();
			this["btnSelect_"+targetName].source = "icon_select_yes_png";
			this.strLanguage = targetName;
			if(targetName == "cn"){
				this.ntype = 1;
			}
			if(targetName == "tc"){
				this.ntype = 2;
			}
			if(targetName == "en"){
				this.ntype = 3;
			}
		}
		private onBtnSure():void{
			this.visible = false;
			if(this.strLanguage != Global.language){
				BaseHttpRequest.sendRequestGetOnce(Global.baseURL+"SetUserInfo", this.onSetLanguage, this, "token=" + Global.token+"&language="+this.ntype);
			}
		}
		private onSetLanguage():void{
			window.location.href = location.href;
		}
		private onBtnCancel():void{
			this.visible = false;
		}
	}
}