module.exports = class Data1679998829991 {
    name = 'Data1679998829991'

    async up(db) {
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "nonce" integer NOT NULL, "result" boolean NOT NULL, "block_number" integer NOT NULL, "timestamp" numeric NOT NULL, "account_id" character varying, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e2652fa8c16723c83a00fb9b17" ON "transaction" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_2d99bb5a0ab5fb8cf8b746eb39" ON "transaction" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_87f2932d4a558d44a2915f849a" ON "transaction" ("timestamp") `)
        await db.query(`CREATE TABLE "deposit_event" ("id" character varying NOT NULL, "name" text NOT NULL, "amount" text NOT NULL, "result" boolean NOT NULL, "index_in_block" integer NOT NULL, "block_number" integer NOT NULL, "timestamp" numeric NOT NULL, "account_id" character varying, CONSTRAINT "PK_15cf72ceca9f2fd85c11de40a76" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_ffc8324090f9e9753caa7ef8ae" ON "deposit_event" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_504113e1ef4666e79048c66f09" ON "deposit_event" ("index_in_block") `)
        await db.query(`CREATE INDEX "IDX_931a1a914e79c70732f69b9467" ON "deposit_event" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_06c11c37269bd3e7f610cdba27" ON "deposit_event" ("timestamp") `)
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_e2652fa8c16723c83a00fb9b17e" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "deposit_event" ADD CONSTRAINT "FK_ffc8324090f9e9753caa7ef8ae4" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "transaction"`)
        await db.query(`DROP INDEX "public"."IDX_e2652fa8c16723c83a00fb9b17"`)
        await db.query(`DROP INDEX "public"."IDX_2d99bb5a0ab5fb8cf8b746eb39"`)
        await db.query(`DROP INDEX "public"."IDX_87f2932d4a558d44a2915f849a"`)
        await db.query(`DROP TABLE "deposit_event"`)
        await db.query(`DROP INDEX "public"."IDX_ffc8324090f9e9753caa7ef8ae"`)
        await db.query(`DROP INDEX "public"."IDX_504113e1ef4666e79048c66f09"`)
        await db.query(`DROP INDEX "public"."IDX_931a1a914e79c70732f69b9467"`)
        await db.query(`DROP INDEX "public"."IDX_06c11c37269bd3e7f610cdba27"`)
        await db.query(`DROP TABLE "account"`)
        await db.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_e2652fa8c16723c83a00fb9b17e"`)
        await db.query(`ALTER TABLE "deposit_event" DROP CONSTRAINT "FK_ffc8324090f9e9753caa7ef8ae4"`)
    }
}
