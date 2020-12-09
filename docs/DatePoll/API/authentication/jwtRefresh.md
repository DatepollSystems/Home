---
title: JSON Web Token Refresh
---

## Refresh JWT with session token
**URL**: `/api/auth/IamLoggedIn`

**Method**: `POST`

**Auth required**: No

**Data constraints**
```json
{
    "session_token": "[required]",
    "session_information": "[min: 1 | max: 190]"
}
```

**Data example**
```json
{
    "session_token": "tiKKXQWrmfkcT959L3dKkaRyaGX8ggMO1keBk2eflRYXU1eho9kBlG5bQZqOnAsS",
    "session_information": "Firefox: 69; Mobile: true;",
}
```

---
### Success response
**Condition**: Session token is valid.

**Code**: `202`

**Content example**
```json
{
    "msg": "Session token is good",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsdW1lbi1qd3QiLCJzdWIiOjMzLCJpYXQiOjE1NjkyNTY4MDIsImV4cCI6MTU2OTI2MDQwMn0.yJkDgViK04A3QQySQ7bqFmEGbZk9vsq2sLlb1qYzI4g"
}
```

---
### Error response
**Condition**: Session token is invalid or incorrect.

**Code**: `400`

**Content example**
```json
{
    "msg": "You have been logged out of this session or this session token is incorrect",
    "error_code": "session_token_incorrect"
}
```


---
## Notes
A JSON Web Token is only for an hour valid. After expiring you can not use it anymore.