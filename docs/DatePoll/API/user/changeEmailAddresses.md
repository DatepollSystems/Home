---
title: Change email addresses
---

# Change email addresses routes

## Change email addresses
Used to change email addresses

**URL**: `/api/v1/user/myself/changeEmailAddresses`

**Method**: `POST`

**Auth required**: Yes

**Data constraints**
```json
{
	"email_addresses": [
		"[required | min: 1 | max: 190]",
	]
}
```

**Data example**
```json
{
	"email_addresses": [
		"contact@xyz.miau",
		"private@xyz.miau"
	]
}
```

### Success response
**Condition**: Email addresses are correct

**Code**: `200`

**Content example**
```json
    "msg": "All email addresses saved",
    "user": {
        "id": 33,
        "title": null,
        "firstname": "Stefan",
        "surname": "Huber",
        "username": "st.huber",
        "birthday": "1999-04-19",
        "join_date": "2019-06-15",
        "streetname": "Luckystreet",
        "streetnumber": "2",
        "zipcode": 1234,
        "location": "Vienna",
        "activated": 1,
        "activity": "active",
        "force_password_change": 0,
        "phone_numbers": [
            {
                "id": 103,
                "user_id": 33,
                "label": "Mobil",
                "number": "+4312345678",
                "created_at": "2019-06-15 15:51:24",
                "updated_at": "2019-06-15 15:51:24"
            }
        ],
        "email_addresses": [
            "contact@xyz.miau",
			"private@xyz.miau"
        ],
        "permissions": [
            "root.administration"
        ],
        "performance_badges": [
            {
                "id": 17,
                "performance_badge_id": 1,
                "instrument_id": 1,
                "grade": "excellent",
                "note": null,
                "date": "2019-06-05",
                "performance_badge_name": "Leistungsabzeichen 1. Bronze",
                "instrument_name": "Drums"
            }
        ]
    }
}
```