Display = document.getElementById("display")

btn = document.querySelectorAll('input');

screenValue = ''
memoryPlus = 0;
memoryMinus = 0;
memoryStore = 0;
memoryRecall = 0;
backspace = 0;
c = 0
c_p = 0
c_m = 0
for(item of btn)
{
    item.addEventListener('click',(e)=>{
        
        btntext = e.target.value;
        // console.log('Button text is', btntext)
        if(btntext == 'X')
        {
            btntext = '*'
            screenValue += btntext;
            Display.value = screenValue;
        }
        else if(btntext == 'C')
        {
            Display.value = ""
            screenValue =  Display.value ;
        }
        else if(btntext == 'mod' )
        {
            btntext = '%'
            screenValue += btntext;
            Display.value = screenValue;
        }
        else if(btntext == '<-' )
        {
            // console.log(screenValue.length)
            backspace = Display.value;
            // console.log(backspace)
            Display.value = backspace.slice(0,-1)
        }
        else if(btntext == 'exp' )
        {
            btntext = '**'
            screenValue += btntext;
            Display.value = screenValue;
        }
        else if(btntext == '=')
        {
            Display.value = eval(screenValue);
            screenValue =  Display.value ;
        }
        else if(btntext == 'PI')
        {
            Display.value = Math.PI;
            screenValue =  Display.value ;
        }
        else if(btntext == 'e')
        {
            Display.value = Math.E;
            screenValue =  Display.value ;
        }
        else if(btntext == 'n!')
        {
            Display.value = fact(Display.value);
            function fact(n){
                if (n==1 || n==0)
                {
                    return 1
                }
                else{
                    return n * fact(n-1)
                }
            }
        }
        else if(btntext == '1/x' )
        {

            Display.value = "1/"+screenValue;
            screenValue = 1/screenValue;
        }   
        else if(btntext == 'x^2' )
        {
            Display.value = screenValue+"^2";
            screenValue = screenValue**2;
        }
        else if(btntext == '2^x')
        {
            Display.value = "2^"+screenValue;
            screenValue = 2**screenValue;
        }
        else if(btntext == 'x^(1/2)')
        {
            Display.value = screenValue+'^(1/2)'
            screenValue = screenValue**(0.5);
        }
        else if(btntext == '10^x')
        {
            Display.value ='10^'+ screenValue
            screenValue =10**screenValue;
        }
        else if(btntext == 'log')
        {
            Display.value = "log" + screenValue 
            p =(Math.LOG10(screenValue));
            console.log(p)
            screenValue = p
        }
        else if(btntext == 'ln')
        {
            Display.value = "ln" + screenValue 
            p =(Math.Log2e(screenValue));
            console.log(p)
            screenValue = p
        }
        else if(btntext == '|x|')
        {
            Display.value ='|'+ screenValue+'|'
            screenValue -= (2*screenValue);
        }

        else if(btntext == 'M+')
        {
            c_p += 1
            console.log(c_p)
            if(c_p == 1)
            {
                memoryPlus = screenValue;
                Display.value = memoryPlus
                console.log("M+ = "+memoryPlus)
            }
            else{
                memoryPlus = Display.value + memoryPlus 
                Display.value = memoryPlus
                console.log("else part M+ ="+memoryPlus)
                screenValue = memoryPlus
            }
        }
        else if(btntext == 'M-')
        {
            c_m += 1
            console.log(c_m)
            if(c_m == 1)
            {
                memoryMinus = screenValue;
                Display.value = memoryMinus
                console.log("M- = "+memoryMinus)
            }
            else{
                memoryMinus = Display.value + memoryMinus 
                Display.value = memoryMinus
                console.log("else part M- ="+memoryMinus)
                screenValue = memoryMinus
            }
        }
        else if(btntext == 'MS')
        {
            console.log(memoryStore)
            memoryMinus = eval(memoryMinus)
            memoryPlus = eval(memoryPlus)
            memoryStore = (memoryPlus) - (memoryMinus);

            Display.value = memoryStore
        }
        else if(btntext == 'MR')
        {
            console.log("Initial MR"+memoryRecall)
            console.log(c)

            c = c+1;
            if(c==1)
            {
                memoryRecall = screenValue;
                Display.value = memoryRecall
                console.log(memoryRecall)
            }
            else
            {
                console.log("else part")
                Display.value = screenValue + memoryRecall
                screenValue += memoryRecall
                console.log(memoryRecall)
            }
        }
        else if(btntext == 'MC')
        {
            console.log("Memory cleared")
            memoryPlus = 0;
            memoryMinus = 0;
            memoryStore = 0;
            memoryRecall = 0;       
            c_m = 0
            c_p = 0 
            c = 0
        }
        else
        {
            {screenValue += btntext;
            Display.value = screenValue;
        }
    }
    })
}
