import AmenityType from '../../enums/AmenityType';
import { Unit } from '../../interfaces/unit.interface';
import { IFilter } from '../../interfaces/filter.interface';

import { getUnitAmenityNames } from '..';

export default class AmenityFilter implements IFilter {
  ammenities: AmenityType[];

  constructor(ammenities: AmenityType[]) {
    this.ammenities = ammenities;
  }

  filter(unit: Unit): boolean {
    const amentityNames: Set<string> = getUnitAmenityNames(unit);
    return this.ammenities.some((amenity) => amentityNames.has(amenity));
  }
}
