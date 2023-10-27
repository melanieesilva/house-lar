use larhouse;

drop trigger PreencherViewSolicitacaoImagem;

drop table solicitacoes;
drop table imagensSolicitacoes;
drop table ViewSolicitacaoImagem;

create table solicitacoes(
	id int primary key auto_increment,
    statusSoli ENUM('Solicitado','Aceito','Recusado'),
    tipoImovel ENUM('Apartamento','Casa','Kitnet/Studio','Lote','Sala Comercial'),
    operacao ENUM('Venda','Aluguel'),
    descricao longtext,
    numQuartos int,
    numBanheiros int,
    numVagas int,
    areaImovel float,
	valorImovel decimal(10,2),
    valorCondominio decimal(10,2),
    valorIPTU decimal(10,2),
    parcelasIPTU int,
    construcao ENUM('Sim','Não'),
    numAndares int,
    dataEntrega date,
    emCondominio ENUM('Sim','Não'),
    dataPublicacao date,
    nomeCliente varchar(80),
    telefone varchar(14),
    email varchar(100),
    CPF varchar(14),
    cidade varchar(80),
    bairro varchar(80),
    endereco varchar(100),
    numero int
);

create table imagensSolicitacoes(
	id int auto_increment primary key,
    idSolicitacao_FK int,
	nomeImagem varchar(100),
    pathImagem varchar(200),
    
    foreign key (idSolicitacao_FK) references solicitacoes(id)
);

select * from ViewSolicitacaoImagem;

CREATE VIEW ViewSolicitacaoImagem AS SELECT
			sol.id,
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
