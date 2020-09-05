import ajax from './ajax';
const BaseUrl = 'https://elm.cangdu.org';

// 获取商店列表
export const getShopList = (config) => ajax(`${BaseUrl}/shopping/restaurants`, config);

// 获取食品分类
export const getCategory = () => ajax(`${BaseUrl}/v2/index_entry`);
