import { vi } from "vitest";

type Logger = {
  log: (message: string) => void;
};

const mockLogger = {
  log: vi.fn(),
} satisfies Logger;

console.log(mockLogger.log());
