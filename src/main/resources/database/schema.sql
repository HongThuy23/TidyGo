DROP DATABASE IF EXISTS helpzy;
CREATE DATABASE helpzy;

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`
(
    id VARCHAR(5),
    `name` NVARCHAR(255),

    CONSTRAINT PK_ROLE PRIMARY KEY (id)
);


DROP TABLE IF EXISTS worker_contract;
CREATE TABLE worker_contract
(
    id              VARCHAR(5),
    first_name      NVARCHAR(255) NOT NULL,
    last_name       NVARCHAR(255) NOT NULL,
    email           VARCHAR(255) NOT NULL,
    bio             TEXT,
    experience_year DECIMAL,
    skills          JSON,
    id_photo        NVARCHAR(255) NOT NULL,
    dob             DATE NOT NULL,
    gender          CHAR(1) NOT NULL,
    status          ENUM('PENDING', 'ACTIVE', 'EXPIRED', 'REJECTED') DEFAULT 'PENDING' NOT NULL,
    start_date      DATE NOT NULL,
    end_date        DATE NOT NULL,
    signed_at       DATETIME,
    term_url        VARCHAR(255) NOT NULL,
    created_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at      DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT PK_WORKER_CONTRACT PRIMARY KEY (id)
);

DROP TABLE IF EXISTS `account`;
CREATE TABLE `account`
(
    id          VARCHAR(5),
    role_id     VARCHAR(5) NOT NULL,
    worker_contract_id VARCHAR(5),
    first_name  NVARCHAR(255) NOT NULL,
    last_name   NVARCHAR(255) NOT NULL,
    username    VARCHAR(255) NOT NULL,
    password    VARCHAR(255) NOT NULL,
    email       VARCHAR(255) NOT NULL,
    avatar      VARCHAR(255),
    dob         DATE,
    gender      CHAR(1),
    status      ENUM('ACTIVE', 'INACTIVE') DEFAULT 'ACTIVE',
    created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT PK_ACCOUNT PRIMARY KEY (id),
    CONSTRAINT FK_ACCOUNT_ROLE FOREIGN KEY (role_id) REFERENCES `role`(id),
    CONSTRAINT FK_ACCOUNT_WORKER_CONTRACT FOREIGN KEY (worker_contract_id) REFERENCES worker_contract(id),
    CONSTRAINT UQ_ACCOUNT_USERNAME UNIQUE (username),
    CONSTRAINT UQ_ACCOUNT_EMAIL UNIQUE (email)
);

DROP TABLE IF EXISTS image;
CREATE TABLE image
(
    id      VARCHAR(5),
    name    NVARCHAR(255),
    src     NVARCHAR(255) NOT NULL,

    CONSTRAINT PK_IMAGE PRIMARY KEY (id)
);

DROP TABLE IF EXISTS service;
CREATE TABLE service
(
    id              VARCHAR(5),
    name            NVARCHAR(255) NOT NULL,
    unit_type       ENUM('DAY', 'HOUR', 'MONTH') DEFAULT 'HOUR' NOT NULL,
    description     TEXT,
    created_at      DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at      DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT PK_SERVICE PRIMARY KEY (id)
);

DROP TABLE IF EXISTS service_image;
CREATE TABLE service_image
(
    service_id  VARCHAR(5),
    image_id    VARCHAR(5),

    CONSTRAINT PK_SERVICE_IMAGE PRIMARY KEY (service_id, image_id),
    CONSTRAINT FK_SERVICE_IMAGE_SERVICE FOREIGN KEY (service_id) REFERENCES service(id),
    CONSTRAINT FK_SERVICE_IMAGE_IMAGE FOREIGN KEY (image_id) REFERENCES image(id)
);

DROP TABLE IF EXISTS sub_service;
CREATE TABLE sub_service
(
    id              VARCHAR(5),
    service_id      VARCHAR(5) NOT NULL,
    name            NVARCHAR(255) NOT NULL,
    description     TEXT,
    original_price  DOUBLE,
    sales_price     DOUBLE NOT NULL,
    unit_quantity   INTEGER NOT NULL,
    worker_quantity INTEGER DEFAULT 1,

    CONSTRAINT PK_SUB_SERVICE PRIMARY KEY (id),
    CONSTRAINT FK_SUB_SERVICE_SERVICE FOREIGN KEY (service_id) REFERENCES service(id)
);

DROP TABLE IF EXISTS address;
CREATE TABLE address
(
    id              VARCHAR(5),
    account_id     VARCHAR(5),
    label           NVARCHAR(255),
    latitude        DECIMAL(10, 8) NOT NULL,
    longitude       DECIMAL(10, 8) NOT NULL,
    house_number    INT,
    road            NVARCHAR(255),
    suburb          NVARCHAR(255),
    city            NVARCHAR(255),
    is_default      CHAR(1),

    CONSTRAINT PK_ADDRESS PRIMARY KEY (id),
    CONSTRAINT FK_ADDRESS_ACCOUNT FOREIGN KEY (account_id) REFERENCES account(id)
);

DROP TABLE IF EXISTS job_post;
CREATE TABLE job_post
(
    id              VARCHAR(5),
    customer_id     VARCHAR(5) NOT NULL,
    sub_service_id  VARCHAR(5) NOT NULL,
    address_id      VARCHAR(5) NOT NULL,
    start_date      DATETIME NOT NULL,
    end_date        DATETIME NOT NULL,
    status          ENUM('RECRUITING', 'IN_PROGRESS', 'COMPLETED', 'EXPIRED', 'CANCELED') DEFAULT 'RECRUITING' NOT NULL,
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
    id          VARCHAR(5),
    job_post_id VARCHAR(5) NOT NULL,
    worker_id   VARCHAR(5) NOT NULL,
    status      ENUM('APPLIED', 'ACCEPTED', 'REJECTED', 'JOB_CANCELED') DEFAULT 'APPLIED' NOT NULL,

    CONSTRAINT PK_JOB_APPLICATION PRIMARY KEY (id),
    CONSTRAINT FK_JOB_APPLICATION_JOB_POST FOREIGN KEY (job_post_id) REFERENCES job_post(id),
    CONSTRAINT FK_JOB_APPLICATION_ACCOUNT FOREIGN KEY (worker_id) REFERENCES account(id)
);

DROP TABLE IF EXISTS feedback;
CREATE TABLE feedback
(
    id                  VARCHAR(5),
    job_application_id  VARCHAR(5) NOT NULL,
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
    feedback_id   VARCHAR(5),
    image_id    VARCHAR(5),

    CONSTRAINT PK_FEEDBACK_IMAGE PRIMARY KEY (feedback_id, image_id),
    CONSTRAINT FK_FEEDBACK_IMAGE_feedback FOREIGN KEY (feedback_id) REFERENCES feedback(id),
    CONSTRAINT FK_FEEDBACK_IMAGE_IMAGE FOREIGN KEY (image_id) REFERENCES image(id)
);

DROP TABLE IF EXISTS article_catalog;
CREATE TABLE article_catalog
(
    id      VARCHAR(5),
    name    NVARCHAR(255),

    CONSTRAINT PK_ARTICLE_CATALOG PRIMARY KEY (id)
);

DROP TABLE IF EXISTS article;
CREATE TABLE article
(
    id                  VARCHAR(5),
    title               NVARCHAR(255),
    content             LONGTEXT,
    admin_id            VARCHAR(5),
    article_catalog_id  VARCHAR(5),

    CONSTRAINT PK_ARTICLE PRIMARY KEY (id),
    CONSTRAINT FK_ARTICLE_ACCOUNT FOREIGN KEY (admin_id) REFERENCES account(id),
    CONSTRAINT FK_ARTICLE_ARTICLE_CATALOG FOREIGN KEY (admin_id) REFERENCES article_catalog(id),
);