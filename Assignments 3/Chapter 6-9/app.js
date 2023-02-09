        // ===========Question No:1============

        var num = +prompt("Question NO: 1 \nEnter any number")
        document.write("<P>"+"<h1>"+ "Question No:1"+"</h1>"+"</P>")
        document.write("<P>"+ "Results:"+"</P>")
        document.write("<P>"+ "The value of number is: "+ num +"</P>")

        document.write("<br>"+"<P>"+ "The value of ++number is: "+ ++num +"</P>")
        document.write("<P>"+ "Now the value of Number is: "+num+"</P>")
        
        document.write("<br>"+"<P>"+ "The value of number++ is: "+ num++ +"</P>")
        document.write("<P>"+ "Now the value of Number is: "+ num +"</P>")

        document.write("<br>"+"<P>"+ "The value of --number is: "+ --num +"</P>")
        document.write("<P>"+ "Now the value of Number is: "+ num +"</P>")
       
        document.write("<br>"+"<P>"+ "The value of number-- is: "+ num-- +"</P>")
        document.write("<P>"+ "Now the value of Number is: "+ num +"</P>")

        // ===========Question No:2============

        document.write("<P>"+"<h1>"+ "Question No:2"+"</h1>"+"</P>")

        var a = 2, b = 1;
        var result = --a - --b + ++b + b--;
        document.write("<P>"+"var a = 2, b = 1;"+"</P>")
        document.write("<P>"+"var result = --a - --b + ++b + b--;"+"</P>")
        document.write("<P>"+"--a ==>"+ 1+"</P>")
        document.write("<P>"+"--a - --b ==>"+ 1+"</P>")
        document.write("<P>"+"--a - --b + ++b ==>"+ 2+"</P>")
        document.write("<P>"+"--a - --b + ++b + b-- ==>"+ 3+"</P>")
        document.write("<P>"+"Results: "+ result+"</P>")
       
        // ===========Question No:3============
        
        var name = prompt("Question NO: 3 \nEnter your name")
        alert("As-salāmu ʿalaykum " + name)

        // ===========Question No:5============
        
        var tab = +prompt("Question NO: 5 \nEnter the any number it will show their Multiplication Table")
        var number = 0;
        document.write("<P>"+"<h1>"+ "Question No:4"+"</h1>"+"</P>")
        if ( tab>=1 ){
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
        }
        else {
            tab = 5;
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
            document.write("<P>" + tab + " x " + ++number + " = " + number*tab +"</P>")
        }