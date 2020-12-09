---
title: Booking
---

# Manage movie bookings

## Book tickets for a movie
Used to book tickets for a specific movie

**URL**: `/api/v1/cinema/booking`

**Method**: `POST`

**Auth required**: Yes

**Feature required**: [CinemaFeature](./index.md#feature-disabled-response)

**Data constraints**
```json
{
    "movie_id": "[required|numeric]",
    "ticket_amount": "[required|numeric]"
}
```

**Data example**
```json
{
	"movie_id": 1,
	"ticket_amount": 10
}
```

### Success response
**Condition**: Movie exists and ticket amount is not above available tickets

**Code**: `200`

**Content example**
```json
{
    "msg": "Reservation successful",
    "movie_booking": {
        "id": 115,
        "user_id": 33,
        "movie_id": 13,
        "amount": 2,
        "created_at": "2019-11-15 14:19:22",
        "updated_at": "2019-11-15 14:19:43",
        "cancel_booking": {
            "href": "api/v1/cinema/booking/13",
            "method": "DELETE"
        }
    }
}
```

### Error response
#### Movie not found
**Condition**: Movie id was not found

**Code**: `404`

**Content example**
```json
{
    "msg": "Movie not found",
    "error_code": "movie_not_found"
}
```

#### Movie sold out
**Condition**: There are not enough available tickets for your booking

**Code**: `400`

**Content example**
```json
{
    "msg": "The movie is sold out",
    "error_code": "not_enough_available_tickets"
}
```

## Cancel reservation for a movie
Used to cancel a reservation

**URL**: `/api/v1/cinema/booking/{movieId}`

**Method**: `DELETE`

**Auth required**: Yes

**Feature required**: [CinemaFeature](./index.md#feature-disabled-response)

### Success response
**Condition**: Movie exists and ticket amount is not above available tickets

**Code**: `200`

**Content example**
```json
{
    "msg": "Booking successful removed"
}
```

### Error response
#### Movie not found
**Condition**: Movie id was not found

**Code**: `404`

**Content example**
```json
{
    "msg": "Movie not found",
    "error_code": "movie_not_found"
}
```