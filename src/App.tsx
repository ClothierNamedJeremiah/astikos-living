import React, { ReactElement } from 'react';

import { units } from './api/sample.json';
import UnitCard from './components/UnitCard';
import { Unit } from './interfaces/unit.interface';

import './App.scss';

const App : React.FC = (): ReactElement => (
  <main>
    <h1 className="title">Astikós Living</h1>
    <h4>Do you want to live at <a href="https://www.astikoslofts.com/">Astikós Lofts</a>?</h4>
    <p>Please explore this website to view the details of all their units.</p>
    <button className="floor-plan-button" type="button">
      Select a Floor Plan
    </button>
    {units.sort((unitA: Unit, unitB: Unit): number => unitA.floorplanId - unitB.floorplanId)
      .map((u: Unit): ReactElement => <UnitCard unit={u} />)}
  </main>
);

export default App;
