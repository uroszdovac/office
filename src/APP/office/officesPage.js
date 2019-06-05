import React from 'react';
import './officesPage.scss'
import OfficeListItem from './officeListItem';
import OfficeGridItem from './officeGridItem';
import MapPage from './MapPage';

const OfficesPage = (props) =>{
    
    const officesDivClass = (props.view === 'list') ? 'officesDiv' : 'officesDivGrid'
    
        return(

            <div className={officesDivClass}>
                {(props.view == 'list' || props.view == 'grid') ? ((props.view == 'list') ? props.officesData.map((office, i) =>{return <OfficeListItem key={i} officeData={office}/>}) : props.officesData.map((office, i) =>{
                        return <OfficeGridItem  key={i} officeData={office}/>
                    })
                ) : <MapPage/>}
                
                
            </div>
        )
    
        
    
}

export default OfficesPage;