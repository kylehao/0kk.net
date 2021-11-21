(function($){
    $(function() {
     
        if(jQuery.support.opacity){
             
            var fadeSpeed = 400;
            var rolloverImg = $('a img');
             
            rolloverImg.each(function() { 
                if(this.src.match('_off')) { 
                var imgWidth = $(this).width();
                  var imgHeight = $(this).height();
                    $(this).parent('a').css( {display: 'inline-block', width: imgWidth, height: imgHeight});
                     
                    this.onImgSrc = new Image();
                    this.onImgSrc.src = this.getAttribute('src').replace('_off', '_on'); 
                    $(this.onImgSrc).css( {position: 'absolute', opacity: 0} ); 
                    $(this).before(this.onImgSrc);
                     
                    //$(this.onImgSrc).mousedown(function(){ 
                        //$(this).stop().animate({opacity: 0}, {duration: fadeSpeed, queue: false}); 
                    //}); 
             
                    $(this.onImgSrc).hover(
                        function(){ $(this).animate( {opacity: 1}, {duration: fadeSpeed, queue: false}); },
                        function(){ $(this).animate( {opacity: 0}, {duration: fadeSpeed, queue: false}); }
                    );
					 
                } 
            });
        } else { // IE8-
            $('a[href] img, input[type="image"]').mouseover(function() {
                $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
                $(this).mouseout(function() {
                    $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
                });
            });
        }
 
    });
})(jQuery);