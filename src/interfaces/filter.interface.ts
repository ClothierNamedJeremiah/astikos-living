import { Unit } from './unit.interface';

export interface IFilter {
  filter(unit: Unit): boolean
}
