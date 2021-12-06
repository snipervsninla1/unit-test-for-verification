//addition.test.js

const addition=require('./addition')

test('addition of two numbers',()=>{
    expect(addition(2,5)).toBe(7);
  });
    
// class.test.js

const filter=require('./class');

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
      
    expect(filter(arr)).toString('il ya pas d etudiant avec un age superieur a 20');
  })
  

//division.test.js

const div= require('./division.js');

test("division of two numbers", () => {
    expect(div(2, 0)).toBe("impossible");
  });
  
  test("division of two numbers", () => {
    expect(div(2, 2)).toBe(1);
  });


//exo1tdd.test.js



//exo3.test.js

const multiDiv=require('./exo3')

test("multiply and divide two numbers", () => {
    expect(multiDiv(2, 0)).toBe("2*0=0 et 2/0 est impossible par 0");
  });

//exo4.test.js

const longString=require('./exo4')

test("longuest string froma array", () => {
    const arr = ["bonjour", "comment", "indisponible", "oui", "anticipe"];
    expect(longString(arr)).toString("indisponible");
  });
  
  test("longuest string froma array", () => {
    const arr = ["bonjour", "comment", "oui", "venir"];
    expect(longString(arr)).toString("there is no longest string");
  });
  

//exo6.test.js

const higthPaireNumber=require('./exo6')

test("even bigger number of Array", () => {
    const arr = [2, 88, 10, 99, 55];
    expect(higthPaireNumber(arr)).toBe(88);
  });

//exo7.test.js

const somCube=require('./exo7')

test("sum of cubes of all ", () => {
    const arr = [1, 2, 3];
  
    expect(somCube(arr)).toBe(36);
  });
  

//exo8.test.js

const comparTwoObject=require('./exo8')

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
  
    expect(comparTwoObject(Object1, Object2)).toString(
      "valeurs de propriété équivalentes"
    );
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
  
    expect(comparTwoObject(Object1, Object2)).toString(
      "differente valeur de propriété"
    );
  });

//exo9.test.js

const filterArray=require('./exo9');

test("filter array", () => {  
    expect(filterArray(["a", "b", 10, 8, 1, 4])).toEqual([10, 8]);
  });
  

//exo11.test.js

const suppRoll=require('./exo11')

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


//exo14.test.js

const checkString=require('./exo14')

test("check the string", () => {
    const val = "good";
    expect(checkString(val)).toString("cette chaine est en mminuscule");
  });
  
  test("check the string", () => {
    const val = "BAD";
    expect(checkString(val)).toString("cette chaine est en majuscule");
  });

//multiplication.test.js

const multiplication=require('./multiplication')

test('multiplication of two numbers',()=>{
    expect(multiplication(2,2)).toBe(4);
  });

//som.test.js

const sum = require('./som.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 4)).toBe(5);
});

//tdd6.test.js

const orderOfString = require('./tdd6.js')

test ('string in order or not',()=>{
const str="abc"
    expect(orderOfString(str)).toString(true);
});

test ('string in order or not',()=>{
    const str="xyz"
        expect(orderOfString(str)).toString(true);
    });

 test ('string in order or not',()=>{
        const str="123"
            expect(orderOfString(str)).toString(true);
        });

 test ('string in order or not',()=>{
            const str="aabbcc"
                expect(orderOfString(str)).toString(true);
            });

//tdd7.test.js

const downString=require('./tdd7')

test('adding a sub-string',()=>{
    const arr=["accept", "achet", "adapt"];
    const add="able";

    expect(downString(arr,add)).toString(["acceptable", "achetable", "adaptable"]);
});

test('adding a sub-string',()=>{
    const arr=["aim", "act", "ard"];
    const add="ant";

    expect(downString(arr,add)).toString(["aimant", "actant", "ardant"]);
});


//tdd8.test.js

const letterString =require('./tdd8')


test ('uppercase or lowercase string',()=>{

     const str="WayToLearnX"
    expect(letterString(str)).toString(false);
});

test ('uppercase or lowercase string',()=>{

    const str="waytolearnx"
   expect(letterString(str)).toString(true);
});

test ('uppercase or lowercase string',()=>{

    const str="WAYTOLEARNX"
   expect(letterString(str)).toString(true);
});

//tdd9.test.js

const leapYear=require('./tdd9')

test('know a leap year ',()=>{

    const year=2020;

    expect(leapYear(year)).toString('true');
});

test('know a leap year ',()=>{

    const year=1200;

    expect(leapYear(year)).toString('false');
});

test('know a leap year ',()=>{

    const year=2000;

    expect(leapYear(year)).toString('true');
});


//tdd10.test.js

const numEven=require('./tdd10')

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

//tdd11.test.js

const mirror=require('./tdd11')

test(' turn this painting into a mirror',()=>{

    const arr=[1, 2, 3];
    expect(mirror(arr)).toEqual([1, 2, 3, 2, 1]);
});

test(' turn this painting into a mirror',()=>{

    const arr=[9, 8, 7];
    expect(mirror(arr)).toEqual([9, 8, 7, 8, 9]);
});

test(' turn this painting into a mirror',()=>{

    const arr=[10, 20];
    expect(mirror(arr)).toEqual([ 10, 20, 10 ]);
});

//tdd12.test.js

const palindrome=require('./tdd12')

test('returns true if a number is a palindrome',()=>{
    const str='212';

    expect(palindrome(str)).toString(true);
});

test('returns true if a number is a palindrome',()=>{

    const str='123';
    expect(palindrome(str)).toString(false);
});

test('returns true if a number is a palindrome',()=>{
    const str='75257';

    expect(palindrome(str)).toString(true);
});

//tdd13.test.js

const returnLetter=require('./tdd13')

test('return letter of one word',()=>{

    const str="WAYTOLEARNX";
    expect(returnLetter).toString('Majuscule');
});

test('return letter of one word',()=>{

    const str="waytolearnx";
    expect(returnLetter).toString('Minuscule');
});

test('return letter of one word',()=>{

    const str="WayToLearnX";
    expect(returnLetter).toString('Mix');
});



