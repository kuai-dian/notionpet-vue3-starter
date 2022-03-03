export interface IValues {
    // 访客数量
    visitorCount?: number
    // 访客数量颜色
    visitorColor?: string

    // 主人名称
    userName?: string
    /**
     * 主人颜色
     */
    userNameColor?: string
}

export interface IAppProps {
    bind?: Function
    call?: Function
    options: IValues
    data: any
}

/**
 * 默认值
 */
export const defaultOptions: IValues = {
    visitorCount: 0,
    userName: '无名英雄',
    userNameColor: '#09f',
    visitorColor: '#f60'
}