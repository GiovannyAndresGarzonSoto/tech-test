
const isPolyndrome = (text) => {
    const reversed = []
    for(let i = text.length -1; i >= 0; i--) {
        reversed.push(text[i])
    }
    
    finalText = ""
    for(let i = 0; i < reversed.length; i++) {
        finalText += reversed[i]
    }

    console.log('text:', text)
    console.log('reversed:', finalText)
    finalText === text ? console.log(true) : console.log(false)
}

isPolyndrome('alala')