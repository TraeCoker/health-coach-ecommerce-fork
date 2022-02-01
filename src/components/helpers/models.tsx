
export interface Feature {
    icon: number;
    heading: string;
    text: string;
}
export interface Product {
    id: number;
    name: string;
    description: string;
    details: string[];
    images: string[];
    amount: number;
    currency: string;
    quantity: number;
}

// export interface CardDetails {
//     id: number;
//     details: string[];
//     price: string;
//     product: Product;
// }


export const features: Feature[] = [
    {
        icon: 1,
        heading: "Find your center",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, id cumque. Accusamus tempore, ad iusto natus nesciunt atque aliquid maiores.",
    },
    {
        icon: 2,
        heading: "Build community",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, id cumque. Accusamus tempore, ad iusto natus nesciunt atque aliquid maiores.",
    },
    {
        icon: 3,
        heading: "Nourish your body",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, id cumque. Accusamus tempore, ad iusto natus nesciunt atque aliquid maiores.",
    },
    {
        icon: 4,
        heading: "Find your bliss",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, id cumque. Accusamus tempore, ad iusto natus nesciunt atque aliquid maiores.",
    },
]

export const courses: Product[] = [
    {
        id: 1,
        name: "THRIVE Nutrition",
        description: "Fuel your body with this 12 week nutrition course",
        details: [
             "12 week course",
            "Personalized meal plans",
            "1 on 1 nutrition coaching",
            "Find the right foods for your body",
            "Complimentary microbiome test"
        ],
        images: [ '/public/img/food-3-med.jpg' ],
        amount: 15000,
        currency: 'usd',
        quantity: 1
    }
]
