import { BOSS_IMG, SAKURA_IMG, OFFICE_IMG } from "./images";

export const chapter1 = [
    {
      location: OFFICE_IMG,
      pic: BOSS_IMG,
      say: 'Everyone gather around. I have a new colleague to introduce.'
    },
    {
      say: 'This is Sakura. I hope you can give her a warm welcome.'
    },
    {
        pic: SAKURA_IMG,
        say: 'Hello everyone, my name is Sakura. Please take care of me.'
    },
    {
      mono: 'Wow, she\'s so beautiful...'
    },
    {
      mono: 'I hope I can have a chance to work with her.'
    },
    {
      pic: BOSS_IMG,
      say: 'Taro, I\'d like you to take care of introducing Sakura to the team.'
    },
    {
      say: 'We have a new product launch coming up and I want you two to come up with creative ideas for the marketing campagin.'
    },
    {
      choices: [
        {
          say: 'Yes, sir',
          next: {}
        },
        {
          say: 'Sir, are you sure it\'s okay to involve a newbie on this?',
          next: {
            attr: {
              arrogant: 1
            },
            show: {
              pic: SAKURA_IMG,
              say: '...'
            }
          }
        }
      ]
    },
    {
      pic: BOSS_IMG,
      say: 'Sakura, if you have any questions, please ask Taro.'
    },
    {
      pic: SAKURA_IMG,
      say: 'Yes sir, I will. Nice to meet you Taro.'
    },
    {
      choices: [
        {
          say: 'Nice to meet you. Don\'t worry, I\'ll show you how everything is done.',
          next: {
            attr: {
              arrogant: 1
            }
          }
        },
        {
          say: 'Nice to meet you. I look forward to working together.',
          next: {
            attr: {
              friendly: 1
            }
          }
        }
      ]
    },
    {
      pic: SAKURA_IMG,
      say: 'Thanks.'
    },
    {
      transition: 'Later...'
    }
  ];  