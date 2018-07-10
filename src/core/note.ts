import {NoteEnum}       from './enums/noteEnum';
import {AlterationEnum} from './enums/alterationEnum';
import {Common}         from './utils/common';
import {EnumUtil}       from './utils/enumUtil';

export class Note
{
  public get note() : NoteEnum
  {
    return this._note;
  }

  private _note: NoteEnum = NoteEnum.C;

  get octave(): number
  {
    return this._octave;
  }

  set octave(value: number)
  {
    this._octave = Common.normalizeOctave(value);
  }

  private _octave: number = 1;

  public constructor(parameters: { note: NoteEnum, alteration?: AlterationEnum, octave?: number })
  {
    let defaultParameters = {
      note: NoteEnum.C,
      alteration: null,
      octave: 1
    };

    let {note, alteration, octave} = Object.assign({}, defaultParameters, parameters);
    this._note = alteration ? this.alter(alteration).note : note;
    this._octave = octave;
  }

  public alter(alteration: AlterationEnum) : Note
  {
    if(!EnumUtil.isInRange(AlterationEnum, alteration))
    {
      throw new Error('Invalid value');
    }

    this._note += alteration;

    if(this._note > NoteEnum.B)
    {
      this._note = NoteEnum.C;
      this._octave++;
    }
    else if(this._note < NoteEnum.C)
    {
      this._note = NoteEnum.B;
      this._octave--;
    }

    return this;
  }

  public transpose(semitones: number) : Note
  {
    semitones = Common.normalizeSemitone(semitones);

    let direction: AlterationEnum;

    if(semitones > 0)
    {
      direction = AlterationEnum.SHARP
    }
    else if(semitones < 0)
    {
      direction = AlterationEnum.FLAT
    }
    else
    {
      throw new Error('Invalid value');
    }

    for(let i = 0; i < Math.abs(semitones); i++)
    {
      this.alter(direction);
    }

    return this;
  }
}
