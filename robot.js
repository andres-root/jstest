var canvas = null;
var context = null;
var frameRate = 1000/30;
var frame 	= 0;
var assets = ['src/static/img/robowalk00.png',
              'src/static/img/robowalk01.png',
              'src/static/img/robowalk02.png',
              'src/static/img/robowalk03.png',
              'src/static/img/robowalk04.png',
              'src/static/img/robowalk05.png',
              'src/static/img/robowalk06.png',
              'src/static/img/robowalk07.png',
              'src/static/img/robowalk08.png',
              'src/static/img/robowalk09.png',
              'src/static/img/robowalk10.png',
              'src/static/img/robowalk11.png',
              'src/static/img/robowalk12.png',
              'src/static/img/robowalk13.png',
              'src/static/img/robowalk14.png',
              'src/static/img/robowalk15.png',
              'src/static/img/robowalk16.png',
              'src/static/img/robowalk17.png',
              'src/static/img/robowalk18.png'
             ];
var frames = [];  

var onImageLoad = function(){  
    console.log("IMAGE!!!");  
};  

var setup = function() {  
    canvas = document.getElementById('container');  
    context = canvas.getContext('2d');  
    canvas.width = window.innerWidth;  
    canvas.height = window.innerHeight;  

    for(var i = 0; i < assets.length; i++){  
        frames.push(new Image());
        frames[i].onload = onImageLoad;  
        frames[i].src = assets[i];  
    }  

    setInterval(animate, frameRate)
};  



var animate = function(){  

    context.clearRect(0,0,canvas.width, canvas.height);
	context.drawImage(frames[frame], 192, 192);
	frame = (frame + 1) % frames.length;

};  
setup();  