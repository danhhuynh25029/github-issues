import {BrowserRouter, Route, Routes} from "react-router-dom";
import TablePage from "./components/Table.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TablePage />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
