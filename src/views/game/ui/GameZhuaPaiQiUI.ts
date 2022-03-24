module game {
	export class GameZhuaPaiQiUI extends egret.Sprite{
		private parItem:egret.Sprite;
		private btnItem:egret.Sprite;
		//抓牌器
		public constructor() {
			super();
			this.addEventListener( egret.Event.ADDED_TO_STAGE, this.init, this );
		}

		private init():void{
			this.parItem = new egret.Sprite();
			this.addChild( this.parItem );
			this.btnItem = new egret.Sprite();
			this.addChild( this.btnItem );
			for( let i = 0; i < 27; i++ ){
				let item:egret.Sprite = new egret.Sprite();
				item.graphics.beginFill(0xFF8C00);
				item.graphics.drawRect(0, 0, 50, 50);
				item.graphics.endFill();
				item.alpha = 0.8;

				this.parItem.addChild( item );
				let txt:egret.TextField = new egret.TextField();
				item.addChild( txt );
				if(  i/9  <= 0.9 ){
					txt.text = (i%9) + 1+"万";
					item.name = "0x0"+( i%9 )+"1";
				}else if( i/9 <= 1.9 ){   
					txt.text = (i%9)+1+"条"
					item.name = "0x1"+( i%9 )+"1";
				}else{
					txt.text = (i%9)+1+"饼";
					item.name = "0x2"+( i%9 )+"1";
				}
				txt.x = 50/2-txt.textWidth/2;
				txt.y = 50/2-txt.textHeight/2;

				item.x = (i)%9 * 50 + i%9*25;
				item.y = Math.floor( i/9 )*50 + Math.floor( i/9 ) *25;
				item.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				item.touchEnabled = true;
			}

			

			let item12:egret.Sprite = new egret.Sprite();
			item12.graphics.beginFill(0xFF8C00);
			item12.graphics.drawRect(0, 0, 50, 50);
			item12.graphics.endFill();
			item12.alpha = 0.8;
			item12.name = "shou";
			this.btnItem.addChild( item12 );
			item12.x = 210;
			item12.y = Math.floor( 26/9 )*50 + Math.floor( 26/9 ) *25+125;
			item12.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			item12.touchEnabled = true;
			let txt12:egret.TextField = new egret.TextField();
			txt12.text = "收";
			item12.addChild( txt12 );

			let item13:egret.Sprite = new egret.Sprite();
			item13.graphics.beginFill(0xFF8C00);
			item13.graphics.drawRect(0, 0,50, 50);
			item13.graphics.endFill();
			item13.alpha = 0.8;
			item13.name = "kai";
			this.btnItem.addChild( item13 );
			item13.x = item12.x+item12.width+10;
			item13.y = Math.floor( 26/9 )*50 + Math.floor( 26/9 ) *25+125;
			item13.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			item13.touchEnabled = true;
			let txt13:egret.TextField = new egret.TextField();
			txt13.text = "开";
			item13.addChild( txt13 );
		}

		private onClick(e:egret.TouchEvent):void{
			if( e.target.name == "kai" ){
				this.parItem.visible=true;
				return;
			}else if( e.target.name == "shou" ){
				this.parItem.visible=false;
				return;
			}
			let btn:egret.Sprite = e.target;
			game.GameWebSocket.instance().gameSender.ReqZhuaPai( Number( btn.name ) ) ;
		}
	}
}