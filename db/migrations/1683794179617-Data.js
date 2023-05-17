module.exports = class Data1683794179617 {
    name = 'Data1683794179617'

    async up(db) {
        await db.query(`CREATE TABLE "bridge_receive_event" ("id" character varying NOT NULL, "name" text NOT NULL, "amount" text NOT NULL, "result" boolean NOT NULL, "index_in_block" integer NOT NULL, "block_number" integer NOT NULL, "timestamp" numeric NOT NULL, "account_id" character varying, CONSTRAINT "PK_b465b8de8916fd332453b79305b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_c19f87d181e2da12db5edceee0" ON "bridge_receive_event" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_a82e73ec8f0fdcd293969105e1" ON "bridge_receive_event" ("index_in_block") `)
        await db.query(`CREATE INDEX "IDX_dccd71977c71f6e9ca2f5d38ed" ON "bridge_receive_event" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_e281efcb6ea906ed7d812503dc" ON "bridge_receive_event" ("timestamp") `)
        await db.query(`ALTER TABLE "bridge_receive_event" ADD CONSTRAINT "FK_c19f87d181e2da12db5edceee02" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "bridge_receive_event"`)
        await db.query(`DROP INDEX "public"."IDX_c19f87d181e2da12db5edceee0"`)
        await db.query(`DROP INDEX "public"."IDX_a82e73ec8f0fdcd293969105e1"`)
        await db.query(`DROP INDEX "public"."IDX_dccd71977c71f6e9ca2f5d38ed"`)
        await db.query(`DROP INDEX "public"."IDX_e281efcb6ea906ed7d812503dc"`)
        await db.query(`ALTER TABLE "bridge_receive_event" DROP CONSTRAINT "FK_c19f87d181e2da12db5edceee02"`)
    }
}
