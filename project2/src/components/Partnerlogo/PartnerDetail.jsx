import { useState } from "react";
import { useParams } from "react-router-dom"

export default function PartnerDetail(){

    const [partner, setPartner] = useState();
    
    const params = useParams(); //auslesen der URL Parameter => :partnerId
    fetch(`https://www.partnerjson.com/api?query=${params.partnerId}`)
    .then(response => response.json())
    .then(data => setPartner(data))
    
    console.log("param", params)
    return <h1>Infos zu Partner {params.partnerId}</h1>
}