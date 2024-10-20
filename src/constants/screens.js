export const SCREEN_NAME = {
    Start1: 'START_1',
    Start2: 'START_2',
    Leve1Intro: 'LEVEL_1_INTRO',
    Leve1Rules: 'LEVEL_1_RULES',
    Leve1Game: 'LEVEL_1_GAME',
    Leve1Final: 'LEVEL_1_FINAL',
    Leve2Intro: 'LEVEL_2_INTRO',
    Leve2Rules: 'LEVEL_2_RULES',
    Leve2Game: 'LEVEL_2_GAME',
    Leve2Final: 'LEVEL_2_FINAL',
    Leve3Intro: 'LEVEL_3_INTRO',
    Leve3Rules: 'LEVEL_3_RULES',
    Leve3Game: 'LEVEL_3_GAME',
    Leve3Final: 'LEVEL_3_FINAL',
    Final: 'FINAL',
};

export const NEXT_SCREEN = {
    [SCREEN_NAME.Start1]: SCREEN_NAME.Start2,
    [SCREEN_NAME.Start2]: SCREEN_NAME.Leve1Intro,
    [SCREEN_NAME.Leve1Intro]: SCREEN_NAME.Leve1Rules,
    [SCREEN_NAME.Leve1Rules]: SCREEN_NAME.Leve1Game,
    [SCREEN_NAME.Leve1Game]: SCREEN_NAME.Leve1Final,
    [SCREEN_NAME.Leve1Final]: SCREEN_NAME.Leve2Intro,
    [SCREEN_NAME.Leve2Intro]: SCREEN_NAME.Leve2Rules,
    [SCREEN_NAME.Leve2Rules]: SCREEN_NAME.Leve2Game,
    [SCREEN_NAME.Leve2Game]: SCREEN_NAME.Leve2Final,
    [SCREEN_NAME.Leve2Final]: SCREEN_NAME.Leve3Intro,
    [SCREEN_NAME.Leve3Intro]: SCREEN_NAME.Leve3Rules,
    [SCREEN_NAME.Leve3Rules]: SCREEN_NAME.Leve3Game,
    [SCREEN_NAME.Leve3Game]: SCREEN_NAME.Leve3Final,
    [SCREEN_NAME.Leve3Final]: SCREEN_NAME.Final,
    [SCREEN_NAME.Final]: null,
};

export const SCREEN_IMAGES = {
    [SCREEN_NAME.Start1]: [],
    [SCREEN_NAME.Start2]: [],
    [SCREEN_NAME.Leve1Intro]: [],
    [SCREEN_NAME.Leve1Rules]: [],
    [SCREEN_NAME.Leve1Game]: [],
    [SCREEN_NAME.Leve1Final]: [],
    [SCREEN_NAME.Leve2Intro]: [],
    [SCREEN_NAME.Leve2Rules]: [],
    [SCREEN_NAME.Leve2Game]: [],
    [SCREEN_NAME.Leve2Final]: [],
    [SCREEN_NAME.Leve3Intro]: [],
    [SCREEN_NAME.Leve3Rules]: [],
    [SCREEN_NAME.Leve3Game]: [],
    [SCREEN_NAME.Leve3Final]: [],
    [SCREEN_NAME.Final]: [],
};