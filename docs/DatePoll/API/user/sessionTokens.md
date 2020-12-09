---
title: Manage session / logout
---

# Manage sessions routes

## Get all sessions
Used to get all sessions

**URL**: `/api/v1/user/myself/session`

**Method**: `GET`

**Auth required**: Yes

### Success response
**Condition**: User is logged in.

**Code**: `200`

**Content example**
```json
{
    "msg": "List of all sessions",
    "sessions": [
        {
            "id": 153,
            "information": "Firefox - 69; OS: Linux; Phone: false",
            "last_used": "2019-09-25T17:36:36.000000Z",
            "delete_session": {
                "href": "api/v1/user/myself/session/153",
                "method": "DELETE"
            }
        },
        {
            "id": 169,
            "information": "Chrome - 77; OS: Linux; Phone: false",
            "last_used": "2019-10-21T15:42:47.000000Z",
            "delete_session": {
                "href": "api/v1/user/myself/session/169",
                "method": "DELETE"
            }
        }
    ]
}
```

## Delete session
Used to delete a session

**URL**: `/api/v1/user/myself/session/{id}`

**Method**: `DELETE`

**Auth required**: Yes

### Success response
**Condition**: Session id exists and belongs to your user.

**Code**: `200`

**Content example**
```json
{
    "msg": "Successfully deleted session"
}
```

### Error response
**Condition**: Token does not exist

**Code**: `404`

**Content example**
```json
{
    "msg": "Session token does not exist!",
    "error_code": "session_token_not_found"
}
```


## Logout session
Used to logout your current session

**URL**: `/api/v1/user/myself/session/logoutCurrentSession`

**Method**: `POST`

**Auth required**: Yes

**Data constraints**
```json
{
    "session_token": "[required]"
}
```

**Data example**
```json
{
    "session_token": "ajchjw83fcvnc93bfpvnso305"
}
```

### Success response
**Condition**: Session token exists and user is logged in

**Code**: `200`

**Content example**
```json
{
    "msg": "Successfully logged out and deleted session"
}
```

### Error response
**Condition**: Token is incorrect

**Code**: `404`

**Content example**
```json
{
    "msg": "Session token is incorrect",
    "error_code": "session_token_incorrect"
}
```
