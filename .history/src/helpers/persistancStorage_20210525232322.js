export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  }catch(e) {
     console.log('Error getting data from localstorage', e)
     return null
  }
}

export const setItem (key) => {
    try {
        
      }catch(e) {
         console.log('Error getting data from localstorage', e)
         return null
      }
}