import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Expenses from './route/Expenses/index.tsx'
import Invoices from './route/Invoices/index.tsx'
import NotFound from './route/NotFound/index.tsx'
import Invoice from './route/Invoices/Invoice/index.tsx'
import InvoicesIndex from './route/Invoices/InvoicesIndex/index.tsx'
import Welcome from './route/Welcome/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Welcome />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route index element={<InvoicesIndex />} />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="*" element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>,
  </StrictMode>,
)
