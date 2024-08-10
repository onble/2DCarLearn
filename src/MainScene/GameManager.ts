import { Car } from "./Car";

const { regClass, property } = Laya;

@regClass()
export class GameManager extends Laya.Script {
    declare owner: Laya.Sprite;

    /** 存储创建的汽车预制体 */
    private carPrefabArr: Laya.PrefabImpl[] = [];
    /** 存储是否开始了游戏状态 */
    private isStartGame = false;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.loadCarPrefab();
        // 监听到开始游戏事件后就将状态更改开始游戏的状态
        Laya.stage.on("StartGame", this, () => {
            this.isStartGame = true;
        });
    }
    loadCarPrefab() {
        const pathArr = [
            "Prefabs/Car_1.lh",
            "Prefabs/Car_2.lh",
            "Prefabs/Car_3.lh",
            "Prefabs/Car_4.lh",
            "Prefabs/Car_5.lh",
            "Prefabs/Car_6.lh",
        ];
        const infoArr = [];
        for (let i = 0; i < pathArr.length; i++) {
            infoArr.push({ url: pathArr[i], type: Laya.Loader.BUFFER });
        }
        Laya.loader.load(
            infoArr,
            Laya.Handler.create(this, (result: Laya.Resource) => {
                for (let i = 0; i < pathArr.length; i++) {
                    this.carPrefabArr.push(Laya.loader.getRes(pathArr[i]));
                }

                let ranTime = this.getRandom(800, 1200);
                Laya.timer.loop(ranTime, this, () => {
                    this.spawn();
                    ranTime = this.getRandom(800, 1200);
                });
            })
        );
    }
    /**
     * 生成小汽车
     */
    spawn() {
        if (!this.isStartGame) return;
        // x 190 380 570 760
        // 下面去随机生成的位置
        const arrX = [190, 380, 570, 760];
        const y = -300;
        const x = arrX[this.getRandom(0, arrX.length - 1)];

        const carIndex = this.getRandom(0, this.carPrefabArr.length - 1);
        // 注意，如果对象池传入的名字以数字开头，会报错崩溃
        const sign: string = `Car${carIndex}`;

        const carPrefab = this.carPrefabArr[carIndex];
        const car = Laya.Pool.getItemByCreateFun(
            sign,
            carPrefab.create,
            carPrefab
        ) as Laya.Sprite | Laya.Box;
        // const car = carPrefab.create() as Laya.Sprite | Laya.Box;
        // 将标识符传递给Car的管理脚本
        car.pos(x, y);
        this.owner.addChild(car);
        car.getComponent(Car).Init(sign);
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
