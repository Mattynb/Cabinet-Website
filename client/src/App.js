import {useAuth} from './contexts/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  const {isLoggedIn} = useAuth()

  return (
    <div className='App'>
      <Header />

      {isLoggedIn ? <LoggedInText /> : <LoggedOutText />}

      <Footer />
    </div>
  )
}

const LoggedInText = () => {
  const {account} = useAuth()

  return <p>Hey, {account.username}! I'm happy to let you know: you are authenticated!</p>
}

const LoggedOutText = () => (
  <p>Don't forget to start your backend server, then authenticate yourself.
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </p>
)
