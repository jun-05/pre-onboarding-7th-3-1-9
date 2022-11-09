import { Route, Routes } from 'react-router-dom';
import { SearchPage } from './page/SearchPage';
import GlobalBackground from './component/common/Layout';

function App() {
  return (
    <Routes>
      <Route element={<GlobalBackground />}>
        <Route path="/" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
