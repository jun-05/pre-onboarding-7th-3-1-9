import { Route, Routes } from 'react-router-dom';
import { SearchPage } from './page/SearchPage';
import Layout from './component/common/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
