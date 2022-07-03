const ReducerBook=(state="",action)=>
{
    if(action.type==='withdrawal')
    {
        return state=action.payload;
    }
    else{
    return state;
    }
}

export default ReducerBook;