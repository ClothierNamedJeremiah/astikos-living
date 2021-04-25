import React from 'react';
import Select from 'react-select';

import FloorPlan from './enums/FloorPlan';

// TODO: Align Center
const selectOptions = [
  { label: 'S1 - Studio - 455 Sqft', value: 9214480 },
  { label: 'A1 - 1x1 - 566 Sqft', value: 9214481 },
  { label: 'A2 - 1x1 - 657 Sqft', value: 9214482 },
  { label: 'A3 - 1x1 - 764 Sqft', value: 9214483 },
  { label: 'A3L - 1x1 - 894 Sqft', value: 9214484 },
  { label: 'A4 - 1x1 - 854 Sqft', value: 9214485 },
  { label: 'A4L - 1x1 - 1005 Sqft', value: 9214486 },
  { label: 'A5 - 1x1 - 872 Sqft', value: 9214487 },
  { label: 'B1 - 2x2 - 958 Sqft', value: 9214488 },
  { label: 'B2 - 2x2 - 1024 Sqft', value: 9214489 },
  { label: 'B3 - 2x2 - 1067 Sqft', value: 9214490 },
  { label: 'B3L - 2x2 - 1210 Sqft', value: 9214491 },
  { label: 'B4 - 2x2 - 1188 Sqft', value: 9214492 },
  { label: 'B4L - 2x2 - 1369 Sqft', value: 9214493 },
];

const FloorPlanSelect = () => {
  const abc = 10;
  console.log(abc);
  return (
    <Select options={selectOptions} />
  );
};

export default FloorPlanSelect;
