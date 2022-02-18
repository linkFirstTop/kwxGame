type Long = protobuf.Long;

/** Namespace game. */
declare namespace game {

    /** Properties of a ReqEnterGame. */
    interface IReqEnterGame {

        /** ReqEnterGame GameID */
        GameID: string;

        /** ReqEnterGame UserName */
        UserName?: (string|null);

        /** ReqEnterGame ticket */
        ticket?: (string|null);
    }

    /** Represents a ReqEnterGame. */
    class ReqEnterGame implements IReqEnterGame {

        /**
         * Constructs a new ReqEnterGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IReqEnterGame);

        /** ReqEnterGame GameID. */
        public GameID: string;

        /** ReqEnterGame UserName. */
        public UserName: string;

        /** ReqEnterGame ticket. */
        public ticket: string;

        /**
         * Creates a new ReqEnterGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEnterGame instance
         */
        public static create(properties?: game.IReqEnterGame): game.ReqEnterGame;

        /**
         * Encodes the specified ReqEnterGame message. Does not implicitly {@link game.ReqEnterGame.verify|verify} messages.
         * @param message ReqEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IReqEnterGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqEnterGame message, length delimited. Does not implicitly {@link game.ReqEnterGame.verify|verify} messages.
         * @param message ReqEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IReqEnterGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ReqEnterGame;

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ReqEnterGame;

        /**
         * Verifies a ReqEnterGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckEnterGame. */
    interface IAckEnterGame {

        /** AckEnterGame Result */
        Result: boolean;

        /** AckEnterGame GameID */
        GameID: string;

        /** AckEnterGame ErrorID */
        ErrorID: number;

        /** AckEnterGame game_guid */
        game_guid?: (string|null);
    }

    /** Represents an AckEnterGame. */
    class AckEnterGame implements IAckEnterGame {

        /**
         * Constructs a new AckEnterGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckEnterGame);

        /** AckEnterGame Result. */
        public Result: boolean;

        /** AckEnterGame GameID. */
        public GameID: string;

        /** AckEnterGame ErrorID. */
        public ErrorID: number;

        /** AckEnterGame game_guid. */
        public game_guid: string;

        /**
         * Creates a new AckEnterGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckEnterGame instance
         */
        public static create(properties?: game.IAckEnterGame): game.AckEnterGame;

        /**
         * Encodes the specified AckEnterGame message. Does not implicitly {@link game.AckEnterGame.verify|verify} messages.
         * @param message AckEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckEnterGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckEnterGame message, length delimited. Does not implicitly {@link game.AckEnterGame.verify|verify} messages.
         * @param message AckEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckEnterGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckEnterGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckEnterGame;

        /**
         * Decodes an AckEnterGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckEnterGame;

        /**
         * Verifies an AckEnterGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ErrorID. */
    interface IErrorID {

        /** ErrorID PLATER_NOT_ENOUGH */
        PLATER_NOT_ENOUGH: number;

        /** ErrorID GAMEID_IS_ERROR */
        GAMEID_IS_ERROR: number;
    }

    /** Represents an ErrorID. */
    class ErrorID implements IErrorID {

        /**
         * Constructs a new ErrorID.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IErrorID);

        /** ErrorID PLATER_NOT_ENOUGH. */
        public PLATER_NOT_ENOUGH: number;

        /** ErrorID GAMEID_IS_ERROR. */
        public GAMEID_IS_ERROR: number;

        /**
         * Creates a new ErrorID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorID instance
         */
        public static create(properties?: game.IErrorID): game.ErrorID;

        /**
         * Encodes the specified ErrorID message. Does not implicitly {@link game.ErrorID.verify|verify} messages.
         * @param message ErrorID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IErrorID, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ErrorID message, length delimited. Does not implicitly {@link game.ErrorID.verify|verify} messages.
         * @param message ErrorID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IErrorID, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ErrorID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ErrorID;

        /**
         * Decodes an ErrorID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ErrorID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ErrorID;

        /**
         * Verifies an ErrorID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqReadyGame. */
    interface IReqReadyGame {

        /** ReqReadyGame GameID */
        GameID: string;

        /** ReqReadyGame UserName */
        UserName?: (string|null);
    }

    /** Represents a ReqReadyGame. */
    class ReqReadyGame implements IReqReadyGame {

        /**
         * Constructs a new ReqReadyGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IReqReadyGame);

        /** ReqReadyGame GameID. */
        public GameID: string;

        /** ReqReadyGame UserName. */
        public UserName: string;

        /**
         * Creates a new ReqReadyGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqReadyGame instance
         */
        public static create(properties?: game.IReqReadyGame): game.ReqReadyGame;

        /**
         * Encodes the specified ReqReadyGame message. Does not implicitly {@link game.ReqReadyGame.verify|verify} messages.
         * @param message ReqReadyGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IReqReadyGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqReadyGame message, length delimited. Does not implicitly {@link game.ReqReadyGame.verify|verify} messages.
         * @param message ReqReadyGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IReqReadyGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqReadyGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqReadyGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ReqReadyGame;

        /**
         * Decodes a ReqReadyGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqReadyGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ReqReadyGame;

        /**
         * Verifies a ReqReadyGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGameOver. */
    interface IAckGameOver {

        /** AckGameOver ErrorID */
        ErrorID: number;
    }

    /** Represents an AckGameOver. */
    class AckGameOver implements IAckGameOver {

        /**
         * Constructs a new AckGameOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckGameOver);

        /** AckGameOver ErrorID. */
        public ErrorID: number;

        /**
         * Creates a new AckGameOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGameOver instance
         */
        public static create(properties?: game.IAckGameOver): game.AckGameOver;

        /**
         * Encodes the specified AckGameOver message. Does not implicitly {@link game.AckGameOver.verify|verify} messages.
         * @param message AckGameOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckGameOver, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGameOver message, length delimited. Does not implicitly {@link game.AckGameOver.verify|verify} messages.
         * @param message AckGameOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckGameOver, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGameOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckGameOver;

        /**
         * Decodes an AckGameOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckGameOver;

        /**
         * Verifies an AckGameOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckPlayerList. */
    interface IAckPlayerList {

        /** AckPlayerList PlayerList */
        PlayerList?: (game.IPlayerInfo[]|null);
    }

    /** Represents an AckPlayerList. */
    class AckPlayerList implements IAckPlayerList {

        /**
         * Constructs a new AckPlayerList.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckPlayerList);

        /** AckPlayerList PlayerList. */
        public PlayerList: game.IPlayerInfo[];

        /**
         * Creates a new AckPlayerList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckPlayerList instance
         */
        public static create(properties?: game.IAckPlayerList): game.AckPlayerList;

        /**
         * Encodes the specified AckPlayerList message. Does not implicitly {@link game.AckPlayerList.verify|verify} messages.
         * @param message AckPlayerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckPlayerList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckPlayerList message, length delimited. Does not implicitly {@link game.AckPlayerList.verify|verify} messages.
         * @param message AckPlayerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckPlayerList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckPlayerList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckPlayerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckPlayerList;

        /**
         * Decodes an AckPlayerList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckPlayerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckPlayerList;

        /**
         * Verifies an AckPlayerList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo UserName */
        UserName?: (string|null);

        /** PlayerInfo UsershowName */
        UsershowName?: (string|null);

        /** PlayerInfo UserImage */
        UserImage?: (string|null);

        /** PlayerInfo UserSit */
        UserSit?: (number|null);

        /** PlayerInfo Integral */
        Integral?: (number|null);

        /** PlayerInfo Coin */
        Coin?: (number|Long|null);

        /** PlayerInfo NowLevel */
        NowLevel?: (game.IRank|null);

        /** PlayerInfo HisLevel */
        HisLevel?: (game.IRank|null);

        /** PlayerInfo Stage */
        Stage?: (number|null);

        /** PlayerInfo Ranking */
        Ranking?: (number|null);

        /** PlayerInfo WinIntegral */
        WinIntegral?: (number|null);

        /** PlayerInfo TotalNum */
        TotalNum?: (number|null);

        /** PlayerInfo ReadyNum */
        ReadyNum?: (number|null);

        /** PlayerInfo HuNum */
        HuNum?: (number|null);

        /** PlayerInfo GunNum */
        GunNum?: (number|null);

        /** PlayerInfo ZimoNum */
        ZimoNum?: (number|null);

        /** PlayerInfo Sex */
        Sex?: (number|null);

        /** PlayerInfo IsMember */
        IsMember?: (boolean|null);

        /** PlayerInfo HistoryMaxLevel */
        HistoryMaxLevel?: (game.IRank|null);

        /** PlayerInfo Average_Rank */
        Average_Rank?: (number|null);

        /** PlayerInfo Openingrate */
        Openingrate?: (number|null);

        /** PlayerInfo Round2_rank1 */
        Round2_rank1?: (number|null);

        /** PlayerInfo Round2_rank2 */
        Round2_rank2?: (number|null);

        /** PlayerInfo Round2_rank3 */
        Round2_rank3?: (number|null);

        /** PlayerInfo Round2_rank4 */
        Round2_rank4?: (number|null);

        /** PlayerInfo Round4_rank1 */
        Round4_rank1?: (number|null);

        /** PlayerInfo Round4_rank2 */
        Round4_rank2?: (number|null);

        /** PlayerInfo Round4_rank3 */
        Round4_rank3?: (number|null);

        /** PlayerInfo Round4_rank4 */
        Round4_rank4?: (number|null);

        /** PlayerInfo SocietyContributionValue */
        SocietyContributionValue?: (number|null);

        /** PlayerInfo SocietyPracticeType */
        SocietyPracticeType?: (number|null);

        /** PlayerInfo SocietyPracticeFirstCount */
        SocietyPracticeFirstCount?: (number|null);

        /** PlayerInfo SocietyPracticeSecondCount */
        SocietyPracticeSecondCount?: (number|null);

        /** PlayerInfo SocietyPracticeFourCount */
        SocietyPracticeFourCount?: (number|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPlayerInfo);

        /** PlayerInfo UserName. */
        public UserName: string;

        /** PlayerInfo UsershowName. */
        public UsershowName: string;

        /** PlayerInfo UserImage. */
        public UserImage: string;

        /** PlayerInfo UserSit. */
        public UserSit: number;

        /** PlayerInfo Integral. */
        public Integral: number;

        /** PlayerInfo Coin. */
        public Coin: (number|Long);

        /** PlayerInfo NowLevel. */
        public NowLevel?: (game.IRank|null);

        /** PlayerInfo HisLevel. */
        public HisLevel?: (game.IRank|null);

        /** PlayerInfo Stage. */
        public Stage: number;

        /** PlayerInfo Ranking. */
        public Ranking: number;

        /** PlayerInfo WinIntegral. */
        public WinIntegral: number;

        /** PlayerInfo TotalNum. */
        public TotalNum: number;

        /** PlayerInfo ReadyNum. */
        public ReadyNum: number;

        /** PlayerInfo HuNum. */
        public HuNum: number;

        /** PlayerInfo GunNum. */
        public GunNum: number;

        /** PlayerInfo ZimoNum. */
        public ZimoNum: number;

        /** PlayerInfo Sex. */
        public Sex: number;

        /** PlayerInfo IsMember. */
        public IsMember: boolean;

        /** PlayerInfo HistoryMaxLevel. */
        public HistoryMaxLevel?: (game.IRank|null);

        /** PlayerInfo Average_Rank. */
        public Average_Rank: number;

        /** PlayerInfo Openingrate. */
        public Openingrate: number;

        /** PlayerInfo Round2_rank1. */
        public Round2_rank1: number;

        /** PlayerInfo Round2_rank2. */
        public Round2_rank2: number;

        /** PlayerInfo Round2_rank3. */
        public Round2_rank3: number;

        /** PlayerInfo Round2_rank4. */
        public Round2_rank4: number;

        /** PlayerInfo Round4_rank1. */
        public Round4_rank1: number;

        /** PlayerInfo Round4_rank2. */
        public Round4_rank2: number;

        /** PlayerInfo Round4_rank3. */
        public Round4_rank3: number;

        /** PlayerInfo Round4_rank4. */
        public Round4_rank4: number;

        /** PlayerInfo SocietyContributionValue. */
        public SocietyContributionValue: number;

        /** PlayerInfo SocietyPracticeType. */
        public SocietyPracticeType: number;

        /** PlayerInfo SocietyPracticeFirstCount. */
        public SocietyPracticeFirstCount: number;

        /** PlayerInfo SocietyPracticeSecondCount. */
        public SocietyPracticeSecondCount: number;

        /** PlayerInfo SocietyPracticeFourCount. */
        public SocietyPracticeFourCount: number;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: game.IPlayerInfo): game.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link game.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link game.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Rank. */
    interface IRank {

        /** Rank duan */
        duan: number;

        /** Rank xing */
        xing: number;
    }

    /** Represents a Rank. */
    class Rank implements IRank {

        /**
         * Constructs a new Rank.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IRank);

        /** Rank duan. */
        public duan: number;

        /** Rank xing. */
        public xing: number;

        /**
         * Creates a new Rank instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Rank instance
         */
        public static create(properties?: game.IRank): game.Rank;

        /**
         * Encodes the specified Rank message. Does not implicitly {@link game.Rank.verify|verify} messages.
         * @param message Rank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IRank, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Rank message, length delimited. Does not implicitly {@link game.Rank.verify|verify} messages.
         * @param message Rank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IRank, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Rank message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Rank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.Rank;

        /**
         * Decodes a Rank message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Rank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.Rank;

        /**
         * Verifies a Rank message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGameRule. */
    interface IAckGameRule {

        /** AckGameRule FirstSit */
        FirstSit: number;

        /** AckGameRule GameType */
        GameType: number;

        /** AckGameRule Is_Next_ChiPengGangTime */
        Is_Next_ChiPengGangTime: number;

        /** AckGameRule Not_Next_ChiPengGangTime */
        Not_Next_ChiPengGangTime: number;

        /** AckGameRule HuTime */
        HuTime: number;

        /** AckGameRule PlayTime */
        PlayTime: number;

        /** AckGameRule DelayTime */
        DelayTime: number;

        /** AckGameRule DelayRestrictions */
        DelayRestrictions: number;

        /** AckGameRule Bureau */
        Bureau: number;

        /** AckGameRule Ring */
        Ring: number;

        /** AckGameRule PAIR */
        PAIR: number;

        /** AckGameRule TrustRestrictions */
        TrustRestrictions: number;

        /** AckGameRule FirstSendTime */
        FirstSendTime: number;

        /** AckGameRule ChiPengGangSurplusTime */
        ChiPengGangSurplusTime: number;

        /** AckGameRule ArrangementCardsOverTime */
        ArrangementCardsOverTime: number;

        /** AckGameRule GoOnGaneTime */
        GoOnGaneTime: number;

        /** AckGameRule HuanSanzhang */
        HuanSanzhang?: (number|null);

        /** AckGameRule dingque */
        dingque?: (number|null);
    }

    /** Represents an AckGameRule. */
    class AckGameRule implements IAckGameRule {

        /**
         * Constructs a new AckGameRule.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckGameRule);

        /** AckGameRule FirstSit. */
        public FirstSit: number;

        /** AckGameRule GameType. */
        public GameType: number;

        /** AckGameRule Is_Next_ChiPengGangTime. */
        public Is_Next_ChiPengGangTime: number;

        /** AckGameRule Not_Next_ChiPengGangTime. */
        public Not_Next_ChiPengGangTime: number;

        /** AckGameRule HuTime. */
        public HuTime: number;

        /** AckGameRule PlayTime. */
        public PlayTime: number;

        /** AckGameRule DelayTime. */
        public DelayTime: number;

        /** AckGameRule DelayRestrictions. */
        public DelayRestrictions: number;

        /** AckGameRule Bureau. */
        public Bureau: number;

        /** AckGameRule Ring. */
        public Ring: number;

        /** AckGameRule PAIR. */
        public PAIR: number;

        /** AckGameRule TrustRestrictions. */
        public TrustRestrictions: number;

        /** AckGameRule FirstSendTime. */
        public FirstSendTime: number;

        /** AckGameRule ChiPengGangSurplusTime. */
        public ChiPengGangSurplusTime: number;

        /** AckGameRule ArrangementCardsOverTime. */
        public ArrangementCardsOverTime: number;

        /** AckGameRule GoOnGaneTime. */
        public GoOnGaneTime: number;

        /** AckGameRule HuanSanzhang. */
        public HuanSanzhang: number;

        /** AckGameRule dingque. */
        public dingque: number;

        /**
         * Creates a new AckGameRule instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGameRule instance
         */
        public static create(properties?: game.IAckGameRule): game.AckGameRule;

        /**
         * Encodes the specified AckGameRule message. Does not implicitly {@link game.AckGameRule.verify|verify} messages.
         * @param message AckGameRule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckGameRule, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGameRule message, length delimited. Does not implicitly {@link game.AckGameRule.verify|verify} messages.
         * @param message AckGameRule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckGameRule, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGameRule message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGameRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckGameRule;

        /**
         * Decodes an AckGameRule message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGameRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckGameRule;

        /**
         * Verifies an AckGameRule message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckDiceAndCards. */
    interface IAckDiceAndCards {

        /** AckDiceAndCards FirstSit */
        FirstSit: number;

        /** AckDiceAndCards SecondSit */
        SecondSit: number;

        /** AckDiceAndCards FirstDice */
        FirstDice: string;

        /** AckDiceAndCards SecondDice */
        SecondDice: string;

        /** AckDiceAndCards FirstCardsIndexes */
        FirstCardsIndexes: number;

        /** AckDiceAndCards HandCards */
        HandCards?: (game.ICardInfo[]|null);

        /** AckDiceAndCards huan_san_zhang */
        huan_san_zhang?: (game.ICardInfo[]|null);
    }

    /** Represents an AckDiceAndCards. */
    class AckDiceAndCards implements IAckDiceAndCards {

        /**
         * Constructs a new AckDiceAndCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckDiceAndCards);

        /** AckDiceAndCards FirstSit. */
        public FirstSit: number;

        /** AckDiceAndCards SecondSit. */
        public SecondSit: number;

        /** AckDiceAndCards FirstDice. */
        public FirstDice: string;

        /** AckDiceAndCards SecondDice. */
        public SecondDice: string;

        /** AckDiceAndCards FirstCardsIndexes. */
        public FirstCardsIndexes: number;

        /** AckDiceAndCards HandCards. */
        public HandCards: game.ICardInfo[];

        /** AckDiceAndCards huan_san_zhang. */
        public huan_san_zhang: game.ICardInfo[];

        /**
         * Creates a new AckDiceAndCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckDiceAndCards instance
         */
        public static create(properties?: game.IAckDiceAndCards): game.AckDiceAndCards;

        /**
         * Encodes the specified AckDiceAndCards message. Does not implicitly {@link game.AckDiceAndCards.verify|verify} messages.
         * @param message AckDiceAndCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckDiceAndCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckDiceAndCards message, length delimited. Does not implicitly {@link game.AckDiceAndCards.verify|verify} messages.
         * @param message AckDiceAndCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckDiceAndCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckDiceAndCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckDiceAndCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckDiceAndCards;

        /**
         * Decodes an AckDiceAndCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckDiceAndCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckDiceAndCards;

        /**
         * Verifies an AckDiceAndCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CardInfo. */
    interface ICardInfo {

        /** CardInfo CardID */
        CardID: number;

        /** CardInfo Sit */
        Sit?: (number|null);
    }

    /** Represents a CardInfo. */
    class CardInfo implements ICardInfo {

        /**
         * Constructs a new CardInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ICardInfo);

        /** CardInfo CardID. */
        public CardID: number;

        /** CardInfo Sit. */
        public Sit: number;

        /**
         * Creates a new CardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardInfo instance
         */
        public static create(properties?: game.ICardInfo): game.CardInfo;

        /**
         * Encodes the specified CardInfo message. Does not implicitly {@link game.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ICardInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardInfo message, length delimited. Does not implicitly {@link game.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ICardInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.CardInfo;

        /**
         * Decodes a CardInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.CardInfo;

        /**
         * Verifies a CardInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqHandCardsOver. */
    interface IReqHandCardsOver {

        /** ReqHandCardsOver Sit */
        Sit: number;
    }

    /** Represents a ReqHandCardsOver. */
    class ReqHandCardsOver implements IReqHandCardsOver {

        /**
         * Constructs a new ReqHandCardsOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IReqHandCardsOver);

        /** ReqHandCardsOver Sit. */
        public Sit: number;

        /**
         * Creates a new ReqHandCardsOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqHandCardsOver instance
         */
        public static create(properties?: game.IReqHandCardsOver): game.ReqHandCardsOver;

        /**
         * Encodes the specified ReqHandCardsOver message. Does not implicitly {@link game.ReqHandCardsOver.verify|verify} messages.
         * @param message ReqHandCardsOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IReqHandCardsOver, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqHandCardsOver message, length delimited. Does not implicitly {@link game.ReqHandCardsOver.verify|verify} messages.
         * @param message ReqHandCardsOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IReqHandCardsOver, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqHandCardsOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqHandCardsOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ReqHandCardsOver;

        /**
         * Decodes a ReqHandCardsOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqHandCardsOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ReqHandCardsOver;

        /**
         * Verifies a ReqHandCardsOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGameStage. */
    interface IAckGameStage {

        /** AckGameStage Stage */
        Stage: number;

        /** AckGameStage gameguid */
        gameguid?: (string|null);
    }

    /** Represents an AckGameStage. */
    class AckGameStage implements IAckGameStage {

        /**
         * Constructs a new AckGameStage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckGameStage);

        /** AckGameStage Stage. */
        public Stage: number;

        /** AckGameStage gameguid. */
        public gameguid: string;

        /**
         * Creates a new AckGameStage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGameStage instance
         */
        public static create(properties?: game.IAckGameStage): game.AckGameStage;

        /**
         * Encodes the specified AckGameStage message. Does not implicitly {@link game.AckGameStage.verify|verify} messages.
         * @param message AckGameStage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckGameStage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGameStage message, length delimited. Does not implicitly {@link game.AckGameStage.verify|verify} messages.
         * @param message AckGameStage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckGameStage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGameStage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGameStage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckGameStage;

        /**
         * Decodes an AckGameStage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGameStage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckGameStage;

        /**
         * Verifies an AckGameStage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a StageID. */
    interface IStageID {

        /** StageID STARGAME */
        STARGAME: number;

        /** StageID BUHUA */
        BUHUA: number;

        /** StageID PLAYING */
        PLAYING: number;

        /** StageID GAMEOVER */
        GAMEOVER: number;
    }

    /** Represents a StageID. */
    class StageID implements IStageID {

        /**
         * Constructs a new StageID.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IStageID);

        /** StageID STARGAME. */
        public STARGAME: number;

        /** StageID BUHUA. */
        public BUHUA: number;

        /** StageID PLAYING. */
        public PLAYING: number;

        /** StageID GAMEOVER. */
        public GAMEOVER: number;

        /**
         * Creates a new StageID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StageID instance
         */
        public static create(properties?: game.IStageID): game.StageID;

        /**
         * Encodes the specified StageID message. Does not implicitly {@link game.StageID.verify|verify} messages.
         * @param message StageID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IStageID, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified StageID message, length delimited. Does not implicitly {@link game.StageID.verify|verify} messages.
         * @param message StageID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IStageID, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a StageID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StageID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.StageID;

        /**
         * Decodes a StageID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StageID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.StageID;

        /**
         * Verifies a StageID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqSendCard. */
    interface IReqSendCard {

        /** ReqSendCard Card */
        Card: game.ICardsGroup;
    }

    /** Represents a ReqSendCard. */
    class ReqSendCard implements IReqSendCard {

        /**
         * Constructs a new ReqSendCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IReqSendCard);

        /** ReqSendCard Card. */
        public Card: game.ICardsGroup;

        /**
         * Creates a new ReqSendCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSendCard instance
         */
        public static create(properties?: game.IReqSendCard): game.ReqSendCard;

        /**
         * Encodes the specified ReqSendCard message. Does not implicitly {@link game.ReqSendCard.verify|verify} messages.
         * @param message ReqSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IReqSendCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqSendCard message, length delimited. Does not implicitly {@link game.ReqSendCard.verify|verify} messages.
         * @param message ReqSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IReqSendCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqSendCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ReqSendCard;

        /**
         * Decodes a ReqSendCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ReqSendCard;

        /**
         * Verifies a ReqSendCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an OperationType. */
    interface IOperationType {

        /** OperationType CATCH */
        CATCH: number;

        /** OperationType PLAY */
        PLAY: number;

        /** OperationType BUHUA */
        BUHUA: number;

        /** OperationType CHI */
        CHI: number;

        /** OperationType PENG */
        PENG: number;

        /** OperationType GANG */
        GANG: number;

        /** OperationType ANGANG */
        ANGANG: number;

        /** OperationType HU */
        HU: number;

        /** OperationType BUHUAMO */
        BUHUAMO: number;

        /** OperationType KANGMO */
        KANGMO: number;

        /** OperationType NO_OPERATION */
        NO_OPERATION: number;

        /** OperationType HANDCARDS */
        HANDCARDS: number;

        /** OperationType BUGANG */
        BUGANG: number;

        /** OperationType MOPLAY */
        MOPLAY: number;
    }

    /** Represents an OperationType. */
    class OperationType implements IOperationType {

        /**
         * Constructs a new OperationType.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IOperationType);

        /** OperationType CATCH. */
        public CATCH: number;

        /** OperationType PLAY. */
        public PLAY: number;

        /** OperationType BUHUA. */
        public BUHUA: number;

        /** OperationType CHI. */
        public CHI: number;

        /** OperationType PENG. */
        public PENG: number;

        /** OperationType GANG. */
        public GANG: number;

        /** OperationType ANGANG. */
        public ANGANG: number;

        /** OperationType HU. */
        public HU: number;

        /** OperationType BUHUAMO. */
        public BUHUAMO: number;

        /** OperationType KANGMO. */
        public KANGMO: number;

        /** OperationType NO_OPERATION. */
        public NO_OPERATION: number;

        /** OperationType HANDCARDS. */
        public HANDCARDS: number;

        /** OperationType BUGANG. */
        public BUGANG: number;

        /** OperationType MOPLAY. */
        public MOPLAY: number;

        /**
         * Creates a new OperationType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OperationType instance
         */
        public static create(properties?: game.IOperationType): game.OperationType;

        /**
         * Encodes the specified OperationType message. Does not implicitly {@link game.OperationType.verify|verify} messages.
         * @param message OperationType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IOperationType, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OperationType message, length delimited. Does not implicitly {@link game.OperationType.verify|verify} messages.
         * @param message OperationType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IOperationType, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an OperationType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OperationType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.OperationType;

        /**
         * Decodes an OperationType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OperationType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.OperationType;

        /**
         * Verifies an OperationType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckSendCard. */
    interface IAckSendCard {

        /** AckSendCard Card */
        Card: game.ICardsGroup;

        /** AckSendCard gangCoin */
        gangCoin?: (number[]|null);
    }

    /** Represents an AckSendCard. */
    class AckSendCard implements IAckSendCard {

        /**
         * Constructs a new AckSendCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckSendCard);

        /** AckSendCard Card. */
        public Card: game.ICardsGroup;

        /** AckSendCard gangCoin. */
        public gangCoin: number[];

        /**
         * Creates a new AckSendCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckSendCard instance
         */
        public static create(properties?: game.IAckSendCard): game.AckSendCard;

        /**
         * Encodes the specified AckSendCard message. Does not implicitly {@link game.AckSendCard.verify|verify} messages.
         * @param message AckSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckSendCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckSendCard message, length delimited. Does not implicitly {@link game.AckSendCard.verify|verify} messages.
         * @param message AckSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckSendCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckSendCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckSendCard;

        /**
         * Decodes an AckSendCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckSendCard;

        /**
         * Verifies an AckSendCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckUserOperation. */
    interface IAckUserOperation {

        /** AckUserOperation Sit */
        Sit: number;

        /** AckUserOperation Chi */
        Chi: boolean;

        /** AckUserOperation ChiCards */
        ChiCards?: (game.ICardsGroup[]|null);

        /** AckUserOperation Peng */
        Peng: boolean;

        /** AckUserOperation PengCards */
        PengCards?: (game.ICardsGroup[]|null);

        /** AckUserOperation Gang */
        Gang: boolean;

        /** AckUserOperation GangCards */
        GangCards?: (game.ICardsGroup[]|null);

        /** AckUserOperation Hu */
        Hu: boolean;

        /** AckUserOperation HuCards */
        HuCards?: (game.ICardsGroup[]|null);

        /** AckUserOperation Call */
        Call: boolean;

        /** AckUserOperation CallCards */
        CallCards?: (game.IMahjongCallInfo[]|null);
    }

    /** Represents an AckUserOperation. */
    class AckUserOperation implements IAckUserOperation {

        /**
         * Constructs a new AckUserOperation.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckUserOperation);

        /** AckUserOperation Sit. */
        public Sit: number;

        /** AckUserOperation Chi. */
        public Chi: boolean;

        /** AckUserOperation ChiCards. */
        public ChiCards: game.ICardsGroup[];

        /** AckUserOperation Peng. */
        public Peng: boolean;

        /** AckUserOperation PengCards. */
        public PengCards: game.ICardsGroup[];

        /** AckUserOperation Gang. */
        public Gang: boolean;

        /** AckUserOperation GangCards. */
        public GangCards: game.ICardsGroup[];

        /** AckUserOperation Hu. */
        public Hu: boolean;

        /** AckUserOperation HuCards. */
        public HuCards: game.ICardsGroup[];

        /** AckUserOperation Call. */
        public Call: boolean;

        /** AckUserOperation CallCards. */
        public CallCards: game.IMahjongCallInfo[];

        /**
         * Creates a new AckUserOperation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckUserOperation instance
         */
        public static create(properties?: game.IAckUserOperation): game.AckUserOperation;

        /**
         * Encodes the specified AckUserOperation message. Does not implicitly {@link game.AckUserOperation.verify|verify} messages.
         * @param message AckUserOperation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckUserOperation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckUserOperation message, length delimited. Does not implicitly {@link game.AckUserOperation.verify|verify} messages.
         * @param message AckUserOperation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckUserOperation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckUserOperation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckUserOperation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckUserOperation;

        /**
         * Decodes an AckUserOperation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckUserOperation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckUserOperation;

        /**
         * Verifies an AckUserOperation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CardsGroup. */
    interface ICardsGroup {

        /** CardsGroup Sit */
        Sit: number;

        /** CardsGroup Type */
        Type: number;

        /** CardsGroup Cards */
        Cards?: (game.ICardInfo[]|null);

        /** CardsGroup ObtainCard */
        ObtainCard?: (game.ICardInfo|null);

        /** CardsGroup ObtainCardSit */
        ObtainCardSit?: (number|null);
    }

    /** Represents a CardsGroup. */
    class CardsGroup implements ICardsGroup {

        /**
         * Constructs a new CardsGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ICardsGroup);

        /** CardsGroup Sit. */
        public Sit: number;

        /** CardsGroup Type. */
        public Type: number;

        /** CardsGroup Cards. */
        public Cards: game.ICardInfo[];

        /** CardsGroup ObtainCard. */
        public ObtainCard?: (game.ICardInfo|null);

        /** CardsGroup ObtainCardSit. */
        public ObtainCardSit: number;

        /**
         * Creates a new CardsGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardsGroup instance
         */
        public static create(properties?: game.ICardsGroup): game.CardsGroup;

        /**
         * Encodes the specified CardsGroup message. Does not implicitly {@link game.CardsGroup.verify|verify} messages.
         * @param message CardsGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ICardsGroup, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardsGroup message, length delimited. Does not implicitly {@link game.CardsGroup.verify|verify} messages.
         * @param message CardsGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ICardsGroup, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardsGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.CardsGroup;

        /**
         * Decodes a CardsGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.CardsGroup;

        /**
         * Verifies a CardsGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MahjongFanNumType. */
    interface IMahjongFanNumType {

        /** MahjongFanNumType FanNum */
        FanNum: number;

        /** MahjongFanNumType FanType */
        FanType: number;

        /** MahjongFanNumType Cards */
        Cards?: (game.ICardInfo[]|null);
    }

    /** Represents a MahjongFanNumType. */
    class MahjongFanNumType implements IMahjongFanNumType {

        /**
         * Constructs a new MahjongFanNumType.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IMahjongFanNumType);

        /** MahjongFanNumType FanNum. */
        public FanNum: number;

        /** MahjongFanNumType FanType. */
        public FanType: number;

        /** MahjongFanNumType Cards. */
        public Cards: game.ICardInfo[];

        /**
         * Creates a new MahjongFanNumType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongFanNumType instance
         */
        public static create(properties?: game.IMahjongFanNumType): game.MahjongFanNumType;

        /**
         * Encodes the specified MahjongFanNumType message. Does not implicitly {@link game.MahjongFanNumType.verify|verify} messages.
         * @param message MahjongFanNumType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IMahjongFanNumType, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MahjongFanNumType message, length delimited. Does not implicitly {@link game.MahjongFanNumType.verify|verify} messages.
         * @param message MahjongFanNumType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IMahjongFanNumType, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MahjongFanNumType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongFanNumType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.MahjongFanNumType;

        /**
         * Decodes a MahjongFanNumType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongFanNumType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.MahjongFanNumType;

        /**
         * Verifies a MahjongFanNumType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MahjongFanName. */
    interface IMahjongFanName {

        /** MahjongFanName SSSBG */
        SSSBG: number;
    }

    /** Represents a MahjongFanName. */
    class MahjongFanName implements IMahjongFanName {

        /**
         * Constructs a new MahjongFanName.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IMahjongFanName);

        /** MahjongFanName SSSBG. */
        public SSSBG: number;

        /**
         * Creates a new MahjongFanName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongFanName instance
         */
        public static create(properties?: game.IMahjongFanName): game.MahjongFanName;

        /**
         * Encodes the specified MahjongFanName message. Does not implicitly {@link game.MahjongFanName.verify|verify} messages.
         * @param message MahjongFanName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IMahjongFanName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MahjongFanName message, length delimited. Does not implicitly {@link game.MahjongFanName.verify|verify} messages.
         * @param message MahjongFanName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IMahjongFanName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MahjongFanName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongFanName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.MahjongFanName;

        /**
         * Decodes a MahjongFanName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongFanName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.MahjongFanName;

        /**
         * Verifies a MahjongFanName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqPlayerTrust. */
    interface IReqPlayerTrust {

