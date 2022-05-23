function chessBoard(){
    let black = " x "
    let white = " o "
    for (let i = 0; i <4; i++){
        let firstCombination  = black + white
        console.log(firstCombination.repeat(4))

        let secondCombination = white + black
        console.log(secondCombination.repeat(4))
    }
}; 
chessBoard()