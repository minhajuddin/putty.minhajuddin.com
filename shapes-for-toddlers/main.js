    (function() {
      var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');

      // resize the canvas to fill browser window dynamically
      window.addEventListener('resize', resizeCanvas, false);

      function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        /**
         * Your drawings need to be inside this function otherwise they will be reset when
         * you resize the browser window and the canvas goes will be cleared.
         */
        drawStuff();
      }
      resizeCanvas();

      function drawStuff() {

        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;

        function drawCircle(coords) {
          var radius = 70;
          var coord = coords || randomCoord();
          context.beginPath();
          context.arc(coord.x, coord.y, radius, 0, 2 * Math.PI, false);
          context.fillStyle = randomColor();
          context.fill();
          context.lineWidth = 5;
          context.strokeStyle = '#222';
          context.stroke();
        }

        function randomCoord() {
          return {
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height)
          };
        }

        function rand(max) {
          return Math.floor(Math.random() * max)
        }

        function randomColor() {
          const colors = "#D50000 #FF1744 #4A148C #AB47BC #311B92 #1A237E #0D47A1 #01579B #004D40 #1B5E20 #33691E #827717 #F57F17 #FFD600 #E65100 #BF360C #3E2723 #212121 #263238".split(" ");
          return colors[rand(colors.length)]
        }

        function drawSquare(coord) {
          const p = coord || randomCoord()
          context.beginPath();
          context.rect(p.x, p.y, 150, 150);
          context.fillStyle = randomColor();
          context.fill();
          context.lineWidth = 7;
          context.strokeStyle = 'black';
          context.stroke();
        }

        function randEl(arr) {
          arr[rand(arr.length)]
        }

        function drawRectangle(coord) {
          const p = coord || randomCoord()
          context.beginPath();
          context.rect(p.x, p.y, 200, 100);
          context.fillStyle = randomColor();
          context.fill();
          context.lineWidth = 7;
          context.strokeStyle = 'black';
          context.stroke();
        }

        const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

        function randomLetter() {
          return letters.charAt(rand(letters.length));
        }

        function drawLetter(coord) {
          const p = coord || randomCoord()
          context.font = "120px Georgia"
          context.fillStyle = randomColor();
          context.fillText(randomLetter(), p.x, p.y)
        }

        function drawShape(coord) {
          coord = coord || randomCoord()
          var funs = [drawRectangle, drawCircle, drawSquare, drawLetter]
          funs[rand(funs.length)](coord)
        }

        window.drawLetter = drawLetter

        //setInterval(drawShape, 3000)

        function touch(e) {
          const coord = e.changedTouches[0];
          drawShape({
            x: coord.pageX,
            y: coord.pageY
          })
        }

        canvas.addEventListener("touchstart", touch, false);


        document.addEventListener('keypress', x =>{
          drawShape()
        })
        document.addEventListener('click', drawShape)
      }


    })();
