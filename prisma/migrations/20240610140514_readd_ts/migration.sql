/*
  Warnings:

  - The primary key for the `Session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `bankId` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `elapsedSincePause` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `goalId` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the `Bank` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Goal` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `metadata` on table `Session` required. This step will fail if there are existing NULL values in that column.
  - Made the column `metadata` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Bank" DROP CONSTRAINT "Bank_userId_fkey";

-- DropForeignKey
ALTER TABLE "Goal" DROP CONSTRAINT "Goal_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_bankId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_goalId_fkey";

-- DropIndex
DROP INDEX "Session_controlTs_key";

-- AlterTable
ALTER TABLE "Session" DROP CONSTRAINT "Session_pkey",
DROP COLUMN "bankId",
DROP COLUMN "elapsedSincePause",
DROP COLUMN "goalId",
ALTER COLUMN "metadata" SET NOT NULL,
ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("createdAt");

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "metadata" SET NOT NULL;

-- DropTable
DROP TABLE "Bank";

-- DropTable
DROP TABLE "Goal";
