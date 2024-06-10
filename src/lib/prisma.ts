import { PrismaClient } from '@prisma/client';
import cuid2 from '@paralleldrive/cuid2';

declare global {
    namespace PrismaJoin {
        type SessionMetaType = {
            slack? : {
                messageTs: string;
                controlTs: string;
            }
        }
        type UserMetaType = {
            // TODO
        }
        type LogDataTypes = GithubMetaType;
        type GithubMetaType = {};
    }
}

cuid2.init();

export const prisma = new PrismaClient();
export const uid = () => { return cuid2.createId() };