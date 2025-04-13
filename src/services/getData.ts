async function getData() {
    return fetch("https://www.amiiboapi.com/api/amiibo")
    .then(function (response) {
        return response.json()
    })
    .catch(function (error) {
        console.log("There's a problem with the fetch request... :( " + error.message);
});
} 


export default getData