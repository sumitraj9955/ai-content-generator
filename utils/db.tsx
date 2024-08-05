import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://neondb_owner:fPv9ImhFMs3g@ep-tight-violet-a5e39ecx.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require'
    );
 export const db = drizzle(sql,{schema});