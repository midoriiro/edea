export class Common
{
  public static readonly Semitone: number = 0.5;
  public static readonly Wholetone: number = 1;
  public static readonly Octave: number = 12;

  public static round(value: number, step: number) : number
  {
    let inverse = 1.0 / step;
    return Math.round(value * inverse) / inverse;
  }

  public static normalizeSemitone(semitones: number) : number
  {
    return Common.round(semitones, 1);
  }

  public static normalizeWholetone(wholetones: number) : number
  {
    return Common.round(wholetones, 0.5);
  }

  public static normalizeOctave(octave: number) : number
  {
    return Common.round(octave, 1);
  }
}
