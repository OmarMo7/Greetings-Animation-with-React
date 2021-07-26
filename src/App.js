import Transition from './components/Transition';

function App() {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
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

  return (
    <div className="App">
      <Transition random={randomNumber} Trans={Trans} />
    </div>
  );
}

export default App;
