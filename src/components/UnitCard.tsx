import React, { ReactElement } from 'react';

import FloorPlan from '../enums/FloorPlanType';
import { Unit } from '../interfaces/unit.interface';

const UnitCard: React.FC<{ unit: Unit }> = ({ unit }): ReactElement => unit && (
  <>
    <p style={{ fontWeight: 'bold', marginBottom: '-12px' }}>{FloorPlan[unit.floorplanId]} - {unit.name}</p>
    <p style={{ marginLeft: '6px' }}>{unit.vacantDate?.split(' ')[0] || unit.leaseStatus} - {unit.rent || 'none'}</p>
  </>
);

export default UnitCard;
