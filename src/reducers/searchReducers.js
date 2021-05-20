const searchResult = []

const searchReducers=(state=searchResult,action)=>{
    switch(action.type){
        case "SEARCH":{
            return [...action.payload]
        }
        default:{
            return state
        }
    }
}
export default searchReducers