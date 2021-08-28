import Button from "./components/Button"

function handleClick(){
  console.log("hello");
}

function App() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <Button label= "Click Me" onClick= {handleClick}/>

    </div>
  );
}

export default App;
