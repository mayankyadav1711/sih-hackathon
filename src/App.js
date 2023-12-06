import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/homepage";
import Topbarc from "./scenes/globalc/Topbarc";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Sidebarc from "./scenes/globalc/Sidebarc";
import Dashboard from "./scenes/dashboard";
import Dashboardc from "./scenes/dashboardc";
import Team from "./scenes/team";
import Teamc from "./scenes/teamc";
import Invoices from "./scenes/invoices";
import Invoicesc from "./scenes/invoicesc";
import Contacts from "./scenes/contacts";
import Contactsc from "./scenes/contactsc";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Piec from "./scenes/piec";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import ViewProject from "./components/ViewProject";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isCSidebar, setIsCSidebar] = useState(true);
  const location = useLocation();

  // List of pages that should not include common components
  const excludedPages = ["/", "/viewproject"];

  const shouldExcludeCommonComponents = excludedPages.includes(location.pathname);

  return (
    <div className="app">
      {!shouldExcludeCommonComponents && (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <>
              {!location.pathname.includes("/team") && !location.pathname.includes("/college") && (
                <Sidebar isSidebar={isSidebar} />
              )}
              <main className="content">
                {location.pathname !== "/" && location.pathname !== "/viewproject" && (
                  <Topbar setIsSidebar={setIsSidebar} />
                )}
                <Routes>
                  <Route path="/team" element={<Dashboard />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/college" element={<Dashboardc />} />
                  <Route path="/teamlist" element={<Team />} />
                  <Route path="/collegelist" element={<Teamc />} />
                  <Route path="/contactslist" element={<Contacts />} />
                  <Route path="/collegecontacts" element={<Contactsc />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/invoicesc" element={<Invoicesc />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/topbarc" element={<Topbarc />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/piec" element={<Piec />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/geography" element={<Geography />} />
                  <Route path="/dc" element={<Dashboardc />} />
                  <Route path="/viewproject" element={<ViewProject />} />
                </Routes>
              </main>
            </>
          </ThemeProvider>
        </ColorModeContext.Provider>
      )}

      {shouldExcludeCommonComponents && <Home /> && <ViewProject/>}
    </div>
  );
}

export default App;








