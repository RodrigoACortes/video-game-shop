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

    app.post('/api/current_user_sub_credits', requireLogin, async (req, res) => {
        req.user.credits = req.body.credits
        const u = await req.user.save();
        res.send(u)
    })
};