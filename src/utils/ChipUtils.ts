class ChipUtils {
	public constructor() {
	}

	private static  NUM_CN:Array<string> = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
		
		private static  DECIMAL_UNITS:Array<string> = ["角", "分"];
		
		private static  LEVELS:Array<string> = ["", "万", "亿", "兆"];
		
		private static  UNITS:Array<string> = ["千", "百", "拾"];
		
		/**
		 * 把number64转换成中文大写单位，如：X亿X万，截止到万位
		 * @param number64 64位数字
		 * @return 中文大写
		 */
		public static  tonumber64Upper(number64:number):string
		{
			return String(number64);
		}
		public static formatCoin(tmp:number,isK:boolean = false):string{
           let str:string = "";
			let coin:number = 0;
			if(Global.isShowCoin){//显示金币
				//coin = tmp;
				// Error
				//临时改动 都显示 人民币

				coin = Number((tmp/Global.exchange).toFixed(2))
			}else{//显示人民币
				coin = Number((tmp/Global.exchange).toFixed(2))
			}
			if(isK && Global.exchange < 0.1){
				if(coin >= 0){
					str = Math.floor(coin/1000) + "K";
				}else{
					str = "-" + Math.floor(-coin/1000) + "K";
				}
				
			}else{
				if( coin >= 0 ){
					str = ChipUtils.fmoney( coin,3,2,true );
				}else{
					str =	"-" + ChipUtils.fmoney(-coin,3,2,true );
				}
			}
            return str;
        }
		public static fmoney(s,dw, n,isShow): string {
			if( isNaN( s ) )
			{
				return s;
			}
			undefined
            n = n > 0 && n <= 20 ? n : 2;
            s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n)+ "";
            let l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
            let t = "";
            for (let i = 0; i < l.length; i++) {
                t += l[i] + ((i + 1) % dw == 0 && (i + 1) != l.length ? "," : "");
            }
            if(isShow)
            {
                if(r=="0" || r=="00")
               {
                     return t.split("").reverse().join("");
               }else
               {
                   let temp_a = "";
                   if(r.length ==2)
                   {
                        if(r.charAt(1) == "0")
                        {
                            temp_a = r.substr(0,1);
                        }else
                        {
                            temp_a = r.substr(0,2);
                        }
                       return t.split("").reverse().join("") + "." + temp_a;
                   }
                   return t.split("").reverse().join("") + "." + r;
               }
            }else
            {
                return t.split("").reverse().join("");//+ "." + r;  省略小数点
            }
             
     }
		/**
		 * 把阿拉伯数字单位转换成中文大写单位，如：X亿X万，截止到万位
		 * @param num 阿拉伯数字
		 * @return 中文大写
		 */
		public static  toNumUpper(num:number):string
		{
			if(num == undefined){
				return "";
			}
			if (num < 10000) //100000
			{
				return num.toString();
			}
			
			var less:number = num;
			var m:string = (Math.floor(less / 1000000000000) > 0) ? Math.floor(Number(less / 1000000000000)) + "兆" : "";
			less = num % 1000000000000;
			var e:string = (Math.floor(less / 100000000) > 0) ? Math.floor(Number(less / 100000000)) + "亿" : "";
			less = less % 100000000;
			var w:string = (Math.floor(less / 10000) > 0) ? Math.floor(Number(less / 10000)) + "万" : "";
			
			less = less % 10000;
			var k:string = (Math.floor(less / 1000) > 0) ? Math.floor(Number(less / 1000)) + "" : "0";
			less = less % 1000;
			var b:string = (Math.floor(less / 100) > 0) ? Math.floor(Number(less / 100)) + "" : "0";
			less = less % 100;
			var s:string = (Math.floor(less / 10) > 0) ? Math.floor(Number(less / 10)) + "" : "0";
			less = less%10;
			var g:string = (Math.floor(less) > 0) ? String(less) : "0";
						
			var f:string = "";
			
			if(k!="0"||b!="0"||s!="0"||g!="0")
			{
				f = k + b + s + g;
			}else
			{
				f = "";
			}
			
			return (m + e + w + f == "") ? "0" : m + e + w + f;
		}
		
		/**
		 * 把阿拉伯数字单位转换成中文大写，如：一二三
		 * @param num 阿拉伯数字
		 * @return 中文大写
		 */
		public static  toCNUpper(num:number):string
		{
			if (num == 0)
			{
				return ChipUtils.NUM_CN[0];
			}
			
			var count:number = ChipUtils.getUnitCount(num);
			var numStr:string = num.toFixed(2);
			var pos:number = numStr.indexOf(".");
			var dotLeft:string = pos == -1 ? numStr : numStr.substring(0, pos);
			var dotRight:string = pos == -1 ? "" : numStr.substring(pos + 1, numStr.length);
			
			if (dotLeft.length > 16)
			{
				throw new Error("数字太大，无法处理！");
			}
			
			var cnMoney:string = ChipUtils.convertnumberegerStr(dotLeft) + ChipUtils.convertDecimalStr(dotRight);
			return cnMoney;
		}
		
		/**
		 * 把数字中的整数部分进行转换
		 * @param str
		 * @return
		 */
		private static  convertnumberegerStr(str:string):string
		{
			var tCount:number = Math.floor(str.length / 4);
			var rCount:number = str.length % 4;
			var nodes:Array<ThousandNode> = [];
			
			if (rCount > 0)
			{
				nodes.push(ChipUtils.convertThousand(str.substr(0, rCount), tCount));
			}
			
			for (var i:number = 0; i < tCount; i++)
			{
				var startIndex:number = rCount + i * 4;
				var num:string = str.substring(startIndex, startIndex + 4);
				nodes.push(ChipUtils.convertThousand(num, tCount - i - 1));
			}
			return ChipUtils.convertNodes(nodes);
		}
		
		private static  convertNodes(nodes:Array<ThousandNode>):string
		{
			var str:string = "";
			var beforeZero:Boolean;
			
			for (var i:number = 0; i < nodes.length; i++)
			{
				var node:ThousandNode = nodes[i] as ThousandNode;
				
				if ((beforeZero && node.desc.length > 0) || (node.beforeZero && node.desc.length > 0 && str.length > 0))
				{
					str += ChipUtils.NUM_CN[0];
				}
				
				str += node.desc;
				
				if (node.afterZero && i < nodes.length - 1)
				{
					beforeZero = true;
				}
				else if (node.desc.length > 0)
				{
					beforeZero = false;
				}
			}
			
			return str;
		}
		
		/**
		 * 对四位数进行处理，不够自动补起
		 * @param num
		 * @param level
		 * @return
		 */
		private static  convertThousand(num:string, level:number):ThousandNode
		{
			var node:ThousandNode = new ThousandNode();
			var len:number = num.length;
			
			for (var i:number = 0; i < 4 - len; i++)
			{
				num = "0" + num;
			}
			
			var n1:number = Number(num.charAt(0));
			var n2:number = Number(num.charAt(1));
			var n3:number = Number(num.charAt(2));
			var n4:number = Number(num.charAt(3));
			
			if (n1 + n2 + n3 + n4 == 0)
			{
				return node;
			}
			
			if (n1 == 0)
			{
				node.beforeZero = true;
			}
			else
			{
				node.desc += ChipUtils.NUM_CN[n1] + ChipUtils.UNITS[0];
			}
			
			if (n2 == 0 && node.desc != "" && n3 + n4 > 0)
			{
				node.desc += ChipUtils.NUM_CN[0];
			}
			else if (n2 > 0)
			{
				node.desc += ChipUtils.NUM_CN[n2] + ChipUtils.UNITS[1];
			}
			
			if (n3 == 0 && node.desc != "" && n4 > 0)
			{
				node.desc += ChipUtils.NUM_CN[0];
			}
			else if (n3 > 0)
			{
				node.desc += ChipUtils.NUM_CN[n3] + ChipUtils.UNITS[2];
			}
			
			if (n4 == 0)
			{
				node.afterZero = true;
			}
			else if (n4 > 0)
			{
				node.desc += ChipUtils.NUM_CN[n4];
			}
			
			if (node.desc.length > 0)
			{
				node.desc += ChipUtils.LEVELS[level];
			}
			return node;
		}
		
		/**
		 * 把数字中的小数部分进行转换
		 * @param str
		 * @return
		 */
		private static  convertDecimalStr(str:string):string
		{
			var newStr:string = "";
			
			for (var i:number = 0; i < str.length; i++)
			{
				var n:number = Number(str.charAt(i));
				
				if (n > 0)
				{
					newStr += ChipUtils.NUM_CN[n] + ChipUtils.DECIMAL_UNITS[i];
				}
			}
			return newStr;
		}
		
		/**
		 * 用数据方法得到数字整数部分长度
		 * @param num
		 * @return
		 */
		private static  getUnitCount(num:number):number
		{
			return Math.ceil(Math.log(num) / Math.LN10);
		}
	
}



class ThousandNode
{
	public  beforeZero:boolean;
	
	public  afterZero:boolean;
	
	public  desc:string = "";
}