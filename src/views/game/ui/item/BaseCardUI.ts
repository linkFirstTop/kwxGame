module game {
	export class BaseCardUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}

		private imgValue:eui.Image;
		
		protected childrenCreated():void
		{
			super.childrenCreated();
		}
		public setCard(value:number):void{
			this.imgValue.source = "cardValue"+value;
		}
	}
}