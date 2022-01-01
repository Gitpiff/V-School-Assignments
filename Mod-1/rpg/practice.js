const wordlist = ["APPLE", "PLEAS", "PLEASE"];


const keypads = ["AELWXYZ","AELPXYZ","AELPSXY","SAELPRT","XAEBKSY"];


function numKeypadSolutions(wordlist, keypads) {
   
        const salida = keypads.map(pad => {
        const map = {};
        pad.split("").forEach(char => map[char] = true);
        const key = pad[0];
        
        let result = 0;

        wordlist.filter(word => word.includes(key))
        .forEach(word => {
            const foundLetters = 
            word.split("").reduce((acc, char) => acc + (map[char] ? 1 : 0), 0);

            if(foundLetters === word.length) {
                result ++;
            }
        });return result;
    }); 
    
}

console.log(numKeypadSolutions(["APPLE", "PLEAS", "PLEASE"],["AELWXYZ","AELPXYZ","AELPSXY","SAELPRT","XAEBKSY"] ))