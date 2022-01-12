import { request } from "./request";
export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}
export class Goods {
  constructor(Iteminfo,columns,service) {
    this.title = Iteminfo.title
    this.iid = Iteminfo.iid
    this.desc = Iteminfo.desc
    this.price = Iteminfo.price
    this.oldPrice = Iteminfo.oldPrice
    this.discount = Iteminfo.discountDesc
    this.columns = columns
    this.service = service
  }
}