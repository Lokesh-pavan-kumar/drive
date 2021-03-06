// this renders and has all the operations for the files
// delete and rename
// can be made more modular

import { Fragment, useEffect, useState } from "react"
import file from "../assets/file.png"
import close from "../assets/close.png"
import Modal from 'react-modal';
import "./styles/Icon.css"
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const FileIcon = (props) => {
    const data = props.data
    const root = props.root

    //for force rendering (count and setCount)
    const count = props.count
    const setCount = props.setCount 

    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState(data) // temporary for the rename functionality

    const [error, setError] = useState('') // stores the error, is displayed if an error occurs (custom)

    const handleDelete = () => {
        let index = root.files.indexOf(data)
        root.files.splice(index, 1)
        setCount(count + 1)
    }

    // used for error checking in the rename functionality
    useEffect(() => {
        if (name.length > 0) {
            if (root['files'].includes(name)) {
                setError('file name exists')
            }
            else {
                setError('')
            }
        }
        else {
            setError('enter a name')
        }
    }, [name, root])

    const handleRename = () => {
        setIsOpen(true) // opens the modal 
        setError('') // the error is set to an empty string, previous error is removed
    }

    const handleChange = (event) => setName(event.target.value)

    const handleSubmit = () => {
        handleDelete()
        root.files.push(name)
        setCount(count + 1)
        setIsOpen(false)
    }

    let extension = null // the extension of the file is stores in this

    if (data.match(/\.[0-9a-z]+$/i)) {
        extension = data.match(/\.[0-9a-z]+$/i)[0]
    }
    else {
        extension = "."
    }

    return (  
        <Fragment>
            <ContextMenuTrigger id={data}>
                <div className="icon">
                    <img className="fileImage" src={file} alt="a file" />
                    <div className="bottomLeft">
                        {extension}
                    </div>
                    <p>{data}</p>
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

export default FileIcon;
