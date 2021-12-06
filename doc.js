//addition

    const addition=(num1,num2)=>num1+num2;
    module.exports=addition;

// class

    const filter = (arr) => {
     let result = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > 20) {
         result.push(arr[i]);
        }
         return result.length > 0
          ? result
           : "il ya pas d etudiant avec un age superieur a 20";
       }
    };

      module.exports=filter;

//division

    const div=(dividing,divisor)=>divisor===0?'impossible':dividing/divisor;
    module.exports=div;

//exo1tdd

    const random=(x)=> {
     var t = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
       if (x === t) {
         return "Good Work";
        }
        return "Not matched";
     }

     module.exports=random;

//exo3

     const multiDiv=(x, y)=>(y === 0)?(x + "*" + y + "=" + x * y +" et " + x + "/" + y +" est impossible par " + y)
                                     : x + "*" + y + "=" + x * y + "et" + x + "/" + y + "=" + x / y;
    
     module.exports=multiDiv;

//exo4

    const longString = (arr) => {
     let val = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > val.length) {
          val = arr[i];
        }
      }
      return val;
    };

      module.exports=longString;

//exo6

     const higthPaireNumber=(arr)=>{
      const test=arr.filter(item=>item % 2 == 0);
       return Math.max(...test);
       }

      module.exports=higthPaireNumber;

//exo7

    const somCube = (arr) => {
        let som = 1;
        let cub = 0;
      
        for (let i = 0; i < arr.length; i++) {
          som = Math.pow(arr[i], 3);
          cub += som;
        }
        return cub;
      };
    
      module.exports=somCube;

//exo8

      const comparTwoObject = (Object1, Object2) => {
        return Object1.nom === Object2.nom
          ? "valeurs de propriété équivalentes"
          : Object1.prenom === Object2.prenom
          ? "valeurs de propriété équivalentes"
          : Object1.age === Object2.age
          ? "valeurs de propriété équivalentes"
          : Object1.sexe === Object2.sexe
          ? "valeurs de propriété équivalentes"
          : "differente valeur de propriété";
      };
    
      module.exports=comparTwoObject;

//exo9

      const filterArray = (arr) => {
        const secondarr = arr.filter((item) => item > 5);
        return secondarr;
      };
      module.exports=filterArray;

//exo10

      const extractVal = (arr) => {
        return arr[(0, 1, 2)];
      };
    
      module.exports=extractVal;

//exo11

      const suppRoll = (étudiant) => {
        console.log(étudiant);
        delete étudiant.rollno;
        console.log(étudiant);
        return étudiant;
      };
    
      module.exports=suppRoll;

 //exo14

    const checkString = (val) =>
     val !== val.toUpperCase()
        ? "cette chaine est en mminuscule"
       : "cette chaine est en majuscule";

          module.exports=checkString;

//multiplication

    const multiplication=(num1,num2)=>num1*num2;

            module.exports=multiplication;

//som

    function sum(a, b) {
      return a + b;
     }
     module.exports = sum;

//tdd6
 
const orderOfString=(str)=>{

    function checkOrder(str) {

        return str === str.split("").sort().join("")
      }
}
  module.exports=orderOfString;

//exo tdd7

  const downString=(arr,add)=>{

    const newADD=add.split(' ');
    const tab=arr.map(item=>item.concat(newADD))
    return tab;
    }
    
    module.exports =downString;

//tdd8

    const letterString=(str)=>{

        return str.toUpperCase() === str || str.toLowerCase() === str;
    }
    
    module.exports=letterString;

//tdd9

const leapYear=(year)=>{

    if ((year % 400) ===0 || (year % 4) ===0){
return true;
    }if((year %100)!==0 ){return false}
}
module.exports=leapYear;

//tdd10

    const numEven=(nbrPaire)=>{
    
        let paire = [];
        
        for (let i = 1; i <= nbrPaire; i++) {
          if (i % 2 === 0) {
            paire.push(i);
          }
        }
        
        return paire;
      }

      module.exports=numEven;

 //tdd11

      const mirror=(arr)=>{

        const n=[...arr]
        const tab=n.pop();
        const newArr=n.reverse();
    
        return arr.concat(newArr);
    }
    
    module.exports=mirror;

//tdd12

    const palindrome=(str)=>{

        const arr=str.split('');
        const tab=[...str];
        const map=tab.reverse();
        return (map===arr.join(''))?true:false;
    }
    module.exports=palindrome;

//tdd13

    const returnLetter=(str)=>(str.toLowerCase===str)?'Minuscule':(str.toUpperCase===str)?'Majuscule'
    :(str.toLowerCase!==str && str.toUpperCase!==str)?'Mix':'null';

    module.exports=returnLetter;



