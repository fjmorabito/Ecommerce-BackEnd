import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Federico',
            email: 'morabitofj@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Juan',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Remote Control',
            category: 'TV things',
            image: '/images/p1.jpg',
            price: 1500,
            countInStock: 10,
            brand: 'Xiaomi',
            rating: 4,
            numReviews: 15,
            description: 'high quality controller',
        },
        {
            name: 'Freezer',
            category: 'Kitchen',
            image: '/images/p2.jpg',
            price: 60000,
            countInStock: 20,
            brand: 'Liliana',
            rating: 4.7,
            numReviews: 19,
            description: 'The ultimate freezer',
        },
        {
            name: 'Sony TV',
            category: 'TV things',
            image: '/images/p3.jpg',
            price: 200000,
            countInStock: 0,
            brand: 'Sony',
            rating: 4.5,
            numReviews: 15,
            description: 'FullHD TV',
        },
        {
            name: 'Liliana Blender',
            category: 'Kitchen',
            image: '/images/p4.jpg',
            price: 8500,
            countInStock: 40,
            brand: 'Liliana',
            rating: 4,
            numReviews: 17,
            description: 'Premium blender',
        },
        {
            name: 'LG Microwave',
            category: 'Kitchen',
            image: '/images/p5.jpg',
            price: 13000,
            countInStock: 12,
            brand: 'LG',
            rating: 3.8,
            numReviews: 23,
            description: 'Excelent tool for your kitchen',
        },
        {
            name: 'Wrangler Trousers',
            category: 'Clothing',
            image: '/images/p6.jpg',
            price: 2500,
            countInStock: 80,
            brand: 'Wrangler',
            rating: 3.70,
            numReviews: 74,
            description: 'high quality trousers',
        },
    ]
};

export default data;