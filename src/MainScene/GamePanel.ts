const { regClass, property } = Laya;

@regClass()
export class GamePanel extends Laya.Script {
    declare owner: Laya.Sprite;

    private txt_Best: Laya.Text;
    private txt_Last: Laya.Text;
    private txt_Score: Laya.Text;

    private score: number = 0;
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.txt_Best = this.owner.getChildByName("txt_Best") as Laya.Text;
        this.txt_Last = this.owner.getChildByName("txt_Last") as Laya.Text;
        this.txt_Score = this.owner.getChildByName("txt_Score") as Laya.Text;
        this.owner
            .getChildByName("btn_Pause")
            .on(Laya.Event.CLICK, this, this.pauseBtnClick);

        // 用代码去加载字体文件，现在的版本不需要下面的代码在测试环境字体显示还是正常的
        Laya.loader.load(
            "resources/font.ttf",
            Laya.Handler.create(this, (font: FontFace) => {
                this.txt_Best.font = font.family;
                this.txt_Last.font = font.family;
                this.txt_Score.font = font.family;
            }),
            null,
            Laya.Loader.TTF
        );

        // 初始的时候隐藏
        this.owner.visible = false;
        // 监听到开始游戏的事件就显示
        Laya.stage.on("StartGame", this, () => {
            this.owner.visible = true;
            // TODO:放这里会有逻辑错误
            this.Init();
        });
        // 每生存一段时间，就增加分数
        Laya.timer.loop(300, this, this.AddScore);
        Laya.stage.on("AddScore", this, this.AddScore);
    }
    Init() {
        // 去本地存储中获得数据,如果没有数据，则返回null
        this.txt_Last.text = `Last:${
            Laya.LocalStorage.getItem("LastScore") || "0"
        }`;
        this.txt_Best.text = `Best:${
            Laya.LocalStorage.getItem("BestScore") || "0"
        }`;
        this.txt_Score.text = `0`;
        this.score = 0;
    }

    AddScore(score = 1) {
        // 如果还没显示分数界面，则不加分
        if (this.owner.visible === false) return;
        this.score += score;
        this.txt_Score.text = this.score.toString();
    }
    pauseBtnClick() {
        Laya.timer.pause();
        // 将游戏视图隐藏
        this.owner.visible = false;
        // 进行广播通知
        Laya.stage.event("Pause");
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
