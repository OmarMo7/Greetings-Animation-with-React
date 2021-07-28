import Container from './components/Container';
import img1 from '../src/images/1.jpg'
import img2 from '../src/images/2.jpg'
import img3 from '../src/images/3.jpg'
import img4 from '../src/images/4.jpg'
import img5 from '../src/images/5.jpg'

function App() {
  const Trans = [
    "te-flip1",
    "te-flip2",
    "te-flip3",
    "te-flip4",
    "te-rotation1",
    "te-rotation2",
    "te-rotation3",
    "te-rotation4",
    "te-rotation5",
    "te-multiflip1",
    "te-multiflip2",
    "te-multiflip3",
    "te-cube1",
    "te-cube2",
    "te-cube3",
    "te-cube4",
    "te-unfold1",
    "te-unfold2",
    "te-example1",
    "te-example2",
    "te-example3",
    "te-example4",
    "te-example5",
    "te-example6",
    "te-example7"
  ]
  const Imgs = [
    img1,
    img2,
    img3,
    img4,
    img5
  ]
  return (
    <div className="App">
      <Container Trans={Trans} Imgs={Imgs} />
    </div>
  );
}

export default App;
