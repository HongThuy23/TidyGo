<<<<<<< HEAD

=======
>>>>>>> 233bbc7 (create all entities)
DROP DATABASE IF EXISTS tidygo;
CREATE DATABASE tidygo;

USE tidygo;

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`
(
    id 		LONG AUTO_INCREMENT,
    `name` 	NVARCHAR(255) NOT NULL,

    CONSTRAINT PK_ROLE PRIMARY KEY (id)
);

DROP TABLE IF EXISTS `account`;
CREATE TABLE `account`
(
    id          		LONG AUTO_INCREMENT,
    role_id     		LONG NOT NULL,
    first_name  		NVARCHAR(255) NOT NULL,
    last_name   		NVARCHAR(255) NOT NULL,
    username    		VARCHAR(255) NOT NULL,
    `password`  		VARCHAR(255) NOT NULL,
    email       		VARCHAR(255) NOT NULL,
    avatar      		VARCHAR(255),
    dob         		DATE,
    gender      		CHAR(1),
    `status`    		ENUM('ACTIVE', 'INACTIVE') DEFAULT 'ACTIVE',
    created_at  		DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at  		DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT PK_ACCOUNT PRIMARY KEY (id),
    CONSTRAINT FK_ACCOUNT_ROLE FOREIGN KEY (role_id) REFERENCES `role`(id),
    CONSTRAINT UQ_ACCOUNT_USERNAME UNIQUE (username),
    CONSTRAINT UQ_ACCOUNT_EMAIL UNIQUE (email)
);

DROP TABLE IF EXISTS worker_contract;
CREATE TABLE worker_contract
(
    id              LONG AUTO_INCREMENT,
    account_id 		LONG,
    first_name      NVARCHAR(255) NOT NULL,
    last_name       NVARCHAR(255) NOT NULL,
    email           VARCHAR(255) NOT NULL,
    bio             TEXT,
    experience_year DECIMAL,
    id_photo        NVARCHAR(255) NOT NULL,
    dob             DATE NOT NULL,
    gender          ENUM('MALE', 'FEMALE') DEFAULT 'FEMALE' NOT NULL,
    `status`        ENUM('PENDING', 'ACTIVE', 'EXPIRED', 'REJECTED') DEFAULT 'PENDING' NOT NULL,
    start_date      DATE NOT NULL,
    end_date        DATE NOT NULL,
    signed_at       DATETIME,
    term_url        VARCHAR(255) NOT NULL,
    created_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at      DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT PK_WORKER_CONTRACT PRIMARY KEY (id),
    CONSTRAINT FK_WORKER_CONTRACT FOREIGN KEY (account_id) REFERENCES `account`(id)
);


DROP TABLE IF EXISTS image;
CREATE TABLE image
(
    id      LONG AUTO_INCREMENT,
    `name`  NVARCHAR(255),
    url     NVARCHAR(255) NOT NULL,

    CONSTRAINT PK_IMAGE PRIMARY KEY (id)
);

DROP TABLE IF EXISTS service;
CREATE TABLE service
(
    id              LONG AUTO_INCREMENT,
    `name`          NVARCHAR(255) NOT NULL,
    unit_type       ENUM('DAY', 'HOUR', 'MONTH') DEFAULT 'HOUR' NOT NULL,
    `description`   TEXT,
    created_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at      DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT PK_SERVICE PRIMARY KEY (id)
);

DROP TABLE IF EXISTS service_image;
CREATE TABLE service_image
(
    service_id  LONG,
    image_id    LONG,

    CONSTRAINT PK_SERVICE_IMAGE PRIMARY KEY (service_id, image_id),
    CONSTRAINT FK_SERVICE_IMAGE_SERVICE FOREIGN KEY (service_id) REFERENCES service(id),
    CONSTRAINT FK_SERVICE_IMAGE_IMAGE FOREIGN KEY (image_id) REFERENCES image(id)
);

DROP TABLE IF EXISTS sub_service;
CREATE TABLE sub_service
(
    id              LONG AUTO_INCREMENT,
    service_id      LONG NOT NULL,
    `name`          NVARCHAR(255) NOT NULL,
    `description`   TEXT,
    original_price  DOUBLE,
    sales_price     DOUBLE NOT NULL,
    unit_quantity   INTEGER NOT NULL,
    worker_quantity INTEGER DEFAULT 1 NOT NULL,

    CONSTRAINT PK_SUB_SERVICE PRIMARY KEY (id),
    CONSTRAINT FK_SUB_SERVICE_SERVICE FOREIGN KEY (service_id) REFERENCES service(id)
);

DROP TABLE IF EXISTS address;
CREATE TABLE address
(
    id              LONG AUTO_INCREMENT,
    account_id      LONG NOT NULL,
    label           NVARCHAR(255),
    latitude        DECIMAL(10, 8) NOT NULL,
    longitude       DECIMAL(10, 8) NOT NULL,
    house_number    INT NOT NULL,
    road            NVARCHAR(255),
    suburb          NVARCHAR(255),
    city            NVARCHAR(255),
    is_default      BOOLEAN DEFAULT FALSE NOT NULL,

    CONSTRAINT PK_ADDRESS PRIMARY KEY (id),
    CONSTRAINT FK_ADDRESS_ACCOUNT FOREIGN KEY (account_id) REFERENCES `account`(id)
);

DROP TABLE IF EXISTS job_post;
CREATE TABLE job_post
(
    id              LONG AUTO_INCREMENT,
    customer_id     LONG NOT NULL,
    sub_service_id  LONG NOT NULL,
    address_id      LONG NOT NULL,
    start_date      DATETIME NOT NULL,
    end_date        DATETIME NOT NULL,
    `status`        ENUM('RECRUITING', 'IN_PROGRESS', 'COMPLETED', 'EXPIRED', 'CANCELED') DEFAULT 'RECRUITING' NOT NULL,
    created_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at      DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT PK_JOB_POST PRIMARY KEY (id),
    CONSTRAINT FK_JOB_POST_ACCOUNT FOREIGN KEY (customer_id) REFERENCES account(id),
    CONSTRAINT FK_JOB_POST_SUB_SERVICE FOREIGN KEY (sub_service_id) REFERENCES sub_service(id),
    CONSTRAINT FK_JOB_POST_ADDRESS FOREIGN KEY (address_id) REFERENCES address(id)
);

DROP TABLE IF EXISTS job_application;
CREATE TABLE job_application
(
    id          LONG AUTO_INCREMENT,
    job_post_id LONG NOT NULL,
    worker_id   LONG NOT NULL,
    `status`    ENUM('APPLIED', 'ACCEPTED', 'REJECTED', 'JOB_CANCELED') DEFAULT 'APPLIED' NOT NULL,

    CONSTRAINT PK_JOB_APPLICATION PRIMARY KEY (id),
    CONSTRAINT FK_JOB_APPLICATION_JOB_POST FOREIGN KEY (job_post_id) REFERENCES job_post(id),
    CONSTRAINT FK_JOB_APPLICATION_ACCOUNT FOREIGN KEY (worker_id) REFERENCES account(id)
);

DROP TABLE IF EXISTS feedback;
CREATE TABLE feedback
(
    id                  LONG AUTO_INCREMENT,
    job_application_id  LONG NOT NULL,
    star                INT NOT NULL,
    content             TEXT,
    feedback_type       ENUM('REVIEW', 'COMPLAINT') DEFAULT 'REVIEW' NOT NULL,
    created_at          DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at          DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT PK_FEEDBACK PRIMARY KEY (id),
    CONSTRAINT FK_FEEDBACK_JOB_APPLICATION FOREIGN KEY (job_application_id) REFERENCES job_application(id)
);

DROP TABLE IF EXISTS feedback_image;
CREATE TABLE feedback_image
(
    feedback_id   	LONG,
    image_id    	LONG,

    CONSTRAINT PK_FEEDBACK_IMAGE PRIMARY KEY (feedback_id, image_id),
    CONSTRAINT FK_FEEDBACK_IMAGE_FEEDBACK FOREIGN KEY (feedback_id) REFERENCES feedback(id),
    CONSTRAINT FK_FEEDBACK_IMAGE_IMAGE FOREIGN KEY (image_id) REFERENCES image(id)
);

DROP TABLE IF EXISTS article_catalog;
CREATE TABLE article_catalog
(
    id      LONG AUTO_INCREMENT,
	`name`  NVARCHAR(255),

    CONSTRAINT PK_ARTICLE_CATALOG PRIMARY KEY (id)
);

DROP TABLE IF EXISTS article;
CREATE TABLE article
(
    id                  LONG AUTO_INCREMENT,
    title               NVARCHAR(255),
    content             LONGTEXT,
    admin_id            LONG,
    article_catalog_id  LONG,

    CONSTRAINT PK_ARTICLE PRIMARY KEY (id),
    CONSTRAINT FK_ARTICLE_ACCOUNT FOREIGN KEY (admin_id) REFERENCES `account`(id),
    CONSTRAINT FK_ARTICLE_ARTICLE_CATALOG FOREIGN KEY (article_catalog_id) REFERENCES article_catalog(id)
);