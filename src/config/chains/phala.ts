import { lookupArchive } from '@subsquid/archive-registry';
import { ProcessorConfig } from '../processorConfig';

const config: ProcessorConfig = {
    chainName: 'phala',
    prefix: 'phala',
    dataSource: {
        archive: lookupArchive('phala')
    },
    blockRange:
    {
        from: 2490215,
    }
};

export default config;
