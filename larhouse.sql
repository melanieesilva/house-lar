-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07/10/2023 às 02:35
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `larhouse`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `agenda`
--

CREATE TABLE `agenda` (
  `id_agenda` INT(11) NOT NULL,
  `mes` VARCHAR(50) NOT NULL,
  `dia` VARCHAR(50) NOT NULL,
  `horario` VARCHAR(50) NOT NULL,
  `cliente_id` INT(11),
  `FK_imovel_id` INT(11),
  FOREIGN KEY (`cliente_id`) REFERENCES `cliente`(`id_cliente`)/Chave estrangeira que traz o id do cliente para saber quem é o dono do imóvel/
  FOREIGN KEY (`FK_imovel_id`) REFERENCES `imoveis`(`id_imovel`) /Chave estrangeira que traz o imóvel solicitado para a agenda/
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `categoria_noticia`
--

CREATE TABLE `categoria_noticia` (
  `id_categoria` INT(11) NOT NULL,
  `nome_categoria` VARCHAR(200) NOT NULL,
  `cor_categoria` ENUM('Item 1','Item 2','Item 3')
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cliente`
--

CREATE TABLE `cliente` (
  `id_cliente` INT(11) NOT NULL,
  `nome_cliente` VARCHAR(100) NOT NULL,
  `email_cliente` VARCHAR(100) NOT NULL,
  `telefone_cliente` VARCHAR(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `duvidas`
--

CREATE TABLE `duvidas` (
  `id_duvida` INT(11) NOT NULL,
  `nome_cliente` VARCHAR(200) NOT NULL,
  `email_cliente` VARCHAR(200) NOT NULL,
  `telefone_cliente` VARCHAR(20) NOT NULL,
  `mensagem_cliente` TEXT NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `imagens_imovel`
--

CREATE TABLE `imagens_imovel` (
  `id_imagem` INT(11) NOT NULL,
  `dados_imagem` BLOB NOT NULL,
  `data_upload` DATE NOT NULL
  `imovel_id` INT(11),
  `origem` ENUM('Item 1',' Item 2','Item 3')
  FOREIGN KEY (`imovel_id`) REFERENCES `imoveis`(`id_imovel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `imoveis`
--

CREATE TABLE `imoveis` (
  `id_imovel` INT(11) NOT NULL,
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
  `imagem_id` INT(11),
  FOREIGN KEY (`proprietario_id`) REFERENCES `cliente`(`id_cliente`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `noticias`
--

CREATE TABLE `noticias` (
  `id_noticia` INT(11) NOT NULL,
  `titulo_noticia` VARCHAR(200) NOT NULL,
  `descricao_noticia` VARCHAR(200) NOT NULL,
  `artigo_noticia` TEXT NOT NULL,
  `autor_noticia` VARCHAR(200) NOT NULL,
  `publicado_por` VARCHAR(200) NOT NULL DEFAULT 'Lar&House',
  `imagem_noticia` BLOB NOT NULL
  `categoria_id` INT(11),
  FOREIGN KEY (`categoria_id`) REFERENCES `categoria_noticia`(`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `solicitacoes`
--

CREATE TABLE `solicitacoes` (
  `id_solicitacao` INT(11) NOT NULL,
  `status` ENUM('Item 1','Item 2','Item 3')
  `usuario_id` INT(11),
  `imovel_id_FK` INT(11),
  `FK_id_imagem` INT(11),
  FOREIGN KEY (`imovel_id_FK`) REFERENCES `imoveis`(`id_imovel`),
  FOREIGN KEY (`usuario_id`) REFERENCES `imoveis`(`id_usuario`),
  FOREIGN KEY (`FK_id_imagem`) REFERENCES `imagens_imovel`(`id_imagem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`id_agenda`);

--
-- Índices de tabela `categoria_noticia`
--
ALTER TABLE `categoria_noticia`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Índices de tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Índices de tabela `duvidas`
--
ALTER TABLE `duvidas`
  ADD PRIMARY KEY (`id_duvida`);

--
-- Índices de tabela `imagens_imovel`
--
ALTER TABLE `imagens_imovel`
  ADD PRIMARY KEY (`id_imagem`);

--
-- Índices de tabela `imoveis`
--
ALTER TABLE `imoveis`
  ADD PRIMARY KEY (`id_imovel`);

--
-- Índices de tabela `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id_noticia`);

--
-- Índices de tabela `solicitacoes`
--
ALTER TABLE `solicitacoes`
  ADD PRIMARY KEY (`id_solicitacao`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `agenda`
--
ALTER TABLE `agenda`
  MODIFY `id_agenda` INT(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `categoria_noticia`
--
ALTER TABLE `categoria_noticia`
  MODIFY `id_categoria` INT(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` INT(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `duvidas`
--
ALTER TABLE `duvidas`
  MODIFY `id_duvida` INT(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `imagens_imovel`
--
ALTER TABLE `imagens_imovel`
  MODIFY `id_imagem` INT(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `imoveis`
--
ALTER TABLE `imoveis`
  MODIFY `id_imovel` INT(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id_noticia` INT(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `solicitacoes`
--
ALTER TABLE `solicitacoes`
  MODIFY `id_solicitacao` INT(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;