        /** ReqPlayerTrust sit */
        sit: number;
    }

    /** Represents a ReqPlayerTrust. */
    class ReqPlayerTrust implements IReqPlayerTrust {

        /**
         * Constructs a new ReqPlayerTrust.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IReqPlayerTrust);

        /** ReqPlayerTrust sit. */
        public sit: number;

        /**
         * Creates a new ReqPlayerTrust instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqPlayerTrust instance
         */
        public static create(properties?: game.IReqPlayerTrust): game.ReqPlayerTrust;

        /**
         * Encodes the specified ReqPlayerTrust message. Does not implicitly {@link game.ReqPlayerTrust.verify|verify} messages.
         * @param message ReqPlayerTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IReqPlayerTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqPlayerTrust message, length delimited. Does not implicitly {@link game.ReqPlayerTrust.verify|verify} messages.
         * @param message ReqPlayerTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IReqPlayerTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPlayerTrust message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqPlayerTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ReqPlayerTrust;

        /**
         * Decodes a ReqPlayerTrust message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqPlayerTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ReqPlayerTrust;

        /**
         * Verifies a ReqPlayerTrust message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckPlayerTrust. */
    interface IAckPlayerTrust {

        /** AckPlayerTrust TrustNum */
        TrustNum: number;

        /** AckPlayerTrust TrustSit */
        TrustSit: number;
    }

    /** Represents an AckPlayerTrust. */
    class AckPlayerTrust implements IAckPlayerTrust {

        /**
         * Constructs a new AckPlayerTrust.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckPlayerTrust);

        /** AckPlayerTrust TrustNum. */
        public TrustNum: number;

        /** AckPlayerTrust TrustSit. */
        public TrustSit: number;

        /**
         * Creates a new AckPlayerTrust instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckPlayerTrust instance
         */
        public static create(properties?: game.IAckPlayerTrust): game.AckPlayerTrust;

        /**
         * Encodes the specified AckPlayerTrust message. Does not implicitly {@link game.AckPlayerTrust.verify|verify} messages.
         * @param message AckPlayerTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckPlayerTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckPlayerTrust message, length delimited. Does not implicitly {@link game.AckPlayerTrust.verify|verify} messages.
         * @param message AckPlayerTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckPlayerTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckPlayerTrust message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckPlayerTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckPlayerTrust;

        /**
         * Decodes an AckPlayerTrust message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckPlayerTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckPlayerTrust;

        /**
         * Verifies an AckPlayerTrust message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqPlayerRelieveTrust. */
    interface IReqPlayerRelieveTrust {

        /** ReqPlayerRelieveTrust Sit */
        Sit: number;
    }

    /** Represents a ReqPlayerRelieveTrust. */
    class ReqPlayerRelieveTrust implements IReqPlayerRelieveTrust {

        /**
         * Constructs a new ReqPlayerRelieveTrust.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IReqPlayerRelieveTrust);

        /** ReqPlayerRelieveTrust Sit. */
        public Sit: number;

        /**
         * Creates a new ReqPlayerRelieveTrust instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqPlayerRelieveTrust instance
         */
        public static create(properties?: game.IReqPlayerRelieveTrust): game.ReqPlayerRelieveTrust;

        /**
         * Encodes the specified ReqPlayerRelieveTrust message. Does not implicitly {@link game.ReqPlayerRelieveTrust.verify|verify} messages.
         * @param message ReqPlayerRelieveTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IReqPlayerRelieveTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqPlayerRelieveTrust message, length delimited. Does not implicitly {@link game.ReqPlayerRelieveTrust.verify|verify} messages.
         * @param message ReqPlayerRelieveTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IReqPlayerRelieveTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPlayerRelieveTrust message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqPlayerRelieveTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ReqPlayerRelieveTrust;

        /**
         * Decodes a ReqPlayerRelieveTrust message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqPlayerRelieveTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ReqPlayerRelieveTrust;

        /**
         * Verifies a ReqPlayerRelieveTrust message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckPlayerRelieveTrust. */
    interface IAckPlayerRelieveTrust {

        /** AckPlayerRelieveTrust Sit */
        Sit: number;

        /** AckPlayerRelieveTrust RelieveTrustSit */
        RelieveTrustSit: number;
    }

    /** Represents an AckPlayerRelieveTrust. */
    class AckPlayerRelieveTrust implements IAckPlayerRelieveTrust {

        /**
         * Constructs a new AckPlayerRelieveTrust.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckPlayerRelieveTrust);

        /** AckPlayerRelieveTrust Sit. */
        public Sit: number;

        /** AckPlayerRelieveTrust RelieveTrustSit. */
        public RelieveTrustSit: number;

        /**
         * Creates a new AckPlayerRelieveTrust instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckPlayerRelieveTrust instance
         */
        public static create(properties?: game.IAckPlayerRelieveTrust): game.AckPlayerRelieveTrust;

        /**
         * Encodes the specified AckPlayerRelieveTrust message. Does not implicitly {@link game.AckPlayerRelieveTrust.verify|verify} messages.
         * @param message AckPlayerRelieveTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckPlayerRelieveTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckPlayerRelieveTrust message, length delimited. Does not implicitly {@link game.AckPlayerRelieveTrust.verify|verify} messages.
         * @param message AckPlayerRelieveTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckPlayerRelieveTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckPlayerRelieveTrust message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckPlayerRelieveTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckPlayerRelieveTrust;

        /**
         * Decodes an AckPlayerRelieveTrust message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckPlayerRelieveTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckPlayerRelieveTrust;

        /**
         * Verifies an AckPlayerRelieveTrust message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqGameDelay. */
    interface IReqGameDelay {

        /** ReqGameDelay Sit */
        Sit: number;
    }

    /** Represents a ReqGameDelay. */
    class ReqGameDelay implements IReqGameDelay {

        /**
         * Constructs a new ReqGameDelay.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IReqGameDelay);

        /** ReqGameDelay Sit. */
        public Sit: number;

        /**
         * Creates a new ReqGameDelay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqGameDelay instance
         */
        public static create(properties?: game.IReqGameDelay): game.ReqGameDelay;

        /**
         * Encodes the specified ReqGameDelay message. Does not implicitly {@link game.ReqGameDelay.verify|verify} messages.
         * @param message ReqGameDelay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IReqGameDelay, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqGameDelay message, length delimited. Does not implicitly {@link game.ReqGameDelay.verify|verify} messages.
         * @param message ReqGameDelay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IReqGameDelay, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqGameDelay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqGameDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ReqGameDelay;

        /**
         * Decodes a ReqGameDelay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqGameDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ReqGameDelay;

        /**
         * Verifies a ReqGameDelay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGameDelay. */
    interface IAckGameDelay {

        /** AckGameDelay Success */
        Success: boolean;

        /** AckGameDelay Sit */
        Sit: number;
    }

    /** Represents an AckGameDelay. */
    class AckGameDelay implements IAckGameDelay {

        /**
         * Constructs a new AckGameDelay.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckGameDelay);

        /** AckGameDelay Success. */
        public Success: boolean;

        /** AckGameDelay Sit. */
        public Sit: number;

        /**
         * Creates a new AckGameDelay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGameDelay instance
         */
        public static create(properties?: game.IAckGameDelay): game.AckGameDelay;

        /**
         * Encodes the specified AckGameDelay message. Does not implicitly {@link game.AckGameDelay.verify|verify} messages.
         * @param message AckGameDelay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckGameDelay, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGameDelay message, length delimited. Does not implicitly {@link game.AckGameDelay.verify|verify} messages.
         * @param message AckGameDelay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckGameDelay, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGameDelay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGameDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckGameDelay;

        /**
         * Decodes an AckGameDelay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGameDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckGameDelay;

        /**
         * Verifies an AckGameDelay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGameContinued. */
    interface IAckGameContinued {

        /** AckGameContinued FirstDice */
        FirstDice: string;

        /** AckGameContinued SecondDice */
        SecondDice: string;

        /** AckGameContinued BeginCardindex */
        BeginCardindex: number;

        /** AckGameContinued EndCardindex */
        EndCardindex: number;

        /** AckGameContinued CardPond */
        CardPond?: (game.ICardPondInfo[]|null);

        /** AckGameContinued HandCards */
        HandCards?: (game.IPlayerHandCards[]|null);

        /** AckGameContinued CurrentCard */
        CurrentCard?: (game.ICardsGroup|null);

        /** AckGameContinued CurrentSit */
        CurrentSit: number;

        /** AckGameContinued TrustNum */
        TrustNum: number;

        /** AckGameContinued DelayTimes */
        DelayTimes: number;

        /** AckGameContinued Stage */
        Stage: number;

        /** AckGameContinued IsMoPai */
        IsMoPai?: (boolean|null);

        /** AckGameContinued Card */
        Card?: (game.ICardInfo|null);

        /** AckGameContinued HistoryData */
        HistoryData?: (game.IGameHistoryData[]|null);

        /** AckGameContinued CuoHuSeat */
        CuoHuSeat?: (number[]|null);

        /** AckGameContinued PlayerState */
        PlayerState?: (number[]|null);

        /** AckGameContinued dingque_color */
        dingque_color?: (number[]|null);

        /** AckGameContinued huan_san_zhang */
        huan_san_zhang?: (number|null);

        /** AckGameContinued hupai0 */
        hupai0?: (number[]|null);

        /** AckGameContinued hupai1 */
        hupai1?: (number[]|null);

        /** AckGameContinued hupai2 */
        hupai2?: (number[]|null);

        /** AckGameContinued hupai3 */
        hupai3?: (number[]|null);

        /** AckGameContinued game_guid */
        game_guid?: (string|null);

        /** AckGameContinued hu_player */
        hu_player?: (game.IHuSeq[]|null);

        /** AckGameContinued CallCards */
        CallCards?: (game.IMahjongCallInfo[]|null);
    }

    /** Represents an AckGameContinued. */
    class AckGameContinued implements IAckGameContinued {

        /**
         * Constructs a new AckGameContinued.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckGameContinued);

        /** AckGameContinued FirstDice. */
        public FirstDice: string;

        /** AckGameContinued SecondDice. */
        public SecondDice: string;

        /** AckGameContinued BeginCardindex. */
        public BeginCardindex: number;

        /** AckGameContinued EndCardindex. */
        public EndCardindex: number;

        /** AckGameContinued CardPond. */
        public CardPond: game.ICardPondInfo[];

        /** AckGameContinued HandCards. */
        public HandCards: game.IPlayerHandCards[];

        /** AckGameContinued CurrentCard. */
        public CurrentCard?: (game.ICardsGroup|null);

        /** AckGameContinued CurrentSit. */
        public CurrentSit: number;

        /** AckGameContinued TrustNum. */
        public TrustNum: number;

        /** AckGameContinued DelayTimes. */
        public DelayTimes: number;

        /** AckGameContinued Stage. */
        public Stage: number;

        /** AckGameContinued IsMoPai. */
        public IsMoPai: boolean;

        /** AckGameContinued Card. */
        public Card?: (game.ICardInfo|null);

        /** AckGameContinued HistoryData. */
        public HistoryData: game.IGameHistoryData[];

        /** AckGameContinued CuoHuSeat. */
        public CuoHuSeat: number[];

        /** AckGameContinued PlayerState. */
        public PlayerState: number[];

        /** AckGameContinued dingque_color. */
        public dingque_color: number[];

        /** AckGameContinued huan_san_zhang. */
        public huan_san_zhang: number;

        /** AckGameContinued hupai0. */
        public hupai0: number[];

        /** AckGameContinued hupai1. */
        public hupai1: number[];

        /** AckGameContinued hupai2. */
        public hupai2: number[];

        /** AckGameContinued hupai3. */
        public hupai3: number[];

        /** AckGameContinued game_guid. */
        public game_guid: string;

        /** AckGameContinued hu_player. */
        public hu_player: game.IHuSeq[];

        /** AckGameContinued CallCards. */
        public CallCards: game.IMahjongCallInfo[];

        /**
         * Creates a new AckGameContinued instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGameContinued instance
         */
        public static create(properties?: game.IAckGameContinued): game.AckGameContinued;

        /**
         * Encodes the specified AckGameContinued message. Does not implicitly {@link game.AckGameContinued.verify|verify} messages.
         * @param message AckGameContinued message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckGameContinued, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGameContinued message, length delimited. Does not implicitly {@link game.AckGameContinued.verify|verify} messages.
         * @param message AckGameContinued message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckGameContinued, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGameContinued message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGameContinued
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckGameContinued;

        /**
         * Decodes an AckGameContinued message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGameContinued
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckGameContinued;

        /**
         * Verifies an AckGameContinued message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HuSeq. */
    interface IHuSeq {

        /** HuSeq self_sit */
        self_sit?: (number|null);

        /** HuSeq pao_sit */
        pao_sit?: (number|null);
    }

    /** Represents a HuSeq. */
    class HuSeq implements IHuSeq {

        /**
         * Constructs a new HuSeq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IHuSeq);

        /** HuSeq self_sit. */
        public self_sit: number;

        /** HuSeq pao_sit. */
        public pao_sit: number;

        /**
         * Creates a new HuSeq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HuSeq instance
         */
        public static create(properties?: game.IHuSeq): game.HuSeq;

        /**
         * Encodes the specified HuSeq message. Does not implicitly {@link game.HuSeq.verify|verify} messages.
         * @param message HuSeq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IHuSeq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HuSeq message, length delimited. Does not implicitly {@link game.HuSeq.verify|verify} messages.
         * @param message HuSeq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IHuSeq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HuSeq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HuSeq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.HuSeq;

        /**
         * Decodes a HuSeq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HuSeq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.HuSeq;

        /**
         * Verifies a HuSeq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GameHistoryData. */
    interface IGameHistoryData {

        /** GameHistoryData Cards */
        Cards: game.IGameResultCards;

        /** GameHistoryData ResultData */
        ResultData?: (game.IGameResultIntegralCoin[]|null);

        /** GameHistoryData CuoHuSeat */
        CuoHuSeat?: (number[]|null);
    }

    /** Represents a GameHistoryData. */
    class GameHistoryData implements IGameHistoryData {

        /**
         * Constructs a new GameHistoryData.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGameHistoryData);

        /** GameHistoryData Cards. */
        public Cards: game.IGameResultCards;

        /** GameHistoryData ResultData. */
        public ResultData: game.IGameResultIntegralCoin[];

        /** GameHistoryData CuoHuSeat. */
        public CuoHuSeat: number[];

        /**
         * Creates a new GameHistoryData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameHistoryData instance
         */
        public static create(properties?: game.IGameHistoryData): game.GameHistoryData;

        /**
         * Encodes the specified GameHistoryData message. Does not implicitly {@link game.GameHistoryData.verify|verify} messages.
         * @param message GameHistoryData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGameHistoryData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameHistoryData message, length delimited. Does not implicitly {@link game.GameHistoryData.verify|verify} messages.
         * @param message GameHistoryData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGameHistoryData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameHistoryData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.GameHistoryData;

        /**
         * Decodes a GameHistoryData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.GameHistoryData;

        /**
         * Verifies a GameHistoryData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GameResultIntegralCoin. */
    interface IGameResultIntegralCoin {

        /** GameResultIntegralCoin UserName */
        UserName: string;

        /** GameResultIntegralCoin Integral */
        Integral: number;

        /** GameResultIntegralCoin Coin */
        Coin: number;

        /** GameResultIntegralCoin UserShowName */
        UserShowName?: (string|null);
    }

    /** Represents a GameResultIntegralCoin. */
    class GameResultIntegralCoin implements IGameResultIntegralCoin {

        /**
         * Constructs a new GameResultIntegralCoin.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGameResultIntegralCoin);

        /** GameResultIntegralCoin UserName. */
        public UserName: string;

        /** GameResultIntegralCoin Integral. */
        public Integral: number;

        /** GameResultIntegralCoin Coin. */
        public Coin: number;

        /** GameResultIntegralCoin UserShowName. */
        public UserShowName: string;

        /**
         * Creates a new GameResultIntegralCoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResultIntegralCoin instance
         */
        public static create(properties?: game.IGameResultIntegralCoin): game.GameResultIntegralCoin;

        /**
         * Encodes the specified GameResultIntegralCoin message. Does not implicitly {@link game.GameResultIntegralCoin.verify|verify} messages.
         * @param message GameResultIntegralCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGameResultIntegralCoin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameResultIntegralCoin message, length delimited. Does not implicitly {@link game.GameResultIntegralCoin.verify|verify} messages.
         * @param message GameResultIntegralCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGameResultIntegralCoin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameResultIntegralCoin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResultIntegralCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.GameResultIntegralCoin;

        /**
         * Decodes a GameResultIntegralCoin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameResultIntegralCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.GameResultIntegralCoin;

        /**
         * Verifies a GameResultIntegralCoin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GameResultCards. */
    interface IGameResultCards {

        /** GameResultCards Sit */
        Sit: number;

        /** GameResultCards Cards */
        Cards?: (game.ICardsGroup[]|null);

        /** GameResultCards Type */
        Type?: (game.IMahjongFanNumType[]|null);

        /** GameResultCards ObtainCard */
        ObtainCard?: (game.ICardInfo|null);

        /** GameResultCards ObtainCardSit */
        ObtainCardSit?: (number|null);
    }

    /** Represents a GameResultCards. */
    class GameResultCards implements IGameResultCards {

        /**
         * Constructs a new GameResultCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGameResultCards);

        /** GameResultCards Sit. */
        public Sit: number;

        /** GameResultCards Cards. */
        public Cards: game.ICardsGroup[];

        /** GameResultCards Type. */
        public Type: game.IMahjongFanNumType[];

        /** GameResultCards ObtainCard. */
        public ObtainCard?: (game.ICardInfo|null);

        /** GameResultCards ObtainCardSit. */
        public ObtainCardSit: number;

        /**
         * Creates a new GameResultCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResultCards instance
         */
        public static create(properties?: game.IGameResultCards): game.GameResultCards;

        /**
         * Encodes the specified GameResultCards message. Does not implicitly {@link game.GameResultCards.verify|verify} messages.
         * @param message GameResultCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGameResultCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameResultCards message, length delimited. Does not implicitly {@link game.GameResultCards.verify|verify} messages.
         * @param message GameResultCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGameResultCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameResultCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResultCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.GameResultCards;

        /**
         * Decodes a GameResultCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameResultCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.GameResultCards;

        /**
         * Verifies a GameResultCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerHandCards. */
    interface IPlayerHandCards {

        /** PlayerHandCards Cards */
        Cards?: (game.ICardsGroup[]|null);
    }

    /** Represents a PlayerHandCards. */
    class PlayerHandCards implements IPlayerHandCards {

        /**
         * Constructs a new PlayerHandCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPlayerHandCards);

        /** PlayerHandCards Cards. */
        public Cards: game.ICardsGroup[];

        /**
         * Creates a new PlayerHandCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerHandCards instance
         */
        public static create(properties?: game.IPlayerHandCards): game.PlayerHandCards;

        /**
         * Encodes the specified PlayerHandCards message. Does not implicitly {@link game.PlayerHandCards.verify|verify} messages.
         * @param message PlayerHandCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPlayerHandCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerHandCards message, length delimited. Does not implicitly {@link game.PlayerHandCards.verify|verify} messages.
         * @param message PlayerHandCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPlayerHandCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerHandCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerHandCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.PlayerHandCards;

        /**
         * Decodes a PlayerHandCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerHandCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.PlayerHandCards;

        /**
         * Verifies a PlayerHandCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CardPondInfo. */
    interface ICardPondInfo {

        /** CardPondInfo Cards */
        Cards?: (game.ICardInfo[]|null);
    }

    /** Represents a CardPondInfo. */
    class CardPondInfo implements ICardPondInfo {

        /**
         * Constructs a new CardPondInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ICardPondInfo);

        /** CardPondInfo Cards. */
        public Cards: game.ICardInfo[];

        /**
         * Creates a new CardPondInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardPondInfo instance
         */
        public static create(properties?: game.ICardPondInfo): game.CardPondInfo;

        /**
         * Encodes the specified CardPondInfo message. Does not implicitly {@link game.CardPondInfo.verify|verify} messages.
         * @param message CardPondInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ICardPondInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardPondInfo message, length delimited. Does not implicitly {@link game.CardPondInfo.verify|verify} messages.
         * @param message CardPondInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ICardPondInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardPondInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardPondInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.CardPondInfo;

        /**
         * Decodes a CardPondInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardPondInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.CardPondInfo;

        /**
         * Verifies a CardPondInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DuxLiveTick. */
    interface IDuxLiveTick {

        /** DuxLiveTick time */
        time: (number|Long);
    }

    /** Represents a DuxLiveTick. */
    class DuxLiveTick implements IDuxLiveTick {

        /**
         * Constructs a new DuxLiveTick.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IDuxLiveTick);

        /** DuxLiveTick time. */
        public time: (number|Long);

        /**
         * Creates a new DuxLiveTick instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DuxLiveTick instance
         */
        public static create(properties?: game.IDuxLiveTick): game.DuxLiveTick;

        /**
         * Encodes the specified DuxLiveTick message. Does not implicitly {@link game.DuxLiveTick.verify|verify} messages.
         * @param message DuxLiveTick message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IDuxLiveTick, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DuxLiveTick message, length delimited. Does not implicitly {@link game.DuxLiveTick.verify|verify} messages.
         * @param message DuxLiveTick message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IDuxLiveTick, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DuxLiveTick message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DuxLiveTick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.DuxLiveTick;

        /**
         * Decodes a DuxLiveTick message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DuxLiveTick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.DuxLiveTick;

        /**
         * Verifies a DuxLiveTick message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqMahJongSetOpenDoorTile. */
    interface IReqMahJongSetOpenDoorTile {

        /** ReqMahJongSetOpenDoorTile Sit */
        Sit: number;

        /** ReqMahJongSetOpenDoorTile CardsColor */
        CardsColor?: (number[]|null);

        /** ReqMahJongSetOpenDoorTile CardsValue */
        CardsValue?: (number[]|null);
    }

    /** Represents a ReqMahJongSetOpenDoorTile. */
    class ReqMahJongSetOpenDoorTile implements IReqMahJongSetOpenDoorTile {

        /**
         * Constructs a new ReqMahJongSetOpenDoorTile.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IReqMahJongSetOpenDoorTile);

        /** ReqMahJongSetOpenDoorTile Sit. */
        public Sit: number;

        /** ReqMahJongSetOpenDoorTile CardsColor. */
        public CardsColor: number[];

        /** ReqMahJongSetOpenDoorTile CardsValue. */
        public CardsValue: number[];

        /**
         * Creates a new ReqMahJongSetOpenDoorTile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqMahJongSetOpenDoorTile instance
         */
        public static create(properties?: game.IReqMahJongSetOpenDoorTile): game.ReqMahJongSetOpenDoorTile;

        /**
         * Encodes the specified ReqMahJongSetOpenDoorTile message. Does not implicitly {@link game.ReqMahJongSetOpenDoorTile.verify|verify} messages.
         * @param message ReqMahJongSetOpenDoorTile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IReqMahJongSetOpenDoorTile, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqMahJongSetOpenDoorTile message, length delimited. Does not implicitly {@link game.ReqMahJongSetOpenDoorTile.verify|verify} messages.
         * @param message ReqMahJongSetOpenDoorTile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IReqMahJongSetOpenDoorTile, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqMahJongSetOpenDoorTile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqMahJongSetOpenDoorTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ReqMahJongSetOpenDoorTile;

        /**
         * Decodes a ReqMahJongSetOpenDoorTile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqMahJongSetOpenDoorTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ReqMahJongSetOpenDoorTile;

        /**
         * Verifies a ReqMahJongSetOpenDoorTile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqMahJongSetWallTile. */
    interface IReqMahJongSetWallTile {

        /** ReqMahJongSetWallTile Sit */
        Sit: number;

        /** ReqMahJongSetWallTile CardColor */
        CardColor: number;

        /** ReqMahJongSetWallTile CardValue */
        CardValue: number;
    }

    /** Represents a ReqMahJongSetWallTile. */
    class ReqMahJongSetWallTile implements IReqMahJongSetWallTile {

        /**
         * Constructs a new ReqMahJongSetWallTile.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IReqMahJongSetWallTile);

        /** ReqMahJongSetWallTile Sit. */
        public Sit: number;

        /** ReqMahJongSetWallTile CardColor. */
        public CardColor: number;

        /** ReqMahJongSetWallTile CardValue. */
        public CardValue: number;

        /**
         * Creates a new ReqMahJongSetWallTile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqMahJongSetWallTile instance
         */
        public static create(properties?: game.IReqMahJongSetWallTile): game.ReqMahJongSetWallTile;

        /**
         * Encodes the specified ReqMahJongSetWallTile message. Does not implicitly {@link game.ReqMahJongSetWallTile.verify|verify} messages.
         * @param message ReqMahJongSetWallTile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IReqMahJongSetWallTile, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqMahJongSetWallTile message, length delimited. Does not implicitly {@link game.ReqMahJongSetWallTile.verify|verify} messages.
         * @param message ReqMahJongSetWallTile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IReqMahJongSetWallTile, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqMahJongSetWallTile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqMahJongSetWallTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ReqMahJongSetWallTile;

        /**
         * Decodes a ReqMahJongSetWallTile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqMahJongSetWallTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ReqMahJongSetWallTile;

        /**
         * Verifies a ReqMahJongSetWallTile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckWrongHu. */
    interface IAckWrongHu {

        /** AckWrongHu Sit */
        Sit: number;

        /** AckWrongHu Cards */
        Cards?: (game.ICardsGroup[]|null);
    }

    /** Represents an AckWrongHu. */
    class AckWrongHu implements IAckWrongHu {

        /**
         * Constructs a new AckWrongHu.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckWrongHu);

        /** AckWrongHu Sit. */
        public Sit: number;

        /** AckWrongHu Cards. */
        public Cards: game.ICardsGroup[];

        /**
         * Creates a new AckWrongHu instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckWrongHu instance
         */
        public static create(properties?: game.IAckWrongHu): game.AckWrongHu;

        /**
         * Encodes the specified AckWrongHu message. Does not implicitly {@link game.AckWrongHu.verify|verify} messages.
         * @param message AckWrongHu message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckWrongHu, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckWrongHu message, length delimited. Does not implicitly {@link game.AckWrongHu.verify|verify} messages.
         * @param message AckWrongHu message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckWrongHu, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckWrongHu message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckWrongHu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckWrongHu;

        /**
         * Decodes an AckWrongHu message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckWrongHu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckWrongHu;

        /**
         * Verifies an AckWrongHu message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RankResult. */
    interface IRankResult {

        /** RankResult tableId */
        tableId: number;

        /** RankResult playerResult */
        playerResult?: (game.IRankResultPlayer[]|null);

        /** RankResult Type */
        Type: number;

        /** RankResult starttime */
        starttime: number;

        /** RankResult endtime */
        endtime: number;

        /** RankResult paipuUrl */
        paipuUrl: string;

        /** RankResult societyID */
        societyID?: (number|null);

        /** RankResult roomID */
        roomID?: (number|Long|null);

        /** RankResult entercodeID */
        entercodeID?: (Uint8Array|null);
    }

    /** Represents a RankResult. */
    class RankResult implements IRankResult {

        /**
         * Constructs a new RankResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IRankResult);

        /** RankResult tableId. */
        public tableId: number;

        /** RankResult playerResult. */
        public playerResult: game.IRankResultPlayer[];

        /** RankResult Type. */
        public Type: number;

        /** RankResult starttime. */
        public starttime: number;

        /** RankResult endtime. */
        public endtime: number;

        /** RankResult paipuUrl. */
        public paipuUrl: string;

        /** RankResult societyID. */
        public societyID: number;

        /** RankResult roomID. */
        public roomID: (number|Long);

        /** RankResult entercodeID. */
        public entercodeID: Uint8Array;

        /**
         * Creates a new RankResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankResult instance
         */
        public static create(properties?: game.IRankResult): game.RankResult;

        /**
         * Encodes the specified RankResult message. Does not implicitly {@link game.RankResult.verify|verify} messages.
         * @param message RankResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IRankResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RankResult message, length delimited. Does not implicitly {@link game.RankResult.verify|verify} messages.
         * @param message RankResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IRankResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.RankResult;

        /**
         * Decodes a RankResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.RankResult;

        /**
         * Verifies a RankResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RankResultPlayer. */
    interface IRankResultPlayer {

        /** RankResultPlayer userName */
        userName: string;

        /** RankResultPlayer showName */
        showName: string;

        /** RankResultPlayer gameCoin */
        gameCoin: number;

        /** RankResultPlayer huPai */
        huPai?: (number|null);

        /** RankResultPlayer dianPao */
        dianPao?: (number|null);

        /** RankResultPlayer ziMo */
        ziMo?: (number|null);
    }

    /** Represents a RankResultPlayer. */
    class RankResultPlayer implements IRankResultPlayer {

        /**
         * Constructs a new RankResultPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IRankResultPlayer);

        /** RankResultPlayer userName. */
        public userName: string;

        /** RankResultPlayer showName. */
        public showName: string;

        /** RankResultPlayer gameCoin. */
        public gameCoin: number;

        /** RankResultPlayer huPai. */
        public huPai: number;

        /** RankResultPlayer dianPao. */
        public dianPao: number;

        /** RankResultPlayer ziMo. */
        public ziMo: number;

        /**
         * Creates a new RankResultPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankResultPlayer instance
         */
        public static create(properties?: game.IRankResultPlayer): game.RankResultPlayer;

        /**
         * Encodes the specified RankResultPlayer message. Does not implicitly {@link game.RankResultPlayer.verify|verify} messages.
         * @param message RankResultPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IRankResultPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RankResultPlayer message, length delimited. Does not implicitly {@link game.RankResultPlayer.verify|verify} messages.
         * @param message RankResultPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IRankResultPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankResultPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankResultPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.RankResultPlayer;

        /**
         * Decodes a RankResultPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankResultPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.RankResultPlayer;

        /**
         * Verifies a RankResultPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DeleteTable. */
    interface IDeleteTable {

        /** DeleteTable RoleName */
        RoleName: string;

        /** DeleteTable showName */
        showName: string;

        /** DeleteTable NickName */
        NickName: string;

        /** DeleteTable RoomID */
        RoomID: (number|Long);

        /** DeleteTable seat */
        seat: number;

        /** DeleteTable time */
        time?: (number|Long|null);

        /** DeleteTable Operation */
        Operation?: (number|null);
    }

    /** Represents a DeleteTable. */
    class DeleteTable implements IDeleteTable {

        /**
         * Constructs a new DeleteTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IDeleteTable);

        /** DeleteTable RoleName. */
        public RoleName: string;

        /** DeleteTable showName. */
        public showName: string;

        /** DeleteTable NickName. */
        public NickName: string;

        /** DeleteTable RoomID. */
        public RoomID: (number|Long);

        /** DeleteTable seat. */
        public seat: number;

        /** DeleteTable time. */
        public time: (number|Long);

        /** DeleteTable Operation. */
        public Operation: number;

        /**
         * Creates a new DeleteTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteTable instance
         */
        public static create(properties?: game.IDeleteTable): game.DeleteTable;

        /**
         * Encodes the specified DeleteTable message. Does not implicitly {@link game.DeleteTable.verify|verify} messages.
         * @param message DeleteTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IDeleteTable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DeleteTable message, length delimited. Does not implicitly {@link game.DeleteTable.verify|verify} messages.
         * @param message DeleteTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IDeleteTable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DeleteTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.DeleteTable;

        /**
         * Decodes a DeleteTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.DeleteTable;

        /**
         * Verifies a DeleteTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DeleteVote. */
    interface IDeleteVote {

        /** DeleteVote RoleName */
        RoleName: string;

        /** DeleteVote showName */
        showName: string;

        /** DeleteVote NickName */
        NickName: string;

        /** DeleteVote RoomID */
        RoomID: (number|Long);

        /** DeleteVote seat */
        seat: number;

        /** DeleteVote isAgree */
        isAgree: boolean;
    }

    /** Represents a DeleteVote. */
    class DeleteVote implements IDeleteVote {

        /**
         * Constructs a new DeleteVote.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IDeleteVote);

        /** DeleteVote RoleName. */
        public RoleName: string;

        /** DeleteVote showName. */
        public showName: string;

        /** DeleteVote NickName. */
        public NickName: string;

        /** DeleteVote RoomID. */
        public RoomID: (number|Long);

        /** DeleteVote seat. */
        public seat: number;

        /** DeleteVote isAgree. */
        public isAgree: boolean;

        /**
         * Creates a new DeleteVote instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteVote instance
         */
        public static create(properties?: game.IDeleteVote): game.DeleteVote;

        /**
         * Encodes the specified DeleteVote message. Does not implicitly {@link game.DeleteVote.verify|verify} messages.
         * @param message DeleteVote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IDeleteVote, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DeleteVote message, length delimited. Does not implicitly {@link game.DeleteVote.verify|verify} messages.
         * @param message DeleteVote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IDeleteVote, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DeleteVote message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.DeleteVote;

        /**
         * Decodes a DeleteVote message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.DeleteVote;

        /**
         * Verifies a DeleteVote message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGNtcMessage. */
    interface IOGNtcMessage {

        /** OGNtcMessage result */
        result: number;

        /** OGNtcMessage msg */
        msg: string;
    }

    /** Represents a OGNtcMessage. */
    class OGNtcMessage implements IOGNtcMessage {

        /**
         * Constructs a new OGNtcMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IOGNtcMessage);

        /** OGNtcMessage result. */
        public result: number;

        /** OGNtcMessage msg. */
        public msg: string;

        /**
         * Creates a new OGNtcMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGNtcMessage instance
         */
        public static create(properties?: game.IOGNtcMessage): game.OGNtcMessage;

        /**
         * Encodes the specified OGNtcMessage message. Does not implicitly {@link game.OGNtcMessage.verify|verify} messages.
         * @param message OGNtcMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IOGNtcMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGNtcMessage message, length delimited. Does not implicitly {@link game.OGNtcMessage.verify|verify} messages.
         * @param message OGNtcMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IOGNtcMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGNtcMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGNtcMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.OGNtcMessage;

        /**
         * Decodes a OGNtcMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGNtcMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.OGNtcMessage;

        /**
         * Verifies a OGNtcMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGNtcGameChatMessage. */
    interface IOGNtcGameChatMessage {

        /** OGNtcGameChatMessage sit */
        sit: number;

        /** OGNtcGameChatMessage type */
        type: number;

        /** OGNtcGameChatMessage msg */
        msg?: (string|null);
    }

