//addition ******
export 
    const addition=(num1,num2)=>num1+num2;

// class ******

export 
const filterArrayAge = (arr) => {
  const result = arr.filter(item=>item.age>20);
   if(result.length>0){return result;}
   else return"il ya pas d etudiant avec un age superieur a 20";
    
 };

//division *******

export 

    const divisionTwoNumber=(dividing,divisor)=>divisor===0?'impossible':dividing/divisor;

//exo1tdd ******

export
    const randomNumber=(val)=> {
     const number =Math.floor(Math.random() * (10 - 1 + 1)) + 1;
      return (val === number)?"Good Work":"Not matched";
     }
    

//exo3 ******

export 
     const multiplicatAndDivision=(x, y)=>(y === 0)?(x + "*" + y + "=" + x * y +" et " + x + "/" + y +" est impossible par " + y)
                                     : x + "*" + y + "=" + x * y + "et" + x + "/" + y + "=" + x / y;
    

//exo4 ******

export 
    const longestString = (arr) =>  arr.reduce((previousValue, currentValue) => previousValue.length > currentValue.length 
    ? previousValue: currentValue);
    
//exo6 ******

export 
const higthPaireNumber=(arr)=> Math.max(...arr.filter(item=>item % 2 == 0));

//exo7 ******

export 
    const sumsFromCubesByArray = (arr) => arr.map(item=>Math.pow(item, 3)).reduce((a, b) => a + b);
  
    
//exo8 *******

export 
      const comparTwoObject = (Object1, Object2) => {
        if( Object1.nom === Object2.nom){return "valeurs de propriété équivalentes"}
        if(Object1.prenom === Object2.prenom){return "valeurs de propriété équivalentes"}
        if(Object1.age === Object2.age){return "valeurs de propriété équivalentes"}
        if(Object1.sexe === Object2.sexe){return"valeurs de propriété équivalentes"}
        else return "differente valeur de propriété";
      };
    
//exo9 ******

export 
      const filterArray = (arr) => arr.filter((item) => item > 5);

//exo10 ******

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
    

//exo11 ********

export 
      const suppRoll = (étudiant) => {
        console.log(étudiant);
        delete étudiant.rollno;
        console.log(étudiant);
      };
    

 //exo14 *******

 export 

    const checkString = (val) =>(val !== val.toUpperCase())? "cette chaine est en mminuscule"
       : "cette chaine est en majuscule";

//multiplication *****

export
    const multiplication=(num1,num2)=>num1*num2;


//tdd6 ********
 
export 
      const orderOfString=(value)=>{
         return value === value.split("").sort().join("")
       };

//exo tdd7 *********

export 
    const mergesWords=(arr,value)=> arr.map(item=>item.concat(value.split(' ')));
    
//tdd8 *********

export 
    const checkUppercaseOrLowercase=(value)=>value.toUpperCase() === value || value.toLowerCase() === value;
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



