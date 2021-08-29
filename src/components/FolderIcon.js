import { Fragment, useState } from "react"
import folder from "../assets/folder.png"
import "./styles/Icon.css"
import close from "../assets/close.png"
import Modal from 'react-modal';

const FolderIcon = (props) => {
    const data = props.data
    const root = props.root
    const setRoot = props.setRoot

    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState('')

    const handleDelete = () => {
        delete root[data]
        setRoot({...root})
    }

    const handleRename = () => {
        setIsOpen(true)
    }

    const handleChange = (event) => setName(event.target.value)

    const handleSubmit = () => {
        root[name] = root[data]
        delete root[data]
        setRoot({...root})
        setIsOpen(false)
    }


    return (
        <Fragment>
            <div className="icon">
                <img src={folder} alt="a folder" />
                <p>{data}</p>
                <div className="button" role="button" onClick={handleRename}>Rename</div>
                <div className="button" role="button" onClick={handleDelete}>Delete</div>
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

export default FolderIcon;
