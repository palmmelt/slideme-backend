/*
  Warnings:

  - You are about to alter the column `status` on the `slide_requests` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - Added the required column `vihicle_id` to the `drivers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `drivers` ADD COLUMN `vihicle_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `slide_requests` MODIFY `status` ENUM('pending', 'in_progress', 'completed', 'closed') NOT NULL;

-- AddForeignKey
ALTER TABLE `drivers` ADD CONSTRAINT `drivers_vihicle_id_fkey` FOREIGN KEY (`vihicle_id`) REFERENCES `vehicles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
