(function($){


        
jQuery.fn.lz=function(obj,callback){
        
        
                var first=obj;

    


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
  
    if($.isArray(obj)) obj=obj;
    
    else{

        
        if(obj||first!=='undefined'){
            var args=Array.prototype.slice.call(arguments);
                
                obj=new Array;
            
            for(var i=0;i<args.length+1;i++){
                typeof args[i]=='function'?callback=args[i]:obj.push(args[i]);
            }
        }
    }//need all closes!!!
    
    Array.prototype.clean=function(deleteValue){
        for(var i=0;i<this.length;i++){
            if(this[i]==deleteValue&&typeof this[i]!=='function'){this.splice(i,1);i--;}
            else if(typeof this[i]=='function'){this.splice(i,1);i--;}}
        return this;};
        
    var t=this,
        off=50,/* THIS IS AFTER THEN CALLBACK */
        cIA=0,
        f,d,e,s,
        sw=false,
        hd=false,
        empty;
    
    if(obj){
      
        
        obj.clean(undefined);
        obj.clean(null);
        obj.clean(0);
        obj.clean(false);
        

    $.each(obj,function(i,v){
        
        if(typeof v=='number')s=v;
        else if(v=='sh'||v=='show')sw=true;
        else if(v=='hd'||v=='hide')hd=true;
        else if(!d&&all(di,v)){d=all(di,v);return;}
        else if(!f&&all(ef,v)){f=all(ef,v);return;}
        else if(!e&&checkE(v))e=checkE(v);
        

    });
    }
//    if(f===0||f===false){
//        jQuery.fn.msgErro(4,'value of Effect is not valid');
//        return;
//    }
//    if(d===0||d===false){
//        jQuery.fn.msgErro(4, 'value of Direction is not valid');
//        return;
//    }
//    if(e===0||e===false){
//        jQuery.fn.msgErro(4, 'value of Easing is not valid');
//        return;
//    }
    /* LAST CHECK */
        
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
            
            
            
//            if(typeof callback=='function'){
//                function callCallback(callback){
//                    callback.call(this);
//                }(window.setTimeout(function(){callCallback(callback);},(off)));
//            }
            if(typeof callback=='function'){
                window.setTimeout(function(){callback.call(this);},(off));
            }
            
            
            
             
    });/* END OF THIS EACH FUNCTION */
    /* END RETURN */

/* START FUNCTIONS() */
function all(ar,vl){
    for(var ix=0;ix<ar.length;ix++){
        if(vl==ar[ix].slice(0,1)||vl==ar[ix].slice(0,2)||vl==ar[ix]){
            vl=ar[ix];
                cIA=1;
        }
    }
    if(cIA!==0&&cIA===1){cIA=0;return vl;}else return 0;
}

//function checkF(eff){
//    $.each(ef,function(i,v){
//        if(eff==v[0][0]||eff==v.slice(0,2)||eff==v){
//            f=v;
//                cIA=1;
//        }
//    });
//    if(cIA!==0&&cIA===1){cIA=0;return d;}
//    else return 0;
//}
//
//
//function checkD(d){
//    $.each(di, function(i,v){
//        if(d==v[0][0]||d==v.slice(0,2)||d==v.slice(0,v.length)){
//            d=v;
//                    cIA=1;
//            }
//        });
//        if(cIA!==0&&cIA===1){cIA=0;return d;}
//        else return 0;
//}
//
//
//function check(t){
//    $.each(ea,function(i,v){
//        if(t==v.slice(0,1)||t==v.slice(0,2)||t==v){
//            t=v;
//                cIA=1;
//        }
//    });
//    if(cIA!==0&&cIA===1){
//        cIA=0;return t;
//    }else{
//        return 0;
//    }
//}//end of function check




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
