import { ExtendedArray } from '../src/core/utils/extendedArray'
import { NoteEnum } from '../src/core/enums/noteEnum'
import { Note } from '../src/core/note'

describe('Note tests', () => {
  it('should pass with default parameters', () => {
    let expectedArray: ExtendedArray = new ExtendedArray()
    expectedArray.push(NoteEnum.C)
    expectedArray.push(NoteEnum.D)
    expectedArray.push(NoteEnum.E)
    expectedArray.push(NoteEnum.F)
    expectedArray.push(NoteEnum.G)
    expectedArray.push(NoteEnum.A)
    expectedArray.push(NoteEnum.B)

    expect(Note.getNotes()).toEqual(expectedArray)
  })

  it('should pass when include alteration notes is set to true', () => {
    let expectedArray: ExtendedArray = new ExtendedArray()
    expectedArray.push(NoteEnum.C)
    expectedArray.push(NoteEnum.C_SHARP)
    expectedArray.push(NoteEnum.D)
    expectedArray.push(NoteEnum.D_SHARP)
    expectedArray.push(NoteEnum.E)
    expectedArray.push(NoteEnum.F)
    expectedArray.push(NoteEnum.F_SHARP)
    expectedArray.push(NoteEnum.G)
    expectedArray.push(NoteEnum.G_SHARP)
    expectedArray.push(NoteEnum.A)
    expectedArray.push(NoteEnum.A_SHARP)
    expectedArray.push(NoteEnum.B)

    expect(
      Note.getNotes({
        includeAlteration: true
      })
    ).toEqual(expectedArray)
  })

  it('should pass when shifted note is settled in scope', () => {
    let expectedArray: ExtendedArray = new ExtendedArray()
    expectedArray.push(NoteEnum.F)
    expectedArray.push(NoteEnum.G)
    expectedArray.push(NoteEnum.A)
    expectedArray.push(NoteEnum.B)
    expectedArray.push(NoteEnum.C)
    expectedArray.push(NoteEnum.D)
    expectedArray.push(NoteEnum.E)

    expect(
      Note.getNotes({
        shift: NoteEnum.F
      })
    ).toEqual(expectedArray)
  })

  it('should fail when shifted note is out of bound', () => {
    expect(() => {
      Note.getNotes({
        shift: 13
      })
    }).toThrow(Error)
  })

  it('should pass when include alteration notes is set to true and shifted note is settled in scope', () => {
    let expectedArray: ExtendedArray = new ExtendedArray()
    expectedArray.push(NoteEnum.F)
    expectedArray.push(NoteEnum.F_SHARP)
    expectedArray.push(NoteEnum.G)
    expectedArray.push(NoteEnum.G_SHARP)
    expectedArray.push(NoteEnum.A)
    expectedArray.push(NoteEnum.A_SHARP)
    expectedArray.push(NoteEnum.B)
    expectedArray.push(NoteEnum.C)
    expectedArray.push(NoteEnum.C_SHARP)
    expectedArray.push(NoteEnum.D)
    expectedArray.push(NoteEnum.D_SHARP)
    expectedArray.push(NoteEnum.E)

    expect(
      Note.getNotes({
        shift: NoteEnum.F,
        includeAlteration: true
      })
    ).toEqual(expectedArray)
  })
})
