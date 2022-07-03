const ReducerName=(state=[],action)=>
{
    if(action.type==='getName')
    {
        return state=action.payload;
    }
    else{
    return state;
    }
}

export default ReducerName;