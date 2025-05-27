USE tidygo;

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE `role`;
TRUNCATE TABLE `account`;
TRUNCATE TABLE image;
TRUNCATE TABLE service;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO `role`(`name`)
VALUES	('CUSTOMER'),
		('WORKER'),
        ('ADMIN');
SELECT * FROM `role`;

INSERT INTO `account` (role_id, first_name, last_name, username, `password`, email, avatar, dob, gender, `status`, created_at, updated_at)
VALUES	(1, 'Minh', 'Nguyen', 'minhnguyen', 'pass123!', 'minh.nguyen@example.com', 'avatar1.jpg', '1997-05-12', 'MALE', 'ACTIVE', NOW(), NOW()),
		(2, 'Linh', 'Tran', 'linhtran', 'pass456!', 'linh.tran@example.com', 'avatar2.jpg', '1995-08-22', 'FEMALE', 'ACTIVE', NOW(), NOW()),
		(1, 'Khoa', 'Pham', 'khoapham', 'pass789!', 'khoa.pham@example.com', 'avatar3.jpg', '1992-12-01', 'MALE', 'INACTIVE', NOW(), NOW()),
		(3, 'Thu', 'Le', 'thule', 'passabc!', 'thu.le@example.com', 'avatar4.jpg', '1998-03-15', 'FEMALE', 'ACTIVE', NOW(), NOW()),
		(1, 'Tuan', 'Hoang', 'tuanhoang', 'passtuan!', 'tuan.hoang@example.com', 'avatar5.jpg', '1990-06-17', 'MALE', 'ACTIVE', NOW(), NOW()),
		(2, 'Anh', 'Nguyen', 'anhnguyen', 'passanh!', 'anh.nguyen@example.com', 'avatar6.jpg', '1999-11-09', 'FEMALE', 'ACTIVE', NOW(), NOW()),
		(3, 'Huy', 'Vo', 'huyvo', 'passhuy!', 'huy.vo@example.com', 'avatar7.jpg', '1989-01-28', 'MALE', 'INACTIVE', NOW(), NOW()),
		(2, 'Trang', 'Do', 'trangdo', 'passtrang!', 'trang.do@example.com', 'avatar8.jpg', '1996-04-05', 'FEMALE', 'ACTIVE', NOW(), NOW()),
		(1, 'Nam', 'Ly', 'namly', 'passnam!', 'nam.ly@example.com', 'avatar9.jpg', '1993-07-19', 'MALE', 'ACTIVE', NOW(), NOW()),
		(3, 'Quynh', 'Nguyen', 'quynhnguyen', 'passquynh!', 'quynh.nguyen@example.com', 'avatar10.jpg', '1994-10-30', 'FEMALE', 'ACTIVE', NOW(), NOW());
SELECT * FROM `account`;

INSERT INTO worker_contract(account_id, first_name, last_name, email, bio, experience_year, id_photo, dob, gender, `status`, start_date, end_date, signed_at, term_url, created_at, updated_at) 
VALUES	(2, 'Minh', 'Nguyen', 'minh.nguyen@example.com', 'Experienced cleaner with 5 years', 5, 'id_photo1.jpg', '1997-05-12', 'MALE', 'ACTIVE', '2024-01-01', '2024-12-31', NOW(), 'contract1.pdf', NOW(), NOW()),
		(6, 'Linh', 'Tran', 'linh.tran@example.com', 'Specialist in house cleaning', 3, 'id_photo2.jpg', '1995-08-22', 'FEMALE', 'ACTIVE', '2024-02-01', '2024-12-31', NOW(), 'contract2.pdf', NOW(), NOW()),
		(8, 'Khoa', 'Pham', 'khoa.pham@example.com', 'Window and glass cleaner', 7, 'id_photo3.jpg', '1992-12-01', 'MALE', 'PENDING', '2024-03-01', '2024-12-31', NULL, 'contract3.pdf', NOW(), NOW());
SELECT * FROM worker_contract;

INSERT INTO image(`name`, url)
VALUES	('Dọn dẹp nhà cửa', 'https://example.com/images/cleaning-house.jpg'),
		('Giặt giũ quần áo', 'https://example.com/images/laundry.jpg'),
		('Nấu ăn gia đình', 'https://example.com/images/cooking.jpg'),
		('Chăm sóc người già', 'https://example.com/images/elderly-care.jpg'),
		('Chăm sóc trẻ nhỏ', 'https://example.com/images/babysitting.jpg'),
		('Rửa bát đũa', 'https://example.com/images/dishwashing.jpg'),
		('Lau kính và cửa sổ', 'https://example.com/images/window-cleaning.jpg'),
		('Dọn dẹp sân vườn', 'https://example.com/images/garden-cleanup.jpg'),
		('Lau sàn nhà', 'https://example.com/images/floor-mopping.jpg'),
		('Ủi quần áo', 'https://example.com/images/ironing.jpg');
