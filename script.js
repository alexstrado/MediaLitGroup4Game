const storyText = document.getElementById('story-text');
const choicesDiv = document.getElementById('choices');

let currentScene = 'start';

const scenes = {
    start: {
        text: "Would you like to start?",
        background: 'images/Cuh.jpg',
        choices: [
            { text: 'Yurrr', nextScene: 'start1' },
        ]
    },
        start1: {
            text: "There is a student who lives in Beverly Hills in Cebu. He has a prosperous and high quality of life where he continues to keep learning more about the world. Currently, he is studying as a Senior High School student where he is close to learning enough to adapt to the real world as he enters college in the near future.",
            background: 'images/Cuh.jpg.',
            choices: [
                { text: 'Continue...', nextScene: 'A1' }
            ]
        },
        A1: {
            text: `One day, after finishing school, he went for a drink at home. Does he decide to drink?`,
            choices: [
                { text: 'Yes, I love drunk driving', nextScene: 'Choice1Plot' },
                { text: 'No, to drinking', nextScene: 'A2v2' }
            ]
        },
        A1v2: {
            text: `Click the different variatwions of no 27 times for a suprise! or say no and continue with the story`,
            choices: [
                { text: 'Continue...', nextScene: 'A2' },
            ]
        },
        A2: {
            text: "Are you sure you don't want to drink?",
            choices: [
                { text: 'Yes', nextScene: 'A3' },   
                { text: 'No', nextScene: 'loses_temptation' }
            ]
        },
        A3: {
            text: "Are you really, really sure?",
            choices: [
                { text: 'Yes I am', nextScene: 'A4' },
                { text: 'No', nextScene: 'loses_temptation' }
            ]
        },
        A4: {
            text: "Come on, are you absolutely sure about this?",
            choices: [
                { text: 'I ABSOLUTELY dont want to drink', nextScene: 'A5' },
                { text: 'A sip wont hurt right?', nextScene: 'loses_temptation' }
            ]
        },
        A5: {
            text: "Is there any reason you won't drink?",
            choices: [
                { text: 'I just dont wanna', nextScene: 'A6' },
                { text: 'A sip looks mighty tasty right now', nextScene: 'loses_temptation' }
            ]
        },
        A6: {
            text: "Are you really, REALLY sure you're not drinking?",
            choices: [
                { text: 'I am very very sure', nextScene: 'A7' },
                { text: 'Drinking is good', nextScene: 'loses_temptation' }
            ]
        },
        A7: {
            text: "You can still change your mind. Are you sure?",
            choices: [
                { text: 'I wont change my mind', nextScene: 'A8' },
                { text: 'Imma drink', nextScene: 'loses_temptation' }
            ]
        },
        A8: {
            text: "Are you absolutely, positively certain?",
            choices: [
                { text: 'Yuh uh', nextScene: 'A9' },
                { text: 'Nuh uh', nextScene: 'loses_temptation' }
            ]
        },
        A9: {
            text: "I thought you'd give in by now. Are you sure?",
            choices: [
                { text: 'Yurrr', nextScene: 'A10' },
                { text: 'Naurr', nextScene: 'loses_temptation' }
            ]
        },
        A10: {
            text: "This is getting interesting. Are you certain about your decision?",
            choices: [
                { text: 'Im diamond 1', nextScene: 'A11' },
                { text: 'Im plastic 1', nextScene: 'loses_temptation' }
            ]
        },
        A11: {
            text: "You're really holding strong. Are you still sure?",
            choices: [
                { text: 'Momma told me im a strong boy', nextScene: 'A12' },
                { text: 'Im weak to temptation', nextScene: 'loses_temptation' }
            ]
        },
        A12: {
            text: "Wow, 12 times now. Are you still committed?",
            choices: [
                { text: '12th times the charm or whatever', nextScene: 'A13' },
                { text: 'Imma drink', nextScene: 'loses_temptation' }
            ]
        },
        A13: {
            text: "You must really be sure. Are you certain?",
            choices: [
                { text: 'Yessirrr', nextScene: 'A14' },
                { text: 'Nope im drinking', nextScene: 'loses_temptation' }
            ]
        },
        A14: {
            text: "Are you positive you’re not drinking? Please answer!",
            choices: [
                { text: 'Yasss queen', nextScene: 'A15' },
                { text: 'Negative imma drink', nextScene: 'loses_temptation' }
            ]
        },
        A15: {
            text: "Is there anything that could change your mind?",
            choices: [
                { text: 'Definitely not drinking', nextScene: 'A16' },
                { text: 'Bring me another beer', nextScene: 'loses_temptation' }
            ]
        },
        A16: {
            text: "Are you really absolutely sure? No turning back now!",
            choices: [
                { text: 'Theres nothing behind me right?', nextScene: 'A17' },
                { text: 'Nope imma drink', nextScene: 'loses_temptation' }
            ]
        },
        A17: {
            text: "You’ve been asked 17 times now! Are you still sure?",
            choices: [
                { text: '17"s my age!', nextScene: 'A18' },
                { text: 'Imma drink', nextScene: 'loses_temptation' }
            ]
        },
        A18: {
            text: "This is incredible. Do you want to change your mind?",
            choices: [
                { text: 'Nah i stil l got this', nextScene: 'A19' },
                { text: 'Nah imma drink', nextScene: 'loses_temptation' }
            ]
        },
        A19: {
            text: "Are you really this dedicated to not drinking?",
            choices: [
                { text: 'Im a man of Christ', nextScene: 'A20' },
                { text: 'Nope ill drink', nextScene: 'loses_temptation' }
            ]
        },
        A20: {
            text: "Is this some kind of test for your willpower?",
            choices: [
                { text: 'My will is the will of God', nextScene: 'A21' },
                { text: 'Nope im weak imma drink', nextScene: 'loses_temptation' }
            ]
        },
        A21: {
            text: "You’ve made it this far. Are you sure you don’t want a drink?",
            choices: [
                { text: 'Yuh', nextScene: 'A22' },
                { text: 'Maybe a sip', nextScene: 'loses_temptation' }
            ]
        },
        A22: {
            text: "This is impressive. Still no drink?",
            choices: [
                { text: 'I abstain from drinking', nextScene: 'A23' },
                { text: 'imma drink', nextScene: 'loses_temptation' }
            ]
        },
        A23: {
            text: "You’ve said yes so many times! Are you sure?",
            choices: [
                { text: 'Yeah im still sure', nextScene: 'A24' },
                { text: 'I want a sip', nextScene: 'loses_temptation' }
            ]
        },
        A24: {
            text: "Come on, one more time? Are you sure you’re not drinking?",
            choices: [
                { text: 'I aint drinking', nextScene: 'A25' },
                { text: 'A sip would be nice', nextScene: 'loses_temptation' }
            ]
        },
        A25: {
            text: "Are you feeling proud of yourself yet?",
            choices: [
                { text: 'I feel so satisfied', nextScene: 'A26' },
                { text: 'Nope I feel the urge to drink', nextScene: 'loses_temptation' }
            ]
        },
        A26: {
            text: "This is the 26th time. Are you sure about this decision?",
            choices: [
                { text: 'Yurrrrrr', nextScene: 'End1' },
                { text: 'Renaur', nextScene: 'loses_temptation' }
            ]
        },
        End1: {
            text: "Congratulations! You've shown incredible patience and determination. You've reached the 'Good Boy' ending! You win!",
            choices: [
                { text: 'Play Again', nextScene: 'start' }
            ]
        },
        loses_temptation: {
            text: "You fall into temptation and take a sip, then another, then another, then...",
            choices: [
                { text: 'Sip...', nextScene: 'Choice1Plot' }
            ]
        },
        Choice1Plot: {
            text: `The student gets drunk and then remembers that he needs to buy ice cream. Off he goes to the grocery store—but things take a turn.`,
            background: 'Images/DrunkDriving.jpg.',
            choices: [
                { text: 'Continue...', nextScene: 'Choice1' },
                ]
            },
    Choice1: {
    text: `On his way, a black plastic bag covers the traffic light due to a typhoon's winds...`,
    choices: [
        { text: 'Try to Drive Carefully', nextScene: 'Choice1v1' },
        { text: 'Press the gas need for speed style', nextScene: 'Choice1v2' }
        ]
    },
        Choice1v1: {
        text: "You almost succeeded, but crash into a tree!",
        background: 'images/CarCrash.jpg',
            choices: [
                { text: 'Slowly get back up and walk around in a daze.', nextScene: 'Choice1v1_1'},
                { text: 'Get back into the car and try to drive again.', nextScene: 'Choice1v1_2'}
            ]
        },
            Choice1v1_1: {
                text: "As you walk around in a daze you slowly arrive at Barangay Kamputhaw",
                background: 'images/Drunk.jpg',
                    choices: [
                        { text: 'Go inside', nextScene: 'Escapes'},
                        { text: 'Turn around and walk into the abyss', nextScene: 'Choice1v1_END'}
                    ]
                },
                    Choice1v1_END: {
                        text: "You got lost wandering in the dungeon of fear and hunger...",
                        background: "images/Fear.jpg",
                            choices: [
                                { text: 'Start Over', nextScene: 'start'},
                            ]
                        },
            Choice1v1_2: {
                text: "As you try to drive again but this time drunk and bruised up, you hit another car then the driver angrily gets out of the car",
                background: "images/rearend.jpg",
                    choices: [
                        { text: 'Square up', nextScene: 'Choice1v1_ENDINGv2'},
                        { text: 'Run like a coward', nextScene: 'Escapes'},
                        { text: 'Take the blame', nextScene: 'Choice1v1_SIKE'},
                    ]
            },
                    Choice1v1_SIKE: {
                        text: 'As you bown down to apologise suddenly you run screaming "SIKE YOU THOUGHT"',
                            choices: [
                                {text: 'Embarassingly fall down', nextScene: 'Choice1v1_Embarassing'},
                                {text: 'Embarassingly Slip on the rain', nextScene: 'Choice1v1_Embarassing'}
                            ]
                            },
                                    Choice1v1_Embarassing: {
                                        text: 'The man catches up and pulls you up by your shirt',
                                        choices: [
                                            {text: 'Square up', nextScene: 'Choice1v1_Endingv2'},
                                        ]
                                    },
                    Choice1v1_ENDINGv2: {
                        text: 'You end up in a fistfight and embarassingly you LOST!',
                        background: 'images/beat.jpg.',
                        choices: [
                            { text: 'Start Over', nextScene: 'start'}]
},
    Choice1v2: {
        text: 'You went full speed ahead and hit another car this sets off a chain reaction. The drivers are now furious what do you do?',
        background: "images/roadrage.jpg",
            choices: [
                {text: 'Taunt them into a fight', nextScene: 'Choice1v2_1'},
                {text: 'Make a run for it', nextScene: 'Escapes'},
            ]
    },
                Choice1v2_1: {
                    text: 'You successfully used taunt! and reduced 25% of their accuracy',
                    choices: [
                        {text: 'Use Flamethrower', nextScene: 'Choice1v2_ENDING'},
                        {text: 'Use Tackle', nextScene: 'Choice1v2_ENDINGv2'}
                    ]
                },
                    Choice1v2_ENDING: {
                        text: 'It was very effective!',
                        background: 'images/Charizard.jpg',
                        choices: [
                            {text: 'Continue on...', nextScene: 'Choice1a2'},
                        ]
                    },
                        Choice1a2: {
                            text: 'Continue on your journey',
                            background: 'images/Charizard.jpg',
                            choices: [
                                {text: 'Gonna catch em all', nextScene: 'EscapesV2'},
                            ]
                        },
                    Choice1v2_ENDINGv2: {
                        text: 'You missed! You got beaten up. Game Over',
                        background: 'images/beat.jpg.',
                        choices: [
                            {text: 'Start Over', nextScene: 'start'},
                        ]
                    },
    Escapes: {
        text: "You found yourself in a random street in Barangay Kamputhaw",
        background: 'images/Kamputhaw.jpg',
        choices: [
            { text: 'Talk to the locals', nextScene: 'Choice2' },
            { text: 'Leave the streets', nextScene: 'EscapesLoop' }
        ]
    },
        EscapesV2: {
            text: "After beating people up with your Charizard you find yourself in Barangay Kamputhaw",
            background: 'images/Kamputhaw.jpg',
            choices: [
                { text: 'Talk to the locals', nextScene: 'Choice2' },
                { text: 'Leave the streets', nextScene: 'EscapesLoop' }
            ]
        },
            EscapesLoop: {
                text: "You found yourself in a timeloop!",
                background: 'images/Loop.jpg',
                choices: [
                    {text: 'Continue trying to leave', nextScene: 'EscapeLoop1'},
                    {text: 'Go inside Barangay Kamputhaw', nextScene: 'Escapes'}
                ]
            },
            EscapeLoop1: {
                text: "You try again, but you find yourself in the same place. It's like you're stuck in a time loop!",
                background: 'images/Loop.jpg',
                choices: [
                    { text: 'Continue trying to leave', nextScene: 'EscapeLoop2' },
                    { text: 'Go inside Barangay Kamputhaw', nextScene: 'Escapes' }
                ]
            },
            EscapeLoop2: {
                text: "Again, you're stuck in the same situation. You realize you're caught in a loop.",
                background: 'images/Loop.jpg',
                choices: [
                    { text: 'Continue trying to leave', nextScene: 'EscapeLoop3' },
                    { text: 'Go inside Barangay Kamputhaw', nextScene: 'Escapes' }
                ]
            },
            EscapeLoop3: {
                text: "You're still stuck. This is starting to get frustrating.",
                background: 'images/Loop.jpg',
                choices: [
                    { text: 'Continue trying to leave', nextScene: 'EscapeLoop4' },
                    { text: 'Go inside Barangay Kamputhaw', nextScene: 'Escapes' }
                ]
            },
            EscapeLoop4: {
                text: "Once again, you find yourself back where you started. This is beginning to feel like a never-ending cycle.",
                background: 'images/Loop.jpg',
                choices: [
                    { text: 'Continue trying to leave', nextScene: 'EscapeLoop5' },
                    { text: 'Go inside Barangay Kamputhaw', nextScene: 'Escapes' }
                ]
            },
            EscapeLoop5: {
                text: "The loop continues. Are you ever going to escape?",
                background: 'images/Loop.jpg',
                choices: [
                    { text: 'Continue trying to leave', nextScene: 'EscapeLoop6' },
                    { text: 'Give up and go inside Barangay Kamputhaw instead', nextScene: 'Escapes' }
                ]
            }, 
            EscapeLoop6: {
                text: "You feel like you're losing your mind. The same choices over and over again.",
                background: 'images/Loop.jpg',
                choices: [
                    { text: 'Continue trying to leave', nextScene: 'EscapeLoop7' },
                    { text: 'Go inside Barangay Kamputhaw', nextScene: 'Escapes' }
                ]
            },
            EscapeLoop7: {
                text: "This is it! You've been stuck in the loop for so long. What will you do now?",
                background: 'images/Loop.jpg',
                choices: [
                    { text: 'Break the loop', nextScene: 'EscapeLoop8' },
                    { text: 'Go inside Barangay Kamputhaw', nextScene: 'Escapes' }
                ]
            },
            EscapeLoop8: {
                text: "You finally break free from the loop! You've managed to escape.",
                background: 'images/Loop.jpg',
                choices: [
                    { text: 'Start Over...?', nextScene: 'EscapeLoopEnd' }
                ]
            },
            EscapeLoopEnd: {
                text: "You woke up! but this time in the start of the loop what do you do?",
                background: 'images/Loop.jpg',
                choices: [
                    {text: 'Try to leave', nextScene: 'EscapeLoop1'},
                    {text: 'Go inside Barangay Kamputhaw', nextScene: 'Escapes'}
                ]
            },
    Choice2: {
        text: "As you learn about their struggles. Some share touching stories, and you feel a deep sense of responsibility.",
        choices: [
            {text: 'Continue...', nextScene: 'Choice3'}
        ]
    },
    Choice3: {
        text: "With your intelligence and money, you have the chance to make something good out of this and change their lives.",
        choices: [
            {text: 'Create a project to help the residents.', nextScene: 'Choice4'},
            {text: 'Forget the project, party hard!.', nextScene: 'Choice3v1'}
        ]
    },
            Choice3v1: {
                text: "As you party hard on your yacht your ex angrily goes up to you",
                background: 'images/Yacht.jpg',
                    choices: [
                        {text: 'Completly ignore her and continue partying', nextScene: "Choice3v1_END"},
                        {text: 'Run away and hide in your room', nextScene: "Choice3v1_1"}
                    ]
            },
                    Choice3v1_END: {
                        text: "As you ignore her she dashes at you knocking you off the yacht into the sea",
                            choices: [
                                {text: 'Swim to a nearby island', nextScene: "Choice3v1_END_Stranded"},
                                {text: 'Give up', nextScene: "start"}
                            ]
                        },
                                Choice3v1_END_Stranded: {
                                    text: "Stranded on a lost island you make a little friend out of a volleyball",
                                    background: 'images/Stranded.jpg.',
                                    choices: [
                                        {text: 'I cant see...', nextScene: "SkyrimEnding"},
                                    ]
                                },
                                SkyrimEnding: {
                                    text: "After awhile without food or water you passout... but you hear a faint voice calling you..?",
                                    choices: [
                                        { text: 'Continue...', nextScene: 'SKYRIM'},
                                    ]
                                },
                                SKYRIM: {
                                    text: "Hey, you. You’re finally awake. You were trying to cross the border, right? Walked right into that Imperial ambush, same as us, and that thief over there.",
                                    video: "images/Skyrim.mp4",
                                    choices: [
                                        { text: 'Wakeup from the dream', nextScene: "start"},
                                    ]
                                },
            Choice3v1_1: {
                text: "As you hide in your room you remember about the people in Kamputhaw so you rush home",
                choices: [
                    {text: 'Continue', nextScene: "Choice4"},
                ]
            },
    Choice4: {
        text: "You spend all night building a biogas digester and feel like a genius.",
        background: 'images/Biogas.png',
        choices: [
            {text: 'Continue', nextScene: "Choice5"},
        ]
    },
    Choice5: {
        text: "After spending countless sleepless nights experimenting, you get it right! Your friends seem amazed by your biogas digester that turns trash into renewable energy. It’s a perfect solution!. Now that your project is ready, should you ask your friends to help with the presentation?",
        choices: [
            {text: 'Yes', nextScene: "Choice5v1"},
            {text: 'No', nextScene: "Choice5v2"}
        ]
    },
            Choice5v1: {
                text: "Great idea! But when your friends start telling wild stories, the crowd is laughing so hard that they forget to appreciate your genius project. What do you do next?",
                choices: [
                    {text: 'You kick your friends off the stage', nextScene: "Choice5v2"},
                    {text: 'Start breakdancing to get their attention', nextScene: "Choice5v4"},
                    {text: 'Stay serious and professional.', nextScene: "Choice5v3"}
                ]
            },
            Choice5v2: {
                text: "You start presenting to the residents but they seem bored what do you do?",
                choices: [
                    {text: 'Start breakdancing to get their attention', nextScene: "Choice5v4"},
                    {text: 'Call your friends', nextScene: "Choice5v1"},
                    {text: 'Continue anyways', nextScene: "Choice5v3"}
                ]
            }, 
                    Choice5v4: {
                        text: "You start a break dance battle! What do you do?",
                        video: 'images/Raygun.mp4',
                        choices: [
                            {text: 'Slap your friend', nextScene: 'Choice5v4_1'},
                            {text: 'Give up out of embarrassment', nextScene: 'Choice5v4_2'},
                            {text: 'Do the worm', nextScene: 'Choice5v4_3'},
                            {text: 'Do the griddy', nextScene: 'Choice5v4_4'}
                        ]
                    },
                                Choice5v4_1: {
                                    text: "You slap your friend!",
                                    choices: [
                                        { text: 'Square up', nextScene: 'Choice1v1_ENDINGv2'},
                                        { text: 'Take the blame', nextScene: 'Choice1v1_SIKE'},
                                    ]
                                },
                                Choice5v4_2: {
                                    text: "You gave up! what a loser",
                                    choices: [
                                        { text: 'Start your idea and everything from scratch', nextScene: 'Choice5'},
                                        { text: 'Completely give up', nextScene: 'start'}
                                    ]
                                },
                                Choice5v4_3: {
                                    text: "You successfully do the worm, Sir Arong comes out from the shadows and accepts you as his disciple!",
                                    background: 'images/Cuh.jpg',
                                    choices: [
                                        { text: 'Whats that...?', nextScene: 'Choice5v4_3v1'},
                                        { text: 'Continue your speech', nextScene: 'Choice6'},
                                        { text: 'Start over', nextScene: 'start'}
                                    ]
                                },
                                    Choice5v4_3v1: {
                                        text: "Sir Arong says ,,Its a beautiful day to learn science,, What do you say?",
                                        choices: [
                                            { text: 'Its a beautiful day to learn science', nextScene: 'Choice5v4_3v2'},
                                            { text: 'Refuse to repeat after him!', nextScene: 'Choice5v4_3v1_1'}
                                        ]
                                    },
                                            Choice5v4_3v2: {
                                                text: "You successfully become his disciple becoming the smartest man on Earth solving every scientific crisis ever!",
                                                background: 'images/Gru.jpg',
                                                choices: [
                                                    { text: 'Start over', nextScene: 'start'},
                                                ]
                                            },
                                            Choice5v4_3v1_1: {
                                                text: "FURIOUS you didnt repeat after him Sir Arong gives you a D then you procceed to fail school",
                                                background: 'images/Arong.png',
                                                choices: [
                                                    { text:'womp womp', nextScene: 'start'}
                                                ]
                                            },
                                Choice5v4_4: {
                                    text: "You successfully did the griddy! not only did you beat your friends but you also successfully grabbed the residents attention",
                                    video: 'images/Worm.mp4',
                                    choices: [
                                        { text: 'Explain to the residents about your idea', nextScene: 'Choice6'},
                                    ]
                                },
            Choice5v3: {
                text: "You decided to stay serious and give a long boring speech.",
                choices: [
                    {text: 'Keep yapping', nextScene: 'Choice5v3_1'},
                    {text: 'Embarassingly get off stage and start over', nextScene: "Choice5"}
                ]
            },
                Choice5v3_1: {
                    text: "You start doing it alone but the audience seems bored what do you do?",
                    choices: [
                        {text: 'Start breakdancing to get their attention', nextScene: "Choice5v4"},
                        {text: 'Call your friends', nextScene: "Choice5v1"}
                    ]
                },
    Choice6: {
        text: 'You explain that... biogas digester, where wastes such as paper, food waste, and sewage can be used to become renewable energy through a process called anaerobic digestion, and the energy is usable for things like cooking, vehicle fuel, and other forms of electricity.',
        choices: [
            {text: 'If you think I made that all up I didnt', nextScene: 'Choice7'},
        ]
    },
    Choice7: {
        text: 'After you finished explaining what the biogas digester did you gave it to the residents',
        choices: [
            {text: 'Press T to wait', nextScene: "Choice8"},
        ]
    },
    Choice8: {
        text: 'After awhile you hear news that a local child was playing with the biogas digester and messes it up',
        choices: [
            {text: 'Scold the child harshly', nextScene: "FightIntro"},
            {text: 'Laugh as the child hurts himself', nextScene: "Choice8v3"},
            {text: 'Explain the risks of messing up the biogas digester', nextScene: "Choice8v2",}
        ]
    },
                            FightIntro: {
                                text: 'Your harsh scolding angers the child, and he challenges you to a fistfight! What do you do?',
                                choices: [
                                        { text: 'Accept the challenge', nextScene: "Fight1" },
                                        { text: 'Refuse and walk away', nextScene: "Choice8v2" }
                                ]
                            },
    
                            Fight1: {
                                text: 'Round 1! The child charges at you. What\'s your move?',
                                background: 'images/fight2.jpg',
                                choices: [
                                        { text: 'Jab', nextScene: "Fight3" },
                                        { text: 'Hook', nextScene: "Fight2" },
                                        { text: 'Block', nextScene: "Fight5" }
                                ]
                            },
    
                                Fight2: {
                                    text: 'Round 2! The child takes a defensive stance. What\'s your move?',
                                    background: 'images/fight1.jpg',
                                    choices: [
                                        { text: 'Uppercut', nextScene: "Fight3" },
                                        { text: 'Cross', nextScene: "Fight4" },
                                        { text: 'Defend', nextScene: "Fight1" }
                                ]
                            },
    
                                Fight3: {
                                    text: 'Round 3! The child starts getting serious. What\'s your next move?',
                                    background: 'images/fight3.jpg',
                                    choices: [
                                        { text: 'Hook', nextScene: "Fight4" },
                                        { text: 'Jab', nextScene: "Fight1" },
                                        { text: 'Block', nextScene: "Fight5" }
                                ]
                            },
    
                                Fight4: {
                                    text: 'Round 4! You notice the child is tiring. Time to press your advantage.',
                                    background: 'images/fight3.jpg',
                                    choices: [
                                        { text: 'Cross', nextScene: "Fight2" },
                                        { text: 'Duck', nextScene: "Fight1" },
                                        { text: 'Overhand', nextScene: "Fight6" }
                                ]
                            },
    
                                Fight5: {
                                    text: 'Round 5! The child feints to the left. How do you respond?',
                                    background: 'images/fight2.jpg',
                                    choices: [
                                        { text: 'Uppercut', nextScene: "Fight6" },
                                        { text: 'Defend', nextScene: "Fight3" },
                                        { text: 'Jab', nextScene: "Fight4" }
                                ]
                            },
    
                                Fight6: {
                                    text: 'Round 6! You see an opening but it\'s risky. What do you do?',
                                    background: 'images/fight3.jpg',
                                    choices: [
                                        { text: 'Hook', nextScene: "Fight7" },
                                        { text: 'Block', nextScene: "Fight1" },
                                        { text: 'Miss on purpose', nextScene: "JailEnding" }
                                ]
                            },
    
                                Fight7: {
                                    text: 'Round 7! The child counters aggressively. Your next move?',
                                    background: 'images/fight2.jpg',
                                    choices: [
                                        { text: 'Defend', nextScene: "Fight8" },
                                        { text: 'Counter with a jab', nextScene: "Fight4" },
                                        { text: 'Cross', nextScene: "Fight2" }
                                ]
                            },
    
                                Fight8: {
                                    text: 'Final round! The child is barely standing. Go for the finish!',
                                    background: 'images/fight3.jpg',
                                    choices: [
                                        { text: 'Knockout Punch', nextScene: "Victory" },
                                        { text: 'Taunt the child', nextScene: "Fight8" },
                                        { text: 'Miss intentionally', nextScene: "JailEnding" }
                                ]
                            },
    
                                    Victory: {
                                        text: 'Winner winner chicken dinner! You knock the child out and stand victorious. The crowd cheers (though maybe they shouldn’t).',
                                        background: 'images/fightwin.jpg',
                                        choices: [
                                                { text: 'Celebrate your victory', nextScene: "start" }
                                ]
                            },

                                    JailEnding: {
                                        text: 'You lose control or make a misstep. The fight ends with you being arrested and sent to jail. Not your proudest moment.',
                                        background: 'images/beat.jpg',
                                        choices: [
                                                { text: 'Start Over', nextScene: "start" }
                                ]
                            },
    Choice8v2: {
        text: 'You save the day by explaining proper safety protocols, and everyone feels better.',
        choices: [
            { text: 'Continue', nextScene: "Choice9" }
    ]
    },
    Choice8v3: {
        text: 'The kids curses you to the very beginning of time!',
        choices: [
            { text: 'Oh no', nextScene: "start" },
        ]
        },
    Choice9: {
        text: 'You further explain and tell the residents to use biogas with precautions as directly inhaling biogas is toxic, and biogas digesters should really only be used in really crucial scenarios, either when there is too much waste or not enough energy.',
        choices: [
            { text: 'Continue', nextScene: 'Choice10'},
        ]
    },
    Choice10: {
        text: "However, you realize one of your friends left your camera for the video when you went back home.",
        background: 'images/forgotcamera.jpg.',
        choices: [
            { text: 'Lazily stay at home', nextScene: 'Choice10v2'},
            { text: 'Go back and look for the camera', nextScene:'Choice11'},
        ]
    },
        Choice10v1: {
            text: "You went home laying down on your bed tired.",
            background: 'images/wake.jpg',
            choices: [
                { text: 'Continue', nextScene: 'Choice10'},
            ]
        },
            Choice10v31: {
                    text: "You wake up home confused on what just happened.",
                    choices: [
                        { text: 'It was probably nothing', nextScene: 'Choice10v3'},
                    ]
                },
            Choice10v3: {
                text: "However, you realize one of your friends left your camera for the video when you went back home.",
                choices: [
                    { text: 'Go back and look for the camera', nextScene:'Choice11v2'}
                ]
            },
            Choice10v2: {
                text: "As you lazily stay at home you ended up sleeping, after awhile you hear a voice calling out your name...",
                choices: [
                    { text: 'Oh no not again...', nextScene: 'SKYRIM'},
                ]
            },
    Choice11: {
        text: "As you headback into the street that you did the project in you ask the many residences if theyve seen it. Eventually a little street child was holding onto to prevent it from being stolen.",
        choices: [
            { text: 'Thank the child', nextScene:'Choice12'},
            { text: 'Stare at the child', nextScene:'Choice11_1'}
        ]
    },
            Choice11v2: {
                text: "As you headback into the street that you did the project in you ask the many residences if theyve seen it. Eventually a little street child was holding onto to prevent it from being stolen.",
                choices: [
                    { text: 'Thank the child', nextScene:'Choice12'},
                ]
            },
                Choice11_1: {
                    text: "You blankly stare into the child...",
                    background: 'images/scarykid.png',
                    choices: [
                        { text: 'Stare...', nextScene: 'Choice11_2'},
                        { text: 'Do you stop?', nextScene: 'Choice11v2'}
                    ]
                },
                Choice11_2: {
                    text: "You continue staring lost in thought",
                    background: 'images/scarykid.png',
                    choices: [
                        { text: 'Stare...', nextScene: 'Choice11_3'},
                        { text: 'Do you stop?', nextScene: 'Choice11v2'}
                    ]
                },
                Choice11_3: {
                    text: "Maybe this is all a dream...?",
                    background: 'images/scarykid.png',
                    choices: [
                        { text: 'Stare...', nextScene: 'Choice11_4'},
                        { text: 'Do you stop?', nextScene: 'Choice11v2'}
                    ]
                },
                Choice11_4: {
                    text: "Reality starts to warp...",
                    background: 'images/scarykid.png',
                    choices: [
                        { text: 'Stare...', nextScene: 'Choice11_5'},
                        { text: 'Theres no stopping now', nextScene: 'Choice11_45'}
                    ]
                },
                    Choice11_45: {
                        text: "Theres no stopping",
                        background: 'images/scarykid.png',
                        choices: [
                            { text: 'Stare...', nextScene: 'Choice11_5'},
                        ]
                    },
                Choice11_5: {
                    text: "You wake up!",
                    choices: [
                        { text: 'Bababooey!', nextScene: 'Choice10v31'},
                    ]
                },
    Choice12: {
        text: 'You go back home to... What do you do now?',
        choices: [
            {text: 'Skip dinner and finish the video. ', nextScene: 'Choice12v_1'},
            {text: 'Take a break, eat, and sleep.', nextScene: 'Choice13'}
        ]
    },
        Choice12v2: {
            text: 'You go back home to... What do you do now?',
            choices: [
                {text: 'Take a break, eat, and sleep.', nextScene: 'Choice13'},
            ]
        },
            Choice12v_1: {
                text: "You skipped dinner since you were too tired",
                choices: [
                    {text: 'Lay down in bed and start over the next day', nextScene: 'Choice12v2'},
                    {text: 'Get up and start the sigma grindset', nextScene: 'Choice12Sigma'},
                    {text: 'Decide youre not "him" and just give up', nextScene: 'start'}
                ]
            },
                Choice12v_1: {
                    text: "Because of how sigma you are you got the determination to start your work",
                    choices: [
                        {text: 'You gain Rextons sigma aura', nextScene: 'Choice12a3'},
                    ]
                },
                Choice12a3: {
                    text: "After a long day of the sigma grindset you reveal your work and the people love it",
                    choices: [
                        {text: 'The sigma grindset paid off', nextScene: 'Choice14'},
                    ]
                },
    Choice13: {
        text: 'After a long, hard day, it’s time for the big reveal. The video goes viral, and people love your project.',
        choices: [
                {text: 'Continue...', nextScene: 'Choice14'},
        ]
    },
    Choice14: {
        text: 'You were seen as a hero and recieved alot of praise from the public due to your innovation being an effective solution towards struggling communities. You were also given an award from the school for being a effective role model for others',
        choices: [
                {text: 'Continue...', nextScene: 'Choice15'},
        ]
    },
    Choice15: {
        text: 'You were given a chance to say a quote to inspire others. What do you say?',
        choices: [
                {text: '"A true successful person must pull others up in order for others to be that successful person."', nextScene: 'Choice16_Ending1'},
                {text: '"Mr. Arong, if you are hearing this, spare me my grades through this, thank you."', nextScene: 'Choice16_Ending2'},
                {text: '"Thank you all, and to express my gratitude for all your support, I will do a backflip!"', nextScene: 'Choice16_Ending3'},
        ]
    },
                Choice16_Ending1: {
                    text: 'Everyone looks up to you, and when you have finished Senior High School, you even get accepted into Harvard University and live an even better life.',
                    choices: [
                        {text: 'Start over', nextScene: 'start'},
                    ]
                },
                Choice16_Ending2: {
                    text: 'All the people laugh, and everyone under Mr. Arong’s class passed all his subjects because of you.',
                    choices: [
                        {text: 'Start over', nextScene: 'start'},
                    ]
                },
                Choice16_Ending3: {
                    text: 'When you do the backflip, you fail and land on your back, ultimately realizing that you have actually woken up from a dream, and you do not live in Beverly Hills and instead you are just another homeless person just like the people you saw in your dream!',
                    choices: [
                        {text: 'Start over', nextScene: 'start'},
                    ]
                },
};

