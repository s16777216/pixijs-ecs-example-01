import * as PIXI from 'pixi.js';

export class GameRenderer {
  public app: PIXI.Application;
  public worldContainer: PIXI.Container;

  constructor(width: number, height: number) {
    this.app = new PIXI.Application();
    
    // We defer the init to main.ts to ensure everything is ready
    this.worldContainer = new PIXI.Container();
    // this.app.stage.addChild(this.worldContainer); // Need to wait for init
  }

  async init(width: number, height: number) {
    await this.app.init({ width, height, backgroundColor: 0x1099bb });
    document.body.appendChild(this.app.canvas);
    this.app.stage.addChild(this.worldContainer);
  }

  async loadAssets(assets: { name: string, url: string }[]): Promise<void> {
    for (const asset of assets) {
      await PIXI.Assets.load(asset.url);
    }
  }
}
