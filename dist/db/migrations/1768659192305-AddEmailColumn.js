export class AddEmailColumn1768659192305 {
    constructor() {
        this.name = "AddEmailColumn1768659192305";
    }
    async up(queryRunner) {
        // Add column allowing NULL first
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying`);
        // Update existing rows with a default value
        await queryRunner.query(`UPDATE "user" SET "email" = 'default-' || id WHERE "email" IS NULL`);
        // Add NOT NULL constraint
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "email" SET NOT NULL`);
        // Add UNIQUE constraint
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }
}
