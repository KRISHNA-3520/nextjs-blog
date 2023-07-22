const { useRouter } = require("next/router")

function Parameter(){
    const router=useRouter()
    const {params=[]}=router.query

    if(params.length===1){
        return <h1>Feature {params[0]}</h1>
    }
    else if(params.length===2){
        return <h1>Feature {params[0]} and Concept {params[1]}</h1>
    }
    else if(params.length===3){
        return <h1>Feature {params[0]} and Concept {params[1]} and Example {params[2]}</h1>
    }
    else{
        return<h1>Parameter Example</h1>
    }

}

export default Parameter