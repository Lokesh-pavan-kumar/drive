import "./styles/Header.css"
import arrow from "../assets/arrow_up.png"

const Header = (props) => {
    // const root = props.root
    const setRoot = props.setRoot
    const history = props.history
    // const setHistory = props.setHistory

    const handleClick = () => {
        if (history.length >= 2) {
            setRoot(history[history.length - 2])
            history.pop()
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