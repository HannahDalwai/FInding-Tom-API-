fetch("https://randomuser.me/api/?results=100")
  .then(res => {
      if (res.ok){
          console.log("successful")
      } else {
          console.log("not successful")
      }
      res.json()

  })
  .then(data => console.log(data))
  .catch(error => console.log ('error'))