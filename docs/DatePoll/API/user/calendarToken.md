---
title: Manage calendar token
---

# Manage calendar token routes

## Get calendar token
Used to get the calendar token

**URL**: `/api/v1/user/myself/token/calendar`

**Method**: `GET`

**Auth required**: Yes

### Success response
#### Token is already generated
**Condition**: Token is already generated

**Code**: `200`

**Content example**
```json
{
    "msg": "Token already generated",
    "token": "miaumiau"
}
```
---

#### Token is new generated
**Condition**: Token is newly generated

**Code**: `200`

**Content example**
```json
{
    "msg": "Token generated",
    "token": "miaumiau"
}
```
---

## Delete calendar token
Used to delete the calendar token

**URL**: `/api/v1/user/myself/token`

**Method**: `DELETE`

**Auth required**: Yes

### Success response
#### Token deleted
**Condition**: Token exists and is deleted successfully

**Code**: `200`

**Content example**
```json
{
    "msg": "Deleted token successfully"
}
```
---

#### There is no token to delete
**Condition**: Token does not exist

**Code**: `200`

**Content example**
```json
{
    "msg": "There is no token to delete"
}
```