---
title: Movie worker
---

# Manage movie worker

## Get movie orders
Used to get reservations for the movies you applied as a worker or emergency worker

**URL**: `/api/v1/cinema/worker`

**Method**: `GET`

**Auth required**: Yes

**Feature required**: [CinemaFeature](./index.md#feature-disabled-response)

### Success response
**Code**: `200`

**Content example**
```json
{
    "msg": "Booked tickets for your movie service",
    "movies": [
        {
            "movie_name": "Bohemian Rapsody",
            "movie_id": 13,
            "date": "2019-11-16",
            "orders": []
        },
        {
            "movie_name": "Avatar",
            "movie_id": 3,
            "date": "2019-12-13",
            "orders": []
        },
        {
            "movie_name": "Wolf of Wall Street",
            "movie_id": 4,
            "date": "2019-12-14",
            "orders": [
                {
                    "user_name": "Peter Smith",
                    "user_id": 33,
                    "amount": 11
                }
            ]
        }
    ]
}
```

## Apply for movie worker
Used to apply for worker on a specific movie

**URL**: `/api/v1/cinema/worker/{movieId}`

**Method**: `POST`

**Auth required**: Yes

**Feature required**: [CinemaFeature](./index.md#feature-disabled-response)

### Success response
**Condition**: Movie exists, movie not shown already and there is not already another worker

**Code**: `200`

**Content example**
```json
{
    "msg": "Successfully applied for worker"
}
```

### Error response
#### Movie not found
**Condition**: Movie was not found

**Code**: `404`

**Content example**
```json
{
    "msg": "Movie not found",
    "error_code": "movie_not_found"
}
```

#### Worker already applied
**Condition**: There is already a worker for this movie

**Code**: `400`

**Content example**
```json
{
    "msg": "There applied a worker already for this movie",
    "error_code": "worker_already_applied"
}
```

#### Movie already shown
**Condition**: Movie was already shown

**Code**: `400`

**Content example**
```json
{
    "msg": "Movie already showed",
    "error_code": "movie_already_shown"
}
```

---

## Sign out for worker
Used to apply for worker on a specific movie

**URL**: `/api/v1/cinema/worker/{movieId}`

**Method**: `DELETE`

**Auth required**: Yes

**Feature required**: [CinemaFeature](./index.md#feature-disabled-response)

### Success response
**Condition**: Movie exists, movie not shown already and you are the worker

**Code**: `200`

**Content example**
```json
{
    "msg": "Successfully signed out for worker"
}
```

### Error response
#### Movie not found
**Condition**: Movie was not found

**Code**: `404`

**Content example**
```json
{
    "msg": "Movie not found",
    "error_code": "movie_not_found"
}
```

#### No worker found for this movie
**Condition**: There is no worker for this movie

**Code**: `400`

**Content example**
```json
{
    "msg": "No worker found for this movie",
    "error_code": "no_worker_found_for_movie"
}
```

#### You are not the worker for this movie
**Condition**: You are not the worker for this movie

**Code**: `400`

**Content example**
```json
{
    "msg": "You are not the worker for this movie",
    "error_code": "not_the_worker_for_movie"
}
```

#### Movie already shown
**Condition**: Movie was already shown

**Code**: `400`

**Content example**
```json
{
    "msg": "Movie already showed",
    "error_code": "movie_already_shown"
}
```

---

## Apply for movie emergency worker
Used to apply for worker on a specific movie

**URL**: `/api/v1/cinema/emergencyWorker/{movieId}`

**Method**: `POST`

**Auth required**: Yes

**Feature required**: [CinemaFeature](./index.md#feature-disabled-response)

### Success response
**Condition**: Movie exists, movie not shown already and there is not already another emergency worker

**Code**: `200`

**Content example**
```json
{
    "msg": "Successfully applied for emergency worker"
}
```

### Error response
#### Movie not found
**Condition**: Movie was not found

**Code**: `404`

**Content example**
```json
{
    "msg": "Movie not found",
    "error_code": "movie_not_found"
}
```

#### Worker already applied
**Condition**: There is already a worker for this movie

**Code**: `400`

**Content example**
```json
{
    "msg": "There applied a emergency worker already for this movie",
    "error_code": "worker_already_applied"
}
```

#### Movie already shown
**Condition**: Movie was already shown

**Code**: `400`

**Content example**
```json
{
    "msg": "Movie already showed",
    "error_code": "movie_already_shown"
}
```

---


## Sign out for emergency worker
Used to apply for worker on a specific movie

**URL**: `/api/v1/cinema/emergencyWorker/{movieId}`

**Method**: `DELETE`

**Auth required**: Yes

**Feature required**: [CinemaFeature](./index.md#feature-disabled-response)

### Success response
**Condition**: Movie exists, movie not shown already and you are the emergency worker

**Code**: `200`

**Content example**
```json
{
    "msg": "Successfully signed out for emergency worker"
}
```

### Error response
#### Movie not found
**Condition**: Movie was not found

**Code**: `404`

**Content example**
```json
{
    "msg": "Movie not found",
    "error_code": "movie_not_found"
}
```

#### No worker found for this movie
**Condition**: There is no emergency worker for this movie

**Code**: `400`

**Content example**
```json
{
    "msg": "No emergency worker found for this movie",
    "error_code": "no_worker_found_for_movie"
}
```

#### You are not the worker for this movie
**Condition**: You are not the emergency worker for this movie

**Code**: `400`

**Content example**
```json
{
    "msg": "You are not the emergency worker for this movie",
    "error_code": "not_the_worker_for_movie"
}
```

#### Movie already shown
**Condition**: Movie was already shown

**Code**: `400`

**Content example**
```json
{
    "msg": "Movie already showed",
    "error_code": "movie_already_shown"
}
```