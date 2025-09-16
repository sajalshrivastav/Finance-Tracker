import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import './App.css'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Home from './pages/Dashboard/Home'
import DashboardLayout from './components/layouts/DashboardLayout'
import Settings from './pages/Dashboard/Settings'
import Admin from './pages/Dashboard/Admin'
import Transactions from './pages/Dashboard/Transactions'
import Budget from './pages/Dashboard/Budget'
import Report from './pages/Dashboard/Report'
import Savings from './pages/Dashboard/Savings'
import Debt from './pages/Dashboard/Debt'
import AICHAT from './pages/Dashboard/AICHAT'
import { ToastProvider } from './context/ToasterContext'

// import Root from './pages/Root'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="transactions" element={<Transactions />}></Route>
            <Route path="budget" element={<Budget />}></Route>
            <Route path="analysis" element={<Report />}></Route>
            <Route path="savings" element={<Savings />}></Route>
            <Route path="debt" element={<Debt />}></Route>
            <Route path="Ai-Chat" element={<AICHAT />}></Route>
            <Route path="admin" element={<Admin />}></Route>
            <Route path="setting" element={<Settings />}></Route>
            {/* <Route path="cards" element={<Cards />} />
            <Route path="income" element={<Incone />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

const Root = () => {
  const isAuthenticated = !!localStorage.getItem('token') // Example authentication check

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  )
}
