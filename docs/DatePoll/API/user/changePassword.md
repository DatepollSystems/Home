---
title: Change password
---

# Change password routes

## Check old password
Used to check the password before changing it

**URL**: `/api/v1/user/myself/changePassword/checkOldPassword`

**Method**: `POST`

**Auth required**: Yes

**Data constraints**
```json
{
    "password": "[required]"
}
```

**Data example**
```json
{
    "password": "123456789"
}
```

### Success response
**Condition**: Password is correct.

**Code**: `200`

**Content example**
```json
{
    "msg": "Password correct"
}
```

### Error response
**Condition**: Password is wrong.

**Code**: `400`

**Content example**
```json
{
    "msg": "Password incorrect",
    "error_code": "password_incorrect"
}
```
---

## Change password
Used to change the password

**URL**: `/api/v1/user/myself/changePassword/changePassword`

**Method**: `POST`

**Auth required**: Yes

**Data constraints**
```json
{
    "old_password": "[required]",
    "new_password": "[required]"
}
```

**Data example**
```json
{
	"old_password": "123456789",
	"new_password": "123456798"
}
```

### Success response
**Condition**: Password is correct.

**Code**: `200`

**Content example**
```json
{
    "msg": "Password changed"
}
```

### Error response
**Condition**: Password is wrong.

**Code**: `400`

**Content example**
```json
{
    "msg": "Password incorrect",
    "error_code": "password_incorrect"
}
```