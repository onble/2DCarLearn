const { regClass, property } = Laya;

@regClass()
export class GameManager extends Laya.Script {
    declare owner: Laya.Sprite;

    @property(Laya.Prefab)
    public Car_1: Laya.Prefab;
    @property(Laya.Prefab)
    public Car_2: Laya.Prefab;
    @property(Laya.Prefab)
    public Car_3: Laya.Prefab;
    @property(Laya.Prefab)
    public Car_4: Laya.Prefab;
    @property(Laya.Prefab)
    public Car_5: Laya.Prefab;
    @property(Laya.Prefab)
    public Car_6: Laya.Prefab;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {}
    spawn() {
        // x 190 380 570 760
        let arrX = [190.38, 570, 760];
        let y = -300;
        let x = arrX[this.getRandom(0, arrX.length - 1)];
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
