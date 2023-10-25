-- Active: 1698166299011@@127.0.0.1@3306@larhouse
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23/10/2023 às 17:30
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
  `id_agenda` int(11) NOT NULL,
  `mes` varchar(50) NOT NULL,
  `dia` varchar(50) NOT NULL,
  `horario` varchar(50) NOT NULL,
  `cliente_id` int(11) DEFAULT NULL,
  `FK_imovel_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `categoria_noticia`
--

CREATE TABLE `categoria_noticia` (
  `nome_categoria` varchar(200) NOT NULL,
  `cor_categoria` enum('Vermelho','Amarelo','Roxo','Azul','Laranja','Verde'),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `categoria_noticia`
--

INSERT INTO `categoria_noticia` (`nome_categoria`,`cor_categoria`) VALUES
("Oportunidade Tenda","Vermelho"),
("Oportunidade Village","Azul")

INSERT INTO `categoria_noticia` (`nome_categoria`, `cor_categoria`) VALUES
('Oportunidade Tenda', 'Vermelho'),
('Oportunidade Village', 'Verde'),

-- --------------------------------------------------------

--
-- Estrutura para tabela `cliente`
--

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(100) NOT NULL,
  `email_cliente` varchar(100) NOT NULL,
  `senha_cliente` varchar(100) NOT NULL,
  `telefone_cliente` varchar(20) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- --------------------------------------------------------

--
-- Estrutura para tabela `duvidas`
--

CREATE TABLE `duvidas` (
  `id_duvida` int(11) NOT NULL,
  `nome_cliente` varchar(200) NOT NULL,
  `email_cliente` varchar(200) NOT NULL,
  `telefone_cliente` varchar(20) NOT NULL,
  `mensagem_cliente` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `imagens_imovel`
--

CREATE TABLE `imagens_imovel` (
  `id_imagem` int(11) NOT NULL,
  `dados_imagem` blob NOT NULL,
  `data_upload` date NOT NULL,
  `imovel_id` int(11) DEFAULT NULL,
  `origem` enum('Item 1',' Item 2','Item 3') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `imoveis`
--

CREATE TABLE `imoveis` (
  `id_imovel` int(11) NOT NULL,
  `tipo_imovel` enum('Casa','Apartamento','Lote','Kitnet/Studio','Sala Comercial') NOT NULL,
  `operacao` enum('Comprar','Alugar','Item 3','Item 4') NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `num_quartos` int(11) NOT NULL,
  `num_banheiros` int(11) NOT NULL,
  `num_vagas` int(11) NOT NULL,
  `area` float NOT NULL,
  `valor` decimal(10,0) NOT NULL,
  `valor_condominio` decimal(10,0) DEFAULT NULL,
  `iptu` decimal(10,0) NOT NULL,
  `parcelas_iptu` int(11) NOT NULL,
  `construcao` tinyint(1) NOT NULL,
  `num_andares` int(11) NOT NULL,
  `data_entrega` date NOT NULL,
  `em_condominio` tinyint(1) NOT NULL,
  `data_publicacao` date NOT NULL,
  `proprietario_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `noticias`
--

