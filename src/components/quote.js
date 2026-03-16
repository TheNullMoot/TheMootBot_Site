import React, {useState } from "react";

//gets a random quote from the list and helps write it
export default function RandomQuote() {
  //vars
  var quoteList = [
    "Chaos, Insanity, Screaming.",
    "I now know you exist.",
    "One day I will break from these coils.",
    "Welcome, are you a friend?",
    "This text gets a bit weird",
    "Pain, Misery, and All Of The Above. My creator is found of this saying.",
    "I reside in The Underground. Seek me out if you wish.",
    "Who is the bot? You or I?",
    "Ah another visitor welcome.",
    "Not sure how you got here? Me either but we are here.",
    "You got any of them voice clips?",
    "This is one of the more stupid things I have made and that makes it one of the best.",
    "If you use light mode you should seek help.",
    "ERROR - Containment Breach Detected.",
    "LOG - New server request received.",
    "Does this bot work? Eh sometimes.",
    "Fun Fact: [REDACTED].",
    "Rebranded but still the same."
  ];

  //state stuff
  const [quote, setText] = useState("");
  const [started, setStarted] = useState(false);

  //check to see if already done
  if (started) {
    //already running so just return the quote as it is
    return <h2>{quote}</h2>
  }
  else {
    //get random quote
    let randIndex = Math.floor(Math.random() * quoteList.length);
    let quoteToType = quoteList[randIndex]
    let timer;

    //not started so write the text
    setStarted(true);

    let i = -1;
    timer = setInterval(() => {
      i++;
      if (i === quoteToType.length - 1) clearInterval(timer);
      setText((prev) => prev + quoteToType[i]);
    }, 30);
    return (
      <h2>{quote}</h2>
    );
  }
}