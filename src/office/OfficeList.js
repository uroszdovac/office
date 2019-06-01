import React from 'react';
import OfficeListItem from './OfficeListItem';
import OfficeGridItem from './OfficeGridItem';
import {Link}  from 'react-router-dom'

const OfficeList = (props) =>{

      
  
    
    

    
        return(
            <div className='officesDiv'>
                {props.officesData.map((officeData, i) =>{
                    return <Link to={`singleOffice/${i}`} key={i} >
                    { (props.isListView) ? <OfficeListItem officeData={officeData} key={i}/> : <OfficeGridItem officeData={officeData} key={i}  />}
                    </Link>
                })}
            </div>
        )
    
        
    
}

export default OfficeList;