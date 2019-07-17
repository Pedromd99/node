const index = (req, res) => {
    res.render('index', {
        title: 'Mi web'
    });
};

const ListofProducts = (req, res, next) => {
    res.render('products', {
        title: 'List of Products',
        items: items
    });
};

const newProduct = (req, res, next) => {
    const {
        newItem
    } = req.body;
    items.push({
        id: items.length + 1,
        name: newItem
    });
    res.redirect('/products');
};


const items = [{
        id: 1,
        name: 'product1'
    },
    {
        id: 2,
        name: 'product2'
    },
    {
        id: 3,
        name: 'product3'
    }
];

module.exports = {
    index,
    ListofProducts,
    newProduct
}