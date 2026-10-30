CREATE TABLE "brands" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" VARCHAR(50),
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW(),
    "deleted_at" TIMESTAMP
);

CREATE TABLE "users" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "username" VARCHAR(50),
    "password" VARCHAR(100),
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW(),
    "deleted_at" TIMESTAMP
);

CREATE TABLE "profile" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "user_id" UUID REFERENCES "users"("id"),
    "fullname" VARCHAR(50),
    "email" VARCHAR(50),
    "address" TEXT,
    "gender" INT,
    "phone" VARCHAR(15),
    "birth_date" TIMESTAMP DEFAULT NOW(),
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

CREATE TABLE "product_image" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "url" VARCHAR(100),
    "product_id" UUID REFERENCES "products"("id"),
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW(),
    "deleted_at" TIMESTAMP
);

CREATE TABLE "product_color" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" VARCHAR(40),
    "hex" VARCHAR(20),
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW(),
    "deleted_at" TIMESTAMP
);

CREATE TABLE "specs_type" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "ram" VARCHAR(10),
    "storage" VARCHAR(10),
    "cpu" VARCHAR(20),
    "gpu" VARCHAR(20),
    "variants" VARCHAR(20),
    "other" VARCHAR(255),
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW(),
    "deleted_at" TIMESTAMP
);

CREATE TABLE "product_specs" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "type_id" UUID REFERENCES "specs_type"("id"),
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW(),
    "deleted_at" TIMESTAMP
);

CREATE TABLE "product_variant" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "product_id" UUID REFERENCES "products"("id"),
    "color_id" UUID REFERENCES "product_color"("id"),
    "specs_id" UUID REFERENCES "product_specs"("id"),
    "stocks" INT,
    "price" BIGINT,
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW(),
    "deleted_at" TIMESTAMP
);

CREATE TABLE "product_discount" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "product_id" UUID REFERENCES "products"("id"),
    "percentage" VARCHAR(10),
    "period" VARCHAR(10),
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW(),
    "deleted_at" TIMESTAMP
);

CREATE TABLE "products_categories" (
    "category_id" UUID REFERENCES "categories"("id"),
    "product_id" UUID REFERENCES "products"("id"),
    PRIMARY KEY ("product_id", "category_id")
);

CREATE TABLE "product_transaction" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "product_id" UUID REFERENCES "products"("id"),
    "product_variant_id" UUID REFERENCES "product_variant"("id"),
    "qty" INT,
    "subtotal" BIGINT,
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW(),
    "deleted_at" TIMESTAMP
);

CREATE TABLE "payment_method" (
    "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    "name" VARCHAR(50),
    "payment_code" VARCHAR(40),
    "payment_type" VARCHAR(25),
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW(),
    "deleted_at" TIMESTAMP
);

CREATE TABLE "transactions" (
    "worker_id" UUID REFERENCES "users"("id"),
    "product_transaction_id" UUID REFERENCES "products"("id"),
    "payment_method_id" UUID REFERENCES "payment_method"("id"),
    "grand_total" BIGINT,
    "created_at" TIMESTAMP DEFAULT NOW(),
    "updated_at" TIMESTAMP DEFAULT NOW(),
    "deleted_at" TIMESTAMP
);
