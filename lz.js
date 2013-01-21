(function($){
    
        jQuery.fn.msgErro = function(n, m){
        
        console.log('The .para() method will accept only 4 params in orden (Effect, Direction, Easing, duration), or only (Effect), or only (Duration), or both in ordern (Effect, Duration), ' + n + ' given, or problaby in wrong order or wrong typing please check your type' + '  ' + m);                            
        }//end of the function msgErro()
    
        jQuery.fn.lz = function(obj,callback){
            
            
            
            // Converting arguments in a Array[]
            var args = Array.prototype.slice.call(arguments);
            // Check if callback is a function()          
            typeof callback=='function'?callback.call(this):callback=false; 
            // Check if obj $.isArray() fucntion() jQuery    
            if($.isArray(obj)){
                obj=obj;// Set obj to obj
            }else if(obj.length>0){
                // Store the first item of the obj
                var first=obj,
                // Transforme obj in a Array[]    
                obj=[obj];
                // Check if the Array() works
                $.isArray(obj)?c('yes isso e um Array'):c('no isso nao e um Array')
                    // Loop args var and .push() inside the obj Array[]
                    for(var i=1;i<args.length;i++){
                        if(typeof args[i] == 'function'){
                            callback=args[i];
                            callback.call(this);
                        }else{
                        // Make the new Array[]
                        obj.push(args[i]);
                        }
                    }// End of the for loop
            } 
            c(typeof callback);
            c(callback)
            Array.prototype.clean=function(deleteValue){
                for (var i=0;i<this.length;i++){
                    if(this[i]==deleteValue){         
                        this.splice(i,1);
                            i--;
                    }
                }
            return this;
            };// Special function to clean all Arrays[]
            
            var f,d,e,s,
                t = this,
                sw=false,
                hd=false,
                empty,
                effect = new Array('fade','explode','slide','fold','blind','clip','drop','puff','scale'),
                easing = new Array('swing','linear','Quad','Cubic','Quart','Sine','Expo','Quint','Circ','Elastic','Back','Bounce'),
                direction = new Array('up','down','right','left','vertical','horizontal'),
                df = ['explode','up','linear',700],/* DEFAULTS */
                /*to help check inside the check function()*/
                insideCheck = ['easeInQuad','easeOutQuad','easeInOutQuad','easeInCubic','easeOutCubic','easeInOutCubic','easeInQuart','easeOutQuart','easeInOutQuart','easeInExpo','easeOutExpo','easeInOutExpo','easeInQuint','easeOutQuint','easeInOutQuint','easeInCirc','easeOutCirc','easeInOutCirc','easeInElastic','easeOutElastic','easeInOutElastic','easeInBounce','easeOutBounce','easeInOutBounce','easeInBack','easeOutBack','easeInOutBack','easeInSine','easeOutSine','easeInOutSine','swing','linear'];
/* CHECK OBJ BEFORE EVERTHING ELSE */
if(obj){
    obj.clean(undefined);
    obj.clean(null);
    obj.clean(0);
    obj.clean(false);
    // Check the obj Array[] for any unwanted value 
    var boo=function(){
                    if(obj.length<4){
                        return true; 
                    }else{
                        return false;
                    }
                };//END OF VAR BOO FUNCTION()
    $.each(obj,function(index,value){
        if(!isNaN(value))
            s=value;
        else if(value=='sw'||value=='show')
            sw=true;
        else if(value=='hd'||value=='hide')
            hd=true;
        else if(checkF(value))
            f = checkF(value);
        else if(checkD(value))
            d = checkD(value);
        else if(checkE(value))
            e = checkE(value);
    });
    if(boo){//If the var are still undefined as they were, give them the default value on the df[] Array 
        $.each([f,d,e,s],function(i,v){
            if(typeof v=='undefined'){
                if(i==0)
                    f=df[i]
                else if(i==1)
                    d=df[i]
                else if(i==2)
                    e=df[i]
                else
                    s=df[i];
            }
        });
    }
}
/* ELSE FROM THE IF OBJ */ 
        /*
        *After this point is just the check Function()
        *this is the end of  if(all.length <= 3 || all.length === 0 || all.length > 5){}else{}
        **/
        if(f===0||f===false){
            jQuery.fn.msgErro(4,'value of Effect is not valid'); 
            return;
        }
        if(d===0||d===false){
            jQuery.fn.msgErro(4, 'value of Direction is not valid');
            return;
        }
        if(e===0||e===false){
            jQuery.fn.msgErro(4, 'value of Easing is not valid');
            return;
        }
        /*I do not think that 's' needs more check then this*/
        if(isNaN(s)){
            s=df[3];    
        }
        
        /* START FUCNTIONS TO CHECK THE LETTERS */
            function checkD(d){
                var bd = 0;
                $.each(direction, function(index, value){
                    if(d == value[0][0] || d == value.slice(0, 2) || d == value.slice(0, value.length)){
                        d = value;
                        bd = 1;
                    }
                });
                if(bd !== 0 && bd === 1){
                    return d;
                }else{
                    return 0;
                }
            }//end of Duration function
            //This is to help make the easing
            function check(t){
                var bt = 0;
                $(easing).each(function(index, value){
                    if(t == value.slice(0,1) || t == value.slice(0,2) || t == value){
                        t = value;
                        bt = 1;
                    }
                });
                if(bt !== 0 && bt === 1){
                    return t;
                }else{
                    return 0;
                }
            }//end of function check
            function checkF(f){
                var bf = 0;
                
                $.each(effect, function(index, value){
                    if(f == value[0][0] || f == value.slice(0, 2) || f == value.slice(0, value.length)){
                        f = value;
                        bf = 1;
                    }
                });
                if(bf !== 0 && bf === 1){
                    return f;
                }else{
                    return 0;
                }
            }//end of check 'f' var for effect
            /* HERE STARTS THE 'e' */
    function checkE(e){
        var be = 0;
        
        if(e.length > 10){
            e = e;
        }else{        
                
        
        var smallWord = e.slice(0, e.length);
        var finishWord;
        var e0_1 = e.slice(0,1);//catch the first letter
        var e0_2 = e.slice(0,2);//catch the first and second letter
        var e1_2 = e.slice(1,2);//catch only the second letter
        var e2_3 = e.slice(2,3);//catch only the third letter
            
            if(smallWord.length >= 3 || smallWord.length < 10){
                //only for ioback or iobounce and etc...    
                if(e0_2 === 'io'){
                    finishWord = check(e2_3.toUpperCase() + e.slice(3, e.length));
                        e = 'easeInOut' + finishWord;
                }else if(e0_1 !== 'o' && e0_2 !== 'io' && e0_1 === 'i'){
                    finishWord = e1_2.toUpperCase() + e.slice(2, e.length);
                        e = 'easeIn' + finishWord;
                }else{
                    finishWord = e1_2.toUpperCase() + e.slice(2, e.length);
                        e = 'easeOut' + finishWord;
                }
            //and here is the ELSE from the bigWord IF    
            }else{
                /* here is after bigWord var only way to come
                * here is, if pass values in short way like 
                * 'ios' 'os' 'is' */
                //find the 'io' 'i' or 'o'
                if(e0_2 === 'io'){
                    // grabs the letter after 'io'
                    finishWord = e2_3.toUpperCase();
                        // transforme 'io' in 'easeInOut', make sense
                        //loop in array easing until find a element that the
                        // first letter or first and the second match the var
                        // finishWord...
                        finishWord = check(finishWord);
                            e = 'easeInOut' + finishWord;//so string concatentation on them
                }else if(e0_1 !== 'o' && e0_2 !== 'io' && e0_1 === 'i'){
                    finishWord = e1_2.toUpperCase();
                        finishWord = check(finishWord);
                            e  = 'easeIn' + finishWord;
                }else if(e0_1 === 'o' && e0_1 !== 'i' && e0_2 !== 'io'){
                    /*
                    *This is suppost to catch the 'o'
                    *string.
                    **/
                    //here this var assined after 'o'
                    finishWord = e1_2.toUpperCase();
                        //then assine new value for 'e'
                        //now  a new word with function check()                
                            finishWord = check(finishWord);//trying to make a function to do this........ 
                                e = 'easeOut' + finishWord;
                }else if(e === 'l' || e === 'linear'){
                    e = 'linear';
                }else if(e === 's' || e === 'swing'){
                    e = 'swing';
                }else{
                    /* TRIED EVERTHING BUT IF NOTHING WORKS TRHOW IT */
                    jQuery.fn.msgErro(4)
                    return false;
                }
            }/* HERE ENDS THE 'e' */
        }/* THE BRACEL IS ELSE FOR THE LENGTH MORE THAN 9 */
        /* REPLAY ESPECIAL */
        if(be === 0){
            $.each(insideCheck, function(index, value){
                if(e == value){
                    be = 1;
                }
            });
        }//end of stat that will give final check fro easing effects
        /* REPLAY ESPECIAL */
        
        /* DECISION IF WILL TURN BACK 0 OR 1 */
                if(be !== 0 && be === 1){
                    return e;
                }else{
                    return 0;
                }//This If and Else atatment must be placed at bottom at function
            }//end of function checkE(e);
        function c(m){
            return console.log(m);
        }
            
            var callResultEffect = function(){
                sw==true?empty='show':hd==true?empty='hide':empty='toggle';
                return eval("t.each(function(){t."+empty +"({effect:f,direction:d,easing:e,duration:s});});")
            }();// Function that eval() and call itself .toggle(), .show() or .hide();
        return this;//RETURNING THE PLUGIN ITSELF
        }
    })( jQuery );        
    
    
