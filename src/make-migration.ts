import 'dotenv/config';

const { default: db } = await import('./db.js');

const name = process.argv[2];

if (!name) {
  console.error('Please provide a migration name.');
  process.exitCode = 1;
} else {
  try {
    const migration = await db.migrate.make(name);
    console.log(`Created migration: ${migration}`);
  } catch (error) {
    console.error('Migration generation failed:', error);
    process.exitCode = 1;
  } finally {
    await db.destroy();
  }
}
