
-- Active: 1700955922591@@127.0.0.1@3306@larhouse
-- CREATE DATABASE larhouse;
use larhouse;

-- DROPS
-- drop database larhouse;
-- drop view viewsolicitacaoimagem;
-- drop view viewimovelimagem;
-- drop table imoveis;
-- drop table noticias;
-- drop table solicitacoes;
-- drop table imagenssolicitacoes;

-- DELETES
-- delete from solicitacoes;
-- delete from imagensSolicitacoes;
-- delete from duvidas;


-- SELECTS
-- select * from solicitacoes;
-- select * from imagensSolicitacoes;
-- select * from viewsolicitacaoimagem;

-- UPDATES

-- update solicitacoes set dataPublicacao = curdate();

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
  `telefoneCliente` varchar(14) DEFAULT NULL,
  `emailCliente` varchar(100) DEFAULT NULL,
  `CPFCliente` varchar(14) DEFAULT NULL,
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

CREATE TABLE `imoveis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `statusImovel` enum('Publicado','Desativado') DEFAULT NULL,
  `tipo_imovel` enum('Casa','Apartamento','Lote','Kitnet/Studio','Sala Comercial') DEFAULT NULL,
  `operacao` enum('Venda','Aluguel') DEFAULT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `num_quartos` int DEFAULT NULL,
  `num_banheiros` int DEFAULT NULL,
  `num_vagas` int DEFAULT NULL,
  `area` float DEFAULT NULL,
  `valor_imovel` decimal(10,0) DEFAULT NULL,
  `valor_condominio` decimal(10,0) DEFAULT NULL,
  `valor_iptu` decimal(10,0) DEFAULT NULL,
  `parcelas_iptu` int DEFAULT NULL,
  `construcao` enum('Sim','Não') DEFAULT NULL,
  `cidade` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `numero` int DEFAULT NULL,
  `num_andares` int DEFAULT NULL,
  `data_entrega` date DEFAULT NULL,
  `em_condominio` enum('Sim','Não') DEFAULT NULL,
  `data_publicacao` date DEFAULT NULL,
  `nome_prop` varchar(255) DEFAULT NULL,
  `email_prop` varchar(255) DEFAULT NULL,
  `telefone_prop` varchar(255) DEFAULT NULL,
  `cpf_prop` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `imagens_imovel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idImovel_FK` int DEFAULT NULL,
  `nome_imagem` varchar(255) DEFAULT NULL,
  `path_imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idImovel_FK` (`idImovel_FK`),
  CONSTRAINT `imagens_imovel_ibfk_1` FOREIGN KEY (`idImovel_FK`) REFERENCES `imoveis` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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

CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_categoria` VARCHAR(255),
  `cor_categoria` ENUM('Amarelo', 'Azul', 'Roxo', 'Verde', 'Laranja', 'Vermelho'),
  PRIMARY KEY(`id`)
);

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
			sol.telefoneCliente,
			sol.emailCliente,
			sol.CPFCliente,
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
        
CREATE VIEW ViewImovelImagem AS SELECT
			imo.id as id_imovel,
			imo.statusImovel,
			imo.tipo_imovel,
			imo.operacao,
			imo.descricao,
			imo.num_quartos,
			imo.num_banheiros,
			imo.num_vagas,
			imo.area,
			imo.valor_imovel,
			imo.valor_condominio,
			imo.valor_iptu,
			imo.parcelas_iptu,
			imo.construcao,
			imo.num_andares,
			imo.data_entrega,
			imo.em_condominio,
			imo.data_publicacao,
			imo.nome_prop,
			imo.telefone_prop,
			imo.email_prop,
			imo.cpf_prop,
			imo.cidade,
			imo.bairro,
			imo.endereco,
			imo.numero,
      imag.id AS id_imagem,
			imag.nome_imagem,
			imag.path_imagem
		FROM imoveis AS imo
        INNER JOIN imagens_imovel AS imag 
        WHERE imo.id = imag.`idImovel_FK`;
        
        

