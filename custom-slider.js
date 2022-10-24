<script type="text/javascript">

var current_slide_1, end_slide_1, end_slide_2, change_slide_status_1, change_slide_status_2, get_image_1, get_image_2, set_delay_1, set_delay_2, current_slide_2, get_video_id_1, get_video_id_2, set_fade_1, set_fade_2, full_video_link_1, full_video_link_2, active_element_1, active_element_2, get_header_1, get_header_2, get_sub_header_1, get_sub_header_2, get_summary_1, get_summary_2;

// Describe this function...
function change_current_slide_1() {
  if (change_slide_status_1 == true) {
    if (current_slide_1 < end_slide_1) {
      current_slide_1 += 1;
    } else {
      current_slide_1 = 1;
    }
  }
}

// Describe this function...
function change_current_slide_2() {
  if (change_slide_status_2 == true) {
    if (current_slide_2 < end_slide_2) {
      current_slide_2 += 1;
    } else {
      current_slide_2 = 1;
    }
  }
}

// Describe this function...
function set_content_1() {
  $("[tc-slider-content-1='interactive-element-1']").removeClass('active-element-1');
  $("[tc-slider-content-1='interactive-element-2']").removeClass('active-element-1');
  $("[tc-slider-content-1='interactive-element-3']").removeClass('active-element-1');
  $("[tc-slider-cms-1='item']").find("[tc-slider-content-1='interactive-element-1']").eq(current_slide_1 - 1).addClass('active-element-1');
  $("[tc-slider-cms-1='item']").find("[tc-slider-content-1='interactive-element-2']").eq(current_slide_1 - 1).addClass('active-element-1');
  $("[tc-slider-cms-1='item']").find("[tc-slider-content-1='interactive-element-3']").eq(current_slide_1 - 1).addClass('active-element-1');
  $("[tc-slider-content-1='set-video']").attr('src',full_video_link_1);
  $("[tc-slider-content-1='set-image']").fadeOut(set_fade_1);
  setTimeout(function(){
          $("[tc-slider-content-1='set-image']").attr( 'src',get_image_1);
    setTimeout(function(){
            $("[tc-slider-content-1='set-image']").fadeIn(set_fade_1);
     }, 50);
   }, set_fade_1);
  $("[tc-slider-content-1='set-header']").fadeOut( set_fade_1, function() {   $(this).text(get_header_1).fadeIn(set_fade_1); });
  $("[tc-slider-content-1='set-sub-header']").fadeOut( set_fade_1, function() {   $(this).text(get_sub-header_1).fadeIn(set_fade_1); });
  $("[tc-slider-content-1='set-summary']").fadeOut( set_fade_1, function() {   $(this).text(get_summary_1).fadeIn(set_fade_1); });
}

// Describe this function...
function set_content_2() {
  $("[tc-slider-content-2='interactive-element-1']").removeClass('active-element-2');
  $("[tc-slider-content-2='interactive-element-2']").removeClass('active-element-2');
  $("[tc-slider-content-2='interactive-element-3']").removeClass('active-element-2');
  $("[tc-slider-cms-2='item']").find("[tc-slider-content-2='interactive-element-1']").eq(current_slide_2 - 1).addClass('active-element-2');
  $("[tc-slider-cms-2='item']").find("[tc-slider-content-2='interactive-element-2']").eq(current_slide_2 - 1).addClass('active-element-2');
  $("[tc-slider-cms-2='item']").find("[tc-slider-content-2='interactive-element-3']").eq(current_slide_2 - 1).addClass('active-element-2');
  $("[tc-slider-content-2='set-video']").attr('src',full_video_link_2);
  $("[tc-slider-content-2='set-image']").fadeOut( set_fade_2);
  setTimeout(function(){
          $("[tc-slider-content-2='set-image']").attr( "src",get_image_2);
    setTimeout(function(){
            $("[tc-slider-content-2='set-image']").fadeIn( set_fade_2);
     }, 50);
   }, set_fade_2);
  $("[tc-slider-content-2='set-header']").fadeOut( set_fade_2, function() {   $(this).text(get_header_2).fadeIn(set_fade_2); });
  $("[tc-slider-content-2='set-sub-header']").fadeOut( set_fade_2, function() {   $(this).text(get_sub-header_2).fadeIn(set_fade_2); });
  $("[tc-slider-content-2='set-summary']").fadeOut( set_fade_2, function() {   $(this).text(get_summary_2).fadeIn(set_fade_2); });
}

