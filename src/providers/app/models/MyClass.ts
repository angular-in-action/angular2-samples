export class MyClass {
  public name: string = 'MyClass instance';
  public dt: Date = new Date();
  public time: Number;
  public num: Number;

  constructor() {
      this.time = this.dt.getTime();
      this.num = Math.floor(Math.random() * 1000)
  }
}
