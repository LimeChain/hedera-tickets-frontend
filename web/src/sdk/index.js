import config from './config/config.json';

import { TestNetProvider } from "./providers/test-net-provider";
import { TicketsStore } from "./contracts/ticket-store";

export const HederaSDK = {
    init: function (account, privateKey) {
        const provider = new TestNetProvider(account, privateKey);
        const contract = new TicketsStore(provider, config.contract);

        return {
            provider,
            contract
        }
    }
} 