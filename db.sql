DROP TABLE IF EXISTS Calls;

CREATE TABLE IF NOT EXISTS Calls (
    Id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(250) NOT NULL,
    Type VARCHAR(20) NOT NULL,
    Customer VARCHAR(50) DEFAULT NULL,
    Date DATETIME NOT NULL DEFAULT NOW(),
    Favourite BOOLEAN NOT NULL DEFAULT 0
) ENGINE=InnoDB;

INSERT INTO Calls (Title, Type, Customer, Date, Favourite) VALUES
('Social Media Manager', 'INTERNAL', NULL, NOW(), TRUE),
('Project Manager Senior', 'EXTERNAL', 'Adidas', '2017-02-02', TRUE),
('Graphic Designer Senior', 'INTERNAL', NULL, '2019-02-23', FALSE),
('Full Stack Developer', 'INTERNAL', NULL, '2019-01-13', FALSE),
('Full Stack Developer', 'EXTERNAL', 'Luxottica', '2018-10-26', FALSE),
('Content Design Intern', 'INTERNAL', NULL, '2018-8-01', FALSE),
('Strategist', 'EXTERNAL', 'Adidas', '2018-06-15', FALSE);