(function($){
    
    jQuery.fn.lz=function(obj,callback){
        
        /*I save that var the check if least one thing
        is coming on the Function(){} 
        */
        var first=obj;

    

// All the arrays nedded in this Function(){}
var effect=['fade','explode','slide','fold','blind',
                        'clip','drop','puff','scale'],
    easing=['swing','linear','Quad','Cubic','Quart',
                        'Sine','Expo','Quint','Circ','Elastic','Back','Bounce'],
    direction=new Array('up','down','right','left','vertical','horizontal'),
    easingDoubleCheck=['easeInQuad','easeOutQuad','easeInOutQuad','easeInCubic','easeOutCubic','easeInOutCubic',
                        'easeInQuart','easeOutQuart','easeInOutQuart','easeInExpo','easeOutExpo',
                        'easeInOutExpo','easeInQuint','easeOutQuint','easeInOutQuint','easeInCirc',
                        'easeOutCirc','easeInOutCirc','easeInElastic','easeOutElastic','easeInOutElastic',
                        'easeInBounce','easeOutBounce','easeInOutBounce','easeInBack','easeOutBack',
                        'easeInOutBack','easeInSine','easeOutSine','easeInOutSine','swing','linear'];
  
    // If is a Array that is coming obj is obj and that is it
    /* like $(this).lz([ 's' , 's' , 'l' ], function(){ callback }) */
    if($.isArray(obj)) obj=obj;
    
    // If not continue
    else{

        // Last check if come something on the Function(){}
        if(obj||first!=='undefined'){
            
            // As something came
            // It must be on argumentes Object
            // So turn it into a Array and Loop 
            var args=Array.prototype.slice.call(arguments);
                
                // Transforme obj into a Array[]
                obj=new Array;
            
            for(var i=0;i<args.length+1;i++){
                /*Loop through arguments as args var 
                 * and in is a Function on it put it on callback
                 * and the rest just push into obj Array[]
                 **/
                typeof args[i]=='function'?callback=args[i]:obj.push(args[i]);
            }
        }
    }//needed all closes!!!
    
    // create a function inside all Arrays to check and clean for 
    // empty values
    Array.prototype.clean=function(deleteValue){
        for(var i=0;i<this.length;i++){
            // if there is function inside this
            // take it out
            if(this[i]==deleteValue&&typeof this[i]!=='function'){this.splice(i,1);i--;}
            else if(typeof this[i]=='function'){this.splice(i,1);i--;}}
        return this;};
        
    var t=this, // This
        off=50,/* SOME TIME after the main function end the call callback */
        cIA=0, // var that helps the auxiliar function
        f,d,e,s, // our main vars
        sw=false, // for show method
        hd=false, // for hide method
        empty; // to decide which method will be
        // toggle is the method default
    
    if(obj){
        // if ibj has some
      // then clean it up dummy values
        
        obj.clean(undefined);
        obj.clean(null);
        obj.clean(0);
        obj.clean(false);
        

    $.each(obj,function(i,v){
        // loop in obj Array[]
        if(typeof v=='number'){
            s=v;
        }
        else if(v=='sh'||v=='show'){
            sw=true;
        }
        else if(v=='hd'||v=='hide'){
            hd=true;
        }
        /* check first the var and if does not work skip 
         * the evaluation of the Function(){} */
        else if(!d&&all(direction,v)){
            d=all(direction,v);
            return;
            /* This two returns are necessy, because the plan set up 
             * its var only one time to in cases when type ( 's' , 's' )
             * came up easing: 'swing', and effect: 'scale' */
        }
        else if(!f&&all(effect,v)){
            f=all(effect,v);
            return;
        }
        else if(!e&&checkE(v)){
            e=checkE(v);
        }
        

    });
    }
        off+=s;/* This is the duration time plus half second 
               * This is the time the callback will wait to start
               * */
        
        if(sw==true){/*
                        Check sh = 'show' and hd = 'hide'
                        if nothing the default method is toggle({});
                   *           **/
            empty='show';
        }
        else if(hd==true){
            empty='hide';
        }else{
            empty='toggle';
        }
        
             
        
        
        if(callback&&typeof callback=='function'){/*
                Check if callback is a function
                it was decided up in the code
                   *           **/
            callback=callback
        }
        else{
            /* If no callback it turns in one empty String */
            callback='';
        } 
        /* 
         *  Continue checking the letters 
         *  and need to decide if needs comma or not 
         *  and if the letter is undefined sets a empty String 
         *    */
        if(s){
            if(e||d||f){
                s=',duration:'+s
            }else{
                s='duration:'+s
            }
        }
        else{
            s='';
        }
        
        if(e){
            if(d||f){
                e=',easing:\''+e+'\'';
            }else{
                e='easing:\''+e+'\''
            }
        }
        else{
            e='';
        }
        
        if(d){
            if(f){
                d=',direction:\''+d+'\'';
            }else{
                d='direction:\''+d+'\'';
            }
        }
        else{
            d='';
        }
        if(f){
            f='effect:\''+f+'\'';
        }
        else{
            f='';
        }/* end of the letters check up */
        /* LAST CHECK */
    
    /* START RETURN */
    return t.each(function(){
        //console.log(f +"   "+ d +"   "+ e  +"   "+  s +"   "+ callback +'   '+empty);
           //If you want to test use this console line
           
            eval( 't.' +empty+ '({' +f +d +e +s+ '})' );
            /* After this eval everthing turns true 
             * the empty will turn into a method
             * and the letters will be the objects parameters 
             * if theirs any the method will be in default as set in jQuery */
            
            if(typeof callback=='function'){
                window.setTimeout(function(){callback.call(this);},(off));
            }/* if their is callback trigger after the method */
            
            
            
             
    });/* END OF THIS EACH FUNCTION */
    /* END RETURN */

/* START FUNCTIONS() */
/* Function(){} that will check almost all the values less the easing value */
function all(ar,vl){
    for(var ix=0;ix<ar.length;ix++){
        if(vl==ar[ix].slice(0,1)||vl==ar[ix].slice(0,2)||vl==ar[ix]){
            vl=ar[ix];
                cIA=1;
        }
    }
    if(cIA!==0&&cIA===1){cIA=0;return vl;}else return 0;
}


function checkE(e){
    
        if(e=='l'||e=='linear'||e=='li')
            e='linear';
        else if(e=='s'||e=='swing'||e=='sw')
            e='swing';
        else if(e.length>10)
            e=e;
        else{        

            var sW=e.slice(0,e.length),
                fW,
                e0_1=e.slice(0,1),
                e0_2=e.slice(0,2),
                e1_2=e.slice(1,2),
                e2_3=e.slice(2,3);
        
                                        /* I add &&smallWord!==e0_2
                                         * but I still need futher tests */
            if(sW.length>=3||sW.length<10&&sW!==e0_2){
                
                if(e0_2=='io'){
                
                    fW=check(e2_3.toUpperCase()+e.slice(3,e.length));
                        e='easeInOut'+fW;
                
                }else if(e0_1!='o'&& e0_2!='io'&&e0_1=='i'){
                    
                    fW=e1_2.toUpperCase()+e.slice(2,e.length);
                        e='easeIn'+fW;
                
                }else{
                    
                    fW=e1_2.toUpperCase()+e.slice(2,e.length);
                        e='easeOut'+fW;
                
                }
            }else{
                
                if(e0_2=='io'){
                    
                    fW=e2_3.toUpperCase();
                        fW=all(ea,fW);
                            e='easeInOut'+fW;
                
                }else if(e0_1!='o'&&e0_2!='io'&&e0_1=='i'){
                    
                    fW=e1_2.toUpperCase();
                        fW=all(ea,fW);
                            e='easeIn'+fW;
                
                }else if(e0_1=='o'&&e0_1!='i'&&e0_2!='io'){
                    
                    
                    fW=e1_2.toUpperCase();
                        fW=all(ea,fW);
                            e='easeOut'+fW;
                
                }
            
            }
            
        }/* END OF ELSE */
        cIA===0?$.each(iC,function(i,v){if(e==v)cIA=1}):cIA=cIA;
        
        if(cIA!==0&&cIA===1){cIA=0;return e;}else return 0;
}

//function c(m){return console.log(m);}
/* END FUNCTIONS() */
}})(jQuery);


