module game {
	export class GameUserList {
		public constructor() {
		}
		public static arrUserList: Array<game.GameUserInfo> = [];
		public static saveUserListInfo(arr: Array<room.IVGUserInfo>): void {
			game.GameUserList.arrUserList = [];
			this.updateUserListInfo(arr);

		}

		public static updateUserListInfo(arr: Array<room.IVGUserInfo>) {
			for (let i: number = 0; i < arr.length; i++) {
				let info = arr[i];
				// console.log("====info",info)
				let user: game.GameUserInfo = this.arrUserList[i];
				if (!user) {
					user = new game.GameUserInfo();
					game.GameUserList.arrUserList.push(user);

				}
				user.userName = info.userName;
				user.userShowName = info.showName;
				user.userSit = info.userPos.seatID;
				user.userCoin = Number(info.gameCoin);
				user.userImage = "";
				user.origin = info;

				if (user.userName == Global.userName) {
					Global.userSit = user.userSit;
					console.log("===在这个地方 给角色 座位 副职",Global.userSit)
				}
				user.init();
			}
		}
		/**
		 * 根据座位号获取玩家个人信息
		 * */
		public static getPlayerformSit(sit: number): game.GameUserInfo {
			return game.GameUserList.arrUserList[sit];
		}

		/**
		 * 获取自己的信息
		 * @returns 
		 */
		public static getCurrentPlayerInfo(): game.GameUserInfo {
			return game.GameUserList.arrUserList[2]
		}

		/**
		 * 根据名称 查询自己的座位
		 */
		public static getUserSitByName(name:string) {
			let sit = -1;
			game.GameUserList.arrUserList.forEach((e:game.GameUserInfo)=>{
				if(e.userName == name){
					sit = e.userSit
				}

			})
			return sit;
		}
	}

	export enum RoomStatus {
		/*
		*默认状态什么都不处理
		*/
		MJ_GS_DF = 0,
		//打漂状态
		MJ_GS_DP = 1,
		//开局状态
		MJ_GS_KJ = 2,
		//发牌状态
		MJ_GS_FP = 3,
		//行牌状态
		MJ_GS_XP = 4,
		//结算状态
		MJ_GS_JS = 5,

	}

	export class RoomInfo {

		private static _ins: RoomInfo;

		public static get ins() {
			if (!this._ins) {
				this._ins = new RoomInfo();
			}
			return this._ins;
		}

		constructor() {
			this.timer.addEventListener(egret.TimerEvent.TIMER, this.listenerUpdate, this);
			this.timer.start();
		}

		private timer: egret.Timer = new egret.Timer(1000);


		private _status: RoomStatus = RoomStatus.MJ_GS_DF;

		private _lastStatus: RoomStatus = RoomStatus.MJ_GS_DF;

		private _curStateEndTime: number = 0;

		public ChangeStatus(value: RoomStatus, timer: number) {
			GameParmes.gameStage = value;
			if (this._status === value) {
				return;
			}
			this._lastStatus = this._status;
			this._status = value;
			this._curStateEndTime = timer;
			GDGame.Msg.ins.dispatchEventWith(game.GameMessage.NTF_ROOM_STATE);
		}

		public get status(): RoomStatus {
			return this._status;
		}

		public get curStateEndTime(): number {
			return this._curStateEndTime;
		}

		public get lastStatus(): RoomStatus {
			return this._lastStatus;
		}

		private listenerUpdate() {
			if (this._curStateEndTime <= 0) {
				return;
			}
			this._curStateEndTime -= 1;
		}



	}

}