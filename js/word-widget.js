function countWords(self) {
  var spaces = self.value.match(/\S+/g);
  var words = spaces ? spaces.length : 0;
  var str = self.value;
  var chrTyped = str.split("").length;

  document.getElementById("words-counter").innerHTML = words + " words" + " "+ chrTyped + " Characters" ;

}


function highlightWords() {
  const getWords = document.querySelector( "#words").value;
  //create a timestamp

  var currentDate = new Date();
  var timestamp = currentDate.toLocaleDateString() + "-" + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

  const senMap = new Map();
  senMap.set("timestamp", timestamp);
  senMap.set("sentence", getWords);

  const SentenceObj = Object.fromEntries(senMap);

  const SentenceStr = JSON.stringify(SentenceObj);

  if(localStorage.getItem('word-widget') === null) {
    localStorage.setItem('word-widget', SentenceStr);
  }
  //update local storage
  // var storeSen = [];
  // var storeSen =  JSON.parse(localStorage.getItem('word-widget'));
  //     storeSen.push(SentenceStr);
  //     console.log(storeSen);
  //     // Save the old and new data to local storage
  //     localStorage.setItem('word-widget', JSON.stringify(storeSen));

  console.log(getWords);
  let output = "";
  let words = getWords.split(" ");
  let replacementword = ""; 
  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length >= 4) {  
      replacementword = "<span class='lightext'>" + word + "</span>";  
    } 
    else {
      replacementword = word;  
    }
    output = output + " " + replacementword + " ";

        //hide all words shorter than 5 characters. 


      }


      const checkBox = "<label for='myCheck'>Hide All Words Shorter Than 5 Characters :</label><input type='checkbox' id='myCheck' onclick='myFunction()'>";
      document.getElementById("demo").innerHTML = checkBox + "<div class='alert alert-dark' role='alert'>" + output + "</div>";

    }


function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    let output = "";
    let replacementword = "";
   const getWords = document.querySelector( "#words").value;
    var newstr = getWords.replace(/(\b(\w{1,5})\b(\s|$))/g,'').split(" ");
    replacementword = "<span class='lightext'>" + newstr + "</span>"; 
    output = output + " " + replacementword + " ";
    console.log(newstr);
    const checkBox = "<label for='myCheck'>Hide All Words Shorter Than 5 Characters :</label><input type='checkbox' id='myCheck' onclick='highlightWords()'>";
    document.getElementById("demo").innerHTML = checkBox + "<div class='alert alert-dark' role='alert'>" + output + "</div>";
  } else {
     text.style.display = "none";
     console.log('hellow');
  }
}





//refresh page
function refreshPage() {
  window.location.reload();
}
