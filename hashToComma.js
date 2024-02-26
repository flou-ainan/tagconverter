// converts a hashtags list into a comma tags list
// example:
// "#002 #CRUD #mernstack #MERN #nodejs #restapi #devlog #mongodb"
// turns into
// "002, CRUD, mernstack, MERN, nodejs, restapi, devlog, mongodb"

function hashToComma(tags){
    let result = tags.split("#") 
    // splits the string on # and put each tag as an element on an array
    // of tg strings
    
    result = result.filter(tag => tag !== "")
    // filter empty tags (first array element is usually empty)
    
    result = result.map(tag => tag.trim())
    //removes white spaces on the tags surroundings
    //(usually it have whitespaces after tagnames)

    result = result.join(", ")
    // join tags appending ", " in the end of every tag on a string of tags.
    
    return(result)
    // we could simply write
    // tags.split("#").filter(tag=>tag!=='').map(tag=>tag.trim()).join(", ")
}

module.exports = hashToComma

