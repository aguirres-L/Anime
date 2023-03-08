



    let $name =""
async function ver(anime){

    try {
        let res = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}&sfw`),
            json = await res.json()
            console.log(json.data[0].title)  
            $name = json.data[0].title
    } catch (err) {
        console.log(err,'hola')
    }

}


export default $name 