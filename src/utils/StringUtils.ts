
/**
 *
 * @author 熊
 *
 */
 class StringUtils {
        public static toLowerCase(src:string):string {
                return src.toLowerCase();
            }
            public static toUpperCase(src: string):string {
                return src.toUpperCase();
            }
            public static isString(arg): boolean {
                return Object.prototype.toString.call(arg) === "[object String]";
            }
            public static isNullOrEmpty(arg): boolean {
                return arg === null || arg === undefined || arg === '';
            } 
            public static toDate(arg) {
                if(StringUtils.isNullOrEmpty(arg)) 
                    return new Date();
                return new Date(Date.parse(arg.replace(/-/g,"/")));
            }
            public static trim(str):string { 
                if(StringUtils.isNullOrEmpty(str)) return str;
                return str.replace(/(^\s*)|(\s*$)/g,"");
            }
        
            
            /**
             * @language zh_CN
             * @param milliSeconds {number} 时间 单位秒
             * @param showHourString {boolean} 是否显示小时 可选  
             * 毫秒 转换成字符串类型
             */
            public static timeToString(milliSeconds: number,showHourString?:boolean) {
                milliSeconds = .001 * milliSeconds; //转换成秒为单位
                if(showHourString == null) {
                    showHourString = milliSeconds >= 3600;
                } 
                var hour = Math.floor(milliSeconds / 3600),
                    minutes = Math.floor((milliSeconds - 3600 * hour) / 60),
                    seconds = Math.floor(milliSeconds - 3600 * hour - 60 * minutes),
                    timeString = "";
                //时
                if(showHourString) { 
                    timeString += (hour > 9 ? hour : "0" + hour) + ":";
                }
                //分
                timeString += (minutes > 9 ? minutes : "0" + minutes) + ":";
                //秒
                timeString += seconds > 9 ? seconds : "0" + seconds;
                return timeString;
            }
            //添加自动换行符
            public static addWarp(str: string,lineW: number):string {
                if(!this.isString(str) || this.isNullOrEmpty(str)) {
                    return str;
                }
                var returnValue = "";
                var lines = str.split('\n');
                for(var j = 0,an = lines.length;j < an;j++) {
                    str = lines[j];
                    var byteValLen = 0;
                    var lastIndex = 0;
                    var len  = str.length;
                    for(var i = 0;i < len;i++) {
                        if(str[i].match(/[^\x00-\xff]/ig) != null)
                            byteValLen += 2;
                        else
                            byteValLen += 1;
                        if(byteValLen >= lineW){
                            returnValue += str.substr(lastIndex,i - lastIndex) +'\n';
                            byteValLen = 0;
                            lastIndex = i;
                        }
                    }
                    if(lastIndex < len-1) {
                        returnValue += str.substr(lastIndex) + '\n';
                    }
                }
                return returnValue.substr(0,returnValue.length - 1);
            }
            public static convertImgURLTo64(str:string): string {
                return str.replace("/0","/64");
            }
            public static decodeName(str:string): string {
                var t = "游戏玩家";
                if(!this.isNullOrEmpty(str) && this.isString(str)) {
                    try {
                        t = decodeURIComponent(str)
                    } catch(i) {
                        t = "游戏玩家"
                    }
                }
                t = t.replace(new RegExp("/( )/g"),"");
                return t || "游戏玩家";
            }
            
            //前面自动填充0 保持长度是len的字符串
            public static unshiftZero(num: number,len: number): string {
                for(var i = num.toString();i.length < len;)
                i = "0" + i;
                return i;
            } 
            
            public static endWith(str: string,subStr:string): boolean {
                if(this.isNullOrEmpty(str) || this.isNullOrEmpty(subStr) || subStr.length > str.length)
                    return false;
                if(str.substring(str.length - subStr.length) == subStr)
                    return true;
                else
                    return false;
            }

            /**
             * 返回字符串长度
             */
            public static getLength(str:string):number{
                ///<summary>获得字符串实际长度，中文2，英文1</summary>
                ///<param name="str">要获得长度的字符串</param>
                var realLength = 0, len = str.length, charCode = -1;
                for (var i = 0; i < len; i++) {
                    charCode = str.charCodeAt(i);
                    if (charCode >= 0 && charCode <= 128) 
                    realLength += 1;
                    else
                    realLength += 2;
                }
                return realLength;
            }

            /**
             * @public
             * @function external:Date#format
             * @author qingyangmoke@qq.com
             * @description 对Date的扩展，将 Date 转化为指定格式的String
             * @param {String} fmt  - 要进行的格式化.
             * @returns {String}
             * @example
             * (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
             * (new Date()).format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
             * (new Date()).format("yyyy.MM月dd日")      ==> 2015.07月02日
             */
            public static format(date: Date,fmt: string):string {
                var o = {
                    "M+": date.getMonth() + 1, //月份
                    "d+": date.getDate(), //日
                    "h+": date.getHours(), //小时
                    "m+": date.getMinutes(), //分
                    "s+": date.getSeconds(), //秒
                    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                    "S": date.getMilliseconds() //毫秒
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
    }
