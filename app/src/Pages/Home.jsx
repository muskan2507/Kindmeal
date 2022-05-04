import React from 'react'
import Sliding from '../components/Sliding'
import Home3 from '../components/Home3'
import Listhead from '../components/Home0'
import Listhead2 from '../components/Home1'
import Listhead1 from '../components/Home0.1'
import Listhead3 from '../components/Home2'

function Home() {
  return (
    <div>
        <Sliding/>
        <Listhead/>
        <Listhead1/>
        <Listhead2/>
        <Listhead3/>
        <Home3/>
    </div>
  )
}

export default Home