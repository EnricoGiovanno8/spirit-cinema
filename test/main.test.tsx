import { beforeEach, describe, expect, it, vi } from 'vitest';

const renderMock = vi.fn();
const createRootMock = vi.fn(() => ({ render: renderMock }));

vi.mock('react-dom/client', () => ({
  createRoot: createRootMock,
}));

beforeEach(() => {
  document.body.innerHTML = '<div id="root"></div>';
});

describe('main.tsx', () => {
  it('should call createRoot and render', async () => {
    await import('../src/main');

    expect(createRootMock).toHaveBeenCalledWith(document.getElementById('root'));
    expect(renderMock).toHaveBeenCalledOnce();
  });
});