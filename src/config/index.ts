import type { ProcessorConfig } from './processorConfig'
import fs from 'fs'
import { assertNotNull } from '@subsquid/substrate-processor'
import { Account } from '../model/generated/account.model';

export const WHITELIST_CONFIG: IWhiteListConfing = getJSON(
    'assets/whitelist-config.json'
)

interface IWhiteListConfing {
    Accounts: string[],
    Events: String[],
}

function getJSON(filename: string) {
    const data = fs.readFileSync(filename).toString()
    return JSON.parse(data)
}

export function getChainConfig(): ProcessorConfig {
    switch (process.env.CHAIN) {
        case 'acala':
            return require('./chains/acala').default
        case 'moonbeam':
            return require('./chains/moonbeam').default
        case 'phala':
            return require('./chains/phala').default
        case 'khala':
            return require('./chains/khala').default
        default:
            throw new Error(`Unsupported chain ${process.env.CHAIN}`)
    }
}
