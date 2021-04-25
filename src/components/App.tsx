import React, {
  useEffect,
  useState,
  useRef,
  ReactElement,
} from 'react';

import FloorPlanType from '../enums/FloorPlanType';
import LeaseStatus from '../enums/LeaseStatus';
import { Unit } from '../interfaces/unit.interface';

import FloorPlan from '../utils/FloorPlan';
import AmenityFilter from '../utils/filters/AmenityFilter';
import FloorPlanFilter from '../utils/filters/FloorPlanFilter';
import LeaseStatusFilter from '../utils/filters/LeaseStatusFilter';
import PriceFilter from '../utils/filters/PriceFilter';
import UnitFilter from '../utils/filters/UnitFilter';

import UnitCard from './UnitCard';
import FloorPlanSelect from './FloorPlanSelect';

import '../styles/App.scss';

import { units as mockData } from '../api/sample.json';

const App : React.FC = (): ReactElement => {
  const STATIC_UNIT_DATA = useRef<Unit[]>(mockData);

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [amenities, setAmenties] = useState([]);
  const [floorPlan, setFloorPlan] = useState<FloorPlan>(new FloorPlan(FloorPlanType.B2));
  const [leaseStatus, setLeaseStatus] = useState(LeaseStatus.ANY);
  const [priceRange, setPriceRange] = useState([-Infinity, Infinity]);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    const unitFilter: UnitFilter = new UnitFilter();
    unitFilter.addFilter(new AmenityFilter(amenities));
    unitFilter.addFilter(new FloorPlanFilter(floorPlan.type));
    unitFilter.addFilter(new LeaseStatusFilter(leaseStatus));
    unitFilter.addFilter(new PriceFilter(priceRange[0], priceRange[1]));

    setUnits(unitFilter.filterUnits(STATIC_UNIT_DATA.current));
  }, [amenities, floorPlan, leaseStatus, priceRange]);

  return (
    <main>
      <h1 className="title">Astikós Living</h1>
      <h4>Do you want to live at <a href="https://www.astikoslofts.com/">Astikós Lofts</a>?</h4>
      <p>Please explore this website to view the details of all their units.</p>
      <FloorPlanSelect floorPlan={floorPlan} setFloorPlan={setFloorPlan} />
      <button className="floor-plan-button" type="button">
        Select a Floor Plan
      </button>
      <div className="units">
        {units.sort((unitA: Unit, unitB: Unit): number => unitA.floorplanId - unitB.floorplanId)
          .map((u: Unit): ReactElement => <UnitCard unit={u} />)}
      </div>
    </main>
  );
};

export default App;
