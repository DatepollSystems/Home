---
title: Home
---

# Cinema routes

## Feature disabled response
Response when the cinema feature is disabled

**Code**: `503`

**Content example**
```json
{
    "msg": "The cinema feature is disabled on this DatePoll server",
    "error_code": "feature_disabled_cinema"
}
```

## Get not shown movies
Used to get currently not shown movies

**URL**: `/api/v1/cinema/notShownMovies`

**Method**: `GET`

**Auth required**: Yes

**Feature required**: [CinemaFeature](#feature-disabled-response)

### Success response
**Code**: `200`

**Content example**
```json
{
    "msg": "List of not shown movies",
    "movies": [
        {
            "id": 13,
            "name": "Bohemian Rapsody",
            "date": "2019-12-12",
            "trailer_link": "https://youtube.com",
            "poster_link": "https://picture.com/BohemianRhapsody.png",
            "booked_tickets": 0,
            "movie_year_id": 1,
            "created_at": "2019-08-05T13:03:39.000000Z",
            "updated_at": "2019-11-14T11:33:44.000000Z",
            "worker_id": 33,
            "worker_name": "Peter Smith",
            "emergency_worker_id": null,
            "emergency_worker_name": null,
            "booked_tickets_for_yourself": 0,
            "view_movie": {
                "href": "api/v1/cinema/administration/movie/13",
                "method": "GET"
            }
        },
        {
            "id": 3,
            "name": "Avatar",
            "date": "2019-12-13",
            "trailer_link": "https://youtube.com",
            "poster_link": "https://picture.com/cinemaposter/avatar.jpg",
            "booked_tickets": 0,
            "movie_year_id": 1,
            "created_at": "2019-02-05T20:31:44.000000Z",
            "updated_at": "2019-11-15T13:50:28.000000Z",
            "worker_id": 33,
            "worker_name": "Peter Smith",
            "emergency_worker_id": null,
            "emergency_worker_name": null,
            "booked_tickets_for_yourself": 0,
            "view_movie": {
                "href": "api/v1/cinema/administration/movie/3",
                "method": "GET"
            }
        },
        {
            "id": 4,
            "name": "Wolf of Wall Street",
            "date": "2019-12-14",
            "trailer_link": "https://youtube.com",
            "poster_link": "https://picture.com/wolfofwallstreet.jpg",
            "booked_tickets": 11,
            "movie_year_id": 1,
            "created_at": "2019-02-05T20:32:32.000000Z",
            "updated_at": "2019-11-15T13:50:38.000000Z",
            "worker_id": null,
            "worker_name": null,
            "emergency_worker_id": 33,
            "emergency_worker_name": "Peter Smith",
            "booked_tickets_for_yourself": 11,
            "view_movie": {
                "href": "api/v1/cinema/administration/movie/4",
                "method": "GET"
            }
        },
        {
            "id": 11,
            "name": "Inception",
            "date": "2019-12-15",
            "trailer_link": "https://youtube.com",
            "poster_link": "https://picture.com/inception.jpg",
            "booked_tickets": 0,
            "movie_year_id": 1,
            "created_at": "2019-07-14T19:10:30.000000Z",
            "updated_at": "2019-11-15T13:50:50.000000Z",
            "worker_id": null,
            "worker_name": null,
            "emergency_worker_id": null,
            "emergency_worker_name": null,
            "booked_tickets_for_yourself": 0,
            "view_movie": {
                "href": "api/v1/cinema/administration/movie/11",
                "method": "GET"
            }
        }
    ]
}
```