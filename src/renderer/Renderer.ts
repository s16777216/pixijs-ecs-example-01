import * as PIXI from 'pixi.js';

export class GameRenderer {
  public app: PIXI.Application;
  public worldContainer: PIXI.Container;

  constructor(width: number, height: number) {
    this.app = new PIXI.Application();
    // Assuming v7+ compatible initialization if app.init isn't available
    // or just using the constructor. Let's try standard v7 for now.
    // If it's v8, this might need app.init. 
    // Given the error was about 0 args, adding the constructor solves that.
    this.app.init({ width, height, backgroundColor: 0x1099bb });
    
    this.worldContainer = new PIXI.Container();
    this.app.stage.addChild(this.worldContainer);
  }

  async loadAssets(assets: { name: string, url: string }[]): Promise<void> {
    for (const asset of assets) {
      await PIXI.Assets.load(asset.url);
    }
  }
}
