import { ExtendedArray } from '../src/core/utils/extendedArray'
import { NoteEnum } from '../src/core/enums/noteEnum'

describe('ExtendedArray tests', () => {
  it('should pass when create instance without items', () => {
    expect(new ExtendedArray()).toBeInstanceOf(ExtendedArray)
  })

  it('should pass when create instance with items', () => {
    let array = new ExtendedArray(1, 2, 3)

    expect(array.length).toEqual(3)
  })

  it('should pass when create instance with array', () => {
    let array = new ExtendedArray([1, 2, 3])

    expect(array.length).toEqual(1)
  })

  it('should pass when get first item', () => {
    let array: ExtendedArray = new ExtendedArray()
    array.push(NoteEnum.C)

    expect(array.first()).not.toBeNull()
  })

  it('should fail when get first item and array is empty', () => {
    let array: ExtendedArray = new ExtendedArray()

    expect(array.first()).toBeNull()
  })

  it('should pass when get last item', () => {
    let array: ExtendedArray = new ExtendedArray()
    array.push(NoteEnum.C)
    array.push(NoteEnum.C_SHARP)

    expect(array.last()).not.toBeNull()
  })

  it('should fail when get last item and array is empty', () => {
    let array: ExtendedArray = new ExtendedArray()

    expect(array.last()).toBeNull()
  })

  it('should pass when removed item is on the list', () => {
    let array: ExtendedArray = new ExtendedArray()
    array.push(NoteEnum.C)
    array.push(NoteEnum.C_SHARP)
    array.push(NoteEnum.D)

    expect(array.remove(NoteEnum.C_SHARP)).toEqual(NoteEnum.C_SHARP)
  })

  it('should fail when removed item is not on the list', () => {
    let array: ExtendedArray = new ExtendedArray()
    array.push(NoteEnum.C)
    array.push(NoteEnum.C_SHARP)
    array.push(NoteEnum.D)

    expect(() => {
      array.remove(NoteEnum.E)
    }).toThrow(Error)
  })

  it('should pass when removed items is on the list', () => {
    let array: ExtendedArray = new ExtendedArray()
    array.push(NoteEnum.C)
    array.push(NoteEnum.C_SHARP)
    array.push(NoteEnum.D)

    let expectedArray: ExtendedArray = new ExtendedArray()
    expectedArray.push(NoteEnum.C)
    expectedArray.push(NoteEnum.D)

    expect(array.removes(expectedArray)).toEqual(expectedArray)
  })

  it('should fail when removed items is not on the list', () => {
    let array: ExtendedArray = new ExtendedArray()
    array.push(NoteEnum.C)
    array.push(NoteEnum.C_SHARP)
    array.push(NoteEnum.D)

    let expectedArray: ExtendedArray = new ExtendedArray()
    expectedArray.push(NoteEnum.C)
    expectedArray.push(NoteEnum.F)

    expect(() => {
      array.removes(expectedArray)
    }).toThrow(Error)
  })
})
