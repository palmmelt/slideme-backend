-- CreateTable
CREATE TABLE `customers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `surname` VARCHAR(191) NULL,
    `phone_number` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `customers_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `drivers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slide_car_service_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL,
    `surname` VARCHAR(191) NULL,
    `phone_number` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `id_number` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `bank_account_number` VARCHAR(191) NULL,
    `bank_name` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,

    UNIQUE INDEX `drivers_id_number_key`(`id_number`),
    UNIQUE INDEX `drivers_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vehicles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slide_car_service_id` INTEGER NOT NULL,
    `brand` VARCHAR(191) NULL,
    `model` VARCHAR(191) NULL,
    `license_plate` VARCHAR(191) NOT NULL,
    `vin` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `vehicles_license_plate_key`(`license_plate`),
    UNIQUE INDEX `vehicles_vin_key`(`vin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `slide_requests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customerId` INTEGER NOT NULL,
    `vehicleId` INTEGER NOT NULL,
    `driverId` INTEGER NOT NULL,
    `request_time` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `price` DECIMAL(10, 2) NULL,
    `note` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `latitude` DECIMAL(10, 8) NULL,
    `longitude` DECIMAL(11, 8) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chat_messages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slide_request_id` INTEGER NOT NULL,
    `sender` ENUM('customer', 'garage', 'driver') NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `sent_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bids` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slide_request_id` INTEGER NOT NULL,
    `slide_car_service_id` INTEGER NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `isAccepted` BOOLEAN NOT NULL,
    `acceptedTime` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `slide_car_service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `service_name` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `garages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `phone_number` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `garages_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `drivers` ADD CONSTRAINT `drivers_slide_car_service_id_fkey` FOREIGN KEY (`slide_car_service_id`) REFERENCES `slide_car_service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehicles` ADD CONSTRAINT `vehicles_slide_car_service_id_fkey` FOREIGN KEY (`slide_car_service_id`) REFERENCES `slide_car_service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `slide_requests` ADD CONSTRAINT `slide_requests_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `slide_requests` ADD CONSTRAINT `slide_requests_vehicleId_fkey` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `slide_requests` ADD CONSTRAINT `slide_requests_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `drivers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chat_messages` ADD CONSTRAINT `chat_messages_slide_request_id_fkey` FOREIGN KEY (`slide_request_id`) REFERENCES `slide_requests`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bids` ADD CONSTRAINT `bids_slide_request_id_fkey` FOREIGN KEY (`slide_request_id`) REFERENCES `slide_requests`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bids` ADD CONSTRAINT `bids_slide_car_service_id_fkey` FOREIGN KEY (`slide_car_service_id`) REFERENCES `slide_car_service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
