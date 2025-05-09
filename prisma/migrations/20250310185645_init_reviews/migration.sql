-- CreateEnum
CREATE TYPE "status" AS ENUM ('active', 'inactive', 'archived');

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "status" NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "stock" INTEGER NOT NULL,
    "available_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "comments" TEXT NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);
