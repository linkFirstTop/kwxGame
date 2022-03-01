module room {
	export class RoomSocketSender {
		public constructor() {
		}
		/**
		 * 心跳
		 */
		public HEART_BEAT(): void {
			let data = new room.VGHeartBeatReq();
			data.time = 1;
			let body = room.VGHeartBeatReq.encode(data).finish();
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.DuxLiveTick, body);
		}
		public REQ_LOGIN(): void {
			let data = new room.VGLoginReq();
			data.ticket = Global.token;
			Global.log(data, '----客户端发送登录请求');
			let body = room.VGLoginReq.encode(data).finish();
			Global.log("客户端发送登录请求" + Global.token);
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.OGID_CLIENT_LIST_LOGIN, body);
		}
		/*
		*请求房间列表
		*/
		public REQ_ROOMLIST(): void {
			let data = new room.VGRoomListReq();
			data.userName = Global.userName;
			let body = room.VGRoomListReq.encode(data).finish();
			Global.log("客户端发送请求房间列表");
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.OGID_CLIENT_LIST_ROOM_LIST, body);
		}

		/*
		*请求进入房间
		*/
		public REQ_ROOMENTERROOM(RoomID: number): void {
			let data = new room.VGSitDownReq({
				userName: Global.userName,
				userPos: {
					roomID: RoomID,
					tableID: '',
					seatID: 0
				}
			});
			// data.sUserName = Global.userName;
			// data.RoomID = RoomID;
			// let data = {
			// 	userName:Global.userName,
			// 	userPos:{
			// 		roomID:RoomID,
			// 		tableID:'',
			// 		seatID:''
			// 	}
			// }
			// data.tableGuid = "";
			let body = room.VGSitDownReq.encode(data).finish();
			Global.log("客户端发送请求进入房间" + RoomID, data);
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.OGID_CLIENT_LIST_ROOM_ENTERROOM, body);
		}

		/*
		*请求离开房间
		*/
		public REQ_ROOMLeaveRoomReq(pos: any): void {
			let data = new room.VGSitUpReq();
			data.userName = Global.userName;
			data.userPos = pos;
			// data.change = 1;
			let body = room.VGSitUpReq.encode(data).finish();
			Global.log("客户端发送请求离开房间" + 1);
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.OGID_CLIENT_LIST_ROOM_LEAVEROOM, body);
		}

		/*
		*请求开始
		*/
		public REQ_ROOMQickGameReqReq(pos: any): void {
			let data = new room.VGGameStartNtc()
			// data.userName = Global.userName;
			// data.userPos = pos;
			let body = room.VGGameStartNtc.encode(data).finish();
			Global.log("客户端发送请求开始");
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.OGID_CLIENT_LIST_ROOM_QUICKGAME, body);
		}
		public REQ_GAMECONTINUR(): void {
			let data = new room.VGGameStartNtc();
			// data.username = Global.userName;
			let body = room.VGGameStartNtc.encode(data).finish();
			Global.log("客户端请求断线续玩消息");
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.OGID_CLIENT_LIST_ROOM_CONTINUE_GAME, body);
		}

		public REQ_DAPIAOINFO(type: number): void {
	
			let data = new room.VGUserDapiaoReq();
			data.dapiao = type;
			let body = room.VGUserDapiaoReq.encode(data).finish();
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.VGID_USER_DAPIAO, body);
		}
		//VGID_USER_OPERATION
		//VGUserOperationReq
		public REQ_USEROPERATIONREQ(operation: MJ_Operation): void {
			console.log("==REQ_USEROPERATIONREQ==",operation)
			let data = new room.VGUserOperationReq();
			data.operation = operation;
			let body = room.VGUserOperationReq.encode(data).finish();
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.VGID_USER_OPERATION, body);
		}

		public REQ_MAGICTILES (): void {
			//console.log("==REQ_USEROPERATIONREQ==")
			let data = new room.MagicTilesReq();
			data.tile = 1;
			let body = room.MagicTilesReq.encode(data).finish();
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.VGID_SERVICE_MAGICTILES, body);
		}


		//请求托管
		public ReqPlayerTrustFun():void
		{
			let data = new room.VGUserManagedReq();
			data.isManaged = 1;
			let body = room.VGUserManagedReq.encode(data).finish();
			Global.log("请求托管:"+body);
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.VGID_USER_MANAGED,body);
		}
		//请求解除托管
		public ReqGamePlayerReleveTrustFun():void
		{
			let data = new room.VGUserManagedReq();
			data.isManaged = 0;
			let body = room.VGUserManagedReq.encode(data).finish();
			room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.VGID_USER_MANAGED,body);
		}
	}
}