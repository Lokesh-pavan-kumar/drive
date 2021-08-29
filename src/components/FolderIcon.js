import { Fragment, useEffect, useState } from "react"
import folder from "../assets/folder.png"
import close from "../assets/close.png"
import Modal from 'react-modal';
import "./styles/Icon.css"
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";


const FolderIcon = (props) => {
    const data = props.data
    const root = props.root

    const count = props.count
    const setCount = props.setCount

    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState(data)

    const [error, setError] = useState('')

    useEffect(() => {
        if (name.length > 0) {
            if (root.hasOwnProperty(name)){
                setError("folder name exists")
            }
            else {
                setError('')
            }
        }
        else {
            setError('enter a name')
        }
    }, [name, root])

    const handleDelete = () => {
        delete root[data]
        setCount(count + 1)
    }

    const handleRename = () => {
        setIsOpen(true)
        setError('')
    }

    const handleChange = (event) => setName(event.target.value)

    const handleSubmit = () => {
        let temp = root[data]
        delete root[data]
        root[name] = temp
        setCount(count + 1)
        setIsOpen(false)
    }

    return (
        <Fragment>
            <ContextMenuTrigger id={data}>
                <div className="icon">
                    <img src={folder} alt="a folder" />
                    <p>{data}</p>
                    {/* <div className="button renameButton" role="button" onClick={handleRename}>Rename</div>
                    <div className="button deleteButton" role="button" onClick={handleDelete}>Delete</div> */}
                </div>
            </ContextMenuTrigger>

            <ContextMenu className="contextMenu" id={data}>
                <MenuItem className="menuItem" onClick={handleRename}>
                    Rename
                </MenuItem>
                <MenuItem className="menuItem deleteMenuItem" onClick={handleDelete}>
                    Delete
                </MenuItem>
            </ContextMenu>


            {
                <Modal className="modal" isOpen = {isOpen} ariaHideApp={false}> 
                    <button className="closeIcon" onClick={() => {setIsOpen(false)}}>
                        <img src={close} alt="close button" />
                    </button>

                    <p>Rename</p>

                    <input value={name} type="text" onChange={event => handleChange(event)} />

                    {
                        (error.length > 0) ? 
                            <p className="errorMessage">{error}</p> 
                        :
                        <input id="renameButton" type="submit" onClick={handleSubmit} value="Rename"/> 
                    }
                </Modal>                
            }
        </Fragment> 
    );
}

export default FolderIcon;
