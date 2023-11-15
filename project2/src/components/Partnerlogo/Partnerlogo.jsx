import { Link } from "react-router-dom"

export default function Partnerlogo(){
/**
 * Aufgabe:
 * 1. Partnerlogos auflisten => cards oder in kacheln
 * 2. jeder partner ist mit einem LINK verlinkt
 */
    return (

        <section>
       <div>
        <h1><Link to="/partner/1">Partner 1</Link></h1>
         <h1><Link to="/partner/2">Partner 2</Link></h1>
       </div>
        </section>
    )
}