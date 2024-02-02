function pad(num, size) {
	    var s = num + "";
	    while (s.length < size) s = "0" + s;
	    return s;
	}

	function speak(text) {
		const utterance = new SpeechSynthesisUtterance(text);
		utterance.lang = 'pt-BR'; // Set the language to Portuguese (Brazil), adjust if needed
		utterance.rate = 1.0; // Adjust the speaking rate if needed
		speechSynthesis.speak(utterance);
	}

	jQuery(document).ready(function($) {
		$("body").on('keydown', function(e) {
			var senhaAtual   = $("#senhaAtualNumero");
			var senhaNormal  = $("#senhaNormal");
			var senhaPrior   = $("#senhaPrioridade");
			var ultimaSenha  = $("#ultimaSenhaNumero");
			var audioChamada = $("#audioChamada");

	        if(e.keyCode == 39){
	        	ultimaSenha.html(senhaAtual.html());
	            senha = parseInt(senhaNormal.val()) + 1;
	            senhaAtual.html(pad(senha, 4));
	            senhaNormal.val(pad(senha, 4));
	            audioChamada.trigger("play");
	            speak('Senha ' + pad(senha, 4) + '. Por favor, aguarde o seu atendimento.');
	        }
	        if(e.keyCode == 65){
	            senha = parseInt(senhaNormal.val()) - 1;
	            senhaAtual.html(pad(senha, 4));
	            senhaNormal.val(pad(senha, 4));
	            speak('Senha ' + pad(senha, 4) + '. Por favor, aguarde o seu atendimento.');
	        }
	        if(e.keyCode == 38){
	        	ultimaSenha.html(senhaAtual.html());
	            senha = parseInt(senhaPrior.val().replace("P","")) + 1;
	            senhaAtual.html("P" + pad(senha, 3));
	            senhaPrior.val("P" + pad(senha, 3));
	            audioChamada.trigger("play");
	            speak('Senha prioritária ' + "P" + pad(senha, 3) + '. Por favor, aguarde o seu atendimento.');
	        }
	        if(e.keyCode == 83){
	            senha = parseInt(senhaPrior.val().replace("P","")) - 1;
	            senhaAtual.html("P" + pad(senha, 3));
	            senhaPrior.val("P" + pad(senha, 3));
	            speak('Senha prioritária ' + "P" + pad(senha, 3) + '. Por favor, aguarde o seu atendimento.');
	        }
	    });
	});
