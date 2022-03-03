import {IValues} from "./types";

export interface IMakeStyleReturn {
    userName: StyleSheetList
    visitor: StyleSheetList
}

export const makeStyle = <IMakeStyleReturn>(options: IValues) => {
    /**
     * 用户名称样式
     */
    const userName = {
        color: options.userNameColor,
        fontWeight: 900
    }
    /**
     * 访客统计样式
     */
    const visitor = {
        color: options.visitorColor,
        fontWeight: 900
    }

    return {
        userName,
        visitor,
    }
}