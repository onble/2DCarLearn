import { Car } from "./Car";

const { regClass, property } = Laya;

@regClass()
export class Player extends Laya.Script {
    declare owner: Laya.Sprite;

    /** 运动刚体组件 */
    private _rig: Laya.RigidBody;
    /** 限制小汽车的横向移动距离 */
    private _playerMinx = 200;
    private _playerMaxX = 880;
    public isStartGame = false;

    // 车道信息
    // x 260 450 640 820
    // y 1360

    private initXArr = [260, 450, 640, 820];

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        Laya.SoundManager.playMusic("resources/Sounds/FutureWorld_Dark_Loop_03.ogg", 0);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.MouseDown);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.MouseUp);
        // 事件监听
        Laya.stage.on("StartGame", this, () => {
            this.isStartGame = true;
        });
        Laya.stage.on("Pause", this, () => {
            this.isStartGame = false;
        });
        // 获取自身Rigidbody组件
        this._rig = this.owner.getComponent(Laya.RigidBody);

        this.Reset();
    }
    Reset() {
        // 随机小汽车的初始位置
        const index = this.getRandom(0, this.initXArr.length - 1);
        this.owner.pos(this.initXArr[index], 1360);
    }
    MouseDown() {
        if (this.isStartGame == false) return;
        // 游戏上方的点击不生效
        if (Laya.stage.mouseY < 500) return;
        let mouseX = Laya.stage.mouseX;
        /** 转弯的方向 */
        let force = 0;
        if (mouseX < Laya.stage.width / 2) {
            // left
            force = -1;
        } else {
            force = 1;
        }
        this._rig.linearVelocity = { x: force * 8, y: 0 };
        // 旋转车头
        Laya.Tween.to(this.owner, { rotation: force * 25 }, 300);
    }
    MouseUp() {
        this._rig.linearVelocity = { x: 0, y: 0 };
        Laya.Tween.to(this.owner, { rotation: 0 }, 300);
    }

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    // onStart(): void {}

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate(): void {
        if (this.owner.x > this._playerMaxX) {
            this.owner.x = this._playerMaxX;
        } else if (this.owner.x < this._playerMinx) {
            this.owner.x = this._playerMinx;
        }
    }
    onTriggerEnter(other: Laya.ColliderBase, self?: Laya.ColliderBase, contact?: any): void {
        if (other.label.match(/^Car/)) {
            Laya.SoundManager.playSound("resources/Sounds/CarCrash.ogg", 1);
            // 游戏结束
            Laya.stage.event("GameOver");
            this.isStartGame = false;
        }
        if (other.label == "Coin") {
            Laya.SoundManager.playSound("resources/Sounds/Bonus.ogg", 1);
            // 移除金币
            other.owner.removeSelf();
            // 通知脚本进行回收对象
            other.owner.getComponent(Car).recover();
            // 加分
            Laya.stage.event("AddScore", 10);
        }
    }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
    /**
     * 获取随机数，左闭右闭区间
     * @param min 最小值
     * @param max 最大值
     * @returns
     */
    getRandom(min: number, max: number) {
        let value = Math.random() * (max - min);
        value = Math.round(value);
        return min + value;
    }
}
