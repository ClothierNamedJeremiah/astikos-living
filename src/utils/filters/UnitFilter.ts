import { Unit } from '../../interfaces/unit.interface';
import { IFilter } from '../../interfaces/filter.interface';

export default class UnitFilter implements IFilter {
  filters: IFilter[];

  constructor() {
    this.filters = [];
  }

  filter(unit: Unit): boolean {
    return this.filters.every((filter) => filter.filter(unit));
  }

  addFilter(filter: IFilter): void {
    this.filters.push(filter);
  }

  filterUnits(units: Unit[]): Unit[] {
    const filteredUnits: Unit[] = [];
    units.forEach((unit) => {
      if (this.filter(unit)) {
        filteredUnits.push(unit);
      }
    });
    return filteredUnits;
  }
}