    /** Represents a OGNtcGameChatMessage. */
    class OGNtcGameChatMessage implements IOGNtcGameChatMessage {

        /**
         * Constructs a new OGNtcGameChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IOGNtcGameChatMessage);

        /** OGNtcGameChatMessage sit. */
        public sit: number;

        /** OGNtcGameChatMessage type. */
        public type: number;

        /** OGNtcGameChatMessage msg. */
        public msg: string;

        /**
         * Creates a new OGNtcGameChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGNtcGameChatMessage instance
         */
        public static create(properties?: game.IOGNtcGameChatMessage): game.OGNtcGameChatMessage;

        /**
         * Encodes the specified OGNtcGameChatMessage message. Does not implicitly {@link game.OGNtcGameChatMessage.verify|verify} messages.
         * @param message OGNtcGameChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IOGNtcGameChatMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGNtcGameChatMessage message, length delimited. Does not implicitly {@link game.OGNtcGameChatMessage.verify|verify} messages.
         * @param message OGNtcGameChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IOGNtcGameChatMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGNtcGameChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGNtcGameChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.OGNtcGameChatMessage;

        /**
         * Decodes a OGNtcGameChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGNtcGameChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.OGNtcGameChatMessage;

        /**
         * Verifies a OGNtcGameChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqHuanSanZhang. */
    interface IReqHuanSanZhang {

        /** ReqHuanSanZhang huan_san_zhang */
        huan_san_zhang?: (game.ICardInfo[]|null);

        /** ReqHuanSanZhang seat */
        seat: number;
    }

    /** Represents a ReqHuanSanZhang. */
    class ReqHuanSanZhang implements IReqHuanSanZhang {

        /**
         * Constructs a new ReqHuanSanZhang.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IReqHuanSanZhang);

        /** ReqHuanSanZhang huan_san_zhang. */
        public huan_san_zhang: game.ICardInfo[];

        /** ReqHuanSanZhang seat. */
        public seat: number;

        /**
         * Creates a new ReqHuanSanZhang instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqHuanSanZhang instance
         */
        public static create(properties?: game.IReqHuanSanZhang): game.ReqHuanSanZhang;

        /**
         * Encodes the specified ReqHuanSanZhang message. Does not implicitly {@link game.ReqHuanSanZhang.verify|verify} messages.
         * @param message ReqHuanSanZhang message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IReqHuanSanZhang, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqHuanSanZhang message, length delimited. Does not implicitly {@link game.ReqHuanSanZhang.verify|verify} messages.
         * @param message ReqHuanSanZhang message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IReqHuanSanZhang, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqHuanSanZhang message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqHuanSanZhang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ReqHuanSanZhang;

        /**
         * Decodes a ReqHuanSanZhang message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqHuanSanZhang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ReqHuanSanZhang;

        /**
         * Verifies a ReqHuanSanZhang message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckHuanSanZhang. */
    interface IAckHuanSanZhang {

        /** AckHuanSanZhang huan_san_zhang */
        huan_san_zhang?: (game.ICardInfo[]|null);

        /** AckHuanSanZhang order */
        order: number;

        /** AckHuanSanZhang req_huan */
        req_huan?: (game.ICardInfo[]|null);
    }

    /** Represents an AckHuanSanZhang. */
    class AckHuanSanZhang implements IAckHuanSanZhang {

        /**
         * Constructs a new AckHuanSanZhang.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckHuanSanZhang);

        /** AckHuanSanZhang huan_san_zhang. */
        public huan_san_zhang: game.ICardInfo[];

        /** AckHuanSanZhang order. */
        public order: number;

        /** AckHuanSanZhang req_huan. */
        public req_huan: game.ICardInfo[];

        /**
         * Creates a new AckHuanSanZhang instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckHuanSanZhang instance
         */
        public static create(properties?: game.IAckHuanSanZhang): game.AckHuanSanZhang;

        /**
         * Encodes the specified AckHuanSanZhang message. Does not implicitly {@link game.AckHuanSanZhang.verify|verify} messages.
         * @param message AckHuanSanZhang message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckHuanSanZhang, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckHuanSanZhang message, length delimited. Does not implicitly {@link game.AckHuanSanZhang.verify|verify} messages.
         * @param message AckHuanSanZhang message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckHuanSanZhang, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckHuanSanZhang message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckHuanSanZhang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckHuanSanZhang;

        /**
         * Decodes an AckHuanSanZhang message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckHuanSanZhang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckHuanSanZhang;

        /**
         * Verifies an AckHuanSanZhang message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqHuanSanZhangEnd. */
    interface IReqHuanSanZhangEnd {

        /** ReqHuanSanZhangEnd username */
        username: string;
    }

    /** Represents a ReqHuanSanZhangEnd. */
    class ReqHuanSanZhangEnd implements IReqHuanSanZhangEnd {

        /**
         * Constructs a new ReqHuanSanZhangEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IReqHuanSanZhangEnd);

        /** ReqHuanSanZhangEnd username. */
        public username: string;

        /**
         * Creates a new ReqHuanSanZhangEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqHuanSanZhangEnd instance
         */
        public static create(properties?: game.IReqHuanSanZhangEnd): game.ReqHuanSanZhangEnd;

        /**
         * Encodes the specified ReqHuanSanZhangEnd message. Does not implicitly {@link game.ReqHuanSanZhangEnd.verify|verify} messages.
         * @param message ReqHuanSanZhangEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IReqHuanSanZhangEnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqHuanSanZhangEnd message, length delimited. Does not implicitly {@link game.ReqHuanSanZhangEnd.verify|verify} messages.
         * @param message ReqHuanSanZhangEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IReqHuanSanZhangEnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqHuanSanZhangEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqHuanSanZhangEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ReqHuanSanZhangEnd;

        /**
         * Decodes a ReqHuanSanZhangEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqHuanSanZhangEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ReqHuanSanZhangEnd;

        /**
         * Verifies a ReqHuanSanZhangEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqDingQue. */
    interface IReqDingQue {

        /** ReqDingQue dingque */
        dingque: number;

        /** ReqDingQue seat */
        seat: number;
    }

    /** Represents a ReqDingQue. */
    class ReqDingQue implements IReqDingQue {

        /**
         * Constructs a new ReqDingQue.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IReqDingQue);

        /** ReqDingQue dingque. */
        public dingque: number;

        /** ReqDingQue seat. */
        public seat: number;

        /**
         * Creates a new ReqDingQue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqDingQue instance
         */
        public static create(properties?: game.IReqDingQue): game.ReqDingQue;

        /**
         * Encodes the specified ReqDingQue message. Does not implicitly {@link game.ReqDingQue.verify|verify} messages.
         * @param message ReqDingQue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IReqDingQue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqDingQue message, length delimited. Does not implicitly {@link game.ReqDingQue.verify|verify} messages.
         * @param message ReqDingQue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IReqDingQue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqDingQue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqDingQue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ReqDingQue;

        /**
         * Decodes a ReqDingQue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqDingQue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ReqDingQue;

        /**
         * Verifies a ReqDingQue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckDingQue. */
    interface IAckDingQue {

        /** AckDingQue dingque */
        dingque?: (number[]|null);
    }

    /** Represents an AckDingQue. */
    class AckDingQue implements IAckDingQue {

        /**
         * Constructs a new AckDingQue.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckDingQue);

        /** AckDingQue dingque. */
        public dingque: number[];

        /**
         * Creates a new AckDingQue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckDingQue instance
         */
        public static create(properties?: game.IAckDingQue): game.AckDingQue;

        /**
         * Encodes the specified AckDingQue message. Does not implicitly {@link game.AckDingQue.verify|verify} messages.
         * @param message AckDingQue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckDingQue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckDingQue message, length delimited. Does not implicitly {@link game.AckDingQue.verify|verify} messages.
         * @param message AckDingQue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckDingQue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckDingQue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckDingQue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckDingQue;

        /**
         * Decodes an AckDingQue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckDingQue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckDingQue;

        /**
         * Verifies an AckDingQue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGameStatus. */
    interface IAckGameStatus {

        /** AckGameStatus nstatus */
        nstatus?: (number[]|null);
    }

    /** Represents an AckGameStatus. */
    class AckGameStatus implements IAckGameStatus {

        /**
         * Constructs a new AckGameStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckGameStatus);

        /** AckGameStatus nstatus. */
        public nstatus: number[];

        /**
         * Creates a new AckGameStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGameStatus instance
         */
        public static create(properties?: game.IAckGameStatus): game.AckGameStatus;

        /**
         * Encodes the specified AckGameStatus message. Does not implicitly {@link game.AckGameStatus.verify|verify} messages.
         * @param message AckGameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckGameStatus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGameStatus message, length delimited. Does not implicitly {@link game.AckGameStatus.verify|verify} messages.
         * @param message AckGameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckGameStatus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGameStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckGameStatus;

        /**
         * Decodes an AckGameStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckGameStatus;

        /**
         * Verifies an AckGameStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TingCard. */
    interface ITingCard {

        /** TingCard FanType */
        FanType: number;

        /** TingCard CardIndex */
        CardIndex: number;
    }

    /** Represents a TingCard. */
    class TingCard implements ITingCard {

        /**
         * Constructs a new TingCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.ITingCard);

        /** TingCard FanType. */
        public FanType: number;

        /** TingCard CardIndex. */
        public CardIndex: number;

        /**
         * Creates a new TingCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TingCard instance
         */
        public static create(properties?: game.ITingCard): game.TingCard;

        /**
         * Encodes the specified TingCard message. Does not implicitly {@link game.TingCard.verify|verify} messages.
         * @param message TingCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.ITingCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TingCard message, length delimited. Does not implicitly {@link game.TingCard.verify|verify} messages.
         * @param message TingCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.ITingCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TingCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TingCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.TingCard;

        /**
         * Decodes a TingCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TingCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.TingCard;

        /**
         * Verifies a TingCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MahjongCallInfo. */
    interface IMahjongCallInfo {

        /** MahjongCallInfo ObtainCardIndex */
        ObtainCardIndex: number;

        /** MahjongCallInfo CallCards */
        CallCards?: (game.ITingCard[]|null);
    }

    /** Represents a MahjongCallInfo. */
    class MahjongCallInfo implements IMahjongCallInfo {

        /**
         * Constructs a new MahjongCallInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IMahjongCallInfo);

        /** MahjongCallInfo ObtainCardIndex. */
        public ObtainCardIndex: number;

        /** MahjongCallInfo CallCards. */
        public CallCards: game.ITingCard[];

        /**
         * Creates a new MahjongCallInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongCallInfo instance
         */
        public static create(properties?: game.IMahjongCallInfo): game.MahjongCallInfo;

        /**
         * Encodes the specified MahjongCallInfo message. Does not implicitly {@link game.MahjongCallInfo.verify|verify} messages.
         * @param message MahjongCallInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IMahjongCallInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MahjongCallInfo message, length delimited. Does not implicitly {@link game.MahjongCallInfo.verify|verify} messages.
         * @param message MahjongCallInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IMahjongCallInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MahjongCallInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongCallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.MahjongCallInfo;

        /**
         * Decodes a MahjongCallInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongCallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.MahjongCallInfo;

        /**
         * Verifies a MahjongCallInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGameResult. */
    interface IAckGameResult {

        /** AckGameResult tableGuid */
        tableGuid?: (string|null);

        /** AckGameResult IsOver */
        IsOver?: (number|null);

        /** AckGameResult playerInfo */
        playerInfo?: (game.IPlayerResultInfo[]|null);
    }

    /** Represents an AckGameResult. */
    class AckGameResult implements IAckGameResult {

        /**
         * Constructs a new AckGameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IAckGameResult);

        /** AckGameResult tableGuid. */
        public tableGuid: string;

        /** AckGameResult IsOver. */
        public IsOver: number;

        /** AckGameResult playerInfo. */
        public playerInfo: game.IPlayerResultInfo[];

        /**
         * Creates a new AckGameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGameResult instance
         */
        public static create(properties?: game.IAckGameResult): game.AckGameResult;

        /**
         * Encodes the specified AckGameResult message. Does not implicitly {@link game.AckGameResult.verify|verify} messages.
         * @param message AckGameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAckGameResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGameResult message, length delimited. Does not implicitly {@link game.AckGameResult.verify|verify} messages.
         * @param message AckGameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAckGameResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.AckGameResult;

        /**
         * Decodes an AckGameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.AckGameResult;

        /**
         * Verifies an AckGameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerResultInfo. */
    interface IPlayerResultInfo {

        /** PlayerResultInfo username */
        username: string;

        /** PlayerResultInfo seat */
        seat?: (number|null);

        /** PlayerResultInfo fantype */
        fantype?: (number|null);

        /** PlayerResultInfo wintype */
        wintype?: (number|null);

        /** PlayerResultInfo max_fan */
        max_fan?: (number|null);

        /** PlayerResultInfo gameCoin */
        gameCoin?: (number|null);

        /** PlayerResultInfo Coin */
        Coin?: (number|null);

        /** PlayerResultInfo feeCoin */
        feeCoin?: (number|null);

        /** PlayerResultInfo result_list_detail */
        result_list_detail?: (game.IScoreDescDetail[]|null);

        /** PlayerResultInfo handCards */
        handCards?: (game.ICardsGroup[]|null);
    }

    /** Represents a PlayerResultInfo. */
    class PlayerResultInfo implements IPlayerResultInfo {

        /**
         * Constructs a new PlayerResultInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IPlayerResultInfo);

        /** PlayerResultInfo username. */
        public username: string;

        /** PlayerResultInfo seat. */
        public seat: number;

        /** PlayerResultInfo fantype. */
        public fantype: number;

        /** PlayerResultInfo wintype. */
        public wintype: number;

        /** PlayerResultInfo max_fan. */
        public max_fan: number;

        /** PlayerResultInfo gameCoin. */
        public gameCoin: number;

        /** PlayerResultInfo Coin. */
        public Coin: number;

        /** PlayerResultInfo feeCoin. */
        public feeCoin: number;

        /** PlayerResultInfo result_list_detail. */
        public result_list_detail: game.IScoreDescDetail[];

        /** PlayerResultInfo handCards. */
        public handCards: game.ICardsGroup[];

        /**
         * Creates a new PlayerResultInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerResultInfo instance
         */
        public static create(properties?: game.IPlayerResultInfo): game.PlayerResultInfo;

        /**
         * Encodes the specified PlayerResultInfo message. Does not implicitly {@link game.PlayerResultInfo.verify|verify} messages.
         * @param message PlayerResultInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IPlayerResultInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerResultInfo message, length delimited. Does not implicitly {@link game.PlayerResultInfo.verify|verify} messages.
         * @param message PlayerResultInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IPlayerResultInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerResultInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerResultInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.PlayerResultInfo;

        /**
         * Decodes a PlayerResultInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerResultInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.PlayerResultInfo;

        /**
         * Verifies a PlayerResultInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ScoreDescDetail. */
    interface IScoreDescDetail {

        /** ScoreDescDetail type */
        type?: (number|null);

        /** ScoreDescDetail fannum */
        fannum?: (number|null);

        /** ScoreDescDetail score */
        score?: (number|null);

        /** ScoreDescDetail obtainsit */
        obtainsit?: (number|null);

        /** ScoreDescDetail selfseat */
        selfseat?: (number|null);

        /** ScoreDescDetail score_change */
        score_change?: (number[]|null);

        /** ScoreDescDetail fan_zhong */
        fan_zhong?: (number[]|null);

        /** ScoreDescDetail fan_num */
        fan_num?: (number[]|null);

        /** ScoreDescDetail huCardID */
        huCardID?: (number|null);
    }

    /** Represents a ScoreDescDetail. */
    class ScoreDescDetail implements IScoreDescDetail {

        /**
         * Constructs a new ScoreDescDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IScoreDescDetail);

        /** ScoreDescDetail type. */
        public type: number;

        /** ScoreDescDetail fannum. */
        public fannum: number;

        /** ScoreDescDetail score. */
        public score: number;

        /** ScoreDescDetail obtainsit. */
        public obtainsit: number;

        /** ScoreDescDetail selfseat. */
        public selfseat: number;

        /** ScoreDescDetail score_change. */
        public score_change: number[];

        /** ScoreDescDetail fan_zhong. */
        public fan_zhong: number[];

        /** ScoreDescDetail fan_num. */
        public fan_num: number[];

        /** ScoreDescDetail huCardID. */
        public huCardID: number;

        /**
         * Creates a new ScoreDescDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScoreDescDetail instance
         */
        public static create(properties?: game.IScoreDescDetail): game.ScoreDescDetail;

        /**
         * Encodes the specified ScoreDescDetail message. Does not implicitly {@link game.ScoreDescDetail.verify|verify} messages.
         * @param message ScoreDescDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IScoreDescDetail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ScoreDescDetail message, length delimited. Does not implicitly {@link game.ScoreDescDetail.verify|verify} messages.
         * @param message ScoreDescDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IScoreDescDetail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ScoreDescDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScoreDescDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.ScoreDescDetail;

        /**
         * Decodes a ScoreDescDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScoreDescDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.ScoreDescDetail;

        /**
         * Verifies a ScoreDescDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HuResultAck. */
    interface IHuResultAck {

        /** HuResultAck hulist */
        hulist?: (game.IHuData[]|null);
    }

    /** Represents a HuResultAck. */
    class HuResultAck implements IHuResultAck {

        /**
         * Constructs a new HuResultAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IHuResultAck);

        /** HuResultAck hulist. */
        public hulist: game.IHuData[];

        /**
         * Creates a new HuResultAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HuResultAck instance
         */
        public static create(properties?: game.IHuResultAck): game.HuResultAck;

        /**
         * Encodes the specified HuResultAck message. Does not implicitly {@link game.HuResultAck.verify|verify} messages.
         * @param message HuResultAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IHuResultAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HuResultAck message, length delimited. Does not implicitly {@link game.HuResultAck.verify|verify} messages.
         * @param message HuResultAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IHuResultAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HuResultAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HuResultAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.HuResultAck;

        /**
         * Decodes a HuResultAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HuResultAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.HuResultAck;

        /**
         * Verifies a HuResultAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HuData. */
    interface IHuData {

        /** HuData username */
        username: string;

        /** HuData seat */
        seat?: (number|null);

        /** HuData huInfo */
        huInfo?: (game.IScoreDescDetail|null);
    }

    /** Represents a HuData. */
    class HuData implements IHuData {

        /**
         * Constructs a new HuData.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IHuData);

        /** HuData username. */
        public username: string;

        /** HuData seat. */
        public seat: number;

        /** HuData huInfo. */
        public huInfo?: (game.IScoreDescDetail|null);

        /**
         * Creates a new HuData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HuData instance
         */
        public static create(properties?: game.IHuData): game.HuData;

        /**
         * Encodes the specified HuData message. Does not implicitly {@link game.HuData.verify|verify} messages.
         * @param message HuData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IHuData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HuData message, length delimited. Does not implicitly {@link game.HuData.verify|verify} messages.
         * @param message HuData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IHuData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HuData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HuData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game.HuData;

        /**
         * Decodes a HuData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HuData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game.HuData;

        /**
         * Verifies a HuData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace game2. */
declare namespace game2 {

    /** Properties of a ReqEnterGame. */
    interface IReqEnterGame {

        /** ReqEnterGame GameID */
        GameID: string;

        /** ReqEnterGame UserName */
        UserName?: (string|null);

        /** ReqEnterGame ticket */
        ticket?: (string|null);
    }

    /** Represents a ReqEnterGame. */
    class ReqEnterGame implements IReqEnterGame {

        /**
         * Constructs a new ReqEnterGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IReqEnterGame);

        /** ReqEnterGame GameID. */
        public GameID: string;

        /** ReqEnterGame UserName. */
        public UserName: string;

        /** ReqEnterGame ticket. */
        public ticket: string;

        /**
         * Creates a new ReqEnterGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEnterGame instance
         */
        public static create(properties?: game2.IReqEnterGame): game2.ReqEnterGame;

        /**
         * Encodes the specified ReqEnterGame message. Does not implicitly {@link game2.ReqEnterGame.verify|verify} messages.
         * @param message ReqEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IReqEnterGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqEnterGame message, length delimited. Does not implicitly {@link game2.ReqEnterGame.verify|verify} messages.
         * @param message ReqEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IReqEnterGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.ReqEnterGame;

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.ReqEnterGame;

        /**
         * Verifies a ReqEnterGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckEnterGame. */
    interface IAckEnterGame {

        /** AckEnterGame Result */
        Result: boolean;

        /** AckEnterGame GameID */
        GameID: string;

        /** AckEnterGame ErrorID */
        ErrorID: number;

        /** AckEnterGame game_guid */
        game_guid?: (string|null);
    }

    /** Represents an AckEnterGame. */
    class AckEnterGame implements IAckEnterGame {

        /**
         * Constructs a new AckEnterGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckEnterGame);

        /** AckEnterGame Result. */
        public Result: boolean;

        /** AckEnterGame GameID. */
        public GameID: string;

        /** AckEnterGame ErrorID. */
        public ErrorID: number;

        /** AckEnterGame game_guid. */
        public game_guid: string;

        /**
         * Creates a new AckEnterGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckEnterGame instance
         */
        public static create(properties?: game2.IAckEnterGame): game2.AckEnterGame;

        /**
         * Encodes the specified AckEnterGame message. Does not implicitly {@link game2.AckEnterGame.verify|verify} messages.
         * @param message AckEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckEnterGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckEnterGame message, length delimited. Does not implicitly {@link game2.AckEnterGame.verify|verify} messages.
         * @param message AckEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckEnterGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckEnterGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckEnterGame;

        /**
         * Decodes an AckEnterGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckEnterGame;

        /**
         * Verifies an AckEnterGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ErrorID. */
    interface IErrorID {

        /** ErrorID PLATER_NOT_ENOUGH */
        PLATER_NOT_ENOUGH: number;

        /** ErrorID GAMEID_IS_ERROR */
        GAMEID_IS_ERROR: number;
    }

    /** Represents an ErrorID. */
    class ErrorID implements IErrorID {

        /**
         * Constructs a new ErrorID.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IErrorID);

        /** ErrorID PLATER_NOT_ENOUGH. */
        public PLATER_NOT_ENOUGH: number;

        /** ErrorID GAMEID_IS_ERROR. */
        public GAMEID_IS_ERROR: number;

        /**
         * Creates a new ErrorID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorID instance
         */
        public static create(properties?: game2.IErrorID): game2.ErrorID;

        /**
         * Encodes the specified ErrorID message. Does not implicitly {@link game2.ErrorID.verify|verify} messages.
         * @param message ErrorID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IErrorID, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ErrorID message, length delimited. Does not implicitly {@link game2.ErrorID.verify|verify} messages.
         * @param message ErrorID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IErrorID, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ErrorID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.ErrorID;

        /**
         * Decodes an ErrorID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ErrorID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.ErrorID;

        /**
         * Verifies an ErrorID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqReadyGame. */
    interface IReqReadyGame {

        /** ReqReadyGame GameID */
        GameID: string;

        /** ReqReadyGame UserName */
        UserName?: (string|null);
    }

    /** Represents a ReqReadyGame. */
    class ReqReadyGame implements IReqReadyGame {

        /**
         * Constructs a new ReqReadyGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IReqReadyGame);

        /** ReqReadyGame GameID. */
        public GameID: string;

        /** ReqReadyGame UserName. */
        public UserName: string;

        /**
         * Creates a new ReqReadyGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqReadyGame instance
         */
        public static create(properties?: game2.IReqReadyGame): game2.ReqReadyGame;

        /**
         * Encodes the specified ReqReadyGame message. Does not implicitly {@link game2.ReqReadyGame.verify|verify} messages.
         * @param message ReqReadyGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IReqReadyGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqReadyGame message, length delimited. Does not implicitly {@link game2.ReqReadyGame.verify|verify} messages.
         * @param message ReqReadyGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IReqReadyGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqReadyGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqReadyGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.ReqReadyGame;

        /**
         * Decodes a ReqReadyGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqReadyGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.ReqReadyGame;

        /**
         * Verifies a ReqReadyGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGameOver. */
    interface IAckGameOver {

        /** AckGameOver ErrorID */
        ErrorID: number;
    }

    /** Represents an AckGameOver. */
    class AckGameOver implements IAckGameOver {

        /**
         * Constructs a new AckGameOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckGameOver);

        /** AckGameOver ErrorID. */
        public ErrorID: number;

        /**
         * Creates a new AckGameOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGameOver instance
         */
        public static create(properties?: game2.IAckGameOver): game2.AckGameOver;

        /**
         * Encodes the specified AckGameOver message. Does not implicitly {@link game2.AckGameOver.verify|verify} messages.
         * @param message AckGameOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckGameOver, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGameOver message, length delimited. Does not implicitly {@link game2.AckGameOver.verify|verify} messages.
         * @param message AckGameOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckGameOver, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGameOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckGameOver;

        /**
         * Decodes an AckGameOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGameOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckGameOver;

        /**
         * Verifies an AckGameOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckPlayerList. */
    interface IAckPlayerList {

        /** AckPlayerList PlayerList */
        PlayerList?: (game2.IPlayerInfo[]|null);
    }

    /** Represents an AckPlayerList. */
    class AckPlayerList implements IAckPlayerList {

        /**
         * Constructs a new AckPlayerList.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckPlayerList);

        /** AckPlayerList PlayerList. */
        public PlayerList: game2.IPlayerInfo[];

        /**
         * Creates a new AckPlayerList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckPlayerList instance
         */
        public static create(properties?: game2.IAckPlayerList): game2.AckPlayerList;

        /**
         * Encodes the specified AckPlayerList message. Does not implicitly {@link game2.AckPlayerList.verify|verify} messages.
         * @param message AckPlayerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckPlayerList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckPlayerList message, length delimited. Does not implicitly {@link game2.AckPlayerList.verify|verify} messages.
         * @param message AckPlayerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckPlayerList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckPlayerList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckPlayerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckPlayerList;

        /**
         * Decodes an AckPlayerList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckPlayerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckPlayerList;

        /**
         * Verifies an AckPlayerList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo UserName */
        UserName?: (string|null);

        /** PlayerInfo UsershowName */
        UsershowName?: (string|null);

        /** PlayerInfo UserImage */
        UserImage?: (string|null);

        /** PlayerInfo UserSit */
        UserSit?: (number|null);

        /** PlayerInfo Integral */
        Integral?: (number|null);

        /** PlayerInfo Coin */
        Coin?: (number|Long|null);

        /** PlayerInfo NowLevel */
        NowLevel?: (game2.IRank|null);

        /** PlayerInfo HisLevel */
        HisLevel?: (game2.IRank|null);

        /** PlayerInfo Stage */
        Stage?: (number|null);

        /** PlayerInfo Ranking */
        Ranking?: (number|null);

        /** PlayerInfo WinIntegral */
        WinIntegral?: (number|null);

        /** PlayerInfo TotalNum */
        TotalNum?: (number|null);

        /** PlayerInfo ReadyNum */
        ReadyNum?: (number|null);

        /** PlayerInfo HuNum */
        HuNum?: (number|null);

        /** PlayerInfo GunNum */
        GunNum?: (number|null);

        /** PlayerInfo ZimoNum */
        ZimoNum?: (number|null);

        /** PlayerInfo Sex */
        Sex?: (number|null);

        /** PlayerInfo IsMember */
        IsMember?: (boolean|null);

        /** PlayerInfo HistoryMaxLevel */
        HistoryMaxLevel?: (game2.IRank|null);

        /** PlayerInfo Average_Rank */
        Average_Rank?: (number|null);

        /** PlayerInfo Openingrate */
        Openingrate?: (number|null);

        /** PlayerInfo Round2_rank1 */
        Round2_rank1?: (number|null);

        /** PlayerInfo Round2_rank2 */
        Round2_rank2?: (number|null);

        /** PlayerInfo Round2_rank3 */
        Round2_rank3?: (number|null);

        /** PlayerInfo Round2_rank4 */
        Round2_rank4?: (number|null);

        /** PlayerInfo Round4_rank1 */
        Round4_rank1?: (number|null);

        /** PlayerInfo Round4_rank2 */
        Round4_rank2?: (number|null);

        /** PlayerInfo Round4_rank3 */
        Round4_rank3?: (number|null);

        /** PlayerInfo Round4_rank4 */
        Round4_rank4?: (number|null);

        /** PlayerInfo SocietyContributionValue */
        SocietyContributionValue?: (number|null);

        /** PlayerInfo SocietyPracticeType */
        SocietyPracticeType?: (number|null);

        /** PlayerInfo SocietyPracticeFirstCount */
        SocietyPracticeFirstCount?: (number|null);

        /** PlayerInfo SocietyPracticeSecondCount */
        SocietyPracticeSecondCount?: (number|null);

        /** PlayerInfo SocietyPracticeFourCount */
        SocietyPracticeFourCount?: (number|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IPlayerInfo);

        /** PlayerInfo UserName. */
        public UserName: string;

        /** PlayerInfo UsershowName. */
        public UsershowName: string;

        /** PlayerInfo UserImage. */
        public UserImage: string;

        /** PlayerInfo UserSit. */
        public UserSit: number;

        /** PlayerInfo Integral. */
        public Integral: number;

        /** PlayerInfo Coin. */
        public Coin: (number|Long);

        /** PlayerInfo NowLevel. */
        public NowLevel?: (game2.IRank|null);

        /** PlayerInfo HisLevel. */
        public HisLevel?: (game2.IRank|null);

        /** PlayerInfo Stage. */
        public Stage: number;

        /** PlayerInfo Ranking. */
        public Ranking: number;

        /** PlayerInfo WinIntegral. */
        public WinIntegral: number;

        /** PlayerInfo TotalNum. */
        public TotalNum: number;

        /** PlayerInfo ReadyNum. */
        public ReadyNum: number;

        /** PlayerInfo HuNum. */
        public HuNum: number;

        /** PlayerInfo GunNum. */
        public GunNum: number;

        /** PlayerInfo ZimoNum. */
        public ZimoNum: number;

        /** PlayerInfo Sex. */
        public Sex: number;

        /** PlayerInfo IsMember. */
        public IsMember: boolean;

        /** PlayerInfo HistoryMaxLevel. */
        public HistoryMaxLevel?: (game2.IRank|null);

        /** PlayerInfo Average_Rank. */
        public Average_Rank: number;

        /** PlayerInfo Openingrate. */
        public Openingrate: number;

        /** PlayerInfo Round2_rank1. */
        public Round2_rank1: number;

        /** PlayerInfo Round2_rank2. */
        public Round2_rank2: number;

        /** PlayerInfo Round2_rank3. */
        public Round2_rank3: number;

        /** PlayerInfo Round2_rank4. */
        public Round2_rank4: number;

        /** PlayerInfo Round4_rank1. */
        public Round4_rank1: number;

        /** PlayerInfo Round4_rank2. */
        public Round4_rank2: number;

        /** PlayerInfo Round4_rank3. */
        public Round4_rank3: number;

        /** PlayerInfo Round4_rank4. */
        public Round4_rank4: number;

        /** PlayerInfo SocietyContributionValue. */
        public SocietyContributionValue: number;

        /** PlayerInfo SocietyPracticeType. */
        public SocietyPracticeType: number;

        /** PlayerInfo SocietyPracticeFirstCount. */
        public SocietyPracticeFirstCount: number;

        /** PlayerInfo SocietyPracticeSecondCount. */
        public SocietyPracticeSecondCount: number;

        /** PlayerInfo SocietyPracticeFourCount. */
        public SocietyPracticeFourCount: number;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: game2.IPlayerInfo): game2.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link game2.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link game2.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Rank. */
    interface IRank {

        /** Rank duan */
        duan: number;

        /** Rank xing */
        xing: number;
    }

    /** Represents a Rank. */
    class Rank implements IRank {

        /**
         * Constructs a new Rank.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IRank);

        /** Rank duan. */
        public duan: number;

        /** Rank xing. */
        public xing: number;

        /**
         * Creates a new Rank instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Rank instance
         */
        public static create(properties?: game2.IRank): game2.Rank;

        /**
         * Encodes the specified Rank message. Does not implicitly {@link game2.Rank.verify|verify} messages.
         * @param message Rank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IRank, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Rank message, length delimited. Does not implicitly {@link game2.Rank.verify|verify} messages.
         * @param message Rank message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IRank, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Rank message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Rank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.Rank;

        /**
         * Decodes a Rank message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Rank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.Rank;

        /**
         * Verifies a Rank message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGameRule. */
    interface IAckGameRule {

        /** AckGameRule FirstSit */
        FirstSit: number;

        /** AckGameRule GameType */
        GameType: number;

        /** AckGameRule Is_Next_ChiPengGangTime */
        Is_Next_ChiPengGangTime: number;

        /** AckGameRule Not_Next_ChiPengGangTime */
        Not_Next_ChiPengGangTime: number;

        /** AckGameRule HuTime */
        HuTime: number;

        /** AckGameRule PlayTime */
        PlayTime: number;

        /** AckGameRule DelayTime */
        DelayTime: number;

        /** AckGameRule DelayRestrictions */
        DelayRestrictions: number;

        /** AckGameRule Bureau */
        Bureau: number;

        /** AckGameRule Ring */
        Ring: number;

        /** AckGameRule PAIR */
        PAIR: number;

        /** AckGameRule TrustRestrictions */
        TrustRestrictions: number;

        /** AckGameRule FirstSendTime */
        FirstSendTime: number;

        /** AckGameRule ChiPengGangSurplusTime */
        ChiPengGangSurplusTime: number;

        /** AckGameRule ArrangementCardsOverTime */
        ArrangementCardsOverTime: number;

        /** AckGameRule GoOnGaneTime */
        GoOnGaneTime: number;

        /** AckGameRule HuanSanzhang */
        HuanSanzhang?: (number|null);

        /** AckGameRule dingque */
        dingque?: (number|null);
    }

    /** Represents an AckGameRule. */
    class AckGameRule implements IAckGameRule {

        /**
         * Constructs a new AckGameRule.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckGameRule);

        /** AckGameRule FirstSit. */
        public FirstSit: number;

        /** AckGameRule GameType. */
        public GameType: number;

        /** AckGameRule Is_Next_ChiPengGangTime. */
        public Is_Next_ChiPengGangTime: number;

        /** AckGameRule Not_Next_ChiPengGangTime. */
        public Not_Next_ChiPengGangTime: number;

        /** AckGameRule HuTime. */
        public HuTime: number;

