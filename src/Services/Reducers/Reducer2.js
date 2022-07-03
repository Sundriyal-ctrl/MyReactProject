const Reducer2=(state=[],action)=>
{
    if(action.type==='registration')
    {
        return state=action.payload;
    }
    else{
    return state;
    }
}

export default Reducer2;