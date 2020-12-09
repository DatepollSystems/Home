---
title: Home
---

# Event routes

## Feature disabled response
Response when the event feature is disabled

**Code**: `503`

**Content example**
```json
{
    "msg": "The events feature is disabled on this DatePoll server",
    "error_code": "feature_disabled_events"
}
```

## Get open events
Used to get currently open events

**URL**: `/api/v1/avent`

**Method**: `GET`

**Auth required**: Yes

**Feature required**: [EventFeature](#feature-disabled-response)

### Success response
**Code**: `200`

**Content example**
```json
{
    "msg": "List of events",
    "events": [
        {
            "id": 3,
            "name": "Turn around",
            "description": "",
            "start_date": "2020-01-22 12:12:00",
            "end_date": "2020-01-22 15:15:00",
            "for_everyone": 1,
            "decisions": [
                {
                    "id": 7,
                    "decision": "Ja",
                    "event_id": 3,
                    "show_in_calendar": 1
                },
                {
                    "id": 8,
                    "decision": "Nein",
                    "event_id": 3,
                    "show_in_calendar": 1
                },
                {
                    "id": 9,
                    "decision": "Vielleicht",
                    "event_id": 3,
                    "show_in_calendar": 0
                }
            ],
            "dates": [
                {
                    "id": 14,
                    "date": "2020-01-22 12:12:00",
                    "location": "",
                    "x": -99,
                    "y": -99,
                    "description": ""
                },
                {
                    "id": 15,
                    "date": "2020-01-22 15:15:00",
                    "location": "",
                    "x": -99,
                    "y": -99,
                    "description": ""
                }
            ],
            "already_voted": true,
            "user_decision": {
                "id": 9,
                "decision": "Vielleicht",
                "show_in_calendar": 1,
                "event_id": 3,
                "created_at": "2020-03-01 16:29:06",
                "updated_at": "2020-03-01 16:29:06", 
                "color": "#fccb00",
                "additional_information": "I don't know!!!"
            }
        },
        {
            "id": 4,
            "name": "Macklemore Konzert",
            "description": "",
            "start_date": "2020-01-30 15:00:00",
            "end_date": "2020-01-30 17:00:00",
            "for_everyone": 1,
            "decisions": [
                {
                    "id": 10,
                    "decision": "Ja",
                    "event_id": 4,
                    "show_in_calendar": 1
                },
                {
                    "id": 11,
                    "decision": "Nein",
                    "event_id": 4,
                    "show_in_calendar": 1
                },
                {
                    "id": 12,
                    "decision": "Vielleicht",
                    "event_id": 4,
                    "show_in_calendar": 0
                }
            ],
            "dates": [
                {
                    "id": 18,
                    "date": "2020-01-30 15:00:00",
                    "location": "",
                    "x": 48.675076,
                    "y": 15.866749,
                    "description": ""
                },
                {
                    "id": 19,
                    "date": "2020-01-30 16:00:00",
                    "location": "Nowhere",
                    "x": 48.670088,
                    "y": 15.911347,
                    "description": ""
                },
                {
                    "id": 20,
                    "date": "2020-01-30 17:00:00",
                    "location": "",
                    "x": -199,
                    "y": -199,
                    "description": ""
                }
            ],
            "already_voted": false,
            "user_decision": null
        }
    ]
}
```
**Important information:**
*Please note that when the x or y coordinates are set to **-199** it means **null**.*


## Get single event
Used to get a single event with more information

**URL**: `/api/v1/avent/{eventId}`

**Method**: `GET`

**Auth required**: Yes

**Feature required**: [EventFeature](#feature-disabled-response)

**Permissions required (only to view which user voted for what)**:

* root.administration
* events.*
* events.details

### Success response
**Code**: `200`

#### Content example (anonymous false)
```json
{
    "msg": "Event information",
    "event": {
        "id": 4,
        "name": "Macklemore Konzert",
        "description": "",
        "start_date": "2020-01-30 15:00:00",
        "end_date": "2020-01-30 17:00:00",
        "for_everyone": 1,
        "decisions": [
            {
                "id": 22,
                "decision": "Ja",
                "event_id": 8,
                "show_in_calendar": 1,
                "color": "#008b02"
            },
            {
                "id": 26,
                "decision": "Nein",
                "event_id": 8,
                "show_in_calendar": 0,
                "color": "#b80000"
            },
            {
                "id": 27,
                "decision": "Vielleicht",
                "event_id": 8,
                "show_in_calendar": 1,
                "color": "#fccb00"
            }
        ],
        "dates": [
            {
                "id": 18,
                "date": "2020-01-30 15:00:00",
                "location": "",
                "x": 48.675076,
                "y": 15.866749,
                "description": ""
            },
            {
                "id": 19,
                "date": "2020-01-30 16:00:00",
                "location": "Nowhere",
                "x": 48.670088,
                "y": 15.911347,
                "description": ""
            },
            {
                "id": 20,
                "date": "2020-01-30 17:00:00",
                "location": "",
                "x": -199,
                "y": -199,
                "description": ""
            }
        ],
        "resultGroups": {
            "groups": [
                {
                    "id": 1,
                    "name": "Group1",
                    "users": [
                        {
                            "id": 1,
                            "firstname": "Rick",
                            "surname": "Sanchez",
                            "additional_information": null,
                            "decisionId": null,
                            "decision": null
                        }
                    ],
                    "subgroups": [
                        {
                            "id": 1,
                            "name": "Subgroup1",
                            "users": [
                                {
                                    "id": 1,
                                    "firstname": "Rick",
                                    "surname": "Sanchez",
                                    "additional_information": null,
                                    "decisionId": null,
                                    "decision": null
                                }
                            ]
                        },
                        {
                            "id": 2,
                            "name": "Subgroup2",
                            "users": []
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "Group2",
                    "users": [],
                    "subgroups": []
                },
                {
                    "id": 5,
                    "name": "Group3",
                    "users": [],
                    "subgroups": [
                        {
                            "id": 3,
                            "name": "Subgroup3",
                            "users": []
                        }
                    ]
                }
            ],
            "allUsers": [
                {
                    "id": 1,
                    "firstname": "Rick",
                    "surname": "Sanchez",
                    "additional_information": null,
                    "decisionId": null,
                    "decision": null
                },
                {
                    "id": 2,
                    "firstname": "Morty",
                    "surname": "Smith",
                    "additional_information": null,
                    "decisionId": null,
                    "decision": null
                }
            ],
            "anonymous": false
        },
        "view_events": {
            "href": "api/v1/avent/administration/avent",
            "method": "GET"
        }
    }
}
```
**Important information:**
*Please note that when the anonymous flag is set to true the firstname, surname and id are null.*

#### Content example (anonymous true)
```json
{
    "msg": "Event information",
    "event": {
        "id": 4,
        "name": "Macklemore Konzert",
        "description": "",
        "start_date": "2020-01-30 15:00:00",
        "end_date": "2020-01-30 17:00:00",
        "for_everyone": 1,
        "decisions": [
            {
                "id": 22,
                "decision": "Ja",
                "event_id": 8,
                "show_in_calendar": 1,
                "color": "#008b02"
            },
            {
                "id": 26,
                "decision": "Nein",
                "event_id": 8,
                "show_in_calendar": 0,
                "color": "#b80000"
            },
            {
                "id": 27,
                "decision": "Vielleicht",
                "event_id": 8,
                "show_in_calendar": 1,
                "color": "#fccb00"
            }
        ],
        "dates": [
            {
                "id": 18,
                "date": "2020-01-30 15:00:00",
                "location": "",
                "x": 48.675076,
                "y": 15.866749,
                "description": ""
            },
            {
                "id": 19,
                "date": "2020-01-30 16:00:00",
                "location": "Nowhere",
                "x": 48.670088,
                "y": 15.911347,
                "description": ""
            },
            {
                "id": 20,
                "date": "2020-01-30 17:00:00",
                "location": "",
                "x": -199,
                "y": -199,
                "description": ""
            }
        ],
        "resultGroups": {
            "groups": [
                {
                    "id": 1,
                    "name": "Group1",
                    "users": [
                        {
                            "id": null,
                            "firstname": null,
                            "surname": null,
                            "additional_information": null,
                            "decisionId": 11,
                            "decision": "Nein"
                        }
                    ],
                    "subgroups": [
                        {
                            "id": 1,
                            "name": "Subgroup1",
                            "users": [
                                {
                                    "id": null,
                                    "firstname": null,
                                    "surname": null,
                                    "additional_information": null,
                                    "decisionId": 11,
                                    "decision": "Nein"
                                }
                            ]
                        },
                        {
                            "id": 2,
                            "name": "Subgroup2",
                            "users": []
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "Group2",
                    "users": [],
                    "subgroups": []
                },
                {
                    "id": 5,
                    "name": "Group3",
                    "users": [],
                    "subgroups": [
                        {
                            "id": 3,
                            "name": "Subgroup3",
                            "users": []
                        }
                    ]
                }
            ],
            "allUsers": [
                {
                    "id": null,
                    "firstname": null,
                    "surname": null,
                    "additional_information": null,
                    "decisionId": 11,
                    "decision": "Nein"
                },
                {
                    "id": null,
                    "firstname": null,
                    "surname": null,
                    "additional_information": null,
                    "decisionId": null,
                    "decision": null
                }
            ],
            "anonymous": true
        },
        "view_events": {
            "href": "api/v1/avent/administration/avent",
            "method": "GET"
        }
    }
}
```
