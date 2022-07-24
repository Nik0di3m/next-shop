const { Prisma } = require("@prisma/client");

const user = [
    {
        name: "Nikodem Waleszczyk",
        email: "admin@admin.com",
        password:
            "$2b$10$KhBe8YYj5SJEomWvb8g2R.deY.lWYk0V.SreshPPw.t8GrbbQsRxy",
        role: "admin",
    },
    {
        name: "Common User",
        email: "user@user.com",
        password:
            "$2b$10$KhBe8YYj5SJEomWvb8g2R.deY.lWYk0V.SreshPPw.t8GrbbQsRxy",
        role: "user",
    },
];

module.exports = {
    user,
};
