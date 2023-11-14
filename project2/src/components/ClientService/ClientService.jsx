import './styles/Styles.css'
import ClientServiceItem from './ClientServiceItem'
import { serviceData } from '../../data/serviceData'

// const cases = { backgroundImage:`url(${casesfoto})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }



export default function ClientService() {
 
    const ListOfService = serviceData.map((item)=>{

        return <ClientServiceItem key={item.uid} src={item.src} alt={item.alt}  hederText={item.hederText}/>
        
    })

    return <section className='clientService' >
                {ListOfService}
    </section>
}
