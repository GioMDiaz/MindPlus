import './App.css'
import { Landing, Home, Login, Register, Profile, UpdatePassword, DeleteAccount, Progress, Help } from './components'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate()
  const showLogin = () => navigate('/login')
  const showRegister = () => navigate('/register')
  const showHome = () => navigate('/home')
  const showProfile = () => navigate('/profile')
  const showLanding = () => navigate('/landing')
  const showUpdatePassword = () => navigate('/profile/update-password')
  const showDeleteAccount = () => navigate('/profile/delete-account')
  const showProgress = () => navigate('/progress')
  const showHelp = () => navigate('/help')

  return <div>

    <Routes>
      <Route path="/*" element={<Landing onLogin={showLogin} onRegister={showRegister} />} />
      <Route path="/login" element={<Login onHome={showHome} onRegister={showRegister} />} />
      <Route path="/register" element={<Register onLogin={showLogin} onRegistered={showLogin} />} />
      <Route path="/home" element={sessionStorage.token ? <Home onLogo={showHome} onProgress={showProgress} onProfile={showProfile} onHelp={showHelp} />: <Navigate to="landing"/> } />
      <Route path="/profile" element={sessionStorage.token ? <Profile onLogo={showHome} onProfile={showProfile} onUpdatePassword={showUpdatePassword} onLogOut={showLanding} onDeleteAccount={showDeleteAccount} onProgress={showProgress} onHelp={showHelp}/> : <Navigate replace to='/login' />} />
      <Route path="/profile/update-password" element={<UpdatePassword onProgress={showProgress} onProfile={showProfile} onHelp={showHelp} onLogo={showHome} onBack={showProfile} />} />
      <Route path="/profile/delete-account" element={<DeleteAccount onProgress={showProgress} onProfile={showProfile} onHelp={showHelp} onLogo={showHome} onBack={showProfile} />} />
      <Route path="/progress" element={<Progress onProgress={showProgress} onProfile={showProfile} onHelp={showHelp} onLogo={showHome}/>} />
      <Route path="/help" element={<Help onProgress={showProgress} onProfile={showProfile} onHelp={showHelp} onLogo={showHome} />} />
     
    </Routes>
  </div>
}

export default App