module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'barbearia',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};