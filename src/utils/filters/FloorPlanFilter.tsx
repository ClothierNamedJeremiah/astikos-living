import { Unit } from '../../interfaces/unit.interface';
import { IFilter } from '../../interfaces/filter.interface';

export default class FloorPlanFilter implements IFilter {
  floorPlanId: number;

  constructor(floorPlanId: number) {
    this.floorPlanId = floorPlanId;
  }

  filter(unit: Unit): boolean {
    return unit.floorplanId === this.floorPlanId;
  }
}
