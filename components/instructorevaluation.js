app.component('instructorevaluation',{
    template: 
    /*html*/
    `
    <div> </div> 
    <slider></slider>
    {{test}}
    
    `,
    data(){
        return{
            test: "hellooooo!!! this student",
            data: {
                moredata: "S"
            }

        }
    }, 
    method:{
        methodname(){

        }
    }

})