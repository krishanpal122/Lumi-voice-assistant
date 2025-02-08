let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text, lang = "hi-GB") {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
}

function wishMe() {
    let hours = new Date().getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good morning, sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good afternoon, sir");
    } else {
        speak("Good evening, sir");
    }
}

window.addEventListener('load', () => {
    wishMe();
});

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    let transcript = event.results[event.resultIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript);
};

recognition.onerror = (event) => {
    speak("Sorry, I couldn't understand. Please try again.");
};

recognition.onend = () => {
    btn.style.display = "flex";
    voice.style.display = "none";
};

btn.addEventListener('click', () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});

function openWebsite(url, name) {
    speak(`Opening ${name}`);
    window.open(url, "_blank");
}

function takeCommand(command) {
    btn.style.display = "flex";
    voice.style.display = "none";

    let massage = command.toLowerCase();

    if (massage.includes("hello") || massage.includes("hey")) {
         speak("Hello , what can I help you with?");
        
            let hours = new Date().getHours();
            if (hours >= 0 && hours < 12) {
                speak("Good morning, sir what can i help you ");
            } else if (hours >= 12 && hours < 16) {
                speak("Good afternoon, sir what can i help you");
            } else {
                speak("Good evening, sir");
            }
        
    } else if (massage.includes("how are you")) {
        speak("my name is lumi . i am your virtual assistant");
    } else if (massage.includes("open youtube")) {
        openWebsite("https://www.youtube.com", "YouTube");
    } else if (massage.includes("open google")) {
        openWebsite("https://www.google.com", "Google");
    } else if (massage.includes("open facebook")) {
        openWebsite("https://www.facebook.com", "Facebook");
    } else if (massage.includes("i love you")) {
        speak(" I love you too");
      }  else if (massage.includes("open incoginito tab")) {
            speak(" https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAjIGCAQQRRg8MgYIBRBFGEEyBggGEEUYPNIBCDM0OThqMGoxqAIAsAIB&sourceid=chrome&ie=UTF-8");
        
    
        
     
    }  else if (massage.includes("open kp's education project")) {
        openWebsite("https://thriving-squirrel-dbe1b2.netlify.app", "KP's Education Project");
    } else if (massage.includes("time")) {
        let time = new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
        speak(`The time is ${time}`);
    } else if (massage.includes("date")) {
        let date = new Date().toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
        speak(`Today's date is ${date}`);
    } else if (massage.includes("kya be")) {
        speak("कृपया अपनी भाषा पर ध्यान दें");
    } else if (massage.includes("open spotify")) {
        openWebsite("https://open.spotify.com/","spotify");
    } else if (massage.includes("play hindi song")) {
        openWebsite("https://www.jiosaavn.com/featured-playlists/hindi", "Hindi songs");
    } else if (massage.includes("play english song")) {
        openWebsite("https://www.jiosaavn.com/featured-playlists/english", "English songs");
    } else if (massage.includes("play old song")) {
        openWebsite("https://wynk.in/music/playlist/hits-of-rishi-kapoor/bb_1557901220080", "old songs");
    } else if (massage.includes("open whatsapp")) {
        openApp("https://wynk.in/music/playlist/hits-of-rishi-kapoor/bb_1557901220080", "old songs");


    } else {
        
        speak(`This is what I found on the internet regarding ${massage}`);
        window.open(`https://www.google.com/search?q=${massage}`, "_blank");
    }
}
