import { Route } from 'react-router-dom'
import Home from './pages/Home'

const Content = (props) => {
  return (
    <main>
      <Route exact path='/' component={Home} />
    </main>
  );
}
export default Content