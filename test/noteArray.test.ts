import {NoteArray} from '../src/core/collection/noteArray';
import {NoteEnum}  from '../src/core/enums/noteEnum';
import {Note}      from '../src/core/note';

describe('NoteArray tests', () => {
  it('should pass when construct with default parameters', () => {
    let array: NoteArray = new NoteArray();

    expect(array).toBeInstanceOf(NoteArray);
  });

  it('should pass when construct with notes', () => {
    let array: NoteArray = new NoteArray(
      new Note({note: NoteEnum.C}),
      new Note({note: NoteEnum.D})
    );

    expect(array.length).toEqual(2);
  });

  it('should pass when compare items', () => {
    let array: NoteArray = new NoteArray();
    array.push(new Note({note: NoteEnum.C}));
    array.push(new Note({note: NoteEnum.D}));

    expect(array.indexOf(new Note({note: NoteEnum.D}))).toEqual(1);
  });
});
