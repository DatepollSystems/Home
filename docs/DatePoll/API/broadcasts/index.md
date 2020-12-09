---
title: Home
---

# Broadcast routes

## Feature disabled response
Response when the event feature is disabled

**Code**: `503`

**Content example**
```json
{
    "msg": "The broadcast feature is disabled on this DatePoll server",
    "error_code": "feature_disabled_broadcasts"
}
```

## Get get all broadcasts
Used to get all broadcasts ordered by date

**URL**: `/api/v1/broadcast`

**Method**: `GET`

**Auth required**: Yes

**Feature required**: [BroadcastFeature](#feature-disabled-response)

### Success response
**Code**: `200`

**Content example**
```json
{
    "msg": "List of all broadcasts",
    "broadcasts": [
        {
            "id": 77,
            "subject": "Test Broadcast long",
            "body": "Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!Long message!\n",
            "writer_name": "Maxi Muster",
            "writer_user_id": 1,
            "for_everyone": 0,
            "created_at": "2020-07-27T12:41:49.000000Z",
            "updated_at": "2020-07-27T12:41:49.000000Z"
        },
        {
            "id": 76,
            "subject": "Test Draft 1",
            "body": "Das ist ein Test #1\n",
            "writer_name": "Maxi Muster",
            "writer_user_id": 1,
            "for_everyone": 0,
            "created_at": "2020-07-09T11:55:46.000000Z",
            "updated_at": "2020-07-09T11:55:46.000000Z"
        }
    ]
}
```

## Get single broadcast
Used to get a single broadcast with full body html

**URL**: `/api/v1/broadcast/{broadcastId}`

**Method**: `GET`

**Auth required**: Yes

**Feature required**: [BroadcastFeature](#feature-disabled-response)

### Success response
**Code**: `200`

#### Content example
```json
{
    "msg": "Information for broadcast",
    "broadcast": {
        "id": 77,
        "subject": "Test Broadcast long",
        "body": "Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!\n",
        "writer_name": "Maxi Muster",
        "writer_user_id": 1,
        "for_everyone": 0,
        "created_at": "2020-07-27T12:41:49.000000Z",
        "updated_at": "2020-07-27T12:41:49.000000Z",
        "bodyHTML": "<p><strong>Long Message!</strong>Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!Long Message!</p>"
    }
}
```

### Error response
#### Broadcast not found
**Condition**: Broadcast id was not found

**Code**: `404`

**Content example**
```json
{
    "msg": "Broadcast not found",
    "error_code": "not_found"
}
```

#### Insufficient permissions
**Condition**: User tries to access a broadcast which is not accessible for him

**Code**: `403`

**Content example**
```json
{
    "msg": "You are not allowed to view this broadcast",
    "error_code": "insufficient_permission"
}
```