import {IntervalUtil} from '../src/core/utils/intervalUtil';
import {NoteEnum}     from '../src/core/enums/noteEnum';
import {Note}         from '../src/core/note';
import {Common}       from '../src/core/utils/common';

describe('IntervalUtil tests', () => {
  it('should pass when get semitones between notes', () => {
    expect(IntervalUtil.getSemiToneFromNotes(
      new Note({note: NoteEnum.C}),
      new Note({note: NoteEnum.E})
    )).toEqual(4);
  });

  it('should pass when get semitones between notes with shifted notes', () => {
    expect(IntervalUtil.getSemiToneFromNotes(
      new Note({note: NoteEnum.E}),
      new Note({note: NoteEnum.A_SHARP})
    )).toEqual(6);
  });

  it('should pass when get semitones from same notes', () => {
    expect(IntervalUtil.getSemiToneFromNotes(
      new Note({note: NoteEnum.E}),
      new Note({note: NoteEnum.E})
    )).toEqual(Common.Octave);
  });

  it('should fail when get semitones with one note is not in range', () => {
    expect(() => {
      IntervalUtil.getSemiToneFromNotes(
        new Note({note: NoteEnum.C}),
        new Note({note: NoteEnum.B + 1})
      )
    }).toThrow(Error)
  });

  it('should pass when get note with valid origin and semitones', () => {
    expect(IntervalUtil.getNoteFromSemitones(
      new Note({note: NoteEnum.C}),
      4
    )).toEqual(new Note({note: NoteEnum.E}))
  });

  it('should pass when get note with shifted note', () => {
    expect(IntervalUtil.getNoteFromSemitones(
      new Note({note: NoteEnum.E}),
      6
    )).toEqual(new Note({note: NoteEnum.A_SHARP}))
  });

  it('should pass when get note with octave', () => {
    expect(IntervalUtil.getNoteFromSemitones(
      new Note({note: NoteEnum.E}),
      Common.Octave
    )).toEqual(new Note({note: NoteEnum.E}))
  });

  it('should fail when get note with invalid origin', () => {
    expect(() => {
      IntervalUtil.getNoteFromSemitones(
        new Note({note: NoteEnum.B + 1}),
        1
      )
    }).toThrow(Error)
  });

  it('should fail when get note with invalid semitones', () => {
    expect(() => {
      IntervalUtil.getNoteFromSemitones(
        new Note({note: NoteEnum.E}),
        Common.Octave + 1
      )
    }).toThrow(Error)
  });

  it('should pass when convert semitones to wholetones', () => {
    expect(IntervalUtil.toWholetones(5)).toEqual(2.5)
  });

  it('should pass when convert wholetones to semitones', () => {
    expect(IntervalUtil.toSemitones(2.5)).toEqual(5)
  });

  it('should pass when convert wholetones to semitones with invalid input', () => {
    expect(() => {
      IntervalUtil.toWholetones(0.245)
    }).toThrow(Error)
  });

  it('should pass when convert semitones to wholetones with invalid input', () => {
    expect(() => {
      IntervalUtil.toSemitones(0.125)
    }).toThrow(Error)
  })
});