// Describe this function...
function get_content_1() {
  get_image_1 = $("[tc-slider-cms-1='item']").find("[tc-slider-content-1='get-image']").eq(current_slide_1 - 1).attr('src');
  get_video_id_1 = $("[tc-slider-cms-1='item']").find("[tc-slider-content-1='get-video-id']").eq(current_slide_1 - 1).text();
  full_video_link_1 = 'https://player.vimeo.com/video/' + String(get_video_id_1);
  active_element_1 = $("[tc-slider-cms-1='item']").find("[tc-slider-content-1='get-header']").eq(current_slide_1 - 1).text();
  get_header_1 = $("[tc-slider-cms-1='item']").find("[tc-slider-content-1='get-header']").eq(current_slide_1 - 1).text();
  get_sub_header_1 = $("[tc-slider-cms-1='item']").find("[tc-slider-content-1='get-sub-header']").eq(current_slide_1 - 1).text();
  get_summary_1 = $("[tc-slider-cms-1='item']").find("[tc-slider-content-1='get-summary']").eq(current_slide_1 - 1).text();
}

// Describe this function...
function get_content_2() {
  get_image_2 = $("[tc-slider-cms-2='item']").find("[tc-slider-content-2='get-image']").eq(current_slide_2 - 1).attr('src');
  get_video_id_2 = $("[tc-slider-cms-2='item']").find("[tc-slider-content-2='get-video-id']").eq(current_slide_2 - 1).text();
  full_video_link_2 = 'https://player.vimeo.com/video/' + String(get_video_id_2);
  active_element_2 = $("[tc-slider-cms-2='item']").find("[tc-slider-content-2='get-header']").eq(current_slide_2 - 1).text();
  get_header_2 = $("[tc-slider-cms-2='item']").find("[tc-slider-content-2='get-header']").eq(current_slide_2 - 1).text();
  get_sub_header_2 = $("[tc-slider-cms-2='item']").find("[tc-slider-content-2='get-sub-header']").eq(current_slide_2 - 1).text();
  get_summary_2 = $("[tc-slider-cms-2='item']").find("[tc-slider-content-2='get-summary']").eq(current_slide_2 - 1).text();
}

// Describe this function...
function slider_action_1() {
  if (change_slide_status_1 == true) {
    set_content_1();
    setTimeout(function(){
            change_current_slide_1();
      get_content_1();
      slider_action_1();
     }, set_delay_1);
  }
}

// Describe this function...
function slider_action_2() {
  if (change_slide_status_2 == true) {
    set_content_2();
    setTimeout(function(){
            change_current_slide_2();
      get_content_2();
      slider_action_2();
     }, set_delay_2);
  }
}


current_slide_1 = 1;
end_slide_1 = $("[tc-slider-cms-1='item']").length;
set_delay_1 = $("[tc-slider-content-1='get-delay']").text();
set_fade_1 = $("[tc-slider-content-1='get-fade']").text();
change_slide_status_1 = true;
get_content_1();
slider_action_1();
if (set_delay_1 <= 0) {
  change_slide_status_1 = false;
}
if (set_fade_1 <= 0) {
  set_fade_1 = 350;
}
set_delay_1 = parseFloat(set_delay_1);
set_fade_1 = parseFloat(set_fade_1);

current_slide_1 = 1;
end_slide_2 = $("[tc-slider-cms-2='item']").length;
set_delay_2 = $("[tc-slider-content-2='get-delay']").text();
set_fade_2 = $("[tc-slider-content-2='get-fade']").text();
change_slide_status_2 = true;
get_content_2();
slider_action_2();
if (set_fade_2 <= 0) {
  set_fade_2 = 350;
}
if (set_delay_2 <= 0) {
  change_slide_status_2 = false;
}
set_delay_2 = parseFloat(set_delay_2);
set_fade_2 = parseFloat(set_fade_2);

$("[tc-slider-cms-1='item']").on('click',function() {
  change_slide_status_1 = false;
  current_slide_1 = $(this).index() + 1;
  get_content_1();
  set_content_1();
  setTimeout(function(){
          change_current_slide_1();
    if (set_delay_1 > 0) {
      change_slide_status_1 = true;
      slider_action_1();
    }
   }, set_delay_1);
});

$("[tc-slider-cms-2='item']").on('click',function() {
  change_slide_status_2 = false;
  current_slide_2 = $(this).index() + 1;
  get_content_2();
  set_content_2();
  setTimeout(function(){
          change_current_slide_2();
    if (set_delay_2 > 0) {
      change_slide_status_2 = true;
      slider_action_2();
    }
   }, set_delay_2);
});

$("[tc-slider-cms-1='item']").on('mouseover',function() {
  $(this).find("[tc-slider-content-1='interactive-element']").addClass('hover-element-1');
});

$("[tc-slider-cms-1='item']").on('mouseout',function() {
  $(this).find("[tc-slider-content-1='interactive-element']").removeClass('hover-element-1');
});

$("[tc-slider-cms-2='item']").on('mouseover',function() {
  $(this).find("[tc-slider-content-2='interactive-element']").addClass('hover-element-2');
});

$("[tc-slider-cms-2='item']").on('mouseout',function() {
  $(this).find("[tc-slider-content-2='interactive-element']").removeClass('hover-element-2');
});

$.getScript('https://custom_library.js');









</script>