//miniAsteroid
					
	//sprites de miniAsteroid
		var sprMiniAsteroidNormal = new Image()
		var sprMiniAsteroidDestruct1 = new Image()
		var sprMiniAsteroidDestruct2 = new Image()
		var sprMiniAsteroidDestruct3 = new Image()
		var sprMiniAsteroid = sprMiniAsteroidNormal
		var sprMiniAsteroidString = "sprMiniAsteroidNormal"
		sprMiniAsteroidNormal.src = "sprites/miniAsteroid/normal.png"
		sprMiniAsteroidDestruct1.src = "sprites/miniAsteroid/destruct1.png"
		sprMiniAsteroidDestruct2.src = "sprites/miniAsteroid/destruct2.png"
		sprMiniAsteroidDestruct3.src = "sprites/miniAsteroid/destruct3.png"
		
	//variables de miniAsteroid
		
		var contadorMiniAsteroid = 10
		var miniAsteroidDamaged = false
		
		var miniAsteroid = {
			x: canvas.width + (72 * getRandomInt(3, 10)),
			y: getRandomInt(40, canvas.height - 40),
			width: 9 * gameScale,
			height: 9 * gameScale,
			x2: this.width * gameScale + this.x,
			y2: this.height * gameScale + this.y,
			speedX: 1.5,
			show: false,
			use: false
		}
		
		
		
	//funciones de miniAsteroid
		function dibujarMiniAsteroid(){
			
			if (miniAsteroid.show == true) {
				ctx.drawImage(sprMiniAsteroid, miniAsteroid.x, miniAsteroid.y, miniAsteroid.width, miniAsteroid.height)
			}
		}
		
		
		function actualizarMiniAsteroid(){
			if (miniAsteroid.use == true) {
			
				miniAsteroid.x -= ship.speed
				
					miniAsteroid.x -= miniAsteroid.speedX
								
				// actualizar miniAsteroid.x2/y2
				miniAsteroid.x2 = miniAsteroid.width + miniAsteroid.x
				miniAsteroid.y2 = miniAsteroid.height + miniAsteroid.y
			}
		}
		
		
		function miniAsteroidDamage(){
			
			miniAsteroidDamaged = true
			contadorMiniAsteroid = 10
			
			if (sprMiniAsteroidString == "sprMiniAsteroidNormal") {
				sprMiniAsteroid = sprMiniAsteroidDestruct1
				sprMiniAsteroidString = "sprMiniAsteroidDestruct1"
			} else {
			
				if (sprMiniAsteroidString == "sprMiniAsteroidDestruct1") {
					sprMiniAsteroid = sprMiniAsteroidDestruct2
					sprMiniAsteroidString = "sprMiniAsteroidDestruct2"
				} else {
					
					if (sprMiniAsteroidString == "sprMiniAsteroidDestruct2") {
						sprMiniAsteroid = sprMiniAsteroidDestruct3
						sprMiniAsteroidString = "sprMiniAsteroidDestruct3"
						
					} else {
						
						if (sprMiniAsteroidString == "sprMiniAsteroidDestruct3") {
							score.number += 5
							sprMiniAsteroid = sprMiniAsteroidNormal
							sprMiniAsteroidString = "sprMiniAsteroidNormal"
							miniAsteroid.show = false
							
						}
					}
				}
			}
		}
	
