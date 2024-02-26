const fs = require('node:fs')
const hashToComma = require ("./hashToComma")

const argv = process.argv
function main(){
    if(!process.argv[2]){
        console.error("\x1b[41m","ERROR:","\x1b[0m","\x1b[91m", "Missing arguments","\x1b[0m")
        console.log("run: "+"\x1b[1;32m"+"convert --help"+"\x1b[0m"+"  to know how to use")
        return
    }

    if(argv[2] === "--help" || argv[2] === "-h"){
        console.log("  ","\x1b[7;32m","USAGE:","\x1b[0m",
        "\x1b[0;3m","convert [mode] [string/input_file] [output_file]","\x1b[0m")
        console.log("\n   \x1b[1;7;33m","MODES","\x1b[0m")
        console.log("     --inline or -i","      \n\x1b[0;7;33m" ,
        "inline converting, read a tags' string like \"#tag1 #tag2 #tag3\" and outputs result on console and optionaly on [output_file] if given","\x1b[0m")
        console.log
        console.log("     --file or -f","      \n\x1b[0;7;33m" ,
        " file converting, reads [input_file] and outputs result on console and optionaly on [output_file] if given")
        console.log("\n\x1b[1;33m","EXAMPLES","\x1b[0m")
        console.log("input: ","   \x1b[1;35m","convert -s \"#cool #social #media #tags\"","\x1b[0m")
        console.log("output: ","   \x1b[1;35m","cool, social, media, tags","\x1b[0m\n")
        
        console.log("input: ","   \x1b[1;35m","convert -f my_tags.txt tags_in_comma.txt","\x1b[0m")
        console.log("output: ","   \x1b[1;35m", "|| Check tags_in_comma.txt file ||\n","\x1b[0m")
        console.log("\x1b[6;1;102m","result:","\x1b[0m")
        console.log("            tag1, tag2, tag3, tag4","\x1b[0m")
        


    }else if(argv[2] === "-i" || argv[2] === "--inline"){
        const result = hashToComma(argv[3])
        if(argv[4]){
            createOutputFile(argv[4], result)
        }
        console.log("\x1b[6;1;102m","result:","\x1b[0m")
        console.log(result)    
    }else if(argv[2] === "-f" || argv[2] === "--file"){
        const path = argv[3]
        const tagsString = readFileAsString(path)
        const result = hashToComma(tagsString)
        if(argv[4]){
            createOutputFile(argv[4], result)
        }
        console.log("\x1b[6;1;102m","result:","\x1b[0m")
        console.log(result)
    }else{
        let err = argv[2].charAt(0) === "-" ? "Invalid" : "Missing"
        console.error("\x1b[41m","ERROR:","\x1b[0m","\x1b[91m", err, " MODE","\x1b[0m")
        console.log("run: "+"\x1b[1;32m"+"convert --help"+"\x1b[0m"+"  to know how to use")
    }
    
}

function readFileAsString(filePath){
        try {
            const data = fs.readFileSync(filePath, 'utf8')
            return data       
        }catch(err){
            console.error("\x1b[41m","ERROR:","\x1b[0m","\x1b[91m",err,"\x1b[0m")
            return
        }        
}

function createOutputFile(filePath, content){
    try {
        fs.writeFileSync(filePath, content)
        console.log("|| Check "+filePath+" file ||")
    }
    catch(err){console.error("\x1b[41m","ERROR:","\x1b[0m","\x1b[91m",err,"\x1b[0m")}
}
main()
