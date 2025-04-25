-- CreateTable
CREATE TABLE "AverageDailyPrice" (
    "id" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AverageDailyPrice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AverageDailyPrice_productType_date_key" ON "AverageDailyPrice"("productType", "date");