        /** AckGameRule PlayTime. */
        public PlayTime: number;

        /** AckGameRule DelayTime. */
        public DelayTime: number;

        /** AckGameRule DelayRestrictions. */
        public DelayRestrictions: number;

        /** AckGameRule Bureau. */
        public Bureau: number;

        /** AckGameRule Ring. */
        public Ring: number;

        /** AckGameRule PAIR. */
        public PAIR: number;

        /** AckGameRule TrustRestrictions. */
        public TrustRestrictions: number;

        /** AckGameRule FirstSendTime. */
        public FirstSendTime: number;

        /** AckGameRule ChiPengGangSurplusTime. */
        public ChiPengGangSurplusTime: number;

        /** AckGameRule ArrangementCardsOverTime. */
        public ArrangementCardsOverTime: number;

        /** AckGameRule GoOnGaneTime. */
        public GoOnGaneTime: number;

        /** AckGameRule HuanSanzhang. */
        public HuanSanzhang: number;

        /** AckGameRule dingque. */
        public dingque: number;

        /**
         * Creates a new AckGameRule instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGameRule instance
         */
        public static create(properties?: game2.IAckGameRule): game2.AckGameRule;

        /**
         * Encodes the specified AckGameRule message. Does not implicitly {@link game2.AckGameRule.verify|verify} messages.
         * @param message AckGameRule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckGameRule, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGameRule message, length delimited. Does not implicitly {@link game2.AckGameRule.verify|verify} messages.
         * @param message AckGameRule message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckGameRule, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGameRule message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGameRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckGameRule;

        /**
         * Decodes an AckGameRule message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGameRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckGameRule;

        /**
         * Verifies an AckGameRule message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckDiceAndCards. */
    interface IAckDiceAndCards {

        /** AckDiceAndCards FirstSit */
        FirstSit: number;

        /** AckDiceAndCards SecondSit */
        SecondSit: number;

        /** AckDiceAndCards FirstDice */
        FirstDice: string;

        /** AckDiceAndCards SecondDice */
        SecondDice: string;

        /** AckDiceAndCards FirstCardsIndexes */
        FirstCardsIndexes: number;

        /** AckDiceAndCards HandCards */
        HandCards?: (game2.ICardInfo[]|null);

        /** AckDiceAndCards huan_san_zhang */
        huan_san_zhang?: (game2.ICardInfo[]|null);
    }

    /** Represents an AckDiceAndCards. */
    class AckDiceAndCards implements IAckDiceAndCards {

        /**
         * Constructs a new AckDiceAndCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckDiceAndCards);

        /** AckDiceAndCards FirstSit. */
        public FirstSit: number;

        /** AckDiceAndCards SecondSit. */
        public SecondSit: number;

        /** AckDiceAndCards FirstDice. */
        public FirstDice: string;

        /** AckDiceAndCards SecondDice. */
        public SecondDice: string;

        /** AckDiceAndCards FirstCardsIndexes. */
        public FirstCardsIndexes: number;

        /** AckDiceAndCards HandCards. */
        public HandCards: game2.ICardInfo[];

        /** AckDiceAndCards huan_san_zhang. */
        public huan_san_zhang: game2.ICardInfo[];

        /**
         * Creates a new AckDiceAndCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckDiceAndCards instance
         */
        public static create(properties?: game2.IAckDiceAndCards): game2.AckDiceAndCards;

        /**
         * Encodes the specified AckDiceAndCards message. Does not implicitly {@link game2.AckDiceAndCards.verify|verify} messages.
         * @param message AckDiceAndCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckDiceAndCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckDiceAndCards message, length delimited. Does not implicitly {@link game2.AckDiceAndCards.verify|verify} messages.
         * @param message AckDiceAndCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckDiceAndCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckDiceAndCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckDiceAndCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckDiceAndCards;

        /**
         * Decodes an AckDiceAndCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckDiceAndCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckDiceAndCards;

        /**
         * Verifies an AckDiceAndCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CardInfo. */
    interface ICardInfo {

        /** CardInfo CardID */
        CardID: number;

        /** CardInfo Sit */
        Sit?: (number|null);
    }

    /** Represents a CardInfo. */
    class CardInfo implements ICardInfo {

        /**
         * Constructs a new CardInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.ICardInfo);

        /** CardInfo CardID. */
        public CardID: number;

        /** CardInfo Sit. */
        public Sit: number;

        /**
         * Creates a new CardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardInfo instance
         */
        public static create(properties?: game2.ICardInfo): game2.CardInfo;

        /**
         * Encodes the specified CardInfo message. Does not implicitly {@link game2.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.ICardInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardInfo message, length delimited. Does not implicitly {@link game2.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.ICardInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.CardInfo;

        /**
         * Decodes a CardInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.CardInfo;

        /**
         * Verifies a CardInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqHandCardsOver. */
    interface IReqHandCardsOver {

        /** ReqHandCardsOver Sit */
        Sit: number;
    }

    /** Represents a ReqHandCardsOver. */
    class ReqHandCardsOver implements IReqHandCardsOver {

        /**
         * Constructs a new ReqHandCardsOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IReqHandCardsOver);

        /** ReqHandCardsOver Sit. */
        public Sit: number;

        /**
         * Creates a new ReqHandCardsOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqHandCardsOver instance
         */
        public static create(properties?: game2.IReqHandCardsOver): game2.ReqHandCardsOver;

        /**
         * Encodes the specified ReqHandCardsOver message. Does not implicitly {@link game2.ReqHandCardsOver.verify|verify} messages.
         * @param message ReqHandCardsOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IReqHandCardsOver, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqHandCardsOver message, length delimited. Does not implicitly {@link game2.ReqHandCardsOver.verify|verify} messages.
         * @param message ReqHandCardsOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IReqHandCardsOver, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqHandCardsOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqHandCardsOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.ReqHandCardsOver;

        /**
         * Decodes a ReqHandCardsOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqHandCardsOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.ReqHandCardsOver;

        /**
         * Verifies a ReqHandCardsOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGameStage. */
    interface IAckGameStage {

        /** AckGameStage Stage */
        Stage: number;

        /** AckGameStage gameguid */
        gameguid?: (string|null);
    }

    /** Represents an AckGameStage. */
    class AckGameStage implements IAckGameStage {

        /**
         * Constructs a new AckGameStage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckGameStage);

        /** AckGameStage Stage. */
        public Stage: number;

        /** AckGameStage gameguid. */
        public gameguid: string;

        /**
         * Creates a new AckGameStage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGameStage instance
         */
        public static create(properties?: game2.IAckGameStage): game2.AckGameStage;

        /**
         * Encodes the specified AckGameStage message. Does not implicitly {@link game2.AckGameStage.verify|verify} messages.
         * @param message AckGameStage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckGameStage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGameStage message, length delimited. Does not implicitly {@link game2.AckGameStage.verify|verify} messages.
         * @param message AckGameStage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckGameStage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGameStage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGameStage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckGameStage;

        /**
         * Decodes an AckGameStage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGameStage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckGameStage;

        /**
         * Verifies an AckGameStage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a StageID. */
    interface IStageID {

        /** StageID STARGAME */
        STARGAME: number;

        /** StageID BUHUA */
        BUHUA: number;

        /** StageID PLAYING */
        PLAYING: number;

        /** StageID GAMEOVER */
        GAMEOVER: number;
    }

    /** Represents a StageID. */
    class StageID implements IStageID {

        /**
         * Constructs a new StageID.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IStageID);

        /** StageID STARGAME. */
        public STARGAME: number;

        /** StageID BUHUA. */
        public BUHUA: number;

        /** StageID PLAYING. */
        public PLAYING: number;

        /** StageID GAMEOVER. */
        public GAMEOVER: number;

        /**
         * Creates a new StageID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StageID instance
         */
        public static create(properties?: game2.IStageID): game2.StageID;

        /**
         * Encodes the specified StageID message. Does not implicitly {@link game2.StageID.verify|verify} messages.
         * @param message StageID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IStageID, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified StageID message, length delimited. Does not implicitly {@link game2.StageID.verify|verify} messages.
         * @param message StageID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IStageID, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a StageID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StageID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.StageID;

        /**
         * Decodes a StageID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StageID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.StageID;

        /**
         * Verifies a StageID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqSendCard. */
    interface IReqSendCard {

        /** ReqSendCard Card */
        Card: game2.ICardsGroup;
    }

    /** Represents a ReqSendCard. */
    class ReqSendCard implements IReqSendCard {

        /**
         * Constructs a new ReqSendCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IReqSendCard);

        /** ReqSendCard Card. */
        public Card: game2.ICardsGroup;

        /**
         * Creates a new ReqSendCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqSendCard instance
         */
        public static create(properties?: game2.IReqSendCard): game2.ReqSendCard;

        /**
         * Encodes the specified ReqSendCard message. Does not implicitly {@link game2.ReqSendCard.verify|verify} messages.
         * @param message ReqSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IReqSendCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqSendCard message, length delimited. Does not implicitly {@link game2.ReqSendCard.verify|verify} messages.
         * @param message ReqSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IReqSendCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqSendCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.ReqSendCard;

        /**
         * Decodes a ReqSendCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.ReqSendCard;

        /**
         * Verifies a ReqSendCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an OperationType. */
    interface IOperationType {

        /** OperationType CATCH */
        CATCH: number;

        /** OperationType PLAY */
        PLAY: number;

        /** OperationType BUHUA */
        BUHUA: number;

        /** OperationType CHI */
        CHI: number;

        /** OperationType PENG */
        PENG: number;

        /** OperationType GANG */
        GANG: number;

        /** OperationType ANGANG */
        ANGANG: number;

        /** OperationType HU */
        HU: number;

        /** OperationType BUHUAMO */
        BUHUAMO: number;

        /** OperationType KANGMO */
        KANGMO: number;

        /** OperationType NO_OPERATION */
        NO_OPERATION: number;

        /** OperationType HANDCARDS */
        HANDCARDS: number;

        /** OperationType BUGANG */
        BUGANG: number;

        /** OperationType MOPLAY */
        MOPLAY: number;
    }

    /** Represents an OperationType. */
    class OperationType implements IOperationType {

        /**
         * Constructs a new OperationType.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IOperationType);

        /** OperationType CATCH. */
        public CATCH: number;

        /** OperationType PLAY. */
        public PLAY: number;

        /** OperationType BUHUA. */
        public BUHUA: number;

        /** OperationType CHI. */
        public CHI: number;

        /** OperationType PENG. */
        public PENG: number;

        /** OperationType GANG. */
        public GANG: number;

        /** OperationType ANGANG. */
        public ANGANG: number;

        /** OperationType HU. */
        public HU: number;

        /** OperationType BUHUAMO. */
        public BUHUAMO: number;

        /** OperationType KANGMO. */
        public KANGMO: number;

        /** OperationType NO_OPERATION. */
        public NO_OPERATION: number;

        /** OperationType HANDCARDS. */
        public HANDCARDS: number;

        /** OperationType BUGANG. */
        public BUGANG: number;

        /** OperationType MOPLAY. */
        public MOPLAY: number;

        /**
         * Creates a new OperationType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OperationType instance
         */
        public static create(properties?: game2.IOperationType): game2.OperationType;

        /**
         * Encodes the specified OperationType message. Does not implicitly {@link game2.OperationType.verify|verify} messages.
         * @param message OperationType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IOperationType, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OperationType message, length delimited. Does not implicitly {@link game2.OperationType.verify|verify} messages.
         * @param message OperationType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IOperationType, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an OperationType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OperationType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.OperationType;

        /**
         * Decodes an OperationType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OperationType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.OperationType;

        /**
         * Verifies an OperationType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckSendCard. */
    interface IAckSendCard {

        /** AckSendCard Card */
        Card: game2.ICardsGroup;

        /** AckSendCard gangCoin */
        gangCoin?: (number[]|null);
    }

    /** Represents an AckSendCard. */
    class AckSendCard implements IAckSendCard {

        /**
         * Constructs a new AckSendCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckSendCard);

        /** AckSendCard Card. */
        public Card: game2.ICardsGroup;

        /** AckSendCard gangCoin. */
        public gangCoin: number[];

        /**
         * Creates a new AckSendCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckSendCard instance
         */
        public static create(properties?: game2.IAckSendCard): game2.AckSendCard;

        /**
         * Encodes the specified AckSendCard message. Does not implicitly {@link game2.AckSendCard.verify|verify} messages.
         * @param message AckSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckSendCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckSendCard message, length delimited. Does not implicitly {@link game2.AckSendCard.verify|verify} messages.
         * @param message AckSendCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckSendCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckSendCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckSendCard;

        /**
         * Decodes an AckSendCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckSendCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckSendCard;

        /**
         * Verifies an AckSendCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckUserOperation. */
    interface IAckUserOperation {

        /** AckUserOperation Sit */
        Sit: number;

        /** AckUserOperation Chi */
        Chi: boolean;

        /** AckUserOperation ChiCards */
        ChiCards?: (game2.ICardsGroup[]|null);

        /** AckUserOperation Peng */
        Peng: boolean;

        /** AckUserOperation PengCards */
        PengCards?: (game2.ICardsGroup[]|null);

        /** AckUserOperation Gang */
        Gang: boolean;

        /** AckUserOperation GangCards */
        GangCards?: (game2.ICardsGroup[]|null);

        /** AckUserOperation Hu */
        Hu: boolean;

        /** AckUserOperation HuCards */
        HuCards?: (game2.ICardsGroup[]|null);

        /** AckUserOperation Call */
        Call: boolean;

        /** AckUserOperation CallCards */
        CallCards?: (game2.IMahjongCallInfo[]|null);
    }

    /** Represents an AckUserOperation. */
    class AckUserOperation implements IAckUserOperation {

        /**
         * Constructs a new AckUserOperation.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckUserOperation);

        /** AckUserOperation Sit. */
        public Sit: number;

        /** AckUserOperation Chi. */
        public Chi: boolean;

        /** AckUserOperation ChiCards. */
        public ChiCards: game2.ICardsGroup[];

        /** AckUserOperation Peng. */
        public Peng: boolean;

        /** AckUserOperation PengCards. */
        public PengCards: game2.ICardsGroup[];

        /** AckUserOperation Gang. */
        public Gang: boolean;

        /** AckUserOperation GangCards. */
        public GangCards: game2.ICardsGroup[];

        /** AckUserOperation Hu. */
        public Hu: boolean;

        /** AckUserOperation HuCards. */
        public HuCards: game2.ICardsGroup[];

        /** AckUserOperation Call. */
        public Call: boolean;

        /** AckUserOperation CallCards. */
        public CallCards: game2.IMahjongCallInfo[];

        /**
         * Creates a new AckUserOperation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckUserOperation instance
         */
        public static create(properties?: game2.IAckUserOperation): game2.AckUserOperation;

        /**
         * Encodes the specified AckUserOperation message. Does not implicitly {@link game2.AckUserOperation.verify|verify} messages.
         * @param message AckUserOperation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckUserOperation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckUserOperation message, length delimited. Does not implicitly {@link game2.AckUserOperation.verify|verify} messages.
         * @param message AckUserOperation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckUserOperation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckUserOperation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckUserOperation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckUserOperation;

        /**
         * Decodes an AckUserOperation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckUserOperation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckUserOperation;

        /**
         * Verifies an AckUserOperation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CardsGroup. */
    interface ICardsGroup {

        /** CardsGroup Sit */
        Sit: number;

        /** CardsGroup Type */
        Type: number;

        /** CardsGroup Cards */
        Cards?: (game2.ICardInfo[]|null);

        /** CardsGroup ObtainCard */
        ObtainCard?: (game2.ICardInfo|null);

        /** CardsGroup ObtainCardSit */
        ObtainCardSit?: (number|null);
    }

    /** Represents a CardsGroup. */
    class CardsGroup implements ICardsGroup {

        /**
         * Constructs a new CardsGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.ICardsGroup);

        /** CardsGroup Sit. */
        public Sit: number;

        /** CardsGroup Type. */
        public Type: number;

        /** CardsGroup Cards. */
        public Cards: game2.ICardInfo[];

        /** CardsGroup ObtainCard. */
        public ObtainCard?: (game2.ICardInfo|null);

        /** CardsGroup ObtainCardSit. */
        public ObtainCardSit: number;

        /**
         * Creates a new CardsGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardsGroup instance
         */
        public static create(properties?: game2.ICardsGroup): game2.CardsGroup;

        /**
         * Encodes the specified CardsGroup message. Does not implicitly {@link game2.CardsGroup.verify|verify} messages.
         * @param message CardsGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.ICardsGroup, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardsGroup message, length delimited. Does not implicitly {@link game2.CardsGroup.verify|verify} messages.
         * @param message CardsGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.ICardsGroup, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardsGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.CardsGroup;

        /**
         * Decodes a CardsGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardsGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.CardsGroup;

        /**
         * Verifies a CardsGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MahjongFanNumType. */
    interface IMahjongFanNumType {

        /** MahjongFanNumType FanNum */
        FanNum: number;

        /** MahjongFanNumType FanType */
        FanType: number;

        /** MahjongFanNumType Cards */
        Cards?: (game2.ICardInfo[]|null);
    }

    /** Represents a MahjongFanNumType. */
    class MahjongFanNumType implements IMahjongFanNumType {

        /**
         * Constructs a new MahjongFanNumType.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IMahjongFanNumType);

        /** MahjongFanNumType FanNum. */
        public FanNum: number;

        /** MahjongFanNumType FanType. */
        public FanType: number;

        /** MahjongFanNumType Cards. */
        public Cards: game2.ICardInfo[];

        /**
         * Creates a new MahjongFanNumType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongFanNumType instance
         */
        public static create(properties?: game2.IMahjongFanNumType): game2.MahjongFanNumType;

        /**
         * Encodes the specified MahjongFanNumType message. Does not implicitly {@link game2.MahjongFanNumType.verify|verify} messages.
         * @param message MahjongFanNumType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IMahjongFanNumType, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MahjongFanNumType message, length delimited. Does not implicitly {@link game2.MahjongFanNumType.verify|verify} messages.
         * @param message MahjongFanNumType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IMahjongFanNumType, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MahjongFanNumType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongFanNumType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.MahjongFanNumType;

        /**
         * Decodes a MahjongFanNumType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongFanNumType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.MahjongFanNumType;

        /**
         * Verifies a MahjongFanNumType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MahjongFanName. */
    interface IMahjongFanName {

        /** MahjongFanName SSSBG */
        SSSBG: number;
    }

    /** Represents a MahjongFanName. */
    class MahjongFanName implements IMahjongFanName {

        /**
         * Constructs a new MahjongFanName.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IMahjongFanName);

        /** MahjongFanName SSSBG. */
        public SSSBG: number;

        /**
         * Creates a new MahjongFanName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongFanName instance
         */
        public static create(properties?: game2.IMahjongFanName): game2.MahjongFanName;

        /**
         * Encodes the specified MahjongFanName message. Does not implicitly {@link game2.MahjongFanName.verify|verify} messages.
         * @param message MahjongFanName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IMahjongFanName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MahjongFanName message, length delimited. Does not implicitly {@link game2.MahjongFanName.verify|verify} messages.
         * @param message MahjongFanName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IMahjongFanName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MahjongFanName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongFanName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.MahjongFanName;

        /**
         * Decodes a MahjongFanName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongFanName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.MahjongFanName;

        /**
         * Verifies a MahjongFanName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqPlayerTrust. */
    interface IReqPlayerTrust {

        /** ReqPlayerTrust sit */
        sit: number;
    }

    /** Represents a ReqPlayerTrust. */
    class ReqPlayerTrust implements IReqPlayerTrust {

        /**
         * Constructs a new ReqPlayerTrust.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IReqPlayerTrust);

        /** ReqPlayerTrust sit. */
        public sit: number;

        /**
         * Creates a new ReqPlayerTrust instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqPlayerTrust instance
         */
        public static create(properties?: game2.IReqPlayerTrust): game2.ReqPlayerTrust;

        /**
         * Encodes the specified ReqPlayerTrust message. Does not implicitly {@link game2.ReqPlayerTrust.verify|verify} messages.
         * @param message ReqPlayerTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IReqPlayerTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqPlayerTrust message, length delimited. Does not implicitly {@link game2.ReqPlayerTrust.verify|verify} messages.
         * @param message ReqPlayerTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IReqPlayerTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPlayerTrust message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqPlayerTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.ReqPlayerTrust;

        /**
         * Decodes a ReqPlayerTrust message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqPlayerTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.ReqPlayerTrust;

        /**
         * Verifies a ReqPlayerTrust message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckPlayerTrust. */
    interface IAckPlayerTrust {

        /** AckPlayerTrust TrustNum */
        TrustNum: number;

        /** AckPlayerTrust TrustSit */
        TrustSit: number;
    }

    /** Represents an AckPlayerTrust. */
    class AckPlayerTrust implements IAckPlayerTrust {

        /**
         * Constructs a new AckPlayerTrust.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckPlayerTrust);

        /** AckPlayerTrust TrustNum. */
        public TrustNum: number;

        /** AckPlayerTrust TrustSit. */
        public TrustSit: number;

        /**
         * Creates a new AckPlayerTrust instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckPlayerTrust instance
         */
        public static create(properties?: game2.IAckPlayerTrust): game2.AckPlayerTrust;

        /**
         * Encodes the specified AckPlayerTrust message. Does not implicitly {@link game2.AckPlayerTrust.verify|verify} messages.
         * @param message AckPlayerTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckPlayerTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckPlayerTrust message, length delimited. Does not implicitly {@link game2.AckPlayerTrust.verify|verify} messages.
         * @param message AckPlayerTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckPlayerTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckPlayerTrust message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckPlayerTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckPlayerTrust;

        /**
         * Decodes an AckPlayerTrust message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckPlayerTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckPlayerTrust;

        /**
         * Verifies an AckPlayerTrust message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqPlayerRelieveTrust. */
    interface IReqPlayerRelieveTrust {

        /** ReqPlayerRelieveTrust Sit */
        Sit: number;
    }

    /** Represents a ReqPlayerRelieveTrust. */
    class ReqPlayerRelieveTrust implements IReqPlayerRelieveTrust {

        /**
         * Constructs a new ReqPlayerRelieveTrust.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IReqPlayerRelieveTrust);

        /** ReqPlayerRelieveTrust Sit. */
        public Sit: number;

        /**
         * Creates a new ReqPlayerRelieveTrust instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqPlayerRelieveTrust instance
         */
        public static create(properties?: game2.IReqPlayerRelieveTrust): game2.ReqPlayerRelieveTrust;

        /**
         * Encodes the specified ReqPlayerRelieveTrust message. Does not implicitly {@link game2.ReqPlayerRelieveTrust.verify|verify} messages.
         * @param message ReqPlayerRelieveTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IReqPlayerRelieveTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqPlayerRelieveTrust message, length delimited. Does not implicitly {@link game2.ReqPlayerRelieveTrust.verify|verify} messages.
         * @param message ReqPlayerRelieveTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IReqPlayerRelieveTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPlayerRelieveTrust message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqPlayerRelieveTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.ReqPlayerRelieveTrust;

        /**
         * Decodes a ReqPlayerRelieveTrust message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqPlayerRelieveTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.ReqPlayerRelieveTrust;

        /**
         * Verifies a ReqPlayerRelieveTrust message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckPlayerRelieveTrust. */
    interface IAckPlayerRelieveTrust {

        /** AckPlayerRelieveTrust Sit */
        Sit: number;

        /** AckPlayerRelieveTrust RelieveTrustSit */
        RelieveTrustSit: number;
    }

    /** Represents an AckPlayerRelieveTrust. */
    class AckPlayerRelieveTrust implements IAckPlayerRelieveTrust {

        /**
         * Constructs a new AckPlayerRelieveTrust.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckPlayerRelieveTrust);

        /** AckPlayerRelieveTrust Sit. */
        public Sit: number;

        /** AckPlayerRelieveTrust RelieveTrustSit. */
        public RelieveTrustSit: number;

        /**
         * Creates a new AckPlayerRelieveTrust instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckPlayerRelieveTrust instance
         */
        public static create(properties?: game2.IAckPlayerRelieveTrust): game2.AckPlayerRelieveTrust;

        /**
         * Encodes the specified AckPlayerRelieveTrust message. Does not implicitly {@link game2.AckPlayerRelieveTrust.verify|verify} messages.
         * @param message AckPlayerRelieveTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckPlayerRelieveTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckPlayerRelieveTrust message, length delimited. Does not implicitly {@link game2.AckPlayerRelieveTrust.verify|verify} messages.
         * @param message AckPlayerRelieveTrust message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckPlayerRelieveTrust, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckPlayerRelieveTrust message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckPlayerRelieveTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckPlayerRelieveTrust;

        /**
         * Decodes an AckPlayerRelieveTrust message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckPlayerRelieveTrust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckPlayerRelieveTrust;

        /**
         * Verifies an AckPlayerRelieveTrust message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqGameDelay. */
    interface IReqGameDelay {

        /** ReqGameDelay Sit */
        Sit: number;
    }

    /** Represents a ReqGameDelay. */
    class ReqGameDelay implements IReqGameDelay {

        /**
         * Constructs a new ReqGameDelay.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IReqGameDelay);

        /** ReqGameDelay Sit. */
        public Sit: number;

        /**
         * Creates a new ReqGameDelay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqGameDelay instance
         */
        public static create(properties?: game2.IReqGameDelay): game2.ReqGameDelay;

        /**
         * Encodes the specified ReqGameDelay message. Does not implicitly {@link game2.ReqGameDelay.verify|verify} messages.
         * @param message ReqGameDelay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IReqGameDelay, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqGameDelay message, length delimited. Does not implicitly {@link game2.ReqGameDelay.verify|verify} messages.
         * @param message ReqGameDelay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IReqGameDelay, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqGameDelay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqGameDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.ReqGameDelay;

        /**
         * Decodes a ReqGameDelay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqGameDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.ReqGameDelay;

        /**
         * Verifies a ReqGameDelay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGameDelay. */
    interface IAckGameDelay {

        /** AckGameDelay Success */
        Success: boolean;

        /** AckGameDelay Sit */
        Sit: number;
    }

    /** Represents an AckGameDelay. */
    class AckGameDelay implements IAckGameDelay {

        /**
         * Constructs a new AckGameDelay.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckGameDelay);

        /** AckGameDelay Success. */
        public Success: boolean;

        /** AckGameDelay Sit. */
        public Sit: number;

        /**
         * Creates a new AckGameDelay instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGameDelay instance
         */
        public static create(properties?: game2.IAckGameDelay): game2.AckGameDelay;

        /**
         * Encodes the specified AckGameDelay message. Does not implicitly {@link game2.AckGameDelay.verify|verify} messages.
         * @param message AckGameDelay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckGameDelay, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGameDelay message, length delimited. Does not implicitly {@link game2.AckGameDelay.verify|verify} messages.
         * @param message AckGameDelay message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckGameDelay, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGameDelay message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGameDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckGameDelay;

        /**
         * Decodes an AckGameDelay message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGameDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckGameDelay;

        /**
         * Verifies an AckGameDelay message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGameContinued. */
    interface IAckGameContinued {

        /** AckGameContinued FirstDice */
        FirstDice: string;

        /** AckGameContinued SecondDice */
        SecondDice: string;

        /** AckGameContinued BeginCardindex */
        BeginCardindex: number;

        /** AckGameContinued EndCardindex */
        EndCardindex: number;

        /** AckGameContinued CardPond */
        CardPond?: (game2.ICardPondInfo[]|null);

        /** AckGameContinued HandCards */
        HandCards?: (game2.IPlayerHandCards[]|null);

        /** AckGameContinued CurrentCard */
        CurrentCard?: (game2.ICardsGroup|null);

        /** AckGameContinued CurrentSit */
        CurrentSit: number;

        /** AckGameContinued TrustNum */
        TrustNum: number;

        /** AckGameContinued DelayTimes */
        DelayTimes: number;

        /** AckGameContinued Stage */
        Stage: number;

        /** AckGameContinued IsMoPai */
        IsMoPai?: (boolean|null);

        /** AckGameContinued Card */
        Card?: (game2.ICardInfo|null);

        /** AckGameContinued HistoryData */
        HistoryData?: (game2.IGameHistoryData[]|null);

        /** AckGameContinued CuoHuSeat */
        CuoHuSeat?: (number[]|null);

        /** AckGameContinued PlayerState */
        PlayerState?: (number[]|null);

        /** AckGameContinued dingque_color */
        dingque_color?: (number[]|null);

        /** AckGameContinued huan_san_zhang */
        huan_san_zhang?: (number|null);

        /** AckGameContinued hupai0 */
        hupai0?: (number[]|null);

        /** AckGameContinued hupai1 */
        hupai1?: (number[]|null);

        /** AckGameContinued hupai2 */
        hupai2?: (number[]|null);

        /** AckGameContinued hupai3 */
        hupai3?: (number[]|null);

        /** AckGameContinued game_guid */
        game_guid?: (string|null);

        /** AckGameContinued hu_player */
        hu_player?: (game2.IHuSeq[]|null);

        /** AckGameContinued CallCards */
        CallCards?: (game2.IMahjongCallInfo[]|null);
    }

    /** Represents an AckGameContinued. */
    class AckGameContinued implements IAckGameContinued {

        /**
         * Constructs a new AckGameContinued.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckGameContinued);

        /** AckGameContinued FirstDice. */
        public FirstDice: string;

        /** AckGameContinued SecondDice. */
        public SecondDice: string;

        /** AckGameContinued BeginCardindex. */
        public BeginCardindex: number;

        /** AckGameContinued EndCardindex. */
        public EndCardindex: number;

        /** AckGameContinued CardPond. */
        public CardPond: game2.ICardPondInfo[];

        /** AckGameContinued HandCards. */
        public HandCards: game2.IPlayerHandCards[];

        /** AckGameContinued CurrentCard. */
        public CurrentCard?: (game2.ICardsGroup|null);

        /** AckGameContinued CurrentSit. */
        public CurrentSit: number;

        /** AckGameContinued TrustNum. */
        public TrustNum: number;

        /** AckGameContinued DelayTimes. */
        public DelayTimes: number;

        /** AckGameContinued Stage. */
        public Stage: number;

        /** AckGameContinued IsMoPai. */
        public IsMoPai: boolean;

        /** AckGameContinued Card. */
        public Card?: (game2.ICardInfo|null);

        /** AckGameContinued HistoryData. */
        public HistoryData: game2.IGameHistoryData[];

        /** AckGameContinued CuoHuSeat. */
        public CuoHuSeat: number[];

        /** AckGameContinued PlayerState. */
        public PlayerState: number[];

        /** AckGameContinued dingque_color. */
        public dingque_color: number[];

        /** AckGameContinued huan_san_zhang. */
        public huan_san_zhang: number;

        /** AckGameContinued hupai0. */
        public hupai0: number[];

        /** AckGameContinued hupai1. */
        public hupai1: number[];

        /** AckGameContinued hupai2. */
        public hupai2: number[];

        /** AckGameContinued hupai3. */
        public hupai3: number[];

        /** AckGameContinued game_guid. */
        public game_guid: string;

        /** AckGameContinued hu_player. */
        public hu_player: game2.IHuSeq[];

        /** AckGameContinued CallCards. */
        public CallCards: game2.IMahjongCallInfo[];

        /**
         * Creates a new AckGameContinued instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGameContinued instance
         */
        public static create(properties?: game2.IAckGameContinued): game2.AckGameContinued;

        /**
         * Encodes the specified AckGameContinued message. Does not implicitly {@link game2.AckGameContinued.verify|verify} messages.
         * @param message AckGameContinued message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckGameContinued, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGameContinued message, length delimited. Does not implicitly {@link game2.AckGameContinued.verify|verify} messages.
         * @param message AckGameContinued message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckGameContinued, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGameContinued message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGameContinued
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckGameContinued;

        /**
         * Decodes an AckGameContinued message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGameContinued
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckGameContinued;

        /**
         * Verifies an AckGameContinued message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HuSeq. */
    interface IHuSeq {

        /** HuSeq self_sit */
        self_sit?: (number|null);

        /** HuSeq pao_sit */
        pao_sit?: (number|null);
    }

    /** Represents a HuSeq. */
    class HuSeq implements IHuSeq {

        /**
         * Constructs a new HuSeq.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IHuSeq);

        /** HuSeq self_sit. */
        public self_sit: number;

        /** HuSeq pao_sit. */
        public pao_sit: number;

        /**
         * Creates a new HuSeq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HuSeq instance
         */
        public static create(properties?: game2.IHuSeq): game2.HuSeq;

        /**
         * Encodes the specified HuSeq message. Does not implicitly {@link game2.HuSeq.verify|verify} messages.
         * @param message HuSeq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IHuSeq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HuSeq message, length delimited. Does not implicitly {@link game2.HuSeq.verify|verify} messages.
         * @param message HuSeq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IHuSeq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HuSeq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HuSeq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.HuSeq;

        /**
         * Decodes a HuSeq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HuSeq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.HuSeq;

        /**
         * Verifies a HuSeq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GameHistoryData. */
    interface IGameHistoryData {

        /** GameHistoryData Cards */
        Cards: game2.IGameResultCards;

        /** GameHistoryData ResultData */
        ResultData?: (game2.IGameResultIntegralCoin[]|null);

        /** GameHistoryData CuoHuSeat */
        CuoHuSeat?: (number[]|null);
    }

    /** Represents a GameHistoryData. */
    class GameHistoryData implements IGameHistoryData {

        /**
         * Constructs a new GameHistoryData.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IGameHistoryData);

        /** GameHistoryData Cards. */
        public Cards: game2.IGameResultCards;

        /** GameHistoryData ResultData. */
        public ResultData: game2.IGameResultIntegralCoin[];

        /** GameHistoryData CuoHuSeat. */
        public CuoHuSeat: number[];

        /**
         * Creates a new GameHistoryData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameHistoryData instance
         */
        public static create(properties?: game2.IGameHistoryData): game2.GameHistoryData;

        /**
         * Encodes the specified GameHistoryData message. Does not implicitly {@link game2.GameHistoryData.verify|verify} messages.
         * @param message GameHistoryData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IGameHistoryData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameHistoryData message, length delimited. Does not implicitly {@link game2.GameHistoryData.verify|verify} messages.
         * @param message GameHistoryData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IGameHistoryData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameHistoryData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.GameHistoryData;

        /**
         * Decodes a GameHistoryData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.GameHistoryData;

        /**
         * Verifies a GameHistoryData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GameResultIntegralCoin. */
    interface IGameResultIntegralCoin {

