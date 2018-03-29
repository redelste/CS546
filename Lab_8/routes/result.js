var router = require('express').Router();

router.post('/', async (req, res) =>{
    try{
      let text1 = req.body['text-to-test'];
      if(text1.length == 0){
        res.status(400).render("result/error", {});
        return;
      }
      if(isPalindrome(req.body)) res.render("result/success", {});
      else res.render("result/failure", {});
    } catch (e){
      res.status(404).json({error: "page not found"});
    }
});


function isPalindrome(text){
    let newText = text['text-to-test']
    var og = newText.toLowerCase().replace(/[^\w]|_/g, "");
    var reverse = newText.toLowerCase().replace(/[^\w]|_/g, "").split("").reverse().join("");
    if (og == reverse){
        return true;
    } else{
        return false
    }
  }


module.exports = router;
