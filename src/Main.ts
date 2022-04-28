//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            //egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            //egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadUserinfo();
    
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    }
    private onResourceLoadError(event:RES.ResourceEvent):void {
        console.warn("Group:" + event.groupName + " has failed to load");
        this.onResourceLoadComplete(event);
    }
    private onItemLoadError(event:RES.ResourceEvent):void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }
    private domain:string;
    private async loadUserinfo(){
        this.domain = window.location.host;
        if(DEBUG){
            this.domain = 'ts12316.com'
        }
        Global.token = egret.getOption("token");

        /*this.domain = "ts0068.com";
        if(Global.token == ""){
            Global.token = "10_baoxue004";
        }
        Global.isShowLog = true;*/

        //Global.isDeal = true;
        
        let baseURL:string = "https://"+this.domain+"/clientapi/API/GetUserInfo";
        Global.setLanguage(1);
        BaseHttpRequest.sendRequestGetOnce(baseURL,this.getLanguageSet,this,"token="+Global.token);
    }
    private async getLanguageSet(evt:egret.Event){
        var json = evt.target.data;
        var jsondata = eval("("+json+")");
        if(jsondata.state == 0){
            Global.setLanguage(jsondata.value.language);
            Global.showName = jsondata.value.nickname;
            Global.channel = jsondata.value.channel;
            if(isNaN(Number(jsondata.value.icon)) == false){
                Global.userHead = Number(jsondata.value.icon);
                if(Global.userHead <= 0 || Global.userHead > 15){
                    Global.userHead = 1;
                }
            }
            Global.isShowCoin = jsondata.value.coinshowtype == 1 ? true : false;
            Global.exchange = jsondata.value.exchangerate;
            Global.isSound = jsondata.value.sound == 1 ? true : false;
            sound.SoundManager.getInstance().setBgOn(Global.isSound);
            sound.SoundManager.getInstance().setEffectOn(Global.isSound);
        }
        await this.loadResource();
        this.createGameScene();

        RES.loadGroup("game_"+Global.language);
    }
    
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        switch (event.groupName ) {
            case "game_cn":
            case "game_en":
            case "game_tc":
                Global.isGameLoad = true;
                GDGame.Msg.ins.dispatchEvent(new egret.Event("OnGameResLoad"));
                break;
        }
    }
    private loadingView:LoadingUI;
    private async loadResource() {
        egret.ImageLoader.crossOrigin = "anonymous";
        try {
            RES.getVirtualUrl = function(url:string):string { return  url+"?ver=xlch_1.2.1.7" };

            await RES.loadConfig("resource/default.res.json", "resource/");

            await this.loadTheme();
            await RES.loadGroup("preload");
           
            
            Global.loadTime = Date.now();
            this.loadingView = new LoadingUI();
            this.stage.addChild(this.loadingView);
            this.loadingView.initView();
  
            try{
                window["onLoadComplete"]();
            }catch(e){}
            await RES.loadGroup("room", 0, this.loadingView);
            
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private loadConfig():void{
        
       
        //是否显示返回游戏大厅按钮
        if(egret.getOption("showHall") == "1" && egret.Capabilities.isMobile){//在移动设备上
            Global.isShowHall = true;
        }else if(egret.getOption("showHall") == "2"){
            Global.isShowHall = true;
        }

         if(egret.getOption("showlog") == "true"){
            Global.isShowLog = true;
        }

        Global.baseURL = "https://"+this.domain+"/clientapi/API/";
        Global.gameHallURL = "https://"+this.domain+"/gamehall/index.html";
        Global.commURL = "https://"+this.domain+"/public/";
        
        BaseHttpRequest.sendRequestGetOnce(Global.baseURL+"GetSocket", this.onGetSocketIP, this, "token="+Global.token);
    }
    private onGetSocketIP(evt:egret.Event):void{
        var json = evt.target.data;
        if (json == "") {
            return;
        }
        var jsondata = eval("(" + json + ")");
        if(jsondata.state == 0){
            Global.arrSocket = jsondata.value;
            this.onCheckGameStatus();
            BaseHttpRequest.sendRequestGetOnce(Global.baseURL+"GetUserInfo", this.onGetUserInfo, this, "token="+Global.token);
        }else{
            ViewManager.ins.showAlert(Global.dic["失去链接"]);
        }
    }
    protected createGameScene(): void {
       
        Global.loadTime = Date.now() - Global.loadTime;
        this.stage.removeChild(this.loadingView);
        this.loadingView.removeLoading();
        this.loadingView = null;
        
        this.loadConfig();

        this.stage.addChild(ViewManager.ins);
        ViewManager.ins.switchToRoom();
 
        //通知消息
        this.stage.addChild(MessageUI.ins);
        MessageUI.ins.x = (GameConfig.curWidth()-1173)/2;

        //当前页面是否在活动状态
        this.stage.addEventListener(egret.Event.ACTIVATE,this.onActivate,this);
        this.stage.addEventListener(egret.Event.DEACTIVATE,this.onDeActivate,this);
        this.stage.addEventListener(egret.Event.RESIZE,this.onStageResize,this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStageClick,this);

        /*加载活动资源*/
        try {
            window["loadingActivityGame"](Global.token,Global.gameID,1);
        } catch (error) {}
    }
    private onStageResize():void{
        ViewManager.ins.onResize();
    }
    private isTimeout:boolean = false;
    private onCheckGameStatus():void{
        //检查游戏ip，5秒后不管返回，强制进入游戏
        BaseHttpRequest.sendRequestGetOnce(Global.baseURL+"ResetUser", function(e:egret.Event){
            var json = e.target.data;
            if (json == "") {
                return;
            }
            
            var jsondata = eval("(" + json + ")");
            console.log(jsondata,'---jsondata');
            if(jsondata.state == 0){
                this.isTimeout=true;
                this.connectServer();
            }else if(jsondata.state == 642){
                this.isTimeout=true;
                ViewManager.ins.hideWait();
                ViewManager.ins.showAlert(Global.dic["游戏中"], function () {
                    window.location.href = location.href;
                });
            }else{
                if( this.isTimeout == false ){
                    this.connectServer();
                }
                this.isTimeout=true;
            }
        }, this, "token="+Global.token+"&gametype="+Global.gameID);
        
        egret.setTimeout(function(){
            if( this.isTimeout==false ){
               this.connectServer();
            }
            this.isTimeout=true;
        },this,5000);
    }
    private connectServer():void{
       if(Global.token == ""){
            ViewManager.ins.showAlert(Global.dic["账号不存在"],function(){
                window.location.href = location.href;
            });
            return ;
        }
        room.RoomWebSocket.instance().connectServer();
        ViewManager.ins.showWait("loading...");
    }
    private onGetUserInfo(evt:egret.Event):void{
        var json = evt.target.data;
        if (json == "") {
            return;
        }
        var jsondata = eval("(" + json + ")");
        if(jsondata.state == 0){
            Global.showName = jsondata.value.nickname;
            if(isNaN(Number(jsondata.value.icon)) == false){
                Global.userHead = Number(jsondata.value.icon);
                if(Global.userHead <= 0 || Global.userHead > 15){
                    Global.userHead = 1;
                }
            }
            
            Global.isShowCoin = jsondata.value.coinshowtype == 1 ? true : false;
            Global.exchange = jsondata.value.exchangerate;
        }
    }
    private onEnterFrame(evt:egret.Event):void{
        Global.nTimerCount = egret.getTimer();
    }
    private onActivate():void{
        Global.isWebActive = true;
        //重新进入游戏
        if(!Global.isOpenActive){
            sound.SoundManager.getInstance().setBgOn(Global.isSound);
            sound.SoundManager.getInstance().setEffectOn(Global.isSound);
        }
        if(this.stage.hasEventListener(egret.Event.ENTER_FRAME)){
            this.stage.removeEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
        }
    }
    /*当前页面不再活动状态*/
    private onDeActivate():void{
        Global.isWebActive = false;
        Global.nTimerCount = egret.getTimer();
        
        this.stage.addEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
        sound.SoundManager.getInstance().setBgOn(false);
        sound.SoundManager.getInstance().setEffectOn(false);
        GDGame.Msg.ins.dispatchEvent(new egret.Event("changeWebActivate"));
    }
    private onStageClick():void{
        sound.SoundManager.getInstance().playBg("mjBgm_mp3");
        sound.SoundManager.getInstance().setBgOn(Global.isSound);
        sound.SoundManager.getInstance().setEffectOn(Global.isSound);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onStageClick,this);
    }
    public static activeToGame(type:number):void{
        if(type == 1){//活动加载完，显示相关按钮
            Global.isActiveLoad = true;
            GDGame.Msg.ins.dispatchEvent(new egret.Event("isShowActive"));
        }
        if(type == 2){//活动关闭 播放游戏声音等操作
            Global.isOpenActive = false;
            sound.SoundManager.getInstance().setBgOn(Global.isSound);
            sound.SoundManager.getInstance().setEffectOn(Global.isSound);
            Global.getUserCoin();
        }
        
    }
}
