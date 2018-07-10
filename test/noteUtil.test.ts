import {NoteArray} from '../src/core/collection/noteArray';
import {Note}      from '../src/core/note';
import {NoteUtil}  from '../src/core/utils/noteUtil';
import {NoteEnum}  from '../src/core/enums/noteEnum';

describe('NoteUtil tests', () => {
  it('should pass when generate notes with default parameters', () => {
    let array: NoteArray = new NoteArray();
    array.push(new Note({note: NoteEnum.C}));
    array.push(new Note({note: NoteEnum.D}));
    array.push(new Note({note: NoteEnum.E}));
    array.push(new Note({note: NoteEnum.F}));
    array.push(new Note({note: NoteEnum.G}));
    array.push(new Note({note: NoteEnum.A}));
    array.push(new Note({note: NoteEnum.B}));

    expect(NoteUtil.getNotes().toString()).toEqual(array.toString());
  });

  it('should pass when generate notes with altered notes', () => {
    let array: NoteArray = new NoteArray();
    array.push(new Note({note: NoteEnum.C}));
    array.push(new Note({note: NoteEnum.C_SHARP}));
    array.push(new Note({note: NoteEnum.D}));
    array.push(new Note({note: NoteEnum.D_SHARP}));
    array.push(new Note({note: NoteEnum.E}));
    array.push(new Note({note: NoteEnum.F}));
    array.push(new Note({note: NoteEnum.F_SHARP}));
    array.push(new Note({note: NoteEnum.G}));
    array.push(new Note({note: NoteEnum.G_SHARP}));
    array.push(new Note({note: NoteEnum.A}));
    array.push(new Note({note: NoteEnum.A_SHARP}));
    array.push(new Note({note: NoteEnum.B}));

    expect(
      NoteUtil.getNotes({
        includeAlteration: true
      }).toString()).toEqual(array.toString());
  });

  it('should pass when generate notes with shifted notes', () => {
    let array: NoteArray = new NoteArray();
    array.push(new Note({note: NoteEnum.F}));
    array.push(new Note({note: NoteEnum.G}));
    array.push(new Note({note: NoteEnum.A}));
    array.push(new Note({note: NoteEnum.B}));
    array.push(new Note({note: NoteEnum.C}));
    array.push(new Note({note: NoteEnum.D}));
    array.push(new Note({note: NoteEnum.E}));

    expect(
      NoteUtil.getNotes({
        shift: new Note({note: NoteEnum.F})
      }).toString()).toEqual(array.toString());
  });

  it('should fail when generate notes with shifted notes is out of bound', () => {
    expect(() => {
      NoteUtil.getNotes({
        shift: new Note({note: 13})
      })
    }).toThrow(Error);
  });

  it('should pass when generate notes with altered notes and shifted note', () => {
    let array: NoteArray = new NoteArray();
    array.push(new Note({note: NoteEnum.F}));
    array.push(new Note({note: NoteEnum.F_SHARP}));
    array.push(new Note({note: NoteEnum.G}));
    array.push(new Note({note: NoteEnum.G_SHARP}));
    array.push(new Note({note: NoteEnum.A}));
    array.push(new Note({note: NoteEnum.A_SHARP}));
    array.push(new Note({note: NoteEnum.B}));
    array.push(new Note({note: NoteEnum.C}));
    array.push(new Note({note: NoteEnum.C_SHARP}));
    array.push(new Note({note: NoteEnum.D}));
    array.push(new Note({note: NoteEnum.D_SHARP}));
    array.push(new Note({note: NoteEnum.E}));

    expect(
      NoteUtil.getNotes({
        shift: new Note({note: NoteEnum.F}),
        includeAlteration: true
      }).toString()
    ).toEqual(array.toString());
  })
});
