module room {
	export class RoomSocketReceive {
		public constructor() {
		}
		private gameMatch: game.GameMatchUserUI;
		private gameReceive: game.GameSocketReceive;
		public initHandlers(id: number, byte: egret.ByteArray): void {
			// console.log("===DI--ID",id)

			switch (id) {
				case RoomProtocol.ACK | RoomProtocol.OGID_CLIENT_LIST_LOGIN://返回进入游戏服务结果
					this.ON_ACK_LOGIN(byte);
					break;
				case RoomProtocol.ACK | RoomProtocol.DuxLiveTick://发送心跳
					this.ON_ACK_DuxLiveTick(byte);
					break;
				case RoomProtocol.ACK | RoomProtocol.OGID_CLIENT_LIST_ROOM_LIST://请求房间列表
					this.ON_ACK_GAME_LIST(byte);
					break;
				case RoomProtocol.ACK | RoomProtocol.VGID_ROOM_SITDOWN://请求进入房间
					this.ON_ACK_ROOM_ENTERROOM(byte);
					break;
				case RoomProtocol.ACK | RoomProtocol.OGID_CLIENT_LIST_ROOM_LEAVEROOM://请求离开房间
					this.ON_ACK_LEAVE_TAB(byte);
					break;

				case RoomProtocol.ACK | RoomProtocol.VGID_USER_MANAGED://服务器通知客户端托管
					this.ON_ACK_GAMEPLAYERTRUST(byte);
					break;
				case RoomProtocol.ACK | RoomProtocol.VGID_GAME_GAMESTART://广播快速开始游戏
					this.ON_ACK_START_GAME(byte);
				// 	break;
				case RoomProtocol.ACK | RoomProtocol.OGID_CLIENT_LIST_ROOM_UPDATECOIN://更新金币
					this.OGID_ACK_ROOM_UPDATECOIN(byte);
					break;
				case RoomProtocol.ACK | RoomProtocol.OGID_CLIENT_LIST_ROOM_CONTINUE_GAME://更新金币
					console.log("====继续游戏===")
					this.OGID_ACK_ROOM_CONTINUE_GAME(byte);
					break;
				case RoomProtocol.ACK | RoomProtocol.VGID_GAME_SYNCGAMEDATA://同步游戏
					this.VGID_ACK_GAME_SYNCGAMEDATA(byte);
					break;
				case RoomProtocol.ACK | RoomProtocol.VGID_GAME_GAMESTATUS://游戏状态广播消息
					this.VGID_ACK_GAME_GAMESTATUS(byte);
					break;

				case RoomProtocol.ACK | RoomProtocol.VGID_GAME_SENDCARD://发牌广播消息
					this.VGID_ACK_GAME_SENDCARD(byte);
					break;
				case RoomProtocol.ACK | RoomProtocol.VGID_GAME_OPERATION://行牌单播消息
					this.VGID_ACK_GAME_OPERATION(byte);
					break;
				case RoomProtocol.ACK | RoomProtocol.VGID_GAME_GAMERESULT://结算广播消息
					this.VGID_ACK_GAME_GAMERESULT(byte);
					break;
				case RoomProtocol.ACK | RoomProtocol.VGID_USER_DAPIAO://打漂通知
					this.VGID_ACK_USER_DAPIAP(byte);
					break;
				case RoomProtocol.ACK | RoomProtocol.VGID_USER_OPERATION://玩家行牌消息
					this.VGID_USER_OPERATION(byte);
					break;

				case RoomProtocol.ACK | RoomProtocol.VGID_SERVICE_MAGICTILES://玩家行牌消息
					this.VGID_SERVICE_MAGICTILES(byte);
					break;
			}
		}

		// 同步游戏
		private VGID_ACK_GAME_SYNCGAMEDATA(byte: egret.ByteArray): void {

			var body: room.VGSyncGameDataNtc = room.VGSyncGameDataNtc.decode(byte.bytes);
			game.GameUserList.saveUserListInfo(body.userInfos)
			GDGame.Msg.ins.dispatchEventWith(room.RoomMessage.ACK_GAMEPLAYERLIST, false, body);

			game.GamePlayData.SaveHandCarsd(body.userInfos);
			console.log('=====同步游戏======', body);
			if (Number(body.status) == 0) {
				return;
			}

			if (Global.isContinue) {
				//ViewManager.ins.switchToGame();

				ViewManager.ins.hideWait();
				GDGame.Msg.ins.dispatchEventWith(room.RoomMessage.ACK_GAME_CONTINUE);
				Global.isContinue = false;
			}
		}


