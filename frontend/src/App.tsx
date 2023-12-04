import './App.css'
import { Container } from './components/common/container/container';
import Sidebar from './components/common/sidebar/sidebar';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Container>
        <Sidebar />
        <Outlet />
      </Container>
    </>
  )
}

export default App
