import { useState } from "react";
import add_new_button from "../assets/add_new_button.png"
import close from "../assets/close.png"
import Modal from 'react-modal';
import "./styles/Manager.css"

const Create = (props) => {
    
    const root = props.root
    const setRoot = props.setRoot
    // const history = props.history
    // const setHistory = props.setHistory

    const [isOpen, setIsOpen] = useState(false) // the status of the modal
    const [name, setName] = useState('')
    const [createFolder, setCreateFolder] = useState(true)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = () => {
        if (createFolder) {
            // history[history.length - 1][name] = {files:[]}
            root[name] = {files:[]}
            // history[history.length - 1] = root
            // setHistory([...history])  
        }
        else {
            root["files"].push(name)          
        }
        setRoot({...root})
        setIsOpen(false)
    }

    return (
        <div>
            <button onClick={openModal}>
                <div className="icon">
                    <img src={add_new_button} alt="add new" />
                </div>
            </button>
            
            <Modal className="modal" isOpen = {isOpen} ariaHideApp={false}> 
                <button onClick={closeModal}>
                    <img src={close} alt="close button" />
                </button>
                <p>Create New</p>

                <div>
                    <button onClick={() => setCreateFolder(false)}>File</button>
                    <button onClick={() => setCreateFolder(true)}>Folder</button>
                </div>

                <input type="text" onChange={event => handleChange(event)} />
                <input type="submit" onClick={handleSubmit}/>
            </Modal>
        </div>
    );
}

export default Create;
