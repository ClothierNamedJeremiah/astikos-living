import { Unit } from '../../interfaces/unit.interface';
import { IFilter } from '../../interfaces/filter.interface';

export default class PriceFilter implements IFilter {
  minPrice: number;

  maxPrice: number;

  constructor(minPrice = -Infinity, maxPrice = Infinity) {
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
  }

  filter(unit: Unit): boolean {
    if (unit.rent) {
      return this.minPrice < unit.rent && unit.rent < this.maxPrice;
    }
    return false;
  }
}
