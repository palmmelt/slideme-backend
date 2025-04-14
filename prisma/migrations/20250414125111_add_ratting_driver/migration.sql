-- DropForeignKey
ALTER TABLE `bids` DROP FOREIGN KEY `bids_slide_car_service_id_fkey`;

-- DropForeignKey
ALTER TABLE `slide_requests` DROP FOREIGN KEY `slide_requests_driverId_fkey`;

-- DropForeignKey
ALTER TABLE `slide_requests` DROP FOREIGN KEY `slide_requests_vehicleId_fkey`;

-- DropIndex
DROP INDEX `bids_slide_car_service_id_fkey` ON `bids`;

-- AlterTable
ALTER TABLE `bids` ADD COLUMN `slideCarServiceId` INTEGER NULL;

-- AlterTable
ALTER TABLE `slide_requests` MODIFY `vehicleId` INTEGER NULL,
    MODIFY `driverId` INTEGER NULL;

-- CreateTable
CREATE TABLE `driver_ratings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rating` INTEGER NOT NULL DEFAULT 0,
    `comment` VARCHAR(191) NULL,
    `driverId` INTEGER NOT NULL,
    `customerId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `driver_ratings_driverId_idx`(`driverId`),
    UNIQUE INDEX `driver_ratings_driverId_customerId_key`(`driverId`, `customerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `slide_requests` ADD CONSTRAINT `slide_requests_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `drivers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `slide_requests` ADD CONSTRAINT `slide_requests_vehicleId_fkey` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `driver_ratings` ADD CONSTRAINT `driver_ratings_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `drivers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `driver_ratings` ADD CONSTRAINT `driver_ratings_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bids` ADD CONSTRAINT `bids_slide_car_service_id_fkey` FOREIGN KEY (`slide_car_service_id`) REFERENCES `drivers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bids` ADD CONSTRAINT `bids_slideCarServiceId_fkey` FOREIGN KEY (`slideCarServiceId`) REFERENCES `slide_car_service`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