        /** GameResultIntegralCoin UserName */
        UserName: string;

        /** GameResultIntegralCoin Integral */
        Integral: number;

        /** GameResultIntegralCoin Coin */
        Coin: number;

        /** GameResultIntegralCoin UserShowName */
        UserShowName?: (string|null);
    }

    /** Represents a GameResultIntegralCoin. */
    class GameResultIntegralCoin implements IGameResultIntegralCoin {

        /**
         * Constructs a new GameResultIntegralCoin.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IGameResultIntegralCoin);

        /** GameResultIntegralCoin UserName. */
        public UserName: string;

        /** GameResultIntegralCoin Integral. */
        public Integral: number;

        /** GameResultIntegralCoin Coin. */
        public Coin: number;

        /** GameResultIntegralCoin UserShowName. */
        public UserShowName: string;

        /**
         * Creates a new GameResultIntegralCoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResultIntegralCoin instance
         */
        public static create(properties?: game2.IGameResultIntegralCoin): game2.GameResultIntegralCoin;

        /**
         * Encodes the specified GameResultIntegralCoin message. Does not implicitly {@link game2.GameResultIntegralCoin.verify|verify} messages.
         * @param message GameResultIntegralCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IGameResultIntegralCoin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameResultIntegralCoin message, length delimited. Does not implicitly {@link game2.GameResultIntegralCoin.verify|verify} messages.
         * @param message GameResultIntegralCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IGameResultIntegralCoin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameResultIntegralCoin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResultIntegralCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.GameResultIntegralCoin;

        /**
         * Decodes a GameResultIntegralCoin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameResultIntegralCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.GameResultIntegralCoin;

        /**
         * Verifies a GameResultIntegralCoin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GameResultCards. */
    interface IGameResultCards {

        /** GameResultCards Sit */
        Sit: number;

        /** GameResultCards Cards */
        Cards?: (game2.ICardsGroup[]|null);

        /** GameResultCards Type */
        Type?: (game2.IMahjongFanNumType[]|null);

        /** GameResultCards ObtainCard */
        ObtainCard?: (game2.ICardInfo|null);

        /** GameResultCards ObtainCardSit */
        ObtainCardSit?: (number|null);
    }

    /** Represents a GameResultCards. */
    class GameResultCards implements IGameResultCards {

        /**
         * Constructs a new GameResultCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IGameResultCards);

        /** GameResultCards Sit. */
        public Sit: number;

        /** GameResultCards Cards. */
        public Cards: game2.ICardsGroup[];

        /** GameResultCards Type. */
        public Type: game2.IMahjongFanNumType[];

        /** GameResultCards ObtainCard. */
        public ObtainCard?: (game2.ICardInfo|null);

        /** GameResultCards ObtainCardSit. */
        public ObtainCardSit: number;

        /**
         * Creates a new GameResultCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResultCards instance
         */
        public static create(properties?: game2.IGameResultCards): game2.GameResultCards;

        /**
         * Encodes the specified GameResultCards message. Does not implicitly {@link game2.GameResultCards.verify|verify} messages.
         * @param message GameResultCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IGameResultCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GameResultCards message, length delimited. Does not implicitly {@link game2.GameResultCards.verify|verify} messages.
         * @param message GameResultCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IGameResultCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GameResultCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResultCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.GameResultCards;

        /**
         * Decodes a GameResultCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameResultCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.GameResultCards;

        /**
         * Verifies a GameResultCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerHandCards. */
    interface IPlayerHandCards {

        /** PlayerHandCards Cards */
        Cards?: (game2.ICardsGroup[]|null);
    }

    /** Represents a PlayerHandCards. */
    class PlayerHandCards implements IPlayerHandCards {

        /**
         * Constructs a new PlayerHandCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IPlayerHandCards);

        /** PlayerHandCards Cards. */
        public Cards: game2.ICardsGroup[];

        /**
         * Creates a new PlayerHandCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerHandCards instance
         */
        public static create(properties?: game2.IPlayerHandCards): game2.PlayerHandCards;

        /**
         * Encodes the specified PlayerHandCards message. Does not implicitly {@link game2.PlayerHandCards.verify|verify} messages.
         * @param message PlayerHandCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IPlayerHandCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerHandCards message, length delimited. Does not implicitly {@link game2.PlayerHandCards.verify|verify} messages.
         * @param message PlayerHandCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IPlayerHandCards, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerHandCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerHandCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.PlayerHandCards;

        /**
         * Decodes a PlayerHandCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerHandCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.PlayerHandCards;

        /**
         * Verifies a PlayerHandCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CardPondInfo. */
    interface ICardPondInfo {

        /** CardPondInfo Cards */
        Cards?: (game2.ICardInfo[]|null);
    }

    /** Represents a CardPondInfo. */
    class CardPondInfo implements ICardPondInfo {

        /**
         * Constructs a new CardPondInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.ICardPondInfo);

        /** CardPondInfo Cards. */
        public Cards: game2.ICardInfo[];

        /**
         * Creates a new CardPondInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardPondInfo instance
         */
        public static create(properties?: game2.ICardPondInfo): game2.CardPondInfo;

        /**
         * Encodes the specified CardPondInfo message. Does not implicitly {@link game2.CardPondInfo.verify|verify} messages.
         * @param message CardPondInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.ICardPondInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardPondInfo message, length delimited. Does not implicitly {@link game2.CardPondInfo.verify|verify} messages.
         * @param message CardPondInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.ICardPondInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardPondInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardPondInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.CardPondInfo;

        /**
         * Decodes a CardPondInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardPondInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.CardPondInfo;

        /**
         * Verifies a CardPondInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DuxLiveTick. */
    interface IDuxLiveTick {

        /** DuxLiveTick time */
        time: (number|Long);
    }

    /** Represents a DuxLiveTick. */
    class DuxLiveTick implements IDuxLiveTick {

        /**
         * Constructs a new DuxLiveTick.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IDuxLiveTick);

        /** DuxLiveTick time. */
        public time: (number|Long);

        /**
         * Creates a new DuxLiveTick instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DuxLiveTick instance
         */
        public static create(properties?: game2.IDuxLiveTick): game2.DuxLiveTick;

        /**
         * Encodes the specified DuxLiveTick message. Does not implicitly {@link game2.DuxLiveTick.verify|verify} messages.
         * @param message DuxLiveTick message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IDuxLiveTick, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DuxLiveTick message, length delimited. Does not implicitly {@link game2.DuxLiveTick.verify|verify} messages.
         * @param message DuxLiveTick message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IDuxLiveTick, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DuxLiveTick message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DuxLiveTick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.DuxLiveTick;

        /**
         * Decodes a DuxLiveTick message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DuxLiveTick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.DuxLiveTick;

        /**
         * Verifies a DuxLiveTick message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqMahJongSetOpenDoorTile. */
    interface IReqMahJongSetOpenDoorTile {

        /** ReqMahJongSetOpenDoorTile Sit */
        Sit: number;

        /** ReqMahJongSetOpenDoorTile CardsColor */
        CardsColor?: (number[]|null);

        /** ReqMahJongSetOpenDoorTile CardsValue */
        CardsValue?: (number[]|null);
    }

    /** Represents a ReqMahJongSetOpenDoorTile. */
    class ReqMahJongSetOpenDoorTile implements IReqMahJongSetOpenDoorTile {

        /**
         * Constructs a new ReqMahJongSetOpenDoorTile.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IReqMahJongSetOpenDoorTile);

        /** ReqMahJongSetOpenDoorTile Sit. */
        public Sit: number;

        /** ReqMahJongSetOpenDoorTile CardsColor. */
        public CardsColor: number[];

        /** ReqMahJongSetOpenDoorTile CardsValue. */
        public CardsValue: number[];

        /**
         * Creates a new ReqMahJongSetOpenDoorTile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqMahJongSetOpenDoorTile instance
         */
        public static create(properties?: game2.IReqMahJongSetOpenDoorTile): game2.ReqMahJongSetOpenDoorTile;

        /**
         * Encodes the specified ReqMahJongSetOpenDoorTile message. Does not implicitly {@link game2.ReqMahJongSetOpenDoorTile.verify|verify} messages.
         * @param message ReqMahJongSetOpenDoorTile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IReqMahJongSetOpenDoorTile, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqMahJongSetOpenDoorTile message, length delimited. Does not implicitly {@link game2.ReqMahJongSetOpenDoorTile.verify|verify} messages.
         * @param message ReqMahJongSetOpenDoorTile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IReqMahJongSetOpenDoorTile, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqMahJongSetOpenDoorTile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqMahJongSetOpenDoorTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.ReqMahJongSetOpenDoorTile;

        /**
         * Decodes a ReqMahJongSetOpenDoorTile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqMahJongSetOpenDoorTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.ReqMahJongSetOpenDoorTile;

        /**
         * Verifies a ReqMahJongSetOpenDoorTile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqMahJongSetWallTile. */
    interface IReqMahJongSetWallTile {

        /** ReqMahJongSetWallTile Sit */
        Sit: number;

        /** ReqMahJongSetWallTile CardColor */
        CardColor: number;

        /** ReqMahJongSetWallTile CardValue */
        CardValue: number;
    }

    /** Represents a ReqMahJongSetWallTile. */
    class ReqMahJongSetWallTile implements IReqMahJongSetWallTile {

        /**
         * Constructs a new ReqMahJongSetWallTile.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IReqMahJongSetWallTile);

        /** ReqMahJongSetWallTile Sit. */
        public Sit: number;

        /** ReqMahJongSetWallTile CardColor. */
        public CardColor: number;

        /** ReqMahJongSetWallTile CardValue. */
        public CardValue: number;

        /**
         * Creates a new ReqMahJongSetWallTile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqMahJongSetWallTile instance
         */
        public static create(properties?: game2.IReqMahJongSetWallTile): game2.ReqMahJongSetWallTile;

        /**
         * Encodes the specified ReqMahJongSetWallTile message. Does not implicitly {@link game2.ReqMahJongSetWallTile.verify|verify} messages.
         * @param message ReqMahJongSetWallTile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IReqMahJongSetWallTile, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqMahJongSetWallTile message, length delimited. Does not implicitly {@link game2.ReqMahJongSetWallTile.verify|verify} messages.
         * @param message ReqMahJongSetWallTile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IReqMahJongSetWallTile, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqMahJongSetWallTile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqMahJongSetWallTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.ReqMahJongSetWallTile;

        /**
         * Decodes a ReqMahJongSetWallTile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqMahJongSetWallTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.ReqMahJongSetWallTile;

        /**
         * Verifies a ReqMahJongSetWallTile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckWrongHu. */
    interface IAckWrongHu {

        /** AckWrongHu Sit */
        Sit: number;

        /** AckWrongHu Cards */
        Cards?: (game2.ICardsGroup[]|null);
    }

    /** Represents an AckWrongHu. */
    class AckWrongHu implements IAckWrongHu {

        /**
         * Constructs a new AckWrongHu.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckWrongHu);

        /** AckWrongHu Sit. */
        public Sit: number;

        /** AckWrongHu Cards. */
        public Cards: game2.ICardsGroup[];

        /**
         * Creates a new AckWrongHu instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckWrongHu instance
         */
        public static create(properties?: game2.IAckWrongHu): game2.AckWrongHu;

        /**
         * Encodes the specified AckWrongHu message. Does not implicitly {@link game2.AckWrongHu.verify|verify} messages.
         * @param message AckWrongHu message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckWrongHu, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckWrongHu message, length delimited. Does not implicitly {@link game2.AckWrongHu.verify|verify} messages.
         * @param message AckWrongHu message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckWrongHu, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckWrongHu message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckWrongHu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckWrongHu;

        /**
         * Decodes an AckWrongHu message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckWrongHu
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckWrongHu;

        /**
         * Verifies an AckWrongHu message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RankResult. */
    interface IRankResult {

        /** RankResult tableId */
        tableId: number;

        /** RankResult playerResult */
        playerResult?: (game2.IRankResultPlayer[]|null);

        /** RankResult Type */
        Type: number;

        /** RankResult starttime */
        starttime: number;

        /** RankResult endtime */
        endtime: number;

        /** RankResult paipuUrl */
        paipuUrl: string;

        /** RankResult societyID */
        societyID?: (number|null);

        /** RankResult roomID */
        roomID?: (number|Long|null);

        /** RankResult entercodeID */
        entercodeID?: (Uint8Array|null);
    }

    /** Represents a RankResult. */
    class RankResult implements IRankResult {

        /**
         * Constructs a new RankResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IRankResult);

        /** RankResult tableId. */
        public tableId: number;

        /** RankResult playerResult. */
        public playerResult: game2.IRankResultPlayer[];

        /** RankResult Type. */
        public Type: number;

        /** RankResult starttime. */
        public starttime: number;

        /** RankResult endtime. */
        public endtime: number;

        /** RankResult paipuUrl. */
        public paipuUrl: string;

        /** RankResult societyID. */
        public societyID: number;

        /** RankResult roomID. */
        public roomID: (number|Long);

        /** RankResult entercodeID. */
        public entercodeID: Uint8Array;

        /**
         * Creates a new RankResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankResult instance
         */
        public static create(properties?: game2.IRankResult): game2.RankResult;

        /**
         * Encodes the specified RankResult message. Does not implicitly {@link game2.RankResult.verify|verify} messages.
         * @param message RankResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IRankResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RankResult message, length delimited. Does not implicitly {@link game2.RankResult.verify|verify} messages.
         * @param message RankResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IRankResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.RankResult;

        /**
         * Decodes a RankResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.RankResult;

        /**
         * Verifies a RankResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RankResultPlayer. */
    interface IRankResultPlayer {

        /** RankResultPlayer userName */
        userName: string;

        /** RankResultPlayer showName */
        showName: string;

        /** RankResultPlayer gameCoin */
        gameCoin: number;

        /** RankResultPlayer huPai */
        huPai?: (number|null);

        /** RankResultPlayer dianPao */
        dianPao?: (number|null);

        /** RankResultPlayer ziMo */
        ziMo?: (number|null);
    }

    /** Represents a RankResultPlayer. */
    class RankResultPlayer implements IRankResultPlayer {

        /**
         * Constructs a new RankResultPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IRankResultPlayer);

        /** RankResultPlayer userName. */
        public userName: string;

        /** RankResultPlayer showName. */
        public showName: string;

        /** RankResultPlayer gameCoin. */
        public gameCoin: number;

        /** RankResultPlayer huPai. */
        public huPai: number;

        /** RankResultPlayer dianPao. */
        public dianPao: number;

        /** RankResultPlayer ziMo. */
        public ziMo: number;

        /**
         * Creates a new RankResultPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankResultPlayer instance
         */
        public static create(properties?: game2.IRankResultPlayer): game2.RankResultPlayer;

        /**
         * Encodes the specified RankResultPlayer message. Does not implicitly {@link game2.RankResultPlayer.verify|verify} messages.
         * @param message RankResultPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IRankResultPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RankResultPlayer message, length delimited. Does not implicitly {@link game2.RankResultPlayer.verify|verify} messages.
         * @param message RankResultPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IRankResultPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankResultPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankResultPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.RankResultPlayer;

        /**
         * Decodes a RankResultPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankResultPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.RankResultPlayer;

        /**
         * Verifies a RankResultPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DeleteTable. */
    interface IDeleteTable {

        /** DeleteTable RoleName */
        RoleName: string;

        /** DeleteTable showName */
        showName: string;

        /** DeleteTable NickName */
        NickName: string;

        /** DeleteTable RoomID */
        RoomID: (number|Long);

        /** DeleteTable seat */
        seat: number;

        /** DeleteTable time */
        time?: (number|Long|null);

        /** DeleteTable Operation */
        Operation?: (number|null);
    }

    /** Represents a DeleteTable. */
    class DeleteTable implements IDeleteTable {

        /**
         * Constructs a new DeleteTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IDeleteTable);

        /** DeleteTable RoleName. */
        public RoleName: string;

        /** DeleteTable showName. */
        public showName: string;

        /** DeleteTable NickName. */
        public NickName: string;

        /** DeleteTable RoomID. */
        public RoomID: (number|Long);

        /** DeleteTable seat. */
        public seat: number;

        /** DeleteTable time. */
        public time: (number|Long);

        /** DeleteTable Operation. */
        public Operation: number;

        /**
         * Creates a new DeleteTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteTable instance
         */
        public static create(properties?: game2.IDeleteTable): game2.DeleteTable;

        /**
         * Encodes the specified DeleteTable message. Does not implicitly {@link game2.DeleteTable.verify|verify} messages.
         * @param message DeleteTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IDeleteTable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DeleteTable message, length delimited. Does not implicitly {@link game2.DeleteTable.verify|verify} messages.
         * @param message DeleteTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IDeleteTable, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DeleteTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.DeleteTable;

        /**
         * Decodes a DeleteTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.DeleteTable;

        /**
         * Verifies a DeleteTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DeleteVote. */
    interface IDeleteVote {

        /** DeleteVote RoleName */
        RoleName: string;

        /** DeleteVote showName */
        showName: string;

        /** DeleteVote NickName */
        NickName: string;

        /** DeleteVote RoomID */
        RoomID: (number|Long);

        /** DeleteVote seat */
        seat: number;

        /** DeleteVote isAgree */
        isAgree: boolean;
    }

    /** Represents a DeleteVote. */
    class DeleteVote implements IDeleteVote {

        /**
         * Constructs a new DeleteVote.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IDeleteVote);

        /** DeleteVote RoleName. */
        public RoleName: string;

        /** DeleteVote showName. */
        public showName: string;

        /** DeleteVote NickName. */
        public NickName: string;

        /** DeleteVote RoomID. */
        public RoomID: (number|Long);

        /** DeleteVote seat. */
        public seat: number;

        /** DeleteVote isAgree. */
        public isAgree: boolean;

        /**
         * Creates a new DeleteVote instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteVote instance
         */
        public static create(properties?: game2.IDeleteVote): game2.DeleteVote;

        /**
         * Encodes the specified DeleteVote message. Does not implicitly {@link game2.DeleteVote.verify|verify} messages.
         * @param message DeleteVote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IDeleteVote, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DeleteVote message, length delimited. Does not implicitly {@link game2.DeleteVote.verify|verify} messages.
         * @param message DeleteVote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IDeleteVote, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DeleteVote message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.DeleteVote;

        /**
         * Decodes a DeleteVote message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteVote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.DeleteVote;

        /**
         * Verifies a DeleteVote message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGNtcMessage. */
    interface IOGNtcMessage {

        /** OGNtcMessage result */
        result: number;

        /** OGNtcMessage msg */
        msg: string;
    }

    /** Represents a OGNtcMessage. */
    class OGNtcMessage implements IOGNtcMessage {

        /**
         * Constructs a new OGNtcMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IOGNtcMessage);

        /** OGNtcMessage result. */
        public result: number;

        /** OGNtcMessage msg. */
        public msg: string;

        /**
         * Creates a new OGNtcMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGNtcMessage instance
         */
        public static create(properties?: game2.IOGNtcMessage): game2.OGNtcMessage;

        /**
         * Encodes the specified OGNtcMessage message. Does not implicitly {@link game2.OGNtcMessage.verify|verify} messages.
         * @param message OGNtcMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IOGNtcMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGNtcMessage message, length delimited. Does not implicitly {@link game2.OGNtcMessage.verify|verify} messages.
         * @param message OGNtcMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IOGNtcMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGNtcMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGNtcMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.OGNtcMessage;

        /**
         * Decodes a OGNtcMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGNtcMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.OGNtcMessage;

        /**
         * Verifies a OGNtcMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGNtcGameChatMessage. */
    interface IOGNtcGameChatMessage {

        /** OGNtcGameChatMessage sit */
        sit: number;

        /** OGNtcGameChatMessage type */
        type: number;

        /** OGNtcGameChatMessage msg */
        msg?: (string|null);
    }

    /** Represents a OGNtcGameChatMessage. */
    class OGNtcGameChatMessage implements IOGNtcGameChatMessage {

        /**
         * Constructs a new OGNtcGameChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IOGNtcGameChatMessage);

        /** OGNtcGameChatMessage sit. */
        public sit: number;

        /** OGNtcGameChatMessage type. */
        public type: number;

        /** OGNtcGameChatMessage msg. */
        public msg: string;

        /**
         * Creates a new OGNtcGameChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGNtcGameChatMessage instance
         */
        public static create(properties?: game2.IOGNtcGameChatMessage): game2.OGNtcGameChatMessage;

        /**
         * Encodes the specified OGNtcGameChatMessage message. Does not implicitly {@link game2.OGNtcGameChatMessage.verify|verify} messages.
         * @param message OGNtcGameChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IOGNtcGameChatMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGNtcGameChatMessage message, length delimited. Does not implicitly {@link game2.OGNtcGameChatMessage.verify|verify} messages.
         * @param message OGNtcGameChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IOGNtcGameChatMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGNtcGameChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGNtcGameChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.OGNtcGameChatMessage;

        /**
         * Decodes a OGNtcGameChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGNtcGameChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.OGNtcGameChatMessage;

        /**
         * Verifies a OGNtcGameChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqHuanSanZhang. */
    interface IReqHuanSanZhang {

        /** ReqHuanSanZhang huan_san_zhang */
        huan_san_zhang?: (game2.ICardInfo[]|null);

        /** ReqHuanSanZhang seat */
        seat: number;
    }

    /** Represents a ReqHuanSanZhang. */
    class ReqHuanSanZhang implements IReqHuanSanZhang {

        /**
         * Constructs a new ReqHuanSanZhang.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IReqHuanSanZhang);

        /** ReqHuanSanZhang huan_san_zhang. */
        public huan_san_zhang: game2.ICardInfo[];

        /** ReqHuanSanZhang seat. */
        public seat: number;

        /**
         * Creates a new ReqHuanSanZhang instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqHuanSanZhang instance
         */
        public static create(properties?: game2.IReqHuanSanZhang): game2.ReqHuanSanZhang;

        /**
         * Encodes the specified ReqHuanSanZhang message. Does not implicitly {@link game2.ReqHuanSanZhang.verify|verify} messages.
         * @param message ReqHuanSanZhang message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IReqHuanSanZhang, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqHuanSanZhang message, length delimited. Does not implicitly {@link game2.ReqHuanSanZhang.verify|verify} messages.
         * @param message ReqHuanSanZhang message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IReqHuanSanZhang, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqHuanSanZhang message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqHuanSanZhang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.ReqHuanSanZhang;

        /**
         * Decodes a ReqHuanSanZhang message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqHuanSanZhang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.ReqHuanSanZhang;

        /**
         * Verifies a ReqHuanSanZhang message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckHuanSanZhang. */
    interface IAckHuanSanZhang {

        /** AckHuanSanZhang huan_san_zhang */
        huan_san_zhang?: (game2.ICardInfo[]|null);

        /** AckHuanSanZhang order */
        order: number;

        /** AckHuanSanZhang req_huan */
        req_huan?: (game2.ICardInfo[]|null);
    }

    /** Represents an AckHuanSanZhang. */
    class AckHuanSanZhang implements IAckHuanSanZhang {

        /**
         * Constructs a new AckHuanSanZhang.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckHuanSanZhang);

        /** AckHuanSanZhang huan_san_zhang. */
        public huan_san_zhang: game2.ICardInfo[];

        /** AckHuanSanZhang order. */
        public order: number;

        /** AckHuanSanZhang req_huan. */
        public req_huan: game2.ICardInfo[];

        /**
         * Creates a new AckHuanSanZhang instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckHuanSanZhang instance
         */
        public static create(properties?: game2.IAckHuanSanZhang): game2.AckHuanSanZhang;

        /**
         * Encodes the specified AckHuanSanZhang message. Does not implicitly {@link game2.AckHuanSanZhang.verify|verify} messages.
         * @param message AckHuanSanZhang message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckHuanSanZhang, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckHuanSanZhang message, length delimited. Does not implicitly {@link game2.AckHuanSanZhang.verify|verify} messages.
         * @param message AckHuanSanZhang message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckHuanSanZhang, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckHuanSanZhang message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckHuanSanZhang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckHuanSanZhang;

        /**
         * Decodes an AckHuanSanZhang message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckHuanSanZhang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckHuanSanZhang;

        /**
         * Verifies an AckHuanSanZhang message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqHuanSanZhangEnd. */
    interface IReqHuanSanZhangEnd {

        /** ReqHuanSanZhangEnd username */
        username: string;
    }

    /** Represents a ReqHuanSanZhangEnd. */
    class ReqHuanSanZhangEnd implements IReqHuanSanZhangEnd {

        /**
         * Constructs a new ReqHuanSanZhangEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IReqHuanSanZhangEnd);

        /** ReqHuanSanZhangEnd username. */
        public username: string;

        /**
         * Creates a new ReqHuanSanZhangEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqHuanSanZhangEnd instance
         */
        public static create(properties?: game2.IReqHuanSanZhangEnd): game2.ReqHuanSanZhangEnd;

        /**
         * Encodes the specified ReqHuanSanZhangEnd message. Does not implicitly {@link game2.ReqHuanSanZhangEnd.verify|verify} messages.
         * @param message ReqHuanSanZhangEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IReqHuanSanZhangEnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqHuanSanZhangEnd message, length delimited. Does not implicitly {@link game2.ReqHuanSanZhangEnd.verify|verify} messages.
         * @param message ReqHuanSanZhangEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IReqHuanSanZhangEnd, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqHuanSanZhangEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqHuanSanZhangEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.ReqHuanSanZhangEnd;

        /**
         * Decodes a ReqHuanSanZhangEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqHuanSanZhangEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.ReqHuanSanZhangEnd;

        /**
         * Verifies a ReqHuanSanZhangEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqDingQue. */
    interface IReqDingQue {

        /** ReqDingQue dingque */
        dingque: number;

        /** ReqDingQue seat */
        seat: number;
    }

    /** Represents a ReqDingQue. */
    class ReqDingQue implements IReqDingQue {

        /**
         * Constructs a new ReqDingQue.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IReqDingQue);

        /** ReqDingQue dingque. */
        public dingque: number;

        /** ReqDingQue seat. */
        public seat: number;

        /**
         * Creates a new ReqDingQue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqDingQue instance
         */
        public static create(properties?: game2.IReqDingQue): game2.ReqDingQue;

        /**
         * Encodes the specified ReqDingQue message. Does not implicitly {@link game2.ReqDingQue.verify|verify} messages.
         * @param message ReqDingQue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IReqDingQue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqDingQue message, length delimited. Does not implicitly {@link game2.ReqDingQue.verify|verify} messages.
         * @param message ReqDingQue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IReqDingQue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqDingQue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqDingQue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.ReqDingQue;

        /**
         * Decodes a ReqDingQue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqDingQue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.ReqDingQue;

        /**
         * Verifies a ReqDingQue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckDingQue. */
    interface IAckDingQue {

        /** AckDingQue dingque */
        dingque?: (number[]|null);
    }

    /** Represents an AckDingQue. */
    class AckDingQue implements IAckDingQue {

        /**
         * Constructs a new AckDingQue.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckDingQue);

        /** AckDingQue dingque. */
        public dingque: number[];

        /**
         * Creates a new AckDingQue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckDingQue instance
         */
        public static create(properties?: game2.IAckDingQue): game2.AckDingQue;

        /**
         * Encodes the specified AckDingQue message. Does not implicitly {@link game2.AckDingQue.verify|verify} messages.
         * @param message AckDingQue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckDingQue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckDingQue message, length delimited. Does not implicitly {@link game2.AckDingQue.verify|verify} messages.
         * @param message AckDingQue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckDingQue, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckDingQue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckDingQue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckDingQue;

        /**
         * Decodes an AckDingQue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckDingQue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckDingQue;

        /**
         * Verifies an AckDingQue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGameStatus. */
    interface IAckGameStatus {

        /** AckGameStatus nstatus */
        nstatus?: (number[]|null);
    }

    /** Represents an AckGameStatus. */
    class AckGameStatus implements IAckGameStatus {

        /**
         * Constructs a new AckGameStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckGameStatus);

        /** AckGameStatus nstatus. */
        public nstatus: number[];

        /**
         * Creates a new AckGameStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGameStatus instance
         */
        public static create(properties?: game2.IAckGameStatus): game2.AckGameStatus;

        /**
         * Encodes the specified AckGameStatus message. Does not implicitly {@link game2.AckGameStatus.verify|verify} messages.
         * @param message AckGameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckGameStatus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGameStatus message, length delimited. Does not implicitly {@link game2.AckGameStatus.verify|verify} messages.
         * @param message AckGameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckGameStatus, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGameStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckGameStatus;

        /**
         * Decodes an AckGameStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckGameStatus;

        /**
         * Verifies an AckGameStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TingCard. */
    interface ITingCard {

        /** TingCard FanType */
        FanType: number;

        /** TingCard CardIndex */
        CardIndex: number;
    }

    /** Represents a TingCard. */
    class TingCard implements ITingCard {

        /**
         * Constructs a new TingCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.ITingCard);

        /** TingCard FanType. */
        public FanType: number;

        /** TingCard CardIndex. */
        public CardIndex: number;

        /**
         * Creates a new TingCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TingCard instance
         */
        public static create(properties?: game2.ITingCard): game2.TingCard;

        /**
         * Encodes the specified TingCard message. Does not implicitly {@link game2.TingCard.verify|verify} messages.
         * @param message TingCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.ITingCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TingCard message, length delimited. Does not implicitly {@link game2.TingCard.verify|verify} messages.
         * @param message TingCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.ITingCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TingCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TingCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.TingCard;

        /**
         * Decodes a TingCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TingCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.TingCard;

        /**
         * Verifies a TingCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MahjongCallInfo. */
    interface IMahjongCallInfo {

        /** MahjongCallInfo ObtainCardIndex */
        ObtainCardIndex: number;

        /** MahjongCallInfo CallCards */
        CallCards?: (game2.ITingCard[]|null);
    }

    /** Represents a MahjongCallInfo. */
    class MahjongCallInfo implements IMahjongCallInfo {

        /**
         * Constructs a new MahjongCallInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IMahjongCallInfo);

        /** MahjongCallInfo ObtainCardIndex. */
        public ObtainCardIndex: number;

        /** MahjongCallInfo CallCards. */
        public CallCards: game2.ITingCard[];

        /**
         * Creates a new MahjongCallInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MahjongCallInfo instance
         */
        public static create(properties?: game2.IMahjongCallInfo): game2.MahjongCallInfo;

        /**
         * Encodes the specified MahjongCallInfo message. Does not implicitly {@link game2.MahjongCallInfo.verify|verify} messages.
         * @param message MahjongCallInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IMahjongCallInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MahjongCallInfo message, length delimited. Does not implicitly {@link game2.MahjongCallInfo.verify|verify} messages.
         * @param message MahjongCallInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IMahjongCallInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MahjongCallInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MahjongCallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.MahjongCallInfo;

        /**
         * Decodes a MahjongCallInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MahjongCallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.MahjongCallInfo;

        /**
         * Verifies a MahjongCallInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckGameResult. */
    interface IAckGameResult {

        /** AckGameResult tableGuid */
        tableGuid?: (string|null);

        /** AckGameResult IsOver */
        IsOver?: (number|null);

        /** AckGameResult playerInfo */
        playerInfo?: (game2.IPlayerResultInfo[]|null);
    }

    /** Represents an AckGameResult. */
    class AckGameResult implements IAckGameResult {

        /**
         * Constructs a new AckGameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IAckGameResult);

        /** AckGameResult tableGuid. */
        public tableGuid: string;

        /** AckGameResult IsOver. */
        public IsOver: number;

        /** AckGameResult playerInfo. */
        public playerInfo: game2.IPlayerResultInfo[];

        /**
         * Creates a new AckGameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckGameResult instance
         */
        public static create(properties?: game2.IAckGameResult): game2.AckGameResult;

        /**
         * Encodes the specified AckGameResult message. Does not implicitly {@link game2.AckGameResult.verify|verify} messages.
         * @param message AckGameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IAckGameResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckGameResult message, length delimited. Does not implicitly {@link game2.AckGameResult.verify|verify} messages.
         * @param message AckGameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IAckGameResult, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckGameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.AckGameResult;

        /**
         * Decodes an AckGameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.AckGameResult;

        /**
         * Verifies an AckGameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerResultInfo. */
    interface IPlayerResultInfo {

        /** PlayerResultInfo username */
        username: string;

        /** PlayerResultInfo seat */
        seat?: (number|null);

        /** PlayerResultInfo fantype */
        fantype?: (number|null);

        /** PlayerResultInfo wintype */
        wintype?: (number|null);

        /** PlayerResultInfo max_fan */
        max_fan?: (number|null);

        /** PlayerResultInfo gameCoin */
        gameCoin?: (number|null);

        /** PlayerResultInfo Coin */
        Coin?: (number|null);

        /** PlayerResultInfo feeCoin */
        feeCoin?: (number|null);

        /** PlayerResultInfo result_list_detail */
        result_list_detail?: (game2.IScoreDescDetail[]|null);

        /** PlayerResultInfo handCards */
        handCards?: (game2.ICardsGroup[]|null);
    }

    /** Represents a PlayerResultInfo. */
    class PlayerResultInfo implements IPlayerResultInfo {

        /**
         * Constructs a new PlayerResultInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IPlayerResultInfo);

        /** PlayerResultInfo username. */
        public username: string;

        /** PlayerResultInfo seat. */
        public seat: number;

        /** PlayerResultInfo fantype. */
        public fantype: number;

        /** PlayerResultInfo wintype. */
        public wintype: number;

        /** PlayerResultInfo max_fan. */
        public max_fan: number;

        /** PlayerResultInfo gameCoin. */
        public gameCoin: number;

        /** PlayerResultInfo Coin. */
        public Coin: number;

        /** PlayerResultInfo feeCoin. */
        public feeCoin: number;

        /** PlayerResultInfo result_list_detail. */
        public result_list_detail: game2.IScoreDescDetail[];

        /** PlayerResultInfo handCards. */
        public handCards: game2.ICardsGroup[];

        /**
         * Creates a new PlayerResultInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerResultInfo instance
         */
        public static create(properties?: game2.IPlayerResultInfo): game2.PlayerResultInfo;

