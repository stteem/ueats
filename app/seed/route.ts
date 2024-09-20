import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { menus, chicken_combos, beef_combos, 
        goatmeat_combos, goatmeats, beefs, 
        chickenwings, users } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedMenu() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS menu (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      currency VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedMenu = await Promise.all(
    menus.map(
      (menu) => client.sql`
        INSERT INTO menu (name, price, currency, description, image_url)
        VALUES (${menu.name}, ${menu.price}, ${menu.currency}, ${menu.description}, ${menu.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedMenu;
}

async function seedChickenCombos() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS chicken_combo (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      quantity VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      currency VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedChickenCombos = await Promise.all(
    chicken_combos.map(
      (chicken_combo) => client.sql`
        INSERT INTO chicken_combo (name, quantity, price, currency, description, image_url)
        VALUES (${chicken_combo.name}, ${chicken_combo.quantity}, ${chicken_combo.price}, ${chicken_combo.currency}, ${chicken_combo.description}, ${chicken_combo.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedChickenCombos;
}

async function seedBeefCombos() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS beef_combo (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      quantity VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      currency VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedBeefCombos = await Promise.all(
    beef_combos.map(
      (beef_combo) => client.sql`
        INSERT INTO beef_combo (name, quantity, price, currency, description, image_url)
        VALUES (${beef_combo.name}, ${beef_combo.quantity}, ${beef_combo.price}, ${beef_combo.currency}, ${beef_combo.description}, ${beef_combo.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedBeefCombos;
}


async function seedGoatmeatCombos() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS goatmeat_combo (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      quantity VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      currency VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedGoatmeatCombos = await Promise.all(
    goatmeat_combos.map(
      (goatmeat_combo) => client.sql`
        INSERT INTO goatmeat_combo (name, quantity, price, currency, description, image_url)
        VALUES (${goatmeat_combo.name}, ${goatmeat_combo.quantity}, ${goatmeat_combo.price}, ${goatmeat_combo.currency}, ${goatmeat_combo.description}, ${goatmeat_combo.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedGoatmeatCombos;
}

async function seedGoatmeat() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS goatmeat (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      quantity VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      currency VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedGoatmeat = await Promise.all(
    goatmeats.map(
      (goatmeat) => client.sql`
        INSERT INTO goatmeat (name, quantity, price, currency, description, image_url)
        VALUES (${goatmeat.name}, ${goatmeat.quantity}, ${goatmeat.price}, ${goatmeat.currency}, ${goatmeat.description}, ${goatmeat.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedGoatmeat;
}

async function seedBeef() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS beef (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      quantity VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      currency VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedBeef = await Promise.all(
    beefs.map(
      (beef) => client.sql`
        INSERT INTO beef (name, quantity, price, currency, description, image_url)
        VALUES (${beef.name}, ${beef.quantity}, ${beef.price}, ${beef.currency}, ${beef.description}, ${beef.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedBeef;
}


async function seedChickenWings() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS chickenwings (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      quantity VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      currency VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedChickenwings = await Promise.all(
    chickenwings.map(
      (chickenwing) => client.sql`
        INSERT INTO chickenwings (name, quantity, price, currency, description, image_url)
        VALUES (${chickenwing.name}, ${chickenwing.quantity}, ${chickenwing.price}, ${chickenwing.currency}, ${chickenwing.description}, ${chickenwing.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedChickenwings;
}



export async function GET() {
    return Response.json({ message: 'GET called successfully' });

    // try {
    //     await client.sql`BEGIN`;
    //     await seedMenu();
    //     await seedBeef();
    //     await seedUsers();
    //     await seedGoatmeat();
    //     await seedChickenCombos();
    //     await seedBeefCombos();
    //     await seedGoatmeatCombos();
    //     await seedChickenWings();
    //     await client.sql`COMMIT`;

    //     return Response.json({ message: 'Database seeded successfully' });
    // } catch (error) {
    //     await client.sql`ROLLBACK`;
    //     return Response.json({ error }, { status: 500 });
    // }
}