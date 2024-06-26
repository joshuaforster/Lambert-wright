import React from 'react'
import ServicesHead from '../PageComponents/servicesHead'
import ServicesSection from '../PageComponents/servicesSection'
import HeaderSection from '../CustomComponents/headerSection'

export default function ServicesHome(){
    return(
        <div>
            <HeaderSection image='images/project4/w3.jpg' title="Services"/>
            <ServicesHead/>
            <ServicesSection/>
        </div>
    )
}