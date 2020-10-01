function Juego (){
	this.partidas={};// que coleccion? (elegimos diccionario/array asociativo)(depende del lenguaje de programacion)
	
	this.crearPratida=function(num, owner){
		//generar codigo de 6 letras
		let codigo=this.obtenerCodigo();

		//comprobar que no esta en uso
		if (!this.partidas[codigo]){

			//crear el objeto partida: num, owner
			this.partidas[codigo]=new Partida(num,owner);
		}
	}

	this.unirAPartida=function(nick){
		//toDO
	}

	this.obtenerCodigo=function(num,owner){
		let cadena="ABCDEFGHIJKLMNOPQRSTUVXYZ";
		let letras=cadena.split('');
		let codigo=[];
		for(i=0;i<6;i++){
			codigo.push(letras[randomInt(1,25)-1]);
		}
		return codigo.join('');

			
	}
}

function Partida(num, owner){
	this.maximo=num;
	this.owner=owner;
	this.usuarios=[]; // el index 0 es el owner
	//this.usuarios={} // version diccionario
	this.agregarUsuario=function(nick){
		//comprobar nick unico
		//comprobar si el usuario maximo
	}

	this.agregarUsuario(owner)
}


function randomInt(low, high) {
	return Math.floor(Math.random() * (high - low) + low);
}
