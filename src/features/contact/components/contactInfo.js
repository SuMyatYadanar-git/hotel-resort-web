import React from 'react'
import {withMedia} from 'react-media-query-hoc'

import {fsc} from '../../../helper/fontControlHelper'

const ContactInfo = props => {
    const {media}=props
    return (
        <div className=''>
            <div style={{fontWeight:'bold',fontSize:fsc(media,35)}} className="py-2"> CONTACT</div>
            <div className='py-2 text-justify'>
                <p style={{lineHeight:'25px', }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </p>
        </div> 
            <div className="py-3" style={{lineHeight:'30px'}}>
                    <div>
                         <span style={{fontSize:'20px', color:'#C1881B'}}><i className='fa fa-map-marker' /></span>
                        <span className="px-3">121 King Str, Melbourne Victoria </span>
                    </div>
                    <div>
                        <span style={{fontSize:'20px', color:'#C1881B'}}> <i className='fa fa-phone' /></span>
                        <span className="px-3">1-548-854-8898 </span>
                    </div>
                    <div>
                        <span style={{fontSize:'20px', color:'#C1881B'}}><i className='fa fa-envelope' /></span>
                        <span className="px-3">hello@sonorahotel.com </span>
                    </div>
         </div>
              
        </div>
    )
}
export default withMedia(ContactInfo)