        /**
         * Encodes the specified PlayerResultInfo message. Does not implicitly {@link game2.PlayerResultInfo.verify|verify} messages.
         * @param message PlayerResultInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IPlayerResultInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerResultInfo message, length delimited. Does not implicitly {@link game2.PlayerResultInfo.verify|verify} messages.
         * @param message PlayerResultInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IPlayerResultInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerResultInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerResultInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.PlayerResultInfo;

        /**
         * Decodes a PlayerResultInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerResultInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.PlayerResultInfo;

        /**
         * Verifies a PlayerResultInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ScoreDescDetail. */
    interface IScoreDescDetail {

        /** ScoreDescDetail type */
        type?: (number|null);

        /** ScoreDescDetail fannum */
        fannum?: (number|null);

        /** ScoreDescDetail score */
        score?: (number|null);

        /** ScoreDescDetail obtainsit */
        obtainsit?: (number|null);

        /** ScoreDescDetail selfseat */
        selfseat?: (number|null);

        /** ScoreDescDetail score_change */
        score_change?: (number[]|null);

        /** ScoreDescDetail fan_zhong */
        fan_zhong?: (number[]|null);

        /** ScoreDescDetail fan_num */
        fan_num?: (number[]|null);

        /** ScoreDescDetail huCardID */
        huCardID?: (number|null);
    }

    /** Represents a ScoreDescDetail. */
    class ScoreDescDetail implements IScoreDescDetail {

        /**
         * Constructs a new ScoreDescDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IScoreDescDetail);

        /** ScoreDescDetail type. */
        public type: number;

        /** ScoreDescDetail fannum. */
        public fannum: number;

        /** ScoreDescDetail score. */
        public score: number;

        /** ScoreDescDetail obtainsit. */
        public obtainsit: number;

        /** ScoreDescDetail selfseat. */
        public selfseat: number;

        /** ScoreDescDetail score_change. */
        public score_change: number[];

        /** ScoreDescDetail fan_zhong. */
        public fan_zhong: number[];

        /** ScoreDescDetail fan_num. */
        public fan_num: number[];

        /** ScoreDescDetail huCardID. */
        public huCardID: number;

        /**
         * Creates a new ScoreDescDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScoreDescDetail instance
         */
        public static create(properties?: game2.IScoreDescDetail): game2.ScoreDescDetail;

        /**
         * Encodes the specified ScoreDescDetail message. Does not implicitly {@link game2.ScoreDescDetail.verify|verify} messages.
         * @param message ScoreDescDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IScoreDescDetail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ScoreDescDetail message, length delimited. Does not implicitly {@link game2.ScoreDescDetail.verify|verify} messages.
         * @param message ScoreDescDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IScoreDescDetail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ScoreDescDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScoreDescDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.ScoreDescDetail;

        /**
         * Decodes a ScoreDescDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScoreDescDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.ScoreDescDetail;

        /**
         * Verifies a ScoreDescDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HuResultAck. */
    interface IHuResultAck {

        /** HuResultAck hulist */
        hulist?: (game2.IHuData[]|null);
    }

    /** Represents a HuResultAck. */
    class HuResultAck implements IHuResultAck {

        /**
         * Constructs a new HuResultAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IHuResultAck);

        /** HuResultAck hulist. */
        public hulist: game2.IHuData[];

        /**
         * Creates a new HuResultAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HuResultAck instance
         */
        public static create(properties?: game2.IHuResultAck): game2.HuResultAck;

        /**
         * Encodes the specified HuResultAck message. Does not implicitly {@link game2.HuResultAck.verify|verify} messages.
         * @param message HuResultAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IHuResultAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HuResultAck message, length delimited. Does not implicitly {@link game2.HuResultAck.verify|verify} messages.
         * @param message HuResultAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IHuResultAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HuResultAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HuResultAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.HuResultAck;

        /**
         * Decodes a HuResultAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HuResultAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.HuResultAck;

        /**
         * Verifies a HuResultAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HuData. */
    interface IHuData {

        /** HuData username */
        username: string;

        /** HuData seat */
        seat?: (number|null);

        /** HuData huInfo */
        huInfo?: (game2.IScoreDescDetail|null);
    }

    /** Represents a HuData. */
    class HuData implements IHuData {

        /**
         * Constructs a new HuData.
         * @param [properties] Properties to set
         */
        constructor(properties?: game2.IHuData);

        /** HuData username. */
        public username: string;

        /** HuData seat. */
        public seat: number;

        /** HuData huInfo. */
        public huInfo?: (game2.IScoreDescDetail|null);

        /**
         * Creates a new HuData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HuData instance
         */
        public static create(properties?: game2.IHuData): game2.HuData;

        /**
         * Encodes the specified HuData message. Does not implicitly {@link game2.HuData.verify|verify} messages.
         * @param message HuData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game2.IHuData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HuData message, length delimited. Does not implicitly {@link game2.HuData.verify|verify} messages.
         * @param message HuData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game2.IHuData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HuData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HuData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): game2.HuData;

        /**
         * Decodes a HuData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HuData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): game2.HuData;

        /**
         * Verifies a HuData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace message. */
declare namespace message {

    /** Properties of a HeartBeatReq. */
    interface IHeartBeatReq {

        /** HeartBeatReq time */
        time: (number|Long);
    }

    /** Represents a HeartBeatReq. */
    class HeartBeatReq implements IHeartBeatReq {

        /**
         * Constructs a new HeartBeatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IHeartBeatReq);

        /** HeartBeatReq time. */
        public time: (number|Long);

        /**
         * Creates a new HeartBeatReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatReq instance
         */
        public static create(properties?: message.IHeartBeatReq): message.HeartBeatReq;

        /**
         * Encodes the specified HeartBeatReq message. Does not implicitly {@link message.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IHeartBeatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link message.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IHeartBeatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.HeartBeatReq;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.HeartBeatReq;

        /**
         * Verifies a HeartBeatReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HeartBeatAck. */
    interface IHeartBeatAck {

        /** HeartBeatAck time */
        time?: (number|Long|null);
    }

    /** Represents a HeartBeatAck. */
    class HeartBeatAck implements IHeartBeatAck {

        /**
         * Constructs a new HeartBeatAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IHeartBeatAck);

        /** HeartBeatAck time. */
        public time: (number|Long);

        /**
         * Creates a new HeartBeatAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatAck instance
         */
        public static create(properties?: message.IHeartBeatAck): message.HeartBeatAck;

        /**
         * Encodes the specified HeartBeatAck message. Does not implicitly {@link message.HeartBeatAck.verify|verify} messages.
         * @param message HeartBeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IHeartBeatAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeartBeatAck message, length delimited. Does not implicitly {@link message.HeartBeatAck.verify|verify} messages.
         * @param message HeartBeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IHeartBeatAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartBeatAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.HeartBeatAck;

        /**
         * Decodes a HeartBeatAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.HeartBeatAck;

        /**
         * Verifies a HeartBeatAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a reqLogin. */
    interface IreqLogin {

        /** reqLogin userName */
        userName: string;

        /** reqLogin avatarUrl */
        avatarUrl: string;

        /** reqLogin channelId */
        channelId: string;

        /** reqLogin gameId */
        gameId?: (number|null);

        /** reqLogin ticket */
        ticket: string;
    }

    /** Represents a reqLogin. */
    class reqLogin implements IreqLogin {

        /**
         * Constructs a new reqLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IreqLogin);

        /** reqLogin userName. */
        public userName: string;

        /** reqLogin avatarUrl. */
        public avatarUrl: string;

        /** reqLogin channelId. */
        public channelId: string;

        /** reqLogin gameId. */
        public gameId: number;

        /** reqLogin ticket. */
        public ticket: string;

        /**
         * Creates a new reqLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns reqLogin instance
         */
        public static create(properties?: message.IreqLogin): message.reqLogin;

        /**
         * Encodes the specified reqLogin message. Does not implicitly {@link message.reqLogin.verify|verify} messages.
         * @param message reqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IreqLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified reqLogin message, length delimited. Does not implicitly {@link message.reqLogin.verify|verify} messages.
         * @param message reqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IreqLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a reqLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns reqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.reqLogin;

        /**
         * Decodes a reqLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns reqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.reqLogin;

        /**
         * Verifies a reqLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ackLogin. */
    interface IackLogin {

        /** ackLogin result */
        result: number;

        /** ackLogin userName */
        userName?: (string|null);

        /** ackLogin showName */
        showName?: (string|null);

        /** ackLogin userIp */
        userIp?: (string|null);

        /** ackLogin enterCode */
        enterCode?: (string|null);

        /** ackLogin ingame */
        ingame?: (number|null);
    }

    /** Represents an ackLogin. */
    class ackLogin implements IackLogin {

        /**
         * Constructs a new ackLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IackLogin);

        /** ackLogin result. */
        public result: number;

        /** ackLogin userName. */
        public userName: string;

        /** ackLogin showName. */
        public showName: string;

        /** ackLogin userIp. */
        public userIp: string;

        /** ackLogin enterCode. */
        public enterCode: string;

        /** ackLogin ingame. */
        public ingame: number;

        /**
         * Creates a new ackLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ackLogin instance
         */
        public static create(properties?: message.IackLogin): message.ackLogin;

        /**
         * Encodes the specified ackLogin message. Does not implicitly {@link message.ackLogin.verify|verify} messages.
         * @param message ackLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IackLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ackLogin message, length delimited. Does not implicitly {@link message.ackLogin.verify|verify} messages.
         * @param message ackLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IackLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ackLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ackLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.ackLogin;

        /**
         * Decodes an ackLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ackLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.ackLogin;

        /**
         * Verifies an ackLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ByUserKickNtc. */
    interface IByUserKickNtc {

        /** ByUserKickNtc result */
        result?: (number|null);
    }

    /** Represents a ByUserKickNtc. */
    class ByUserKickNtc implements IByUserKickNtc {

        /**
         * Constructs a new ByUserKickNtc.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.IByUserKickNtc);

        /** ByUserKickNtc result. */
        public result: number;

        /**
         * Creates a new ByUserKickNtc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ByUserKickNtc instance
         */
        public static create(properties?: message.IByUserKickNtc): message.ByUserKickNtc;

        /**
         * Encodes the specified ByUserKickNtc message. Does not implicitly {@link message.ByUserKickNtc.verify|verify} messages.
         * @param message ByUserKickNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.IByUserKickNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ByUserKickNtc message, length delimited. Does not implicitly {@link message.ByUserKickNtc.verify|verify} messages.
         * @param message ByUserKickNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.IByUserKickNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ByUserKickNtc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ByUserKickNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.ByUserKickNtc;

        /**
         * Decodes a ByUserKickNtc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ByUserKickNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.ByUserKickNtc;

        /**
         * Verifies a ByUserKickNtc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotifyMsgNtc. */
    interface INotifyMsgNtc {

        /** NotifyMsgNtc type */
        type?: (number|null);

        /** NotifyMsgNtc who */
        who?: (string|null);

        /** NotifyMsgNtc title */
        title?: (string|null);

        /** NotifyMsgNtc content */
        content?: (string|null);

        /** NotifyMsgNtc createTime */
        createTime?: (string|null);

        /** NotifyMsgNtc isLoop */
        isLoop?: (number|null);
    }

    /** Represents a NotifyMsgNtc. */
    class NotifyMsgNtc implements INotifyMsgNtc {

        /**
         * Constructs a new NotifyMsgNtc.
         * @param [properties] Properties to set
         */
        constructor(properties?: message.INotifyMsgNtc);

        /** NotifyMsgNtc type. */
        public type: number;

        /** NotifyMsgNtc who. */
        public who: string;

        /** NotifyMsgNtc title. */
        public title: string;

        /** NotifyMsgNtc content. */
        public content: string;

        /** NotifyMsgNtc createTime. */
        public createTime: string;

        /** NotifyMsgNtc isLoop. */
        public isLoop: number;

        /**
         * Creates a new NotifyMsgNtc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyMsgNtc instance
         */
        public static create(properties?: message.INotifyMsgNtc): message.NotifyMsgNtc;

        /**
         * Encodes the specified NotifyMsgNtc message. Does not implicitly {@link message.NotifyMsgNtc.verify|verify} messages.
         * @param message NotifyMsgNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message.INotifyMsgNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotifyMsgNtc message, length delimited. Does not implicitly {@link message.NotifyMsgNtc.verify|verify} messages.
         * @param message NotifyMsgNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message.INotifyMsgNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotifyMsgNtc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyMsgNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message.NotifyMsgNtc;

        /**
         * Decodes a NotifyMsgNtc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyMsgNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message.NotifyMsgNtc;

        /**
         * Verifies a NotifyMsgNtc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace message2. */
declare namespace message2 {

    /** Properties of a HeartBeatReq. */
    interface IHeartBeatReq {

        /** HeartBeatReq time */
        time: (number|Long);
    }

    /** Represents a HeartBeatReq. */
    class HeartBeatReq implements IHeartBeatReq {

        /**
         * Constructs a new HeartBeatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: message2.IHeartBeatReq);

        /** HeartBeatReq time. */
        public time: (number|Long);

        /**
         * Creates a new HeartBeatReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatReq instance
         */
        public static create(properties?: message2.IHeartBeatReq): message2.HeartBeatReq;

        /**
         * Encodes the specified HeartBeatReq message. Does not implicitly {@link message2.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message2.IHeartBeatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link message2.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message2.IHeartBeatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message2.HeartBeatReq;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message2.HeartBeatReq;

        /**
         * Verifies a HeartBeatReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HeartBeatAck. */
    interface IHeartBeatAck {

        /** HeartBeatAck time */
        time?: (number|Long|null);
    }

    /** Represents a HeartBeatAck. */
    class HeartBeatAck implements IHeartBeatAck {

        /**
         * Constructs a new HeartBeatAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: message2.IHeartBeatAck);

        /** HeartBeatAck time. */
        public time: (number|Long);

        /**
         * Creates a new HeartBeatAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatAck instance
         */
        public static create(properties?: message2.IHeartBeatAck): message2.HeartBeatAck;

        /**
         * Encodes the specified HeartBeatAck message. Does not implicitly {@link message2.HeartBeatAck.verify|verify} messages.
         * @param message HeartBeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message2.IHeartBeatAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeartBeatAck message, length delimited. Does not implicitly {@link message2.HeartBeatAck.verify|verify} messages.
         * @param message HeartBeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message2.IHeartBeatAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartBeatAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message2.HeartBeatAck;

        /**
         * Decodes a HeartBeatAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message2.HeartBeatAck;

        /**
         * Verifies a HeartBeatAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a reqLogin. */
    interface IreqLogin {

        /** reqLogin userName */
        userName: string;

        /** reqLogin avatarUrl */
        avatarUrl: string;

        /** reqLogin channelId */
        channelId: string;

        /** reqLogin gameId */
        gameId?: (number|null);

        /** reqLogin ticket */
        ticket: string;
    }

    /** Represents a reqLogin. */
    class reqLogin implements IreqLogin {

        /**
         * Constructs a new reqLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: message2.IreqLogin);

        /** reqLogin userName. */
        public userName: string;

        /** reqLogin avatarUrl. */
        public avatarUrl: string;

        /** reqLogin channelId. */
        public channelId: string;

        /** reqLogin gameId. */
        public gameId: number;

        /** reqLogin ticket. */
        public ticket: string;

        /**
         * Creates a new reqLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns reqLogin instance
         */
        public static create(properties?: message2.IreqLogin): message2.reqLogin;

        /**
         * Encodes the specified reqLogin message. Does not implicitly {@link message2.reqLogin.verify|verify} messages.
         * @param message reqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message2.IreqLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified reqLogin message, length delimited. Does not implicitly {@link message2.reqLogin.verify|verify} messages.
         * @param message reqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message2.IreqLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a reqLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns reqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message2.reqLogin;

        /**
         * Decodes a reqLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns reqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message2.reqLogin;

        /**
         * Verifies a reqLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ackLogin. */
    interface IackLogin {

        /** ackLogin result */
        result: number;

        /** ackLogin userName */
        userName?: (string|null);

        /** ackLogin showName */
        showName?: (string|null);

        /** ackLogin userIp */
        userIp?: (string|null);

        /** ackLogin enterCode */
        enterCode?: (string|null);

        /** ackLogin ingame */
        ingame?: (number|null);
    }

    /** Represents an ackLogin. */
    class ackLogin implements IackLogin {

        /**
         * Constructs a new ackLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: message2.IackLogin);

        /** ackLogin result. */
        public result: number;

        /** ackLogin userName. */
        public userName: string;

        /** ackLogin showName. */
        public showName: string;

        /** ackLogin userIp. */
        public userIp: string;

        /** ackLogin enterCode. */
        public enterCode: string;

        /** ackLogin ingame. */
        public ingame: number;

        /**
         * Creates a new ackLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ackLogin instance
         */
        public static create(properties?: message2.IackLogin): message2.ackLogin;

        /**
         * Encodes the specified ackLogin message. Does not implicitly {@link message2.ackLogin.verify|verify} messages.
         * @param message ackLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message2.IackLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ackLogin message, length delimited. Does not implicitly {@link message2.ackLogin.verify|verify} messages.
         * @param message ackLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message2.IackLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ackLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ackLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message2.ackLogin;

        /**
         * Decodes an ackLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ackLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message2.ackLogin;

        /**
         * Verifies an ackLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ByUserKickNtc. */
    interface IByUserKickNtc {

        /** ByUserKickNtc result */
        result?: (number|null);
    }

    /** Represents a ByUserKickNtc. */
    class ByUserKickNtc implements IByUserKickNtc {

        /**
         * Constructs a new ByUserKickNtc.
         * @param [properties] Properties to set
         */
        constructor(properties?: message2.IByUserKickNtc);

        /** ByUserKickNtc result. */
        public result: number;

        /**
         * Creates a new ByUserKickNtc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ByUserKickNtc instance
         */
        public static create(properties?: message2.IByUserKickNtc): message2.ByUserKickNtc;

        /**
         * Encodes the specified ByUserKickNtc message. Does not implicitly {@link message2.ByUserKickNtc.verify|verify} messages.
         * @param message ByUserKickNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message2.IByUserKickNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ByUserKickNtc message, length delimited. Does not implicitly {@link message2.ByUserKickNtc.verify|verify} messages.
         * @param message ByUserKickNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message2.IByUserKickNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ByUserKickNtc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ByUserKickNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message2.ByUserKickNtc;

        /**
         * Decodes a ByUserKickNtc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ByUserKickNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message2.ByUserKickNtc;

        /**
         * Verifies a ByUserKickNtc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a NotifyMsgNtc. */
    interface INotifyMsgNtc {

        /** NotifyMsgNtc type */
        type?: (number|null);

        /** NotifyMsgNtc who */
        who?: (string|null);

        /** NotifyMsgNtc title */
        title?: (string|null);

        /** NotifyMsgNtc content */
        content?: (string|null);

        /** NotifyMsgNtc createTime */
        createTime?: (string|null);

        /** NotifyMsgNtc isLoop */
        isLoop?: (number|null);
    }

    /** Represents a NotifyMsgNtc. */
    class NotifyMsgNtc implements INotifyMsgNtc {

        /**
         * Constructs a new NotifyMsgNtc.
         * @param [properties] Properties to set
         */
        constructor(properties?: message2.INotifyMsgNtc);

        /** NotifyMsgNtc type. */
        public type: number;

        /** NotifyMsgNtc who. */
        public who: string;

        /** NotifyMsgNtc title. */
        public title: string;

        /** NotifyMsgNtc content. */
        public content: string;

        /** NotifyMsgNtc createTime. */
        public createTime: string;

        /** NotifyMsgNtc isLoop. */
        public isLoop: number;

        /**
         * Creates a new NotifyMsgNtc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyMsgNtc instance
         */
        public static create(properties?: message2.INotifyMsgNtc): message2.NotifyMsgNtc;

        /**
         * Encodes the specified NotifyMsgNtc message. Does not implicitly {@link message2.NotifyMsgNtc.verify|verify} messages.
         * @param message NotifyMsgNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: message2.INotifyMsgNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified NotifyMsgNtc message, length delimited. Does not implicitly {@link message2.NotifyMsgNtc.verify|verify} messages.
         * @param message NotifyMsgNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: message2.INotifyMsgNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a NotifyMsgNtc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyMsgNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): message2.NotifyMsgNtc;

        /**
         * Decodes a NotifyMsgNtc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyMsgNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): message2.NotifyMsgNtc;

        /**
         * Verifies a NotifyMsgNtc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace room. */
declare namespace room {

    /** Properties of a VGHeartBeatReq. */
    interface IVGHeartBeatReq {

        /** VGHeartBeatReq time */
        time?: (number|Long|null);
    }

    /** Represents a VGHeartBeatReq. */
    class VGHeartBeatReq implements IVGHeartBeatReq {

        /**
         * Constructs a new VGHeartBeatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGHeartBeatReq);

        /** VGHeartBeatReq time. */
        public time: (number|Long);

        /**
         * Creates a new VGHeartBeatReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGHeartBeatReq instance
         */
        public static create(properties?: room.IVGHeartBeatReq): room.VGHeartBeatReq;

        /**
         * Encodes the specified VGHeartBeatReq message. Does not implicitly {@link room.VGHeartBeatReq.verify|verify} messages.
         * @param message VGHeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGHeartBeatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGHeartBeatReq message, length delimited. Does not implicitly {@link room.VGHeartBeatReq.verify|verify} messages.
         * @param message VGHeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGHeartBeatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGHeartBeatReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGHeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGHeartBeatReq;

        /**
         * Decodes a VGHeartBeatReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGHeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGHeartBeatReq;

        /**
         * Verifies a VGHeartBeatReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGHeartBeatAck. */
    interface IVGHeartBeatAck {

        /** VGHeartBeatAck time */
        time?: (number|Long|null);
    }

    /** Represents a VGHeartBeatAck. */
    class VGHeartBeatAck implements IVGHeartBeatAck {

        /**
         * Constructs a new VGHeartBeatAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGHeartBeatAck);

        /** VGHeartBeatAck time. */
        public time: (number|Long);

        /**
         * Creates a new VGHeartBeatAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGHeartBeatAck instance
         */
        public static create(properties?: room.IVGHeartBeatAck): room.VGHeartBeatAck;

        /**
         * Encodes the specified VGHeartBeatAck message. Does not implicitly {@link room.VGHeartBeatAck.verify|verify} messages.
         * @param message VGHeartBeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGHeartBeatAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGHeartBeatAck message, length delimited. Does not implicitly {@link room.VGHeartBeatAck.verify|verify} messages.
         * @param message VGHeartBeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGHeartBeatAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGHeartBeatAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGHeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGHeartBeatAck;

        /**
         * Decodes a VGHeartBeatAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGHeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGHeartBeatAck;

        /**
         * Verifies a VGHeartBeatAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGLoginReq. */
    interface IVGLoginReq {

        /** VGLoginReq ticket */
        ticket?: (string|null);
    }

    /** Represents a VGLoginReq. */
    class VGLoginReq implements IVGLoginReq {

        /**
         * Constructs a new VGLoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGLoginReq);

        /** VGLoginReq ticket. */
        public ticket: string;

        /**
         * Creates a new VGLoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGLoginReq instance
         */
        public static create(properties?: room.IVGLoginReq): room.VGLoginReq;

        /**
         * Encodes the specified VGLoginReq message. Does not implicitly {@link room.VGLoginReq.verify|verify} messages.
         * @param message VGLoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGLoginReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGLoginReq message, length delimited. Does not implicitly {@link room.VGLoginReq.verify|verify} messages.
         * @param message VGLoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGLoginReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGLoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGLoginReq;

        /**
         * Decodes a VGLoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGLoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGLoginReq;

        /**
         * Verifies a VGLoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGLoginAck. */
    interface IVGLoginAck {

        /** VGLoginAck result */
        result?: (number|null);

        /** VGLoginAck userInfo */
        userInfo?: (room.IVGUserInfo|null);
    }

    /** Represents a VGLoginAck. */
    class VGLoginAck implements IVGLoginAck {

        /**
         * Constructs a new VGLoginAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGLoginAck);

        /** VGLoginAck result. */
        public result: number;

        /** VGLoginAck userInfo. */
        public userInfo?: (room.IVGUserInfo|null);

        /**
         * Creates a new VGLoginAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGLoginAck instance
         */
        public static create(properties?: room.IVGLoginAck): room.VGLoginAck;

        /**
         * Encodes the specified VGLoginAck message. Does not implicitly {@link room.VGLoginAck.verify|verify} messages.
         * @param message VGLoginAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGLoginAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGLoginAck message, length delimited. Does not implicitly {@link room.VGLoginAck.verify|verify} messages.
         * @param message VGLoginAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGLoginAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGLoginAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGLoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGLoginAck;

        /**
         * Decodes a VGLoginAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGLoginAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGLoginAck;

        /**
         * Verifies a VGLoginAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGRoomListReq. */
    interface IVGRoomListReq {

        /** VGRoomListReq userName */
        userName?: (string|null);
    }

    /** Represents a VGRoomListReq. */
    class VGRoomListReq implements IVGRoomListReq {

        /**
         * Constructs a new VGRoomListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGRoomListReq);

        /** VGRoomListReq userName. */
        public userName: string;

        /**
         * Creates a new VGRoomListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGRoomListReq instance
         */
        public static create(properties?: room.IVGRoomListReq): room.VGRoomListReq;

        /**
         * Encodes the specified VGRoomListReq message. Does not implicitly {@link room.VGRoomListReq.verify|verify} messages.
         * @param message VGRoomListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGRoomListReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGRoomListReq message, length delimited. Does not implicitly {@link room.VGRoomListReq.verify|verify} messages.
         * @param message VGRoomListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGRoomListReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGRoomListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGRoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGRoomListReq;

        /**
         * Decodes a VGRoomListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGRoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGRoomListReq;

        /**
         * Verifies a VGRoomListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGRoomListAck. */
    interface IVGRoomListAck {

        /** VGRoomListAck result */
        result?: (number|null);

        /** VGRoomListAck userName */
        userName?: (string|null);

        /** VGRoomListAck roomInfo */
        roomInfo?: (room.IRoomItem[]|null);
    }

    /** Represents a VGRoomListAck. */
    class VGRoomListAck implements IVGRoomListAck {

        /**
         * Constructs a new VGRoomListAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGRoomListAck);

        /** VGRoomListAck result. */
        public result: number;

        /** VGRoomListAck userName. */
        public userName: string;

        /** VGRoomListAck roomInfo. */
        public roomInfo: room.IRoomItem[];

        /**
         * Creates a new VGRoomListAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGRoomListAck instance
         */
        public static create(properties?: room.IVGRoomListAck): room.VGRoomListAck;

        /**
         * Encodes the specified VGRoomListAck message. Does not implicitly {@link room.VGRoomListAck.verify|verify} messages.
         * @param message VGRoomListAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGRoomListAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGRoomListAck message, length delimited. Does not implicitly {@link room.VGRoomListAck.verify|verify} messages.
         * @param message VGRoomListAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGRoomListAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGRoomListAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGRoomListAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGRoomListAck;

        /**
         * Decodes a VGRoomListAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGRoomListAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGRoomListAck;

        /**
         * Verifies a VGRoomListAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGSitDownReq. */
    interface IVGSitDownReq {

        /** VGSitDownReq userName */
        userName?: (string|null);

        /** VGSitDownReq userPos */
        userPos?: (room.IVGUserPos|null);
    }

    /** Represents a VGSitDownReq. */
    class VGSitDownReq implements IVGSitDownReq {

        /**
         * Constructs a new VGSitDownReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGSitDownReq);

        /** VGSitDownReq userName. */
        public userName: string;

        /** VGSitDownReq userPos. */
        public userPos?: (room.IVGUserPos|null);

        /**
         * Creates a new VGSitDownReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGSitDownReq instance
         */
        public static create(properties?: room.IVGSitDownReq): room.VGSitDownReq;

        /**
         * Encodes the specified VGSitDownReq message. Does not implicitly {@link room.VGSitDownReq.verify|verify} messages.
         * @param message VGSitDownReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGSitDownReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGSitDownReq message, length delimited. Does not implicitly {@link room.VGSitDownReq.verify|verify} messages.
         * @param message VGSitDownReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGSitDownReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGSitDownReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGSitDownReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGSitDownReq;

        /**
         * Decodes a VGSitDownReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGSitDownReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGSitDownReq;

        /**
         * Verifies a VGSitDownReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGSitDownAck. */
    interface IVGSitDownAck {

        /** VGSitDownAck result */
        result?: (number|null);

        /** VGSitDownAck userInfo */
        userInfo?: (room.IVGUserInfo|null);
    }

    /** Represents a VGSitDownAck. */
    class VGSitDownAck implements IVGSitDownAck {

        /**
         * Constructs a new VGSitDownAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGSitDownAck);

        /** VGSitDownAck result. */
        public result: number;

        /** VGSitDownAck userInfo. */
        public userInfo?: (room.IVGUserInfo|null);

        /**
         * Creates a new VGSitDownAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGSitDownAck instance
         */
        public static create(properties?: room.IVGSitDownAck): room.VGSitDownAck;

        /**
         * Encodes the specified VGSitDownAck message. Does not implicitly {@link room.VGSitDownAck.verify|verify} messages.
         * @param message VGSitDownAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGSitDownAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGSitDownAck message, length delimited. Does not implicitly {@link room.VGSitDownAck.verify|verify} messages.
         * @param message VGSitDownAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGSitDownAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGSitDownAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGSitDownAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGSitDownAck;

        /**
         * Decodes a VGSitDownAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGSitDownAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGSitDownAck;

        /**
         * Verifies a VGSitDownAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGSitUpReq. */
    interface IVGSitUpReq {

        /** VGSitUpReq userName */
        userName?: (string|null);

        /** VGSitUpReq userPos */
        userPos?: (room.IVGUserPos|null);
    }

    /** Represents a VGSitUpReq. */
    class VGSitUpReq implements IVGSitUpReq {

        /**
         * Constructs a new VGSitUpReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGSitUpReq);

        /** VGSitUpReq userName. */
        public userName: string;

        /** VGSitUpReq userPos. */
        public userPos?: (room.IVGUserPos|null);

        /**
         * Creates a new VGSitUpReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGSitUpReq instance
         */
        public static create(properties?: room.IVGSitUpReq): room.VGSitUpReq;

        /**
         * Encodes the specified VGSitUpReq message. Does not implicitly {@link room.VGSitUpReq.verify|verify} messages.
         * @param message VGSitUpReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGSitUpReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGSitUpReq message, length delimited. Does not implicitly {@link room.VGSitUpReq.verify|verify} messages.
         * @param message VGSitUpReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGSitUpReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGSitUpReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGSitUpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGSitUpReq;

        /**
         * Decodes a VGSitUpReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGSitUpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGSitUpReq;

        /**
         * Verifies a VGSitUpReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGSitUpAck. */
    interface IVGSitUpAck {

        /** VGSitUpAck result */
        result?: (number|null);

        /** VGSitUpAck userName */
        userName?: (string|null);

        /** VGSitUpAck userPos */
        userPos?: (room.IVGUserPos|null);

        /** VGSitUpAck userStatus */
        userStatus?: (number|null);

        /** VGSitUpAck reason */
        reason?: (number|null);
    }

    /** Represents a VGSitUpAck. */
    class VGSitUpAck implements IVGSitUpAck {

        /**
         * Constructs a new VGSitUpAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGSitUpAck);

        /** VGSitUpAck result. */
        public result: number;

        /** VGSitUpAck userName. */
        public userName: string;

        /** VGSitUpAck userPos. */
        public userPos?: (room.IVGUserPos|null);

        /** VGSitUpAck userStatus. */
        public userStatus: number;

        /** VGSitUpAck reason. */
        public reason: number;

        /**
         * Creates a new VGSitUpAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGSitUpAck instance
         */
        public static create(properties?: room.IVGSitUpAck): room.VGSitUpAck;

        /**
         * Encodes the specified VGSitUpAck message. Does not implicitly {@link room.VGSitUpAck.verify|verify} messages.
         * @param message VGSitUpAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGSitUpAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGSitUpAck message, length delimited. Does not implicitly {@link room.VGSitUpAck.verify|verify} messages.
         * @param message VGSitUpAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGSitUpAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGSitUpAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGSitUpAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGSitUpAck;

        /**
         * Decodes a VGSitUpAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGSitUpAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGSitUpAck;

        /**
         * Verifies a VGSitUpAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReqResetUserState. */
    interface IReqResetUserState {

        /** ReqResetUserState userName */
        userName?: (string|null);
    }

    /** Represents a ReqResetUserState. */
    class ReqResetUserState implements IReqResetUserState {

        /**
         * Constructs a new ReqResetUserState.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IReqResetUserState);

        /** ReqResetUserState userName. */
        public userName: string;

        /**
         * Creates a new ReqResetUserState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqResetUserState instance
         */
        public static create(properties?: room.IReqResetUserState): room.ReqResetUserState;

        /**
         * Encodes the specified ReqResetUserState message. Does not implicitly {@link room.ReqResetUserState.verify|verify} messages.
         * @param message ReqResetUserState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IReqResetUserState, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReqResetUserState message, length delimited. Does not implicitly {@link room.ReqResetUserState.verify|verify} messages.
         * @param message ReqResetUserState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IReqResetUserState, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqResetUserState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqResetUserState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.ReqResetUserState;

        /**
         * Decodes a ReqResetUserState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqResetUserState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.ReqResetUserState;

        /**
         * Verifies a ReqResetUserState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AckResetUserState. */
    interface IAckResetUserState {

        /** AckResetUserState result */
        result: number;

        /** AckResetUserState userName */
        userName?: (string|null);

        /** AckResetUserState state */
        state?: (number|null);
    }

    /** Represents an AckResetUserState. */
    class AckResetUserState implements IAckResetUserState {

        /**
         * Constructs a new AckResetUserState.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IAckResetUserState);

        /** AckResetUserState result. */
        public result: number;

        /** AckResetUserState userName. */
        public userName: string;

        /** AckResetUserState state. */
        public state: number;

        /**
         * Creates a new AckResetUserState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AckResetUserState instance
         */
        public static create(properties?: room.IAckResetUserState): room.AckResetUserState;

        /**
         * Encodes the specified AckResetUserState message. Does not implicitly {@link room.AckResetUserState.verify|verify} messages.
         * @param message AckResetUserState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IAckResetUserState, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AckResetUserState message, length delimited. Does not implicitly {@link room.AckResetUserState.verify|verify} messages.
         * @param message AckResetUserState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IAckResetUserState, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AckResetUserState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AckResetUserState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.AckResetUserState;

        /**
         * Decodes an AckResetUserState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AckResetUserState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.AckResetUserState;

        /**
         * Verifies an AckResetUserState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MJ_TingTileInfo. */
    interface IMJ_TingTileInfo {

