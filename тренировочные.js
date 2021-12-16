// function User() {
//     let isActive = false;
//     this.activate = function() {
//         isActive = true;
//     };
// }
//
//
// function Admin(value) {
//     User.call(this);
//
//     this.name = value;
// }
// let person = new Admin('John Doe');
// person.activate();
function foo(x,y) {
    arguments[1] = 20
    console.log(x,y)
}
foo(1,3)