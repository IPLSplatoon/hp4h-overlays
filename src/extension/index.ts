import type NodeCG from '@nodecg/types';
import { RadiaTiltifyConnector } from './RadiaTiltifyConnector';
import { Configschema } from 'types/schemas';

export = (nodecg: NodeCG.ServerAPI<Configschema>): void => {
    try {
        new RadiaTiltifyConnector(nodecg);
    } catch (e) {
        nodecg.log.warn((e as Error).message);
    }
};
