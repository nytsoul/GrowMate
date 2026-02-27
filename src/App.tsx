import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ContentCreator from './pages/ContentCreator'
import HitPrediction from './pages/HitPrediction'
import StrategyLab from './pages/StrategyLab'
import AudiencePersona from './pages/AudiencePersona'
import CompetitorEngine from './pages/CompetitorEngine'
import VisualPromptGenerator from './pages/VisualPromptGenerator'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import ContentCalendar from './pages/ContentCalendar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/creator" element={<ContentCreator />} />
        <Route path="/prediction" element={<HitPrediction />} />
        <Route path="/strategy" element={<StrategyLab />} />
        <Route path="/personas" element={<AudiencePersona />} />
        <Route path="/competitors" element={<CompetitorEngine />} />
        <Route path="/visual" element={<VisualPromptGenerator />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/calendar" element={<ContentCalendar />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
