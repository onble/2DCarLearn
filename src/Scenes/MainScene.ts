const { regClass } = Laya;
import { MainSceneBase } from "./MainScene.generated";

@regClass()
export class MainScene extends MainSceneBase {
    onAwake(): void {
        this.StartPanel.zOrder = 100;
        this.GamePanel.zOrder = 10;
        this.PausePanel.zOrder = 10;
        this.GameOverPanel.zOrder = 10;
    }
}
