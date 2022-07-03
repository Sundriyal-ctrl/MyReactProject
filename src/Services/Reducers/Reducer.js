
const Reducer=(state="",action)=>{
   if(action.type==='deposit')
   {
       return state=action.payload;
   }
  
   else
   {
       return state;
   }

}

export default Reducer;