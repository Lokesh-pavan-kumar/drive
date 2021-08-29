import { Fragment, useState } from "react"
import file from "../assets/file.png"
import "./styles/Icon.css"
import close from "../assets/close.png"
import Modal from 'react-modal';

const FileIcon = (props) => {
    const data = props.data

    const root = props.root
    const setRoot = props.setRoot

    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState('')

    const handleDelete = () => {
        let index = root.files.indexOf(data)
        root.files.splice(index, 1)
        setRoot({...root})
    }

    const handleRename = () => setIsOpen(true)

    const handleChange = (event) => setName(event.target.value)

    const handleSubmit = () => {
        handleDelete()
        root.files.push(name)
        setRoot({...root})
        setIsOpen(false)
    }

    return (  
        <Fragment>
            <div className="icon">
                <img className="fileImage" src={file} alt="a file" />
                <p>{data}</p>
                <button onClick={handleRename}>Rename</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            {
                <Modal className="modal" isOpen = {isOpen} ariaHideApp={false}> 
                    <button onClick={() => {setIsOpen(false)}}>
                        <img src={close} alt="close button" />
                    </button>

                    <p>Rename</p>

                    <input type="text" onChange={event => handleChange(event)} />
                    <input type="submit" onClick={handleSubmit}/>
                </Modal>                
            }            
        </Fragment>
    );
}

export default FileIcon;