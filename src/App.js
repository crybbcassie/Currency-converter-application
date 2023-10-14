import './App.css';
import UsdTab from './pages/UsdTab';
import Converter from './pages/Converter';
import { Tabs } from 'antd';

function App() {
   const items = [
     {
       key: "1",
       label: `Converter`,
       children: <Converter />,
     },
     {
       key: "2",
       label: `1$ exchange`,
       children: <UsdTab />,
     },
   ];
   return (
     <div className="main">
       <Tabs defaultActiveKey="1" type="card" items={items} centered />
     </div>
   );
}

export default App;
