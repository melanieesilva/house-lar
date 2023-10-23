-- Criação da tabela `cliente`
CREATE TABLE `cliente` (
  `id_cliente` INT(11) NOT NULL AUTO_INCREMENT,
  `nome_cliente` VARCHAR(100) NOT NULL,
  `email_cliente` VARCHAR(100) NOT NULL,
  `telefone_cliente` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Criação da tabela `imoveis`
CREATE TABLE `imoveis` (
  `id_imovel` INT(11) NOT NULL AUTO_INCREMENT,
  `tipo_imovel` ENUM('Casa','Apartamento','Lote','Kitnet/Studio','Sala Comercial') NOT NULL,
  `operacao` ENUM('Comprar','Alugar','Item 3','Item 4') NOT NULL,
  `descricao` VARCHAR(200) NOT NULL,
  `num_quartos` INT(11) NOT NULL,
  `num_banheiros` INT(11) NOT NULL,
  `num_vagas` INT(11) NOT NULL,
  `area` FLOAT NOT NULL,
  `valor` DECIMAL(10,0) NOT NULL,
  `valor_condominio` DECIMAL(10,0),
  `iptu` DECIMAL(10,0) NOT NULL,
  `parcelas_iptu` INT(11) NOT NULL,
  `construcao` TINYINT(1) NOT NULL,
  `num_andares` INT(11) NOT NULL,
  `data_entrega` DATE NOT NULL,
  `em_condominio` TINYINT(1) NOT NULL,
  `data_publicacao` DATE NOT NULL,
  `proprietario_id` INT(11),
  PRIMARY KEY (`id_imovel`),
  FOREIGN KEY (`proprietario_id`) REFERENCES `cliente`(`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Criação da tabela `categoria_noticia`
CREATE TABLE `categoria_noticia` (
  `id_categoria` INT(11) NOT NULL AUTO_INCREMENT,
  `nome_categoria` VARCHAR(200) NOT NULL,
  `cor_categoria` ENUM('Vermelho','Amarelo','Roxo', 'Azul', 'Laranja', 'Verde'),
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Criação da tabela `agenda`
CREATE TABLE `agenda` (
  `id_agenda` INT(11) NOT NULL AUTO_INCREMENT,
  `mes` VARCHAR(50) NOT NULL,
  `dia` VARCHAR(50) NOT NULL,
  `horario` VARCHAR(50) NOT NULL,
  `cliente_id` INT(11),
  `FK_imovel_id` INT(11),
  PRIMARY KEY (`id_agenda`),
  FOREIGN KEY (`cliente_id`) REFERENCES `cliente`(`id_cliente`),
  FOREIGN KEY (`FK_imovel_id`) REFERENCES `imoveis`(`id_imovel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Criação da tabela `duvidas`
CREATE TABLE `duvidas` (
  `id_duvida` INT(11) NOT NULL AUTO_INCREMENT,
  `nome_cliente` VARCHAR(200) NOT NULL,
  `email_cliente` VARCHAR(200) NOT NULL,
  `telefone_cliente` VARCHAR(20) NOT NULL,
  `mensagem_cliente` TEXT NOT NULL,
  PRIMARY KEY (`id_duvida`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Criação da tabela `imagens_imovel`
CREATE TABLE `imagens_imovel` (
  `id_imagem` INT(11) NOT NULL AUTO_INCREMENT,
  `dados_imagem` BLOB NOT NULL,
  `data_upload` DATE NOT NULL,
  `imovel_id` INT(11),
  `origem` ENUM('Item 1',' Item 2','Item 3'),
  PRIMARY KEY (`id_imagem`),
  FOREIGN KEY (`imovel_id`) REFERENCES `imoveis`(`id_imovel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Criação da tabela `noticias`
CREATE TABLE `noticias` (
  `id_noticia` INT(11) NOT NULL AUTO_INCREMENT,
  `titulo_noticia` VARCHAR(200) NOT NULL,
  `descricao_noticia` VARCHAR(200) NOT NULL,
  `artigo_noticia` TEXT NOT NULL,
  `autor_noticia` VARCHAR(200) NOT NULL,
  `publicado_por` VARCHAR(200) NOT NULL DEFAULT 'Lar&House',
  `imagem_noticia` BLOB NOT NULL,
  `categoria_id` INT(11),
  PRIMARY KEY (`id_noticia`),
  FOREIGN KEY (`categoria_id`) REFERENCES `categoria_noticia`(`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Criação da tabela `solicitacoes`
CREATE TABLE `solicitacoes` (
  `id_solicitacao` INT(11) NOT NULL AUTO_INCREMENT,
  `status` ENUM('Item 1','Item 2','Item 3'),
  `usuario_id` INT(11),
  `imovel_id_FK` INT(11),
  `FK_id_imagem` INT(11),
  PRIMARY KEY (`id_solicitacao`),
  FOREIGN KEY (`imovel_id_FK`) REFERENCES `imoveis`(`id_imovel`),
  FOREIGN KEY (`FK_id_imagem`) REFERENCES `imagens_imovel`(`id_imagem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
