module room {
	export class HistoryUI extends eui.Component implements eui.UIComponent{
		public constructor() {
			super();
		}

		protected partAdded(partName:string,instance:any):void
		{
			super.partAdded(partName,instance);
		}
		private btnClose:BaseButton;
		private lbStartTime:eui.Label;
		private lbEndTime:eui.Label;
		private btnQuery:BaseButton;
		private btnNext:BaseButton;
		private lbPage:eui.Label;
		private btnPre:BaseButton;
		private lbSubtotal:eui.Label;
		private lbTotal:eui.Label;
		private lbSubtotalGold:eui.Label;
		private lbTotalGold:eui.Label;
		private gItems:eui.Group;
		//日历控件
		private dateUI:DateUI;
		//开始时间
		private startTime:Date;
		//结束时间
		private endTime:Date;

		//private lbNoData:eui.Label;
		private bg:eui.Image;
		private gContent:eui.Group;
		private page:number = 1;
		private maxPage:number = 1;
		private count:number = 10;
		private imgTitle:eui.Image;
		private imgStart:eui.Image;
		private imgEnd:eui.Image;
		private imgDan:eui.Image;
		private imgCreate:eui.Image;
		private imgJu:eui.Image;
		private imgBank:eui.Image;
		private imgResult:eui.Image;
		private nTime:number = 0;
		private lbTitleTotal:eui.Label;
		private lbTitleSub:eui.Label
		protected childrenCreated():void
		{
			super.childrenCreated();

			this.width = GameConfig.curWidth();
			this.height = GameConfig.curHeight();

			this.dateUI = new DateUI();
			this.addChild(this.dateUI);
			this.dateUI.visible = false;

			this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick, this);
			GDGame.Msg.ins.addEventListener("SELECT_DATE", this.onSelectDate, this );
			this.page = 1;

			this.lbTitleSub.text = Global.dic["小计"];
			this.lbTitleTotal.text = Global.dic["总计"];
			this.imgTitle.source = "resource/assets/language/"+Global.language+"/history/title_history.png";
			this.imgStart.source = "resource/assets/language/"+Global.language+"/history/title_start.png";
			this.imgEnd.source = "resource/assets/language/"+Global.language+"/history/title_end.png";
			
			this.btnPre.setImg("resource/assets/language/"+Global.language+"/history/button_pre.png");
			this.btnNext.setImg("resource/assets/language/"+Global.language+"/history/button_next.png");
			this.btnQuery.setImg("resource/assets/language/"+Global.language+"/history/button_query.png");

			this.imgDan.source = "resource/assets/language/"+Global.language+"/history/title_dan.png";
			this.imgCreate.source = "resource/assets/language/"+Global.language+"/history/title_create.png";
			this.imgJu.source = "resource/assets/language/"+Global.language+"/history/title_ju.png";
			this.imgBank.source = "resource/assets/language/"+Global.language+"/history/title_banker.png";
			this.imgResult.source = "resource/assets/language/"+Global.language+"/history/title_coin.png";
		}
		private onClick(e:egret.TouchEvent):void
		{
			switch(e.target)
			{
				case this.lbStartTime:
					this.dateUI.onGetDate(this.startTime,"start");
					TipsUtils.showTipsFromCenter(Global.dic["选择日期"]);
					break;
				case this.lbEndTime:
					 this.dateUI.onGetDate(this.endTime,"end");
					 TipsUtils.showTipsFromCenter(Global.dic["选择日期"]);
					break;
				case this.btnQuery:
					if( this.startTime > this.endTime )
					{
						TipsUtils.showTipsFromCenter(Global.dic["时间选择错误"]);
						return;	
					}
					this.page = 1;
					this.onReqHitprocal(StringUtils.format( this.startTime,"yyyy-MM-dd hh:mm:ss"),StringUtils.format( this.endTime,"yyyy-MM-dd hh:mm:ss"));
					break;
				case this.btnNext:
					if( this.maxPage == this.page ){//最后一页
						return;
					}
					this.page++;
					this.onReqHitprocal(StringUtils.format( this.startTime,"yyyy-MM-dd hh:mm:ss"),StringUtils.format( this.endTime,"yyyy-MM-dd hh:mm:ss"));
					break;
				case this.btnPre:
					if( this.page == 1 ){//不能再上一页了
						return;
					}
					this.page--;
					this.onReqHitprocal(StringUtils.format( this.startTime,"yyyy-MM-dd hh:mm:ss"),StringUtils.format( this.endTime,"yyyy-MM-dd hh:mm:ss"));
					break;
				case this.btnClose:
					this.visible = false;
					break;
			}
		}

