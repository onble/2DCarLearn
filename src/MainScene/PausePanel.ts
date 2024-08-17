import { Assert } from "../util/Assert";
import { GameManager } from "./GameManager";
import { Player } from "./Player";
import { StartPanel } from "./StartPanel";

const { regClass, property } = Laya;

@regClass()
export class PausePanel extends Laya.Script {
    declare owner: Laya.Sprite;

    private _btn_AudioOn: Laya.Button;
    private _btn_AudioOff: Laya.Button;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        // 给绑定组件
        this._btn_AudioOn = (this.owner.getChildByName("btn_AudioOn") as Laya.Button) || Assert.ChildNotNull;
        this._btn_AudioOff = (this.owner.getChildByName("btn_AudioOff") as Laya.Button) || Assert.ChildNotNull;
        // 用代码去加载字体文件，现在的版本不需要下面的代码在测试环境字体显示还是正常的
        Laya.loader.load(
            "resources/font.ttf",
            Laya.Handler.create(this, (font: FontFace) => {
                const txt_Pause = this.owner.getChildByName("txt_Pause") as Laya.Text;
                txt_Pause.font = font.family;
            }),
            null,
            Laya.Loader.TTF
        );

        this.owner.getChildByName("btn_Home").on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("resources/Sounds/ButtonClick.ogg", 1);
            Laya.timer.resume();
            this.owner.visible = false;
            // 通知主页面板
            this.owner.parent.getChildByName("StartPanel").getComponent(StartPanel).HomeButtonClick();
            // 通知游戏管理器
            this.owner.parent.getComponent(GameManager).HomeButtonClick();
            // 通知玩家小车进行重置
            this.owner.parent.getChildByName("player").getComponent(Player).Reset();
        });
        this.owner.getChildByName("btn_Close").on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("resources/Sounds/ButtonClick.ogg", 1);
            // 回复时钟
            Laya.timer.resume();
            // 将暂停视图隐藏
            this.owner.visible = false;
            // 广播开始游戏
            // Laya.stage.event("StartGame");
            // 实现继续游戏的逻辑
            // 下面的操作很危险
            const GamePanel = (this.owner.parent.getChildByName("GamePanel") as Laya.Sprite) || Assert.ChildNotNull;
            GamePanel.visible = true;
            const player = (this.owner.parent.getChildByName("player") as Laya.Sprite) || Assert.ChildNotNull;
            player.getComponent(Player).isStartGame = true;
        });
        this.owner.getChildByName("btn_Restart").on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("resources/Sounds/ButtonClick.ogg", 1);
            Laya.timer.resume();
            this.owner.visible = false;
            // 通知游戏管理器
            this.owner.parent.getComponent(GameManager).RestartButtonClick();
            Laya.stage.event("StartGame");
            // 通知玩家小车进行重置
            this.owner.parent.getChildByName("player").getComponent(Player).Reset();
        });
        this._btn_AudioOn.on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("resources/Sounds/ButtonClick.ogg", 1);
            this._btn_AudioOn.visible = false;
            this._btn_AudioOff.visible = true;
            Laya.SoundManager.muted = true;
            // 将静音的事件通过事件传递来通知暂停面板，静音状态的改变
            Laya.stage.event("Mute", true);
        });
        this._btn_AudioOff.on(Laya.Event.CLICK, this, () => {
            Laya.SoundManager.playSound("resources/Sounds/ButtonClick.ogg", 1);
            this._btn_AudioOn.visible = true;
            this._btn_AudioOff.visible = false;
            Laya.SoundManager.muted = false;
            // 将静音的事件通过事件传递来通知暂停面板，静音状态的改变
            Laya.stage.event("Mute", false);
        });

        // 监听到暂停事件的时候将暂停视图显示
        Laya.stage.on("Pause", this, () => {
            this.owner.visible = true;
        });
        // 监听Mute静音变化
        Laya.stage.on("Mute", this, this.renderMuteButton);
    }
    /**
     * 渲染静音按钮
     * @param isMute 是否静音
     */
    renderMuteButton(isMute: boolean) {
        if (isMute) {
            this._btn_AudioOn.visible = false;
            this._btn_AudioOff.visible = true;
        } else {
            this._btn_AudioOn.visible = true;
            this._btn_AudioOff.visible = false;
        }
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
