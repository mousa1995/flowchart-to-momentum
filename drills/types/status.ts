// Define a Status type.
// Status can be:
// - "idle"
// - "loading"
// - "success"
// - "error"

export type Status = "idle" | "loading" | "success" | "error";

// Create a variable using the Status type.
const currentStatus: Status = "loading";

// Test the variable.
console.log(currentStatus);

// Expected output:
// loading

// Run:
// E:\cmder\flowChart (main -> origin)
// λ npx tsx drills/types/status.ts
// loading
