//console.log("Hello World!");
// create variables, assign event listeners to buttons, assign color themes to each button
//var paletteText = document.getElementById('palette-text');
var lightBtn = document.getElementById('lightBtn');
var darkBtn = document.getElementById('darkBtn');
var paletteSwitch = document.getElementById('palette-switch');
var aesthetic = document.getElementById('aesthetics');
var pleasant = document.getElementById('pleasant');
var question = document.getElementById('question');
var projectBody = document.getElementById('project-body');

//console.log(paletteText);
//console.log(lightBtn);
//console.log(darkBtn);
//console.log(paletteSwitch);
//console.log(projectBody);

lightBtn.addEventListener("click", function(){
    lightBtn.classList.add('active');
    darkBtn.classList.remove('active');
    projectBody.style.backgroundColor = "#FFFCCD";
    paletteSwitch.style.color = "#73B25A";
    aesthetic.style.color = "#D993D2";
    pleasant.style.color = "#D981D1";
    question.style.color = "#B26CAC";
    lightBtn.style.color = "#73B25A";
});

darkBtn.addEventListener("click", function(){
    lightBtn.classList.remove('active');
    darkBtn.classList.add('active');
    projectBody.style.backgroundColor = "#4437B2";
    paletteSwitch.style.color = "#9687FF";
    aesthetic.style.color = "#FFEA70";
    pleasant.style.color = "#FFEE89";
    question.style.color = "#B29F2C";
    darkBtn.style.color = "#4437B2";
});
