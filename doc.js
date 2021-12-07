//addition
export 
    const addition=(num1,num2)=>num1+num2;

// class

export 
const filterArrayAge = (arr) => {
  const result = arr.filter(item=>item.age>20);
   if(result.length>0){return result;}
   else return"il ya pas d etudiant avec un age superieur a 20";
    
 };

//division

export 

    const divisionTwoNumber=(dividing,divisor)=>divisor===0?'impossible':dividing/divisor;

//exo1tdd

export
    const randomNumber=(x)=> {
     var t = Math.floor(Math.randomNumber() * (10 - 1 + 1)) + 1;
       if (x === t) {
         return "Good Work";
        }
        return "Not matched";
     }


//exo3

export 
     const multiplicatAndDivision=(x, y)=>(y === 0)?(x + "*" + y + "=" + x * y +" et " + x + "/" + y +" est impossible par " + y)
                                     : x + "*" + y + "=" + x * y + "et" + x + "/" + y + "=" + x / y;
    

//exo4

export 
    const longestString = (arr) => {
     let val = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > val.length) {
          val = arr[i];
        }
      }
      return val;
    };


//exo6

export 
const higthPaireNumber=(arr)=>{     
  return Math.max(...arr.filter(item=>item % 2 == 0));
  }

//exo7

export 
    const sumsFromCubesByArray = (arr) => {
          const som =arr.map(item=>Math.pow(item, 3)).reduce((a, b) => a + b);
       }
    
//exo8

export 
      const comparTwoObject = (Object1, Object2) => {
        if( Object1.nom === Object2.nom){return "valeurs de propriété équivalentes"}
        if(Object1.prenom === Object2.prenom){return "valeurs de propriété équivalentes"}
        if(Object1.age === Object2.age){return "valeurs de propriété équivalentes"}
        if(Object1.sexe === Object2.sexe){return"valeurs de propriété équivalentes"}
        else return "differente valeur de propriété";
      };
    
//exo9

export 
      const filterArray = (arr) => {
        return arr.filter((item) => item > 5);
        };

//exo10

export 

  const extractValues = (arr , ...index) => {
   const clues = [...index]
    return clues.map(item =>{
        if(item > arr.length-1){
            return `il n'ya pas d'element pour l'indexe ${item}`
       }
       else{
            return arr[item]
      }
    })
  }
    

//exo11

export 
      const suppRoll = (étudiant) => {
        console.log(étudiant);
        delete étudiant.rollno;
        console.log(étudiant);
        return étudiant;
      };
    

 //exo14

 export 

    const checkString = (val) =>(val !== val.toUpperCase())? "cette chaine est en mminuscule"
       : "cette chaine est en majuscule";

//multiplication

export
    const multiplication=(num1,num2)=>num1*num2;


//tdd6
 
export 
      const orderOfString=(str)=>{
         return str === str.split("").sort().join("")
       };

//exo tdd7 *********

export 
    const mergesWords=(arr,add)=>{

      //  const newADD=add.split(' ');
       return arr.map(item=>item.concat(add.split(' ')))
       };
    
//tdd8 *********

export 
    const checkUppercaseOrLowercase=(str)=>{

        return str.toUpperCase() === str || str.toLowerCase() === str;
     }
    
//tdd9 *******

export 
    const leapYear=(year)=>{
      if ((year % 400) ===0 || (year % 4) ===0){return true;}
      if((year %100)!==0 ){return false}
    }

//tdd10 *******

export 
    const numEven=(nbrPaire)=>{
    
        let paire = [];        
        for (let i = 1; i <= nbrPaire; i++) {
          if (i % 2 === 0) {
            paire.push(i);
          }
        }
         return paire;
      }

 //tdd11 ********

 export 
    const mirrorArray=(arr)=>{

        const n=[...arr]
        const tab=n.pop();
       return n.concat([...arr].reverse());
   }
    
//tdd12 ********

export 
     
    const palindrome=(str)=>{
      return (([...str].reverse().join(''))===(str.split('')).join(''))?true:false;
     }

//tdd13

export 
   const uppercaseOrLowercaseLetter=(str)=>{
       if(str.toLowerCase()===str){return 'Minuscule'}
       if(str.toUpperCase()===str){return 'Majuscule'}
        if(str.toLowerCase()!==str && str.toUpperCase!==str){return 'Mix'}
       else return 'null';};



