export default function ClientServiceItem(props) {

    console.log("props", props);



    return (

        <div className='case'>
            <img className="bild" src={props.src} alt={props.alt} width='100%' height='100%' />
            <div className="cardBottum" >
                <div className="titleSection">
                    <div className="cardTitle" >

                        {props.hederText}

                    </div>
                    <div className="caseButton" >
                        
                    </div>
                </div>
            </div>
        </div>



    )


}