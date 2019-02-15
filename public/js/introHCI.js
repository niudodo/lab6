'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);
	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	var url = "/project/" + idNumber; 
	$.get(url,detail);
	console.log("User clicked on project " + idNumber);
}

function detail(result){
	var projectHTML = '<h4>' + result['title'] + '<h4>' +
    '<p><small>' + result['date'] +
    '</small></p>'+'<a href="#" class="detailsImage">' +
    '<img src="' + result['image'] + '" class="img">' + "</a>"
    +"<p>"+result["summary"]+ "</p>"; 
	console.log(projectHTML);
	$("#" + "project" + result['id'] + " .details").html(projectHTML);
}