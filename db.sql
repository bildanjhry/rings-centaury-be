CREATE TABLE "brands" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" VARCHAR(50),
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW(),
    "deleted_at" TIMESTAMP
);

CREATE TABLE "categories" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" VARCHAR(50),
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW(),
    "deleted_at" TIMESTAMP
);

CREATE TABLE "products" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" VARCHAR(100),
    "slugs" VARCHAR(100),
    "brand_id" UUID REFERENCES "brands"("id"),
    "init_price" BIGINT,
    "sku" VARCHAR(50),
    "desc" TEXT,
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW(),
    "deleted_at" TIMESTAMP
);

CREATE TABLE "products_categories" (
    "category_id" UUID REFERENCES "categories"("id"),
    "product_id" UUID REFERENCES "products"("id"),
    PRIMARY KEY ("product_id", "category_id")
);

