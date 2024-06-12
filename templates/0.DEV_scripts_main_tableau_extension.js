'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(
 
 function () {

    document.addEventListener('DOMContentLoaded', ()=>{
        tableau.extensions.initializeAsync().then(function () {
          const worksheets = tableau.extensions.dashboardContent.dashboard.worksheets;

          // Find summary_table worksheet
          const worksheet = worksheets.find(function (sheet) {
            return sheet.name === "summary_table";
          });
          }
           , function (err) {
            // Something went wrong in initialization.
            console.log('Error while Initializing: ' + err.toString());
          });
    
          console.log(worksheet.name)  
        });
}

)();
