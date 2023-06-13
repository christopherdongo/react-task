

export const updateFunction = async ({id, newStatus}: {id: string | undefined, newStatus: string}) => {

    const options = {
        method: 'POST',
        headers: {
         "Content-Type": "application/json",
         "Accept": "applications/json"
        },
        body:JSON.stringify({
         data:{
           id,
           status:newStatus,
         }
        })

     }
    
    try {

    const result = await fetch(`${process.env.REACT_APP_URL_FUNCTION}`,options);

    console.log(result)
    
}catch (err){
      console.log(err)
    }
}