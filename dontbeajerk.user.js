// ==UserScript==
// @name          Don't Be a Jerk.
// @namespace     http://www.theinterwebs.kom
// @description	  Encourages you not to be an jerk online.
// @author        Jonathan Morgan
// @homepage      http://www.theinterwebs.kom/

// ==/UserScript==
var alreadyWarned = false;
getAllForms();

function getAllForms() {
    for(i=0; i < document.forms.length; i++) {
        for(j=0; j < document.forms[i].elements.length; j++) {
            if(document.forms[i].elements[j].type == "textarea") {
                document.forms[i].elements[j].addEventListener("input",warn,false);
            }
        }
    }
}

function warn() {
    if(!alreadyWarned) 
        alert("Don't be a jerk."); 
    alreadyWarned = true;
}