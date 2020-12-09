---
title: Home
---

# Welcome to the DatePoll API documentation

## Check if DatePoll is running
**URL**: `/`

**Method**: `GET`

**Auth required**: No

### Success response
`Running DatePoll-Backend! ( ͡° ͜ʖ ͡°)`


## DatePoll check
The response will contain a version and a version number.

**URL**: `/api`

**Method**: `GET`

**Auth required**: No

### Success response
**Code**: `200 OK`

**Content example**
###### New request v0.8.0 (15) and higher
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

###### Old request v0.7.0 (14) - v0.8.0 (15) 
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

###### Old request until v0.7.0 (14)
```json
{
	"version": "0.4.2",
	"version_number": 7
}
```