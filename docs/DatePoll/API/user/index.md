---
title: Home
---

# User routes

## Get current logged in user profile
Used to get the complete profile of the currently logged in user.

**URL**: `/api/v1/user/myself`

**Method**: `GET`

**Auth required**: Yes

### Success response
**Code**: `200`

**Content example**
```json
{
    "msg": "Get yourself",
    "user": {
        "id": 33,
        "title": null,
        "firstname": "Stefan",
        "surname": "Huber",
        "username": "st.huber",
        "birthday": "1999-04-19",
        "join_date": "2019-06-15",
        "streetname": "Luckystreet",
        "streetnumber": "2",
        "zipcode": 1234,
        "location": "Vienna",
        "activated": 1,
        "activity": "active",
        "force_password_change": 0,
        "phone_numbers": [
            {
                "id": 103,
                "user_id": 33,
                "label": "Mobil",
                "number": "+4312345678",
                "created_at": "2019-06-15 15:51:24",
                "updated_at": "2019-06-15 15:51:24"
            }
        ],
        "email_addresses": [
            "magicaddress@gmail.xyz",
            "test@wow.me"
        ],
        "permissions": [
            "root.administration"
        ],
        "performance_badges": [
            {
                "id": 17,
                "performance_badge_id": 1,
                "instrument_id": 1,
                "grade": "excellent",
                "note": null,
                "date": "2019-06-05",
                "performance_badge_name": "Leistungsabzeichen 1. Bronze",
                "instrument_name": "Drums"
            }
        ]
    }
}
```



## Update current logged in user profile
Used to update some specific informations of the currently logged inuser.

**URL**: `/api/v1/user/myself`

**Method**: `PUT`

**Auth required**: Yes

**Data constraints**
```json
{
	"title": "[max: 190]",
    "streetname": "[required | max: 190 | min: 1]",
    "streetnumber": "[required | max: 190 | min: 1]",
    "zipcode": "[required | integer]",
    "location": "[required | max: 190 | min: 1]",
    "birthday": "[required | max: 190 | min: 1]"
}
```

**Data example**
```json
{
    "streetname": "NotSoLuckystreet",
    "streetnumber": "2b",
    "zipcode": 4321,
    "location": "Graz",
    "birthday": "1998-12-12"
}
```

### Success response
**Code**: `200`

**Content example**
```json
{
    "msg": "User updated",
    "user": {
        "id": 33,
        "title": null,
        "firstname": "Stefan",
        "surname": "Huber",
        "username": "st.huber",
        "birthday": "1999-04-19",
        "join_date": "2019-06-15",
        "streetname": "Luckystreet",
        "streetnumber": "2",
        "zipcode": 1234,
        "location": "Vienna",
        "activated": 1,
        "activity": "active",
        "force_password_change": 0,
        "phone_numbers": [
            {
                "id": 103,
                "user_id": 33,
                "label": "Mobil",
                "number": "+4312345678",
                "created_at": "2019-06-15 15:51:24",
                "updated_at": "2019-06-15 15:51:24"
            }
        ],
        "email_addresses": [
            "magicaddress@gmail.xyz",
            "test@wow.me"
        ],
        "permissions": [
            "root.administration"
        ],
        "performance_badges": [
            {
                "id": 17,
                "performance_badge_id": 1,
                "instrument_id": 1,
                "grade": "excellent",
                "note": null,
                "date": "2019-06-05",
                "performance_badge_name": "Leistungsabzeichen 1. Bronze",
                "instrument_name": "Drums"
            }
        ],
        "view_yourself": {
            "href": "api/v1/user/myself",
            "method": "GET"
        }
    }
}
```



## Homepage
Used to get the homepage data of the currently logged in user.

**URL**: `/api/v1/user/homepage`

**Method**: `GET`

**Auth required**: Yes

### Success response
**Code**: `200`

**Content example 0.8.3 and higher**
```json
{
    "msg": "List of your bookings, events and birthdays in the next month",
    "events": [
        {
            "id": 3,
            "name": "Test Event",
            "description": "Mamma Mia",
            "start_date": "2020-01-22 12:12:00",
            "end_date": "2020-01-22 15:15:00",
            "for_everyone": 1,
            "decisions": [
                {
                    "id": 133,
                    "decision": "Ja",
                    "event_id": 3,
                    "show_in_calendar": 1
                },
                {
                    "id": 134,
                    "decision": "Nein",
                    "event_id": 3,
                    "show_in_calendar": 1
                },
                {
                    "id": 135,
                    "decision": "Vielleicht",
                    "event_id": 3,
                    "show_in_calendar": 0
                }
            ],
            "dates": [
                {
                    "id": 116,
                    "date": "2020-01-22 12:12:00",
                    "location": "",
                    "x": -199,
                    "y": -199,
                    "description": ""
                },
                {
                    "id": 117,
                    "date": "2020-01-22 15:15:00",
                    "location": "",
                    "x": -199,
                    "y": -199,
                    "description": ""
                }
            ],
            "already_voted": true,
            "user_decision": {
                "id": 135,
                "decision": "Vielleicht",
                "show_in_calendar": 1,
                "event_id": 8,
                "created_at": "2020-03-01 16:29:06",
                "updated_at": "2020-03-01 16:29:06", 
                "color": "#fccb00",
                "additional_information": null
            }
            
        }

    ],
    "bookings": [
        {
            "movie_id": 13,
            "movie_name": "Bohemian Rapsody",
            "movie_date": "2019-09-24",
            "amount": 2,
            "worker_id": null,
            "worker_name": null,
            "emergency_worker_id": null,
            "emergency_worker_name": null
        },
        {
            "movie_id": 4,
            "movie_name": "Wolf of Wall Street",
            "movie_date": "2019-10-18",
            "amount": 12,
            "worker_id": null,
            "worker_name": null,
            "emergency_worker_id": 33,
            "emergency_worker_name": "Dominik Dafert"
        }
    ],
    "birthdays": [
        {
            "name":"Harvey Specter",
            "date":"2005-01-22"
        },
        {
            "name":"Louis Litt",
            "date":"1969-02-35"
        }
    ],
    "broadcasts": [
        {
            "id": 77,
            "subject": "Long Broadcast",
            "body": "Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!\n",
            "writer_name": "Maxi Man",
            "writer_user_id": 1,
            "for_everyone": 0,
            "created_at": "2020-07-27T12:41:49.000000Z",
            "updated_at": "2020-07-27T12:41:49.000000Z"
        },
        {
            "id": 76,
            "subject": "Maxi Woman",
            "body": "Test message #1\n",
            "writer_name": "Maxi Woman",
            "writer_user_id": 1,
            "for_everyone": 0,
            "created_at": "2020-07-09T11:55:46.000000Z",
            "updated_at": "2020-07-09T11:55:46.000000Z"
        },
        {
            "id": 75,
            "subject": "test777777777777",
            "body": "test777777777777\n",
            "writer_name": "Stephen King",
            "writer_user_id": 1,
            "for_everyone": 1,
            "created_at": "2020-06-23T18:51:47.000000Z",
            "updated_at": "2020-06-23T18:51:47.000000Z"
        }
    ],
}
```

**Content example 0.8.2 and lower**

Everything as above **but without** the `broadcasts` array