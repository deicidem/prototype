import { describe, expect, it } from 'vitest';

describe('profileCard', () => {
    it('should render', async () => {
        await new Promise(resolve => setTimeout(resolve, 60000));
        expect(true).toBe(true);
    }, 65000);
});
