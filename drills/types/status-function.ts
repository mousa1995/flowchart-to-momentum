// Define a Status type.
// Status can be:
// - "idle"
// - "loading"
// - "success"
// - "error"
import { Status } from "./status";

// Create a function named printStatus.
// It receives a Status.
// Print the status.
const printStatus = (status: Status) => {
  console.log(status);
};

// Call the function with a valid Status.
printStatus("success");

// Test:
// npx tsx drills/types/status-function.ts

// Expected output:
// success

// E:\cmder\flowChart (main -> origin)
// λ npx tsx drills\types\status-function.ts
// success

// ### Test2 ###
//printStatus("running");

// why is works =>
//TypeScript جلوی بعضی اشتباه‌ها را هنگام توسعه می‌گیرد؛ اما Typeها خودشان در Runtime نگهبان برنامه نیستند.
