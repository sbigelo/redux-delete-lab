import React from 'react'
import Band from './Band'

const Bands = props => {
    const bandsi = props.bands.map(band => <Band key={band.id} {...band} deleteBand={props.deleteBand}/>)
    
    return(
        <div>
            {bandsi}
        </div>
    )
}

export default Bands;