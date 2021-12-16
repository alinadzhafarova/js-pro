1.
!{} + "5" - false || 1
ответ 1
("false5" - false = Nan ,Nan || 1 )


2.
![] - "5" + (false || 1)
ответ -4
( 0 - "5" = -5  + 1 = -4 )

3.
"false" && "true" + {} -[]
ответ Nan
(правая сторона Nan тк "Object object" - 0 недействительно)

4.
{} + {} + {} + [] + [{}] + [{},{}]
ответ "Nan Object object Object object,Object object"
( если обьект вначале + {} = Nan
[] = пустая строка
все что в массиве это строки )

5.
"hello" + ((+"50" / ( 9 + !!true )) - ([] + 5))
ответ "hello0"


6.
!!"{}" + !!{} - !!"[]" - !![]
ответ 0
(не пустая строка это true 1 + 1 -1 - 1)

7.
( [] > {}) - ( [] < {})
ответ -1
(cравниваются строки ("" > Object object) -( "" < Object object)
false - true = 0-1 = -1)


8.
("5" + +[5] + true * 5 ) / !![] * 5
ответ 111
(555 потому что прибавляем к строке "5 " и все становится строкой )

9.
((Nan == Nan) > -1) + +"16" -[]
ответ 17

10.
false + {} -[] + [{}]
ответ Nan
(потому что "falseObject object" - [] = Nan
Nan - 0 = Nan
Nan + [{}] = Nan Object object)

11.
1 + "2" + true  + false + null + undefined + {} + []
ответ 14

12.
parseInt("15.2") / (+[] + 2 / 2 * true)
ответ 15

13.
[] + ["4"] - 4 + {4 : "4"}
ответ Nan

14.
"45" * false - ("45" * true  / ([] + 1 ))
ответ 0

15.
+[] + {} > null
ответ nan

16.
[] / parseInt ("34px")+ {} + Boolean('')
ответ 0 Object Object false
0 / 34 + objectObject +false

17.
54 * Boolean ('54 + (parseint(true && '45) - [4] + typeof null
ответ 95 object

18.
({} + [8,9]) - [] + (null >= 0)
ответ nan

19.
null == undefined - parseInt('34.5.6')/(Boolean ('hello') + 1 )
ответ -16.25


20.
[] + {} +[{}] + {4:[]} +[{},[]] + [nan]
ответ Objectobject Objectobject Objectobject Objectobject Nan

21.
true- false +Bollean('true') - Bolllean('false') + ('hello' || {})
ответ !hello

22.
+null - [56,5] > {}
ответ false