module game {
	export class GameZhuaPaiQiUI extends egret.Sprite {
		private parItem: egret.Sprite;
		private btnItem: egret.Sprite;
		//抓牌器
		public constructor() {
			super();
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
		}

		private init(): void {
			this.parItem = new egret.Sprite();
			this.addChild(this.parItem);
			this.btnItem = new egret.Sprite();
			this.addChild(this.btnItem);
			for (let i = 0; i < 27; i++) {
				let item: egret.Sprite = new egret.Sprite();
				item.graphics.beginFill(0xFF8C00);
				item.graphics.drawRect(0, 0, 50, 50);
				item.graphics.endFill();
				item.alpha = 0.8;

				this.parItem.addChild(item);
				let txt: egret.TextField = new egret.TextField();
				item.addChild(txt);
				if (i / 9 <= 0.9) {
					txt.text = (i % 9) + 1 + "万";
					item.name = i+''
				} else if (i / 9 <= 1.9) {
					// txt.text = (i%9)+1+"条"
					// item.name = "0x1"+( i%9 )+"1";
					txt.visible = false
					item.visible = false
				} else {
					txt.text = (i % 9) + 1 + "饼";
					item.name = i+'';
				}
				txt.x = 50 / 2 - txt.textWidth / 2;
				txt.y = 50 / 2 - txt.textHeight / 2;

				item.x = (i) % 9 * 50 + i % 9 * 25;
				item.y = Math.floor(i / 9) * 20 + Math.floor(i / 9) * 25;
				item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
				item.touchEnabled = true;
			}
			let itemWidth = 50
			let item: egret.Sprite = new egret.Sprite();
			item.graphics.beginFill(0xFF8C00);
			item.graphics.drawRect(0, 0, itemWidth, itemWidth);
			item.graphics.endFill();
			item.alpha = 0.8;
			item.name = "31";
			this.parItem.addChild(item);
			item.x = 0;
			item.y = Math.floor(26 / 9) * itemWidth + Math.floor(26 / 9) * 25 + 50;
			item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			item.touchEnabled = true;
			let txt: egret.TextField = new egret.TextField();
			txt.text = "红中";
			item.addChild(txt);

			let item2: egret.Sprite = new egret.Sprite();
			item2.graphics.beginFill(0xFF8C00);
			item2.graphics.drawRect(0, 0, itemWidth, itemWidth);
			item2.graphics.endFill();
			item2.alpha = 0.8;
			item2.name = "33";
			this.parItem.addChild(item2);
			item2.x = item.x + item.width + 10;
			item2.y = Math.floor(26 / 9) * itemWidth + Math.floor(26 / 9) * 25 + 50;
			item2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			item2.touchEnabled = true;
			let txt2: egret.TextField = new egret.TextField();
			txt2.text = "白板";
			item2.addChild(txt2);

			let item3: egret.Sprite = new egret.Sprite();
			item3.graphics.beginFill(0xFF8C00);
			item3.graphics.drawRect(0, 0, itemWidth, itemWidth);
			item3.graphics.endFill();
			item3.alpha = 0.8;
			item3.name = "32";
			this.parItem.addChild(item3);
			item3.x = item2.x + item2.width + 10;
			item3.y = Math.floor(26 / 9) * itemWidth + Math.floor(26 / 9) * 25 + 50;
			item3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			item3.touchEnabled = true;
			let txt3: egret.TextField = new egret.TextField();
			txt3.text = "绿发";
			item3.addChild(txt3);


			let item12: egret.Sprite = new egret.Sprite();
			item12.graphics.beginFill(0xFF8C00);
			item12.graphics.drawRect(0, 0, 50, 50);
			item12.graphics.endFill();
			item12.alpha = 0.8;
			item12.name = "shou";
			this.btnItem.addChild(item12);
			item12.x = 210;
			item12.y = Math.floor(26 / 9) * 50 + Math.floor(26 / 9) * 25 + 125;
			item12.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			item12.touchEnabled = true;
			let txt12: egret.TextField = new egret.TextField();
			txt12.text = "收";
			item12.addChild(txt12);

			let item13: egret.Sprite = new egret.Sprite();
			item13.graphics.beginFill(0xFF8C00);
			item13.graphics.drawRect(0, 0, 50, 50);
			item13.graphics.endFill();
			item13.alpha = 0.8;
			item13.name = "kai";
			this.btnItem.addChild(item13);
			item13.x = item12.x + item12.width + 10;
			item13.y = Math.floor(26 / 9) * 50 + Math.floor(26 / 9) * 25 + 125;
			item13.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
			item13.touchEnabled = true;
			let txt13: egret.TextField = new egret.TextField();
			txt13.text = "开";
			item13.addChild(txt13);
		}



		private onClick(e: egret.TouchEvent): void {
			if (e.target.name == "kai") {
				this.parItem.visible = true;
				return;
			} else if (e.target.name == "shou") {
				this.parItem.visible = false;
				return;
			}
			let btn: egret.Sprite = e.target;
			game.GameWebSocket.instance().gameSender.ReqZhuaPai(Number(btn.name));
		}
	}
}