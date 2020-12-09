---
title: Manage settings
---

# Change user settings routes

## Get if user is shown in birthday list
Used to get the visibility of yourself in the "birthdays this month" view

**URL**: `/api/v1/user/myself/settings/shareBirthday`

**Method**: `GET`

**Auth required**: Yes

### Success response
**Code**: `200`

**Content example**
```json
{
	"msg": "Get setting successful",
	"setting_key": "share_birthday",
	"setting_value": true
}
```

## Change if user is shown in birthday list
Used to change the visibility of yourself in the "birthdays this month" view

**URL**: `/api/v1/user/myself/settings/shareBirthday`

**Method**: `POST`

**Auth required**: Yes

**Data constraints**
```json
{
	"setting_value": "[required | boolean]"
}
```

**Data example**
```json
{
	"setting_value": true
}
```

### Success response
**Condition**: `setting_value` is a boolean

**Code**: `200`

```json
{
	"msg": "Set setting successful",
	"setting_key": "share_birthday",
	"setting_value": true
}
```


## Get notify user of new events
Used to get status if DatePoll should notify user of new events

**URL**: `/api/v1/user/myself/settings/notifyMeOfNewEvents`

**Method**: `GET`

**Auth required**: Yes

### Success response
**Code**: `200`

**Content example**
```json
{
	"msg": "Get setting successful",
	"setting_key": "notify_me_of_new_events",
	"setting_value": false
}
```

## Change notify user of new events
Used to set status if DatePoll should notify user of new events

**URL**: `/api/v1/user/myself/settings/notifyMeOfNewEvents`

**Method**: `POST`

**Auth required**: Yes

**Data constraints**
```json
{
	"setting_value": "[required | boolean]"
}
```

**Data example**
```json
{
	"setting_value": true
}
```

### Success response
**Condition**: `setting_value` is a boolean

**Code**: `200`

```json
{
	"msg": "Set setting successful",
	"setting_key": "notify_me_of_new_events",
	"setting_value": true
}
```


## Get show events in calendar (also for ICS export)
Used to get if events should be shown in calendar and exported via ICS calendar

**URL**: `/api/v1/user/myself/settings/showEventsInCalendar`

**Method**: `GET`

**Auth required**: Yes

### Success response
**Code**: `200`

**Content example**
```json
{
	"msg": "Get setting successful",
	"setting_key": "show_events_in_calendar",
	"setting_value": false
}
```

## Set show events in calendar (also for ICS export)
Used to set if events should be shown in calendar and exported via ICS calendar

**URL**: `/api/v1/user/myself/settings/showEventsInCalendar`

**Method**: `POST`

**Auth required**: Yes

**Data constraints**
```json
{
	"setting_value": "[required | boolean]"
}
```

**Data example**
```json
{
	"setting_value": true
}
```

### Success response
**Condition**: `setting_value` is a boolean

**Code**: `200`

```json
{
	"msg": "Set setting successful",
	"setting_key": "show_events_in_calendar",
	"setting_value": true
}
```


## Get show movies in calendar (also for ICS export)
Used to get if movies should be shown in calendar and exported via ICS calendar

**URL**: `/api/v1/user/myself/settings/showMoviesInCalendar`

**Method**: `GET`

**Auth required**: Yes

### Success response
**Code**: `200`

**Content example**
```json
{
	"msg": "Get setting successful",
	"setting_key": "show_movies_in_calendar",
	"setting_value": false
}
```

## Set show movies in calendar (also for ICS export)
Used to set if movies should be shown in calendar and exported via ICS calendar

**URL**: `/api/v1/user/myself/settings/showMoviesInCalendar`

**Method**: `POST`

**Auth required**: Yes

**Data constraints**
```json
{
	"setting_value": "[required | boolean]"
}
```

**Data example**
```json
{
	"setting_value": true
}
```

### Success response
**Condition**: `setting_value` is a boolean

**Code**: `200`

```json
{
	"msg": "Set setting successful",
	"setting_key": "show_movies_in_calendar",
	"setting_value": true
}
```


## Get show birthdays in calendar (also for ICS export)
Used to get if birthdays should be shown in calendar and exported via ICS calendar

**URL**: `/api/v1/user/myself/settings/showBirthdaysInCalendar`

**Method**: `GET`

**Auth required**: Yes

### Success response
**Code**: `200`

**Content example**
```json
{
	"msg": "Get setting successful",
	"setting_key": "show_birthdays_in_calendar",
	"setting_value": false
}
```

## Set show birthdays in calendar (also for ICS export)
Used to set if birthdays should be shown in calendar and exported via ICS calendar

**URL**: `/api/v1/user/myself/settings/showBirthdaysInCalendar`

**Method**: `POST`

**Auth required**: Yes

**Data constraints**
```json
{
	"setting_value": "[required | boolean]"
}
```

**Data example**
```json
{
	"setting_value": true
}
```

### Success response
**Condition**: `setting_value` is a boolean

**Code**: `200`

```json
{
	"msg": "Set setting successful",
	"setting_key": "show_birthdays_in_calendar",
	"setting_value": true
}
```