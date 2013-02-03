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
