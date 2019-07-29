  import React from 'react'
           
function PageLoader() {
    return (
        <div
        className="spinner-border text-info"
        role="status"
        style={{
            position: "fixed",
            top: "50%",
            bottom: "50%"
        }}
        >
        <span className="sr-only">Loading...</span>
    </div>
    )
}
            
 export default PageLoader;          
           
         
           
           