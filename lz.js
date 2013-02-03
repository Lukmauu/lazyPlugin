(function($){
    
    jQuery.fn.lz=function(obj,callback){
        
        /*I save that var the check if least one thing
        is coming on the Function(){} 
        */
        var first=obj;

    

// All the arrays nedded in this Function(){}
var ef=['fade','explode','slide','fold','blind',
                        'clip','drop','puff','scale'],
    ea=['swing','linear','Quad','Cubic','Quart',
                        'Sine','Expo','Quint','Circ','Elastic','Back','Bounce'],
    di=new Array('up','down','right','left','vertical','horizontal'),
    iC=['easeInQuad','easeOutQuad','easeInOutQuad','easeInCubic','easeOutCubic','easeInOutCubic',
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
        if(typeof v=='number')s=v;
        else if(v=='sh'||v=='show')sw=true;
        else if(v=='hd'||v=='hide')hd=true;
        else if(!d&&all(di,v)){d=all(di,v);return;}
        else if(!f&&all(ef,v)){f=all(ef,v);return;}
        else if(!e&&checkE(v))e=checkE(v);
        

    });
    }
        off+=s;/* IMPORTAMT VAR */
        
        sw==true?empty='show':hd==true?empty='hide':empty='toggle';
        callback&&typeof callback=='function'?callback=callback:callback=''; 
        s?e||d||f?s=',duration:'+s:s='duration:'+s:s='';
        e?d||f?e=',easing:\''+e+'\'':e='easing:\''+e+'\'':e='';
        d?f?d=',direction:\''+d+'\'':d='direction:\''+d+'\'':d='';
        f?f='effect:\''+f+'\'':f='';
    /* LAST CHECK */
    
    /* START RETURN */
    return t.each(function(){
        console.log(f +"   "+ d +"   "+ e  +"   "+  s +"   "+ callback +'   '+empty);
            eval( 't.' +empty+ '({' +f +d +e +s+ '})' );
            
            
            if(typeof callback=='function'){
                window.setTimeout(function(){callback.call(this);},(off));
            }
            
            
            
             
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
