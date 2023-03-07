var $ = require('jquery');

console.log('Initializing Hopper modules, just trying to use jQuery!', $('body'));

$("#contribution").click(function(){
	console.log('Switching out Contribution section');
	$("#mainContent").hidden = !("#mainContent").hidden;
	$("#contribution").hidden = !("#contribution").hidden;
})

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
  
  $("#mainButton").click(function(){
	console.log('Switching to Main section');
	toggleSection('mainContent');
	//$("#mainContent").css('display','inline')
	//$("#contribution").css('display','none');
	//$("#fame").css('display','none');
	//$("#childhood").css('display','none');
	//$("#legacy").css('display','none');
	//$("#credits").css('display','none');
	
  })
  
  $("#contributionButton").click(function(){
	console.log('Switching to Contribution section');
	toggleSection('contribution');
  })

  $("#fameButton").click(function(){
	console.log('Switching to Fame section');
	toggleSection('fame');
  })
  
  $("#childhoodButton").click(function(){
	console.log('Switching to Childhood section');
	toggleSection('childhood');
  })

  $("#legacyButton").click(function(){
	console.log('Switching to Legacy section');
	toggleSection('legacy');
  })
  
  $("#creditsButton").click(function(){
	console.log('Switching to Credits section');
	toggleSection('credits');
  })

});

function toggleSection(name){
	$("#mainContent").css('display','none')
	$("#contribution").css('display','none');
	$("#fame").css('display','none');
	$("#childhood").css('display','none');
	$("#legacy").css('display','none');
	$("#credits").css('display','none');
	switch (name){
		case "mainContent":
			$("#mainContent").css('display','inline');
			break;
		case "contribution":
			$("#contribution").css('display','inline');
			break;
		case "fame":
			$("#fame").css('display','inline');
			break;
		case "childhood":
			$("#childhood").css('display','inline');
			break;
		case "legacy":
			$("#legacy").css('display','inline');
			break;
		case "credits":
			$("#credits").css('display','inline');
			break;
		default:
			$("#mainContent").css('display','inline');
	}
}
