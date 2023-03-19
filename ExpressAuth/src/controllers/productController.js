const getProducts = (req, res) => {
//   res.sendFile(
//     "/Users/abhinav/Desktop/Ursa/BE/ExpressAuth/src/views/home.html"
//   );

    // res.sendFile('src/views/home.html', {root: process.env.BASE_PATH})
    const productInfo = {
        name: 'Samsung Tv',
        price:  20000,
        type: 'appliances',
        size: 32
    }
    res.render('home/homeP.pug', productInfo)

  
  // res.send('products');
};

const getCart = (req, res) => {
    // res.sendFile(
    //     "/Users/abhinav/Desktop/Ursa/BE/ExpressAuth/src/views/cart.html"
    // );
    // res.sendFile('src/views/cart.html', {root: process.env.BASE_PATH})

    res.render('about/about.pug')
};

module.exports = { getProducts, getCart };
