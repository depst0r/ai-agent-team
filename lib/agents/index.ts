import { DESIGNER_PROMPT } from '@/lib/agents/designer'
import { DEVELOPER_PROMPT } from '@/lib/agents/developer';
import { TESTER_PROMPT } from '@/lib/agents/tester';
import { DEFAULT_PROMPT } from './default';


export const getPrompt = (agent: string) => {

    switch (agent) {
        case 'designer': return DESIGNER_PROMPT
        case 'developer': return DEVELOPER_PROMPT
        case 'tester': return TESTER_PROMPT
        default: return DEFAULT_PROMPT
    }
}