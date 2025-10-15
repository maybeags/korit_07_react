import MyComponent from './MyComponent'
import AuthContext from './AuthContext'
import './App.css'

function App() {

  const username = '김일';

  return (
    <AuthContext.Provider value={username}>
      <MyComponent />
    </AuthContext.Provider>
  )
}

export default App
