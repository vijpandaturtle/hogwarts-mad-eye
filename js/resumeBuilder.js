var bio = {
    "name": "Vijayasri Iyer",
    "role": "Front-End-Web-Developer",
    "contacts": {
        "mobile": "91-9876543210",
        "email": "thisisvij95@gmail.com",
        "github": "vijpandaturtle",
        "location": "Mumbai,Maharashtra,India"
    },
    "welcomeMessage": "Hey everyone welcome to my resume ...hope you enjoy viewing it!!",
    "skills": ["Programmer", "Front-End-Web-Developer", "Math-lover", "Musician"],
    "bioPic": "images/fry.jpg"
};

var education = {
    "schools": [{
        "name": "Pace Junior College",
        "location": "Dadar,Mumbai,Maharashtra,India",
        "degree": "12th Grade",
        "dates": "May 2012",
        "url": "www.iitianspace.com",
        "majors": ["science"]
    }, {
        "name": "Vidyalankar Institute Of Technology",
        "location": "Antophill,Wadala,Mumbai",
        "degree": "B.E",
        "dates": "in progress",
        "url": "www.vit.edu.in",
        "majors": ["information Technology"]
    }],

    "onlineCourses": [{
        "title": "Front-End-Web-Developer Nanodegree",
        "school": "Udacity",
        "dates": "In progress",
        "url": "www.udacity.com"
    }]
};

var projects = {
    "projects": [{
        "title": "Mockup To Article",
        "dates": " 7th September 2016",
        "description": "Using given html code to convert an unformatted page into an article.",
        "images": [
            "http://lorempixel.com/200/200/abstract/10", "http://lorempixel.com/200/200/abstract/8"
        ]
    }, {
        "title": "Build a Bluetooth Speaker",
        "dates": "12th October 2016",
        "description": "To build a cost effective bluetooth speaker using wires and components fron household appliances",
        "images": [
            "http://lorempixel.com/200/200/abstract/8", "http://lorempixel.com/200/200/abstract/10"
        ]
    }, {
        "title": "Build A Portfolio Website",
        "dates": "3rd October 2016",
        "description": "Using bootstrap to create an attractive Portfolio website.",
        "images": [
            "http://lorempixel.com/200/200/abstract/10", "http://lorempixel.com/200/200/abstract/8"
        ]
    }]
};

var work = {
    "jobs": [{
        "employer": "Vijaya Iyer",
        "title": "Music Teacher",
        "dates": "Every Sunday Starting September 3rd",
        "description": "To help the student attain a deeper understanding in music and also develop self-confidence."
    }]
};

bio.display = function() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts,#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts,#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts,#footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts,#footerContacts").append(formattedLocation);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedskill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedskill);
        formattedskill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedskill);
        formattedskill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedskill);
        formattedskill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedskill);
    }
};

bio.display();

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
            $(".project-entry:last").append(formattedImage);
            var formattedSecondImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[1]);
            $(".project-entry:last").append(formattedSecondImage);
        }
    }
};

projects.display();

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var school = 0; school < education.schools.length; school++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        if (education.schools[school].majors.length > 0) {
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);
            $(".education-entry:last").append(formattedMajor);
        }
    }
    for (var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        var formattedOnline = formattedTitle + formattedSchool + formattedOnlineDates + formattedURL;
        $(".education-entry:last").append(formattedOnline);
    }
};

education.display();

$("#mapDiv").append(googleMap);

$(".btn-block").click(function() {
    $(".btn-block").css('background-color', 'green');
});