export const fixture={
  "title": "The missing bench",
  "prompt": "At 8:04, a bench beside the tram stop is gone. What do you do?",
  "start": "bench",
  "places": [
    {
      "id": "stop",
      "name": "Moth Street stop",
      "district": "North Arcade",
      "x": 18,
      "y": 28
    },
    {
      "id": "shop",
      "name": "Second Bell Bakery",
      "district": "North Arcade",
      "x": 45,
      "y": 40
    },
    {
      "id": "hall",
      "name": "Lost Things Office",
      "district": "Civic Quarter",
      "x": 77,
      "y": 23
    },
    {
      "id": "park",
      "name": "Rain Garden",
      "district": "East Bank",
      "x": 68,
      "y": 75
    },
    {
      "id": "paperbridge",
      "name": "Paper Bridge",
      "district": "East Bank",
      "x": 41,
      "y": 67
    },
    {
      "id": "nightarchive",
      "name": "Night Archive",
      "district": "Civic Quarter",
      "x": 81,
      "y": 54
    }
  ],
  "nodes": [
    {
      "id": "bench",
      "title": "A space where a bench used to be",
      "description": "At 8:04, the bench at Moth Street stop is gone. Its four iron feet have left pale circles in the pavement. Six people are already waiting where it used to be.",
      "place": "stop",
      "scale": "personal",
      "minutesLater": 0,
      "choices": [
        {
          "label": "Draw a bench inside the chalk outline",
          "why": "The drawing gives waiting passengers a place to gather, even without a seat.",
          "next": "drawing"
        },
        {
          "label": "Ask the bakery if they saw it",
          "why": "The baker watched the removal from across the street.",
          "next": "bakery"
        },
        {
          "label": "Ask who needs the space most",
          "why": "A night-shift worker knows what the first tram feels like without a seat.",
          "next": "shift"
        }
      ],
      "ripple": "The empty space changes where six strangers stand."
    },
    {
      "id": "drawing",
      "title": "A queue draws itself",
      "description": "People add legs, armrests and an impossible cupholder. The tram driver notices that the line now leaves room for wheelchairs.",
      "place": "stop",
      "scale": "street",
      "minutesLater": 11,
      "choices": [
        {
          "label": "Send the sketch to the Lost Things Office",
          "why": "An archivist can turn a temporary drawing into a city request.",
          "next": "office"
        },
        {
          "label": "Leave chalk beside the outline",
          "why": "The drawing becomes a public invitation to keep designing.",
          "next": "chalk"
        }
      ],
      "ripple": "The chalk queue makes room for a wheelchair. The driver changes where the tram stops."
    },
    {
      "id": "bakery",
      "title": "The receipt with a strange address",
      "description": "The baker says a city van took the bench to the Rain Garden. On the receipt, someone wrote: “Borrowed for a view.”",
      "place": "shop",
      "scale": "street",
      "minutesLater": 8,
      "choices": [
        {
          "label": "Follow the address",
          "why": "You find out what happened to the bench before deciding what to ask for.",
          "next": "garden"
        },
        {
          "label": "File a missing-bench report",
          "why": "The office can trace the permit and make the decision visible.",
          "next": "office"
        },
        {
          "label": "Keep the receipt instead of filing it",
          "why": "The folded paper leads to an after-hours record of every borrowed object.",
          "next": "archive"
        }
      ],
      "ripple": "A paper receipt moves the search from the stop to the garden."
    },
    {
      "id": "office",
      "title": "A form becomes a question",
      "description": "The archivist finds a permit: the bench was moved because people asked for shade at the Rain Garden. She opens a public ballot about what each stop needs.",
      "place": "hall",
      "scale": "city",
      "minutesLater": 47,
      "choices": [
        {
          "label": "Read the city notice",
          "why": "The route ends at a decision that residents can inspect.",
          "next": "ballot"
        },
        {
          "label": "Open the old ledger",
          "why": "The office kept a longer record of small absences.",
          "next": "ledger"
        },
        {
          "label": "Ask how the ballot reaches everyone",
          "why": "The crossing by Paper Bridge makes the answer harder than a form.",
          "next": "crossing"
        }
      ],
      "ripple": "A private complaint becomes a question the whole city can answer."
    },
    {
      "id": "garden",
      "title": "A seat with a better view",
      "description": "The bench is here, under a young tree. Two neighbors say their old seats were removed last winter. They want the city to count where rest is missing.",
      "place": "park",
      "scale": "street",
      "minutesLater": 28,
      "choices": [
        {
          "label": "Map the missing seats",
          "why": "A map turns one missing bench into a pattern the city can act on.",
          "next": "ballot"
        },
        {
          "label": "Stay a little longer",
          "why": "A conversation at the garden reveals a different missing link.",
          "next": "picnic"
        },
        {
          "label": "Walk the bank and count places to pause",
          "why": "The river path turns one bench into a question about access.",
          "next": "bridge"
        }
      ],
      "ripple": "One borrowed bench exposes two other missing places to sit."
    },
    {
      "id": "night",
      "title": "The last tram makes a detour",
      "description": "A chalk arrow sends the last tram past the Rain Garden. For one evening, people use the stop as a meeting place rather than a place to leave.",
      "place": "stop",
      "scale": "street",
      "minutesLater": 132,
      "choices": [
        {
          "label": "Ask who drew the arrow",
          "why": "The question brings you back to the person who started the drawing.",
          "next": "drawing"
        },
        {
          "label": "Leave a note for the morning route",
          "why": "The transit office receives a record of what changed after dark.",
          "next": "office"
        },
        {
          "label": "Follow the lights to the archive",
          "why": "An overnight clerk knows why the permit was never returned.",
          "next": "archive"
        }
      ],
      "ripple": "The last tram carries a daytime choice into the night."
    },
    {
      "id": "ledger",
      "title": "A ledger of small absences",
      "description": "The office has a shelf of requests that never reached a meeting: one bench, two trees, a quiet crossing, and a drinking fountain.",
      "place": "hall",
      "scale": "city",
      "minutesLater": 63,
      "choices": [
        {
          "label": "Make a public map",
          "why": "The separate notes become a shared picture of the city.",
          "next": "ballot"
        },
        {
          "label": "Take the ledger to the tram stop",
          "why": "People who wait at the stop can add places the office missed.",
          "next": "night"
        },
        {
          "label": "Read the oldest request",
          "why": "A small entry about the bridge was filed before the bench went missing.",
          "next": "crossing"
        }
      ],
      "ripple": "Forgotten requests become a map that residents can inspect."
    },
    {
      "id": "picnic",
      "title": "The long way home",
      "description": "At the garden, a stranger offers you the bench. You ask what else is missing here, and the answer is not a seat but a path to the water.",
      "place": "park",
      "scale": "personal",
      "minutesLater": 52,
      "choices": [
        {
          "label": "Sketch the missing path",
          "why": "A drawn route gives the neighbors something specific to bring to the city.",
          "next": "bridge"
        },
        {
          "label": "Return to the bakery with the story",
          "why": "The baker knows which neighbors organized the garden.",
          "next": "bakery"
        }
      ],
      "ripple": "A missing seat leads to a missing path."
    },
    {
      "id": "ballot",
      "title": "The city counts places to rest",
      "description": "The ballot does not promise a perfect city. It asks a narrower question: which blocks lack a safe place to pause?",
      "place": "hall",
      "scale": "city",
      "minutesLater": 96,
      "choices": [
        {
          "label": "Follow the last tram",
          "why": "The story loops into a new evening route.",
          "next": "night"
        },
        {
          "label": "Ask what the count leaves out",
          "why": "Numbers show the gap; a night-shift worker tells you its cost.",
          "next": "shift"
        }
      ],
      "ripple": "The city stops counting benches and starts counting places to rest."
    },
    {
      "id": "shift",
      "title": "The worker who waits after dark",
      "description": "Mira finishes at the bakery before sunrise. She says the bench mattered because the first tram is often late, and standing still after a ten-hour shift hurts. She has never filed a complaint.",
      "place": "shop",
      "scale": "personal",
      "minutesLater": 17,
      "choices": [
        {
          "label": "Let Mira tell the office herself",
          "why": "The public record needs a person, not just a pin on a map.",
          "next": "testimony"
        },
        {
          "label": "Walk with her to the crossing",
          "why": "A safer way home matters as much as a place to wait.",
          "next": "crossing"
        }
      ],
      "ripple": "Mira turns an anonymous count into a first-person account."
    },
    {
      "id": "chalk",
      "title": "The pavement becomes a plan",
      "description": "By noon the drawing has acquired a backrest, a wider path and a note in three handwritings: leave room to pass. Rain is due. Someone photographs it before the chalk goes.",
      "place": "stop",
      "scale": "street",
      "minutesLater": 21,
      "choices": [
        {
          "label": "Send the photograph to the archive",
          "why": "A fleeting mark becomes a record that cannot wash away.",
          "next": "archive"
        },
        {
          "label": "Invite the garden neighbors to draw too",
          "why": "The idea crosses the river before the rain arrives.",
          "next": "bridge"
        }
      ],
      "ripple": "A temporary drawing survives as a shared plan."
    },
    {
      "id": "bridge",
      "title": "The bridge without a pause",
      "description": "At Paper Bridge the river path narrows. A parent folds a stroller to let a wheelchair through. The bench is visible on the far bank, but reaching it takes twelve extra minutes.",
      "place": "paperbridge",
      "scale": "street",
      "minutesLater": 41,
      "choices": [
        {
          "label": "Mark the detour on the city map",
          "why": "The distance between a visible bench and a reachable bench becomes evidence.",
          "next": "ballot"
        },
        {
          "label": "Ask the night clerk about the crossing",
          "why": "The archive holds an older request for the same narrow path.",
          "next": "archive"
        }
      ],
      "ripple": "The map gains an accessible route, not just another bench marker."
    },
    {
      "id": "archive",
      "title": "A permit stays awake",
      "description": "At the Night Archive, a clerk pulls two forms with the same stamp: one moved the bench; the other promised to replace it. Only the first was signed. The missing signature has waited for months.",
      "place": "nightarchive",
      "scale": "city",
      "minutesLater": 74,
      "choices": [
        {
          "label": "Take the unsigned promise to the office",
          "why": "A vague disappearance becomes a traceable unfinished decision.",
          "next": "office"
        },
        {
          "label": "Put the forms beside the old requests",
          "why": "The delay is part of a pattern, not a clerical one-off.",
          "next": "ledger"
        }
      ],
      "ripple": "The city can see exactly which promise never became work."
    },
    {
      "id": "crossing",
      "title": "A signal lasts three seconds",
      "description": "At the crossing to Paper Bridge, the green figure vanishes before an older man reaches the middle. The ballot says “more benches,” but his problem is the time between them.",
      "place": "paperbridge",
      "scale": "street",
      "minutesLater": 58,
      "choices": [
        {
          "label": "Time the crossing with him",
          "why": "A measured delay can change the next signal plan.",
          "next": "timing"
        },
        {
          "label": "Add his route to the ballot",
          "why": "The city must ask about movement, not only places to sit.",
          "next": "ballot"
        }
      ],
      "ripple": "A choice about seating becomes a choice about who can cross."
    },
    {
      "id": "testimony",
      "title": "The record gets a name",
      "description": "Mira describes the cold pavement at 5:40 and the relief of the old bench. The archivist does not turn her words into a statistic. She attaches them to the public question, with Mira’s permission.",
      "place": "hall",
      "scale": "city",
      "minutesLater": 83,
      "choices": [
        {
          "label": "Read the revised question",
          "why": "The ballot now includes working hours and access.",
          "next": "ballot"
        },
        {
          "label": "Walk the route again after dark",
          "why": "A daytime solution may fail the people who use the first tram.",
          "next": "night"
        }
      ],
      "ripple": "A private experience changes the language of a public decision."
    },
    {
      "id": "timing",
      "title": "Twelve seconds more",
      "description": "The signal engineer cannot build a bench today. She can add twelve seconds to the crossing tonight. Tomorrow the man reaches the other side before the light changes; the river path is still too narrow.",
      "place": "paperbridge",
      "scale": "city",
      "minutesLater": 109,
      "choices": [
        {
          "label": "Keep the bridge on the map",
          "why": "One fix does not erase the unfinished path.",
          "next": "ballot"
        },
        {
          "label": "Tell Mira what changed",
          "why": "The night route deserves a witness who uses it.",
          "next": "shift"
        }
      ],
      "ripple": "One small repair lands; the deeper problem stays visible."
    }
  ]
}