-- -------------------- INSERTS --------------------

-- INSERT INTO `larhouse`.`solicitacoes` (`statusSoli`, `tipoImovel`, `operacao`, `descricao`, `numQuartos`, `numBanheiros`, `numVagas`, `areaImovel`, `valorImovel`, `valorCondominio`, `valorIPTU`, `parcelasIPTU`, `construcao`, `numAndares`, `dataEntrega`, `emCondominio`, `nomeCliente`, `telefoneCliente`, `emailCliente`, `CPFCliente`, `cidade`, `bairro`, `endereco`, `numero`) VALUES ('Solicitado', 'Apartamento', 'Venda', 'Imóvel aa', '2', '2', '2', '48', '480870.25', '1478', '245', '2', 'Sim', '3', '2020-08-09', 'Não', 'Josy Lima', '(71)98564-3211', 'josylima@gmail.com', '125.357.852-99', 'Feira de Santana', 'Conceição', 'Rua dos Vereadores Francisco Dantas', '99');
-- INSERT INTO `larhouse`.`solicitacoes` (`statusSoli`, `tipoImovel`, `operacao`, `descricao`, `numQuartos`, `numBanheiros`, `numVagas`, `areaImovel`, `valorImovel`, `valorCondominio`, `valorIPTU`, `parcelasIPTU`, `construcao`, `numAndares`, `dataEntrega`, `emCondominio`, `nomeCliente`, `telefoneCliente`, `emailCliente`, `CPFCliente`, `cidade`, `bairro`, `endereco`, `numero`) VALUES ('Solicitado', 'Casa', 'Venda', 'Imóvel aa', '2', '2', '2', '65', '840.00', '1256.00', '456.00', '2', 'Não', '3', '2008-07-06', 'Sim', 'Kelly Dores', '(71)98564-3200', 'kellydores@gmail.com', '495.654.123.22', 'Feira de Santana', 'Conceição', 'Rua dos Vereadores Francisco Dantas', '10');
INSERT INTO solicitacoes (statusSoli, tipoImovel, operacao, descricao, numQuartos, numBanheiros, numVagas, areaImovel, valorImovel, valorCondominio, valorIPTU, parcelasIPTU, construcao, numAndares, dataEntrega, emCondominio, nomeCliente, telefoneCliente, emailCliente, CPFCliente, cidade, bairro, endereco, numero)
VALUES ('Solicitado', 'Apartamento', 'Aluguel', 'Apartamento para aluguel localizado no bairro Rio Vermelho.
Possui 2 quartos espaçosos para acomodação confortável.
Um banheiro completo com chuveiro, pia e vaso sanitário.
O imóvel inclui 1 vaga de estacionamento para seu veículo.
Cozinha prática, equipada com armários para armazenamento.
Sala de estar acolhedora para relaxar e receber visitas.
Piso de alta qualidade em todo o apartamento.
Acesso rápido a comércios, restaurantes e transporte público.
Prédio seguro com portaria 24 horas.
Área residencial tranquila e com uma comunidade amigável.
Ideal para casais, pequenas famílias ou jovens profissionais em busca de um lar confortável.
Entre em contato para mais informações e agendamento de visitas.', 2, 1, 1, 60.0, 1000.00, 200.00, 100.00, 12, 'Não', 9, '2001-09-04', 'Sim', 'João Silva', '999999999', 'houselar7@gmail.com', '12345678901', 'Salvador', 'Rio Vermelho', 'Rua A', 123);

INSERT INTO solicitacoes (statusSoli, tipoImovel, operacao, descricao, numQuartos, numBanheiros, numVagas, areaImovel, valorImovel, valorCondominio, valorIPTU, parcelasIPTU, construcao, numAndares, dataEntrega, emCondominio, nomeCliente, telefoneCliente, emailCliente, CPFCliente, cidade, bairro, endereco, numero)
VALUES ('Solicitado', 'Casa', 'Venda', 'A casa em questão é um imóvel espaçoso e aconchegante, ideal para abrigar uma família em um ambiente confortável. Com 3 quartos, oferece espaço suficiente para acomodar todos os membros da família com privacidade.

Além disso, a casa possui 2 banheiros, o que é extremamente conveniente para evitar filas e proporcionar maior conforto aos moradores. Com uma distribuição bem planejada, os banheiros estão estrategicamente localizados para atender às necessidades diárias com praticidade.

Uma das grandes vantagens deste imóvel é a disponibilidade de 2 vagas de estacionamento. Isso é um diferencial importante, especialmente considerando a realidade urbana onde nem sempre é fácil encontrar espaço para estacionar. Essa característica garante comodidade e praticidade para os moradores, permitindo que eles estacionem seus veículos de forma segura e conveniente.

Além dessas características fundamentais, a casa apresenta outros ambientes que compõem um lar completo, como sala de estar, cozinha, área de serviço e possivelmente um quintal ou uma varanda para momentos de lazer e descanso.

No geral, essa casa com 3 quartos, 2 banheiros e 2 vagas de estacionamento é uma excelente opção para quem busca um imóvel espaçoso, funcional e confortável para viver com sua família.', 3, 2, 2, 120.0, 200000.00, 0.00, 150.00, 1, 'Não', 1, '2000-04-02', 'Não', 'Maria Santos', '888888888', 'houselar7@gmail.com', '98765432109', 'Salvador', 'Pituba', 'Rua Das Alamedas', 456);

INSERT INTO solicitacoes (statusSoli, tipoImovel, operacao, descricao, numQuartos, numBanheiros, numVagas, areaImovel, valorImovel, valorCondominio, valorIPTU, parcelasIPTU, construcao, numAndares, dataEntrega, emCondominio, nomeCliente, telefoneCliente, emailCliente, CPFCliente, cidade, bairro, endereco, numero)
VALUES ('Solicitado', 'Kitnet/Studio', 'Aluguel', 'Descrição de imóvel popular para Salvador - Cajazeiras', 1, 1, 0, 30.0, 500.00, 100.00, 50.00, 6, 'Sim', 5, '2008-01-23', 'Sim', 'Ana Oliveira', '777777777', 'ana@example.com', '45678912304', 'Salvador', 'Cajazeiras', 'Rua C', 789);

INSERT INTO solicitacoes (statusSoli, tipoImovel, operacao, descricao, numQuartos, numBanheiros, numVagas, areaImovel, valorImovel, valorCondominio, valorIPTU, parcelasIPTU, construcao, numAndares, dataEntrega, emCondominio, nomeCliente, telefoneCliente, emailCliente, CPFCliente, cidade, bairro, endereco, numero)
VALUES ('Solicitado', 'Lote', 'Venda', 'Descrição de imóvel popular para Salvador - Caminho das Árvores', NULL, NULL, NULL, 500.0, 100000.00, 0.00, 0.00, 0, 'Não', NULL, NULL, 'Não', 'Pedro Santos', '666666666', 'pedro@example.com', '78945612303', 'Salvador', 'Caminho das Árvores', 'Rua D', 1011);

INSERT INTO solicitacoes (statusSoli, tipoImovel, operacao, descricao, numQuartos, numBanheiros, numVagas, areaImovel, valorImovel, valorCondominio, valorIPTU, parcelasIPTU, construcao, numAndares, dataEntrega, emCondominio, nomeCliente, telefoneCliente, emailCliente, CPFCliente, cidade, bairro, endereco, numero)
VALUES ('Solicitado', 'Sala Comercial', 'Aluguel', 'Descrição de imóvel popular para Salvador - Conceição', NULL, NULL, NULL, 50.0, 800.00, 200.00, 75.00, 12, 'Sim', 10, NULL, 'Sim', 'Fernanda Lima', '555555555', 'fernanda@example.com', '32165498702', 'Salvador', 'Conceição', 'Rua E', 1213);

INSERT INTO solicitacoes (statusSoli, tipoImovel, operacao, descricao, numQuartos, numBanheiros, numVagas, areaImovel, valorImovel, valorCondominio, valorIPTU, parcelasIPTU, construcao, numAndares, dataEntrega, emCondominio, nomeCliente, telefoneCliente, emailCliente, CPFCliente, cidade, bairro, endereco, numero)
VALUES ('Solicitado', 'Apartamento', 'Venda', 'Descrição de imóvel mais luxuoso para Salvador - Barra', 4, 3, 2, 150.0, 1000000.00, 1000.00, 500.00, 12, 'Sim', 20, NULL, 'Sim', 'Juliana Costa', '444444444', 'juliana@example.com', '01234567890', 'Salvador', 'Barra', 'Rua F', 1415);







-- INSERT INTO `larhouse`.`imagenssolicitacoes` (`idSolicitacao_FK`, `nomeImagem`, `pathImagem`) VALUES ('18', 'yasin-aribuga-BCp_xuIrYGQ-unsplash.jpg', 'C:\\Users\\melan\\Documents\\GitHub\\house-lar\\public\\uploads\\images_1698407931247_yasin-aribuga-BCp_xuIrYGQ-unsplash.jpg');
-- INSERT INTO `larhouse`.`imagenssolicitacoes` (`idSolicitacao_FK`, `nomeImagem`, `pathImagem`) VALUES ('19', 'Aula Invertida DS2 - Pesquisa e Roteiro (1).jpg', 'C:\\Users\\melan\\Documents\\GitHub\\house-lar\\public\\uploads\\images_1698407931802_Aula Invertida DS2 - Pesquisa e Roteiro (1).jpg');

-- INSERT INTO `larhouse`.`imoveis` (`statusImovel`, `tipo_imovel`, `operacao`, `descricao`, `num_quartos`, `num_banheiros`, `num_vagas`, `area`, `valor_imovel`, `valor_condominio`, `valor_iptu`, `parcelas_iptu`, `construcao`, `cidade`, `bairro`, `endereco`, `numero`, `num_andares`, `data_entrega`, `em_condominio`, `nome_prop`, `email_prop`, `telefone_prop`, `cpf_prop`) VALUES ('Publicado', 'Casa', 'Aluguel', 'Um belo imóvel...', '4', '4', '2', '90', '800', '500', '400', '8', 'Não', 'Salvador', 'Pituba', 'Rua dos Marinhos', '74', '8', '2001-01-08', 'Sim', 'Luciana Gimenez', 'houselar7@gmail.com', '(71)99568-4523', '785.654.123-98');

-- INSERT INTO `larhouse`.`imoveis` (`statusImovel`, `tipo_imovel`, `operacao`, `descricao`, `num_quartos`, `num_banheiros`, `num_vagas`, `area`, `valor_imovel`, `valor_condominio`, `valor_iptu`, `parcelas_iptu`, `construcao`, `cidade`, `bairro`, `num_andares`, `data_entrega`, `em_condominio`) VALUES ('Publicado', 'Casa', 'Venda', 'Describe 1', '4', '4', '4', '120', '780000', '890', '560', '4', 'Não', 'Salvador', 'Cajazeiras', '4', '2020-08-12', 'Sim');
-- INSERT INTO `larhouse`.`imoveis` (`statusImovel`, `tipo_imovel`, `operacao`, `descricao`, `num_quartos`, `num_banheiros`, `num_vagas`, `area`, `valor_imovel`, `valor_condominio`, `valor_iptu`, `parcelas_iptu`, `construcao`, `cidade`, `bairro`, `num_andares`, `data_entrega`, `em_condominio`) VALUES ('Desativado', 'Apartamento', 'Aluguel', 'Describe 2', '5', '5', '6', '180', '900000', '560', '580', '8', 'Sim', 'Salvador', 'Pituba', '10', '2023-12-01', 'Sim');


-- INSERT INTO `larhouse`.`clientes` (`nome_cliente`, `email_cliente`, `telefone_cliente`, `senha_cliente`) VALUES ('Islania Silva Souza', 'islaniassouza22@gmail.com', '(71)99873-0593', '123456');