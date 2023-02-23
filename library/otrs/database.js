
const { Sequelize } = require('sequelize');
const { Umzug, SequelizeStorage } = require("umzug");


let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: "./library.db",
    logging: false
});



async function connectToDB() {

    try {
       
        
        await sequelize.authenticate();
        console.log("DB connection established succesfully");
        await runAllMigrations();
        return sequelize;
    }
    catch (err) {
        console.error("Unable to connect to the database", err);
        throw err;
    }
}

async function disconnectFromDB() {
    await sequelize.close();
    console.log("disconnected from the database");
}

async function runAllMigrations() {
    const migrator = new Umzug({
        migrations: {
            glob: ["migrations/*.js", { cwd: __dirname }]
        },
        context: sequelize,
        storage: new SequelizeStorage({
            sequelize
        }),
        logger: console
    })
    await migrator.up();
    console.log("all migrations performed successfully");
}

async function dropAllTables() {
    await sequelize.getQueryInterface().dropAllTables();
    console.log("Dropped all tables from databse");
}
module.exports = {
    sequelize,
    connectToDB,
    runAllMigrations,
    dropAllTables,
    disconnectFromDB
}