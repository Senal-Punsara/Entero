import React from 'react'
import ServiceProviderHeader from '../../../components/header/ServiceProviderHeader';
import ServiceProviderSidebar from '../../../components/sidebar/ServiceProviderSidebar';

function ServiceproviderRatings() {
  return (
    <div>
      <ServiceProviderHeader />
      <div className="flex">
        
        <ServiceProviderSidebar />
        <div className="md:ml-[17%] lg:ml-[13%] xl:ml-[11%] 2xl:ml-[9%] md:mt-14 w-screen">
            
          <p>This is service ratings</p>
          
          </div>
      </div>
      
    </div>
  )
}

export default ServiceproviderRatings