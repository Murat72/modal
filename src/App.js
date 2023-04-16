import './index.scss';
import {useState} from "react";
import Modal from "./components/Modal";
function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
        <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
        <Modal open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
