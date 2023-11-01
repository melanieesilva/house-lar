-- CREATE DATABASE larhouse;
use larhouse;

-- DROPS
-- drop view viewsolicitacaoimagem;

-- DELETES
-- delete from solicitacoes;
-- delete from imagensSolicitacoes;

-- delete from duvidas;
-- drop table imoveis;
-- drop table noticias;

-- SELECTS
select * from solicitacoes;
-- select * from imagensSolicitacoes;
-- select * from viewsolicitacaoimagem;

-- CREATES
CREATE TABLE `solicitacoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `statusSoli` enum('Solicitado','Aceito','Recusado') DEFAULT NULL,
  `tipoImovel` enum('Apartamento','Casa','Kitnet/Studio','Lote','Sala Comercial') DEFAULT NULL,
  `operacao` enum('Venda','Aluguel') DEFAULT NULL,
  `descricao` longtext,
  `numQuartos` int DEFAULT NULL,
  `numBanheiros` int DEFAULT NULL,
  `numVagas` int DEFAULT NULL,
  `areaImovel` float DEFAULT NULL,
  `valorImovel` decimal(10,2) DEFAULT NULL,
  `valorCondominio` decimal(10,2) DEFAULT NULL,
  `valorIPTU` decimal(10,2) DEFAULT NULL,
  `parcelasIPTU` int DEFAULT NULL,
  `construcao` enum('Sim','Não') DEFAULT NULL,
  `numAndares` int DEFAULT NULL,
  `dataEntrega` date DEFAULT NULL,
  `emCondominio` enum('Sim','Não') DEFAULT NULL,
  `dataPublicacao` date DEFAULT NULL,
  `nomeCliente` varchar(80) DEFAULT NULL,
  `telefone` varchar(14) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `CPF` varchar(14) DEFAULT NULL,
  `cidade` varchar(80) DEFAULT NULL,
  `bairro` varchar(80) DEFAULT NULL,
  `endereco` varchar(100) DEFAULT NULL,
  `numero` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `imagenssolicitacoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idSolicitacao_FK` int DEFAULT NULL,
  `nomeImagem` varchar(100) DEFAULT NULL,
  `pathImagem` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idSolicitacao_FK` (`idSolicitacao_FK`),
  CONSTRAINT `imagenssolicitacoes_ibfk_1` FOREIGN KEY (`idSolicitacao_FK`) REFERENCES `solicitacoes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `noticias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo_noticia` varchar(255) NOT NULL,
  `descricao_noticia` varchar(255) NOT NULL,
  `artigo_noticia` text NOT NULL,
  `autor_noticia` varchar(255) NOT NULL,
  `publicado_por` varchar(255) DEFAULT 'House&Lar',
  `nome_imagem` varchar(255) NOT NULL,
  `data_imagem` blob,
  `nome_categoria` varchar(255),
  `cor_categoria` enum('Amarelo','Azul','Roxo','Verde','Laranja','Vermelho'),
  `status` enum('Publicada','Desativada') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Telefone` varchar(255) DEFAULT NULL,
  `Senha` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `duvidas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(255) DEFAULT NULL,
  `email_cliente` varchar(255) DEFAULT NULL,
  `telefone_cliente` varchar(255) DEFAULT NULL,
  `mensagem_cliente` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(255) NOT NULL,
  `email_cliente` varchar(255) NOT NULL,
  `telefone_cliente` varchar(255) NOT NULL,
  `senha_cliente` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- UPDATES

-- update solicitacoes set dataPublicacao = curdate();

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

-- INSERT INTO `larhouse`.`solicitacoes` (`statusSoli`, `tipoImovel`, `operacao`, `descricao`, `numQuartos`, `numBanheiros`, `numVagas`, `areaImovel`, `valorImovel`, `valorCondominio`, `valorIPTU`, `parcelasIPTU`, `construcao`, `numAndares`, `dataEntrega`, `emCondominio`, `nomeCliente`, `telefone`, `email`, `CPF`, `cidade`, `bairro`, `endereco`, `numero`) VALUES ('Solicitado', 'Apartamento', 'Venda', 'Imóvel aa', '2', '2', '2', '48', '480870.25', '1478', '245', '2', 'Sim', '3', '2020-08-09', 'Não', 'Josy Lima', '(71)98564-3211', 'josylima@gmail.com', '125.357.852-99', 'Feira de Santana', 'Conceição', 'Rua dos Vereadores Francisco Dantas', '99');
-- INSERT INTO `larhouse`.`solicitacoes` (`statusSoli`, `tipoImovel`, `operacao`, `descricao`, `numQuartos`, `numBanheiros`, `numVagas`, `areaImovel`, `valorImovel`, `valorCondominio`, `valorIPTU`, `parcelasIPTU`, `construcao`, `numAndares`, `dataEntrega`, `emCondominio`, `nomeCliente`, `telefone`, `email`, `CPF`, `cidade`, `bairro`, `endereco`, `numero`) VALUES ('Solicitado', 'Casa', 'Venda', 'Imóvel aa', '2', '2', '2', '65', '840.00', '1256.00', '456.00', '2', 'Não', '3', '2008-07-06', 'Sim', 'Kelly Dores', '(71)98564-3200', 'kellydores@gmail.com', '495.654.123.22', 'Feira de Santana', 'Conceição', 'Rua dos Vereadores Francisco Dantas', '10');

-- INSERT INTO `larhouse`.`imagenssolicitacoes` (`idSolicitacao_FK`, `nomeImagem`, `pathImagem`) VALUES ('18', 'yasin-aribuga-BCp_xuIrYGQ-unsplash.jpg', 'C:\\Users\\melan\\Documents\\GitHub\\house-lar\\public\\uploads\\images_1698407931247_yasin-aribuga-BCp_xuIrYGQ-unsplash.jpg');
-- INSERT INTO `larhouse`.`imagenssolicitacoes` (`idSolicitacao_FK`, `nomeImagem`, `pathImagem`) VALUES ('19', 'Aula Invertida DS2 - Pesquisa e Roteiro (1).jpg', 'C:\\Users\\melan\\Documents\\GitHub\\house-lar\\public\\uploads\\images_1698407931802_Aula Invertida DS2 - Pesquisa e Roteiro (1).jpg');

-- INSERT INTO `larhouse`.`imoveis` (`statusImovel`, `tipo_imovel`, `operacao`, `descricao`, `num_quartos`, `num_banheiros`, `num_vagas`, `area`, `valor`, `valor_condominio`, `iptu`, `parcelas_iptu`, `construcao`, `cidade`, `bairro`, `num_andares`, `data_entrega`, `em_condominio`) VALUES ('Publicado', 'Casa', 'Venda', 'Describe 1', '4', '4', '4', '120', '780000', '890', '560', '4', 'Não', 'Salvador', 'Cajazeiras', '4', '2020-08-12', 'Sim');
-- INSERT INTO `larhouse`.`imoveis` (`statusImovel`, `tipo_imovel`, `operacao`, `descricao`, `num_quartos`, `num_banheiros`, `num_vagas`, `area`, `valor`, `valor_condominio`, `iptu`, `parcelas_iptu`, `construcao`, `cidade`, `bairro`, `num_andares`, `data_entrega`, `em_condominio`) VALUES ('Desativado', 'Apartamento', 'Aluguel', 'Describe 2', '5', '5', '6', '180', '900000', '560', '580', '8', 'Sim', 'Salvador', 'Pituba', '10', '2023-12-01', 'Sim');

