import {ExtendedArray} from './extendedArray';
import {Note}          from '../note';
import {IComparator}   from './icomparator';
import {Comparator}    from './comparator';

export class NoteArray extends ExtendedArray<Note> implements IComparator<Note>
{
  public constructor(...items: Note[])
  {
    super(...items);
    Object.setPrototypeOf(this, NoteArray.prototype);

    this._comparator = new Comparator<Note>((a: Note, b: Note) => {
      return a.note === b.note;
    });
  }
}
