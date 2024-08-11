import { GameManager } from "./GameManager";
import { StartPanel } from "./StartPanel";

const { regClass, property } = Laya;

@regClass()
export class PausePanel extends Laya.Script {
    declare owner: Laya.Sprite;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        // 用代码去加载字体文件，现在的版本不需要下面的代码在测试环境字体显示还是正常的
        Laya.loader.load(
            "resources/font.ttf",
            Laya.Handler.create(this, (font: FontFace) => {
                const txt_Pause = this.owner.getChildByName(
                    "txt_Pause"
                ) as Laya.Text;
                txt_Pause.font = font.family;
            }),
            null,
            Laya.Loader.TTF
        );

        this.owner.getChildByName("btn_Home").on(Laya.Event.CLICK, this, () => {
            Laya.timer.resume();
            this.owner.visible = false;
            // 通知主页面板
            this.owner.parent
                .getChildByName("StartPanel")
                .getComponent(StartPanel)
                .HomeButtonClick();
            // 通知游戏管理器
            this.owner.parent.getComponent(GameManager).HomeButtonClick();
        });
        this.owner
            .getChildByName("btn_Close")
            .on(Laya.Event.CLICK, this, () => {
                // 回复时钟
                Laya.timer.resume();
                // 将暂停视图隐藏
                this.owner.visible = false;
                // 广播开始游戏
                Laya.stage.event("StartGame");
            });
        this.owner
            .getChildByName("btn_Restart")
            .on(Laya.Event.CLICK, this, () => {});
        this.owner
            .getChildByName("btn_AudioOn")
            .on(Laya.Event.CLICK, this, () => {});
        this.owner
            .getChildByName("btn_AudioOff")
            .on(Laya.Event.CLICK, this, () => {});

        // 监听到暂停事件的时候将暂停视图显示
        Laya.stage.on("Pause", this, () => {
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
