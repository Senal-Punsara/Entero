import React from 'react';
import CustomerHeader from "../components/CustomerHeader";
import Footer from "../components/Footer"; 
import CustomerSidebar from "../components/CustomerSidebar"; 
import ReviewComponent from "../components/ReviewComponent"; 

{/*For after login customer pages use Customer Hedaer and customer sidebar */}

function UserPage() {
  return (
    <div>
      <CustomerHeader />
      <div className="flex">
        <CustomerSidebar />
        <ReviewComponent />
        
        {/* Body content comes here */}
      
      </div>
      <Footer />
    </div>
    
  )
}

export default UserPage