module.exports = {
  ligvid: {
    host: process.env.LIGVID_PG_HOST,
    database: process.env.LIGVID_PG_DATABASE,
    username: process.env.LIGVID_PG_USERNAME,
    password: process.env.LIGVID_PG_PASSWORD,
    ssl: true,
    name: 'ligvid',
    connector: 'postgresql',
  }
};
