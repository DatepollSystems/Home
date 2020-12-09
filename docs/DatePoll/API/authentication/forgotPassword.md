---
title: Forgot password
---

Used to reset a password for the user.

## Send forgot password email
**URL**: `/api/auth/forgotPassword/sendEmail`

**Method**: `POST`

**Auth required**: No

**Data constraints**
```json
{
    "username": "[required | min: 1 | max: 190]"
}
```

**Data example**
```json
{
    "username": "st.huber"
}
```

---
### Success response
**Condition**: Username exists and user has email adresses linked to his account.

**Code**: `200`

**Content example**
```json
{
    "msg": "Sent"
}
```

---
### Error response
#### Unknown username
**Condition**: User with this username does not exist

**Code**: `404`

**Content example**
```json
{
    "msg": "Unknown username",
    "error_code": "unknown_username"
}
```

---
#### No email address(es) linked to this account
**Condition**: User does not have email address(es) linked to his account.

**Code**: `400`

**Content example**
```json
{
    "msg": "There are no email addresses for this account",
    "error_code": "no_email_addresses"
}
```



## Check code
**URL**: `/api/auth/forgotPassword/checkCode`

**Method**: `POST`

**Auth required**: No

**Data constraints**
```json
{
    "username": "[required | min: 1 | max: 190]",
    "code": "[required | digits | max: 6]"
}
```

**Data example**
```json
{
    "username": "st.huber",
    "code": "482901"
}
```

---
### Success response
**Condition**: Code is correct, rate limit not exceeded, username exists

**Code**: `200`

**Content example**
```json
{
    "msg": "Code correct",
    "success_code": "code_correct"
}
```

---
### Error response
#### Incorrect code
**Condition**: Code is incorrect

**Code**: `400`

**Content example**
```json
{
    "msg": "The code is incorrect",
    "error_code": "code_incorrect"
}
```

---
#### Unknown username
**Condition**: User with this username does not exist

**Code**: `404`

**Content example**
```json
{
    "msg": "Unknown username",
    "error_code": "unknown_username"
}
```

---
#### Rate limit exceeded
**Condition**: After 12 tries the rate limit will be exceeded.

**Code**: `400`

**Content example**
```json
{
    "msg": "Rate limit exceeded",
    "error_code": "rate_limit_exceeded"
}
```
After exceeding the rate limit there has to be requested a new code via [this request](#send-forgot-password-email).

---
#### No password reset requested for this user
**Condition**: There was not requested a password reset for this account

**Code**: `400`

**Content example**
```json
{
    "msg": "There was no code for a password reset requested"
}
```



## Reset password
**URL**: `/api/auth/forgotPassword/resetPassword`

**Method**: `POST`

**Auth required**: No

**Data constraints**
```json
{
    "username": "[required | min: 1 | max: 190]",
    "code": "[required | digits | max: 6]",
    "new_password": "[required]"
}
```

**Data example**
```json
{
    "username": "st.huber",
    "code": "482901",
    "new_password": "NewPassword1234!"
}
```

---
### Success response
**Condition**: Code is correct, rate limit not exceeded, username exists

**Code**: `200`

**Content example**
```json
{
    "msg": "Changed password successful"
}
```

---
### Error response
#### Incorrect code
**Condition**: Code is incorrect

**Code**: `400`

**Content example**
```json
{
    "msg": "The code is incorrect",
    "error_code": "code_incorrect"
}
```

---
#### Unknown username
**Condition**: User with this username does not exist

**Code**: `404`

**Content example**
```json
{
    "msg": "Unknown username",
    "error_code": "unknown_username"
}
```

---
#### Rate limit exceeded
**Condition**: After 12 tries the rate limit will be exceeded.

**Code**: `400`

**Content example**
```json
{
    "msg": "Rate limit exceeded",
    "error_code": "rate_limit_exceeded"
}
```
After exceeding the rate limit there has to be requested a new code via [this request](#send-forgot-password-email).

---
#### No password reset requested for this user
**Condition**: There was not requested a password reset for this account

**Code**: `400`

**Content example**
```json
{
    "msg": "There was no code for a password reset requested"
}
```