export  const SearchData=(data)=>{
  return (dispatch)=>{
     dispatch({
       type:'deposit',
       payload:data
     })
  }
}

export  const SaveData=(amount)=>{
  return (dispatch)=>{
    dispatch({
      type:'withdrawal',
      payload:amount
    })
 }
}

export const RegistrationData=(name,email,password)=>{
  return(dispatch)=>{
    dispatch({
      type:'registration',
      payload:{name,email,password}
    })
  }
}


export const UserData=(name)=>{
  return(dispatch)=>{
    dispatch({
      type:'getName',
      payload:name
    })
  }
}


