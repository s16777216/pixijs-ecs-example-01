import { Game } from './game/Game';
import { PlayerFactory, LevelLoader } from './game/Factories';
import { testLevel } from './game/Level';

// 1. 初始化遊戲
const game = new Game();
// @ts-ignore
const world = (game as any).world;

// 2. 建立玩家與關卡
const playerID = PlayerFactory.create(world, 50, 50);
LevelLoader.load(world, testLevel);

// 3. 啟動遊戲
game.init(playerID);
requestAnimationFrame(game.run.bind(game));

console.log("瑪利歐遊戲已啟動！");
