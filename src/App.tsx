import React, { ReactElement } from 'react';

import { units } from './api/sample.json';
import FloorplanName from './enums/FloorplanName';
import { Unit } from './interfaces/unit.interface';

const App : React.FC = (): ReactElement => (
  <main>
    <h1>Astikós Living</h1>
    {units.sort((unitA: Unit, unitB: Unit): number => unitA.floorplanId - unitB.floorplanId)
      .map((u: Unit): ReactElement => (
        <>
          <p>{FloorplanName[u.floorplanId]} - {u.name}</p>
        </>
      ))}
  </main>
);

export default App;
