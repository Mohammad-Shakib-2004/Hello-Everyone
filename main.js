// Selecting elements
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const whyNoDiv = document.getElementById('why-no');
const messageBox = document.getElementById('message-box');
const messageText = document.getElementById('message-text');
const noReasonForm = document.getElementById('no-reason-form');
const requestText = document.getElementById('request-text');

// Array of different messages to request friendship in new ways
const friendRequests = [
    "Hi! 😊 Would you like to be friends with Mohammad Shakib?",
    "Hey there! 😁 Would you reconsider being friends with Mohammad Shakib?",
    "You seem nice! Would you give a chance to Mohammad Shakib to be your friend? 🥺",
    "Come on, it will be fun! 😄 Will you be friends with Mohammad Shakib?",
    "It'll be great! 🥰 Will you be friends with Mohammad Shakib this time?"
];

let requestCount = 0;

// Event listener for 'Yes' button
yesBtn.addEventListener('click', () => {
    messageText.innerHTML = "🎉 Congratulations! Welcome to the friendship world of Mohammad Shakib! 😊 You're now a special friend!";
    messageBox.style.display = 'block';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    whyNoDiv.style.display = 'none';
});

// Event listener for 'No' button
noBtn.addEventListener('click', () => {
    whyNoDiv.style.display = 'block';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});

// Event listener for form submission (after selecting 'No')
noReasonForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show message box
    messageText.innerHTML = "It's okay, you'll be friends with Mohammad Shakib soon! 😄";
    messageBox.style.display = 'block';
    whyNoDiv.style.display = 'none';

    // Wait 2 seconds and ask again with a different message
    setTimeout(() => {
        requestCount++;
        messageBox.style.display = 'none';
        yesBtn.style.display = 'inline-block';
        noBtn.style.display = 'inline-block';
        // Cycle through the array of friend request messages
        requestText.innerHTML = friendRequests[requestCount % friendRequests.length];
    }, 2000);
});
