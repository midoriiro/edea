import {NoteArray}     from '../collection/noteArray';
import {NoteEnum}      from '../enums/noteEnum';
import {ExtendedArray} from '../collection/extendedArray';
import {EnumUtil}      from './enumUtil';
import {Note}          from '../note';

export class NoteUtil
{
  public static fromEnumToClass() : NoteArray
  {
    let notesEnum: ExtendedArray<NoteEnum> = EnumUtil.toExtendedArray(NoteEnum);
    let result: NoteArray = new NoteArray();

    for(let i = 0; i < notesEnum.length; i++)
    {
      result.push(new Note({note: notesEnum[i]}));
    }

    return result;
  }

  public static getNotes(parameters?: {
    shift?: Note
    includeAlteration?: boolean
  }): NoteArray
  {
    let defaultParameters = {
      shift: new Note({note: NoteEnum.C}),
      includeAlteration: false
    };

    let { shift, includeAlteration } = Object.assign({}, defaultParameters, parameters);

    let notes: NoteArray = NoteUtil.fromEnumToClass();

    if (!includeAlteration)
    {
      let alteredNotes: NoteArray = new ExtendedArray<Note>();
      alteredNotes.push(new Note({note: NoteEnum.C_SHARP}));
      alteredNotes.push(new Note({note: NoteEnum.D_SHARP}));
      alteredNotes.push(new Note({note: NoteEnum.F_SHARP}));
      alteredNotes.push(new Note({note: NoteEnum.G_SHARP}));
      alteredNotes.push(new Note({note: NoteEnum.A_SHARP}));

      notes.removes(alteredNotes)
    }

    notes.shiftUntilValue(shift);

    return notes
  }
}
