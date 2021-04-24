import { AmenityList, Unit } from '../interfaces/unit.interface';

export const getUnitAmenityNames = (unit: Unit): Set<string> => {
  const amentityNames: Set<string> = new Set();
  unit.amenityList?.forEach((amenity: AmenityList) => {
    amentityNames.add(amenity.name);
  });

  return amentityNames;
};

// should be removed if additional helper is added
export const doNothing = () => {
  console.log('hi');
};
