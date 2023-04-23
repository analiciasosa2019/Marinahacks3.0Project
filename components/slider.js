app.component('slider',{
    template: 
    /*html*/
    `
    <div class = "slider"> 
        <label :for = "name"> {{label}}</label>
        <input type = "range" : id = "name" v-model="value" :min="min" :max="max"> 
    </div> 

    {{test}}
    
    `,
    props: {
        name : {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        value: {
            type: Number,
            required: true,
        },
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 100,
        }
    },
    data(){
        return{
            test: "slider"
        }
    }, 
    method:{
        methodname(){

        }
    }

})