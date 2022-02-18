module game {
	export class GameWebSocket {
		private static ins: game.GameWebSocket;
		public gameSender:game.GameSocketSender;
		private gameReceive:game.GameSocketReceive;
		private webSocket: egret.WebSocket;
		private isConnected: boolean = false;//是否已经连接
		private interval:number;				//心跳延迟
		private intervalConnect:number;			//重连服务器延迟
		private strRoomIP:string = "";
		public static instance(): game.GameWebSocket{
			if(game.GameWebSocket.ins != null) {
				
			}else{
				game.GameWebSocket.ins = new game.GameWebSocket();
			}
			return game.GameWebSocket.ins;
		}
		public constructor() {
			this.webSocket = new egret.WebSocket();
			this.webSocket.type = egret.WebSocket.TYPE_BINARY;
			this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA,this.onReceiveMessage,this);
			this.webSocket.addEventListener(egret.Event.CONNECT,this.onSocketOpen,this);
			this.webSocket.addEventListener(egret.Event.CLOSE,this.onSocketClose,this);
			this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR,this.onSocketError,this);
			
			this.gameSender = new game.GameSocketSender();
			this.gameReceive = new game.GameSocketReceive();
		}
		public connectServer():void{
			if (this.isConnected) {
				return;
			}
			if (this.webSocket == null) {
				this.webSocket = new egret.WebSocket();
				this.webSocket.type = egret.WebSocket.TYPE_BINARY;
				this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
				this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
				this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
				this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
			}
			this.connectSocket();
		}
		public connectSocket():void{
			if(!this.isConnected){
				Global.log("链接游戏服务");
				this.strRoomIP = Global.arrSocket[Global.nCurrentSocket];
				this.webSocket.connectByUrl(this.strRoomIP+"/gametype"+Global.gameID+"/game");
			}
		}
		public onSocketOpen(): void {
			this.isConnected = true;
			Global.log("game connect socket success");
			this.startHeart();
			this.gameSender.ReqEnterGameFun();
		}
		
		//发送消息
		public SendMeseage(messageid:number,obj:any): void
		{
			if(this.webSocket && this.webSocket.connected == false){
				return ;
			}
			//var bytes = obj.toArrayBuffer();
			var bytes = obj;
			//计算长度
			var bodyBytes: egret.ByteArray = new egret.ByteArray(bytes);
			var len = bodyBytes.length;
			var sendMsg: egret.ByteArray = new egret.ByteArray();
			sendMsg.endian = egret.Endian.LITTLE_ENDIAN;
			sendMsg.writeInt(messageid);
			sendMsg.writeInt(len);
			sendMsg.writeInt(0);
			sendMsg.writeBytes(bodyBytes);
			sendMsg.position = 0;
			if(this.webSocket){
				this.webSocket.writeBytes(sendMsg,0,sendMsg.bytesAvailable); 
			}
		}
		public onReceiveMessage(e: egret.Event): void {
			var sendMsg: egret.ByteArray = new egret.ByteArray();
			sendMsg.endian = egret.Endian.LITTLE_ENDIAN;
			this.webSocket.readBytes(sendMsg);
			var msgID = sendMsg.readInt();
			var len = sendMsg.readInt();
			var type = sendMsg.readInt();
			if(sendMsg.bytesAvailable >= len) {
				var bytes: egret.ByteArray = new egret.ByteArray();
				sendMsg.readBytes(bytes,0,len);
				this.gameReceive.initHandlers(msgID,bytes);
			} 
		}
		/**
		 * 服务器断开连接
		 */
		public onSocketClose(): void {
			Global.log("game server disconnect ="+this.isConnected);
			if(this.isConnected){
				this.isConnected = false;
				egret.clearTimeout(this.interval);	//不再发送心跳
				ViewManager.ins.showAlert(Global.dic["失去链接"],function(){
					window.location.href = location.href;
				});
			}
		}
		public reconnectionSever():void{
			this.clearSocket();
			this.connectServer();
		}

		private closeSocket():void
		{
			egret.clearTimeout(this.interval);	//不再发送心跳
			if(this.webSocket){
				this.webSocket.close();
				Global.log("game socket主动关闭");
			}
		}

		public clearSocket():void
		{
			console.log("game主动断开socket");
			egret.clearTimeout(this.interval);	//不再发送心跳
			if(this.webSocket){
				this.webSocket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
				this.webSocket.removeEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
				this.webSocket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
				this.webSocket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
				this.webSocket.close();
				this.isConnected = false;
				this.webSocket = null;	
			}
		}
		/**
		 * 服务器连接错误
		 */
		public onSocketError(): void {
			this.isConnected = false;
			egret.clearTimeout(this.interval);	//不再发送心跳
			if(Global.nCurrentSocket < Global.arrSocket.length){
				Global.nCurrentSocket += 1;
			}
			if(Global.nCurrentSocket == Global.arrSocket.length){
				Global.nCurrentSocket = 0
				ViewManager.ins.showAlert(Global.dic["失去链接"],function(){
					window.location.href = location.href;
				});
				return 
			}
			this.connectServer();
		}
		/**
		 * 发送心跳
		 */
		private startHeart():void
		{
			egret.clearTimeout(this.interval);
			this.gameSender.HEART_BEAT();
			this.interval = egret.setTimeout(this.startHeart,this,10000);
		}
	}
}