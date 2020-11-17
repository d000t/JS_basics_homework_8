function decodeMorseCode(morseCodeStr){

        let morsecodeMap = new Map([
        ["-----", "0"],
        [".----", "1"],
        ["..---", "2"],
        ["...--", "3"],
        ["....-", "4"],
        [".....", "5"],
        ["-....", "6"],
        ["--...", "7"],
        ["---..", "8"],
        ["----.", "9"],
        [".-", "a"],
        ["-...", "b"],
        ["-.-.", "c"],
        ["-..", "d"],
        [".", "e"],
        ["..-.", "f,"],
        ["--.", "g"],
        ["....", "h"],
        ["..", "i"],
        [".---", "j"],
        ["-.-", "k"],
        [".-..", "l"],
        ["--", "m"],
        ["-.", "n"],
        ["---", "o"],
        [".--.", "p"],
        ["--.-", "q"],
        [".-.", "r"],
        ["...", "s"],
        ["-", "t"],
        ["..-", "u"],
        ["...-", "v"],
        [".--", " w"],
        ["-..-", "x"],
        ["-.--", "y"],
        ["--..", "z"],
        [".-.-.-", "."],
        ["--..--", ","],
        ["..--..", "?"],
        ["-.-.--", "!"],
        ["-....-", "-"],
        ["-..-.", "/"],
        [".--.-.", "@"],
        ["-.--." , "("],
        ["-.--.-", ")"]
    ]);
        let morseCodeArr = morseCodeStr.trim().split("   ");
        let decodedArr = [];
        let word = "";
        let counter = 0;

        morseCodeArr.forEach(function (item){
            word="";
            item.split(' ').forEach(function (character){
            if (morsecodeMap.has(character)){
                word+=morsecodeMap.get(character);
                decodedArr.push(morsecodeMap.get(character));
            }else if (character=" "){
                counter+=1;
            }})
            morseCodeArr[morseCodeArr.indexOf(item)]=word;
        });
        return morseCodeArr.join(" ").toUpperCase();
    }
function task2(){
        let morseCodeStr = prompt();
        let decodedStr = decodeMorseCode(morseCodeStr);
        alert(decodedStr);
}