        /** MJ_TingTileInfo callTile */
        callTile?: (number|null);

        /** MJ_TingTileInfo callTileCount */
        callTileCount?: (number|null);

        /** MJ_TingTileInfo fans */
        fans?: (number|null);
    }

    /** Represents a MJ_TingTileInfo. */
    class MJ_TingTileInfo implements IMJ_TingTileInfo {

        /**
         * Constructs a new MJ_TingTileInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IMJ_TingTileInfo);

        /** MJ_TingTileInfo callTile. */
        public callTile: number;

        /** MJ_TingTileInfo callTileCount. */
        public callTileCount: number;

        /** MJ_TingTileInfo fans. */
        public fans: number;

        /**
         * Creates a new MJ_TingTileInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MJ_TingTileInfo instance
         */
        public static create(properties?: room.IMJ_TingTileInfo): room.MJ_TingTileInfo;

        /**
         * Encodes the specified MJ_TingTileInfo message. Does not implicitly {@link room.MJ_TingTileInfo.verify|verify} messages.
         * @param message MJ_TingTileInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IMJ_TingTileInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MJ_TingTileInfo message, length delimited. Does not implicitly {@link room.MJ_TingTileInfo.verify|verify} messages.
         * @param message MJ_TingTileInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IMJ_TingTileInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MJ_TingTileInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MJ_TingTileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.MJ_TingTileInfo;

        /**
         * Decodes a MJ_TingTileInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MJ_TingTileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.MJ_TingTileInfo;

        /**
         * Verifies a MJ_TingTileInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MJ_Operation. */
    interface IMJ_Operation {

        /** MJ_Operation operationType */
        operationType?: (number|null);

        /** MJ_Operation Tiles */
        Tiles?: (number[]|null);

        /** MJ_Operation ObtainTile */
        ObtainTile?: (number|null);

        /** MJ_Operation ObtainSeat */
        ObtainSeat?: (number|null);

        /** MJ_Operation tingTileInfo */
        tingTileInfo?: (room.IMJ_TingTileInfo[]|null);

        /** MJ_Operation maxFan */
        maxFan?: (number|null);

        /** MJ_Operation fans */
        fans?: (room.IMJ_FanInfo[]|null);

        /** MJ_Operation operationID */
        operationID?: (number|null);
    }

    /** Represents a MJ_Operation. */
    class MJ_Operation implements IMJ_Operation {

        /**
         * Constructs a new MJ_Operation.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IMJ_Operation);

        /** MJ_Operation operationType. */
        public operationType: number;

        /** MJ_Operation Tiles. */
        public Tiles: number[];

        /** MJ_Operation ObtainTile. */
        public ObtainTile: number;

        /** MJ_Operation ObtainSeat. */
        public ObtainSeat: number;

        /** MJ_Operation tingTileInfo. */
        public tingTileInfo: room.IMJ_TingTileInfo[];

        /** MJ_Operation maxFan. */
        public maxFan: number;

        /** MJ_Operation fans. */
        public fans: room.IMJ_FanInfo[];

        /** MJ_Operation operationID. */
        public operationID: number;

        /**
         * Creates a new MJ_Operation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MJ_Operation instance
         */
        public static create(properties?: room.IMJ_Operation): room.MJ_Operation;

        /**
         * Encodes the specified MJ_Operation message. Does not implicitly {@link room.MJ_Operation.verify|verify} messages.
         * @param message MJ_Operation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IMJ_Operation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MJ_Operation message, length delimited. Does not implicitly {@link room.MJ_Operation.verify|verify} messages.
         * @param message MJ_Operation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IMJ_Operation, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MJ_Operation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MJ_Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.MJ_Operation;

        /**
         * Decodes a MJ_Operation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MJ_Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.MJ_Operation;

        /**
         * Verifies a MJ_Operation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MJ_TileSet. */
    interface IMJ_TileSet {

        /** MJ_TileSet Type */
        Type: number;

        /** MJ_TileSet Tiles */
        Tiles?: (number[]|null);

        /** MJ_TileSet ObtainTile */
        ObtainTile?: (number|null);

        /** MJ_TileSet ObtainSeat */
        ObtainSeat?: (number|null);
    }

    /** Represents a MJ_TileSet. */
    class MJ_TileSet implements IMJ_TileSet {

        /**
         * Constructs a new MJ_TileSet.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IMJ_TileSet);

        /** MJ_TileSet Type. */
        public Type: number;

        /** MJ_TileSet Tiles. */
        public Tiles: number[];

        /** MJ_TileSet ObtainTile. */
        public ObtainTile: number;

        /** MJ_TileSet ObtainSeat. */
        public ObtainSeat: number;

        /**
         * Creates a new MJ_TileSet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MJ_TileSet instance
         */
        public static create(properties?: room.IMJ_TileSet): room.MJ_TileSet;

        /**
         * Encodes the specified MJ_TileSet message. Does not implicitly {@link room.MJ_TileSet.verify|verify} messages.
         * @param message MJ_TileSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IMJ_TileSet, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MJ_TileSet message, length delimited. Does not implicitly {@link room.MJ_TileSet.verify|verify} messages.
         * @param message MJ_TileSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IMJ_TileSet, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MJ_TileSet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MJ_TileSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.MJ_TileSet;

        /**
         * Decodes a MJ_TileSet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MJ_TileSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.MJ_TileSet;

        /**
         * Verifies a MJ_TileSet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MJ_FanInfo. */
    interface IMJ_FanInfo {

        /** MJ_FanInfo type */
        type?: (number|null);

        /** MJ_FanInfo value */
        value?: (number|null);
    }

    /** Represents a MJ_FanInfo. */
    class MJ_FanInfo implements IMJ_FanInfo {

        /**
         * Constructs a new MJ_FanInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IMJ_FanInfo);

        /** MJ_FanInfo type. */
        public type: number;

        /** MJ_FanInfo value. */
        public value: number;

        /**
         * Creates a new MJ_FanInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MJ_FanInfo instance
         */
        public static create(properties?: room.IMJ_FanInfo): room.MJ_FanInfo;

        /**
         * Encodes the specified MJ_FanInfo message. Does not implicitly {@link room.MJ_FanInfo.verify|verify} messages.
         * @param message MJ_FanInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IMJ_FanInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MJ_FanInfo message, length delimited. Does not implicitly {@link room.MJ_FanInfo.verify|verify} messages.
         * @param message MJ_FanInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IMJ_FanInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MJ_FanInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MJ_FanInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.MJ_FanInfo;

        /**
         * Decodes a MJ_FanInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MJ_FanInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.MJ_FanInfo;

        /**
         * Verifies a MJ_FanInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MJ_SettlementInfo. */
    interface IMJ_SettlementInfo {

        /** MJ_SettlementInfo type */
        type?: (number|null);

        /** MJ_SettlementInfo coinList */
        coinList?: (number[]|null);
    }

    /** Represents a MJ_SettlementInfo. */
    class MJ_SettlementInfo implements IMJ_SettlementInfo {

        /**
         * Constructs a new MJ_SettlementInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IMJ_SettlementInfo);

        /** MJ_SettlementInfo type. */
        public type: number;

        /** MJ_SettlementInfo coinList. */
        public coinList: number[];

        /**
         * Creates a new MJ_SettlementInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MJ_SettlementInfo instance
         */
        public static create(properties?: room.IMJ_SettlementInfo): room.MJ_SettlementInfo;

        /**
         * Encodes the specified MJ_SettlementInfo message. Does not implicitly {@link room.MJ_SettlementInfo.verify|verify} messages.
         * @param message MJ_SettlementInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IMJ_SettlementInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MJ_SettlementInfo message, length delimited. Does not implicitly {@link room.MJ_SettlementInfo.verify|verify} messages.
         * @param message MJ_SettlementInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IMJ_SettlementInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MJ_SettlementInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MJ_SettlementInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.MJ_SettlementInfo;

        /**
         * Decodes a MJ_SettlementInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MJ_SettlementInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.MJ_SettlementInfo;

        /**
         * Verifies a MJ_SettlementInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** MJ_PLAYERROLE enum. */
    enum MJ_PLAYERROLE {
        MJ_PR_BANKER = 0,
        MJ_PR_PLAYER = 1
    }

    /** MJ_GAMESTATUS enum. */
    enum MJ_GAMESTATUS {
        MJ_GS_DF = 0,
        MJ_GS_DP = 1,
        MJ_GS_KJ = 2,
        MJ_GS_FP = 3,
        MJ_GS_XP = 4,
        MJ_GS_JS = 5
    }

    /** USERSTATUS enum. */
    enum USERSTATUS {
        US_DEFAULT = 0,
        US_SITUP = 1,
        US_SITDOWN = 2,
        US_GAMEING = 3
    }

    /** Properties of a RoomItem. */
    interface IRoomItem {

        /** RoomItem roomID */
        roomID?: (number|null);

        /** RoomItem name */
        name?: (string|null);

        /** RoomItem entry_min */
        entry_min?: (number|null);

        /** RoomItem entry_max */
        entry_max?: (number|null);

        /** RoomItem basic_bet */
        basic_bet?: (number|null);

        /** RoomItem kickout_min */
        kickout_min?: (number|null);

        /** RoomItem kickout_max */
        kickout_max?: (number|null);

        /** RoomItem service_fee */
        service_fee?: (number|null);

        /** RoomItem max_fan */
        max_fan?: (number|null);

        /** RoomItem state */
        state?: (number|null);
    }

    /** Represents a RoomItem. */
    class RoomItem implements IRoomItem {

        /**
         * Constructs a new RoomItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IRoomItem);

        /** RoomItem roomID. */
        public roomID: number;

        /** RoomItem name. */
        public name: string;

        /** RoomItem entry_min. */
        public entry_min: number;

        /** RoomItem entry_max. */
        public entry_max: number;

        /** RoomItem basic_bet. */
        public basic_bet: number;

        /** RoomItem kickout_min. */
        public kickout_min: number;

        /** RoomItem kickout_max. */
        public kickout_max: number;

        /** RoomItem service_fee. */
        public service_fee: number;

        /** RoomItem max_fan. */
        public max_fan: number;

        /** RoomItem state. */
        public state: number;

        /**
         * Creates a new RoomItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomItem instance
         */
        public static create(properties?: room.IRoomItem): room.RoomItem;

        /**
         * Encodes the specified RoomItem message. Does not implicitly {@link room.RoomItem.verify|verify} messages.
         * @param message RoomItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IRoomItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RoomItem message, length delimited. Does not implicitly {@link room.RoomItem.verify|verify} messages.
         * @param message RoomItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IRoomItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoomItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.RoomItem;

        /**
         * Decodes a RoomItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.RoomItem;

        /**
         * Verifies a RoomItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGUserInfo. */
    interface IVGUserInfo {

        /** VGUserInfo userName */
        userName?: (string|null);

        /** VGUserInfo showName */
        showName?: (string|null);

        /** VGUserInfo userPos */
        userPos?: (room.IVGUserPos|null);

        /** VGUserInfo status */
        status?: (room.USERSTATUS|null);

        /** VGUserInfo gameCoin */
        gameCoin?: (number|Long|null);

        /** VGUserInfo isManaged */
        isManaged?: (number|null);

        /** VGUserInfo role */
        role?: (room.MJ_PLAYERROLE|null);

        /** VGUserInfo dapiao */
        dapiao?: (number|null);

        /** VGUserInfo tileSets */
        tileSets?: (room.IMJ_TileSet[]|null);

        /** VGUserInfo isTing */
        isTing?: (number|null);

        /** VGUserInfo tingTileInfo */
        tingTileInfo?: (room.IMJ_TingTileInfo[]|null);

        /** VGUserInfo fan */
        fan?: (room.IMJ_FanInfo[]|null);

        /** VGUserInfo resultCoin */
        resultCoin?: (number|Long|null);

        /** VGUserInfo feeCoin */
        feeCoin?: (number|null);
    }

    /** Represents a VGUserInfo. */
    class VGUserInfo implements IVGUserInfo {

        /**
         * Constructs a new VGUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGUserInfo);

        /** VGUserInfo userName. */
        public userName: string;

        /** VGUserInfo showName. */
        public showName: string;

        /** VGUserInfo userPos. */
        public userPos?: (room.IVGUserPos|null);

        /** VGUserInfo status. */
        public status: room.USERSTATUS;

        /** VGUserInfo gameCoin. */
        public gameCoin: (number|Long);

        /** VGUserInfo isManaged. */
        public isManaged: number;

        /** VGUserInfo role. */
        public role: room.MJ_PLAYERROLE;

        /** VGUserInfo dapiao. */
        public dapiao: number;

        /** VGUserInfo tileSets. */
        public tileSets: room.IMJ_TileSet[];

        /** VGUserInfo isTing. */
        public isTing: number;

        /** VGUserInfo tingTileInfo. */
        public tingTileInfo: room.IMJ_TingTileInfo[];

        /** VGUserInfo fan. */
        public fan: room.IMJ_FanInfo[];

        /** VGUserInfo resultCoin. */
        public resultCoin: (number|Long);

        /** VGUserInfo feeCoin. */
        public feeCoin: number;

        /**
         * Creates a new VGUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGUserInfo instance
         */
        public static create(properties?: room.IVGUserInfo): room.VGUserInfo;

        /**
         * Encodes the specified VGUserInfo message. Does not implicitly {@link room.VGUserInfo.verify|verify} messages.
         * @param message VGUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGUserInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGUserInfo message, length delimited. Does not implicitly {@link room.VGUserInfo.verify|verify} messages.
         * @param message VGUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGUserInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGUserInfo;

        /**
         * Decodes a VGUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGUserInfo;

        /**
         * Verifies a VGUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGUserPos. */
    interface IVGUserPos {

        /** VGUserPos roomID */
        roomID?: (number|null);

        /** VGUserPos tableID */
        tableID?: (string|null);

        /** VGUserPos seatID */
        seatID?: (number|null);
    }

    /** Represents a VGUserPos. */
    class VGUserPos implements IVGUserPos {

        /**
         * Constructs a new VGUserPos.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGUserPos);

        /** VGUserPos roomID. */
        public roomID: number;

        /** VGUserPos tableID. */
        public tableID: string;

        /** VGUserPos seatID. */
        public seatID: number;

        /**
         * Creates a new VGUserPos instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGUserPos instance
         */
        public static create(properties?: room.IVGUserPos): room.VGUserPos;

        /**
         * Encodes the specified VGUserPos message. Does not implicitly {@link room.VGUserPos.verify|verify} messages.
         * @param message VGUserPos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGUserPos, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGUserPos message, length delimited. Does not implicitly {@link room.VGUserPos.verify|verify} messages.
         * @param message VGUserPos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGUserPos, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGUserPos message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGUserPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGUserPos;

        /**
         * Decodes a VGUserPos message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGUserPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGUserPos;

        /**
         * Verifies a VGUserPos message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGGameStatusNtc. */
    interface IVGGameStatusNtc {

        /** VGGameStatusNtc status */
        status?: (room.MJ_GAMESTATUS|null);

        /** VGGameStatusNtc second */
        second?: (number|null);

        /** VGGameStatusNtc roomID */
        roomID?: (number|null);

        /** VGGameStatusNtc tableID */
        tableID?: (string|null);
    }

    /** Represents a VGGameStatusNtc. */
    class VGGameStatusNtc implements IVGGameStatusNtc {

        /**
         * Constructs a new VGGameStatusNtc.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGGameStatusNtc);

        /** VGGameStatusNtc status. */
        public status: room.MJ_GAMESTATUS;

        /** VGGameStatusNtc second. */
        public second: number;

        /** VGGameStatusNtc roomID. */
        public roomID: number;

        /** VGGameStatusNtc tableID. */
        public tableID: string;

        /**
         * Creates a new VGGameStatusNtc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGGameStatusNtc instance
         */
        public static create(properties?: room.IVGGameStatusNtc): room.VGGameStatusNtc;

        /**
         * Encodes the specified VGGameStatusNtc message. Does not implicitly {@link room.VGGameStatusNtc.verify|verify} messages.
         * @param message VGGameStatusNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGGameStatusNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGGameStatusNtc message, length delimited. Does not implicitly {@link room.VGGameStatusNtc.verify|verify} messages.
         * @param message VGGameStatusNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGGameStatusNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGGameStatusNtc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGGameStatusNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGGameStatusNtc;

        /**
         * Decodes a VGGameStatusNtc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGGameStatusNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGGameStatusNtc;

        /**
         * Verifies a VGGameStatusNtc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGSyncGameDataNtc. */
    interface IVGSyncGameDataNtc {

        /** VGSyncGameDataNtc roomID */
        roomID?: (number|null);

        /** VGSyncGameDataNtc tableID */
        tableID?: (string|null);

        /** VGSyncGameDataNtc status */
        status?: (room.MJ_GAMESTATUS|null);

        /** VGSyncGameDataNtc second */
        second?: (number|null);

        /** VGSyncGameDataNtc userInfos */
        userInfos?: (room.IVGUserInfo[]|null);

        /** VGSyncGameDataNtc roundGuid */
        roundGuid?: (string|null);

        /** VGSyncGameDataNtc remainCount */
        remainCount?: (number|null);

        /** VGSyncGameDataNtc settlementInfos */
        settlementInfos?: (room.IMJ_SettlementInfo[]|null);
    }

    /** Represents a VGSyncGameDataNtc. */
    class VGSyncGameDataNtc implements IVGSyncGameDataNtc {

        /**
         * Constructs a new VGSyncGameDataNtc.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGSyncGameDataNtc);

        /** VGSyncGameDataNtc roomID. */
        public roomID: number;

        /** VGSyncGameDataNtc tableID. */
        public tableID: string;

        /** VGSyncGameDataNtc status. */
        public status: room.MJ_GAMESTATUS;

        /** VGSyncGameDataNtc second. */
        public second: number;

        /** VGSyncGameDataNtc userInfos. */
        public userInfos: room.IVGUserInfo[];

        /** VGSyncGameDataNtc roundGuid. */
        public roundGuid: string;

        /** VGSyncGameDataNtc remainCount. */
        public remainCount: number;

        /** VGSyncGameDataNtc settlementInfos. */
        public settlementInfos: room.IMJ_SettlementInfo[];

        /**
         * Creates a new VGSyncGameDataNtc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGSyncGameDataNtc instance
         */
        public static create(properties?: room.IVGSyncGameDataNtc): room.VGSyncGameDataNtc;

        /**
         * Encodes the specified VGSyncGameDataNtc message. Does not implicitly {@link room.VGSyncGameDataNtc.verify|verify} messages.
         * @param message VGSyncGameDataNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGSyncGameDataNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGSyncGameDataNtc message, length delimited. Does not implicitly {@link room.VGSyncGameDataNtc.verify|verify} messages.
         * @param message VGSyncGameDataNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGSyncGameDataNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGSyncGameDataNtc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGSyncGameDataNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGSyncGameDataNtc;

        /**
         * Decodes a VGSyncGameDataNtc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGSyncGameDataNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGSyncGameDataNtc;

        /**
         * Verifies a VGSyncGameDataNtc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGGameStartNtc. */
    interface IVGGameStartNtc {

        /** VGGameStartNtc roundGuid */
        roundGuid?: (string|null);

        /** VGGameStartNtc userInfos */
        userInfos?: (room.IVGUserInfo[]|null);

        /** VGGameStartNtc dicePoint */
        dicePoint?: (number[]|null);
    }

    /** Represents a VGGameStartNtc. */
    class VGGameStartNtc implements IVGGameStartNtc {

        /**
         * Constructs a new VGGameStartNtc.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGGameStartNtc);

        /** VGGameStartNtc roundGuid. */
        public roundGuid: string;

        /** VGGameStartNtc userInfos. */
        public userInfos: room.IVGUserInfo[];

        /** VGGameStartNtc dicePoint. */
        public dicePoint: number[];

        /**
         * Creates a new VGGameStartNtc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGGameStartNtc instance
         */
        public static create(properties?: room.IVGGameStartNtc): room.VGGameStartNtc;

        /**
         * Encodes the specified VGGameStartNtc message. Does not implicitly {@link room.VGGameStartNtc.verify|verify} messages.
         * @param message VGGameStartNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGGameStartNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGGameStartNtc message, length delimited. Does not implicitly {@link room.VGGameStartNtc.verify|verify} messages.
         * @param message VGGameStartNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGGameStartNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGGameStartNtc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGGameStartNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGGameStartNtc;

        /**
         * Decodes a VGGameStartNtc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGGameStartNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGGameStartNtc;

        /**
         * Verifies a VGGameStartNtc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGGameSendCardNtc. */
    interface IVGGameSendCardNtc {

        /** VGGameSendCardNtc roundGuid */
        roundGuid?: (string|null);

        /** VGGameSendCardNtc userInfos */
        userInfos?: (room.IVGUserInfo[]|null);

        /** VGGameSendCardNtc remainCount */
        remainCount?: (number|null);
    }

    /** Represents a VGGameSendCardNtc. */
    class VGGameSendCardNtc implements IVGGameSendCardNtc {

        /**
         * Constructs a new VGGameSendCardNtc.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGGameSendCardNtc);

        /** VGGameSendCardNtc roundGuid. */
        public roundGuid: string;

        /** VGGameSendCardNtc userInfos. */
        public userInfos: room.IVGUserInfo[];

        /** VGGameSendCardNtc remainCount. */
        public remainCount: number;

        /**
         * Creates a new VGGameSendCardNtc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGGameSendCardNtc instance
         */
        public static create(properties?: room.IVGGameSendCardNtc): room.VGGameSendCardNtc;

        /**
         * Encodes the specified VGGameSendCardNtc message. Does not implicitly {@link room.VGGameSendCardNtc.verify|verify} messages.
         * @param message VGGameSendCardNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGGameSendCardNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGGameSendCardNtc message, length delimited. Does not implicitly {@link room.VGGameSendCardNtc.verify|verify} messages.
         * @param message VGGameSendCardNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGGameSendCardNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGGameSendCardNtc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGGameSendCardNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGGameSendCardNtc;

        /**
         * Decodes a VGGameSendCardNtc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGGameSendCardNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGGameSendCardNtc;

        /**
         * Verifies a VGGameSendCardNtc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGGameOperationNtc. */
    interface IVGGameOperationNtc {

        /** VGGameOperationNtc roundGuid */
        roundGuid?: (string|null);

        /** VGGameOperationNtc seatid */
        seatid?: (number|null);

        /** VGGameOperationNtc operation */
        operation?: (room.IMJ_Operation[]|null);

        /** VGGameOperationNtc second */
        second?: (number|null);
    }

    /** Represents a VGGameOperationNtc. */
    class VGGameOperationNtc implements IVGGameOperationNtc {

        /**
         * Constructs a new VGGameOperationNtc.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGGameOperationNtc);

        /** VGGameOperationNtc roundGuid. */
        public roundGuid: string;

        /** VGGameOperationNtc seatid. */
        public seatid: number;

        /** VGGameOperationNtc operation. */
        public operation: room.IMJ_Operation[];

        /** VGGameOperationNtc second. */
        public second: number;

        /**
         * Creates a new VGGameOperationNtc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGGameOperationNtc instance
         */
        public static create(properties?: room.IVGGameOperationNtc): room.VGGameOperationNtc;

        /**
         * Encodes the specified VGGameOperationNtc message. Does not implicitly {@link room.VGGameOperationNtc.verify|verify} messages.
         * @param message VGGameOperationNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGGameOperationNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGGameOperationNtc message, length delimited. Does not implicitly {@link room.VGGameOperationNtc.verify|verify} messages.
         * @param message VGGameOperationNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGGameOperationNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGGameOperationNtc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGGameOperationNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGGameOperationNtc;

        /**
         * Decodes a VGGameOperationNtc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGGameOperationNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGGameOperationNtc;

        /**
         * Verifies a VGGameOperationNtc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGGameResultNtc. */
    interface IVGGameResultNtc {

        /** VGGameResultNtc roomID */
        roomID?: (number|null);

        /** VGGameResultNtc tableID */
        tableID?: (string|null);

        /** VGGameResultNtc roundGuid */
        roundGuid?: (string|null);

        /** VGGameResultNtc userInfos */
        userInfos?: (room.IVGUserInfo[]|null);

        /** VGGameResultNtc settlementInfos */
        settlementInfos?: (room.IMJ_SettlementInfo[]|null);
    }

    /** Represents a VGGameResultNtc. */
    class VGGameResultNtc implements IVGGameResultNtc {

        /**
         * Constructs a new VGGameResultNtc.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGGameResultNtc);

        /** VGGameResultNtc roomID. */
        public roomID: number;

        /** VGGameResultNtc tableID. */
        public tableID: string;

        /** VGGameResultNtc roundGuid. */
        public roundGuid: string;

        /** VGGameResultNtc userInfos. */
        public userInfos: room.IVGUserInfo[];

        /** VGGameResultNtc settlementInfos. */
        public settlementInfos: room.IMJ_SettlementInfo[];

        /**
         * Creates a new VGGameResultNtc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGGameResultNtc instance
         */
        public static create(properties?: room.IVGGameResultNtc): room.VGGameResultNtc;

        /**
         * Encodes the specified VGGameResultNtc message. Does not implicitly {@link room.VGGameResultNtc.verify|verify} messages.
         * @param message VGGameResultNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGGameResultNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGGameResultNtc message, length delimited. Does not implicitly {@link room.VGGameResultNtc.verify|verify} messages.
         * @param message VGGameResultNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGGameResultNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGGameResultNtc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGGameResultNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGGameResultNtc;

        /**
         * Decodes a VGGameResultNtc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGGameResultNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGGameResultNtc;

        /**
         * Verifies a VGGameResultNtc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGUserDapiaoReq. */
    interface IVGUserDapiaoReq {

        /** VGUserDapiaoReq dapiao */
        dapiao?: (number|null);
    }

    /** Represents a VGUserDapiaoReq. */
    class VGUserDapiaoReq implements IVGUserDapiaoReq {

        /**
         * Constructs a new VGUserDapiaoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGUserDapiaoReq);

        /** VGUserDapiaoReq dapiao. */
        public dapiao: number;

        /**
         * Creates a new VGUserDapiaoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGUserDapiaoReq instance
         */
        public static create(properties?: room.IVGUserDapiaoReq): room.VGUserDapiaoReq;

        /**
         * Encodes the specified VGUserDapiaoReq message. Does not implicitly {@link room.VGUserDapiaoReq.verify|verify} messages.
         * @param message VGUserDapiaoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGUserDapiaoReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGUserDapiaoReq message, length delimited. Does not implicitly {@link room.VGUserDapiaoReq.verify|verify} messages.
         * @param message VGUserDapiaoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGUserDapiaoReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGUserDapiaoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGUserDapiaoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGUserDapiaoReq;

        /**
         * Decodes a VGUserDapiaoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGUserDapiaoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGUserDapiaoReq;

        /**
         * Verifies a VGUserDapiaoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGUserDapiaoAck. */
    interface IVGUserDapiaoAck {

        /** VGUserDapiaoAck result */
        result?: (number|null);

        /** VGUserDapiaoAck userInfo */
        userInfo?: (room.IVGUserInfo|null);
    }

    /** Represents a VGUserDapiaoAck. */
    class VGUserDapiaoAck implements IVGUserDapiaoAck {

        /**
         * Constructs a new VGUserDapiaoAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGUserDapiaoAck);

        /** VGUserDapiaoAck result. */
        public result: number;

        /** VGUserDapiaoAck userInfo. */
        public userInfo?: (room.IVGUserInfo|null);

        /**
         * Creates a new VGUserDapiaoAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGUserDapiaoAck instance
         */
        public static create(properties?: room.IVGUserDapiaoAck): room.VGUserDapiaoAck;

        /**
         * Encodes the specified VGUserDapiaoAck message. Does not implicitly {@link room.VGUserDapiaoAck.verify|verify} messages.
         * @param message VGUserDapiaoAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGUserDapiaoAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGUserDapiaoAck message, length delimited. Does not implicitly {@link room.VGUserDapiaoAck.verify|verify} messages.
         * @param message VGUserDapiaoAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGUserDapiaoAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGUserDapiaoAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGUserDapiaoAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGUserDapiaoAck;

        /**
         * Decodes a VGUserDapiaoAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGUserDapiaoAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGUserDapiaoAck;

        /**
         * Verifies a VGUserDapiaoAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGUserOperationReq. */
    interface IVGUserOperationReq {

        /** VGUserOperationReq operation */
        operation?: (room.IMJ_Operation|null);
    }

    /** Represents a VGUserOperationReq. */
    class VGUserOperationReq implements IVGUserOperationReq {

        /**
         * Constructs a new VGUserOperationReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGUserOperationReq);

        /** VGUserOperationReq operation. */
        public operation?: (room.IMJ_Operation|null);

        /**
         * Creates a new VGUserOperationReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGUserOperationReq instance
         */
        public static create(properties?: room.IVGUserOperationReq): room.VGUserOperationReq;

        /**
         * Encodes the specified VGUserOperationReq message. Does not implicitly {@link room.VGUserOperationReq.verify|verify} messages.
         * @param message VGUserOperationReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGUserOperationReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGUserOperationReq message, length delimited. Does not implicitly {@link room.VGUserOperationReq.verify|verify} messages.
         * @param message VGUserOperationReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGUserOperationReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGUserOperationReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGUserOperationReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGUserOperationReq;

        /**
         * Decodes a VGUserOperationReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGUserOperationReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGUserOperationReq;

        /**
         * Verifies a VGUserOperationReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGUserOperationAck. */
    interface IVGUserOperationAck {

        /** VGUserOperationAck result */
        result?: (number|null);

        /** VGUserOperationAck seatID */
        seatID?: (number|null);

        /** VGUserOperationAck operation */
        operation?: (room.IMJ_Operation|null);

        /** VGUserOperationAck remainCount */
        remainCount?: (number|null);
    }

    /** Represents a VGUserOperationAck. */
    class VGUserOperationAck implements IVGUserOperationAck {

        /**
         * Constructs a new VGUserOperationAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGUserOperationAck);

        /** VGUserOperationAck result. */
        public result: number;

        /** VGUserOperationAck seatID. */
        public seatID: number;

        /** VGUserOperationAck operation. */
        public operation?: (room.IMJ_Operation|null);

        /** VGUserOperationAck remainCount. */
        public remainCount: number;

        /**
         * Creates a new VGUserOperationAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGUserOperationAck instance
         */
        public static create(properties?: room.IVGUserOperationAck): room.VGUserOperationAck;

        /**
         * Encodes the specified VGUserOperationAck message. Does not implicitly {@link room.VGUserOperationAck.verify|verify} messages.
         * @param message VGUserOperationAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGUserOperationAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGUserOperationAck message, length delimited. Does not implicitly {@link room.VGUserOperationAck.verify|verify} messages.
         * @param message VGUserOperationAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGUserOperationAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGUserOperationAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGUserOperationAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGUserOperationAck;

        /**
         * Decodes a VGUserOperationAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGUserOperationAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGUserOperationAck;

        /**
         * Verifies a VGUserOperationAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGUserManagedReq. */
    interface IVGUserManagedReq {

        /** VGUserManagedReq isManaged */
        isManaged?: (number|null);
    }

    /** Represents a VGUserManagedReq. */
    class VGUserManagedReq implements IVGUserManagedReq {

        /**
         * Constructs a new VGUserManagedReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGUserManagedReq);

        /** VGUserManagedReq isManaged. */
        public isManaged: number;

        /**
         * Creates a new VGUserManagedReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGUserManagedReq instance
         */
        public static create(properties?: room.IVGUserManagedReq): room.VGUserManagedReq;

        /**
         * Encodes the specified VGUserManagedReq message. Does not implicitly {@link room.VGUserManagedReq.verify|verify} messages.
         * @param message VGUserManagedReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGUserManagedReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGUserManagedReq message, length delimited. Does not implicitly {@link room.VGUserManagedReq.verify|verify} messages.
         * @param message VGUserManagedReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGUserManagedReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGUserManagedReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGUserManagedReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGUserManagedReq;

        /**
         * Decodes a VGUserManagedReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGUserManagedReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGUserManagedReq;

        /**
         * Verifies a VGUserManagedReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGUserManagedAck. */
    interface IVGUserManagedAck {

        /** VGUserManagedAck result */
        result?: (number|null);

        /** VGUserManagedAck isManaged */
        isManaged?: (number|null);
    }

    /** Represents a VGUserManagedAck. */
    class VGUserManagedAck implements IVGUserManagedAck {

        /**
         * Constructs a new VGUserManagedAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGUserManagedAck);

        /** VGUserManagedAck result. */
        public result: number;

        /** VGUserManagedAck isManaged. */
        public isManaged: number;

        /**
         * Creates a new VGUserManagedAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGUserManagedAck instance
         */
        public static create(properties?: room.IVGUserManagedAck): room.VGUserManagedAck;

        /**
         * Encodes the specified VGUserManagedAck message. Does not implicitly {@link room.VGUserManagedAck.verify|verify} messages.
         * @param message VGUserManagedAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGUserManagedAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGUserManagedAck message, length delimited. Does not implicitly {@link room.VGUserManagedAck.verify|verify} messages.
         * @param message VGUserManagedAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGUserManagedAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGUserManagedAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGUserManagedAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGUserManagedAck;

        /**
         * Decodes a VGUserManagedAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGUserManagedAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGUserManagedAck;

        /**
         * Verifies a VGUserManagedAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a VGUserChatMsg. */
    interface IVGUserChatMsg {

        /** VGUserChatMsg roomID */
        roomID?: (number|null);

        /** VGUserChatMsg tableID */
        tableID?: (string|null);

        /** VGUserChatMsg seatID */
        seatID?: (number|null);

        /** VGUserChatMsg userName */
        userName?: (string|null);

        /** VGUserChatMsg msg */
        msg?: (string|null);
    }

    /** Represents a VGUserChatMsg. */
    class VGUserChatMsg implements IVGUserChatMsg {

        /**
         * Constructs a new VGUserChatMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IVGUserChatMsg);

        /** VGUserChatMsg roomID. */
        public roomID: number;

        /** VGUserChatMsg tableID. */
        public tableID: string;

        /** VGUserChatMsg seatID. */
        public seatID: number;

        /** VGUserChatMsg userName. */
        public userName: string;

        /** VGUserChatMsg msg. */
        public msg: string;

        /**
         * Creates a new VGUserChatMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VGUserChatMsg instance
         */
        public static create(properties?: room.IVGUserChatMsg): room.VGUserChatMsg;

