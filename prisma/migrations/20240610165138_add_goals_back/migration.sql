-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Log" (
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" TEXT NOT NULL,
    "userId" TEXT,
    "data" JSONB NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("timestamp")
);

-- CreateTable
CREATE TABLE "Queue" (
    "priority" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Queue_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Goal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "totalMinutes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "selected" BOOLEAN NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Queue" ADD CONSTRAINT "Queue_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
