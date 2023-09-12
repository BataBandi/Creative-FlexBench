//Members of the Team is below with images URL, names, jobs etc.//
const team = [
    {
        firstName: 'Andrey',
        lastName: 'Markovicz',
        img: '../images/Black.jpg',
        job: 'Real estate agent',
        id: 1
    },
    {
        firstName: 'Andrey',
        lastName: 'Driver',
        img: '../images/Driver.jpg',
        job: 'Real estate agent',
        id: 2
    },
    {
        firstName: 'Lily',
        lastName: 'Pond',
        img: '../images/Pond.png',
        job: 'Real estate agent',
        id: 3
    },
    {
        firstName: 'Andrey',
        lastName: 'Markovicz',
        img: '../images/Okazaki.png',
        job: 'Real estate agent',
        id: 4
    },
    {
        firstName: 'Andrey',
        lastName: 'Okazaki',
        img: '../images/Grabowsky.png',
        job: 'Real estate agent',
        id: 5
    },
    {
        firstName: 'Lily',
        lastName: 'Wei Xin',
        img: '../images/Wei Xin.png',
        job: 'Real estate agent',
        id: 6
    },
]
//Get the Element below for Display, section-center for the join//
const sectioncenter = document.getElementsByClassName('section-center')[0];

//AddEventlistener with the Window for displaying the images//
window.addEventListener('load', function(){
    DisplayImages(team);
})
//Function for Displaying the images//
function DisplayImages(team){
    let Info = team.map(function(member){
        return `<article class="container">
        <a href='#'><img id = ${member.id} class='image-container' src='${member.img}'></a>
        <h2 class='Last-Name'>${member.lastName}</h2>
        <h2 class='First-Name'>${member.firstName}</h2>
        <p id = ${member.id} class="job"><img src="./images/Group 153.png">Real Estate Agent</p>
    </article>`
    });
    Info = Info.join(' ');

    sectioncenter.innerHTML = Info;
    //Get elements for Hover poperties//
    const imageContainer = document.querySelectorAll('.image-container');
    const jobDescription = document.querySelectorAll('.job');
    //Make them hover//
    /*This is an intresting setting, because if you load the page in desktop, 
    then you try another device-width properties in developer tools, the page will not work right.
    Because the JS function test once the argument, and if the argument pass it will be enable despite
    the device-width*/
    if(window.innerWidth >= 1025){

        imageContainer.forEach((imageContainer) => {
            imageContainer.addEventListener('mouseover', function(){
                imageContainer.style.width = '110%';
                imageContainer.style.height = '110%';
                imageContainer.style.transition = '0.5s';
            });
            imageContainer.addEventListener('mouseout', function () {
                imageContainer.style.width = '320px';
                imageContainer.style.height = '520px';
                imageContainer.style.transition = '0.5s';
            });
        });

        jobDescription.forEach((jobDescription) => {
            jobDescription.addEventListener('mouseover', function(){
                jobDescription.style.backgroundColor = 'white';
                jobDescription.style.transition = '0.2s';
            });
            jobDescription.addEventListener('mouseout', function(){
                jobDescription.style.backgroundColor = '';
                jobDescription.style.transition = '0.2s';
            });
        });
    }
}
