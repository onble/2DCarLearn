import { Assert } from "../util/Assert";
import { AutoMove } from "./AutoMove";
import { Car } from "./Car";

const { regClass, property } = Laya;

@regClass()
export class GameManager extends Laya.Script {
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
    @property(Laya.Prefab)
    public Coin: Laya.Prefab;

    declare owner: Laya.Sprite;

    /** 存储创建的汽车预制体 */
    private carPrefabArr: Laya.PrefabImpl[] = [];
    private spawnCarArr: (Laya.Sprite | Laya.Box)[] = [];
    /** 存储是否开始了游戏状态 */
    private isStartGame = false;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.loadCarPrefab();
        // 监听到开始游戏事件后就将状态更改开始游戏的状态
        Laya.stage.on("StartGame", this, () => {
            this.isStartGame = true;
        });
        // 监听游戏结束事件
        Laya.stage.on("GameOver", this, this.gameOver);
    }
    loadCarPrefab() {
        let pathArr = [
            "Prefabs/Car_1.lh",
            "Prefabs/Car_2.lh",
            "Prefabs/Car_3.lh",
            "Prefabs/Car_4.lh",
            "Prefabs/Car_5.lh",
            "Prefabs/Coin.lh",
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
        let y = -300;
        const carPosIndex = this.getRandom(0, arrX.length - 1);
        const x = arrX[carPosIndex];

        const carTypeIndex = this.getRandom(0, this.carPrefabArr.length - 1);
        // 注意，如果对象池传入的名字以数字开头，会报错崩溃
        const sign: string = `Car${carTypeIndex}`;

        const carPrefab = this.carPrefabArr[carTypeIndex];
        const car = Laya.Pool.getItemByCreateFun(sign, carPrefab.create, carPrefab) as Laya.Sprite | Laya.Box;
        // const car = carPrefab.create() as Laya.Sprite | Laya.Box;
        // 获得控制汽车的脚本
        const carScript = car.getComponent(Car) || Assert.ComponentNotNull;
        // 获得碰撞器
        // const Collider = car.getComponent(Laya.BoxCollider).offset;
        car.anchorY = 0.5;
        // 根据位置控制双向车道不同的逻辑
        switch (carPosIndex) {
            // 左边的车辆 让左边的车辆反向
            case 0:
                car.scaleY = -1;
                carScript.speed = 22;
                break;
            case 1:
                car.scaleY = -1;
                carScript.speed = 25;
                break;
            // 右边的车辆
            case 2:
                car.scaleY = 1;
                carScript.speed = 17;
                break;
            case 3:
                car.scaleY = 1;
                carScript.speed = 14;
                break;
            default:
                throw new Error("出现意外的carPosIndex值");
        }
        car.pos(x, y);
        this.owner.addChild(car);
        car.getComponent(Car).Init(sign);
        // 将car对象存储，最后清屏的时候拿到清除
        this.spawnCarArr.push(car);
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
    /**
     * 游戏结束
     */
    gameOver() {
        // 更改开始游戏状态变量
        this.isStartGame = false;
        this.spawnCarArr.forEach((element) => {
            element.removeSelf();
        });
    }
    /**
     * 当Home按钮点击的时候调用
     */
    HomeButtonClick() {
        this.gameOver();
    }

    RestartButtonClick() {
        this.spawnCarArr.forEach((element) => {
            element.removeSelf();
        });
    }
}
