import "./styles/Header.css"
import arrow from "../assets/arrow_up.png"

const Header = (props) => {
    const setRoot = props.setRoot
    const history = props.history

    const handleClick = () => {
        if (history.length >= 2) {
            setRoot(history[history.length - 2])
            history.pop()
        }
        else {
            alert("You are in the root directory, cannot go any further back.")
        }
    }

    return (
        <div className="header">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <button onClick={handleClick}>
                                <img src={arrow} alt="back button" />
                            </button>
                        </td>
                        <td>
                            <p>Online Drive</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr></hr>
        </div> 

    );
}

export default Header;