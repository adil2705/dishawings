export const services = [
    { id: 1, name: 'Anxiety & Stress', icon: '😰', description: "Excessive worry, nervousness, or unease that interferes with daily life. Support for managing panic attacks, social anxiety, and generalized stress." },
    { id: 2, name: 'Depression', icon: '😔', description: "Persistent feelings of sadness, hopelessness, and loss of interest in activities. Therapy to help find light, motivation, and emotional balance." },
    { id: 3, name: 'Relationship Issues', icon: '💔', description: "Challenges in communication, trust, or connection with partners, family, or friends. Guidance to build healthier, more fulfilling relationships." },
    { id: 4, name: 'OCD', icon: '🔄', description: "Obsessive-Compulsive Disorder involves unwanted repetitive thoughts and urged actions. evidence-based strategies to break the cycle." },
    { id: 5, name: 'Bipolar Disorder', icon: '🎭', description: "Managing extreme mood swings that include emotional highs (mania) and lows (depression), helping achieve stability and wellness." },
    { id: 6, name: 'Psychosis', icon: '🌀', description: "Support for conditions involving a disconnection from reality, including hallucinations or delusions. Compassionate care for understanding and management." },
    { id: 7, name: 'Grief & Loss', icon: '🕊️', description: "Navigating the intense emotional response to losing a loved one. A safe space to process pain and find a path forward." },
    { id: 8, name: 'Trauma', icon: '💫', description: "Healing from the emotional aftereffects of distressing events. Trauma-informed care to restore a sense of safety and control." },
    { id: 9, name: 'Couple Therapy', icon: '💑', description: "Joint sessions to resolve conflicts, improve communication, and deepen intimacy between partners." },
    { id: 10, name: 'LGBTQIA+', icon: '🏳️‍🌈', description: "Affirmative counseling for gender identity, sexual orientation, coming out, and navigating societal challenges." },
    { id: 11, name: 'ADHD & Teenage Issues', icon: '🧠', description: "Support for attention difficulties, hyperactivity, and distinct challenges faced by adolescents, including academic and social pressures." },
    { id: 12, name: 'Sexual Issues', icon: '💭', description: "Addressing concerns related to sexual function, desire, intimacy, or performance in a judgment-free environment." },
];

export const counselors = [
    {
        id: 1,
        name: 'Dr. Sarah Mitchell',
        photo: 'https://i.pravatar.cc/150?img=1',
        specializations: [1, 2, 7, 8],
        languages: ['English', 'Hindi'],
        availability: 'Mon-Fri, 10 AM - 6 PM',
        experience: '12 years',
    },
    {
        id: 2,
        name: 'Dr. Rahul Sharma',
        photo: 'https://i.pravatar.cc/150?img=12',
        specializations: [3, 9, 12],
        languages: ['English', 'Hindi', 'Marathi'],
        availability: 'Tue-Sat, 2 PM - 8 PM',
        experience: '8 years',
    },
    {
        id: 3,
        name: 'Dr. Priya Desai',
        photo: 'https://i.pravatar.cc/150?img=5',
        specializations: [4, 5, 6, 11],
        languages: ['English', 'Gujarati'],
        availability: 'Mon-Wed, 9 AM - 5 PM',
        experience: '15 years',
    },
    {
        id: 4,
        name: 'Dr. Alex Thompson',
        photo: 'https://i.pravatar.cc/150?img=13',
        specializations: [10, 3, 1],
        languages: ['English'],
        availability: 'Thu-Sun, 11 AM - 7 PM',
        experience: '10 years',
    },
    {
        id: 5,
        name: 'Dr. Meera Iyer',
        photo: 'https://i.pravatar.cc/150?img=9',
        specializations: [2, 7, 8, 1],
        languages: ['English', 'Tamil', 'Malayalam'],
        availability: 'Mon-Fri, 1 PM - 9 PM',
        experience: '14 years',
    },
];

export const trustPoints = [
    {
        icon: 'Shield',
        title: 'Confidential Support',
        description: 'Your conversations are completely private and secure.',
    },
    {
        icon: 'Lock',
        title: 'No Recordings Without Consent',
        description: 'We respect your privacy. Sessions are never recorded without your permission.',
    },
    {
        icon: 'Award',
        title: 'Verified Counselors',
        description: 'All our counselors are licensed professionals with verified credentials.',
    },
    {
        icon: 'Heart',
        title: 'Safe & Respectful Communication',
        description: 'We maintain a judgment-free, empathetic environment for everyone.',
    },
];
