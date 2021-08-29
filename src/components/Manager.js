import { Fragment } from "react";
import FolderIcon from "./FolderIcon.js";
import "./styles/Manager.css"
import FileIcon from "./FileIcon.js";
import Create from "./Create.js";

const Manager = (props) => {
    const root = props.root
    const setRoot = props.setRoot
    const history = props.history
    const setHistory = props.setHistory

    const handleClick = (item) => {
        setRoot(root[item])
        history.push(root[item])
    }

    return (
        <div className="allFiles">
            {Object.keys(root).map(function(item) {

                if (Array.isArray(root[item])){
                    return (
                        <Fragment>
                            {
                                root[item].map((file) => <FileIcon data={file} root={root} setRoot={setRoot}/>)
                            }
                        </Fragment>
                    )
                }                
                else {
                    return (
                        <button onDoubleClick={() => handleClick(item)}>
                            <FolderIcon data={item} root={root} setRoot={setRoot}/>
                        </button>
                    );
                }
            })}

            <Create root={root} setRoot={setRoot} history={history} setHistory={setHistory}/>
        </div>
    );
}

export default Manager;
