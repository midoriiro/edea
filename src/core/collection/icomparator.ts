import {Comparator} from "./comparator";

export interface IComparator<T>
{
  comparator: Comparator<T> | undefined | null;
}
