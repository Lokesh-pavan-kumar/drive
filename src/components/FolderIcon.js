import { Fragment, useState } from "react"
import folder from "../assets/folder.png"
import close from "../assets/close.png"
import Modal from 'react-modal';
import "./styles/Icon.css"

const FolderIcon = (props) => {
    const data = props.data
    const root = props.root
    
    const count = props.count
    const setCount = props.setCount

    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState(data)

    const handleDelete = () => {
        delete root[data]
        setCount(count + 1)
    }

    const handleRename = () => {
        setIsOpen(true)
    }

    const handleChange = (event) => setName(event.target.value)

    const handleSubmit = () => {
        root[name] = root[data]
        delete root[data]
        setCount(count + 1)
        setIsOpen(false)
    }

    return (
        <Fragment>
            <div className="icon">
                <img src={folder} alt="a folder" />
                <p>{data}</p>
                <div className="button renameButton" role="button" onClick={handleRename}>Rename</div>
                <div className="button deleteButton" role="button" onClick={handleDelete}>Delete</div>
            </div>
            {
                <Modal className="modal" isOpen = {isOpen} ariaHideApp={false}> 
                    <button className="closeIcon" onClick={() => {setIsOpen(false)}}>
                        <img src={close} alt="close button" />
                    </button>

                    <p>Rename</p>

                    <input value={data} type="text" onChange={event => handleChange(event)} />
                    <input id="renameButton" type="submit" onClick={handleSubmit} value="Rename"/>
                </Modal>                
            }
        </Fragment> 
    );
}

export default FolderIcon;
