import React, { ReactElement } from 'react';

import { Unit } from '../interfaces/unit.interface';

import '../styles/UnitCard.scss';

interface Props {
  unit: Unit
}

const UnitCard = (props: Props): ReactElement => {
  const { unit } = props;
  const {
    amenityList,
    name,
    rent,
    leaseStatus,
    vacantDate,
  } = unit;

  const leaseInformation = vacantDate?.split(' ')[0] || leaseStatus || 'none';

  return (
    <div className="unit">
      <div className="unit-header">
        <div className="unit-name">{name}</div>
        <div className="unit-rent">{rent?.toLocaleString()}</div>
      </div>
      <div className="unit-lease">{leaseInformation}</div>
      <div className="unit-amenities">
        {amenityList && amenityList.map((item) => (
          <span>{item.name}</span>
        ))}
      </div>
    </div>
  );
};

export default UnitCard;
