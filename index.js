display = "";
// let one = document.getElementById("one");
// console.log(one);
// one.addEventListener("click",()=>{
//     console.log("clicked");
//     display=one.innerHTML;
//     console.log(display);
//     document.querySelector("p").innerHTML = `${display}`;
// })
let result = document.querySelector('p');
let btns = document.querySelectorAll(".btn");
// console.log(btns);
btns.forEach((element)=>{
    // console.log(element);
    let calculator=(e)=>{
        select = e.currentTarget.innerHTML;//current target will target the button and innerHTML will take the all btns text just like 1,2
        console.log(select);
        if(select == '='){
            console.log("entering the calculate part");
            display = eval(display); //that will eval the value which display having now.
            
            result.innerHTML+=` = ${display}`;
        }else if(select=='C'){
            display="";
            result.innerHTML=display;
        }else if(select =='×'){
            display += '*';
            result.innerHTML=display
        }else if(select=='−'){
            display +='-';
            result.innerHTML=display;

        }else if(select=='÷'){
           display +='/';
           result.innerHTML = display;
        }else if(select=='•'){
            display += '.';
            result.innerHTML=display;
        }
        else{
            display+=select;
            result.innerHTML=display;
        }
        

        // if(e.target.innerHTML == '='){
        //     display = eval(display);
        //     result.innerHTML=display; 
        // }else{
        //     display += e.target.innerHTML;
        //     result.innerHTML = display;
        // }
        
    }

    element.addEventListener("click",calculator);

})