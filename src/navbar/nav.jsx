import { Link } from "react-router-dom"
import './nav.css'

export default function Nav () {
    return (
    <>
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
        
    </div>
    </>
    )
}