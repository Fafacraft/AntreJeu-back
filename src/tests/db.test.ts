import 'dotenv/config';
import { afterAll, describe, expect, it } from 'vitest';
import db from '../db.js';

describe('MySQL connection', () => {
  afterAll(async () => {
    await db.destroy();
  });

  it('connects to the database and executes a query', async () => {
    const result = await db.raw('SELECT 1 AS connected');

    expect(result[0][0].connected).toBe(1);
  });
});
