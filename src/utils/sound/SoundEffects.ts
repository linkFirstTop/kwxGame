module sound {
	export class SoundEffects extends BaseSound{
		private _volume:number;

		/**
		 * 构造函数
		 */
		public constructor() {
			super();
		}

		/**
		 * 播放一个音效
		 * @param effectName
		 */
		public play(effectName:string):void {
			var sound:egret.Sound = this.getSound(effectName);
			if (sound) {
				sound.type = egret.Sound.EFFECT;
				this.playSound(sound);
			}
		}

		/**
		 * 播放
		 * @param sound
		 */
		private playSound(sound:egret.Sound):void {
			try {
				var channel:egret.SoundChannel = sound.play(0, 1);
				channel.volume = this._volume;
			} catch (error) {
				
			}
			
		}

		/**
		 * 设置音量
		 * @param volume
		 */
		public setVolume(volume:number):void {
			this._volume = volume;
		}


		/**
		 * 资源加载完成后处理播放
		 * @param key
		 */
		public loadedPlay(key:string):void {
			this.playSound(RES.getRes(key));
		}
	}
}