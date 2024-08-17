const { regClass, property } = Laya;

@regClass()
export class StartPanel extends Laya.Script {
    declare owner: Laya.Sprite;

    @property(Laya.Image)
    public btn_Play: Laya.Image = null;
    @property(Laya.Button)
    public btn_AudioOn: Laya.Button = null;
    @property(Laya.Button)
    public btn_AudioOff: Laya.Button = null;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.btn_Play.on(Laya.Event.CLICK, this, this.btnPlayClick);
        this.btn_AudioOn.on(Laya.Event.CLICK, this, this.btnAudioOnClick);
        this.btn_AudioOff.on(Laya.Event.CLICK, this, this.btnAudioOffClick);
        // 监听Mute静音变化
        Laya.stage.on("Mute", this, this.renderMuteButton);
    }
    btnPlayClick() {
        this.owner.visible = false;
        // 派发事件
        Laya.stage.event("StartGame");
        Laya.SoundManager.playSound("resources/Sounds/ButtonClick.ogg", 1);
    }
    btnAudioOnClick() {
        this.btn_AudioOff.visible = true;
        this.btn_AudioOn.visible = false;
        Laya.SoundManager.playSound("resources/Sounds/ButtonClick.ogg", 1);
        Laya.SoundManager.muted = true;
        // 将静音的事件通过事件传递来通知暂停面板，静音状态的改变
        Laya.stage.event("Mute", true);
    }
    btnAudioOffClick() {
        this.btn_AudioOff.visible = false;
        this.btn_AudioOn.visible = true;
        Laya.SoundManager.playSound("resources/Sounds/ButtonClick.ogg", 1);
        Laya.SoundManager.muted = false;
        // 将静音的事件通过事件传递来通知暂停面板，静音状态的改变
        Laya.stage.event("Mute", false);
    }

    public HomeButtonClick() {
        this.owner.visible = true;
    }
    /**
     * 渲染静音按钮
     * @param isMute 是否静音
     */
    renderMuteButton(isMute: boolean) {
        if (isMute) {
            this.btn_AudioOn.visible = false;
            this.btn_AudioOff.visible = true;
        } else {
            this.btn_AudioOn.visible = true;
            this.btn_AudioOff.visible = false;
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
