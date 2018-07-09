export class ExtendedArray<T> extends Array<T> {
  public constructor(...items: T[]) {
    super(...items)
    Object.setPrototypeOf(this, ExtendedArray.prototype)
  }

  public first(): T {
    let item: any = this[0]

    return item === undefined ? null : item
  }

  public last(): T {
    let item: any = this[this.length - 1]

    return item === undefined ? null : item
  }

  public remove(value: T): T {
    let index = this.indexOf(value)

    if (index !== -1) {
      return this.splice(index, 1)[0]
    }

    throw new Error('Invalid value')
  }

  public removes(values: T[]): T[] {
    let removedItems = []

    for (let value of values) {
      removedItems.push(this.remove(value))
    }

    return removedItems
  }

  public shiftUntilValue(value: T): void {
    let index = this.indexOf(value)

    if (index !== -1) {
      while (this.first() !== value) {
        this.push(this.shift()!)
      }

      return
    }

    throw new Error('Invalid value')
  }
}
