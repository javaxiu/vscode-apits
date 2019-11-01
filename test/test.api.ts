/*************************************************************/
/***********    api-loader 请求声明和配置文件    ****************/
/***********  这是一个数据请求对接的示例，仅供参考  ****************/
/***********  业务真实需要的请求请另行新建配置文件  ****************/
/*************************************************************/

/**
 * 由 api-loader 加载识别 *.api.ts 的文件
 * 使用文档: https://yuque.antfin-inc.com/recore/docs/api-loader
 */

import { TIndexCards, TVideoCards, TDemandData } from './demo.type';

declare const url: (url: string) => void;

const baseUrl = 'http://taobao.com';

/**
 * 用电量接口请求组
 * @kind ajax
 * @host https://mocks.alibaba-inc.com
 * @baseUrl /mock/limitless/demo
 * @header {}
 */
declare class DemoApi {
  /**
   * fetch card data
   * @url /indexCards.json
   * @method get
   */
  @url(baseUrl)
  getIndexCards(foo: string, bar: number): Promise<TIndexCards>;

  /**
   * 查询直播回放数据
   * @url /videoCards.json
   * @method get
   */
  getVideoCards(): Promise<TVideoCards>;

  /**
   * 查询需求投入分析数据，线上还没有这个服务，打开本地 mock
   * @url /demandData.json
   * @method get
   * @mock 1
   * @param foo 测试参数1
   */
  getDemandData(foo: string): Promise<TDemandData>;
}

export { TIndexCards, TVideoCards, TDemandData };
export default new DemoApi();
