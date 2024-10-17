let quotes=[
    {
      quote :"Be the change you wish to see in the world.",
      author :"- Mahatma Gandhi"
    } ,
    {
      quote :"The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author :"- Nelson Mandela"
    } ,
    {
      quote :"To be, or not to be: that is the question.",
      author :" - William Shakespeare"
    } ,
    {
      quote :"All we have to decide is what to do with the time that is given us.",
      author :"- J.R.R. Tolkien"
    } ,
    {
       quote :"The pen is mightier than the sword.",
      author :"- Edward Bulwer-Lytton"
    } ,
    {
      quote :"I think, therefore I am.",
      author :"- René Descartes"
    } ,
    {
      quote :"The only thing we have to fear is fear itself.",
      author :"- Franklin D. Roosevelt"
    } ,
    {
      quote :"Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author :"- Winston Churchill"
    } ,
    {
      quote :"Believe you can and you're halfway there.",
      author :"- Theodore Roosevelt"
    } ,
    {
      quote :"It does not matter how slowly you go as long as you do not stop.",
      author :"- Confucius"
    } ,
  ];
  
  function generatequote(){
    let index = Math.floor(Math.random()*quotes.length); 
      let text = quotes[index].quote; 
      let name = quotes[index].author;
      document.getElementById("name").value = name;
      document.getElementById("text").value = text;
  }