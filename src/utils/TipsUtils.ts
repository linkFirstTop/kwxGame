  /**
	* tips特效汇总
	* by zhaoxin
	* (c) copyright 2014 - 2035
	* All Rights Reserved. 
	* TipsUtils.showTipsDownToUp()
    */

module TipsUtils {

        //全局字体颜色表--可以扩展
    export var TextColors = {
        white:0xFFFFFF,//白色
        milkWhite:0xfbf1af,//乳白色 
        grayWhite:0xceb6a2,//灰白色
        yellow:0xffff00,//金黄色 
        lightYellow:0xffd375,//淡黄色
        orangeYellow:0xff9900,//橘黄色//道具名称 //玩家姓名
        red:0xf11300,//红色
        green:0x00e500,//绿色 
        blue:0x1a94d7,//蓝色 
        grayBlue:0x2f5177,//墨蓝色 
        purple:0xe938f2,//紫色 
        pink:0xFF3030,//粉色 
        black:0x2e2d2d,//黑色
        golden:0xFFD700 //金色
    }

    export var topLayer;
    

    //从下到上弹出
    export function showTipsDownToUp(str:string = "",isWarning:boolean = false):void{
        var effectTips = new egret.TextField();

        effectTips.size = 36;
        effectTips.y = GameConfig.curHeight()/2;
        effectTips.textColor = TextColors.white;
        effectTips.alpha = 0;
        
        effectTips.text = str;
        //effectTips.strokeColor = 0x000000;
        effectTips.x = GameConfig.curWidth()/2 - effectTips.width/2;        
        //effectTips.stroke  = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;

        if(!topLayer.contains(effectTips)){
            topLayer.addChild( effectTips );
        }        

        var onComplete2:Function = function(){
            if(topLayer.contains(effectTips)){
                topLayer.removeChild( effectTips );
                effectTips = null;
            }
        };
        var onComplete1:Function = function(){
            egret.Tween.get(effectTips).to({alpha:0},500).call(onComplete2,this);   
        };
        effectTips.visible = true;
        egret.Tween.get(effectTips).to({y:effectTips.y - 120,alpha:1},800,egret.Ease.backOut).wait(1000).call(onComplete1,this);   
    }    

    //从左至右 或者 从右至左
    export function showTipsLeftOrRight(str:string = "",isWarning:boolean = false,isFromeLeft:boolean = true):void{
        var effectTips = new egret.TextField();

        effectTips.size = 24;
        effectTips.y = GameConfig.curHeight()/2;
        if(isWarning){
            effectTips.textColor = TextColors.red;
        }else{
            effectTips.textColor = TextColors.green;
        }
        effectTips.alpha = 0;
        
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        if(isFromeLeft){
            effectTips.x = - effectTips.width;        
        }else{
            effectTips.x = GameConfig.curWidth();        
        }
        effectTips.stroke  = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;

        if(!topLayer.contains(effectTips)){
            topLayer.addChild( effectTips );
        }        

        if(isFromeLeft){
            egret.Tween.get(effectTips).to({x:GameConfig.curWidth()/2 - effectTips.width/2 - 50,alpha:1},300,egret.Ease.sineInOut);   
        }else{
            egret.Tween.get(effectTips).to({x:GameConfig.curWidth()/2 - effectTips.width/2 + 50,alpha:1},300,egret.Ease.sineInOut);   
        }

        egret.setTimeout(function () {
            if(isFromeLeft){
                egret.Tween.get(effectTips).to({x:effectTips.x + 100},500);  
            }else{
                egret.Tween.get(effectTips).to({x:effectTips.x - 100},500);   
            }
        }, this, 300);  

        egret.setTimeout(function () {
            if(isFromeLeft){
                egret.Tween.get(effectTips).to({x:GameConfig.curWidth()},300,egret.Ease.sineIn);    
            }else{
                egret.Tween.get(effectTips).to({x:-effectTips.width},300,egret.Ease.sineIn);    
            }
        }, this, 800);  

        egret.setTimeout(function () {
            if(topLayer.contains(effectTips)){
                topLayer.removeChild( effectTips );
                effectTips = null;
            }
        }, this, 1100);     

    }  

    //从里到外
    export function showTipsFromCenter(str:string = "",isWarning:boolean=false):void{
        var spr:egret.Sprite = new egret.Sprite();
        var effectTips = new egret.TextField();
        effectTips.size = 42; 
        effectTips.fontFamily = "微软雅黑";
        effectTips.textColor = TextColors.golden;
        effectTips.strokeColor = 0x000000;    
        effectTips.stroke  = 2;
        effectTips.text = str;
   
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        spr.addChild(effectTips);

        spr.x = GameConfig.curWidth()/2;
        spr.y = GameConfig.curHeight()/2;
        spr.anchorOffsetX = spr.width/2;
        spr.anchorOffsetY = spr.height/2;
        spr.scaleX = 0;
        spr.scaleY = 0;

        if(!topLayer.contains(spr)){
            topLayer.addChild( spr );
        }

        var onComplete2:Function = function(){
            if(topLayer.contains(spr)){
                topLayer.removeChild( spr );
                spr = null;
            }
        };
        egret.Tween.get(spr).to({scaleX:1,scaleY:1,alpha:1},200); 
        egret.setTimeout(function () {
            egret.Tween.get(spr).to({alpha:0},500).call(onComplete2,this);   
        }, this, 1000);   

    }    

    //从外到里
    export function showTipsBigToSmall(str:string = "",isWarning:boolean = false):void{
        var effectTips = new egret.TextField();

        effectTips.size = 24;
        effectTips.y = GameConfig.curHeight()/2;
        if(isWarning){
            effectTips.textColor = TextColors.red;
        }else{
            effectTips.textColor = TextColors.green;
        }
        effectTips.alpha = 0;
        
        effectTips.text = str;
        effectTips.strokeColor = 0x000000;
        effectTips.x = GameConfig.curWidth()/2;        
        effectTips.stroke  = 2;
        effectTips.bold = true;
        effectTips.textAlign = egret.HorizontalAlign.CENTER;
        effectTips.anchorOffsetX = effectTips.width/2;
        effectTips.anchorOffsetY = effectTips.height/2;
        effectTips.scaleX = 4;
        effectTips.scaleY = 4;

        if(!topLayer.contains(effectTips)){
            topLayer.addChild( effectTips );
        }        

        var onComplete2:Function = function(){
            if(topLayer.contains(effectTips)){
                topLayer.removeChild( effectTips );
                effectTips = null;
            }
        };
        egret.Tween.get(effectTips).to({scaleX:1,scaleY:1,alpha:1},200); 
        egret.setTimeout(function () {
            egret.Tween.get(effectTips).to({alpha:0},500).call(onComplete2,this);   
        }, this, 1000);   

    }    

}