1.
(null >= 0) + 5
// ответ 6
// (1) + 5

2.
null - 5 + ("null - 5") + "false"
// ответ  "-5null - 5 false"
//null это 0 ,0 - 5 это -5,далее -5 преобразуется к строке

3.
true - true + "hello" === "0hello"
// ответ true
//1 - 1 = 0 ,0 + cтрока это "0hello" . "0hello" и "0hello" это true
4.
null + " is " + (typeof null)
// ответ "0 is object"
//0 + cтрока это "0 is" + object ,все преобразуется к строке

5.
Boolean(null) + !Boolean("") / Boolean(1) + Boolean(undefined)
// ответ 1
//0 + 1 / 1 + 0

6.
"null" + +("hello" > "Hello") - Number("3")
// ответ NaN ( потому что
//+("hello" > "Hello") это true = 1  равно "null 1"  и строку нельзя преобразовать к числу)

7.
34 + "43" - parseInt("43px")
// ответ 3400
//строка "3443" - число 43 ,преобразование к числу

8.
String(false) - String(true) + "not" + NaN
// ответ  "NaN not NaN"
//вычесть строки нельзя и это Nan , Nan + "not" '+  NaN

9.
("text" > 'Text') + 5 + null * 45
// ответ 6
//("text" > 'Text') это true и 1 ,null * 45 = 0, 1+ 5 =6

10.
!!parseFloat("t123") - false + true
// ответ 1
//!!parseFloat("t123") это false и 0 ,0-0+1 =1

11.
"hello" && 0 - '22'
// ответ -22
//0 -22 = -22 и последнее выражение если нет ложного это -22

12.
!!Boolean("") || Boolean("code") - 45*2
// ответ -89
//!!Boolean("") это false
// Boolean("code") - 45*2 это 1 - 90 = -89
// и последнее выражение если нет правдивого  это -89

13.
Number("23") - Number(true) - Number(null) - undefined
// ответ NaN
//23 - 1 - 0 - Nan = Nan
//null = 0, undefined = Nan
//любая операция с nan это nan

14.
true - false + "object" - Number('23px') + Boolean(true)
// ответ NaN
//1-0 + "object" это "1 object" и строка минус 23 это Nan + 1 = Nan