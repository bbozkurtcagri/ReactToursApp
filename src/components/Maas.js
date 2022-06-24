import React, { useContext } from 'react'
import { isciContext } from '../App'


const Maas = () => {

    let context = useContext(isciContext);

  return (
    <div>Maas context
        <h5>{`Merhaba ${context.kimlik}`}</h5>
        <br />
        <h5>Isçi no: {context.id}</h5>
        <br />
        <h5>Isçi maaşı: {context.maas}</h5>
        <br />

    
    </div>
  )
}

export default Maas;