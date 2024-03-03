import { useRef } from "react"

import Button from "./components/Button"
import Input from "./components/Input"

function App() {

  const inputRef = useRef(null)
  
  return (
    <>
      <Input label="Nom" type="text" placeholder="Enter your name" isRequired={true} ref={inputRef} />

      <hr />
      <Button text="Click me" type="button" background="bg-blue-800" textColor="text-white" />
    </>
  )
}

export default App
