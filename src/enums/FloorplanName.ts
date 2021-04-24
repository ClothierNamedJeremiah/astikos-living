// this is an "enum" but TypeScript enums cannot have numeric keys, so it's actually an object
type Dictionary = { [index: number]: string }

const FloorPlanName: Dictionary = {
  9214480: 'S1',
  9214481: 'A1',
  9214482: 'A2',
  9214483: 'A3',
  9214484: 'A3L',
  9214485: 'A4',
  9214486: 'A4L',
  9214487: 'A5',
  9214488: 'B1',
  9214489: 'B2',
  9214490: 'B3',
  9214491: 'B3L',
  9214492: 'B4',
  9214493: 'B4L',
};

export default FloorPlanName;
