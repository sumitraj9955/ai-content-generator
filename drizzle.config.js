require('dotenv').config();

/** @type { import("drizzle-kit").Config } */
module.exports = {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://neondb_owner:fPv9ImhFMs3g@ep-tight-violet-a5e39ecx.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require'
    ,
  }
};
