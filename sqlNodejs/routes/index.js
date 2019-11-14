module.exports = {
    homePage: (req, res) => {
        let query = "SELECT * FROM `players` "; //player ko sabai details  database lao sodera leney code

        // tyo query lai execute garcha
        db.query(query, (err, result) => {
            if (err) {//samasya aae mah home page mah 
                res.redirect('/');
            }
            //results aee mah welcome page mah 
            res.render('index.ejs', {
                title: 'Welcome to fo0tsal | View Players'
                ,players: result
            });
        });
    },
};