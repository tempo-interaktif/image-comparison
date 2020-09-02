// Call & init
$(document).ready(function(){
    $('#kpam1, #ks1').css('display','block')
    $('.ba-slider').each(function(){
      var cur = $(this);
      // Adjust the slider
      var width = cur.width()+'px';
      cur.find('.resize img').css('width', width);
      // Bind dragging events
      drags(cur.find('.handle'), cur.find('.resize'), cur);
    });
  });
  
  // Update sliders on resize. 
  // Because we all do this: i.imgur.com/YkbaV.gif
  $(window).resize(function(){
    $('.ba-slider').each(function(){
      var cur = $(this);
      var width = cur.width()+'px';
      cur.find('.resize img').css('width', width);
    });
  });
  
  function drags(dragElement, resizeElement, container) {
      
    // Initialize the dragging event on mousedown.
    dragElement.on('mousedown touchstart', function(e) {
      
      dragElement.addClass('draggable');
      resizeElement.addClass('resizable');
      
      // Check if it's a mouse or touch event and pass along the correct value
      var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
      
      // Get the initial position
      var dragWidth = dragElement.outerWidth(),
          posX = dragElement.offset().left + dragWidth - startX,
          containerOffset = container.offset().left,
          containerWidth = container.outerWidth();
   
      // Set limits
      minLeft = containerOffset + 10;
      maxLeft = containerOffset + containerWidth - dragWidth - 10;
      
      // Calculate the dragging distance on mousemove.
      dragElement.parents().on("mousemove touchmove", function(e) {
          
        // Check if it's a mouse or touch event and pass along the correct value
        var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
        
        leftValue = moveX + posX - dragWidth;
        
        // Prevent going off limits
        if ( leftValue < minLeft) {
          leftValue = minLeft;
        } else if (leftValue > maxLeft) {
          leftValue = maxLeft;
        }
        
        // Translate the handle's left value to masked divs width.
        widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
              
        // Set the new values for the slider and the handle. 
        // Bind mouseup events to stop dragging.
        $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
          $(this).removeClass('draggable');
          resizeElement.removeClass('resizable');
        });
        $('.resizable').css('width', widthValue);
      }).on('mouseup touchend touchcancel', function(){
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
      });
      e.preventDefault();
    }).on('mouseup touchend touchcancel', function(e){
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
    });
  }  

$(document).on('change','#change-kpam', function() {
    $('#image-kpam').find('.hide-img').hide()
    $('#image-kpam').find('#'+$(this).val()).css('display','block')
    switch ($(this).val()) {
      case 'kpam1':
        $('#kpam-date').html('26 Juli 2019')
        $('#kpam-image').attr('src','assets/images/kpam/slide-1-26-Juli-2019.png')
        break;
      case 'kpam2':
        $('#kpam-date').html('04 September 2019')
        $('#kpam-image').attr('src','assets/images/kpam/slide-2-04-September-2019.png')
        break;
      case 'kpam3':
        $('#kpam-date').html('19 September 2019')
        $('#kpam-image').attr('src','assets/images/kpam/slide-3-19-September-2019.png')
        break;
      default:
        $('#kpam-date').html('26 Juli 2019')
        $('#kpam-image').attr('src','assets/images/kpam/slide-1-26-Juli-2019.png')
        break;
    }
})
$(document).on('change','#change-ks', function() {
    $('#image-ks').find('.hide-img').hide()
    $('#image-ks').find('#'+$(this).val()).css('display','block')
    switch ($(this).val()) {
      case 'ks1':
        $('#ks-date').html('30 Maret 2018')
        $('#ks-image').attr('src','assets/images/ks/slide-1-30-Maret-2018.png')
        break;
      case 'ks2':
        $('#ks-date').html('04 Januari 2019')
        $('#ks-image').attr('src','assets/images/ks/slide-2-04-Januari-2019.png')
        break;
      case 'ks3':
        $('#ks-date').html('20 Maret 2019')
        $('#ks-image').attr('src','assets/images/ks/slide-3-20-Maret-2019.png')
        break;
      case 'ks4':
        $('#ks-date').html('28 Juli 2019')
        $('#ks-image').attr('src','assets/images/ks/slide-4-28-Juli-2019.png')
        break;
      case 'ks5':
        $('#ks-date').html('22 Agustus 2019')
        $('#ks-image').attr('src','assets/images/ks/slide-5-22-Agustus-2019.png')
        break;
      case 'ks6':
        $('#ks-date').html('01 September 2019')
        $('#ks-image').attr('src','assets/images/ks/slide-6-01-September-2019.png')
        break;
      default:
        $('#ks-date').html('30 Maret 2018')
        $('#ks-image').attr('src','assets/images/ks/slide-1-30-Maret-2018.png')
        break;
    }
})