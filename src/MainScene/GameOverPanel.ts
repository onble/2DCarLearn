import { GameManager } from "./GameManager";
import { Player } from "./Player";
import { StartPanel } from "./StartPanel";

const { regClass, property } = Laya;

@regClass()
export class GameOverPanel extends Laya.Script {
    declare owner: Laya.Sprite;
    private txt_Score: Laya.Text;
    private txt_HeightScore: Laya.Text;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.txt_Score = this.owner.getChildByName("txt_Score") as Laya.Text;
        this.txt_HeightScore = this.owner.getChildByName(
            "txt_HightScore"
        ) as Laya.Text;
        Laya.loader.load(
            "resources/font.ttf",
            Laya.Handler.create(this, (font: FontFace) => {
                const txt_Over = this.owner.getChildByName(
                    "txt_Over"
                ) as Laya.Text;
                txt_Over.font = font.family;
            }),
            null,
            Laya.Loader.TTF
        );

        this.owner.getChildByName("btn_Home").on(Laya.Event.CLICK, this, () => {
            this.owner.visible = false;
            // 通知主页面板
            this.owner.parent
                .getChildByName("StartPanel")
                .getComponent(StartPanel)
                .HomeButtonClick();
            // 通知游戏管理器
            this.owner.parent.getComponent(GameManager).HomeButtonClick();
            // 通知玩家小车进行重置
            this.owner.parent
                .getChildByName("player")
                .getComponent(Player)
                .Reset();
        });
        this.owner
            .getChildByName("btn_Restart")
            .on(Laya.Event.CLICK, this, () => {
                this.owner.visible = false;
                // 通知游戏管理器
                this.owner.parent
                    .getComponent(GameManager)
                    .RestartButtonClick();
                Laya.stage.event("StartGame");
                // 通知玩家小车进行重置
                this.owner.parent
                    .getChildByName("player")
                    .getComponent(Player)
                    .Reset();
            });

        // 监听游戏结束事件
        Laya.stage.on("GameOver", this, () => {
            this.owner.visible = true;
        });
    }

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}
