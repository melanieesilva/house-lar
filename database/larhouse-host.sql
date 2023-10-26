

-- *************************** SCRIPT DE RASCUNHO ***************************

use larhouse;

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
    dataPublicacao date
);
update solicitacoes set dataPublicacao = curdate();

create table imagensSolicitacoes(
	id int auto_increment primary key,
    idSolicitacao_FK int,
	nomeImagem varchar(100),
    pathImagem varchar(200),
    
    foreign key (idSolicitacao_FK) references solicitacoes(id)
);

drop table viewSolicitacaoImagem;

create table viewSolicitacaoImagem(
	id int auto_increment primary key,
	id_soli int,
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
    id_imagem int,
	nomeImagem varchar(100),
    pathImagem varchar(200)
);



DELIMITER $
CREATE TRIGGER PreencherViewSolicitacaoImagem
AFTER INSERT ON imagensSolicitacoes
FOR EACH ROW
BEGIN
	INSERT INTO viewSolicitacaoImagem (
			id_soli,
			statusSoli,
			tipoImovel,
			operacao,
			descricao,
			numQuartos,
			numBanheiros,
			numVagas,
			areaImovel,
			valorImovel,
			valorCondominio,
			valorIPTU,
			parcelasIPTU,
			construcao,
			numAndares,
			dataEntrega,
			emCondominio,
			dataPublicacao,
			id_imagem,
			nomeImagem,
			pathImagem
    )
    SELECT 	sol.id,
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
            img.id,
			img.nomeImagem,
			img.pathImagem
		FROM solicitacoes AS sol
        INNER JOIN imagensSolicitacoes AS img 
        ON sol.id = img.idSolicitacao_FK
        WHERE img.id = NEW.id;
END$

DELIMITER ;