import FloorPlanType from '../enums/FloorPlanType';

export default class FloorPlan {
  type: FloorPlanType

  static FloorPlanLabels = {
    [FloorPlanType.S1]: 'S1 - Studio - 455 Sqft',
    [FloorPlanType.A1]: 'A1 - 1x1 - 566 Sqft',
    [FloorPlanType.A2]: 'A2 - 1x1 - 657 Sqft',
    [FloorPlanType.A3]: 'A3 - 1x1 - 764 Sqft',
    [FloorPlanType.A3L]: 'A3L - 1x1 - 894 Sqft',
    [FloorPlanType.A4]: 'A4 - 1x1 - 854 Sqft',
    [FloorPlanType.A4L]: 'A4L - 1x1 - 1005 Sqft',
    [FloorPlanType.A5]: 'A5 - 1x1 - 872 Sqft',
    [FloorPlanType.B1]: 'B1 - 2x2 - 958 Sqft',
    [FloorPlanType.B2]: 'B2 - 2x2 - 1024 Sqft',
    [FloorPlanType.B3]: 'B3 - 2x2 - 1067 Sqft',
    [FloorPlanType.B3L]: 'B3L - 2x2 - 1210 Sqft',
    [FloorPlanType.B4]: 'B4 - 2x2 - 1188 Sqft',
    [FloorPlanType.B4L]: 'B4L - 2x2 - 1369 Sqft',
  }

  constructor(type: FloorPlanType) {
    this.type = type;
  }

  get label(): string {
    return FloorPlan.FloorPlanLabels[this.type];
  }
}
