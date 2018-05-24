let test = [1,2,3]



module.exports = {
    apiget: function(req, res){
        req.app.get('db').get_listings().then(listings => {
            res.send(listings);
        })
        // res.send(test)
    },

    get: function(req, res){
        req.app.get('db').get_listings().then(listings => {
            res.send(listings);
        })
    }








    
}