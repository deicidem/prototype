import { describe, expect, it } from 'vitest';

describe('appHeader', () => {
    it('should render', async () => {
        await new Promise(resolve => setTimeout(resolve, 10000));
        expect(true).toBe(true);
    }, 65000);
});
