---
title: Logs
---

# Log routes

## Log to server
Used to save a log to the database

**URL**: `/api/v1/system/logs`

**Method**: `POST`

**Auth required**: Yes

**Data constraints**
```json
{
    "type": "[required|string|min:1|max:190|in:INFO,WARNING,ERROR]",
    "message": "[required|string|min:1|max:65534]",
}
```

**Data example**
```json
{
    "type": "ERROR",
    "message": "Logged via API"
}
```

### Success response
**Condition**: Type is INFO, WARNING or ERROR

**Code**: `201`

**Content example**
```json
{
    "msg": "Log saved",
    "log": {
        "type": "ERROR",
        "message": "Logged via API",
        "user_id": 1,
        "updated_at": "2020-09-23T09:39:14.000000Z",
        "created_at": "2020-09-23T09:39:14.000000Z",
        "id": 83,
        "user_name": "Barack Obama"
    }
}
```