		public onShowUI():void
		{
			this.visible = true;
			
			this.gContent.scaleX = this.gContent.scaleY = 0.8;
			egret.Tween.get(this.gContent).to({scaleX:1,scaleY:1},500,egret.Ease.backOut);
			this.page = 1;
			let nexdate:Date;
			nexdate = new Date(new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1);
			let endTime = StringUtils.format( nexdate,"yyyy-MM-dd hh:mm:ss");
			this.lbEndTime.text = endTime;
			this.endTime = nexdate;

			let ownDate:Date;
			ownDate = new Date(new Date(new Date().toLocaleDateString()).getTime());
			let startTime = StringUtils.format( ownDate,"yyyy-MM-dd hh:mm:ss");
			this.lbStartTime.text = startTime;
			this.startTime = ownDate;
			this.onReqHitprocal(startTime,endTime);
		}

		private onReqHitprocal(startTime:string,endTime:string):void
		{
			ViewManager.ins.showWait("loading...");
			BaseHttpRequest.sendRequestGetOnce(Global.baseURL+"GetGameRecord",this.succUpdateHitprocal,this,'token='+  Global.token + '&gametype='+Global.gameID+'&page='+this.page+'&count='+this.count+'&start='+startTime+'&end='+endTime+'&sort=1');
			this.nTime = egret.setTimeout(function():void{
				ViewManager.ins.hideWait();
				if(this.nTime>0){
					egret.clearTimeout(this.nTime);
					this.nTime = 0;
				}
			},this,5000);
		}

		private succUpdateHitprocal(e:egret.Event):void
		{
			ViewManager.ins.hideWait();
			if(this.nTime>0){
				egret.clearTimeout(this.nTime);
				this.nTime = 0;
			}
			var json = e.target.data;
			if(json==""||json==undefined){
				return;
			}
			var jsondata = eval("("+json+")");
			if(jsondata.value!=null && jsondata.value.GameRecords.length != 0){
				this.onShowList(jsondata.value);
				//this.lbNoData.visible = false;
			}else{
				this.onRemoveGroup();
				//this.lbNoData.visible = true;
				this.lbTotalGold.text = 0+"";
				this.lbSubtotal.text = 0+Global.dic["条"];
				this.lbSubtotalGold.text = 0+"";
				this.lbTotal.text = 0+Global.dic["条"];
			}
		}

		//选择日期返回
		private onSelectDate( e:egret.Event ):void
		{
			let odate:Date = e.data.date;
			if( odate == null )
			{
				return;
			}
			if( e.data.time == "start" )
			{
				this.lbStartTime.text = StringUtils.format( odate,"yyyy-MM-dd hh:mm:ss");
				this.startTime = odate;
			}else{
				this.lbEndTime.text = StringUtils.format( odate,"yyyy-MM-dd hh:mm:ss");
				this.endTime = odate;
			}
		}
		//显示list
		private onShowList(data:any):void
		{
			this.onRemoveGroup();
			let subtotalGold:number = 0;
			let len:number = data.GameRecords.length;
			for( let i:number = 0; i < len; i++ )
			{
				var item:HistoryItemUI = new HistoryItemUI();
				this.gItems.addChild(item);
				item.setInfo(data.GameRecords[i]);
				subtotalGold += data.GameRecords[i].Money+data.GameRecords[i].ServiceMoney;
			}
			
			this.lbTotalGold.text = ChipUtils.formatCoin(Number( data.TotalMoney ) + Number( data.TotalService ) );
			this.lbSubtotal.text = len+Global.dic["条"];
			this.lbSubtotalGold.text = ChipUtils.formatCoin(subtotalGold)+"";
			this.lbTotal.text = data.TotalCount+Global.dic["条"];
			this.lbPage.text = this.page+"";
			this.maxPage = Math.ceil( Number( data.TotalCount ) /this.count);
		}

		private onRemoveGroup():void
		{
			while (this.gItems.numChildren>0) {
				let mc = this.gItems.removeChildAt(0);
				mc = null;
			}
		}

		public onClosed():void {
			GDGame.Msg.ins.removeEventListener("SELECT_DATE", this.onSelectDate, this );
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick, this);
			while (this.numChildren>0) {
				let mc = this.removeChildAt(0);
				mc = null;
			}
		}
	}
}