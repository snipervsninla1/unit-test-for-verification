//addition.test.js *****

import {addition} from './addition';

  test('addition of two numbers',()=>{expect(addition(2,5)).toBe(7); });
    
// class.test.js ****

import {filterArrayAge} from './class';

  test('filter the elements create through a class',()=>{

    class Etudiant{
      constructor(nom,prenom,age){
        this.nom=nom;
        this.prenom=prenom;
        this.age=age;
      } 
       getFullName(){return`${this.nom} ${this.prenom}`};
    
       
    }
    const etud01=new Etudiant('NINLA','Ulrich',19);
    const etud02=new Etudiant('ATEBA','Benjamin',17);
    const etud03=new Etudiant('NGONO','Albert',5);
    const etud04=new Etudiant('ATANGANA','Alain',5);
    const etud05=new Etudiant('WOUMBI','Frederic',7);
  ;
    
    const arr=[];
        arr.push(etud01);
        arr.push(etud02);
        arr.push(etud03);
        arr.push(etud04);
        arr.push(etud05);
      
    expect(filterArrayAge(arr)).toBe('il ya pas d etudiant avec un age superieur a 20');
    
  })
  

//division.test.js ****

import {divisionTwoNumber} from './division.js';

  test("division of two numbers", () => {
     expect(divisionTwoNumber(2, 0)).toBe("impossible");
      expect(divisionTwoNumber(2, 2)).toBe(1);
   });
 
//exo1tdd.test.js ******

import { randomNumber } from "./exo1tdd.js";

  test('aleatory number',()=>{

    expect(randomNumber(2)).toBe("Good Work");
  });

//exo3.test.js ******

import {multiplicationAndDivision} from './exo3';

  test("multiply and divide two numbers", () => {
      expect(multiplicationAndDivision(2, 0)).toBe("2*0=0 et 2/0 est impossible par 0");
    });

//exo4.test.js ******

import {longestString} from './exo4';

test("longuest string froma array", () => {
    const arr = ["bonjour", "comment", "indisponible", "oui", "anticipe"];
    expect(longestString(arr)).toBe("indisponible");
  });
  
  test("longuest string froma array", () => {
    const arr = ["bonjour", "comment", "oui", "venir"];
    expect(longestString(arr)).toBe("there is no longest string");
  });
  

//exo6.test.js ********

import {higthPaireNumber} from './exo6';

test("even bigger number of Array", () => {
    const arr = [2, 88, 10, 99, 55];
    expect(higthPaireNumber(arr)).toBe(88);
  });

//exo7.test.js ******

import {sumsFromCubesByArray} from './exo7';

test("sum of cubes of all ", () => {
    const arr = [1, 2, 3];
  
    expect(sumsFromCubesByArray(arr)).toBe(36);
  });
  

//exo8.test.js ******

import {comparTwoObject} from './exo8';

test("compare two object", () => {
    const Object1 = {
      nom: "alima",
      prenom: "arthur",
      age: 22,
      sexe: "masculin"
    };
    const Object2 = {
      nom: "ngonde",
      prenom: "elisabeth",
      age: 22,
      sexe: "feminin"
    };
  
    expect(comparTwoObject(Object1, Object2)).toBe("valeurs de propriété équivalentes");
  });
  
  test("compare two object", () => {
    const Object1 = {
      nom: "alima",
      prenom: "arthur",
      age: 28,
      sexe: "masculin"
    };
    const Object2 = {
      nom: "ngonde",
      prenom: "elisabeth",
      age: 22,
      sexe: "feminin"
    };
  
    expect(comparTwoObject(Object1, Object2)).toBe("differente valeur de propriété");
  });

//exo9.test.js *******

import {filterArray} from './exo9';

test("filter array", () => {  
    expect(filterArray(["a", "b", 10, 8, 1, 4])).toEqual([10, 8]);
  });
  
//exo10.test.js  *****

  import {extractValues} from './exo10';

  test("extract value of index for specified array", () => {
    const arr = ["a", "b", "c", 3, 2, 1];
    expect(extractValues(arr,2,4,5,8)).toBe(["c",2,1,"il n'ya pas d'element pour l'indexe 8"]);
  });
  
//exo11.test.js *******

import {suppRoll} from './exo11';

test("delete roolno property", () => {
    const étudiant = {
      nom: "« David Rayy »",
      sclass: "« VI »",
      rollno: 12
    };
  
    expect(suppRoll(étudiant)).toEqual({
      nom: "« David Rayy »",
      sclass: "« VI »"
    });
  });


//exo14.test.js *******

import {checkString} from './exo14';

