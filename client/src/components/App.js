import styled from 'styled-components';
import Spinner from './Loading/Spinner';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LocMap from './Maps/LocMap';
import Weather from './Weather/Weather';
import AstroPlan from './Scheduler/AstroPlan';
import Globalstyles from "./Globalstyles";
import Catalog from './Catalog/Catalog';

const data = [
  { start_date:'2020-06-10 6:00', end_date:'2020-06-10 8:00', text:'Event 1', id: 1 },
  { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Clods - 75%', id: 2, color: 'red' }
];

const App = () => {
  return (
    <Router>
      <Globalstyles />
      <Wrapper>
        <Routes>
          <Route path="/location" element={<LocMap />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/schedule" element={<AstroPlan events={data}/>} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  display:flex;
`


export default App;
