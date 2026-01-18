import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddEmailColumn1768659192305 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
