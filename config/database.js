import pkg from 'pg-connection-string';
const { parse } = pkg;

export default ({ env }) => {
  const connectionString = env('DATABASE_URL');


  if (connectionString) {
    const config = parse(connectionString);

    return {
      connection: {
        client: 'postgres', 
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
       
          ssl: env.bool('DATABASE_SSL', true) ? { rejectUnauthorized: false } : false, 
        },
        acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
      },
    };
  }

 
  return {
    connection: {
      client: env('DATABASE_CLIENT', 'sqlite'),
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
  };
};