const homeReducer =(state={},action)=>{
    switch (action.type) {
        case "GET_DATA":
            console.log("da ket noi")
        default:
            return state

    }
};
export default homeReducer;