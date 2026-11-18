import 'dotenv/config';

const { default: db } = await import('./db.ts');

try {
  const [batch, migrations] = await db.migrate.latest({
    directory: './src/migrations',
    extension: 'ts',
    loadExtensions: ['.ts'],
  });

  console.log(`Migration batch ${batch} completed.`);
  console.log('Migrations executed:', migrations);
} catch (error) {
  console.error('Migration failed:', error);
  process.exitCode = 1;
} finally {
  await db.destroy();
}
