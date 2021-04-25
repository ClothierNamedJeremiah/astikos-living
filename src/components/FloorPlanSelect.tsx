import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import Select from 'react-select';

import FloorPlan from '../utils/FloorPlan';
import FloorPlanType from '../enums/FloorPlanType';

const selectOptions = [
  { label: 'S1 - Studio - 455 Sqft', value: FloorPlanType.S1 },
  { label: 'A1 - 1x1 - 566 Sqft', value: FloorPlanType.A1 },
  { label: 'A2 - 1x1 - 657 Sqft', value: FloorPlanType.A2 },
  { label: 'A3 - 1x1 - 764 Sqft', value: FloorPlanType.A3 },
  { label: 'A3L - 1x1 - 894 Sqft', value: FloorPlanType.A3L },
  { label: 'A4 - 1x1 - 854 Sqft', value: FloorPlanType.A4 },
  { label: 'A4L - 1x1 - 1005 Sqft', value: FloorPlanType.A4L },
  { label: 'A5 - 1x1 - 872 Sqft', value: FloorPlanType.A5 },
  { label: 'B1 - 2x2 - 958 Sqft', value: FloorPlanType.B1 },
  { label: 'B2 - 2x2 - 1024 Sqft', value: FloorPlanType.B2 },
  { label: 'B3 - 2x2 - 1067 Sqft', value: FloorPlanType.B3 },
  { label: 'B3L - 2x2 - 1210 Sqft', value: FloorPlanType.B3L },
  { label: 'B4 - 2x2 - 1188 Sqft', value: FloorPlanType.B4 },
  { label: 'B4L - 2x2 - 1369 Sqft', value: FloorPlanType.B4L },
];

interface Props {
  floorPlan: FloorPlan,
  setFloorPlan: Dispatch<SetStateAction<FloorPlan>>
}

type FloorPlanSelectOption = {
  value: FloorPlanType,
  label: string,
} | null

const FloorPlanSelect = (props: Props): ReactElement => {
  const { floorPlan, setFloorPlan } = props;

  const handleChange = (value: FloorPlanSelectOption): void => {
    if (value) {
      setFloorPlan(new FloorPlan(value.value));
    }
  };

  return (
    <Select
      options={selectOptions}
      value={{ label: floorPlan.label, value: floorPlan.type }}
      onChange={(value) => handleChange(value)}
    />
  );
};

export default FloorPlanSelect;
