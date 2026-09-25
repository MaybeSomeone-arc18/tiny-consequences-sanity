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
          "next": "drawing",
          "label": "Draw a bench inside the chalk outline",
          "why": "The drawing gives waiting passengers a place to gather, even without a seat."
        },
        {
          "next": "bakery",
          "label": "Ask the bakery if they saw it",
          "why": "The baker watched the removal from across the street."
        },
        {
          "next": "shift",
          "label": "Ask who needs the space most",
          "why": "Mira knows what the first tram feels like without a seat."
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
          "next": "office",
          "label": "Send the sketch to the office",
          "why": "Give a temporary drawing a public record."
        },
        {
          "next": "chalk",
          "label": "Leave chalk beside the outline",
          "why": "Let other passengers finish the design."
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
          "next": "garden",
          "label": "Follow the address",
          "why": "Find the bench before asking where it belongs."
        },
        {
          "next": "office",
          "label": "File a missing-bench report",
          "why": "Trace who signed the transfer."
        },
        {
          "next": "archive",
          "label": "Keep the receipt",
          "why": "The paper points to an after-hours record."
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
          "next": "crossing",
          "label": "Ask how the ballot reaches everyone",
          "why": "Paper Bridge makes the answer harder than a form."
        },
        {
          "next": "ledger",
          "label": "Open the old ledger",
          "why": "The office kept a record of small absences."
        },
        {
          "next": "ballot",
          "label": "Read the notice",
          "why": "Residents can inspect the decision."
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
          "next": "bridge",
          "label": "Walk the bank",
          "why": "The river path turns one bench into a question about access."
        },
        {
          "next": "picnic",
          "label": "Stay a little longer",
          "why": "A conversation reveals a missing path."
        },
        {
          "next": "ballot",
          "label": "Map the missing seats",
          "why": "One bench becomes a citywide question."
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
          "next": "closure",
          "label": "Read the morning notice",
          "why": "See the first decisions the city actually made."
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
          "next": "ballot",
          "label": "Make a public map",
          "why": "Separate notes become a shared picture."
        },
        {
          "next": "timing",
          "label": "Bring the crossing request to the engineer",
          "why": "The old entry finally gets a test."
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
          "next": "ballot",
          "label": "Sketch the missing path",
          "why": "A drawn route gives neighbors something specific to bring to the city."
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
          "next": "night",
          "label": "Follow the last tram",
          "why": "See what this decision leaves behind after dark."
        },
        {
          "next": "timing",
          "label": "Walk the bridge with the engineer",
          "why": "Test one change while the larger plan is debated."
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
          "next": "testimony",
          "label": "Let Mira tell the office herself",
          "why": "A first-person account changes the public record."
        },
        {
          "next": "crossing",
          "label": "Walk with her to the crossing",
          "why": "Her route home reveals another obstacle."
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
          "next": "bridge",
          "label": "Invite the garden neighbors to draw too",
          "why": "The idea crosses the river before the rain arrives."
        },
        {
          "next": "archive",
          "label": "Send the photograph to the archive",
          "why": "Preserve the drawing before it washes away."
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
          "next": "archive",
          "label": "Ask about the crossing",
          "why": "The archive holds an older request for the narrow path."
        },
        {
          "next": "ballot",
          "label": "Mark the detour",
          "why": "A reachable route belongs on the public map."
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
          "next": "ballot",
          "label": "Publish the unsigned promise",
          "why": "A vague disappearance becomes a traceable unfinished decision."
        },
        {
          "next": "testimony",
          "label": "Ask Mira what the form misses",
          "why": "A permit records a bench, not who needed it."
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
          "next": "timing",
          "label": "Time the crossing",
          "why": "A measured delay can change the signal plan."
        },
        {
          "next": "ballot",
          "label": "Add the route to the ballot",
          "why": "Ask about movement, not only seats."
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
          "next": "ballot",
          "label": "Read the revised question",
          "why": "The ballot now includes working hours and access."
        },
        {
          "next": "night",
          "label": "Walk the route after dark",
          "why": "A daytime solution needs a night-time test."
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
          "next": "night",
          "label": "See the crossing after dark",
          "why": "The extra time must work for the last tram, too."
        }
      ],
      "ripple": "One small repair lands; the deeper problem stays visible."
    },
    {
      "id": "closure",
      "title": "A place to stop",
      "description": "In the morning, the crossing signal lasts twelve seconds longer. The replacement bench has a date, not just a promise, and Mira can read the plan at her stop. The bridge still needs work. The city has begun to keep track of it.",
      "ripple": "A small change is complete. An unfinished one stays on the public record.",
      "place": "stop",
      "scale": "city",
      "minutesLater": 162,
      "choices": []
    }
  ]
}
