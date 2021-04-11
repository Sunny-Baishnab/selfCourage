const url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=47173ddcf17643aa8736046066144a0b'
export async function getnews(){
    let result = await fetch(url)
    .then(response=>{
        response.json()
    })
    console.log(result)
    return result.articles 
} 