test("check the string", () => {
    const val = "good";
    expect(checkString(val)).toBe("cette chaine est en mminuscule");
  });
  
  test("check the string", () => {
    const val = "BAD";
    expect(checkString(val)).toBe("cette chaine est en majuscule");
  });

//multiplication.test.js ******

import {multiplication} from './multiplication';

test('multiplication of two numbers',()=>{
    expect(multiplication(2,2)).toBe(4);
  });


//tdd6.test.js ******

import {orderOfString} from './tdd6.js';

test ('string in order or not',()=>{
const str="abc"
    expect(orderOfString(str)).toBe(true);
});

test ('string in order or not',()=>{
    const str="xyz"
        expect(orderOfString(str)).toBe(true);
    });

 test ('string in order or not',()=>{
        const str="123"
            expect(orderOfString(str)).toBe(true);
        });

 test ('string in order or not',()=>{
            const str="aabbcc"
                expect(orderOfString(str)).toBe(true);
            });

//tdd7.test.js *******

import mergesWords from './tdd7';

test('adding a sub-string',()=>{
    const arr=["accept", "achet", "adapt"];
    const add="able";

    expect(mergesWords(arr,add)).toEqual(["acceptable", "achetable", "adaptable"]);
});

test('adding a sub-string',()=>{
    const arr=["aim", "act", "ard"];
    const add="ant";

    expect(mergesWords(arr,add)).toEqual(["aimant", "actant", "ardant"]);
});


//tdd8.test.js *******

import {checkUppercaseOrLowercase} from './tdd8';


  test ('uppercase or lowercase string',()=>{

       const str="WayToLearnX"
     expect(checkUppercaseOrLowercase(str)).toBe(false);
  });

  test ('uppercase or lowercase string',()=>{

     const str="waytolearnx"
    expect(checkUppercaseOrLowercase(str)).toBe(true);
  });

  test ('uppercase or lowercase string',()=>{

      const str="WAYTOLEARNX"
    expect(checkUppercaseOrLowercase(str)).toBe(true);
  });

//tdd9.test.js *******

import {leapYear} from './tdd9';

  test('know a leap year ',()=>{
     const year=2020;

     expect(leapYear(year)).toBe('true');
   });

  test('know a leap year ',()=>{
      const year=1200;

      expect(leapYear(year)).toBe('false');
   });

  test('know a leap year ',()=>{
      const year=2000;

      expect(leapYear(year)).toBe('true');
  });


//tdd10.test.js ********

import {numEven} from './tdd10';

  test('even numbers of 1 to the given number',()=>{

     const nbrPaire=2;
      expect(numEven(nbrPaire)).toEqual([2]);
   });

  test('even numbers of 1 to the given number',()=>{

     const nbrPaire=4;
     expect(numEven(nbrPaire)).toEqual([2, 4]);
   });

  test('even numbers of 1 to the given number',()=>{

      const nbrPaire=6;
     expect(numEven(nbrPaire)).toEqual([2, 4, 6]);
    });

//tdd11.test.js ******

import {mirrorArray} from './tdd11';

  test(' turn this painting into a mirror',()=>{

      const arr=[1, 2, 3];
      expect(mirrorArray(arr)).toEqual([1, 2, 3, 2, 1]);
    });

  test(' turn this painting into a mirror',()=>{

     const arr=[9, 8, 7];
     expect(mirrorArray(arr)).toEqual([9, 8, 7, 8, 9]);
    });

  test(' turn this painting into a mirror',()=>{

      const arr=[10, 20];
     expect(mirrorArray(arr)).toEqual([ 10, 20, 10 ]);
   });

//tdd12.test.js ******

import {palindrome} from './tdd12';

  test('returns true if a number is a palindrome',()=>{
      const str='212';

      expect(palindrome(str)).toBe(true);
  });

  test('returns true if a number is a palindrome',()=>{

    const str='123';
    expect(palindrome(str)).toBe(false);
  });

  test('returns true if a number is a palindrome',()=>{
    const str='75257';

    expect(palindrome(str)).toBe(true);
});

//tdd13.test.js *******

import uppercaseOrLowercaseLetter from './tdd13';

test('return letter of one word',()=>{
    const str="WAYTOLEARNX";
    expect(uppercaseOrLowercaseLetter(str)).toBe('Majuscule');
});

test('return letter of one word',()=>{
    const str="waytolearnx";
    expect(uppercaseOrLowercaseLetter(str)).toBe('Minuscule');
});

test('return letter of one word',()=>{
    const str="WayToLearnX";
    expect(uppercaseOrLowercaseLetter(str)).toBe('Mix');
});



