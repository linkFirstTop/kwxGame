class GameDragonFactory {
	public constructor() {
	}
	public static initAnim():void{
		/*对家换牌*/
		dragonBones.EgretFactory.factory.parseDragonBonesData(RES.getRes("djhp_ske_json"));
		dragonBones.EgretFactory.factory.parseTextureAtlasData( RES.getRes("djhp_tex_json"),RES.getRes("djhp_tex_png"));
		/*逆时针换牌*/
		dragonBones.EgretFactory.factory.parseDragonBonesData(RES.getRes("nszhp_ske_json"));
		dragonBones.EgretFactory.factory.parseTextureAtlasData( RES.getRes("nszhp_tex_json"),RES.getRes("nszhp_tex_png"));
		/*顺时针换牌*/
		dragonBones.EgretFactory.factory.parseDragonBonesData(RES.getRes("sszhp_ske_json"));
		dragonBones.EgretFactory.factory.parseTextureAtlasData( RES.getRes("sszhp_tex_json"),RES.getRes("sszhp_tex_png"));
	}
}