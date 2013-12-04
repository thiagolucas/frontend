var app = angular.module("cadastro",["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when("/",{templateUrl:"partials/lista.html", controller:"CadastroCtrl"})
  .when("/incluir",{templateUrl:"partials/incluir.html", controller:"CadastroCtrl"})
  .when("/deletar",{templateUrl:"partials/deletar.html", controller:"CadastroCtrl"})
  .when("/atualizar",{templateUrl:"partials/atualizar.html", controller:"CadastroCtrl"})
});

app.controller("CadastroCtrl", function ($scope, $location, membroService) {

	$scope.membros = membroService.getMembrosList();

	$scope.cadastrar = function (){

    var novoMembro = {nome: $scope.nome, email: $scope.email};

    membroService.saveMembro(novoMembro);
		$scope.nome = "";
    $scope.email = "";
    $location.path("/");
	};
  
  $scope.deletar = function(){
    membroService.deleteMembro($scope.membros);
    $location.path("/");
  };

  $scope.atualizar = function() {
    membroService.updateMembros($scope.membros);
    $location.path("/");
  };
  
  $scope.paginaAtiva = function (pagina) {
    return pagina === $location.path();
  };
});