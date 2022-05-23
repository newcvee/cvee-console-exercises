function treeBody() {
  for (let i = 1; i <= 6; i++) { 
    let consoleRow = ""; 
    for(let j = 6 - i; j > 0; j--){
      consoleRow += " ";
    } 
    for(let j = i *2 -1; j > 0; j--){
      consoleRow += "^";
    }
    console.log(consoleRow);
  }
};
treeBody()

function treeBottom(){
  for (let i = 0; i < 2; i++){
    whitespace = " "
    material = "*"
    console.log((whitespace.repeat(4)) + (material.repeat(3)) + (whitespace.repeat(4)))
  }
}; 
treeBottom()

