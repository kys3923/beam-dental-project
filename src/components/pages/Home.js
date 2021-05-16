import Intro from '../sections/Intro'
import Mission from '../sections/Mission'
import Leadership from '../sections/Leadership'
import Investors from '../sections/Investors'

const Home = (props) => {
  return (
    <div>
      <Intro />
      <Mission />
      <Leadership />
      <Investors />
    </div>
  );
}
export default Home