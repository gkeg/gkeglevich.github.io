import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

class Main extends Component {
  render() {
    return (
      <div>
          {/* Particles Name */}
          <div id="name-particles">
            <canvas id="scene"></canvas>
          </div>
          {/* Nav Bar */}
          <div className="table">
            <nav id="nav-bar" className="cl-effect-9">
              <a className="link" href="https://github.com/gkeglevich" target="_blank" className="link"><span>GITHUB</span><span>For some projects</span></a>
              <a className="link" href="https://www.linkedin.com/in/griffinkeglevich/" target="_blank" className="link"><span>LINKEDIN</span><span>For some particulars</span></a>
              <a className="link" href="https://medium.com/@griffinkeglevich" target="_blank"><span>MEDIUM</span><span>For some thoughts</span></a>
            </nav>
            {/* Add in router stuff later */}
          </div>
      </div>
    );
  }

  componentDidMount() {
    var canvas = document.querySelector("#scene"),
		ctx = canvas.getContext("2d"),
		particles = [],
		amount = 0,
		mouse = {x:0,y:0},
		radius = 0.2;


    var colors = ["#F5F5F5"];

    const name = "Griffin Keglevich";

    var ww = canvas.width = window.innerWidth;
    var wh = canvas.height = window.innerHeight;

    function Particle(x,y){
      this.x =  Math.random()*ww;
      this.y =  Math.random()*wh;
      this.dest = {
        x : x,
        y: y
      };
      this.r =  Math.random()*1 + 2;
      this.vx = (Math.random()-0.5)*20;
      this.vy = (Math.random()-0.5)*20;
      this.accX = 0;
      this.accY = 0;
      this.friction = Math.random()*0.025 + 0.94;

      this.color = colors[Math.floor(Math.random()*6)];
    }

    Particle.prototype.render = function() {
      this.accX = (this.dest.x - this.x)/1000;
      this.accY = (this.dest.y - this.y)/1000;
      this.vx += this.accX;
      this.vy += this.accY;
      this.vx *= this.friction;
      this.vy *= this.friction;

      this.x += this.vx;
      this.y +=  this.vy;

      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
      ctx.fill();

      var a = this.x - mouse.x;
      var b = this.y - mouse.y;

      var distance = Math.sqrt( a*a + b*b );
      if(distance<(radius*70)){
        this.accX = (this.x - mouse.x)/100;
        this.accY = (this.y - mouse.y)/100;
        this.vx += this.accX;
        this.vy += this.accY;
      }

    }

    function initScene(){
      ww = canvas.width = window.innerWidth;
      wh = canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = "bold "+(ww/10)+"px Helvetica";
      ctx.textAlign = "center";
      ctx.fillText(name, ww/2, wh/2);

      var data  = ctx.getImageData(0, 0, ww, wh).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "screen";

      const distance = 50;
      particles = [];
      for(var i=0; i<ww; i+=Math.round(ww/(distance*4))) {
        for (var j=0;j<wh;j+=Math.round(ww/(distance*4))) {
          if (data[((i + j*ww)*4) + 3] > distance) {
            particles.push(new Particle(i,j));
          }
        }
      }
      amount = particles.length;

    }

    function render(a) {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < amount; i++) {
        particles[i].render();
      }
    };

    // Also, make # of particles relative to screen size!
    initScene();
    requestAnimationFrame(render);
  }
}

export default Main;
