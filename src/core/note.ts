import { ExtendedArray } from './utils/extendedArray'
import { EnumUtil } from './utils/enumUtil'
import { NoteEnum } from './enums/noteEnum'

export class Note {
  public static getNotes(parameters: {
    shift: NoteEnum
    includeAlteration: boolean
  }): ExtendedArray<NoteEnum> {
    let defaultParameters = {
      shift: NoteEnum.C,
      includeAlteration: false
    }

    let { shift, includeAlteration } = Object.assign({}, defaultParameters, parameters)
    let notes: ExtendedArray<NoteEnum> = EnumUtil.toExtendedArray(NoteEnum)

    if (!includeAlteration) {
      let alteredNotes: ExtendedArray<NoteEnum> = new ExtendedArray<NoteEnum>()
      alteredNotes.push(NoteEnum.C_SHARP)
      alteredNotes.push(NoteEnum.D_SHARP)
      alteredNotes.push(NoteEnum.F_SHARP)
      alteredNotes.push(NoteEnum.G_SHARP)
      alteredNotes.push(NoteEnum.A_SHARP)

      notes.removes(alteredNotes)
    }

    notes.shiftUntilValue(shift)

    return notes
  }
}
