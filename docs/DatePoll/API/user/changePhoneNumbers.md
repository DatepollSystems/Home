---
title: Change phone numbers
---

# Change phone numbers routes

## Add phone number
Used to add a phone number

**URL**: `/api/v1/user/myself/phoneNumber`

**Method**: `POST`

**Auth required**: Yes

**Data constraints**
```json
{
    "label": "[required | min: 1 | max: 190]",
    "number": "[required | min: 1 | max: 190]"
}
```

**Data example**
```json
{
    "label": "Home",
    "number": "+43 666 123456789"
}
```

### Success response
**Condition**: Label and number is correct

**Code**: `200`

**Content example**
```json
{
    "msg": "Added phone number",
    "phone_number": {
        "label": "Home",
        "number": "+43 666 123456789",
        "user_id": 33,
        "updated_at": "2019-10-22 15:45:51",
        "created_at": "2019-10-22 15:45:51",
        "id": 140
    }
}
```
---

## Remove phone number
Used to remove a phone number

**URL**: `/api/v1/user/myself/phoneNumber/{id}`

**Method**: `DELETE`

**Auth required**: Yes

### Success response
**Condition**: Label and number is correct

**Code**: `200`

**Content example**
```json
{
    "msg": "Phone number deleted",
    "phone_number_add": {
        "href": "api/v1/user/myself/phoneNumber",
        "method": "POST",
        "params": "label, number"
    }
}
```

### Error response
#### Phone number not found
**Condition**: Tried to remove a phone number which does exist

**Code**: `404`

**Content example**
```json
{
    "msg": "Phone number not found",
    "error_code": "phone_number_not_found"
}
```
---
#### Phone number does not belong to your user
**Condition**: Tried to remove a phone number which does not belong to your user

**Code**: `400`

**Content example**
```json
{
    "msg": "Could not delete phone number because it does not belong to you!",
    "error_code": "phone_number_does_not_belong_to_you"
}
```