import { useRef } from "react";

import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
// import Modal from "./components/Modal";

function App() {

  const inputRef = useRef(null)
  
  return (
    <>
      <Input 
        label="Nom" 
        type="text" 
        placeholder="Enter your name" 
        isRequired={true} 
        ref={inputRef}
        defaultValue="John Doe"
      />

      <hr />
      <Button 
        text="Click me"
        type="button" 
        background="bg-blue-800" 
        textColor="text-white" 
      />

      <hr />
      <Card 
        title="Sunset in the mountains" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel libero ut nunc placerat lacinia." 
        image="https://source.unsplash.com/random/400x200" 
        alt="Sunset in the mountains"
      />

      <hr />
      {/* <Modal 
        isOpen={true} 
        onClose={() => console.log('close')} 
        title="Modal title"
      /> */}
      
    </>
  )
}

export default App;
