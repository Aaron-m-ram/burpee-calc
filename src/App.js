import Button from "./components/Button";
import Dropdown from "./components/Dropdown"
import LabelInput from "./components/Label+Input";

function handleClick(){
  console.log("hello");
}

function App() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <h1>Burpee Calc</h1>

      <Dropdown value="male" value2="female"/>
      <LabelInput name="Age"/>
      <LabelInput name="Burpee"/>
      <Button label= "Click Me" onClick= {handleClick}/>

    </div>
  );
}

export default App;
