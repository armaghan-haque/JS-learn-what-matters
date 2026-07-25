DOM

4 PILLARS OF DOM

1.  selection of an element
    
    var a = document.querySelector("h1")
    console.log(a)

2.  changing HTML

     var a = document.querySelector("h1")
     a.innerHTML ="changed HTML"

3. changing CSS

    var a = document.querySelector("h1")
    a.style.color = "yellow"
    a.style.backgroundColor = "black".   // normally we write backgroun-color but here it is        different we write in camel case

4.  event listener 

    var a = document.querySelector("h1")
    a.addEventListener("click", function(){
    console.log("hello friends").     // when you click on it it will show hello friends on console
    })
    
    var a = document.querySelector("h1")
    a.addEventListener("click",function(){
    a.innerHTML="i am studying"
    a.style.color="yellow"
    a.style.backgroundColor= "black"
    })

5. selecting multiple elements at same time

    <h1>hello 1</h1>
    <h1>hello 2</h1>
    <h1>hello 3</h1>

     var a = document.querySelectorAll("h1")
     a.forEach(function(val){
     console.log(val)
     })

6. Get element by id 
        <div id="box"></div>
        var a = document.getElementById("box")

7. Get element by class 
        <div class="box"></div>
         var a =document.getElementsByClassName("box")   

8. text content 

     <div id="box">
        <h1>hello</h1>
    </div>

    var box = document.querySelector("h1")
    box.textContent = " <h1>hello guys</h1>" // it will display exactly what it is written here if we use document.innerHTML it will convert it to just hello guys 