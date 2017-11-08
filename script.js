// This function is called whenever a ".readmore" class object is clicked.
function changeColor(){
    $(this).css("color", "pink");
    $(this).text("IM FABULOUS");
  }
function changeColor2(){
   $(this).css("color", "black");
   $(this).text('Marguerite (Meg) Ashby');
  }


function readmoreClicked() {
  detailsContent = $(this).siblings(".details");
  if ($(this).text() == "Read More") {
    $(this).text("Hide Details");
    $(this).css("color", "purple");
    $(detailsContent).slideDown();
  } else {
    $(this).text("Read More");
    $(this).css("color", "blue");
    $(detailsContent).slideUp();
  }
}

function showImageForProject(projectRow) {
  $(this).find(".project_image").stop(true).fadeIn("slow");
  
}

function hideImageForProject(projectRow) {
  $(this).find(".project_image").delay(2000).fadeOut(2000);
}

function moveToRandomLocation() {
  var width = $(window).width() - $(this).width();
  var randX = Math.floor(Math.random() * 1000);
  var randY = Math.floor(Math.random() * 1000);
  $(this).css({top: randX, left: randY});
}

function startAd() {
  $("#annoying_ad").show().css({top: 0, left: 0});
  $("#annoying_ad").mouseover(moveToRandomLocation);
  $("#annoying_ad").mousemove(moveToRandomLocation);
}

// Starts jQuery event listeners (must be called after everything is loaded).
function setupListeners() {
  $(".readmore").click(readmoreClicked);
  $("#projects_table tr:odd").css("background-color", "#eee");
  $(".section").hover(function() {
    $(this).addClass("highlighted");  // On mouseover.
  }, function() {
    $(this).removeClass("highlighted");  // On mouse exit.
  });
  $("#projects_table tr").hover(showImageForProject, hideImageForProject);
  $("#ad_button").click(startAd);
  $('#name_and_city').hover(changeColor, changeColor2);
  
}

// This function is automatically called when everything is done loading.
$(document).ready(function() {
  $(".readmore").text("Read More");
  $(".details").hide();
  setupListeners();

});
