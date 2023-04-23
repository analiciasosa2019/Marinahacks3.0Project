app.component('root',{
    template: 
    /*html*/
    `
    <navBar></navBar>
    <div v-show = "page == 'summary'" > <summary></summary> </div> 
    <div v-show = "page == 'instructorevaluation'"> <instructorevaluation></instructorevaluation></div> 
    <div v-show = "page == 'lessonchat'"> <lessonchat></lessonchat> </div> 
    <div v-show = "page == 'testMI'"><testMI></testMI></div> 
    <div v-show = "page == 'testTeam'"><testTeam></testTeam></div> 
   
   

    `,
    data(){
        return{
            page: "summary"
        }
    }, 
    method:{
        
    }

})