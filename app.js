var express =require('express');
var bodyParser=require('body-parser');
var cors=require('cors');

var app=module.exports=express();
app.use(bodyParser.json());
app.use(cors());

app.get('/date/:dateVal',function(req,res){
  var dateVal=req.params.dateVal;

  var dateFormat={
    year: 'numeric',
    month:'long',
    day:'numeric'
  };
  if(isNaN(dateVal)){
    var naturalDate=new Date(dateVal);

    naturalDate=naturalDate.toLocaleDateString("en-us",dateFormat);

    var unixDate=new Date(dateVal).getTime()/1000;
    console.log(unixDate);
  }else{
    var unixDate=dateVal;
    var naturalDate=new Date(dateVal*1000);
    naturalDate=naturalDate.toLocaleDateString("en-us",dateFormat);
  }
  res.json({unix:unixDate,natural:naturalDate});
});

app.listen(3000,function(){
  console.log('Working');
})
