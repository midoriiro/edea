import { NoteEnum } from '../src/core/enums/noteEnum'
import { Interval } from '../src/core/interval'

describe('Note tests', () => {
  it('should pass when getting distance from two valid notes', () => {
    expect(Interval.getSemiToneFromNotes(NoteEnum.C, NoteEnum.E)).toEqual(4)
  })

  it('should pass when getting distance from two valid notes and shifted notes list', () => {
    expect(Interval.getSemiToneFromNotes(NoteEnum.E, NoteEnum.A_SHARP)).toEqual(6)
  })

  it('should pass when getting distance from same notes', () => {
    expect(Interval.getSemiToneFromNotes(NoteEnum.E, NoteEnum.E)).toEqual(12)
  })

  it('should fail when getting distance and one note is not in range', () => {
    expect(() => {
      Interval.getSemiToneFromNotes(NoteEnum.C, 13)
    }).toThrow(Error)
  })

  it('should pass when getting note from valid origin and semitone', () => {
    expect(Interval.getNoteFromSemitones(NoteEnum.C, 4)).toEqual(NoteEnum.E)
  })

  it('should pass when getting note from shifted notes list', () => {
    expect(Interval.getNoteFromSemitones(NoteEnum.E, 6)).toEqual(NoteEnum.A_SHARP)
  })

  it('should pass when getting note from octave', () => {
    expect(Interval.getNoteFromSemitones(NoteEnum.E, 12)).toEqual(NoteEnum.E)
  })

  it('should fail when getting note with invalid origin', () => {
    expect(() => {
      Interval.getNoteFromSemitones(13, 1)
    }).toThrow(Error)
  })

  it('should fail when getting note with invalid semitones', () => {
    expect(() => {
      Interval.getNoteFromSemitones(NoteEnum.E, 13)
    }).toThrow(Error)
  })

  it('should pass when convert semitones to wholetones', () => {
    expect(Interval.toWholetones(5)).toEqual(2.5)
  })

  it('should pass when convert wholetones to semitones', () => {
    expect(Interval.toSemitones(2.5)).toEqual(5)
  })

  it('should pass when convert wholetones to semitones with invalid value', () => {
    expect(() => {
      Interval.toWholetones(0.5)
    }).toThrow(Error)
  })

  it('should pass when convert semitones to wholetones with invalid value', () => {
    expect(() => {
      Interval.toSemitones(0.25)
    }).toThrow(Error)
  })
})
