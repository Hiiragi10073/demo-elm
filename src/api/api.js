import ajax from './ajax';
const BaseUrl = 'https://elm.cangdu.org';

// 获取商店列表
export const getShopList = (config) => ajax(`${BaseUrl}/shopping/restaurants`, config);

// 获取食品分类
export const getCategory = () => ajax(`${BaseUrl}/v2/index_entry`);

// 获取城市列表
export const getCityList = (config) => ajax(`${BaseUrl}/v1/cities`, config);

// 搜索地址信息
export const getAddress = (config) => ajax(`${BaseUrl}/v1/pois`, config);
