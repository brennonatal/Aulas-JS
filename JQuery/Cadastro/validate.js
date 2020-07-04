$("#txtCEP").mask("00000-000");

		var opcoesValidate = {
			rules: {
				txtNome: {
					required: true,
					minlength: 4,
					maxlength: 50
				},

				txtEmail: {
					required: true,
					email: true,
					maxlength: 100
				}
			},

			submitHandler: function () {

				// Conteúdo do antigo método criar()

				var txtNome = $("#txtNome");
				var txtEmail = $("#txtEmail");

				var nome = txtNome.val();
				var emailAAA = txtEmail.val();

				//if (nome.length == 0 || emailAAA.length == 0) {
				//if (!nome.length || !emailAAA.length) {
				if (!nome || !emailAAA) {
					alert("Dados incompletos!");
					return;
				}

				var pessoa = {
					nome: nome,
					email: emailAAA
				};

				// https://api.jquery.com/jquery.ajax/
				var opcoes = {
					url: "https://academico.espm.br/testeapi/criar",
					// Existem diversos métodos HTTP!
					//
					// Os mais comuns são GET e POST.
					//
					// Através do GET não é possível enviar dados para o servidor
					// dentro do corpo da requisição.
					//
					// Já com o POST, é possível enviar dados dentro do corpo
					// da requisição!
					method: "POST",
					data: JSON.stringify(pessoa),

					// Parâmetros de configuração específicos do jQuery!
					processData: false,
					contentType: "application/json",

					success: function (dadosDeRetorno) {
						alert("Sucesso: " + dadosDeRetorno);
					},

					error: function () {
						alert("Algo deu errado! :( ");
					}
				};

				$.ajax(opcoes);
			}
		};

		$("#formulario").validate(opcoesValidate);