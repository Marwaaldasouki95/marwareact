import { useState } from 'react'
import '../App.css'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'
import Partnerlogo from './Partnerlogo/Partnerlogo'
import Digitalservice from './Digitalservice/Digitalservice'
import RenderList from './RenderList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <main>
        
        <h1> APP </h1>
       <Partnerlogo/>
        <Digitalservice />
        <RenderList/>

      </main>
      <Footer />
    </div>
  )
}

export default App
