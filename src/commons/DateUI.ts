class DateUI extends eui.Component{
		//获取当前日期
		private oDate = new Date();
		//获取当年 年
		private year:number; 
		//获取当前 月
		private month:number;
		private day:number;
		private oTitle:eui.Label;
		//日历容器
		private group5:eui.Group;
		private group0:eui.Group;
		private group1:eui.Group;
		private group2:eui.Group;
		private group3:eui.Group;
		private group4:eui.Group;
		//左右时间选项
		private prevM:eui.Label;
		private nextM:eui.Label;
		//外部传进来的时间
		private nowday:number;
		private nowyear:number;
		private nowmonth:number;
		private twoWeekDate:Date;
		private Nowadays:Date;

		private bg:eui.Rect;

		private selectTime:string;
		private lbTitle:eui.Label;
		public constructor() {
			super();
			this.skinName = "resource/eui_skins/DateUISkin.exml";
		}
		protected childrenCreated():void
		{
			super.childrenCreated();
			this.oDate = new Date();
			this.year = this.oDate.getFullYear();
			this.month = this.oDate.getMonth() + 1;
			this.nowday = new Date().getDate();
			this.nowyear = new Date().getFullYear();
			this.nowmonth = new Date().getMonth()+1;

			this.twoWeekDate = new Date(new Date().getTime()-14*24*3600*1000);
			this.Nowadays = new Date(this.twoWeekDate.getTime()+15*24*3600*1000);//+15是因为需要显示自己的加上14天前的时间来表示

			this.showDate(this.year, this.month, this.nowday);
			this.addEventListener( egret.TouchEvent.TOUCH_TAP, this.onClick, this );

			if(Global.language == "en"){
				this.lbTitle.text = "Sun      Mon       Tue       Wed       Thur      Fri       Sat";
				this.lbTitle.size = 26;
			}else{
				this.lbTitle.text = "日        一        二        三        四        五        六";
				this.lbTitle.size = 30;
			}
		}

		private onClick(e:egret.TouchEvent):void
		{
			switch(e.target)
			{
				case this.nextM:
					if( this.nextM.name == "1" )
					{
						this.year+=1;
					}
					this.showDate(this.year, Number(this.nextM.name), this.day );
					break;
				case this.prevM:
					if( this.prevM.name == "12" )
					{
						this.year-=1;
					}
					this.showDate(this.year,Number( this.prevM.name ), this.day );
					break;
				case this.bg:
					this.visible = false;
					break;
				default:
				let lab:eui.Label = e.target;
				if( lab == null || lab == undefined || Number(lab.name) <= 0 )
				{
					return;
				}
				let odate:Date = new Date();
				// odate.setUTCFullYear(this.year);
				// odate.setUTCMonth(this.month-1);
				// odate.setUTCDate(Number( lab.name ) );
				odate.setFullYear(this.year);
				odate.setMonth(this.month-1);
				odate.setDate(Number( lab.name ) );
				if( this.selectTime == "end" )
				{
					odate.setHours(23,59,59,0);
				}else{
					odate.setHours(0,0,0,0);
				}
				GDGame.Msg.ins.dispatchEventWith("SELECT_DATE",false,{date:odate,time:this.selectTime});
				this.visible = false;
				break;
			}

		}

		public onGetDate( date:Date, selectTime:string ):void
		{
			this.visible = true;
			this.selectTime = selectTime;
			this.nowday = date.getDate();
			this.nowmonth = date.getMonth()+1;
			this.nowyear = date.getFullYear();
			this.showDate( this.nowyear, this.nowmonth, this.nowday);
		}

		private showDate(year, month, day):void
		{
			if( year == undefined ||  month == undefined ||  year <= 0 || month <= 0 )
			{
				return;
			}
			
			this.removGroup();
			this.year = year;
			this.month = month;
			this.day = day;
			var prevM:number = month - 1;
			var nextM:number = month + 1;
			
			//当月份为1时 上一个月为12
			if (month == 1) {
				prevM = 12;
			}//当月份为12时 下一个月为1
			else if (month == 12) {
				nextM = 1;
			}
			this.oTitle.text = year+'   '+month + '   ';

			this.prevM.text = "←"+prevM+'';
			this.prevM.name = prevM+"";
			this.nextM.text = nextM+''+"→";
			this.nextM.name = nextM+'';

			//先获得当期月 有多少天
			var dayNum = 0;
			if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
				dayNum = 31;
			} else if (month == 4 || month == 6 || month == 9 || month == 11) {
				dayNum = 30;
			} else if (month == 2 && this.isLeapYear(year)) {
				dayNum = 29;
			} else {
				dayNum = 28;
			}

			//获得 1号对应的是星期几
			//将当月1号赋值给日期变量
			this.oDate.setFullYear( year );
			//注 js日期的月份是从0 开始计
			this.oDate.setMonth( month - 1 );
			this.oDate.setDate( 1 );

			//计算1号在第一行日期容器中的位置，依次给日期容器填充内容
			//注 js中 getDay方法是获取当前日期是星期几
			var week = this.oDate.getDay();
			for( var i = 0; i < week; i++ )
			{
				var g:eui.Group = new eui.Group();
				g.width = 50;
				g.height = 30;
				this.group0.addChild(g);
			}

			let dateDay:Date = new Date();
			dateDay.setMonth(month-1);
			dateDay.setFullYear(year);
			for (var i = 0; i < dayNum; i++) {
				let g:eui.Group = new eui.Group();
				g.width = 50;
				g.height = 30;
				let lab:eui.Label = new eui.Label();
				lab.width = 50;
				lab.text = (i + 1)+"";
				lab.textAlign = egret.HorizontalAlign.CENTER;
				lab.name = (i+1)+'';
				g.addChild(lab);
				this["group"+ Math.floor(week/7) ].addChild(g);

				dateDay.setDate( ( i + 1 ) );
				if( dateDay.getTime() >= this.twoWeekDate.getTime() && dateDay.getTime() <= this.Nowadays.getTime() )
				{
					lab.touchEnabled = true;
				}else{
					lab.background = true;
					lab.backgroundColor = 0xA9A9A9;
					lab.touchEnabled = false;
				}
				
				if( year == this.nowyear && month == this.nowmonth && i == ( this.nowday - 1 ) )
				{
					lab.background = true;
					lab.backgroundColor = 0xDC143C;
				}
				week++;
			}
			if(week <= 35)//最后行空
			{
				
			}
		}

		//判断是否是闰年
		private isLeapYear(year) {
			if (year % 100 == 0 && year % 400 == 0) {
				return true;
			} else if (year % 100 != 0 && year % 4 == 0) {
				return true;
			} else {
				return false;
			}
		}

		private removGroup():void
		{
			for( var i:number = 0; i < 6; i++ )
			{
				while (this["group"+i].numChildren>0) {
					let mc = this["group"+i].removeChildAt(0);
					mc = null;
				}
			}
		}

		public onClosed():void {
			this.removeEventListener( egret.TouchEvent.TOUCH_TAP, this.onClick, this );
			this.removGroup();
			while (this.numChildren>0) {
				let mc = this.removeChildAt(0);
				mc = null;
			}
		}

	}