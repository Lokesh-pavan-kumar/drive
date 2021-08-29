// this component has the html for all the files (file manager)

import { Fragment, useState } from "react";
import FolderIcon from "./FolderIcon.js";
import FileIcon from "./FileIcon.js";
import Create from "./Create.js";
import "./styles/Manager.css"

const Manager = (props) => {
    const root = props.root
    const setRoot = props.setRoot
    const history = props.history

    // count and refresh states are used for custom re-renders used for custom re-render
    // count also stores the total number of forced renders
    const [count, setCount] = useState(1) 
    const [refresh, setRefresh] = useState(1)

    const handleClick = (item) => {
        setRoot(root[item]) // this forces a render
        history.push(root[item]) // to track the path
    }

    return (
        <div className="allFiles">
            {
                refresh ? (
                    Object.keys(root).map(function(item) {

                        if (Array.isArray(root[item])){
                            return (
                                <Fragment>
                                    {
                                        root[item].map((file) => <FileIcon data={file} root={root} setRoot={setRoot} count={count} setCount={setCount}/>)
                                    }
                                </Fragment>
                            )
                        }                
                        else {
                            return (
                                <button onDoubleClick={() => handleClick(item)}>
                                    <FolderIcon data={item} root={root} setRoot={setRoot} count={count} setCount={setCount}/>
                                </button>
                            );
                        }
                    }
                )) : null
            }

            <Create root={root} setRoot={setRoot} count={count} setCount={setCount} refresh={refresh} setRefresh={setRefresh} />
        </div>
    );
}

export default Manager;
