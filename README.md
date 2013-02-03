lazyPlugin
==========

I do not like to type a lot, so I did to show and hide and toggle with less typing

example: 

                $(this).toggle({
                                effect: 'scale',
                                direction: 'up',
                                easing: 'easeInOutBounce',
                                duration: 800,
                                complete: function(){
                                                $(someElement).after($('<h2/>').text('Test text'));
                                }
                });
                
With the Lazy Plugin it will be:

        $(this).lz('s', 800, 'iobo', 'u', function(){
            $(someElement).after($('<h2/>').text('Test text'));
        });

It in any ordem.

I am a beginner I learned JavaScript and jQuery and I really the Object Notation that,
we can find in any jQuery Plugin, however it is not for me.

So you can type just the first letter of the effect and kabum all done.





