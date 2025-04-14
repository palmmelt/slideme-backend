/*
  Warnings:

  - You are about to drop the column `vihicle_id` on the `drivers` table. All the data in the column will be lost.
  - Added the required column `vehicle_id` to the `drivers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `drivers` DROP FOREIGN KEY `drivers_vihicle_id_fkey`;

-- DropIndex
DROP INDEX `drivers_vihicle_id_fkey` ON `drivers`;

-- AlterTable
ALTER TABLE `customers` ADD COLUMN `latitude` DECIMAL(10, 8) NULL,
    ADD COLUMN `longitude` DECIMAL(11, 8) NULL;

-- AlterTable
ALTER TABLE `drivers` DROP COLUMN `vihicle_id`,
    ADD COLUMN `latitude` DECIMAL(10, 8) NULL,
    ADD COLUMN `longitude` DECIMAL(11, 8) NULL,
    ADD COLUMN `vehicle_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `drivers` ADD CONSTRAINT `drivers_vehicle_id_fkey` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
