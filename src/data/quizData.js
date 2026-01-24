export const growthMindsetPairs = [
    // SET 1: STRESS & OVERWHELM
    { id: 1, set: 1, unhelpful: "I can’t handle all this pressure", unhelpfulIcon: "😫", healthy: "I can focus on one thing at a time", icon: "🌱" },
    { id: 2, set: 1, unhelpful: "Everything feels out of control", unhelpfulIcon: "🌊", healthy: "I can’t control everything, and that’s okay", icon: "✨" },
    { id: 3, set: 1, unhelpful: "I’m falling behind", unhelpfulIcon: "⏳", healthy: "Progress matters more than perfection", icon: "🌬️" },
    { id: 4, set: 1, unhelpful: "I don’t have enough energy", unhelpfulIcon: "😔", healthy: "Rest is part of recovery", icon: "❤️" },
    { id: 5, set: 1, unhelpful: "I need to fix everything right now", unhelpfulIcon: "🔥", healthy: "It’s okay to pause before acting", icon: "🌈" },

    // SET 2: SELF-CRITICISM & SELF-WORTH
    { id: 6, set: 2, unhelpful: "I’m not good enough", unhelpfulIcon: "😔", healthy: "I have value, even on hard days", icon: "💎" },
    { id: 7, set: 2, unhelpful: "Others are doing better than me", unhelpfulIcon: "🤳", healthy: "Everyone moves at their own pace", icon: "🐢" },
    { id: 8, set: 2, unhelpful: "I shouldn’t feel this way", unhelpfulIcon: "🚫", healthy: "My feelings are valid", icon: "✅" },
    { id: 9, set: 2, unhelpful: "I always make mistakes", unhelpfulIcon: "❌", healthy: "Mistakes help me grow", icon: "🌱" },
    { id: 10, set: 2, unhelpful: "I’m a burden to others", unhelpfulIcon: "🎒", healthy: "I deserve care and support", icon: "🤝" },

    // SET 3: ANXIETY & FEAR
    { id: 11, set: 3, unhelpful: "Something bad is going to happen", unhelpfulIcon: "😰", healthy: "I can handle things as they come", icon: "🛡️" },
    { id: 12, set: 3, unhelpful: "I won’t be able to cope", unhelpfulIcon: "📉", healthy: "Feelings are temporary, not permanent", icon: "☁️" },
    { id: 13, set: 3, unhelpful: "I must avoid this feeling", unhelpfulIcon: "🏃", healthy: "I can sit with discomfort safely", icon: "🧘" },
    { id: 14, set: 3, unhelpful: "This anxiety defines me", unhelpfulIcon: "🏷️", healthy: "Anxiety is an experience, not my identity", icon: "👤" },
    { id: 15, set: 3, unhelpful: "I can’t calm myself down", unhelpfulIcon: "🌀", healthy: "I can use grounding techniques to help", icon: "⚓" },

    // SET 4: SADNESS & LOW MOOD
    { id: 16, set: 4, unhelpful: "I’ll always feel this way", unhelpfulIcon: "🌧️", healthy: "Feelings can change with time", icon: "🌦️" },
    { id: 17, set: 4, unhelpful: "Nothing brings me joy anymore", unhelpfulIcon: "🌫️", healthy: "Small moments of joy still matter", icon: "🌼" },
    { id: 18, set: 4, unhelpful: "I shouldn’t ask for help", unhelpfulIcon: "🤐", healthy: "Asking for help is a strength", icon: "💪" },
    { id: 19, set: 4, unhelpful: "I’m weak for feeling sad", unhelpfulIcon: "🥀", healthy: "Feeling sad doesn’t mean I’m weak", icon: "🎗️" },
    { id: 20, set: 4, unhelpful: "No one understands me", unhelpfulIcon: "🏚️", healthy: "I’m not alone, even if it feels that way", icon: "🌍" },

    // SET 5: CONNECTION & SUPPORT
    { id: 21, set: 5, unhelpful: "I should deal with this alone", unhelpfulIcon: "🪵", healthy: "Support helps me heal", icon: "🩹" },
    { id: 22, set: 5, unhelpful: "People will judge me", unhelpfulIcon: "👀", healthy: "Many people want to help", icon: "🧡" },
    { id: 23, set: 5, unhelpful: "I don’t want to bother anyone", unhelpfulIcon: "🤫", healthy: "My needs are important", icon: "📢" },
    { id: 24, set: 5, unhelpful: "No one would listen", unhelpfulIcon: "🔇", healthy: "Being open can build connection", icon: "🔗" },
    { id: 25, set: 5, unhelpful: "I don’t deserve support", unhelpfulIcon: "🌑", healthy: "I deserve care and understanding", icon: "☀️" }
];

