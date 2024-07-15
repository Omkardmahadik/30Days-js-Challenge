// Day2: Operators

// Activity 1:Arithmetic Operations
a=10,b=5
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// //Activity 2:Assignment Operators
console.log(a+=b);
console.log(a-=b);

// //Activity 3:Comparision   Operators
console.log(4>5); //false
console.log(5>4); //true

console.log(4<5); //false
console.log(5<4); //true

// Activity 4:Logical Operators
let gen="m",age=19
function logic(gen,age){
    if(gen="m"&& age>=18)
        {
            console.log("major");
        }
        else if(gen="f"&&age<=18)
        {
            console.log("minor");
        }
}
function logics(gen,age){
    if(gen="f"|| age>=18)
        {
            console.log("major");
        }
        else if(gen="f"&&age<=18)
        {
            console.log("minor");
        }
}


// JavaScript (JS) me "! " ka matlab usually "not" hota hai. Yeh logical NOT operator hai jo ek boolean value ko reverse karta hai. Yani agar aap ek expression ke samne "! " lagate hain, to wo expression true ho to false kar dega aur false ho to true kar dega.
// For example:
// !true returns false
// !false returns true
function logict(age){
    if(age!=10) //
        {
            console.log("elgible for marriage");
        }
        else 
        {
            console.log("not elgible for marriage");
        }
}
logic(gen="m",age=19)
logic(gen="f",age=17)
logict(age=20)
logict(age=10)

// Activity 5:Terminary operator
console.log("Enter your number");
if()

