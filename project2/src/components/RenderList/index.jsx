export default function RenderList(){

{/**meist von einer datenbank */}
    const personen = [
        {name: "Peter"},
        {name: "Marwa"},
        {name: "Klaus"}
    ]

    console.log("vor dem map",personen)

const PersonenListe = personen.map((person)=> {

 return <li>{person.name}</li>

})

console.log("nach dem map",PersonenListe)


    return(
        <section>
                <h3>List</h3>
            <ul>
                    {PersonenListe}
            </ul>


        </section>


    )
}