export const selfReflectionQuestions = [
    {
        id: 1,
        question: "How am I feeling in this moment?",
        options: [
            { text: "Calm and balanced", score: 3 },
            { text: "Slightly uneasy", score: 2 },
            { text: "Overwhelmed or stressed", score: 1 },
            { text: "Unsure or emotionally numb", score: 0 }
        ]
    },
    {
        id: 2,
        question: "Which emotion have I experienced most today?",
        options: [
            { text: "Happiness or contentment", score: 3 },
            { text: "Stress or worry", score: 2 },
            { text: "Sadness or low mood", score: 1 },
            { text: "Irritability or frustration", score: 0 }
        ]
    },
    {
        id: 3,
        question: "Compared to usual, how is my energy level today?",
        options: [
            { text: "Energized and refreshed", score: 3 },
            { text: "About the same", score: 2 },
            { text: "More tired than usual", score: 1 },
            { text: "Completely exhausted", score: 0 }
        ]
    },
    {
        id: 4,
        question: "How well have I taken care of my basic needs today?",
        options: [
            { text: "Very well (sleep, food, hydration)", score: 3 },
            { text: "Fairly well", score: 2 },
            { text: "Not consistently", score: 1 },
            { text: "Not at all", score: 0 }
        ]
    },
    {
        id: 5,
        question: "What has been my main source of stress recently?",
        options: [
            { text: "Work or studies", score: 2 },
            { text: "Relationships", score: 2 },
            { text: "Health or personal concerns", score: 1 },
            { text: "I'm not sure", score: 0 }
        ]
    },
    {
        id: 6,
        question: "How do I feel about my ability to cope right now?",
        options: [
            { text: "I'm managing well", score: 3 },
            { text: "I'm coping, but it's hard", score: 2 },
            { text: "I feel overwhelmed", score: 1 },
            { text: "I feel stuck", score: 0 }
        ]
    },
    {
        id: 7,
        question: "How often have I felt sad, anxious, or irritable lately?",
        options: [
            { text: "Rarely", score: 3 },
            { text: "Sometimes", score: 2 },
            { text: "Often", score: 1 },
            { text: "Almost all the time", score: 0 }
        ]
    },
    {
        id: 8,
        question: "What helps me calm down when I feel stressed?",
        options: [
            { text: "Breathing or mindfulness", score: 3 },
            { text: "Talking to someone", score: 3 },
            { text: "Music, rest, or hobbies", score: 3 },
            { text: "I'm not sure yet", score: 0 }
        ]
    },
    {
        id: 9,
        question: "How would I describe my thoughts lately?",
        options: [
            { text: "Mostly positive", score: 3 },
            { text: "A mix of positive and negative", score: 2 },
            { text: "Mostly negative", score: 1 },
            { text: "Scattered or unclear", score: 0 }
        ]
    },
    {
        id: 10,
        question: "How do I treat myself when I make mistakes?",
        options: [
            { text: "With kindness and understanding", score: 3 },
            { text: "Neutral acceptance", score: 2 },
            { text: "Self-criticism", score: 1 },
            { text: "Harsh judgment", score: 0 }
        ]
    },
    {
        id: 11,
        question: "How hopeful do I feel about the near future?",
        options: [
            { text: "Very hopeful", score: 3 },
            { text: "Somewhat hopeful", score: 2 },
            { text: "Unsure", score: 1 },
            { text: "Not hopeful right now", score: 0 }
        ]
    },
    {
        id: 12,
        question: "Have I lost interest in things I usually enjoy?",
        options: [
            { text: "Not at all", score: 3 },
            { text: "A little", score: 2 },
            { text: "Quite a bit", score: 1 },
            { text: "Almost completely", score: 0 }
        ]
    },
    {
        id: 13,
        question: "How connected do I feel to others right now?",
        options: [
            { text: "Very connected", score: 3 },
            { text: "Somewhat connected", score: 2 },
            { text: "Mostly isolated", score: 1 },
            { text: "Completely disconnected", score: 0 }
        ]
    },
    {
        id: 14,
        question: "Have I noticed changes in my sleep or appetite?",
        options: [
            { text: "No changes", score: 3 },
            { text: "Minor changes", score: 2 },
            { text: "Significant changes", score: 1 },
            { text: "Severe changes", score: 0 }
        ]
    },
    {
        id: 15,
        question: "Do I feel supported by someone in my life?",
        options: [
            { text: "Yes, strongly", score: 3 },
            { text: "Somewhat", score: 2 },
            { text: "Rarely", score: 1 },
            { text: "Not at all", score: 0 }
        ]
    },
    {
        id: 16,
        question: "Is there someone I could talk to right now?",
        options: [
            { text: "Yes, easily", score: 3 },
            { text: "Maybe", score: 2 },
            { text: "Not sure", score: 1 },
            { text: "No", score: 0 }
        ]
    },
    {
        id: 17,
        question: "Do I feel like I need extra or professional support?",
        options: [
            { text: "No, I'm okay", score: 3 },
            { text: "Maybe, I should consider it", score: 2 },
            { text: "Yes, I think so", score: 1 },
            { text: "I'm unsure but open to help", score: 1 }
        ]
    }
];
