-- User table

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') NOT NULL,  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

--property table 

CREATE TABLE Properties (
    property_id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT,  -- Foreign key to Users (Admin)
    title VARCHAR(255) NOT NULL,
    description TEXT,
    address VARCHAR(255),
    price DECIMAL(15, 2),
    type ENUM('apartment', 'house', 'office', 'commercial', 'land') NOT NULL,
    available BOOLEAN DEFAULT TRUE,  -- Marks if the property is available or not
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES Users(user_id) ON DELETE SET NULL
);

-- Inquiry table

CREATE TABLE Properties (
    property_id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT,  -- Foreign key to Users (Admin)
    title VARCHAR(255) NOT NULL,
    description TEXT,
    address VARCHAR(255),
    price DECIMAL(15, 2),
    type ENUM('apartment', 'house', 'office', 'commercial', 'land') NOT NULL,
    available BOOLEAN DEFAULT TRUE,  -- Marks if the property is available or not
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES Users(user_id) ON DELETE SET NULL
);
