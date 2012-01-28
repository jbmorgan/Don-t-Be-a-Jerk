// ==UserScript==
// @name          Don't Be a Jerk.
// @namespace     http://www.theinterwebs.com
// @description	  Encourages you not to be an jerk online.
// @author        Jonathan Morgan
// @homepage      http://www.theinterwebs.com

// ==/UserScript==
var alreadyWarned = false;
addEventListeners();

//adds an event listener to every textarea on the current page
function addEventListeners() {
    for(i=0; i < document.forms.length; i++) {
        for(j=0; j < document.forms[i].elements.length; j++) {
            if(document.forms[i].elements[j].type == "textarea") {
                document.forms[i].elements[j].addEventListener("input",warn,false);
            }
        }
    }
}

//warns the user to not be a jerk
//only runs once per page
function warn() {
    if(!alreadyWarned) 
        alert("Don't be a jerk."); 
    alreadyWarned = true;
}