SELECT * FROM image;

INSERT INTO service (name, unit_type, description, created_at, updated_at)
VALUES	('Dọn dẹp nhà cửa', 'HOUR', 'Dịch vụ lau dọn nhà cửa theo giờ, bao gồm lau sàn, hút bụi, dọn phòng...', NOW(), NOW()),
		('Giặt giũ quần áo', 'DAY', 'Giặt và phơi quần áo, gấp đồ, ủi đồ nếu có yêu cầu.', NOW(), NOW()),
		('Nấu ăn gia đình', 'DAY', 'Nấu các bữa ăn trong ngày theo thực đơn hoặc yêu cầu từ khách hàng.', NOW(), NOW()),
		('Chăm sóc trẻ nhỏ', 'HOUR', 'Trông trẻ, cho ăn, tắm rửa, chơi với trẻ em.', NOW(), NOW()),
		('Chăm sóc người già', 'HOUR', 'Hỗ trợ sinh hoạt hằng ngày cho người cao tuổi.', NOW(), NOW()),
		('Rửa chén bát', 'HOUR', 'Dọn rửa chén bát sau bữa ăn hoặc tổng vệ sinh bếp.', NOW(), NOW()),
		('Lau kính cửa sổ', 'HOUR', 'Lau kính các loại cửa sổ, cửa ra vào.', NOW(), NOW()),
		('Dọn dẹp sân vườn', 'DAY', 'Cắt cỏ, nhổ cỏ dại, quét dọn lá cây.', NOW(), NOW()),
		('Sửa chữa điện nước', 'HOUR', 'Xử lý các sự cố nhỏ về điện, nước trong gia đình.', NOW(), NOW()),
		('Ủi quần áo', 'HOUR', 'Ủi đồ theo yêu cầu với trang phục hàng ngày hoặc đặc biệt.', NOW(), NOW());
SELECT * FROM service;


SELECT * FROM service_image;

INSERT INTO sub_service(service_id, `name`, `description`, original_price, sales_price, unit_quantity, worker_quantity)
VALUES	-- Dọn dẹp nhà cửa (service_id = 1)
		(1, 'Dọn phòng ngủ', 'Lau sàn, dọn giường, quét bụi trong phòng ngủ.', 150000, 120000, 1, 1),
		(1, 'Dọn phòng khách', 'Hút bụi, lau sàn, sắp xếp nội thất.', 180000, 140000, 1, 1),
		(1, 'Dọn nhà bếp', 'Lau dọn bếp, rửa bồn rửa, vệ sinh tủ lạnh và bếp nấu.', 200000, 160000, 1, 1),

		-- Giặt giũ quần áo (service_id = 2)
		(2, 'Giặt bằng máy', 'Giặt và phơi đồ bằng máy giặt.', 100000, 80000, 1, 1),
		(2, 'Giặt tay', 'Giặt đồ mỏng nhẹ bằng tay theo yêu cầu.', 120000, 100000, 1, 1),

		-- Nấu ăn gia đình (service_id = 3)
		(3, 'Nấu bữa trưa', 'Chuẩn bị bữa trưa gia đình từ 2–4 người.', 200000, 180000, 1, 1),
		(3, 'Nấu bữa tối', 'Chuẩn bị bữa tối nhẹ nhàng và đủ chất.', 220000, 190000, 1, 1),

		-- Chăm sóc trẻ nhỏ (service_id = 4)
		(4, 'Trông trẻ buổi sáng', 'Trông và chơi cùng bé từ 8h–12h.', 300000, 250000, 4, 1),
		(4, 'Trông trẻ cả ngày', 'Chăm sóc bé từ sáng đến tối (8 tiếng).', 600000, 550000, 8, 1),

		-- Chăm sóc người già (service_id = 5)
		(5, 'Hỗ trợ ăn uống', 'Đút ăn, pha sữa, hỗ trợ ăn uống cho người già.', 180000, 150000, 1, 1),
		(5, 'Hỗ trợ vệ sinh cá nhân', 'Tắm, thay đồ, chăm sóc cơ thể.', 200000, 160000, 1, 1);
SELECT * FROM sub_service;
