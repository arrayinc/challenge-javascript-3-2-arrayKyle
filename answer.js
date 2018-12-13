
function oldMan(n){
  let str= "";
    while(n<11){
      let w="";
        switch(n){
          case 1: w = "thumb";break;   
          case 2: w = "shoe";break;
          case 3: w = "knee"; break;
          case 4: w = "hive"; break;
          case 5: w = "door"; break;
          case 6: w = "sticks"; break;
          case 7: w = "heaven"; break;
          case 8: w = "pate"; break;
          case 9: w = "spine"; break;
          case 10: w = "shin"; break;
          }
        str +=    `This old man, he played ${n}. He played knick-knack on my ${w}. With a knick-knack, paddy-whack, Give your dog a bone. This old man came rolling home.`
         n++;
       } return str;
     } oldMan(1);
