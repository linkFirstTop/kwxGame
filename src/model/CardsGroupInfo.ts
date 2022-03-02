class CardsGroupInfo {
	//牌组
	public cards:Array<game.CardInfo> = [];
	//牌组类型
	public CardsGroupType:number = 0;
	//牌组的归属人座位号
	public cardsit:number = -1;
	//吃碰杠胡的那一张牌
	public obtainCard:game.CardInfo = new game.CardInfo();
	public constructor() {
	}
	public  setCopyData(data:CardsGroupInfo):void
	{
		for(var i:number=0;i<data.cards.length;i++)
		{
			this.cards.push(data.cards[i]);
		}
		this.CardsGroupType = data.CardsGroupType;
		this.cardsit = data.cardsit;
		this.obtainCard.CardID = data.obtainCard.CardID;
		this.obtainCard.Sit = data.obtainCard.Sit;
	}
	public  setCardsBack():void
	{
		for(var i:number=0;i<this.cards.length;i++)
		{
			this.cards[i].CardID = 0;
		}
		this.obtainCard.CardID = 0;
	}
}