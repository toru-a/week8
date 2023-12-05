
//ゾロ目

reader.on('close', () => {

let date = lines.join('').replace(' ','').split("");
let Len = ([...new Set(date)]).length;
if( Len === 1 ){
      console.log('Yes');
  }else{
      console.log('No');
  }

});



//経験値

reader.on('close', () => {
  let N = lines.map(Number)
  console.log(N[0]+N[1]+N[2]);
  
});



//曲名
reader.on('close', () => {
  console.log(lines[0]+"/"+lines[1]);
});




//ツリーの配置

reader.on('close', () => {
  let i = lines.join('').split(" ").map(Number)
  console.log(Math.ceil(i[0]/i[1])*i[2]);
});


//Leet置き換え

reader.on('close', () => {
　const number = ["0","1","2","3","4","5","6"];
　const alpha =["O","I","Z","E","A","S","G" ];
　let word = lines[0].split("");
　let wordLen = word.length;
　let wordIndex = 0;
　
　while(wordIndex < wordLen){
　    let numIndex = alpha.indexOf(word[wordIndex]);
　    if(numIndex >= 0){
　        process.stdout.write(number[numIndex]);
　    }else{
　        process.stdout.write(word[wordIndex]);
　    }
　    wordIndex++;
　}
  
  
});


//ハイ＆ロー
reader.on('close', () => {
    
      let count = 2;
      
  while( count <= parseInt(lines[1])+1){
    
      let oyacard = lines[0].replace(" ",",").split(","); 
      let kocard = lines[count].replace(" ",",").split(",");
     
      if( oyacard[0] === kocard[0] ){
         if(parseInt(oyacard[1]) > parseInt(kocard[1]) ){
          console.log("Low");
         }else{
          console.log("High");
         }
      }else if( parseInt(oyacard[0]) > parseInt(kocard[0]) ){
          console.log("High");
      }else{
          console.log("Low");
      }
      count++;
      

  }
      

});

