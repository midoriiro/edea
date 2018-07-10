import {Note}          from '../note';
import {EnumUtil}      from './enumUtil';
import {NoteEnum}      from '../enums/noteEnum';
import {ExtendedArray} from '../collection/extendedArray';
import {NoteUtil}      from './noteUtil';
import {Common}        from './common';

export class IntervalUtil
{
  public static toWholetones(semitones: number): number
  {
    semitones = Common.normalizeSemitone(semitones);

    if (semitones < Common.Wholetone)
    {
      throw new Error('Invalid value')
    }

    return semitones * Common.Semitone
  }

  public static toSemitones(wholetones: number): number
  {
    wholetones = Common.normalizeWholetone(wholetones);

    if (wholetones < Common.Semitone)
    {
      throw new Error('Invalid value')
    }

    return wholetones / Common.Semitone
  }

  public static getSemiToneFromNotes(from: Note, to: Note): number
  {
    if (!EnumUtil.isInRange(NoteEnum, from.note) || !EnumUtil.isInRange(NoteEnum, to.note))
    {
      throw new Error('Invalid value')
    }

    if (from.note === to.note)
    {
      return Common.Octave
    }

    let notes: ExtendedArray<Note> = NoteUtil.getNotes({
      shift: from,
      includeAlteration: true
    });

    return notes.indexOf(to)
  }

  public static getNoteFromSemitones(origin: Note, semitones: number): Note
  {
    if (!EnumUtil.isInRange(NoteEnum, origin.note) || semitones > Common.Octave)
    {
      throw new Error('Invalid value')
    }

    if (semitones === Common.Octave)
    {
      return origin
    }

    let notes: ExtendedArray<Note> = NoteUtil.getNotes({
      shift: origin,
      includeAlteration: true
    });

    return notes[semitones]
  }
}
