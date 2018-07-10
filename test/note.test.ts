import {Note}           from '../src/core/note';
import {NoteEnum}       from '../src/core/enums/noteEnum';
import {AlterationEnum} from '../src/core/enums/alterationEnum';
import {Common}         from '../src/core/utils/common';

describe('Note tests', () => {
  it('should pass when construct with default parameters', () => {
    let note: Note = new Note({note: NoteEnum.C});

    expect(note).toBeInstanceOf(Note);
    expect(note.note).toEqual(NoteEnum.C);
  });

  it('should pass when construct with alteration', () => {
    let note: Note = new Note({
      note: NoteEnum.C,
      alteration: AlterationEnum.SHARP
    });

    expect(note).toBeInstanceOf(Note);
    expect(note.note).toEqual(NoteEnum.C_SHARP);
  });

  it('should pass when construct with octave', () => {
    let note: Note = new Note({
      note: NoteEnum.C,
      octave: 2
    });

    expect(note).toBeInstanceOf(Note);
    expect(note.note).toEqual(NoteEnum.C);
    expect(note.octave).toEqual(2);
  });

  it('should pass when construct with octave', () => {
    let note: Note = new Note({
      note: NoteEnum.C,
      octave: 2
    });

    expect(note).toBeInstanceOf(Note);
    expect(note.note).toEqual(NoteEnum.C);
    expect(note.octave).toEqual(2);
  });

  it('should pass when set octave with integer value', () => {
    let note: Note = new Note({
      note: NoteEnum.C,
    });

    note.octave = 2;

    expect(note.octave).toEqual(2);
  });

  it('should pass when set octave with float value', () => {
    let note: Note = new Note({
      note: NoteEnum.C,
    });

    note.octave = 2.36;

    expect(note.octave).toEqual(2);
  });

  it('should pass when alter note with sharp', () => {
    let note: Note = new Note({
      note: NoteEnum.B,
    });

    expect(note.alter(AlterationEnum.SHARP)).toEqual(
      new Note({
        note: NoteEnum.C,
        octave: 2
      }));
  });

  it('should pass when alter note with flat', () => {
    let note: Note = new Note({
      note: NoteEnum.C,
    });

    expect(note.alter(AlterationEnum.FLAT)).toEqual(
      new Note({
        note: NoteEnum.B,
        octave: 0
      }));
  });

  it('should fail when alter note with invalid value', () => {
    let note: Note = new Note({
      note: NoteEnum.C,
    });

    expect(() => {
      note.alter(AlterationEnum.SHARP + 2);
    }).toThrow(Error);
  });

  it('should pass when transpose with 3 semitones', () => {
    let note: Note = new Note({
      note: NoteEnum.C,
    });

    expect(note.transpose(3)).toEqual(new Note({note: NoteEnum.D_SHARP}));
  });

  it('should pass when transpose with octave', () => {
    let note: Note = new Note({
      note: NoteEnum.C,
    });

    expect(note.transpose(Common.Octave)).toEqual(
      new Note({
        note: NoteEnum.C,
        octave: 2
      }));
  });

  it('should pass when transpose with negative octave', () => {
    let note: Note = new Note({
      note: NoteEnum.C,
    });

    expect(note.transpose(-Common.Octave)).toEqual(
      new Note({
        note: NoteEnum.C,
        octave: 0
      }));
  });

  it('should fail when transpose with null semitones', () => {
    let note: Note = new Note({
      note: NoteEnum.C,
    });

    expect(() => {
      note.transpose(0)
    }).toThrowError(Error);
  });
});
