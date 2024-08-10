const { regClass } = Laya;
import { MainSceneBase } from "./MainScene.generated";

@regClass()
export class MainScene extends MainSceneBase {
    onAwake(): void {
        console.log("this.StartPanel", this.StartPanel);
        this.StartPanel.zOrder = 100;
    }
}
