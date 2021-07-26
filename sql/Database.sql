CREATE DATABASE node_mysql_ts;

CREATE TABLE IF NOT EXISTS `node_mysql_ts`.`posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  );

  DESCRIBE `node_mysql_ts`.`posts`;