        /**
         * Encodes the specified VGUserChatMsg message. Does not implicitly {@link room.VGUserChatMsg.verify|verify} messages.
         * @param message VGUserChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IVGUserChatMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified VGUserChatMsg message, length delimited. Does not implicitly {@link room.VGUserChatMsg.verify|verify} messages.
         * @param message VGUserChatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IVGUserChatMsg, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a VGUserChatMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VGUserChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.VGUserChatMsg;

        /**
         * Decodes a VGUserChatMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VGUserChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.VGUserChatMsg;

        /**
         * Verifies a VGUserChatMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MagicTilesReq. */
    interface IMagicTilesReq {

        /** MagicTilesReq tile */
        tile?: (number|null);
    }

    /** Represents a MagicTilesReq. */
    class MagicTilesReq implements IMagicTilesReq {

        /**
         * Constructs a new MagicTilesReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IMagicTilesReq);

        /** MagicTilesReq tile. */
        public tile: number;

        /**
         * Creates a new MagicTilesReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MagicTilesReq instance
         */
        public static create(properties?: room.IMagicTilesReq): room.MagicTilesReq;

        /**
         * Encodes the specified MagicTilesReq message. Does not implicitly {@link room.MagicTilesReq.verify|verify} messages.
         * @param message MagicTilesReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IMagicTilesReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MagicTilesReq message, length delimited. Does not implicitly {@link room.MagicTilesReq.verify|verify} messages.
         * @param message MagicTilesReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IMagicTilesReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MagicTilesReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MagicTilesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.MagicTilesReq;

        /**
         * Decodes a MagicTilesReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MagicTilesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.MagicTilesReq;

        /**
         * Verifies a MagicTilesReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MagicTilesAck. */
    interface IMagicTilesAck {

        /** MagicTilesAck tiles */
        tiles?: (number[]|null);
    }

    /** Represents a MagicTilesAck. */
    class MagicTilesAck implements IMagicTilesAck {

        /**
         * Constructs a new MagicTilesAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IMagicTilesAck);

        /** MagicTilesAck tiles. */
        public tiles: number[];

        /**
         * Creates a new MagicTilesAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MagicTilesAck instance
         */
        public static create(properties?: room.IMagicTilesAck): room.MagicTilesAck;

        /**
         * Encodes the specified MagicTilesAck message. Does not implicitly {@link room.MagicTilesAck.verify|verify} messages.
         * @param message MagicTilesAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IMagicTilesAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MagicTilesAck message, length delimited. Does not implicitly {@link room.MagicTilesAck.verify|verify} messages.
         * @param message MagicTilesAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IMagicTilesAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MagicTilesAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MagicTilesAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room.MagicTilesAck;

        /**
         * Decodes a MagicTilesAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MagicTilesAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room.MagicTilesAck;

        /**
         * Verifies a MagicTilesAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace room2. */
declare namespace room2 {

    /** Properties of a HeartBeatReq. */
    interface IHeartBeatReq {

        /** HeartBeatReq time */
        time: (number|Long);
    }

    /** Represents a HeartBeatReq. */
    class HeartBeatReq implements IHeartBeatReq {

        /**
         * Constructs a new HeartBeatReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IHeartBeatReq);

        /** HeartBeatReq time. */
        public time: (number|Long);

        /**
         * Creates a new HeartBeatReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatReq instance
         */
        public static create(properties?: room2.IHeartBeatReq): room2.HeartBeatReq;

        /**
         * Encodes the specified HeartBeatReq message. Does not implicitly {@link room2.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IHeartBeatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeartBeatReq message, length delimited. Does not implicitly {@link room2.HeartBeatReq.verify|verify} messages.
         * @param message HeartBeatReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IHeartBeatReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.HeartBeatReq;

        /**
         * Decodes a HeartBeatReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.HeartBeatReq;

        /**
         * Verifies a HeartBeatReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HeartBeatAck. */
    interface IHeartBeatAck {

        /** HeartBeatAck time */
        time?: (number|Long|null);
    }

    /** Represents a HeartBeatAck. */
    class HeartBeatAck implements IHeartBeatAck {

        /**
         * Constructs a new HeartBeatAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IHeartBeatAck);

        /** HeartBeatAck time. */
        public time: (number|Long);

        /**
         * Creates a new HeartBeatAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatAck instance
         */
        public static create(properties?: room2.IHeartBeatAck): room2.HeartBeatAck;

        /**
         * Encodes the specified HeartBeatAck message. Does not implicitly {@link room2.HeartBeatAck.verify|verify} messages.
         * @param message HeartBeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IHeartBeatAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HeartBeatAck message, length delimited. Does not implicitly {@link room2.HeartBeatAck.verify|verify} messages.
         * @param message HeartBeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IHeartBeatAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HeartBeatAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.HeartBeatAck;

        /**
         * Decodes a HeartBeatAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.HeartBeatAck;

        /**
         * Verifies a HeartBeatAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGUserPos. */
    interface IOGUserPos {

        /** OGUserPos roomID */
        roomID?: (number|null);

        /** OGUserPos tableGuid */
        tableGuid?: (string|null);

        /** OGUserPos seatID */
        seatID?: (number|null);
    }

    /** Represents a OGUserPos. */
    class OGUserPos implements IOGUserPos {

        /**
         * Constructs a new OGUserPos.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGUserPos);

        /** OGUserPos roomID. */
        public roomID: number;

        /** OGUserPos tableGuid. */
        public tableGuid: string;

        /** OGUserPos seatID. */
        public seatID: number;

        /**
         * Creates a new OGUserPos instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGUserPos instance
         */
        public static create(properties?: room2.IOGUserPos): room2.OGUserPos;

        /**
         * Encodes the specified OGUserPos message. Does not implicitly {@link room2.OGUserPos.verify|verify} messages.
         * @param message OGUserPos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGUserPos, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGUserPos message, length delimited. Does not implicitly {@link room2.OGUserPos.verify|verify} messages.
         * @param message OGUserPos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGUserPos, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGUserPos message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGUserPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGUserPos;

        /**
         * Decodes a OGUserPos message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGUserPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGUserPos;

        /**
         * Verifies a OGUserPos message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a reqLogin. */
    interface IreqLogin {

        /** reqLogin ticket */
        ticket?: (string|null);
    }

    /** Represents a reqLogin. */
    class reqLogin implements IreqLogin {

        /**
         * Constructs a new reqLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IreqLogin);

        /** reqLogin ticket. */
        public ticket: string;

        /**
         * Creates a new reqLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns reqLogin instance
         */
        public static create(properties?: room2.IreqLogin): room2.reqLogin;

        /**
         * Encodes the specified reqLogin message. Does not implicitly {@link room2.reqLogin.verify|verify} messages.
         * @param message reqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IreqLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified reqLogin message, length delimited. Does not implicitly {@link room2.reqLogin.verify|verify} messages.
         * @param message reqLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IreqLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a reqLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns reqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.reqLogin;

        /**
         * Decodes a reqLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns reqLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.reqLogin;

        /**
         * Verifies a reqLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ackLogin. */
    interface IackLogin {

        /** ackLogin result */
        result: number;

        /** ackLogin userName */
        userName?: (string|null);

        /** ackLogin showName */
        showName?: (string|null);

        /** ackLogin gameCoin */
        gameCoin?: (number|Long|null);

        /** ackLogin userPos */
        userPos?: (room2.IOGUserPos|null);

        /** ackLogin webState */
        webState?: (number|null);
    }

    /** Represents an ackLogin. */
    class ackLogin implements IackLogin {

        /**
         * Constructs a new ackLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IackLogin);

        /** ackLogin result. */
        public result: number;

        /** ackLogin userName. */
        public userName: string;

        /** ackLogin showName. */
        public showName: string;

        /** ackLogin gameCoin. */
        public gameCoin: (number|Long);

        /** ackLogin userPos. */
        public userPos?: (room2.IOGUserPos|null);

        /** ackLogin webState. */
        public webState: number;

        /**
         * Creates a new ackLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ackLogin instance
         */
        public static create(properties?: room2.IackLogin): room2.ackLogin;

        /**
         * Encodes the specified ackLogin message. Does not implicitly {@link room2.ackLogin.verify|verify} messages.
         * @param message ackLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IackLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ackLogin message, length delimited. Does not implicitly {@link room2.ackLogin.verify|verify} messages.
         * @param message ackLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IackLogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ackLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ackLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.ackLogin;

        /**
         * Decodes an ackLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ackLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.ackLogin;

        /**
         * Verifies an ackLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RoomListReq. */
    interface IRoomListReq {

        /** RoomListReq userName */
        userName: string;
    }

    /** Represents a RoomListReq. */
    class RoomListReq implements IRoomListReq {

        /**
         * Constructs a new RoomListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IRoomListReq);

        /** RoomListReq userName. */
        public userName: string;

        /**
         * Creates a new RoomListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomListReq instance
         */
        public static create(properties?: room2.IRoomListReq): room2.RoomListReq;

        /**
         * Encodes the specified RoomListReq message. Does not implicitly {@link room2.RoomListReq.verify|verify} messages.
         * @param message RoomListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IRoomListReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RoomListReq message, length delimited. Does not implicitly {@link room2.RoomListReq.verify|verify} messages.
         * @param message RoomListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IRoomListReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoomListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.RoomListReq;

        /**
         * Decodes a RoomListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.RoomListReq;

        /**
         * Verifies a RoomListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RoomItem. */
    interface IRoomItem {

        /** RoomItem roomID */
        roomID?: (number|null);

        /** RoomItem name */
        name?: (string|null);

        /** RoomItem entry_min */
        entry_min?: (number|null);

        /** RoomItem entry_max */
        entry_max?: (number|null);

        /** RoomItem kickout_min */
        kickout_min?: (number|null);

        /** RoomItem kickout_max */
        kickout_max?: (number|null);

        /** RoomItem service_fee */
        service_fee?: (number|null);

        /** RoomItem base_score */
        base_score?: (number|null);
    }

    /** Represents a RoomItem. */
    class RoomItem implements IRoomItem {

        /**
         * Constructs a new RoomItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IRoomItem);

        /** RoomItem roomID. */
        public roomID: number;

        /** RoomItem name. */
        public name: string;

        /** RoomItem entry_min. */
        public entry_min: number;

        /** RoomItem entry_max. */
        public entry_max: number;

        /** RoomItem kickout_min. */
        public kickout_min: number;

        /** RoomItem kickout_max. */
        public kickout_max: number;

        /** RoomItem service_fee. */
        public service_fee: number;

        /** RoomItem base_score. */
        public base_score: number;

        /**
         * Creates a new RoomItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomItem instance
         */
        public static create(properties?: room2.IRoomItem): room2.RoomItem;

        /**
         * Encodes the specified RoomItem message. Does not implicitly {@link room2.RoomItem.verify|verify} messages.
         * @param message RoomItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IRoomItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RoomItem message, length delimited. Does not implicitly {@link room2.RoomItem.verify|verify} messages.
         * @param message RoomItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IRoomItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoomItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.RoomItem;

        /**
         * Decodes a RoomItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.RoomItem;

        /**
         * Verifies a RoomItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RoomListAck. */
    interface IRoomListAck {

        /** RoomListAck result */
        result: number;

        /** RoomListAck userName */
        userName: string;

        /** RoomListAck roomInfo */
        roomInfo?: (room2.IRoomItem[]|null);
    }

    /** Represents a RoomListAck. */
    class RoomListAck implements IRoomListAck {

        /**
         * Constructs a new RoomListAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IRoomListAck);

        /** RoomListAck result. */
        public result: number;

        /** RoomListAck userName. */
        public userName: string;

        /** RoomListAck roomInfo. */
        public roomInfo: room2.IRoomItem[];

        /**
         * Creates a new RoomListAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomListAck instance
         */
        public static create(properties?: room2.IRoomListAck): room2.RoomListAck;

        /**
         * Encodes the specified RoomListAck message. Does not implicitly {@link room2.RoomListAck.verify|verify} messages.
         * @param message RoomListAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IRoomListAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RoomListAck message, length delimited. Does not implicitly {@link room2.RoomListAck.verify|verify} messages.
         * @param message RoomListAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IRoomListAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoomListAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomListAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.RoomListAck;

        /**
         * Decodes a RoomListAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomListAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.RoomListAck;

        /**
         * Verifies a RoomListAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGUserInfo. */
    interface IOGUserInfo {

        /** OGUserInfo userName */
        userName?: (string|null);

        /** OGUserInfo showName */
        showName?: (string|null);

        /** OGUserInfo isRobot */
        isRobot?: (boolean|null);

        /** OGUserInfo gameCoin */
        gameCoin?: (number|Long|null);

        /** OGUserInfo status */
        status?: (number|null);

        /** OGUserInfo userPos */
        userPos?: (room2.IOGUserPos|null);
    }

    /** Represents a OGUserInfo. */
    class OGUserInfo implements IOGUserInfo {

        /**
         * Constructs a new OGUserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGUserInfo);

        /** OGUserInfo userName. */
        public userName: string;

        /** OGUserInfo showName. */
        public showName: string;

        /** OGUserInfo isRobot. */
        public isRobot: boolean;

        /** OGUserInfo gameCoin. */
        public gameCoin: (number|Long);

        /** OGUserInfo status. */
        public status: number;

        /** OGUserInfo userPos. */
        public userPos?: (room2.IOGUserPos|null);

        /**
         * Creates a new OGUserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGUserInfo instance
         */
        public static create(properties?: room2.IOGUserInfo): room2.OGUserInfo;

        /**
         * Encodes the specified OGUserInfo message. Does not implicitly {@link room2.OGUserInfo.verify|verify} messages.
         * @param message OGUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGUserInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGUserInfo message, length delimited. Does not implicitly {@link room2.OGUserInfo.verify|verify} messages.
         * @param message OGUserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGUserInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGUserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGUserInfo;

        /**
         * Decodes a OGUserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGUserInfo;

        /**
         * Verifies a OGUserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGEnterRoomReq. */
    interface IOGEnterRoomReq {

        /** OGEnterRoomReq sUserName */
        sUserName: string;

        /** OGEnterRoomReq RoomID */
        RoomID: number;

        /** OGEnterRoomReq tableGuid */
        tableGuid?: (string|null);
    }

    /** Represents a OGEnterRoomReq. */
    class OGEnterRoomReq implements IOGEnterRoomReq {

        /**
         * Constructs a new OGEnterRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGEnterRoomReq);

        /** OGEnterRoomReq sUserName. */
        public sUserName: string;

        /** OGEnterRoomReq RoomID. */
        public RoomID: number;

        /** OGEnterRoomReq tableGuid. */
        public tableGuid: string;

        /**
         * Creates a new OGEnterRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGEnterRoomReq instance
         */
        public static create(properties?: room2.IOGEnterRoomReq): room2.OGEnterRoomReq;

        /**
         * Encodes the specified OGEnterRoomReq message. Does not implicitly {@link room2.OGEnterRoomReq.verify|verify} messages.
         * @param message OGEnterRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGEnterRoomReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGEnterRoomReq message, length delimited. Does not implicitly {@link room2.OGEnterRoomReq.verify|verify} messages.
         * @param message OGEnterRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGEnterRoomReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGEnterRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGEnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGEnterRoomReq;

        /**
         * Decodes a OGEnterRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGEnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGEnterRoomReq;

        /**
         * Verifies a OGEnterRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGEnterRoomAck. */
    interface IOGEnterRoomAck {

        /** OGEnterRoomAck result */
        result: number;

        /** OGEnterRoomAck userName */
        userName?: (string|null);

        /** OGEnterRoomAck userPos */
        userPos?: (room2.IOGUserPos|null);

        /** OGEnterRoomAck gameCoin */
        gameCoin?: (number|Long|null);

        /** OGEnterRoomAck userInfo */
        userInfo?: (room2.IOGUserInfo[]|null);

        /** OGEnterRoomAck gametype */
        gametype?: (number|null);
    }

    /** Represents a OGEnterRoomAck. */
    class OGEnterRoomAck implements IOGEnterRoomAck {

        /**
         * Constructs a new OGEnterRoomAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGEnterRoomAck);

        /** OGEnterRoomAck result. */
        public result: number;

        /** OGEnterRoomAck userName. */
        public userName: string;

        /** OGEnterRoomAck userPos. */
        public userPos?: (room2.IOGUserPos|null);

        /** OGEnterRoomAck gameCoin. */
        public gameCoin: (number|Long);

        /** OGEnterRoomAck userInfo. */
        public userInfo: room2.IOGUserInfo[];

        /** OGEnterRoomAck gametype. */
        public gametype: number;

        /**
         * Creates a new OGEnterRoomAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGEnterRoomAck instance
         */
        public static create(properties?: room2.IOGEnterRoomAck): room2.OGEnterRoomAck;

        /**
         * Encodes the specified OGEnterRoomAck message. Does not implicitly {@link room2.OGEnterRoomAck.verify|verify} messages.
         * @param message OGEnterRoomAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGEnterRoomAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGEnterRoomAck message, length delimited. Does not implicitly {@link room2.OGEnterRoomAck.verify|verify} messages.
         * @param message OGEnterRoomAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGEnterRoomAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGEnterRoomAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGEnterRoomAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGEnterRoomAck;

        /**
         * Decodes a OGEnterRoomAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGEnterRoomAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGEnterRoomAck;

        /**
         * Verifies a OGEnterRoomAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGLeaveRoomReq. */
    interface IOGLeaveRoomReq {

        /** OGLeaveRoomReq userName */
        userName: string;

        /** OGLeaveRoomReq userPos */
        userPos: room2.IOGUserPos;

        /** OGLeaveRoomReq change */
        change: number;
    }

    /** Represents a OGLeaveRoomReq. */
    class OGLeaveRoomReq implements IOGLeaveRoomReq {

        /**
         * Constructs a new OGLeaveRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGLeaveRoomReq);

        /** OGLeaveRoomReq userName. */
        public userName: string;

        /** OGLeaveRoomReq userPos. */
        public userPos: room2.IOGUserPos;

        /** OGLeaveRoomReq change. */
        public change: number;

        /**
         * Creates a new OGLeaveRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGLeaveRoomReq instance
         */
        public static create(properties?: room2.IOGLeaveRoomReq): room2.OGLeaveRoomReq;

        /**
         * Encodes the specified OGLeaveRoomReq message. Does not implicitly {@link room2.OGLeaveRoomReq.verify|verify} messages.
         * @param message OGLeaveRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGLeaveRoomReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGLeaveRoomReq message, length delimited. Does not implicitly {@link room2.OGLeaveRoomReq.verify|verify} messages.
         * @param message OGLeaveRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGLeaveRoomReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGLeaveRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGLeaveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGLeaveRoomReq;

        /**
         * Decodes a OGLeaveRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGLeaveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGLeaveRoomReq;

        /**
         * Verifies a OGLeaveRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGLeaveRoomAck. */
    interface IOGLeaveRoomAck {

        /** OGLeaveRoomAck result */
        result?: (number|null);

        /** OGLeaveRoomAck userName */
        userName?: (string|null);

        /** OGLeaveRoomAck userPos */
        userPos?: (room2.IOGUserPos|null);

        /** OGLeaveRoomAck userStatus */
        userStatus?: (number|null);

        /** OGLeaveRoomAck gameCoin */
        gameCoin?: (number|Long|null);
    }

    /** Represents a OGLeaveRoomAck. */
    class OGLeaveRoomAck implements IOGLeaveRoomAck {

        /**
         * Constructs a new OGLeaveRoomAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGLeaveRoomAck);

        /** OGLeaveRoomAck result. */
        public result: number;

        /** OGLeaveRoomAck userName. */
        public userName: string;

        /** OGLeaveRoomAck userPos. */
        public userPos?: (room2.IOGUserPos|null);

        /** OGLeaveRoomAck userStatus. */
        public userStatus: number;

        /** OGLeaveRoomAck gameCoin. */
        public gameCoin: (number|Long);

        /**
         * Creates a new OGLeaveRoomAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGLeaveRoomAck instance
         */
        public static create(properties?: room2.IOGLeaveRoomAck): room2.OGLeaveRoomAck;

        /**
         * Encodes the specified OGLeaveRoomAck message. Does not implicitly {@link room2.OGLeaveRoomAck.verify|verify} messages.
         * @param message OGLeaveRoomAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGLeaveRoomAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGLeaveRoomAck message, length delimited. Does not implicitly {@link room2.OGLeaveRoomAck.verify|verify} messages.
         * @param message OGLeaveRoomAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGLeaveRoomAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGLeaveRoomAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGLeaveRoomAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGLeaveRoomAck;

        /**
         * Decodes a OGLeaveRoomAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGLeaveRoomAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGLeaveRoomAck;

        /**
         * Verifies a OGLeaveRoomAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGQickGameReq. */
    interface IOGQickGameReq {

        /** OGQickGameReq userName */
        userName: string;

        /** OGQickGameReq userPos */
        userPos: room2.IOGUserPos;
    }

    /** Represents a OGQickGameReq. */
    class OGQickGameReq implements IOGQickGameReq {

        /**
         * Constructs a new OGQickGameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGQickGameReq);

        /** OGQickGameReq userName. */
        public userName: string;

        /** OGQickGameReq userPos. */
        public userPos: room2.IOGUserPos;

        /**
         * Creates a new OGQickGameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGQickGameReq instance
         */
        public static create(properties?: room2.IOGQickGameReq): room2.OGQickGameReq;

        /**
         * Encodes the specified OGQickGameReq message. Does not implicitly {@link room2.OGQickGameReq.verify|verify} messages.
         * @param message OGQickGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGQickGameReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGQickGameReq message, length delimited. Does not implicitly {@link room2.OGQickGameReq.verify|verify} messages.
         * @param message OGQickGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGQickGameReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGQickGameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGQickGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGQickGameReq;

        /**
         * Decodes a OGQickGameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGQickGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGQickGameReq;

        /**
         * Verifies a OGQickGameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGQickGameAck. */
    interface IOGQickGameAck {

        /** OGQickGameAck result */
        result?: (number|null);

        /** OGQickGameAck userPos */
        userPos?: (room2.IOGUserPos|null);
    }

    /** Represents a OGQickGameAck. */
    class OGQickGameAck implements IOGQickGameAck {

        /**
         * Constructs a new OGQickGameAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGQickGameAck);

        /** OGQickGameAck result. */
        public result: number;

        /** OGQickGameAck userPos. */
        public userPos?: (room2.IOGUserPos|null);

        /**
         * Creates a new OGQickGameAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGQickGameAck instance
         */
        public static create(properties?: room2.IOGQickGameAck): room2.OGQickGameAck;

        /**
         * Encodes the specified OGQickGameAck message. Does not implicitly {@link room2.OGQickGameAck.verify|verify} messages.
         * @param message OGQickGameAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGQickGameAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGQickGameAck message, length delimited. Does not implicitly {@link room2.OGQickGameAck.verify|verify} messages.
         * @param message OGQickGameAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGQickGameAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGQickGameAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGQickGameAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGQickGameAck;

        /**
         * Decodes a OGQickGameAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGQickGameAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGQickGameAck;

        /**
         * Verifies a OGQickGameAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGSMPlayerInfo. */
    interface IOGSMPlayerInfo {

        /** OGSMPlayerInfo userName */
        userName: string;

        /** OGSMPlayerInfo showName */
        showName: string;

        /** OGSMPlayerInfo gameCoin */
        gameCoin?: (number|Long|null);

        /** OGSMPlayerInfo sex */
        sex?: (number|null);

        /** OGSMPlayerInfo imageUrl */
        imageUrl?: (string|null);

        /** OGSMPlayerInfo userPos */
        userPos?: (room2.IOGUserPos|null);
    }

    /** Represents a OGSMPlayerInfo. */
    class OGSMPlayerInfo implements IOGSMPlayerInfo {

        /**
         * Constructs a new OGSMPlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGSMPlayerInfo);

        /** OGSMPlayerInfo userName. */
        public userName: string;

        /** OGSMPlayerInfo showName. */
        public showName: string;

        /** OGSMPlayerInfo gameCoin. */
        public gameCoin: (number|Long);

        /** OGSMPlayerInfo sex. */
        public sex: number;

        /** OGSMPlayerInfo imageUrl. */
        public imageUrl: string;

        /** OGSMPlayerInfo userPos. */
        public userPos?: (room2.IOGUserPos|null);

        /**
         * Creates a new OGSMPlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGSMPlayerInfo instance
         */
        public static create(properties?: room2.IOGSMPlayerInfo): room2.OGSMPlayerInfo;

        /**
         * Encodes the specified OGSMPlayerInfo message. Does not implicitly {@link room2.OGSMPlayerInfo.verify|verify} messages.
         * @param message OGSMPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGSMPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGSMPlayerInfo message, length delimited. Does not implicitly {@link room2.OGSMPlayerInfo.verify|verify} messages.
         * @param message OGSMPlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGSMPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGSMPlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGSMPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGSMPlayerInfo;

        /**
         * Decodes a OGSMPlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGSMPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGSMPlayerInfo;

        /**
         * Verifies a OGSMPlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGStartGameNtc. */
    interface IOGStartGameNtc {

        /** OGStartGameNtc result */
        result?: (number|null);

        /** OGStartGameNtc connentUID */
        connentUID?: (number|null);

        /** OGStartGameNtc roomID */
        roomID?: (number|null);

        /** OGStartGameNtc tableGUID */
        tableGUID?: (string|null);

        /** OGStartGameNtc gameIP */
        gameIP?: (string|null);

        /** OGStartGameNtc gamePort */
        gamePort?: (number|null);

        /** OGStartGameNtc ticket */
        ticket?: (string|null);

        /** OGStartGameNtc playerList */
        playerList?: (room2.IOGSMPlayerInfo[]|null);
    }

    /** Represents a OGStartGameNtc. */
    class OGStartGameNtc implements IOGStartGameNtc {

        /**
         * Constructs a new OGStartGameNtc.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGStartGameNtc);

        /** OGStartGameNtc result. */
        public result: number;

        /** OGStartGameNtc connentUID. */
        public connentUID: number;

        /** OGStartGameNtc roomID. */
        public roomID: number;

        /** OGStartGameNtc tableGUID. */
        public tableGUID: string;

        /** OGStartGameNtc gameIP. */
        public gameIP: string;

        /** OGStartGameNtc gamePort. */
        public gamePort: number;

        /** OGStartGameNtc ticket. */
        public ticket: string;

        /** OGStartGameNtc playerList. */
        public playerList: room2.IOGSMPlayerInfo[];

        /**
         * Creates a new OGStartGameNtc instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGStartGameNtc instance
         */
        public static create(properties?: room2.IOGStartGameNtc): room2.OGStartGameNtc;

        /**
         * Encodes the specified OGStartGameNtc message. Does not implicitly {@link room2.OGStartGameNtc.verify|verify} messages.
         * @param message OGStartGameNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGStartGameNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGStartGameNtc message, length delimited. Does not implicitly {@link room2.OGStartGameNtc.verify|verify} messages.
         * @param message OGStartGameNtc message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGStartGameNtc, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGStartGameNtc message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGStartGameNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGStartGameNtc;

        /**
         * Decodes a OGStartGameNtc message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGStartGameNtc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGStartGameNtc;

        /**
         * Verifies a OGStartGameNtc message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGScanRoomReq. */
    interface IOGScanRoomReq {

        /** OGScanRoomReq userName */
        userName: string;
    }

    /** Represents a OGScanRoomReq. */
    class OGScanRoomReq implements IOGScanRoomReq {

        /**
         * Constructs a new OGScanRoomReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGScanRoomReq);

        /** OGScanRoomReq userName. */
        public userName: string;

        /**
         * Creates a new OGScanRoomReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGScanRoomReq instance
         */
        public static create(properties?: room2.IOGScanRoomReq): room2.OGScanRoomReq;

        /**
         * Encodes the specified OGScanRoomReq message. Does not implicitly {@link room2.OGScanRoomReq.verify|verify} messages.
         * @param message OGScanRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGScanRoomReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGScanRoomReq message, length delimited. Does not implicitly {@link room2.OGScanRoomReq.verify|verify} messages.
         * @param message OGScanRoomReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGScanRoomReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGScanRoomReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGScanRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGScanRoomReq;

        /**
         * Decodes a OGScanRoomReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGScanRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGScanRoomReq;

        /**
         * Verifies a OGScanRoomReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGSMRoomInfo. */
    interface IOGSMRoomInfo {

        /** OGSMRoomInfo roomID */
        roomID: number;

        /** OGSMRoomInfo robotNum */
        robotNum?: (number|Long|null);
    }

    /** Represents a OGSMRoomInfo. */
    class OGSMRoomInfo implements IOGSMRoomInfo {

        /**
         * Constructs a new OGSMRoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGSMRoomInfo);

        /** OGSMRoomInfo roomID. */
        public roomID: number;

        /** OGSMRoomInfo robotNum. */
        public robotNum: (number|Long);

        /**
         * Creates a new OGSMRoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGSMRoomInfo instance
         */
        public static create(properties?: room2.IOGSMRoomInfo): room2.OGSMRoomInfo;

        /**
         * Encodes the specified OGSMRoomInfo message. Does not implicitly {@link room2.OGSMRoomInfo.verify|verify} messages.
         * @param message OGSMRoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGSMRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGSMRoomInfo message, length delimited. Does not implicitly {@link room2.OGSMRoomInfo.verify|verify} messages.
         * @param message OGSMRoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGSMRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGSMRoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGSMRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGSMRoomInfo;

        /**
         * Decodes a OGSMRoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGSMRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGSMRoomInfo;

        /**
         * Verifies a OGSMRoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGScanRoomAck. */
    interface IOGScanRoomAck {

        /** OGScanRoomAck result */
        result?: (number|null);

        /** OGScanRoomAck userName */
        userName?: (string|null);

        /** OGScanRoomAck roomList */
        roomList?: (room2.IOGSMRoomInfo[]|null);
    }

    /** Represents a OGScanRoomAck. */
    class OGScanRoomAck implements IOGScanRoomAck {

        /**
         * Constructs a new OGScanRoomAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGScanRoomAck);

        /** OGScanRoomAck result. */
        public result: number;

        /** OGScanRoomAck userName. */
        public userName: string;

        /** OGScanRoomAck roomList. */
        public roomList: room2.IOGSMRoomInfo[];

        /**
         * Creates a new OGScanRoomAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGScanRoomAck instance
         */
        public static create(properties?: room2.IOGScanRoomAck): room2.OGScanRoomAck;

        /**
         * Encodes the specified OGScanRoomAck message. Does not implicitly {@link room2.OGScanRoomAck.verify|verify} messages.
         * @param message OGScanRoomAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGScanRoomAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGScanRoomAck message, length delimited. Does not implicitly {@link room2.OGScanRoomAck.verify|verify} messages.
         * @param message OGScanRoomAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGScanRoomAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGScanRoomAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGScanRoomAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGScanRoomAck;

        /**
         * Decodes a OGScanRoomAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGScanRoomAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGScanRoomAck;

        /**
         * Verifies a OGScanRoomAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an UpdateCoinAck. */
    interface IUpdateCoinAck {

        /** UpdateCoinAck username */
        username?: (string|null);

        /** UpdateCoinAck coin */
        coin: number;
    }

    /** Represents an UpdateCoinAck. */
    class UpdateCoinAck implements IUpdateCoinAck {

        /**
         * Constructs a new UpdateCoinAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IUpdateCoinAck);

        /** UpdateCoinAck username. */
        public username: string;

        /** UpdateCoinAck coin. */
        public coin: number;

        /**
         * Creates a new UpdateCoinAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateCoinAck instance
         */
        public static create(properties?: room2.IUpdateCoinAck): room2.UpdateCoinAck;

        /**
         * Encodes the specified UpdateCoinAck message. Does not implicitly {@link room2.UpdateCoinAck.verify|verify} messages.
         * @param message UpdateCoinAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IUpdateCoinAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UpdateCoinAck message, length delimited. Does not implicitly {@link room2.UpdateCoinAck.verify|verify} messages.
         * @param message UpdateCoinAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IUpdateCoinAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an UpdateCoinAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateCoinAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.UpdateCoinAck;

        /**
         * Decodes an UpdateCoinAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateCoinAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.UpdateCoinAck;

        /**
         * Verifies an UpdateCoinAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGContinueGameReq. */
    interface IOGContinueGameReq {

        /** OGContinueGameReq username */
        username?: (string|null);
    }

    /** Represents a OGContinueGameReq. */
    class OGContinueGameReq implements IOGContinueGameReq {

        /**
         * Constructs a new OGContinueGameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGContinueGameReq);

        /** OGContinueGameReq username. */
        public username: string;

        /**
         * Creates a new OGContinueGameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGContinueGameReq instance
         */
        public static create(properties?: room2.IOGContinueGameReq): room2.OGContinueGameReq;

        /**
         * Encodes the specified OGContinueGameReq message. Does not implicitly {@link room2.OGContinueGameReq.verify|verify} messages.
         * @param message OGContinueGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGContinueGameReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGContinueGameReq message, length delimited. Does not implicitly {@link room2.OGContinueGameReq.verify|verify} messages.
         * @param message OGContinueGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGContinueGameReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGContinueGameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGContinueGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGContinueGameReq;

        /**
         * Decodes a OGContinueGameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGContinueGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGContinueGameReq;

        /**
         * Verifies a OGContinueGameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a OGContinueGameAck. */
    interface IOGContinueGameAck {

        /** OGContinueGameAck result */
        result?: (number|null);

        /** OGContinueGameAck username */
        username?: (string|null);
    }

    /** Represents a OGContinueGameAck. */
    class OGContinueGameAck implements IOGContinueGameAck {

        /**
         * Constructs a new OGContinueGameAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: room2.IOGContinueGameAck);

        /** OGContinueGameAck result. */
        public result: number;

        /** OGContinueGameAck username. */
        public username: string;

        /**
         * Creates a new OGContinueGameAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OGContinueGameAck instance
         */
        public static create(properties?: room2.IOGContinueGameAck): room2.OGContinueGameAck;

        /**
         * Encodes the specified OGContinueGameAck message. Does not implicitly {@link room2.OGContinueGameAck.verify|verify} messages.
         * @param message OGContinueGameAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room2.IOGContinueGameAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified OGContinueGameAck message, length delimited. Does not implicitly {@link room2.OGContinueGameAck.verify|verify} messages.
         * @param message OGContinueGameAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room2.IOGContinueGameAck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a OGContinueGameAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OGContinueGameAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): room2.OGContinueGameAck;

        /**
         * Decodes a OGContinueGameAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OGContinueGameAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): room2.OGContinueGameAck;

        /**
         * Verifies a OGContinueGameAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
