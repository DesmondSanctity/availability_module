module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite",
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:",
  },
  dev: {
    username: "xmqiogqxwcgwjo",
    password:
      "16633521042da143447b874fa4895a9e857c1a8b5766f28791ea19747af9ea55",
    database: "ddmhb29b0js513",
    host: "ec2-3-208-50-226.compute-1.amazonaws.com",
    dialect: "postgres",
  },
  production: {
    username: "xmqiogqxwcgwjo",
    password:
      "16633521042da143447b874fa4895a9e857c1a8b5766f28791ea19747af9ea55",
    database: "ddmhb29b0js513",
    host: "ec2-3-208-50-226.compute-1.amazonaws.com",
    dialect: "postgres",
  },
};
