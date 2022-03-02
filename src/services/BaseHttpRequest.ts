class BaseHttpRequest extends egret.EventDispatcher {

    private static _ins:BaseHttpRequest;

    public static get ins():BaseHttpRequest{
         if (BaseHttpRequest._ins == null) {
            BaseHttpRequest._ins = new BaseHttpRequest();
        }

        return BaseHttpRequest._ins;
    }

    /**
     * 请求一次http，返回urload 完成后就失效
     */
    public static sendRequestGetOnce(type:string,succFunction:Function,thisobj:any,params: string = ""):void{
        var urlloader = new egret.URLLoader();
        var urlreq: egret.URLRequest = new egret.URLRequest();
        urlreq.method = egret.URLRequestMethod.GET;
        urlloader.addEventListener(egret.Event.COMPLETE,succFunction,thisobj);
        if(params!=""){
            urlreq.data = new egret.URLVariables(params);
        }
        urlreq.url = type;
        urlloader.load(urlreq);

    }
    /**
         * 发送post请求
         */
        public static sendRequestPost(type: string,succFunction:Function,thisobj:any, params: string = ""): void {
            var loader:egret.URLLoader = new egret.URLLoader();
	        loader.addEventListener(egret.Event.COMPLETE, succFunction, thisobj);
	        var request:egret.URLRequest = new egret.URLRequest(type);
	        request.method = egret.URLRequestMethod.POST;
	        request.data = new egret.URLVariables(params);
	        loader.load(request);
        }

    /**
     * HttpRequest 请求
     */
    public static sendHTTPGetOnce(url:string,succFunction:Function,thisobj:any,params: string = ""):void{
        var urlloader = new egret.HttpRequest();
        urlloader.addEventListener(egret.Event.COMPLETE,succFunction,thisobj);
        urlloader.responseType = egret.HttpResponseType.TEXT;
        urlloader.open(url+"?"+params,egret.HttpMethod.GET);
        console.info("发送请求(get once):"+url);
        console.info("请求参数:"+params);
        urlloader.send();
    }
//--------------------------------------------------------------------------//

    /**
     * 暂时处理消息队列缓存
     */
    private cacheArr:Array<any> = new Array();
    private cacheState:number = 0;//空闲状态是0 ，当发送请求则置为1，直到该请求conpleted或error

    public urlloader: egret.URLLoader;
    
    constructor() {
        super();
        this.urlloader = new egret.URLLoader();
        this.urlloader.addEventListener(egret.Event.COMPLETE, this.onComplete, this);
    }

    /**
     * 发送post请求
     */
    public sendRequestPost(type: string, params: string = ""): void {

        var urlreq: egret.URLRequest = new egret.URLRequest();
        // this.urlloader.dataFormat = egret.URLLoaderDataFormat.VARIABLES;
        urlreq.method = egret.URLRequestMethod.POST;
        urlreq.data = new egret.URLVariables(params);
        urlreq.url = type;
        console.info("发送请求(post):"+urlreq.url+"?"+params);
        if(this.cacheState==0){
            this.cacheState=1;
            this.urlloader.load(urlreq);
        }else{
            this.cacheArr.push(urlreq);
        }

    }

    /**
     * 发送get请求
     */
    public sendRequestGet(type:string,params: string = ""):void{

        var urlreq: egret.URLRequest = new egret.URLRequest();
        // this.urlloader.dataFormat = egret.URLLoaderDataFormat.VARIABLES;
        urlreq.method = egret.URLRequestMethod.GET;
        if(params!=""){
            urlreq.data = new egret.URLVariables(params);
        }

        urlreq.url = type;
        console.info("发送请求(get):"+urlreq.url);
        console.info("请求参数:"+params);
        if(this.cacheState==0){
            this.cacheState=1;
            this.urlloader.load(urlreq);
        }else{
            this.cacheArr.push(urlreq);
        }

    }

    private onComplete(event: egret.Event): void {

        Global.log("接收响应:"+this.urlloader.data);
        // var json =  this.urlloader.data;
        // var jsondata = eval("("+this.urlloader.data+")");
        // var cmd:string = jsondata.cmd;
        // switch (cmd) {
        //     default:
        //         break;
        // }

        //---------------维护缓存
        if(this.cacheArr.length>0){
            egret.setTimeout(this.delayLoadHandler,this,200); 
        }else{
            this.cacheState = 0;
        }

    }

    /**
     * 延迟下一次加载
     */
    private delayLoadHandler():void{
        this.urlloader.load(this.cacheArr.shift());
    }
}
