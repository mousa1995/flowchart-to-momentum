// Base interface:
// User
// ├── id: string
// └── username: string
interface User {
    id: string;
    username: string;
}

// Extended interface:
// Admin
// ├── تمام ویژگی‌های User
// ├── role: "admin"
// └── permissions: string[]
interface Admin extends User {
    role: "admin";
    permissions: string[];
}

const admin : Admin = {
    id : '1',
    username : 'thisFileAdmin',
    role: 'admin',
    permissions: []
}

console.log(admin);

// ### Test ###
// λ npx tsx drills\interfaces\user-profile.ts
// { id: '1', username: 'thisFileAdmin', role: 'admin', permissions: [] }
// E:\cmder\flowChart (main -> origin)