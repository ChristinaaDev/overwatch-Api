const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const characters = {
    'lucio': {
        'realName': 'Lúcio Correia dos Santos',
        'age': '26',
        'role': 'Support',
        'health': '200',
        'armor': 'None',
        'quote': "That's how you get tinnitus!",
        'image': 'https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8c/Lucio-portrait.png/revision/latest/scale-to-width-down/189?cb=20160620004212'
    },
    'mercy': {
        'realName': 'Angela Ziegler',
        'age': '37',
        'role': 'Support',
        'health': '200',
        'armor': 'None',
        'quote': 'Someone call the whambulance!',
        'image': 'https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d2/Mercy-portrait.png/revision/latest/scale-to-width-down/350?cb=20160620024553'
    },
    'reinhardt': {
        'realName': 'Reinhardt Wilhelm',
        'age': '61',
        'role': 'Tank',
        'health': '300',
        'armor': '200',
        'quote': 'Would you like to see my muscles?',
        'image': 'https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/07/Reinhardt-portrait.png/revision/latest/scale-to-width-down/350?cb=20160620013222'
    },
    'd.va': {
        'realName': 'Hana Song (송하나)',
        'age': '19',
        'role': 'Tank',
        'health': '150 (Pilot, 300 (Mech)',
        'armor': '300 (Mech)',
        'quote': 'Is this easy mode?',
        'image': 'https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b0/DVa-portrait.png/revision/latest/scale-to-width-down/336?cb=20170314224216'
    },
    'symmetra': {
        'realName': 'Satya Vaswani (सत्य वासवानी)',
        'age': '28',
        'role': 'Damage',
        'health': '200',
        'armor': 'None',
        'quote': 'I made you something.',
        'image': 'https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/18/Symmetra-portrait.png/revision/latest/scale-to-width-down/161?cb=20160620015059'
    },
    'hanzo': {
        'realName': 'Hanzo Shimada (島田 半蔵)',
        'age': '38',
        'role': 'Damage',
        'health': '200',
        'armor': 'None',
        'quote': 'Sake!',
        'image': 'https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a0/Hanzo-portrait.png/revision/latest/scale-to-width-down/290?cb=20160620014349'
    }
    
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:characterName', (request, response) => {
    const charactersName = request.params.characterName.toLowerCase()
    if(characters[charactersName]){
        response.json(characters[charactersName])
    } else {
        response.json(characters['Missing...'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})