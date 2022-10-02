# API Testing  #
API de Load Teste de Aplicações

# #
-connections
    Numero de conexões
-pipelining
    Requisições por conexão
-duration SEC
    Tempo de execuçao 
-amount
    Quantidade de request feita antes de sair (caso ativado, duração é ignorada)


POST
localhost/test
{
	"url": "localhost:3500/payments",
	"connection": 2,
	"amount": 10,
	"pipelining": 1,
	"method": "POST",
	"authorization": "Bearer 8116f91d2be0dbbdeafc562b39a7b71f36fb0085",
		"body": {
		  "amount": 11.50,
		  "document": "01234567890"
	}
}


GET endpoint/test/{id}