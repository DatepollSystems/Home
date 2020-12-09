---
title: Updating
---

## How to update

!!! warning
    This is the general update section! For version specific updates look at the version update sections.

1. Enter your datepoll-docker root directory.
2. Execute this command to update your docker instance (sudo required) ``./scripts/dockerUpdate.sh``
3. Execute this command to update your frontend ``./scripts/frontend.sh``
4. Execute this command to update your backend ``./scripts/backendUpdate.sh``

## From version 0.8.2 to 0.8.3

!!! info
    There are no version specific changes in the update progress. Head to the [How to update](#how-to-update) section.


### API Changes
#### [Homepage](./API/user/index.md#homepage)
Added:
```json
    // ...
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
        // ...
    ],
    // ...
```

## From version 0.7.0 to 0.8.0

### Environment variable change
**Important to make before updating the backend!** 

Please edit your .env file.
```nano ./code/backend/.env```

Replace
```QUEUE_CONNECTION="database"``` to ```QUEUE_CONNECTION=redis```
Add
```
# Laravel Horizon | Worker | Redis
REDIS_HOST="datepoll-redis"
REDIS_PASSWORD=null
REDIS_PORT=6379
```

**[Now you can update!](#how-to-update)**

### API Changes
#### [Update currently logged in user](./API/user/index.md#update-current-logged-in-user-profile)
Old:
```json
{
    "title": "[max: 190]",
    "firstname": "[required | max: 190 | min: 1]",
    "surname": "[required | max: 190 | min: 1]",
    "streetname": "[required | max: 190 | min: 1]",
    "streetnumber": "[required | max: 190 | min: 1]",
    "zipcode": "[required | integer]",
    "location": "[required | max: 190 | min: 1]",
    "birthday": "[required | max: 190 | min: 1]"
}
```

New:
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

#### [Version check / DatePoll check](./API/index.md#datepoll-check)

Old:
```json
{
    "version": "0.7.0",
    "version_number": 14,
    "application_url": "testing.datepoll.org",
    "community_name": "Datepoll Demo",
    "community_url": "https://datepoll.org",
    "community_description": "Clubs are awesome",
    "community_imprint": "You should provide your website imprint here.",
    "community_privacy_policy": "You should provide your website privacy policy here.",
    "logged_interactions_count": 800,
    "events_enabled": true,
    "events_count": 5,
    "event_votes_count": 2,
    "event_decisions_count": 15,
    "event_dates_count": 6,
    "cinema_enabled": true,
    "movies_count": 3,
    "movies_tickets_count": 2,
    "movies_workers_count": 3,
    "users_count": 4,
    "user_email_addresses_count": 4,
    "user_phone_numbers_count": 2,
    "performance_badges_count": 0
}
```

New (added broadcasts_enabled, broadcasts_count, broadcasts_sent_count):
```json
{
    "version": "0.8.0",
    "version_number": 15,
    "application_url": "testing.datepoll.org",
    "community_name": "Datepoll Demo",
    "community_url": "https://datepoll.org",
    "community_description": "Clubs are awesome",
    "community_imprint": "You should provide your website imprint here.",
    "community_privacy_policy": "You should provide your website privacy policy here.",
    "logged_interactions_count": 800,
    "events_enabled": true,
    "events_count": 5,
    "event_votes_count": 2,
    "event_decisions_count": 15,
    "event_dates_count": 6,
    "cinema_enabled": true,
    "movies_count": 3,
    "movies_tickets_count": 2,
    "movies_workers_count": 3,
    "broadcasts_enabled": true,
    "broadcasts_count": 5,
    "broadcasts_sent_count": 2,
    "users_count": 4,
    "user_email_addresses_count": 4,
    "user_phone_numbers_count": 2,
    "performance_badges_count": 0
}
```


## From version 0.6.2 to 0.7.0
### Environment variable change 

**Important to make before updating the backend!** 

Please edit your .env file.
```nano ./code/backend/.env```

Replace
```DB_HOST="mysql"``` to ```DB_HOST="datepoll-mysql"``` 


**[Now you can update!](#how-to-update)**


### API Changes
#### [Version check / DatePoll check](./API/index.md#datepoll-check)

Old:
```json
{
    "version": "0.4.2",
    "version_number": 7
}
```

New:
```json
{
    "version": "0.7.0",
    "version_number": 14,
    "application_url": "testing.datepoll.org",
    "community_name": "Datepoll Demo",
    "community_url": "https://datepoll.org",
    "community_description": "Clubs are awesome",
    "community_imprint": "You should provide your website imprint here.",
    "community_privacy_policy": "You should provide your website privacy policy here.",
    "logged_interactions_count": 800,
    "events_enabled": true,
    "events_count": 5,
    "event_votes_count": 2,
    "event_decisions_count": 15,
    "event_dates_count": 6,
    "cinema_enabled": true,
    "movies_count": 3,
    "movies_tickets_count": 2,
    "movies_workers_count": 3,
    "users_count": 4,
    "user_email_addresses_count": 4,
    "user_phone_numbers_count": 2,
    "performance_badges_count": 0
}
```


## From version 0.6.0 to 0.6.1
[Take a look at the How to update section.](#how-to-update)

### API Changes
#### [Get open events](./API/events/index.md#get-open-events)

Old:
```json
{
"msg": "List of events",
    "events": [
        {
            "id": 3,
            // ....
            "already_voted": true,
            "user_decision": "Ja"
        }
    ]
}
```

New:
```json
{
"msg": "List of events",
    "events": [
        {
            "id": 3,
            // ....
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
        }
    ]
}
```

#### [Get single event](./API/events/index.md#get-single-event)

Old
```json
{
    "msg": "Event information",
    "event": {
        "id": 4,
        // ....
        "decisions": [
            {
                "id": 10,
                "decision": "Ja",
                "event_id": 4,
                "show_in_calendar": 1
            },
        ]
    }
}
```

New:
```json
{
    "msg": "Event information",
    "event": {
        "id": 4,
        // ....
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
  	    	}
  		]
    }
}
```

#### [Homepage](./API/user/index.md#homepage)

Old:
```json
{
"msg": "List of events",
    "events": [
        {
            "id": 3,
            // ....
            "already_voted": true,
            "user_decision": "Ja"
        }
    ]
}
```

New:
```json
{
"msg": "List of events",
    "events": [
        {
            "id": 3,
            // ....
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
        }
    ]
}
```