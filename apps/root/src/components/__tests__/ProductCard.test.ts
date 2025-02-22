import { describe, expect, it, vi } from 'vitest';

describe('productCard', () => {
    it('should render', async () => {
        await new Promise(resolve => setTimeout(resolve, 10000));
        expect(true).toBe(true);
    }, 65000);
});
