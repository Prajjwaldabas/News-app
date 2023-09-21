const User = require('../models/user')


module.exports.saveArticle = async (req,res)=>{

console.log('hello')
    const { article } = req.body;
    const userId = req.user.id; 

    console.log(req.user)
  
    try {
    
      const user = await User.findById(userId);
  
    console.log("savedArctilcle user",user)
    console.log("artcile",article)


      user.saves.push(article);
  
  
      await user.save();
  
      res.sendStatus(200); 
    } catch (error) {
      console.error('An error occurred while saving the article:', error);
      res.status(500).json({ error: 'Internal server error' });
    }



}


module.exports.removeArticle= async(req,res)=>{

    const { article } = req.body;
    const userId = req.user.id;

  
    try {
    
      const user = await User.findById(userId);
  
      user.saves = user.saves.filter(
        (savedArticle) => savedArticle.url !== article.url
      );
  
  
      await user.save();
  
      res.sendStatus(200);
    } catch (error) {
      console.error('An error occurred while removing the article:', error);
      res.status(500).json({ error: 'Internal server error' });
    }

}


module.exports.getSaves = async(req,res)=>{

    try {
     
        const userId = req.user.id;

        const user = await User.findById(userId);
        
        console.log("Saveduser",user)
    
        const savedArticles = user.saves;

        console.log("saved",savedArticles)
    
        res.status(200).json({ savedArticles });
      } catch (error) {
        console.error('Error fetching saved articles:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }

}