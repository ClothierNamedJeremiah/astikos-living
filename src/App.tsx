import React, { ReactElement } from 'react';

import { units } from './api/sample.json';
import FloorPlan from './enums/FloorPlan';
import { Unit } from './interfaces/unit.interface';

const App : React.FC = (): ReactElement => (
  <main>
    <h1 style={{ marginBottom: '36px' }}>Astikós Living</h1>
    <h4>Do you want to live at <a href="https://www.astikoslofts.com/">Astikós Lofts</a>?</h4>
    <p>Please explore this website to view the details of all their units.</p>
    <button style={{ margin: '24px 0px' }} type="button">
      Select a Floor Plan
    </button>
    {units.sort((unitA: Unit, unitB: Unit): number => unitA.floorplanId - unitB.floorplanId)
      .map((u: Unit): ReactElement => (
        <>
          <p style={{ fontWeight: 'bold', marginBottom: '-12px' }}>{FloorPlan[u.floorplanId]} - {u.name}</p>
          <p style={{ marginLeft: '6px' }}>{u.vacantDate?.split(' ')[0] || u.leaseStatus} - {u.rent || 'none'}</p>
        </>
      ))}
  </main>
);

export default App;
