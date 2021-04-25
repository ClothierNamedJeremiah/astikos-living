import AmenityType from '../../enums/AmenityType';
import { Unit } from '../../interfaces/unit.interface';
import { IFilter } from '../../interfaces/filter.interface';

import { getUnitAmenityNames } from '..';

export default class AmenityFilter implements IFilter {
  amenities: Record<AmenityType | string, boolean>;

  constructor(amenities: Record<AmenityType, boolean>) {
    this.amenities = amenities;
  }

  filter(unit: Unit): boolean {
    const filteredAmenityNames = this.getAmenityNamesBeingFiltered();
    const amentityNames: Set<string> = getUnitAmenityNames(unit);
    return filteredAmenityNames.every((amenity) => amentityNames.has(amenity));
  }

  getAmenityNamesBeingFiltered(): string[] {
    const filteredAmenityNames: string[] = [];
    Object.keys(this.amenities).forEach((key) => {
      if (this.amenities[key]) {
        filteredAmenityNames.push(key.valueOf());
      }
    });
    return filteredAmenityNames;
  }
}
