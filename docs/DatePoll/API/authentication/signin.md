---
title: Signin
---

Used to get a JSON Web Token and perhaps a session token.

**URL**: `/api/auth/signin`

**Method**: `POST`

**Auth required**: No

**Data constraints**
```json
{
    "username": "[required | min: 1 | max: 190]",
    "password": "[required]",
    "session_information": "[min: 1 | max: 190]",
    "stay_logged_in": [boolean]
}
```

**Data example with stay logged in**
```json
{
    "username": "st.huber",
    "password": "Password1234!",
    "session_information": "Firefox: 69; Mobile: true;",
    "stay_logged_in": true
}
```

**Data example without stay logged in**
```json
{
    "username": "st.huber",
    "password": "Password1234!"
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
#### Change password
**Condition**: User account is activated, username and password are correct, password change is activated

**Code**: `400`

**Content example**
```json
{
    "msg": "You have to change your password",
    "error_code": "change_password"
}
```

The user has to change his password. More [here](./changePasswordAfterSignin.md).


---
### Error response
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
## Notes
A JSON Web Token is only for an hour valid. After expiring you can not use it anymore.