---
title: "Posts"
date: 2020-05-02T20:53:22+02:00
draft: true
---

<h1>My Blog posts:</h1>

{{ range .Pages }}
        <li>
            <a href="{{.Permalink}}">{{.Date.Format "2006-01-02"}} | {{.Title}}</a>
        </li>
{{ end }}