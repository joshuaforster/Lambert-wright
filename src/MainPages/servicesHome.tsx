import React from 'react'
import ServicesHead from '../PageComponents/Services/servicesHead'
import ServicesSection from '../PageComponents/Services/servicesSection'
import HeaderSection from '../CustomComponents/headerSection'

export default function ServicesHome(){
    return(
        <div>
            <HeaderSection image='images/projectVI/Bumblebee%20Cottage,%20Main%20Street,%20Burton%20Overy-2.jpg' title="Services"/>
            <ServicesHead/>
            <ServicesSection/>
        </div>
    )
}