const { PrismaClient } = require("@prisma/client");
const { user } = require("./data.js");
const prisma = new PrismaClient();

const load = async () => {
    try {
        await prisma.user.createMany({
            data: user,
        });
        console.log("Added User data");
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

load();
