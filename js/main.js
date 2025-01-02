//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://rap-names-two-zaib.onrender.com/api/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.)
        document.querySelector("img").src = data.hdurl
        document.querySelector("h3").innerText = data.
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

