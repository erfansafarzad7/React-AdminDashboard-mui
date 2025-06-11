import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./layouts/Topbar.jsx";
import Sidebar from "./layouts/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Team from "./pages/tables/Team.jsx";
import Contacts from "./pages/tables/Contacts.jsx";
import Invoices from "./pages/tables/Invoices.jsx";
import Form from "./pages/Form.jsx";
import Calendar from "./pages/Calendar.jsx";
import FAQ from "./pages/FAQ.jsx";
import Bar from "./pages/charts/Bar.jsx";
import Line from "./pages/charts/Line.jsx";
import Pie from "./pages/charts/Pie.jsx";
import Geography from "./pages/charts/Geography.jsx";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
