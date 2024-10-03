import './App.css';

function MyButton() {
  return (
    <div className="button-container">
      {Array.from({ length: 10 }, (_, index) => (
        <button key={index} className="my-button">Button {index + 1}</button>
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

export default App;