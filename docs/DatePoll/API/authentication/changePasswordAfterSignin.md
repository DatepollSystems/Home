---
title: Change password after / with signin
---

When the user has to change his password before he can signin.

**URL**: `/api/auth/changePasswordAfterSignin`

**Method**: `POST`

**Auth required**: No

**Data constraints**
```json
{
    "username": "[required | min: 1 | max: 190]",
    "old_password": "[required]",
    "new_password": "[required]",
    "session_information": "[min: 1 | max: 190]",
    "stay_logged_in": [boolean]
}
```

**Data example with stay logged in**
```json
{
    "username": "st.huber",
    "old_password": "Password1234!",
    "new_password": "SaverPassword1234!",
    "session_information": "Firefox: 69; Mobile: true;",
    "stay_logged_in": true
}
```

**Data example without stay logged in**
```json
{
    "username": "st.huber",
    "old_password": "Password1234!",
    "new_password": "SaverPassword1234!",
}
```


---
### Success response
**Condition**: Username and password is correct and account is activated.

**Code**: `200`

**Content example with stay logged in**
```json
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsdW1lbi1qd3QiLCJzdWIiOjMzLCJpYXQiOjE1NjkyNTQ0MzcsImV4cCI6MTU2OTI1ODAzN30.8fCp9Jdgbz8BotM6bW_OuRLb4Zl36YcKS9eo8pbVbwQ",
    "session_token": "2XRq1yubqq53A347PcWLRVlOj1rArsvx5u4keovU1T20FG51vXyVzNU73K1RDBhh"
}
```

**Content example without stay logged in**
```json
{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsdW1lbi1qd3QiLCJzdWIiOjMzLCJpYXQiOjE1NjkyNTQ0MzcsImV4cCI6MTU2OTI1ODAzN30.8fCp9Jdgbz8BotM6bW_OuRLb4Zl36YcKS9eo8pbVbwQ"
}
```


---
### Warning response
#### Account not activated
**Condition**: User account is not activated.

**Code**: `400`

**Content example**
```json
{
    "msg": "Account is not activated",
    "error_code": "not_activated"
}
```

The user has to wait until his account is activated by an administrator.


---
### Error response
#### Username or password is wrong
**Condition**: Username or password is wrong.

**Code**: `400`

**Content example**
```json
{
    "msg": "Username or password is wrong",
    "error_code": "username_or_password_incorrect"
}
```

---
#### User does not need to change his password
**Condition**: User tries to change his password after signin but does not need to.

**Code**: `400`

**Content example**
```json
{
    "msg": "User does not need to change his password",
    "error_code": "no_password_change_needed_for_user"
}
```

---
### Notes
A JSON Web Token is only for an hour valid. After expiring you can not use it anymore.