		//游戏状态广播消息
		private VGID_ACK_GAME_GAMESTATUS(byte: egret.ByteArray): void {
			var body: room.VGGameStatusNtc = room.VGGameStatusNtc.decode(byte.bytes);
			game.RoomInfo.ins.ChangeStatus(Number(body.status), body.second);

			//console.log('游戏状态广播消息', body);
		}




		//发牌广播消息
		private VGID_ACK_GAME_SENDCARD(byte: egret.ByteArray): void {
			console.log("========VGID_ACK_GAME_SENDCARD============")
			var body: room.VGGameSendCardNtc = room.VGGameSendCardNtc.decode(byte.bytes);
			game.GamePlayData.SaveHandCarsd(body.userInfos);
			game.GameUserList.updateUserListInfo(body.userInfos);

			//GDGame.Msg.ins.dispatchEventWith(game.GameMessage.SHOW_DAPIAO_INFO);

			GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.START_GET_CARD, true, true, body));
			console.log('发牌广播消息', body);
		}

		//打漂通知
		private VGID_ACK_USER_DAPIAP(byte: egret.ByteArray) {
			const body: room.VGUserDapiaoAck = room.VGUserDapiaoAck.decode(byte.bytes);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.VGID_USER_DAPIAO, true, true, body));

			//console.log("===VGID_ACK_USER_DAPIAP=body",body)	
		}

		//单张发牌器
		private VGID_SERVICE_MAGICTILES(byte: egret.ByteArray) {
			const body: room.MagicTilesAck = room.MagicTilesAck.decode(byte.bytes);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.VGID_SERVICE_MAGICTILES, true, true, body));

			console.log("===单张发牌器=======", body)
		}

		//行牌单播消息
		private VGID_ACK_GAME_OPERATION(byte: egret.ByteArray): void {
			const body: room.VGGameOperationNtc = room.VGGameOperationNtc.decode(byte.bytes);
			game.GamePlayData.SaveChiPengGangHu(body);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.VGID_GAME_OPERATION, true, true, body));

			// console.log('行牌单播消息', body);
		}


		private VGID_USER_OPERATION(byte: egret.ByteArray): void {
			const body: room.VGUserOperationAck = room.VGUserOperationAck.decode(byte.bytes);

			GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.VGID_USER_OPERATION, true, true, body));

		}

		//服务器通知客户端托管
		private ON_ACK_GAMEPLAYERTRUST(byte: egret.ByteArray): void {
			//Global.log("服务器通知客户端托管");
			var body: room.VGUserManagedAck = room.VGUserManagedAck.decode(byte.bytes);
			Global.log("服务器通知客户端托管", body);

			//	console.log("托管玩家座位号:" + body.TrustSit, "我的座位号:" + Global.userSit);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.ACK_GAMEPLAYERTRUST, true, true, body));
		}

		//结算广播消息
		private VGID_ACK_GAME_GAMERESULT(byte: egret.ByteArray): void {
			var body: room.VGGameResultNtc = room.VGGameResultNtc.decode(byte.bytes);
			// GDGame.Msg.ins.dispatchEvent();
			GDGame.Msg.ins.dispatchEvent(new egret.Event(game.GameMessage.ACK_ALLGAMERESULT, true, true, body));

			console.log('结算广播消息', body);
		}


		//返回进入游戏服务结果
		private ON_ACK_LOGIN(byte: egret.ByteArray): void {
			var body: room.VGLoginAck = room.VGLoginAck.decode(byte.bytes);
			//Global.log("收到登陆返回:" + body.userInfo);
			if (body.result == 0) {
				room.RoomWebSocket.instance().roomSender.REQ_ROOMLIST();
				Global.myPos = body.userInfo.userPos;
				Global.userName = body.userInfo.userName;
				Global.gameCoin = Number(body.userInfo.gameCoin);
				Global.myPos.tableId = body.userInfo.userPos.tableID;
				Global.myPos.roomID = body.userInfo.userPos.roomID;
				Global.myPos.seatID = body.userInfo.userPos.seatID;
				Global.userSit = body.userInfo.userPos.seatID;
				GDGame.Msg.ins.dispatchEvent(new egret.Event(RoomMessage.OGID_ROOM_UPDATECOIN));
				if (body.userInfo.userPos.seatID != 0) {
					ViewManager.ins.showWait("正在进入未完成牌局的房间，请等待...");
					Global.isContinue = true;
				}
				try {
					window["sendUserInfo"](body.userInfo.userName, Global.gameID, Global.loadTime);
				} catch (error) {
				}
			} else if (body.result == 1) {
				ViewManager.ins.showAlert(Global.dic["对不起,登录游戏失败,请重新登录"]);
			} else if (body.result == 2) {
				ViewManager.ins.showAlert(Global.dic["对不起,登录游戏失败,请重新登录"]);
			} else if (body.result == 4) {
				ViewManager.ins.showAlert(Global.dic["账号不存在"]), function () {
					window.location.href = location.href;
				};
			} else if (body.result == 21) {
				ViewManager.ins.showAlert(Global.dic["账号不存在"], function () {
					window.location.href = location.href;
				});
			} else if (body.result == 22) {
				ViewManager.ins.showAlert(Global.dic["账号不存在"], function () {
					window.location.href = location.href;
				});
			} else if (body.result == 23) {
				ViewManager.ins.showAlert(Global.dic["账号不存在"], function () {
					window.location.href = location.href;
				});
			} else if (body.result == 24) {
				ViewManager.ins.showAlert(Global.dic["游戏中"], function () {
					window.location.href = location.href;
				});
			} else if (body.result == 25) {
				ViewManager.ins.showAlert(Global.dic["账号不存在"], function () {
					window.location.href = location.href;
				});
			} else if (body.result == 26) {
				ViewManager.ins.showAlert(Global.dic["账号不存在"], function () {
					window.location.href = location.href;
				});
			} else if (body.result == 401) {
				ViewManager.ins.showAlert(Global.dic["游戏未开放"]);
			} else if (body.result == 203) {
				ViewManager.ins.showAlert(Global.dic["用户状态异常"], function () {
					window.location.href = location.href;
				});
			} else if (body.result == 301) {
				ViewManager.ins.showAlert(Global.dic["账号失效"], function () {
					window.location.href = location.href;
				});
			} else if (body.result == 501) {
				ViewManager.ins.showAlert(Global.dic["登录失败"]);
			} else if (body.result == 302) {
				ViewManager.ins.showAlert(Global.dic["用户频繁登陆"], function () {
					window.location.href = location.href;
				});
			} else if (body.result == 305) {
				ViewManager.ins.showAlert(Global.dic["用户状态异常"], function () {
					window.location.href = location.href;
				});
			} else {
				ViewManager.ins.showAlert(Global.dic["账号不存在"], function () {
					window.location.href = location.href;
				});
			}
			// if (body.result == 0) {//登陆成功
			// 	room.RoomWebSocket.instance().roomSender.REQ_ROOMLIST();
			// 	Global.myPos = body.userPos;
			// 	Global.userName = body.userName;
			// 	Global.gameCoin = Number(body.gameCoin);
			// 	GDGame.Msg.ins.dispatchEvent(new egret.Event(RoomMessage.OGID_ROOM_UPDATECOIN));
			// 	if (body.userPos.tableGuid != "") {
			// 		Global.isContinue = true;
			// 		if (Global.isGameLoad) {
			// 			room.RoomWebSocket.instance().roomSender.REQ_GAMECONTINUR();
			// 		}
			// 	}
			// 	try {
			// 		window["sendUserInfo"](body.userName, Global.gameID, Global.loadTime);
			// 	} catch (error) {
			// 	}
			// } else if (body.result == 28) {//cq9相关
			// 	if (body.webState == 301) {
			// 		ViewManager.ins.showAlert(Global.dic["账号失效"], function () {
			// 			window.location.href = location.href;
			// 		});
			// 	} else if (body.webState == 302) {
			// 		ViewManager.ins.showAlert(Global.dic["用户频繁登陆"]);
			// 	} else if (body.webState == 303) {
			// 		ViewManager.ins.showAlert(Global.dic["游戏中"]);
			// 	} else if (body.webState == 305) {
			// 		ViewManager.ins.showAlert(Global.dic["用户状态异常"]);
			// 	} else if (body.webState == 203) {
			// 		ViewManager.ins.showAlert(Global.dic["账号不存在"]);
			// 	} else if (body.webState == 401) {
			// 		ViewManager.ins.showAlert(Global.dic["游戏未开放"]);
			// 	} else if (body.webState == 501) {
			// 		ViewManager.ins.showAlert(Global.dic["登录失败"]);
			// 	} else {
			// 		ViewManager.ins.showAlert(Global.dic["失去链接"], function () {
			// 			window.location.href = location.href;
			// 		});
			// 	}
			// } else if (body.result == 1) {//账号不存在
			// 	ViewManager.ins.showAlert(Global.dic["账号不存在"], function () {
			// 		window.location.href = location.href;
			// 	});
			// } else {
			// 	ViewManager.ins.showAlert(Global.dic["失去链接"], function () {
			// 		window.location.href = location.href;
			// 	});
			// }
		}

		//返回游戏列表
		private ON_ACK_GAME_LIST(byte: egret.ByteArray): void {
			var body: room.VGRoomListAck = room.VGRoomListAck.decode(byte.bytes);
			console.log('---body', body);

			GDGame.Msg.ins.dispatchEvent(new egret.Event(RoomMessage.ON_GAME_LIST, true, true, body.roomInfo));
			//断线重连进来,不用主动连接，等服务器推送接受链接服务器
			if (Global.myPos.tableId) {

				let data = new room.VGSitDownReq({
					userName: Global.userName,
					userPos: {
						roomID: Global.myPos.roomID,
						tableID: Global.myPos.tableID,
						seatID: Global.myPos.seatID
					}
				});

				let body = room.VGSitDownReq.encode(data).finish();
				room.RoomWebSocket.instance().SendMeseage(RoomProtocol.REQ | RoomProtocol.VGID_ROOM_SITDOWN, body);


			} else {
				ViewManager.ins.hideWait();
			}
		}

		//返回离开桌子结果
		private ON_ACK_LEAVE_TAB(byte: egret.ByteArray): void {
			Global.log("返回离开桌子结果");
			var body: room.VGSitUpAck = room.VGSitUpAck.decode(byte.bytes);
			GDGame.Msg.ins.dispatchEvent(new egret.Event(RoomMessage.ON_LEAVE_TAB, true, true, body));
		}

		//接收心跳消息
		private ON_ACK_DuxLiveTick(byte: egret.ByteArray): void {
			room.RoomWebSocket.instance().nRoomTimerCount = 0;
		}

		//请求进入房间的返回
		private ON_ACK_ROOM_ENTERROOM(byte: egret.ByteArray): void {
			var body: room.VGSitDownAck = room.VGSitDownAck.decode(byte.bytes);
			console.log("进入房间返回结果-----", body);
			if (body.result == 0) {
				//请求开始游戏
				Global.myPos.roomID = body.userInfo.userPos.roomID;

				game.GamePlayData.initData();
				game.GameParmes.initData();
				ViewManager.ins.switchToGame();

			} else {
				let str: string = Global.dic["进入房间失败"];
				if (body.result == 6) {
					str = Global.dic["房间限制"];
				} else if (body.result == 7) {
					str = Global.dic["游戏停服"];
				} else if (body.result == 99) {
					str = Global.dic["用户状态异常"];
				} else {
					str = Global.dic["游戏停服"];
				}
				ViewManager.ins.showAlert(str);
				ViewManager.ins.hideWait();
				if (ViewManager.ins.curview == "game") {
					ViewManager.ins.switchToRoom();
				}
			}
		}

		private ON_ACK_START_GAME(byte: egret.ByteArray): void {
			Global.log("游戏开始消息");
			var body: room.VGGameStartNtc = room.VGGameStartNtc.decode(byte.bytes);
			console.log('游戏开始消息', body);
			game.GamePlayData.initData();
			game.GameParmes.initData();

			// Global.myPos.tableGuid = body.roundGuid;

			game.GameUserList.saveUserListInfo(body.userInfos);
			game.GamePlayData.SaveHandCarsd(body.userInfos);

			GDGame.Msg.ins.dispatchEvent(new egret.Event(room.RoomMessage.ACK_ENTER_TABLE, true, true, body));


			//断线重联
		}

		private OGID_ACK_ROOM_UPDATECOIN(byte: egret.ByteArray): void {
			// var body: room.UpdateCoinAck = room.UpdateCoinAck.decode(byte.bytes);
			// GDGame.Msg.ins.dispatchEvent(new egret.Event(RoomMessage.OGID_ROOM_UPDATECOIN, true, true, body));
		}
		private OGID_ACK_ROOM_CONTINUE_GAME(byte: egret.ByteArray): void {
			// var body: room.OGContinueGameAck = room.OGContinueGameAck.decode(byte.bytes);
			Global.log("收到断线续完返回:");
			// if (body.result != 0) {
			// 	ViewManager.ins.hideWait();
			// }
		}
	}
}