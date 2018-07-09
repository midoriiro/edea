import { ExtendedArray } from './extendedArray'

export class EnumUtil
{
  public static toExtendedArray<T>(e: any): ExtendedArray<T>
  {
    let array: ExtendedArray<T> = new ExtendedArray<T>();

    const keys = Object.keys(e).filter(k => typeof e[k] === 'number') as string[];

    for (let key of keys)
    {
      array.push(e[key])
    }

    return array
  }

  public static isInRange(e: any, value: any)
  {
    return EnumUtil.toExtendedArray(e).indexOf(value) !== -1
  }
}
