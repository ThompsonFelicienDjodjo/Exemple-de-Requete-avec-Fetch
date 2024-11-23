// Requete

let leBodyEnJavaScript = {
   title: "COUCOUC",
    body: "Me voici tout moillée j'ai subit un nuage",
    userId: 47
}

let lesHeaders ={
    'content-type': 'application/json',
}

let leBodyEnJSON = JSON.stringify(leBodyEnJavaScript)

// PUT

fetch('https://jsonplaceholder.typicode.com/posts/47',{
  method: 'put',
  body:   leBodyEnJSON,
    headers: lesHeaders,

})
    .then(res => res.json())
    .then(data => console.log(data))

//patching une resource

fetch('https://jsonplaceholder.typicode.com/posts/47',{
    method: 'PATCH',
    body: leBodyEnJSON,
    headers: lesHeaders,
})
    .then(res => res.json())
    .then(data => console.log(data))

//Delete une resource

fetch('https://jsonplaceholder.typicode.com/posts/47',{
    method: 'DELETE',
})
    .then(res => res.json())
    .then(data => console.log(data))

// Post

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: leBodyEnJSON,
    headers: lesHeaders,
})
    .then(res => res.json())
    .then(data => console.log(data))




/*const bouton = document.querySelector('.bouton')
function boutonbleu() {
    fetch('https://BLINKY.ESDLYON.DEV')
        .then(res => res.json())
        .then(data => console.log(data));
}
    bouton.addEventListener('click', boutonbleu)
*/

