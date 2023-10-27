use larhouse;

drop view viewsolicitacaoimagem;
select * from viewsolicitacaoimagem;

update solicitacoes set dataPublicacao = curdate();

CREATE VIEW ViewSolicitacaoImagem AS SELECT
			sol.id as id_soli,
			sol.statusSoli,
			sol.tipoImovel,
			sol.operacao,
			sol.descricao,
			sol.numQuartos,
			sol.numBanheiros,
			sol.numVagas,
			sol.areaImovel,
			sol.valorImovel,
			sol.valorCondominio,
			sol.valorIPTU,
			sol.parcelasIPTU,
			sol.construcao,
			sol.numAndares,
			sol.dataEntrega,
			sol.emCondominio,
			sol.dataPublicacao,
			sol.nomeCliente,
			sol.telefone,
			sol.email,
			sol.CPF,
			sol.cidade,
			sol.bairro,
			sol.endereco,
			sol.numero,
            img.id AS id_imagem,
			img.nomeImagem,
			img.pathImagem
		FROM solicitacoes AS sol
        INNER JOIN imagensSolicitacoes AS img 
        WHERE sol.id = img.idSolicitacao_FK;

INSERT INTO `larhouse`.`solicitacoes` (`statusSoli`, `tipoImovel`, `operacao`, `descricao`, `numQuartos`, `numBanheiros`, `numVagas`, `areaImovel`, `valorImovel`, `valorCondominio`, `valorIPTU`, `parcelasIPTU`, `construcao`, `numAndares`, `dataEntrega`, `emCondominio`, `nomeCliente`, `telefone`, `email`, `CPF`, `cidade`, `bairro`, `endereco`, `numero`) VALUES ('Solicitado', 'Apartamento', 'Venda', 'Imóvel aa', '2', '2', '2', '48', '480870.25', '1478', '245', '2', 'Sim', '3', '2020-08-09', 'Não', 'Josy Lima', '(71)98564-3211', 'josylima@gmail.com', '125.357.852-99', 'Feira de Santana', 'Conceição', 'Rua dos Vereadores Francisco Dantas', '99');
INSERT INTO `larhouse`.`solicitacoes` (`statusSoli`, `tipoImovel`, `operacao`, `descricao`, `numQuartos`, `numBanheiros`, `numVagas`, `areaImovel`, `valorImovel`, `valorCondominio`, `valorIPTU`, `parcelasIPTU`, `construcao`, `numAndares`, `dataEntrega`, `emCondominio`, `nomeCliente`, `telefone`, `email`, `CPF`, `cidade`, `bairro`, `endereco`, `numero`) VALUES ('Solicitado', 'Casa', 'Venda', 'Imóvel aa', '2', '2', '2', '65', '840.00', '1256.00', '456.00', '2', 'Não', '3', '2008-07-06', 'Sim', 'Kelly Dores', '(71)98564-3200', 'kellydores@gmail.com', '495.654.123.22', 'Feira de Santana', 'Conceição', 'Rua dos Vereadores Francisco Dantas', '10');

INSERT INTO `larhouse`.`imagenssolicitacoes` (`idSolicitacao_FK`, `nomeImagem`, `pathImagem`) VALUES ('18', 'yasin-aribuga-BCp_xuIrYGQ-unsplash.jpg', 'C:\\Users\\melan\\Documents\\GitHub\\house-lar\\public\\uploads\\images_1698407931247_yasin-aribuga-BCp_xuIrYGQ-unsplash.jpg');
INSERT INTO `larhouse`.`imagenssolicitacoes` (`idSolicitacao_FK`, `nomeImagem`, `pathImagem`) VALUES ('19', 'Aula Invertida DS2 - Pesquisa e Roteiro (1).jpg', 'C:\\Users\\melan\\Documents\\GitHub\\house-lar\\public\\uploads\\images_1698407931802_Aula Invertida DS2 - Pesquisa e Roteiro (1).jpg');

