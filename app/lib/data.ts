import { sql } from '@vercel/postgres';
import {
  ChickenCombo, BeefCombo, GoatmeatCombo,
  Goatmeat, Beef, ChickenWings, Menu
} from './definitions';


export async function fetchMenu() {
    try {
        console.log('fetchMenu called')
        const data = await sql<Menu>`SELECT * FROM menu`;
        // console.log({data})
        return data.rows;
    } catch (error) {
        console.log('Database Error:', error);
        throw new Error('Failed to fetch menu data.');
    }
}

export async function fetchChickenCombo() {
    try {
        const data = await sql<ChickenCombo>`SELECT * FROM chicken_combo`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch chicken_combo data.');
    }
}

export async function fetchBeefCombo() {
    try {
        const data = await sql<BeefCombo>`SELECT * FROM beef_combo`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch beef_combo data.');
    }
}

export async function fetchGoatmeatCombo() {
    try {
        const data = await sql<GoatmeatCombo>`SELECT * FROM goatmeat_combo`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch goatmeat_combo data.');
    }
}

export async function fetchGoatmeat() {
    try {
        const data = await sql<Goatmeat>`SELECT * FROM goatmeat`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch goatmeat data.');
    }
}

export async function fetchBeef() {
    try {
        const data = await sql<Beef>`SELECT * FROM beef`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch beef data.');
    }
}

export async function fetchChickenWings() {
    try {
        const data = await sql<ChickenWings>`SELECT * FROM chickenwings`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch chickenwings data.');
    }
}

// export const fetchAddress = async (latitude: number, longitude: number): Promise<string> => {
//     const api_key = process.env.NEXT_PUBLIC_MAPS_API_KEY
//     console.log({api_key})
//     const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${api_key}`);
//     const data = await response.json();
//     console.log({data})
//     if (data.status === 'OK') {
//       return data.results[0].formatted_address;
//     } else {
//       throw new Error('Unable to fetch address');
//     }
// };
