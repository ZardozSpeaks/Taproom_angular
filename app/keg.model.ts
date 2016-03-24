export class Keg {
  public low: boolean = false;
  public pintsRemaining: number = 124;
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public ABV: number
  ) {}
}
