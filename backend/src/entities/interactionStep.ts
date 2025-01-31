import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Interaction } from './interaction';
import { Tx } from './tx';
import { Indentity } from './rawTx';




@Entity()
export class InteractionStep {
    @PrimaryColumn({ unique: true })
    interaction_id!: string;

    @PrimaryColumn({ type: 'int' })
    step!: number;

    @PrimaryColumn({ type: 'int' }) // move to rawTx
    identity!: Indentity;

    @Column({ unique: true })
    txid!: string;

    @Column({ type: 'bigint' }) // move to rawTx
    p_tx_datetime!: bigint;

    @Column({ type: 'varchar' }) // move to rawTx
    tx_block_hash!: string;

    @Column({ type: 'bigint' }) // move to Interaction
    response_timeout!: bigint;

    @ManyToOne(() => Interaction, interaction => interaction.interaction_id)
    @JoinColumn({ name: 'interaction_id' })
    interaction!: Interaction;
}
