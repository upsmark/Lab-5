var text = "";
var i;
for (i = 1; i < 101; i++) {
    text += i++;
}


for (i =1; i < 101; i++) {
 if (i % 15 === 0)
 {console.log (i + " Fizzbuzz");
}
 else if (i % 5 === 0)
 {console.log (i + " Buzz");
}
 else if (i % 3 === 0)
 {console.log (i + " Fizz");
}
 else {
   console.log(i)
 }

}
