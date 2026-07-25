// 3 differnces between var, let and const

    // 1. Scope
    // var is function scoped, var can be used anywhere inside its parent function.

        // function abcd(){
        //     for (var i = 0; i < 5; i++){
        //         console.log(i);
        //     }
        //     console.log(i); // this will print 5 because var is function scoped and i is accessible outside the for loop.
        // }
        // abcd();

    // while let and const are block {braces }scoped.  while variables declared with let and const are only accessible within the block they are defined in.

        //    function abcd(){
        //     for (let i = 0; i < 5; i++){
        //         console.log(i);
        //     }
        //     console.log(i); // this will throw an error because i is not accessible outside the for loop.
        // }
        // abcd();

    // 2. var was in es5 and let and const  were introduced in es6. 
 
    // window object -  JavaScript does not include certain features by itself, but the browser provides them. These features, which are not part of JavaScript, can be accessed through a special global object called the window object.

    // JavaScript is just a language. Features like the DOM, timers, and alerts are not part of JavaScript itself. They are provided by the browser through the global window object.

    // 3. var adds  itseelf to the window object, while let and const do not.

        // var a = 10;
        // let b = 20;
        // const c = 30;

        // console.log(window.a); // this will print 10 because var adds itself to the window object.
        // console.log(window.b); // this will print undefined because let does not add itself to the window object.
        // console.log(window.c); // this will print undefined because const does not add itself to the window object.

     // thats why var is not used because it exposes your variable in data    

// Lexical En        


