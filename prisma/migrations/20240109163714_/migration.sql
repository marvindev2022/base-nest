-- CreateTable
CREATE TABLE "Supplier" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "state_abbreviation" TEXT NOT NULL,
    "cost_per_kwh" INTEGER NOT NULL,
    "min_kwh_limit" INTEGER NOT NULL,
    "total_customers" INTEGER NOT NULL,
    "average_customer_rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);
