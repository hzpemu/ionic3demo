import { User } from './user';

/**
 * AppGlobal 全局定义 单例模式
 */
export class AppGlobal {
    private static instance: AppGlobal = new AppGlobal();
   
    /**是否是调试状态 */
    isDebug: boolean = true;
    server: string = this.isDebug ? "http://localhost" : "http://www.xxx.com";

    apiUrl: string = "/MobileApi/api";
    upapiUrl: string = "/t323";
    indexUrl: string ="/index.php";
    starturl: string = this.server + this.upapiUrl;
    startindexurl: string = this.server + this.upapiUrl + this.indexUrl;
    /**当前用户信息 */
    currentUserInfo = new User(null, 'no user info', null, null, null,null,null,null);
     //user = new User(null, null, null, null, null);//方式一初始化user
     //user = new User(0, '', '', 0, '');//方式一初始化user
    //user: User = {
    //    userid: 0,
    //    username: 'Windstorm',
    //    birthday: '',
    //    sex: 0,
    //    headimg: ''
    //};//方式二初始化user

    /**分页页数 */
    pageSize: number = 10;

    constructor() {
        if (AppGlobal.instance) {
            throw new Error("错误: 请使用AppGlobal.getInstance() 代替使用new.");
        }
        AppGlobal.instance = this;
    }

    /**
     * 获取当前实例
     * 
     * @static
     * @returns {AppGlobal}
     */
    public static getInstance(): AppGlobal {
        return AppGlobal.instance;
    }


}
