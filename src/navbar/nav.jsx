import { Link } from "react-router-dom"
import './nav.css'

export default function Nav () {
    return (
    <>
    <div className="nav">
        <Link to="/react-course/">Home</Link>
        <Link to="/react-course/notes">Notes</Link>
        <Link to="/react-course/tic-tac-toe">Tic-Tac-Toe</Link>
        
    </div>
    </>
    )
}