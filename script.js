const bodyDex = document.getElementById('dexDiv')
const button = document.getElementById('btn')
const list = document.getElementById('list')

async function getAPI(number){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
    if(res.status === 200){
        const data = await res.json()
        if(data){
            ///console.log(data)
            return data
        }
    }
}

async function createDex(type){
    for(let i=1; i<152; i++){
        const pkmn = await getAPI(`${i}`)
        if(pkmn['types']['0']['type']['name']==type || type == 'all'){
            const cardPkmn = document.createElement('div')
            cardPkmn.setAttribute('class', 'cardPkmn')
            const namePkmn = document.createElement('p')
            namePkmn.setAttribute('class', 'namePkmn')
            namePkmn.innerText = pkmn.name
            const picPkmn = document.createElement('img')
            picPkmn.setAttribute('src', pkmn.sprites['versions']['generation-v']['black-white']['animated']['front_default'])
            cardPkmn.appendChild(picPkmn)
            cardPkmn.appendChild(namePkmn)
            bodyDex.appendChild(cardPkmn)
        }
    }
}

button.addEventListener('click', function(){
    const childDivs = document.getElementsByClassName('cardPkmn')
    childsLen = childDivs.length
    console.log(childDivs.length)
    for(let i = 0; i<childsLen; i++){
        bodyDex.removeChild(childDivs[0])
    }
    createDex(`${list.value}`)

})
createDex('all')