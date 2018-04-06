const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe_30', requireLogin, async (req, res) => {
        console.log(req.body);
        
        const charge = await stripe.charges.create({
            amount: 3000,
            description: '$30 for 30 credits',
            currency: 'usd',
            source: req.body.id
        });
        req.user.credits += 30
        const user = await req.user.save();

        res.send(user);
    });
};

// module.exports = app => {
//     app.post('/api/stripe_60', requireLogin, async (req, res) => {
//         console.log(req.body);
        
//         const charge = await stripe.charges.create({
//             amount: 6000,
//             description: '$60 for 60 credits',
//             currency: 'usd',
//             source: req.body.id
//         });
//         req.user.credits += 60
//         const user = await req.user.save();

//         res.send(user);
//     });
// };

// module.exports = app => {
//     app.post('/api/stripe_20', requireLogin, async (req, res) => {
//         console.log(req.body);
        
//         const charge = await stripe.charges.create({
//             amount: 2000,
//             description: '$20 for 20 credits',
//             currency: 'usd',
//             source: req.body.id
//         });
//         req.user.credits += 20
//         const user = await req.user.save();

//         res.send(user);
//     });
// };