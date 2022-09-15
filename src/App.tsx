import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from './preview/pages/Index';
import {PageProvider} from "./preview/components/context/Page";
import Instruction from "./preview/pages/Instruction";
import {UserManual} from "./preview/pages/UserManual";



function App() {
    return <PageProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/instruction" element={<Instruction />} />
                <Route path="/docs/*" element={<UserManual />} />
                <Route path="/" element={<Index />} />
            </Routes>
        </BrowserRouter>
    </PageProvider>;
}

export default App;
