import React, { ReactElement } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import AmenityType from '../enums/AmenityType';

interface Props {
  amenities: Record<AmenityType, boolean>,
  setAmenties: React.Dispatch<React.SetStateAction<Record<AmenityType, boolean>>>
}

const Amenities = (props: Props): ReactElement => {
  const { amenities, setAmenties } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    setAmenties({ ...amenities, [event?.target.name]: event?.target.checked });

  const checkboxNames = [
    AmenityType.ADA,
    AmenityType.AMENITY_PROXIMITY,
    AmenityType.CORNER,
    AmenityType.EXTRA_LARGE_BALCONY,
    AmenityType.FIRST_FLOOR,
    AmenityType.NEIGHBORHOOD_VIEW,
    AmenityType.TOP_FLOOR,
    AmenityType.WETLAND_VIEW,
  ];

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Available amenities</FormLabel>
      <FormGroup>
        {checkboxNames.map((name: AmenityType) => (
          <FormControlLabel
            key={name}
            control={
              (
                <Checkbox
                  checked={amenities[name]}
                  onChange={handleChange}
                  name={name}
                />
              )
            }
            label={name}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default Amenities;
