import { useEffect, useState } from "react";
import add_new_button from "../assets/add_new_button.png"
import close from "../assets/close.png"
import Modal from 'react-modal';
import "./styles/Manager.css"

const Create = (props) => {
    
    const root = props.root

    const count = props.count, setCount = props.setCount
    const refresh = props.refresh, setRefresh = props.setRefresh

    const [isOpen, setIsOpen] = useState(false) // the status of the modal
    const [name, setName] = useState('')
    const [createFolder, setCreateFolder] = useState(true)
    const [error, setError] = useState('')

    const openModal = () => {
        setIsOpen(true)
        setError('')
        setName('')
    }
    const closeModal = () => setIsOpen(false)

    const handleChange = (event) => {
        setName(event.target.value)
    }

    useEffect(() => {
        if (createFolder && root.hasOwnProperty(name)){
            setError("folder name exists")
        }
        else if (!createFolder && root['files'].includes(name)){
            setError("file name exists")
        }
        else {
            setError('')
        }
    }, [name, createFolder, root])

    useEffect(() => {
		if(refresh === 0){
			setRefresh(1);
		}
	}, [refresh, setRefresh])

    useEffect(() => {
        setRefresh(0)
    }, [count, setRefresh])
    
    const handleSubmit = () => {
        if (name.length > 0) {
            if (createFolder) {
                setCount(count+1)
                root[name] = {files:[]}
            }
            else {
                setCount(count+1)
                root["files"].push(name)          
            }
            setIsOpen(false)
        }
        else {
            setError("Enter a name")
        }
    }

    return (
        <div>
            <button onClick={openModal}>
                <div className="icon">
                    <img src={add_new_button} alt="add new" />
                </div>
            </button>
            
            <Modal className="modal" isOpen = {isOpen} ariaHideApp={false}> 
                <button className="closeIcon" onClick={closeModal}>
                    <img src={close} alt="close button" />
                </button>
                <p>Create New</p>

                {
                    createFolder ? (
                        <div className="options">
                            <button className="fileButton" onClick={() => setCreateFolder(false)}>File</button>
                            <button className="selected folderButton" onClick={() => setCreateFolder(true)}>Folder</button>
                        </div>
                    )
                    : (
                        <div className="options">
                            <button className="selected fileButton" onClick={() => setCreateFolder(false)}>File</button>
                            <button className="folderButton" onClick={() => setCreateFolder(true)}>Folder</button>
                        </div>                      
                    )
                }

                <input id="nameBox" type="text" placeholder="enter the name" onChange={event => handleChange(event)} />
                {
                    (error.length > 0) ? 
                        <p className="errorMessage">{error}</p> 
                    : 
                        <input id="createButton" type="submit" onClick={handleSubmit} value="Create"/> 
                }
            </Modal>
        </div>
    );
}

export default Create;