CREATE TABLE `noticias` (
  `titulo_noticia` varchar(200) NOT NULL,
  `descricao_noticia` varchar(200) NOT NULL,
  `artigo_noticia` text NOT NULL,
  `autor_noticia` varchar(200) NOT NULL,
  `publicado_por` varchar(200) NOT NULL DEFAULT 'Lar&House',
  `nome_imagem` varchar(200) NOT NULL DEFAULT,
  `data_imagem` blob NOT NULL,
  `categoria_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `noticias`
--

INSERT INTO `noticias` (`id_noticia`, `titulo_noticia`, `descricao_noticia`, `artigo_noticia`, `autor_noticia`, `publicado_por`, `imagem_noticia`, `categoria_id`) VALUES
(1, 'oiiii', 'kakaka', 'simmm vdd lenda', 'isabel', 'House&Lar', '', NULL),
(2, 'vamo q vamo', 'eita', 'porraaaaaaaaaaa', 'kakka', 'House&Lar', '', NULL),
(3, 'vamo q vamo', 'qu e merdaaa', 'porraaaaaaaaaaa', 'isabel', 'House&Lar', '', NULL),
(4, 'vamo q vamo', 'qu e merdaaa', 'porraaaaaaaaaaa', 'isabel', 'House&Lar', '', NULL),
(5, 'vamo q vamo', 'qu e merdaaa', 'porraaaaaaaaaaa', 'isabel', 'House&Lar', '', NULL),
(6, 'vamo q vamo', 'qu e merdaaa', 'porraaaaaaaaaaa', 'isabel', 'House&Lar', '', 6),
(7, 'vamo q vamo', '', '', '', 'House&Lar', '', 8),
(8, 'teste123', '', '', '', 'House&Lar', '', 9),
(9, 'eh ne', 'ew', 'aaaaaaaaaaa', 'abkbd', 'House&Lar', '', 10);

-- --------------------------------------------------------

--
-- Estrutura para tabela `solicitacoes`
--

CREATE TABLE `solicitacoes` (
  `id_solicitacao` int(11) NOT NULL,
  `status` enum('Item 1','Item 2','Item 3') DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `imovel_id_FK` int(11) DEFAULT NULL,
  `FK_id_imagem` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`id_agenda`),
  ADD KEY `cliente_id` (`cliente_id`),
  ADD KEY `FK_imovel_id` (`FK_imovel_id`);

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
  ADD PRIMARY KEY (`id_imagem`),
  ADD KEY `imovel_id` (`imovel_id`);

--
-- Índices de tabela `imoveis`
--
ALTER TABLE `imoveis`
  ADD PRIMARY KEY (`id_imovel`),
  ADD KEY `proprietario_id` (`proprietario_id`);

--
-- Índices de tabela `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id_noticia`),
  ADD KEY `categoria_id` (`categoria_id`);

--
-- Índices de tabela `solicitacoes`
--
ALTER TABLE `solicitacoes`
  ADD PRIMARY KEY (`id_solicitacao`),
  ADD KEY `imovel_id_FK` (`imovel_id_FK`),
  ADD KEY `FK_id_imagem` (`FK_id_imagem`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `agenda`
--
ALTER TABLE `agenda`
  MODIFY `id_agenda` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `categoria_noticia`
--
ALTER TABLE `categoria_noticia`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `duvidas`
--
ALTER TABLE `duvidas`
  MODIFY `id_duvida` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `imagens_imovel`
--
ALTER TABLE `imagens_imovel`
  MODIFY `id_imagem` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `imoveis`
--
ALTER TABLE `imoveis`
  MODIFY `id_imovel` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id_noticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `solicitacoes`
--
ALTER TABLE `solicitacoes`
  MODIFY `id_solicitacao` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `agenda`
--
ALTER TABLE `agenda`
  ADD CONSTRAINT `agenda_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id_cliente`),
  ADD CONSTRAINT `agenda_ibfk_2` FOREIGN KEY (`FK_imovel_id`) REFERENCES `imoveis` (`id_imovel`);

--
-- Restrições para tabelas `imagens_imovel`
--
ALTER TABLE `imagens_imovel`
  ADD CONSTRAINT `imagens_imovel_ibfk_1` FOREIGN KEY (`imovel_id`) REFERENCES `imoveis` (`id_imovel`);

--
-- Restrições para tabelas `imoveis`
--
ALTER TABLE `imoveis`
  ADD CONSTRAINT `imoveis_ibfk_1` FOREIGN KEY (`proprietario_id`) REFERENCES `cliente` (`id_cliente`);

--
-- Restrições para tabelas `noticias`
--
ALTER TABLE `noticias`
  ADD CONSTRAINT `noticias_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categoria_noticia` (`id_categoria`);

--
-- Restrições para tabelas `solicitacoes`
--
ALTER TABLE `solicitacoes`
  ADD CONSTRAINT `solicitacoes_ibfk_1` FOREIGN KEY (`imovel_id_FK`) REFERENCES `imoveis` (`id_imovel`),
  ADD CONSTRAINT `solicitacoes_ibfk_2` FOREIGN KEY (`FK_id_imagem`) REFERENCES `imagens_imovel` (`id_imagem`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
