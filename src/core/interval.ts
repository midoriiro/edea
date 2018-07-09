import { NoteEnum } from './enums/noteEnum'
import { ExtendedArray } from './utils/extendedArray'
import { Note } from './note'
import { EnumUtil } from './utils/enumUtil'

export class Interval
{
  public static readonly Semitone: number = 0.5;
  public static readonly Wholetone: number = 1;
  public static readonly Octave: number = 12;

  public static toWholetones(semitones: number): number
  {
    semitones = parseInt(semitones.toPrecision());

    if (semitones < Interval.Wholetone)
    {
      throw new Error('Invalid value')
    }

    return semitones * Interval.Semitone
  }

  public static toSemitones(wholetones: number): number
  {
    if (wholetones < Interval.Semitone)
    {
      throw new Error('Invalid value')
    }

    return wholetones / Interval.Semitone
  }

  public static getSemiToneFromNotes(from: NoteEnum, to: NoteEnum): number
  {
    if (!EnumUtil.isInRange(NoteEnum, from) || !EnumUtil.isInRange(NoteEnum, to))
    {
      throw new Error('Invalid value')
    }

    if (from === to)
    {
      return Interval.Octave
    }

    let notes: ExtendedArray<NoteEnum> = Note.getNotes({
      shift: from,
      includeAlteration: true
    });

    return notes.indexOf(to)
  }

  public static getNoteFromSemitones(origin: NoteEnum, semitones: number): NoteEnum
  {
    if (!EnumUtil.isInRange(NoteEnum, origin) || semitones > Interval.Octave)
    {
      throw new Error('Invalid value')
    }

    if (semitones === Interval.Octave)
    {
      return origin
    }

    let notes: ExtendedArray<NoteEnum> = Note.getNotes({
      shift: origin,
      includeAlteration: true
    });

    return notes[semitones]
  }
}
