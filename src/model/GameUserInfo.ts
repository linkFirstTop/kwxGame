module game {
	export class GameUserInfo {
		public constructor() {
		}
		/**
		 * 玩家名称
		 * **/
		public userName: string = "";
		/**
		 * 玩家座位号
		 * **/
		public userSit: number = -1;
		/**
		 * 玩家展示名称
		 * **/
		public userShowName: string = "";
		/**
		 * 玩家头像
		 * **/
		public userImage: string = "";
		/*
		*玩家金币
		*/
		public userCoin: number = 0;
		/**
		 * 定缺
		 * **/
		public CardID: number = -1;//万条并 012

		public origin: room.IVGUserInfo;

		public cardInfo: { [k: number]: room.IMJ_TileSet } = {};


		public getUserHandCard(): number[] {
			return this.getUserCardByType(UserCardType.MJ_CGT_HANDCARDS)
		}

		public getUserCardPool(): number[] {
			return this.getUserCardByType(UserCardType.MJ_CGT_DISCARDED)
		}

		public getUserCardByType(type: UserCardType): number[] {
			let tilesedInfo = this.cardInfo[type];
			return tilesedInfo.Tiles;
		}

		public setUserDapiaoInfo(piao: number){
			this.origin.dapiao = piao;
		}

		public getUserDapiaoInfo() {
			let dapiao = this.origin.dapiao;
			return dapiao ? dapiao : 0
		}

		public init() {
			this.cardInfo = {}
			let tileSet = this.origin.tileSets;
			tileSet.forEach((value) => {
				this.cardInfo[value.Type] = value
			})
		}
	}

	export enum UserCardType {
		MJ_CGT_HANDCARDS = 0,	//手牌
		MJ_CGT_CHOW = 1,	//吃牌
		MJ_CGT_PONG = 2,	//碰牌
		MJ_CGT_C_KONG = 3,	//暗杠牌
		MJ_CGT_E_KONG = 4,	//明杠牌
		MJ_CGT_P_KONG = 5,	//补杠牌
		MJ_CGT_HU = 6,	//胡牌
		MJ_CGT_DISCARD = 7,	//打出的牌
		MJ_CGT_DRAW = 8,	//抓的牌
		MJ_CGT_DRAW_KONG = 9,	//杠后抓的牌
		MJ_CGT_DISCARDED = 10,	//牌池的牌
	}
}