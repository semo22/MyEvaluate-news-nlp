import {checkForUrl} from './URLChecker'

const postData = async ( url = '', data = {})=>{
      const response = await fetch(url, {
         method: 'POST', 
         credentials: 'same-origin',
         headers: {
          'Content-Type': 'application/json',
        },
         body: JSON.stringify(data), 
    });
      try {
        const newData = await response.json();
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }
  function handleSubmit(event) {
    event.preventDefault()
    let url = document.getElementById('name').value
   if(checkForUrl(url)){
       postData("http://localhost:8081/addUrl",{url}).then(data=>{
           updatUI(data)
        console.log("data from server", data)
    })
   }
    else{
      alert("Invalied URL")
      document.getElementById('name').value = ''
    }
  
}
const updatUI = (data)=>{
    document.getElementById('subjectivity').innerHTML = `Subjectivity:   ${data.subjectivity.toLowerCase()}`
    document.getElementById('agreement').innerHTML = `Agreement:   ${data.agreement.toLowerCase()} `
    document.getElementById('confidence').innerHTML =`Confidence:   ${data.confidence}`
    document.getElementById('irony').innerHTML =`Irony:   ${data.irony.toLowerCase()}`
}

export { handleSubmit }
