---
title: Voting
---

# Manage event voting

## Vote for decision in event
Used to vote for a decision in an event

**URL**: `/api/v1/avent/vote`

**Method**: `POST`

**Auth required**: Yes

**Feature required**: [EventFeature](./index.md#feature-disabled-response)

**Data constraints**
```json
{
    "decision_id": "[required|integer]",
    "event_id": "[required|integer]",
    "additional_information": "[nullable|string|max:128|min:1]"
}
```

**Data example**
```json
{
    "decision_id": 1,
    "event_id": 3,
    "additional_information": "I can only attend until 3pm."
}
```

### Success response
**Condition**: Decision and event exists

**Code**: `200`

**Content example**
```json
{
    "msg": "Voting saved",
    "user_decision": {
      "id": 22,
      "decision": "Ja",
      "event_id": 8,
      "show_in_calendar": 1,
      "color": "#008b02",
      "created_at": "2020-03-01T16:22:47.000000Z",
      "updated_at": "2020-03-31T13:24:57.000000Z",
      "additional_information": "I can only attend until 3pm."
    }
}
```

### Error response
#### Event not found
**Condition**: Event id was not found

**Code**: `404`

**Content example**
```json
{
    "msg": "Event not found",
    "error_code": "event_not_found"
}
```

#### Decision not found for this event
**Condition**: There isn't a decision with this id for the selected event

**Code**: `404`

**Content example**
```json
{
    "msg": "Decision not found for this event",
    "error_code": "decision_not_found_for_event"
}
```

#### User already voted for this event
**Condition**: The user has already voted for this event

**Code**: `400`

**Content example**
```json
{
    "msg": "User already voted for event",
    "error_code": "already_voted"
}
```

#### User is not allowed to vote for this event
**Condition**: The user is not in any group which is allowed to vote for this event

**Code**: `400`

**Content example**
```json
{
    "msg": "You are not allowed to vote for this event",
    "error_code": "not_allowed"
}
```

## Cancel voting for an event
Used to cancel a voting

**URL**: `/api/v1/avent/vote/{eventId}`

**Method**: `DELETE`

**Auth required**: Yes

**Feature required**: [EventFeature](./index.md#feature-disabled-response)

### Success response
**Condition**: Event exists and user has voted for this event

**Code**: `200`

**Content example**
```json
{
    "msg": "Decision for event removed successfully"
}
```

### Error response
#### Event not found
**Condition**: Event id was not found

**Code**: `404`

**Content example**
```json
{
    "msg": "Event not found",
    "error_code": "event_not_found"
}
```

#### User has not voted for this event
**Condition**: The user has not voted for the event

**Code**: `404`

**Content example**
```json
{
    "msg": "There is no voting for this event to remove",
    "error_code": "not_voted"
}
```
