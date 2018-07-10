import {IComparator} from './icomparator';
import {Comparator}  from './comparator';

export class ExtendedArray<T> extends Array<T> implements IComparator<T>
{
  public set comparator(value: Comparator<T> | undefined | null)
  {
    this._comparator = value == null ? undefined : value;
  }

  protected _comparator?: Comparator<T>;

  public constructor(...items: T[])
  {
    super(...items);
    Object.setPrototypeOf(this, ExtendedArray.prototype);

    this._comparator = new Comparator<T>((a: T, b: T) => {
      return a === b;
    });
  }

  public first(): T
  {
    let item: any = this[0];

    return item === undefined ? null : item;
  }

  public last(): T
  {
    let item: any = this[this.length - 1];

    return item === undefined ? null : item;
  }

  public indexOf(searchElement: T, fromIndex?: number) : number
  {
    let index: number = super.indexOf(searchElement, fromIndex);

    if(index !== - 1 || this._comparator == null)
    {
      return index;
    }

    for (let i = fromIndex ? fromIndex : 0; i < this.length; i++)
    {
      let item = this[i];

      if (this._comparator.compare(searchElement, item)) {
        return i;
      }
    }

    return -1;
  }

  public remove(value: T): T
  {
    let index = this.indexOf(value);

    if (index !== -1)
    {
      return this.splice(index, 1)[0];
    }

    throw new Error('Invalid value');
  }

  public removes(values: T[]): ExtendedArray<T>
  {
    let removedItems = new ExtendedArray<T>();

    for (let value of values)
    {
      removedItems.push(this.remove(value));
    }

    return removedItems;
  }

  public shiftUntilValue(value: T): void
  {
    let index = this.indexOf(value);

    if (index !== -1 && this._comparator != null )
    {
      while (!this._comparator.compare(this.first(), value))
      {
        this.push(this.shift()!);
      }

      return;
    }

    throw new Error('Invalid value');
  }
}
