import {ExtendedArray} from '../src/core/collection/extendedArray';
import {Comparator}    from '../src/core/collection/comparator';

describe('ExtendedArray tests', () => {
  it('should pass when construct with default parameters', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();

    expect(array).toBeInstanceOf(ExtendedArray);
  });

  it('should pass when construct with items', () => {
    let a = 1;
    let b = 2;
    let c = 3;
    let array = new ExtendedArray<number>(a, b, c);

    expect(array.length).toEqual(3);
    expect(array[0]).toEqual(a);
    expect(array[1]).toEqual(b);
    expect(array[2]).toEqual(c);
  });

  it('should pass when construct with array', () => {
    let array = new ExtendedArray<number[]>([1, 2, 3]);

    expect(array.length).toEqual(1);
  });

  it('should pass when comparator is valid', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();

    expect(array.comparator).not.toBeNull();
  });

  it('should pass when get first item', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();
    array.push(1);

    expect(array.first()).not.toBeNull();
  });

  it('should fail when get first item with empty array', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();

    expect(array.first()).toBeNull();
  });

  it('should pass when get last item', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();
    array.push(1);
    array.push(2);

    expect(array.last()).not.toBeNull();
  });

  it('should fail when get last item with empty array', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();

    expect(array.last()).toBeNull();
  });

  it('should pass when remove with item is on the list', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();
    array.push(1);
    array.push(2);
    array.push(3);

    expect(array.remove(3)).toEqual(3);
  });

  it('should fail when remove with item is not on the list', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();
    array.push(1);
    array.push(2);
    array.push(3);

    expect(() => {
      array.remove(4)
    }).toThrow(Error);
  });

  it('should pass when removes with items is on the list', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();
    array.push(1);
    array.push(2);
    array.push(3);

    let expectedArray: ExtendedArray<number> = new ExtendedArray<number>();
    expectedArray.push(2);
    expectedArray.push(3);

    expect(array.removes(expectedArray).toString()).toEqual(expectedArray.toString());
  });

  it('should fail when removes with items is not on the list', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();
    array.push(1);
    array.push(2);
    array.push(3);

    let expectedArray: ExtendedArray<number> = new ExtendedArray<number>();
    expectedArray.push(3);
    expectedArray.push(4);

    expect(() => {
      array.removes(expectedArray)
    }).toThrow(Error);
  });

  it('should pass when base index of with item is on the list', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();

    array.push(1);
    array.push(2);
    array.push(3);

    expect(array.indexOf(1)).toEqual(0);
  });

  it('should fail when base index of with item is not on the list', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();

    array.push(1);
    array.push(2);
    array.push(3);

    expect(array.indexOf(4)).toEqual(-1);
  });

  it('should pass when enhance index of with item is on the list', () => {
    let array: ExtendedArray<number[]> = new ExtendedArray();

    array.comparator = new Comparator<number[]>((a: number[], b: number[]) => {
      return a[0] === b[0];
    });

    array.push([1]);
    array.push([2]);
    array.push([3]);

    expect(array.indexOf([1])).toEqual(0);
  });

  it('should fail when enhance index of with item is not on the list', () => {
    let array: ExtendedArray<number[]> = new ExtendedArray();

    array.comparator = new Comparator<number[]>((a: number[], b: number[]) => {
      return a[0] === b[0];
    });

    array.push([1]);
    array.push([2]);
    array.push([3]);

    expect(array.indexOf([4])).toEqual(-1);
  });

  it('should fail when enhance index of with invalid comparator', () => {
    let array: ExtendedArray<number[]> = new ExtendedArray();

    array.comparator = null;

    array.push([1]);
    array.push([2]);
    array.push([3]);

    expect(array.indexOf([1])).toEqual(-1);
  });

  it('should pass when shift with valid value', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();
    array.push(1);
    array.push(2);
    array.push(3);

    let expectedArray: ExtendedArray<number> = new ExtendedArray<number>();
    expectedArray.push(2);
    expectedArray.push(3);
    expectedArray.push(1);

    expect(array.shiftUntilValue(2)).toBeUndefined();
    expect(array.toString()).toEqual(expectedArray.toString());
  });

  it('should pass when shift with invalid value', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();
    array.push(1);
    array.push(2);
    array.push(3);

    expect(() => {
      array.shiftUntilValue(4)
    }).toThrow(Error);
  });

  it('should fail when shift with invalid comparator', () => {
    let array: ExtendedArray<number> = new ExtendedArray<number>();

    array.comparator = null;

    array.push(1);
    array.push(2);
    array.push(3);

    expect(() => {
      array.shiftUntilValue(2)
    }).toThrow(Error);
  });
});
