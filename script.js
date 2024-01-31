// const fetchMe = async() =>{
//     let url ='https://jsonplaceholder.typicode.com/users'
//     fetch (url)
//     let response = await fetch (url)
//     let convertedResponse = await response.json()
//     console.log(convertedResponse);
//         convertedResponse.map((reply) => {
//             console.log(reply);
//         })  
// } 


// const fetchMe = () =>{
//     let url ='https://musicapi-19wk.onrender.com/music/myAPI'
//     fetch(url).then(response => response.json())
//     .then((convertedResponse) => {
//         console.log(convertedResponse);
//         convertedResponse.map((user) => {
//             show.innerHTML +=`
//             <h3>${user.artistName}</h3>
//             <p>${user.songTitle}</p>
//             <img src='${user.songImage}' alt='image' width='300' /> </audio><br>
//             <audio src='${user.songUrl}' controls>
            
//             `
//         })
        
//     })
// } 
const fetchMe = () =>{
    let url ='https://musicapi-19wk.onrender.com/music/myAPI'
    fetch(url).then(response => response.json())
    .then((convertedResponse) => {
        console.log(convertedResponse);
        convertedResponse.map((user) => {
            show.innerHTML +=`
            <div class="col-3 shadow-sm">
            <h3>${user.artistName}</h3>
            <p>${user.songTitle}</p>
            <img src='${user.songImage}' alt='image' width='300' /> </audio><br>
            <audio src='${user.songUrl}' controls>
            </div>
            `
        })
        
    })
} 

