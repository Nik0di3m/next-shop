import ProductTableItem from "./ProductTableItem";

enum Status {
    active = "active",
    deactive = "deactive",
}

enum Direction {
    up = "up",
    down = "down",
}

const FakeItemsDb = [
    {
        title: "Betonowa lampa sufitowa z mosiężnymi elementami KORTA 3",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp.webp",
        price: 1819,
        status: "active",
        rating: {
            value: 4.5,
            votes: 99,
        },
        sales: 12318,
        trend: {
            direction: "up" as Direction,
            value: 45,
        },
        views: 43,
    },
    {
        title: "Lampa sufitowa złota HARMONY 6 GOLD",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_2.webp",
        price: 1359,
        status: "deactive",
        rating: {
            value: 3.2,
            votes: 41,
        },
        sales: 4539,
        trend: {
            direction: "up" as Direction,
            value: 15,
        },
        views: 32,
    },
    {
        title: "Czarno-złota potrójna lampa sufitowa z serii BATON 7855",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_3.webp",
        price: 599,
        status: "active",
        rating: {
            value: 4.2,
            votes: 329,
        },
        sales: 23470,
        trend: {
            direction: "down" as Direction,
            value: 21,
        },
        views: 78,
    },
    {
        title: "Betonowa lampa sufitowa z mosiężnymi elementami KORTA 3",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp.webp",
        price: 1819,
        status: "active",
        rating: {
            value: 4.5,
            votes: 99,
        },
        sales: 12318,
        trend: {
            direction: "up" as Direction,
            value: 45,
        },
        views: 43,
    },
    {
        title: "Lampa sufitowa złota HARMONY 6 GOLD",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_2.webp",
        price: 1359,
        status: "deactive",
        rating: {
            value: 3.2,
            votes: 41,
        },
        sales: 4539,
        trend: {
            direction: "up" as Direction,
            value: 15,
        },
        views: 32,
    },
    {
        title: "Czarno-złota potrójna lampa sufitowa z serii BATON 7855",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_3.webp",
        price: 599,
        status: "active",
        rating: {
            value: 4.2,
            votes: 329,
        },
        sales: 23470,
        trend: {
            direction: "down" as Direction,
            value: 21,
        },
        views: 78,
    },
    {
        title: "Betonowa lampa sufitowa z mosiężnymi elementami KORTA 3",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp.webp",
        price: 1819,
        status: "active",
        rating: {
            value: 4.5,
            votes: 99,
        },
        sales: 12318,
        trend: {
            direction: "up" as Direction,
            value: 45,
        },
        views: 43,
    },
    {
        title: "Lampa sufitowa złota HARMONY 6 GOLD",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_2.webp",
        price: 1359,
        status: "deactive",
        rating: {
            value: 3.2,
            votes: 41,
        },
        sales: 4539,
        trend: {
            direction: "up" as Direction,
            value: 15,
        },
        views: 32,
    },
    {
        title: "Czarno-złota potrójna lampa sufitowa z serii BATON 7855",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_3.webp",
        price: 599,
        status: "active",
        rating: {
            value: 4.2,
            votes: 329,
        },
        sales: 23470,
        trend: {
            direction: "down" as Direction,
            value: 21,
        },
        views: 78,
    },
    {
        title: "Betonowa lampa sufitowa z mosiężnymi elementami KORTA 3",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp.webp",
        price: 1819,
        status: "active",
        rating: {
            value: 4.5,
            votes: 99,
        },
        sales: 12318,
        trend: {
            direction: "up" as Direction,
            value: 45,
        },
        views: 43,
    },
    {
        title: "Lampa sufitowa złota HARMONY 6 GOLD",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_2.webp",
        price: 1359,
        status: "deactive",
        rating: {
            value: 3.2,
            votes: 41,
        },
        sales: 4539,
        trend: {
            direction: "up" as Direction,
            value: 15,
        },
        views: 32,
    },
    {
        title: "Czarno-złota potrójna lampa sufitowa z serii BATON 7855",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_3.webp",
        price: 599,
        status: "active",
        rating: {
            value: 4.2,
            votes: 329,
        },
        sales: 23470,
        trend: {
            direction: "down" as Direction,
            value: 21,
        },
        views: 78,
    },
    {
        title: "Betonowa lampa sufitowa z mosiężnymi elementami KORTA 3",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp.webp",
        price: 1819,
        status: "active",
        rating: {
            value: 4.5,
            votes: 99,
        },
        sales: 12318,
        trend: {
            direction: "up" as Direction,
            value: 45,
        },
        views: 43,
    },
    {
        title: "Lampa sufitowa złota HARMONY 6 GOLD",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_2.webp",
        price: 1359,
        status: "deactive",
        rating: {
            value: 3.2,
            votes: 41,
        },
        sales: 4539,
        trend: {
            direction: "up" as Direction,
            value: 15,
        },
        views: 32,
    },
    {
        title: "Czarno-złota potrójna lampa sufitowa z serii BATON 7855",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_3.webp",
        price: 599,
        status: "active",
        rating: {
            value: 4.2,
            votes: 329,
        },
        sales: 23470,
        trend: {
            direction: "down" as Direction,
            value: 21,
        },
        views: 78,
    },
    {
        title: "Betonowa lampa sufitowa z mosiężnymi elementami KORTA 3",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp.webp",
        price: 1819,
        status: "active",
        rating: {
            value: 4.5,
            votes: 99,
        },
        sales: 12318,
        trend: {
            direction: "up" as Direction,
            value: 45,
        },
        views: 43,
    },
    {
        title: "Lampa sufitowa złota HARMONY 6 GOLD",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_2.webp",
        price: 1359,
        status: "deactive",
        rating: {
            value: 3.2,
            votes: 41,
        },
        sales: 4539,
        trend: {
            direction: "up" as Direction,
            value: 15,
        },
        views: 32,
    },
    {
        title: "Czarno-złota potrójna lampa sufitowa z serii BATON 7855",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_3.webp",
        price: 599,
        status: "active",
        rating: {
            value: 4.2,
            votes: 329,
        },
        sales: 23470,
        trend: {
            direction: "down" as Direction,
            value: 21,
        },
        views: 78,
    },
    {
        title: "Betonowa lampa sufitowa z mosiężnymi elementami KORTA 3",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp.webp",
        price: 1819,
        status: "active",
        rating: {
            value: 4.5,
            votes: 99,
        },
        sales: 12318,
        trend: {
            direction: "up" as Direction,
            value: 45,
        },
        views: 43,
    },
    {
        title: "Lampa sufitowa złota HARMONY 6 GOLD",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_2.webp",
        price: 1359,
        status: "deactive",
        rating: {
            value: 3.2,
            votes: 41,
        },
        sales: 4539,
        trend: {
            direction: "up" as Direction,
            value: 15,
        },
        views: 32,
    },
    {
        title: "Czarno-złota potrójna lampa sufitowa z serii BATON 7855",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_3.webp",
        price: 599,
        status: "active",
        rating: {
            value: 4.2,
            votes: 329,
        },
        sales: 23470,
        trend: {
            direction: "down" as Direction,
            value: 21,
        },
        views: 78,
    },
    {
        title: "Betonowa lampa sufitowa z mosiężnymi elementami KORTA 3",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp.webp",
        price: 1819,
        status: "active",
        rating: {
            value: 4.5,
            votes: 99,
        },
        sales: 12318,
        trend: {
            direction: "up" as Direction,
            value: 45,
        },
        views: 43,
    },
    {
        title: "Lampa sufitowa złota HARMONY 6 GOLD",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_2.webp",
        price: 1359,
        status: "deactive",
        rating: {
            value: 3.2,
            votes: 41,
        },
        sales: 4539,
        trend: {
            direction: "up" as Direction,
            value: 15,
        },
        views: 32,
    },
    {
        title: "Czarno-złota potrójna lampa sufitowa z serii BATON 7855",
        category: "Lampa wisząca",
        image: "/images/example/example_lamp_3.webp",
        price: 599,
        status: "active",
        rating: {
            value: 4.2,
            votes: 329,
        },
        sales: 23470,
        trend: {
            direction: "down" as Direction,
            value: 21,
        },
        views: 78,
    },
];

const ProductTable = () => {
    return (
        <div>
            <div className="table w-full text-left border-collapse table-auto">
                <div className="table-header-group text-sm ">
                    <div className="table-row border-b border-pink-400 dark:border-pink-900">
                        <div className="table-cell px-3 py-5">
                            <div className="w-5 h-5 border border-pink-400 rounded dark:border-pink-900 dark:bg-black-600"></div>
                        </div>
                        <div className="table-cell px-3 py-5">Product</div>
                        <div className="table-cell px-3 py-5">Price</div>
                        <div className="table-cell px-3 py-5">Status</div>
                        <div className="table-cell px-3 py-5">Rating</div>
                        <div className="table-cell px-3 py-5">Sales</div>
                        <div className="table-cell px-3 py-5">Views</div>
                    </div>
                </div>
                {FakeItemsDb.map((item, index) => (
                    <ProductTableItem
                        key={index}
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                        status={item.status as Status}
                        rating={item.rating}
                        sales={item.sales}
                        trend={item.trend}
                        views={item.views}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductTable;
