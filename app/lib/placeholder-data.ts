// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
    },
];
  
const customers = [
    {
      id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
      name: 'Evil Rabbit',
      email: 'evil@rabbit.com',
      image_url: '/customers/evil-rabbit.png',
    },
    {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Delba de Oliveira',
      email: 'delba@oliveira.com',
      image_url: '/customers/delba-de-oliveira.png',
    },
    {
      id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
      name: 'Lee Robinson',
      email: 'lee@robinson.com',
      image_url: '/customers/lee-robinson.png',
    },
    {
      id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
      name: 'Michael Novotny',
      email: 'michael@novotny.com',
      image_url: '/customers/michael-novotny.png',
    },
    {
      id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
      name: 'Amy Burns',
      email: 'amy@burns.com',
      image_url: '/customers/amy-burns.png',
    },
    {
      id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
      name: 'Balazs Orban',
      email: 'balazs@orban.com',
      image_url: '/customers/balazs-orban.png',
    },
];
  
const invoices = [
    {
      customer_id: customers[0].id,
      amount: 15795,
      status: 'pending',
      date: '2022-12-06',
    },
    {
      customer_id: customers[1].id,
      amount: 20348,
      status: 'pending',
      date: '2022-11-14',
    },
    {
      customer_id: customers[4].id,
      amount: 3040,
      status: 'paid',
      date: '2022-10-29',
    },
    {
      customer_id: customers[3].id,
      amount: 44800,
      status: 'paid',
      date: '2023-09-10',
    },
    {
      customer_id: customers[5].id,
      amount: 34577,
      status: 'pending',
      date: '2023-08-05',
    },
    {
      customer_id: customers[2].id,
      amount: 54246,
      status: 'pending',
      date: '2023-07-16',
    },
    {
      customer_id: customers[0].id,
      amount: 666,
      status: 'pending',
      date: '2023-06-27',
    },
    {
      customer_id: customers[3].id,
      amount: 32545,
      status: 'paid',
      date: '2023-06-09',
    },
    {
      customer_id: customers[4].id,
      amount: 1250,
      status: 'paid',
      date: '2023-06-17',
    },
    {
      customer_id: customers[5].id,
      amount: 8546,
      status: 'paid',
      date: '2023-06-07',
    },
    {
      customer_id: customers[1].id,
      amount: 500,
      status: 'paid',
      date: '2023-08-19',
    },
    {
      customer_id: customers[5].id,
      amount: 8945,
      status: 'paid',
      date: '2023-06-03',
    },
    {
      customer_id: customers[2].id,
      amount: 1000,
      status: 'paid',
      date: '2022-06-05',
    },
];
  
const revenue = [
    { month: 'Jan', revenue: 2000 },
    { month: 'Feb', revenue: 1800 },
    { month: 'Mar', revenue: 2200 },
    { month: 'Apr', revenue: 2500 },
    { month: 'May', revenue: 2300 },
    { month: 'Jun', revenue: 3200 },
    { month: 'Jul', revenue: 3500 },
    { month: 'Aug', revenue: 3700 },
    { month: 'Sep', revenue: 2500 },
    { month: 'Oct', revenue: 2800 },
    { month: 'Nov', revenue: 3000 },
    { month: 'Dec', revenue: 4800 },
];

const menus = [
    {
        name: 'Jollof', 
        price: 30, 
        currency: 'Ghc',
        description: '',
        image_url: '/IMG_8139.jpg'
    },
    {
        name: 'Spicy Jollof', 
        price: 30, 
        currency: 'Ghc',
        description: '',
        image_url: '/IMG_8180-ai1.png'
    },
    {
        name: 'Assorted Jollof', 
        price: 85, 
        currency: 'Ghc',
        description: '',
        image_url: '/IMG_8144.png'
    },
]

const chickenwings = [
    {
        name: 'Chicken wings',
        quantity:'10 pieces',
        price: 85,
        currency: 'Ghc',
        description: '',
        image_url: '/IMG_8135.jpg'
    },
    {
        name: 'Chicken wings',
        quantity:'6 pieces',
        price: 51,
        currency: 'Ghc',
        description: '',
        image_url: '/IMG_8222-single.png'
    },
    {
        name: 'Chicken wings', 
        quantity:'4 pieces',
        price: 34, 
        currency: 'Ghc',
        description: '',
        image_url: '/IMG_8237.jpg'
    },
    
]

const beefs = [
    {
        name: 'Beef', 
        price: 60,
        currency: 'Ghc', 
        quantity:'10 pieces',
        description: '',
        image_url: '/IMG_8292-standard.png'
    },
    {
        name: 'Beef', 
        price: 50,
        currency: 'Ghc',
        quantity:'6 pieces',
        description: '',
        image_url: '/IMG_8292-standard.png'
    },
]

const goatmeats = [
    {
        name: 'Goat meat', 
        quantity:'8 pieces',
        price: 60,
        currency: 'Ghc', 
        description: '',
        image_url: '/IMG_8252.jpg'
    },
    {
        name: 'Goat meat', 
        quantity:'5 pieces',
        price: 45,
        currency: 'Ghc', 
        description: '',
        image_url: '/IMG_8252.jpg'
    }, 
]

const goatmeat_combos = [
    {
        name: 'Jollof + Goat meat', 
        quantity:'6 pieces',
        price: 79,
        currency: 'Ghc', 
        description: '',
        image_url: '/beef-combo.jpg'
    },
    {
        name: 'Spicy Jollof + Goat meat', 
        quantity:'6 pieces',
        price: '79',
        currency: 'Ghc', 
        description: '',
        image_url: '/beef-combo.jpg'
    }, 
]

const beef_combos = [
    {
        name: 'Jollof + Beef', 
        quantity:'6 pieces',
        price: 74,
        currency: 'Ghc', 
        description: '',
        image_url: '/beef-combo.jpg'
    },
    {
        name: 'Spicy Jollof + Beef', 
        quantity:'6 pieces',
        price: 74,
        currency: 'Ghc', 
        description: '',
        image_url: '/beef-combo.jpg'
    }, 
]

const chicken_combos = [
    {
        name: 'Jollof + Chicken wings', 
        quantity:'6 pieces',
        price: 80,
        currency: 'Ghc', 
        description: '',
        image_url: '/chicken-combo.jpg'
    },
    {
        name: 'Spicy Jollof + Chicken wings', 
        quantity:'6 pieces',
        price: 80,
        currency: 'Ghc', 
        description: '',
        image_url: '/chicken-combo.jpg'
    },
    {
        name: 'Jollof + Chicken wings + 2 Fried eggs', 
        quantity:'3 pieces',
        price: 67,
        currency: 'Ghc', 
        description: '',
        image_url: '/IMG_8155-single.png'
    }, 
    {
        name: 'Spicy Jollof + Chicken wings + 2 Fried eggs', 
        quantity:'3 pieces',
        price: 67,
        currency: 'Ghc', 
        description: '',
        image_url: '/IMG_8155-single.png'
    }, 
]
  
export { users, customers, invoices, revenue, menus, chicken_combos, beef_combos, goatmeat_combos, goatmeats, beefs, chickenwings,  };