$(document).ready(function(){   

    //session info
    let subjectId;
    let sessionNumber;
    let startingItem;
    let expId;

    //predefine
    predefinedAreas = ['Fillers','Syntax','Process','Vocabulary'];
    predefinedTypes = ['Practice','Wh-Questions','Past_Tense','Verb_learning','Prepositional_Phrases','Converting_Active_to_Passive','Embedded_Clauses','Nouns','Verbs','Noun_Learning','Prepositions','Adjective_Learning','Conjunctions'];

    //results
    let item = [];
    let area = [];
    let type =[]
    let correct = [];
    let resp = [];
    let acc = [];
    let resptime = [];

    //info template
    let getnfoReponse;
    function createTemplateGetInfo(question){
        $("#trial").append("<form id='infoForm'><label>" + question + "<br></label><input class='input-info' type='text'><br><input class='input-info' type='submit' value='OK'></form>");
        createFSButton();
        $("#infoForm").on('submit', function(){
            getInfoReponse = $("input").val();
            setTimeout(function(){
                nextTrial(0);
            }, 10);
            return false;
        })
    }

    //button full screen 
    function createFSButton(){
        $("#trial").append("<div id='btn-center'><button id='fsButton'>Switch Fullscreen For Android</button>Swipe up on taskbar for iPad</div>");
        $("#fsButton").on("click", function(){
            switchFullscreen();
        });
    }

    //question template
    function createTrialTemplate(question){
        if (question.structure = 'a')
            createTplA(question, 1000);
    }

    function  createTplA(question, timeBeforeBlink){
        $("#trial").append("<div class='row-fluid vertical-center-div black-back'><div class='col-sm-3 mx-auto text-center'><img class='yellow-border' src=" + question.img1 +"></div><div class='col-sm-3 mx-auto text-center'><img class='yellow-border' src=" + question.img2 +"></div><div class='col-sm-3 mx-auto text-center'><img class='yellow-border' src=" + question.img3 +"></div><div class='col-sm-3 mx-auto text-center'><img class='yellow-border' src=" + question.img4 +"></div></div></div>");
    }

    //trials
    let currentTrial;

    function trial(id){
        clearTrial("");
        switch(id){
            case 0:
                createTemplateGetInfo("Please enter the Subject Number :");
                break;
            case 1:
                createTemplateGetInfo("Please enter the Session Number :");
                break;
            case 2:
                createTemplateGetInfo("Please enter the Starting item :");
                break;
            case 3:
                createTemplateGetInfo("Experiment identifier :");
                break;
            case 4:
                createTrialTemplate(q1);
                break;
        }
    }

    function endTrial(id){
        switch(id){
            case 0:
                subjectId = getInfoReponse;
                break;
            case 1:
                sessionNumber = getInfoReponse;
                break;
            case 2:
                startingItem = getInfoReponse;
                break;
            case 3:
                expId = getInfoReponse;
                break;
        }
    }

    function nextTrial(delay){
        setTimeout(function(){
            endTrial(currentTrial);
            currentTrial += 1;
            trial(currentTrial);
        }, delay);
    }

    function clearTrial(){
        $("#trial").empty();
    }

    //gestion fullscreen
    let fullscreen = false;
    function switchFullscreen() {
        if(fullscreen){
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            fullscreen = false;
        } else {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
            fullscreen = true;
        }
    }

    //demarrage
    var elem = document.documentElement;
    currentTrial = 0;
    trial(currentTrial);
});