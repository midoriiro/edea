export class Comparator<T>
{
  private expression: (a: T, b: T) => boolean;

  public constructor(expression: (a: T, b: T) => boolean)
  {
    this.expression = expression;
  }

  public compare(a: T, b: T) : boolean
  {
    return this.expression(a, b);
  }
}
