import * as PIXI from 'pixi.js';
import { Game } from './game/Game';
import { PlayerFactory, LevelLoader } from './game/Factories';
import { testLevel } from './game/Level';

async function main() {
    // 1. 初始化遊戲
    const game = new Game();
    // @ts-ignore
    const world = (game as any).world;

    // Create a dummy texture for 'player'
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 32, 32);
    const texture = PIXI.Texture.from(canvas);
    PIXI.Assets.cache.set('player', texture);

    // 2. 建立玩家與關卡
    const playerID = PlayerFactory.create(world, 50, 50);
    LevelLoader.load(world, testLevel);

    // 3. 啟動遊戲
    game.init(playerID);
    
    // Wait for renderer to be initialized
    await (game as any).renderer.app.init({ width: 800, height: 600 });
    requestAnimationFrame(game.run.bind(game));

    console.log("瑪利歐遊戲已啟動！");
}

main();