function displayScene(sceneName) {
    const scene = scenes[sceneName];
    if (!scene) {
        console.error(`Scene "${sceneName}" not found!`);
        return;
    }

    storyText.textContent = scene.text;

    const existingVideo = document.getElementById('scene-video');
    if (existingVideo) {
        existingVideo.remove();
    }

    if (scene.video) {
        const videoContainer = document.createElement('div');
        videoContainer.id = 'video-container';
        const videoElement = document.createElement('video');
        videoElement.id = 'scene-video';
        videoElement.width = 640;
        videoElement.height = 360;
        videoElement.autoplay = true;
        videoElement.muted = false; 

        videoElement.volume = 0.2;

        const sourceElement = document.createElement('source');
        sourceElement.src = scene.video;
        sourceElement.type = 'video/mp4';
        videoElement.appendChild(sourceElement);
        videoContainer.appendChild(videoElement);
        document.getElementById('game').appendChild(videoContainer);
    }

    if (scene.background) {
        document.body.style.backgroundImage = `url(${scene.background})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    } else {
        document.body.style.backgroundImage = '';
    }

    choicesDiv.innerHTML = '';

    scene.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => {
            button.disabled = true;
            makeChoice(index);
        };
        choicesDiv.appendChild(button);
    });
}

function makeChoice(choiceIndex) {
    const scene = scenes[currentScene];
    if (!scene || choiceIndex < 0 || choiceIndex >= scene.choices.length) {
        console.error(`Invalid choice index: ${choiceIndex}`);
        return;
    }

    const nextScene = scene.choices[choiceIndex].nextScene;
    currentScene = nextScene;
    displayScene(nextScene);
}






