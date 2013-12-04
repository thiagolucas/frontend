app.service("membroService", function () {
	
	this.getMembrosList = function () {
		return bd;	
	};

	this.saveMembro = function (membro) {
		bd.push(membro);	
	};

	this.deleteMembro = function (membros) {
		var antigosMembros = membros;
		var membrosAtuais = [];

		angular.forEach(antigosMembros, function (membro) {
			if (!membro.deletar){
				membrosAtuais.push(membro);
			};
		});

		this.updateMembros(membrosAtuais);
	};

	this.updateMembros = function (membros) {
		bd = membros;
	};
});