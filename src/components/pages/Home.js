import Intro from '../sections/Intro'
import Mission from '../sections/Mission'

import Investors from '../sections/Investors'

const Home = (props) => {
  return (
    <body>
      <h1>Home section</h1>
      <Intro />
      <Mission />
      <Investors />
    </body>
  );
}
export default Home