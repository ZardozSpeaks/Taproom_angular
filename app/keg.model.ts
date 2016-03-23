export class Keg {
  public low: boolean = false;
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public ABV: number
  ) {}
}
