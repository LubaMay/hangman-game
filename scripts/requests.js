const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
 } 

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}


const getCountry = async (countryCode) => {
    const response = await fetch(`//restcountries.eu/rest/v2/all`)

        if(response.status === 200) {
            const data = await response.json()
            return data.find((country) => {
                if(country.alpha2Code === countryCode) {
                    return country
                } 
            })    
        } else {
            throw new Error('Unable to fetch the country')
        }
}



const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=904ff583bbb6a1')
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch location')
        } 
    }


    // const getCosmosPeople = async () => {
    //     let response = await fetch('http://api.open-notify.org/astros.json')
    //     if(response.status === 200) {
    //         const data = await response.json()
    //         return data
    //         console.log('Data', data)
    //     }else {
    //         throw new Error('Unable to fetch cosmonauts')
    //     }
    // }
    
