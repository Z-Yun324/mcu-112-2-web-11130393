export class Product {
  constructor(
    public id: number,
    public name: string,
    public company: string,
    public price: number,
    public isShow: boolean,
    public createDate: Date,
    public modifyDate?: Date
  ) {}

  //利用類別方法設定產品是否顯示
  setDisplay(isShow: boolean): void {
    this.isShow = isShow;
  }
}
