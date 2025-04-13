async function getDetail(id:any) {
    return fetch(`https://www.amiiboapi.com/api/amiibo/?id=${id}`)
    .then(function (response) {
        console.log(response)
        return response.json()
    })
    .catch(function (error) {
        console.log("There's a problem with the fetch request... :( " + error.message);
});
} 


export default getDetail