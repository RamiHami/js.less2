var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 префиксная форма, сначала суммируется, а затем вывод
d = b++; alert(d);           // 1 постфиксная форма, сначала вывод
c = (2+ ++a); alert(c);      // 5 двойка суммируется с префиксной переменной, которая выше тоже имеет префиксную форму
d = (2+ b++); alert(d);      // 4 в предыдущей постфиксной форме b = 2
alert(a);                    // 3 a после двух префиксных форм = 3
alert(b);                    // 3 b после двух постфиксных форм = 3