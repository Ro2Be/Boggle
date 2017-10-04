var spacing = 30;
var squaresize = 200;
var letterdice = "aaaaaaabbcddddddeeeeeeeeeeeeeeeeeeefggghhiiiiiijkklllmmnnnnnnnnnnooooooppqrrrrrrsssstttttttuuvvvwwxyz";
function setup() {
  createCanvas(5*spacing+4*squaresize, 5*spacing+4*squaresize);
  background(255, 100, 255);
  
  a = letterdice[Math.floor(Math.random() * letterdice.length)];
  b = letterdice[Math.floor(Math.random() * letterdice.length)];
  c = letterdice[Math.floor(Math.random() * letterdice.length)];
  d = letterdice[Math.floor(Math.random() * letterdice.length)];
  e = letterdice[Math.floor(Math.random() * letterdice.length)];
  f = letterdice[Math.floor(Math.random() * letterdice.length)];
  g = letterdice[Math.floor(Math.random() * letterdice.length)];
  h = letterdice[Math.floor(Math.random() * letterdice.length)];
  i = letterdice[Math.floor(Math.random() * letterdice.length)];
  j = letterdice[Math.floor(Math.random() * letterdice.length)];
  k = letterdice[Math.floor(Math.random() * letterdice.length)];
  l = letterdice[Math.floor(Math.random() * letterdice.length)];
  m = letterdice[Math.floor(Math.random() * letterdice.length)];
  n = letterdice[Math.floor(Math.random() * letterdice.length)];
  o = letterdice[Math.floor(Math.random() * letterdice.length)];
  p = letterdice[Math.floor(Math.random() * letterdice.length)];
  
  strokeWeight(10);
	rect(1*spacing+0*squaresize, 1*spacing+0*squaresize, squaresize, squaresize);
	rect(1*spacing+0*squaresize, 2*spacing+1*squaresize, squaresize, squaresize);
	rect(1*spacing+0*squaresize, 3*spacing+2*squaresize, squaresize, squaresize);
	rect(1*spacing+0*squaresize, 4*spacing+3*squaresize, squaresize, squaresize);
	rect(2*spacing+1*squaresize, 1*spacing+0*squaresize, squaresize, squaresize);
	rect(2*spacing+1*squaresize, 2*spacing+1*squaresize, squaresize, squaresize);
	rect(2*spacing+1*squaresize, 3*spacing+2*squaresize, squaresize, squaresize);
	rect(2*spacing+1*squaresize, 4*spacing+3*squaresize, squaresize, squaresize);
	rect(3*spacing+2*squaresize, 1*spacing+0*squaresize, squaresize, squaresize);
	rect(3*spacing+2*squaresize, 2*spacing+1*squaresize, squaresize, squaresize);
	rect(3*spacing+2*squaresize, 3*spacing+2*squaresize, squaresize, squaresize);
	rect(3*spacing+2*squaresize, 4*spacing+3*squaresize, squaresize, squaresize);
	rect(4*spacing+3*squaresize, 1*spacing+0*squaresize, squaresize, squaresize);
	rect(4*spacing+3*squaresize, 2*spacing+1*squaresize, squaresize, squaresize);
	rect(4*spacing+3*squaresize, 3*spacing+2*squaresize, squaresize, squaresize);
	rect(4*spacing+3*squaresize, 4*spacing+3*squaresize, squaresize, squaresize);
	
	textSize(150);
	text(a, 1*spacing+0.25*squaresize, 1*spacing+0.7*squaresize);
	text(b, 1*spacing+0.25*squaresize, 2*spacing+1.7*squaresize);
	text(c, 1*spacing+0.25*squaresize, 3*spacing+2.7*squaresize);
	text(d, 1*spacing+0.25*squaresize, 4*spacing+3.7*squaresize);
	text(e, 2*spacing+1.25*squaresize, 1*spacing+0.7*squaresize);
	text(f, 2*spacing+1.25*squaresize, 2*spacing+1.7*squaresize);
	text(g, 2*spacing+1.25*squaresize, 3*spacing+2.7*squaresize);
	text(h, 2*spacing+1.25*squaresize, 4*spacing+3.7*squaresize);
	text(i, 3*spacing+2.25*squaresize, 1*spacing+0.7*squaresize);
	text(j, 3*spacing+2.25*squaresize, 2*spacing+1.7*squaresize);
	text(k, 3*spacing+2.25*squaresize, 3*spacing+2.7*squaresize);
	text(l, 3*spacing+2.25*squaresize, 4*spacing+3.7*squaresize);
	text(m, 4*spacing+3.25*squaresize, 1*spacing+0.7*squaresize);
	text(n, 4*spacing+3.25*squaresize, 2*spacing+1.7*squaresize);
	text(o, 4*spacing+3.25*squaresize, 3*spacing+2.7*squaresize);
	text(p, 4*spacing+3.25*squaresize, 4*spacing+3.7*squaresize);
}

function draw() {

}