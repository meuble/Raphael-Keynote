function Keynote(slides) {
 	var self = this;

  self.init = function() {
		self.paper = Raphael('paper', 600, 600);
		self.currentSlideId = -1;
		self.registerEvents();
		self.next();
  };

	self.registerEvents = function() {
		$(document).keydown(function(eventObject) {
			console.Lo
			if (eventObject.keyCode == 39) {
				self.next();
			}
			
			if (eventObject.keyCode == 37) {
				self.previous();
			}
		});
	};
	
	self.next = function() {
		var flag = false;
		var slide = slides[self.currentSlideId + 1];
		
		if (slide && (flag = true)) {
			self.clear();
			jQuery.proxy(slide, self).call();
			self.currentSlideId += 1;
		}
	};
	
	self.previous = function() {
		var flag = false;
		var slide = slides[self.currentSlideId - 1];
		
		if (slide && (flag = true)) {
			self.clear();
			jQuery.proxy(slide, self).call();
			self.currentSlideId -= 1;
		}
	};
	
	self.clear = function() {
		$(self.paper.canvas).empty()
	};
	
  self.init();
}


var keynote;
jQuery(function () {
	keynote = new Keynote([
		function() {
			this.paper.text(300, 40, 'Raphael').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.text(300, 90, 'Javascript Library for vector graphics').attr({
				'font-size': 25,
				'font-family': 'Futura',
				'fill': '#333'
			});
		
			var st = this.paper.set();
			st.push(
				this.paper.path(paths['raphael1']).attr({fill:'#f89938'}),
				this.paper.path(paths['raphael2']).attr({fill:'#3399ff', translation: "0 -70"}),
				this.paper.path(paths['raphael3']).attr({fill: "#333333"})
			);
			st.attr({translation: "250 270", scale: 4})
			
			this.paper.text(520, 580, 'by Stéphane Akkaoui').attr({
				'font-size': 15,
				'font-family': 'Futura',
				'fill': '#333'
			});
			
			this.paper.text(5, 580, 'JS Meetup, Paris - Octobre 13th 2010').attr({
				'text-anchor': "start",
				'font-size': 15,
				'font-family': 'Futura',
				'fill': '#333'
			});
			
		},
		function() {
			this.paper.text(300, 80, 'How to drawn vector\ngraphics in browsers ?').attr({
				'font-size': 50,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.path(paths['questionMark']).attr({stroke: 'none', fill: '#333', translation: '280 350', scale: 7})
			
		},
		function() {
			this.paper.text(300, 40, 'W3C standard is SVG').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});	
			this.paper.path(paths['svg']).attr({stroke: 'none', fill: '#333', translation: '280 250', scale: 6})
		},
		function() {
			this.paper.text(300, 40, 'W3C standard is SVG').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.path(paths['svg']).attr({stroke: 'none', fill: '#333', translation: '280 250', scale: 6})
			this.paper.text(300, 420, 'But Only for').attr({
				'font-size': 40,
				'font-family': 'Futura',
				'fill': '#333'
			});
			
			this.paper.path(paths['firefox']).attr({stroke: 'none', fill: '#333', translation: '150 490', scale: 3})
			this.paper.path(paths['opera']).attr({stroke: 'none', fill: '#333', translation: '250	 490', scale: 3})
			this.paper.path(paths['chrome']).attr({stroke: 'none', fill: '#333', translation: '345 490', scale: 3})
			this.paper.path(paths['safari']).attr({stroke: 'none', fill: '#333', translation: '435 488', scale: 3})
		},
		function() {
			this.paper.path(paths['ie']).attr({stroke: 'none', fill: '#333', translation: '150 100', scale: 3})
			this.paper.text(330, 110, 'uses VML').attr({
				'font-size': 50,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.path(paths['vml']).attr({stroke: 'none', fill: '#333', translation: '280 250', scale: 6})
			this.paper.text(300, 540, 'to distinguish itself...').attr({
				'font-size': 20,
				'font-family': 'Futura',
				'fill': '#333'
			});
		},
		function() {
			this.paper.text(300, 75, 'How to make them\nplay together ?').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
		
		var vml = this.paper.path(paths['vml']).attr({stroke: 'none', fill: '#333', translation: '385 450', scale: 6})
		var svg = this.paper.path(paths['svg']).attr({stroke: 'none', fill: '#333', translation: '160 450', scale: 6, rotation: 6})
		},
		function() {
			this.paper.text(300, 75, 'How to make them\nplay together ?').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
		
			var vml = this.paper.path(paths['vml']).attr({stroke: 'none', fill: '#333', translation: '385 450', scale: 6})
			var svg = this.paper.path(paths['svg']).attr({stroke: 'none', fill: '#333', translation: '160 450', scale: 6, rotation: 6})
			var js = this.paper.path(paths['javascript']).attr({stroke: 'none', fill: '#333', translation: '280 325', scale: 6})
			js.animate({rotation: 400}, 15000);
			svg.animateWith(js, {rotation: -446}, 15000);
			vml.animateWith(js, {rotation: -400}, 15000);
		},
		function() {
			this.paper.text(300, 75, 'How to make them\nplay together ?').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
		
			var vml = this.paper.path(paths['vml']).attr({stroke: 'none', fill: '#333', translation: '385 450', scale: 6})
			var svg = this.paper.path(paths['svg']).attr({stroke: 'none', fill: '#333', translation: '160 450', scale: 6, rotation: 6})
			var js = this.paper.path(paths['javascript']).attr({stroke: 'none', fill: '#333', translation: '280 325', scale: 6})
			
			this.paper.text(500, 235, 'Javascript').attr({
				'font-size': 35,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.path("M480 255,420 255,360 300").attr({stroke: '#333', 'stroke-width': 3});
			this.paper.text(50, 305, 'SVG').attr({
				'font-size': 35,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.path("M50 325,85 325,140 380").attr({stroke: '#333', 'stroke-width': 3});			
			this.paper.text(550, 355, 'VML').attr({
				'font-size': 35,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.path("M550 375,520 375,470 420").attr({stroke: '#333', 'stroke-width': 3});			
		},
		function() {
			this.paper.text(300, 40, 'Features').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.circle(240, 390, 180).attr({fill: '#333', 'stroke': 'none', 'opacity': 0.7});
			this.paper.circle(360, 390, 150).attr({fill: '#333', 'stroke': 'none', 'opacity': 0.7});
			
			this.paper.text(550, 200, 'VML').attr({
				'font-size': 25,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.path("M550 217,520 217,470 320").attr({stroke: '#333', 'stroke-width': 3});
				this.paper.text(50, 155, 'SVG').attr({
					'font-size': 25,
					'font-family': 'Futura',
					'fill': '#333'
				});
				this.paper.path("M50 175,85 175,140 290").attr({stroke: '#333', 'stroke-width': 3});			
				this.paper.text(400, 155, 'Raphël').attr({
					'font-size': 25,
					'font-family': 'Futura',
					'fill': '#333'
				});
				this.paper.path("M380 172,360 172,340 290").attr({stroke: '#333', 'stroke-width': 3});
		},
		function() {
			this.paper.text(300, 75, 'What are vector\ngraphics good at ?').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
		},
		function() {
			this.paper.text(300, 75, 'What are vector\ngraphics good at ?').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.path(paths['pen']).attr({"fill": '#333', 'scale': 2, 'translation': "150 240"});
			this.paper.text(240, 250, 'Drawing').attr({
				'font-size': 35,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
		},
		function() {
			this.paper.text(300, 75, 'What are vector\ngraphics good at ?').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.path(paths['pen']).attr({"fill": '#333', 'scale': 2, 'translation': "150 240"});
			this.paper.text(240, 250, 'Drawing').attr({
				'font-size': 35,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			
			this.paper.path(paths['pie']).attr({"fill": '#333', 'scale': 2, 'translation': "150 340"});
			this.paper.text(240, 350, 'Graphs').attr({
				'font-size': 35,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
		},
		function() {
			this.paper.text(300, 75, 'What are vector\ngraphics good at ?').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.path(paths['pen']).attr({"fill": '#333', 'scale': 2, 'translation': "150 240"});
			this.paper.text(240, 250, 'Drawing').attr({
				'font-size': 35,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			
			this.paper.path(paths['pie']).attr({"fill": '#333', 'scale': 2, 'translation': "150 340"});
			this.paper.text(240, 350, 'Graphs').attr({
				'font-size': 35,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			
			this.paper.path(paths['github']).attr({"fill": '#333', 'scale': 2, 'translation': "150 440"});
			this.paper.text(240, 450, 'Icons').attr({
				'font-size': 35,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
		},
		function() {
			this.paper.rect(50, 200, 500, 500, 30).attr({"fill": '#D4B4D6', 'opacity': 0.3});
			this.paper.text(300, 75, 'What are vector\ngraphics good at ?').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.path(paths['pen']).attr({"fill": '#333', 'scale': 2, 'translation': "150 240"});
			this.paper.text(240, 250, 'Drawing').attr({
				'font-size': 35,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			
			this.paper.path(paths['pie']).attr({"fill": '#333', 'scale': 2, 'translation': "150 340"});
			this.paper.text(240, 350, 'Graphs').attr({
				'font-size': 35,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			
			this.paper.path(paths['github']).attr({"fill": '#333', 'scale': 2, 'translation': "150 440"});
			this.paper.text(240, 450, 'Icons').attr({
				'font-size': 35,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			
			this.paper.path(paths['tool']).attr({"fill": '#333', 'scale': 2, 'translation': "150 530"});
			this.paper.text(240, 550, 'Rounded Corners').attr({
				'font-size': 35,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
		},
		function() {
			this.paper.text(300, 40, 'The code (primitives)').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.rect(-30, 220, 610, 330, 30).attr({"fill": '#333'});
		
			this.paper.text(20, 275, 'var paper = Raphael("Id", width, height);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		},
		function() {
			this.paper.text(300, 40, 'The code (primitives)').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.rect(-30, 220, 610, 330, 30).attr({"fill": '#333'});
			
			this.paper.text(20, 275, 'var paper = Raphael("Id", width, height);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			this.paper.circle(100, 150, 30).attr({'stroke-width': 3, 'stroke': '#333'});
			this.paper.text(20, 325, 'var circle = paper.circle(cx, cy, r);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		},
		function() {
			this.paper.text(300, 40, 'The code (primitives)').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.rect(-30, 220, 610, 330, 30).attr({"fill": '#333'});
			
			this.paper.text(20, 275, 'var paper = Raphael("Id", width, height);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			this.paper.circle(100, 150, 30).attr({'stroke-width': 3, 'stroke': '#333'});
			this.paper.text(20, 325, 'var circle = paper.circle(cx, cy, r);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			this.paper.rect(200, 120, 60, 60).attr({'stroke-width': 3, 'stroke': '#333'});
			this.paper.text(20, 375, 'var rect = paper.rect(x, y, w, h, r);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		},
		function() {
			this.paper.text(300, 40, 'The code (primitives)').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.rect(-30, 220, 610, 330, 30).attr({"fill": '#333'});
			
			this.paper.text(20, 275, 'var paper = Raphael("Id", width, height);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			this.paper.circle(100, 150, 30).attr({'stroke-width': 3, 'stroke': '#333'});
			this.paper.text(20, 325, 'var circle = paper.circle(cx, cy, r);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			this.paper.rect(200, 120, 60, 60).attr({'stroke-width': 3, 'stroke': '#333'});
			this.paper.text(20, 375, 'var rect = paper.rect(x, y, w, h, r);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			this.paper.ellipse(350, 150, 20, 35).attr({'stroke-width': 3, 'stroke': '#333', 'rotation': 30});
			this.paper.text(20, 425, 'var elipse = paper.ellipse(cx, cy, rx, ry);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		},
		function() {
			this.paper.text(300, 40, 'The code (primitives)').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.rect(-30, 220, 610, 330, 30).attr({"fill": '#333'});
			
			this.paper.text(20, 275, 'var paper = Raphael("Id", width, height);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			this.paper.circle(100, 150, 30).attr({'stroke-width': 3, 'stroke': '#333'});
			this.paper.text(20, 325, 'var circle = paper.circle(cx, cy, r);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			this.paper.rect(200, 120, 60, 60).attr({'stroke-width': 3, 'stroke': '#333'});
			this.paper.text(20, 375, 'var rect = paper.rect(x, y, w, h, r);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			this.paper.ellipse(350, 150, 20, 35).attr({'stroke-width': 3, 'stroke': '#333', 'rotation': 30});
			this.paper.text(20, 425, 'var elipse = paper.ellipse(cx, cy, rx, ry);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			this.paper.text(430, 145, 'Text').attr({
				'font-size': 42,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			this.paper.text(20, 475, 'var text = paper.text(x, y, t);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		},
		function() {
			this.paper.text(300, 40, 'The code (path, set)').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.rect(-30, 220, 610, 330, 30).attr({"fill": '#333'});
			
			this.paper.path("M100 150,100 100,150 150,150 100,200 150,200 100").attr({"stroke": '#333', "stroke-width": 3});
			this.paper.text(20, 275, 'var path = paper.path(svgPath);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		},
		function() {
			this.paper.text(300, 40, 'The code (path, set)').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.rect(-30, 220, 610, 330, 30).attr({"fill": '#333'});
			
			this.paper.path("M100 150,100 100,150 150,150 100,200 150,200 100").attr({"stroke": '#333', "stroke-width": 3});
			this.paper.text(20, 275, 'var path = paper.path(svgPath);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			var set = this.paper.set();
			set.push(
				this.paper.circle(0, 0, 30),
				this.paper.text(-17, 0, '1')
			);
			set.attr({translation: "400 130", 'stroke-width': 3, 'stroke': '#333', 'font-size': 55, 'font-family': 'Andale Mono', 'text-anchor': "start"})
			
			this.paper.text(20, 425, 'var set = paper.set();\nset.push(\n\tpaper.circle(0, 0, 30),\n\tpaper.text(0,0, \'1\')\n);').attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		},
		function() {
			this.paper.text(300, 40, 'The code (attr)').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.rect(-30, 220, 610, 330, 30).attr({"fill": '#333'});
			
			var set = this.paper.set();
			set.push(
				this.paper.circle(0, 0, 30),
				this.paper.text(0, 0, '1')
			);
			set.attr({translation: "100 130", 'stroke-width': 3, 'stroke': '#333', 'font-size': 55, 'font-family': 'Courier'})
			
			this.paper.text(20, 275, "set.attr({'font-family': 'Courier'});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		},
		function() {
			this.paper.text(300, 40, 'The code (attr)').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.rect(-30, 220, 610, 330, 30).attr({"fill": '#333'});
			
			var set = this.paper.set();
			set.push(
				this.paper.circle(0, 0, 30),
				this.paper.text(0, 0, '1')
			);
			set.attr({translation: "100 130", 'stroke-width': 3, 'stroke': '#333', 'font-size': 55, 'font-family': 'Courier'})
			
			this.paper.text(20, 275, "set.attr({'font-family': 'Courier'});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		
			var set2 = this.paper.set();
			set2.push(
				this.paper.circle(0, 0, 30),
				this.paper.text(0, 0, '1')
			);
			set2.attr({translation: "200 130", 'stroke-width': 3, 'stroke': '#4CBA50', 'fill': '#FFF', 'font-size': 55, 'font-family': 'Courier'})
			this.paper.text(20, 340, "set.attr({'stroke': '#4CBA50',\n\t 'fill': '#FFF'});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		},
		function() {
			this.paper.text(300, 40, 'The code (attr)').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.rect(-30, 220, 610, 330, 30).attr({"fill": '#333'});
			
			var set = this.paper.set();
			set.push(
				this.paper.circle(0, 0, 30),
				this.paper.text(0, 0, '1')
			);
			set.attr({translation: "100 130", 'stroke-width': 3, 'stroke': '#333', 'font-size': 55, 'font-family': 'Courier'})
			
			this.paper.text(20, 275, "set.attr({'font-family': 'Courier'});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		
			var set2 = this.paper.set();
			set2.push(
				this.paper.circle(0, 0, 30),
				this.paper.text(0, 0, '1')
			);
			set2.attr({translation: "200 130", 'stroke-width': 3, 'stroke': '#4CBA50', 'fill': '#FFF', 'font-size': 55, 'font-family': 'Courier'})
			this.paper.text(20, 340, "set.attr({'stroke': '#4CBA50',\n\t 'fill': '#FFF'});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			var set3 = this.paper.set();
			set3.push(
				this.paper.circle(0, 0, 30),
				this.paper.text(0, 0, '1')
			);
			set3.attr({translation: "310 130", 'stroke-width': 3, 'stroke': '#4CBA50', 'fill': '#FFF', 'font-size': 55, 'font-family': 'Courier', scale: 2})
			this.paper.text(20, 400, "set.attr({'scale': 2});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		},
		function() {
			this.paper.text(300, 40, 'The code (attr)').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.rect(-30, 220, 610, 330, 30).attr({"fill": '#333'});
			
			var set = this.paper.set();
			set.push(
				this.paper.circle(0, 0, 30),
				this.paper.text(0, 0, '1')
			);
			set.attr({translation: "100 130", 'stroke-width': 3, 'stroke': '#333', 'font-size': 55, 'font-family': 'Courier'})
			
			this.paper.text(20, 275, "set.attr({'font-family': 'Courier'});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		
			var set2 = this.paper.set();
			set2.push(
				this.paper.circle(0, 0, 30),
				this.paper.text(0, 0, '1')
			);
			set2.attr({translation: "200 130", 'stroke-width': 3, 'stroke': '#4CBA50', 'fill': '#FFF', 'font-size': 55, 'font-family': 'Courier'})
			this.paper.text(20, 340, "set.attr({'stroke': '#4CBA50',\n\t 'fill': '#FFF'});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			var set3 = this.paper.set();
			set3.push(
				this.paper.circle(0, 0, 30),
				this.paper.text(0, 0, '1')
			);
			set3.attr({translation: "310 130", 'stroke-width': 3, 'stroke': '#4CBA50', 'fill': '#FFF', 'font-size': 55, 'font-family': 'Courier', scale: 2})
			this.paper.text(20, 400, "set.attr({'scale': 2});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			var set4 = this.paper.set();
			set4.push(
				this.paper.circle(0, 0, 30),
				this.paper.text(0, 0, '1')
			);
			set4.attr({translation: "450 130", 'stroke-width': 3, 'stroke': '#4CBA50', 'fill': '#FFF', 'font-size': 55, 'font-family': 'Courier', scale: 2, cursor: 'wait'})
			this.paper.text(20, 450, "set.attr({'cursor': 'wait'});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		},
		function() {
			this.paper.text(300, 40, 'The code (animation)').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.rect(-30, 220, 610, 330, 30).attr({"fill": '#333'});
			
		      dashed = {fill: "none", stroke: "#666", "stroke-dasharray": "- "};
			(function(p) {
				var path1 = "M50.5,120.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z",
						path2 = "M150.5,120.5l20,20 -20,20 -20-20z";
				p.path(path1).attr(dashed);
				p.path(path2).attr(dashed);
				var el = p.path(path1).attr({fill: "none", stroke: "#333", "stroke-width": 2}),
						elattrs = [{path: path2}, {path: path1}],
						now = 0;
				p.arrow(100, 140).node.onclick = function() {
					el.animate(elattrs[now++], 1000);
					if (now == 2) {
						now = 0;
					}
				};
			})(this.paper);
			this.paper.text(20, 275, "var elem = paper.path({path: path1});\nelem.animate({path: path2});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});			
		},
		function() {
			this.paper.text(300, 40, 'The code (animation)').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.rect(-30, 220, 610, 330, 30).attr({"fill": '#333'});
			
		      dashed = {fill: "none", stroke: "#666", "stroke-dasharray": "- "};
			(function(p) {
				var path1 = "M50.5,120.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z",
						path2 = "M150.5,120.5l20,20 -20,20 -20-20z";
				p.path(path1).attr(dashed);
				p.path(path2).attr(dashed);
				var el = p.path(path1).attr({fill: "none", stroke: "#333", "stroke-width": 2}),
						elattrs = [{path: path2}, {path: path1}],
						now = 0;
				p.arrow(100, 140).node.onclick = function() {
					el.animate(elattrs[now++], 1000);
					if (now == 2) {
						now = 0;
					}
				};
			})(this.paper);
			this.paper.text(20, 275, "var elem = paper.path({path: path1});\nelem.animate({path: path2});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			
			(function(p) { 
				p.text(225, 140, "Yay!").attr({font: '10px Arial', fill: "none", stroke: "#666", "stroke-dasharray": "-"});
				p.text(325, 140, "Yay!").attr({font: '30px Arial', fill: "none", stroke: "#666", "stroke-dasharray": "-"});
				var el = p.text(225, 140, "Yay!").attr({font: '10px Arial', fill: "#333"}),
						elattrs = [{x: 325, "font-size": 30, rotation: 360}, {x: 225, "font-size": 10, rotation: 0}],
						now = 0;
				p.arrow(265, 140).node.onclick = function () {
					el.animate(elattrs[now++], 1000);
					if (now == 2) {
						now = 0;
					}
				};
			})(this.paper);
			this.paper.text(20, 375, "var elem = paper.text(0, 0, 'Yay!')\n\t.attr({font: '10px Arial', fill: '#333'});\nelem.animate({x: 325, 'font-size': 30,\n\t rotation: 360});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		},
		function() {
			this.paper.text(300, 40, 'The code (animation)').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.rect(-30, 220, 610, 330, 30).attr({"fill": '#333'});
			
		      dashed = {fill: "none", stroke: "#666", "stroke-dasharray": "- "};
			(function(p) {
				var path1 = "M50.5,120.5c11,0 20,9 20,20c0,11 -9,20 -20,20c-11,0 -20-9 -20-20c0-11 9-20 20-20z",
						path2 = "M150.5,120.5l20,20 -20,20 -20-20z";
				p.path(path1).attr(dashed);
				p.path(path2).attr(dashed);
				var el = p.path(path1).attr({fill: "none", stroke: "#333", "stroke-width": 2}),
						elattrs = [{path: path2}, {path: path1}],
						now = 0;
				p.arrow(100, 140).node.onclick = function() {
					el.animate(elattrs[now++], 1000);
					if (now == 2) {
						now = 0;
					}
				};
			})(this.paper);
			this.paper.text(20, 275, "var elem = paper.path({path: path1});\nelem.animate({path: path2});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			
			(function(p) { 
				p.text(225, 140, "Yay!").attr({font: '10px Arial', fill: "none", stroke: "#666", "stroke-dasharray": "-"});
				p.text(325, 140, "Yay!").attr({font: '30px Arial', fill: "none", stroke: "#666", "stroke-dasharray": "-"});
				var el = p.text(225, 140, "Yay!").attr({font: '10px Arial', fill: "#333"}),
						elattrs = [{x: 325, "font-size": 30, rotation: 360}, {x: 225, "font-size": 10, rotation: 0}],
						now = 0;
				p.arrow(265, 140).node.onclick = function () {
					el.animate(elattrs[now++], 1000);
					if (now == 2) {
						now = 0;
					}
				};
			})(this.paper);
			this.paper.text(20, 375, "var elem = paper.text(0, 0, 'Yay!')\n\t.attr({font: '10px Arial', fill: '#333'});\nelem.animate({x: 325, 'font-size': 30,\n\t rotation: 360});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
			
			
			(function(p) {
				p.circle(420, 140, 20).attr(dashed);
				p.circle(520, 140, 20).attr(dashed);
				var el = p.circle(420, 140, 20).attr({fill: "#4CBA50", stroke: "#4CBA50", "stroke-width": 2}),
						elattrs = [{translation: 100, fill: "#4C5DBA", stroke: "#4C5DBA"}, {translation: -100, fill: "#4CBA50", stroke: "#4CBA50"}],
						now = 0;
				p.arrow(470, 140).node.onclick = function() {
					el.animate(elattrs[now++], 1000);
					if (now == 2) {
						now = 0;
					}
				};
			})(this.paper);
			this.paper.text(20, 475, "var elem = paper.circle(0, 0, 20)\n\t.attr({fill:'#4CBA50'});\nelem.animate({fill:'#4C5DBA'});").attr({
				'font-size': 22,
				'font-family': 'Andale Mono',
				'text-anchor': "start",
				'fill': '#eae6e0'
			});
		},
		function() {
			this.paper.text(300, 40, 'Resources').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.text(100, 200, 'http://raphaeljs.com').attr({
				'font-size': 23,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			this.paper.text(100, 300, 'http://github.com/DmitryBaranovskiy/raphael').attr({
				'font-size': 23,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			this.paper.text(100, 400, 'http://dmitry.baranovskiy.com/').attr({
				'font-size': 23,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			this.paper.text(100, 500, 'http://twitter.com/raphaeljs').attr({
				'font-size': 23,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			this.paper.path(paths['github']).attr({"fill": '#333', 'scale': 2, stroke: 'none', 'translation': "35 280"});
			this.paper.path(paths['twitter']).attr({"fill": '#333', 'scale': 2, stroke: 'none', 'translation': "35 480"});
			this.paper.path(paths['man']).attr({"fill": '#333', 'scale': 2, stroke: 'none', 'translation': "35 380"});
			this.paper.path(paths['world']).attr({"fill": '#333', 'scale': 2, stroke: 'none', 'translation': "35 180"});
		},
		function() {
			this.paper.text(300, 40, 'Thanks !').attr({
				'font-size': 55,
				'font-family': 'Futura',
				'fill': '#333'
			});
			this.paper.text(200, 200, 'http://imeuble.info').attr({
				'font-size': 23,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			this.paper.text(200, 300, 'http://github.com/meuble').attr({
				'font-size': 23,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			this.paper.text(200, 400, 'http://www.sociabliz.com/').attr({
				'font-size': 23,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			this.paper.text(200, 500, 'http://twitter.com/meuble').attr({
				'font-size': 23,
				'font-family': 'Futura',
				'text-anchor': "start",
				'fill': '#333'
			});
			this.paper.path(paths['github']).attr({"fill": '#333', 'scale': 2, stroke: 'none', 'translation': "135 280"});
			this.paper.path(paths['twitter']).attr({"fill": '#333', 'scale': 2, stroke: 'none', 'translation': "135 480"});
			this.paper.path(paths['man']).attr({"fill": '#333', 'scale': 2, stroke: 'none', 'translation': "135 180"});
			this.paper.path(paths['world']).attr({"fill": '#333', 'scale': 2, stroke: 'none', 'translation': "135 380"});
		}
	]);
});
Raphael.fn.arrow = function (x, y) {
    return this.path(["M", x, y] + "m-10-10l20,0 0-6 10,16 -10,16 0-6 -20,0 0,6 -10-16 10-16z").attr({fill: "#333", stroke: "none", "stroke-dasharray": "-", "fill-opacity": 0.2});
};