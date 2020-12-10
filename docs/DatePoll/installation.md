---
title: Installation
---

:::warning
While it is possible to use your operating system or webserver of choice, this installation guide uses [Debian](https://www.debian.org/) and [nginx](http://nginx.org/).
:::


## Requirements
[nginx](http://nginx.org/) 
```
sudo apt install nginx
```
[Let's Encrypt](https://letsencrypt.org/)

:::info
You can also use your own certificates! If you choose to, skip the next part!
:::

```
sudo apt install certbot
```

---
### Setting up your certificate
1.  First shutdown nginx with `sudo systemctl stop nginx`.
1.  Now execute this command `sudo certbot certonly --standalone --preferred-challenges http -d datepoll.server.com --pre-hook="systemctl stop nginx" --post-hook="systemctl start nginx"` **Please change the datepoll.server.com domain to your own needs**
---

Docker Compose
```
sudo apt install docker-compose
```
[Docker](https://docs.docker.com/install/linux/docker-ce/debian/)

## Setting up the nginx reverse proxy
1.  First go into your sites-enabled folder. `cd /etc/nginx/sites-enabled/`
1.  Next create a new configuration file. `sudo nano datepoll`
```
server {
  listen 80;
  # Change domain
  server_name datepoll.server.com;
  # Change domain
  return 301 https://datepoll.server.com$request_uri;
}

# Enable SSL session caching for improved performance
# http://nginx.org/en/docs/http/ngx_http_ssl_module.html#ssl_session_cache
# When a client connects it first establishes or resumes a session, which is what the ssl_session_cache is used for, thats the 
# reason it has to be outside of the server scope!
ssl_session_timeout 24h;
ssl_session_cache shared:SSL:50m;
ssl_session_tickets off;

server {
  listen 443 ssl http2;
  # Change domain
  server_name datepoll.server.com;

  ssl on;
  # Change domain
  ssl_certificate /etc/letsencrypt/live/datepoll.server.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/datepoll.server.com/privkey.pem;
  ssl_protocols TLSv1.2 TLSv1.3;

  # Using the recommended cipher suite from: https://wiki.mozilla.org/Security/Server_Side_TLS
ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK';

  # Specifies a curve for ECDHE ciphers.
  ssl_ecdh_curve prime256v1;
  # Server should determine the ciphers, not the client
  ssl_prefer_server_ciphers on;

  # OCSP Stapling
  ssl_stapling on;
  ssl_stapling_verify on;
  ssl_trusted_certificate /etc/letsencrypt/live/datepoll.server.com/fullchain.pem;
  resolver 9.9.9.9;

  # Gzip compression
  gzip on;
  gzip_vary on;
  gzip_comp_level 4;
  gzip_min_length 256;
  gzip_proxied expired no-cache no-store private no_last_modified no_etag auth;
  gzip_types application/atom+xml application/javascript application/json application/ld+json application/manifest+json application/rss+xml application/vnd.geo+json application/vnd.ms-fontobject application/x-font-ttf application/x-web-app-manifest+json application/xhtml+xml application/xml font/opentype image/bmp image/svg+xml image/x-icon text/cache-manifest text/css text/plain text/vcard text/vnd.rim.location.xloc text/vtt text/x-component text/x-cross-domain-policy;

  location / {
      proxy_pass http://127.0.0.1:9110/;
      proxy_set_header Host $http_host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
  }

  error_page 502 = @maintenance;

  location @maintenance {
    # Change path to your local DatePoll-Dockerized install
    root /path/to/docker/maintance;

    try_files $uri /index.html =502;
  }
}

server {
  listen 9230;
  # Change domain
  server_name datepoll.server.com;
 
  ssl on;
  # Change domain
  ssl_certificate /etc/letsencrypt/live/datepoll.server.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/datepoll.server.com/privkey.pem;
  ssl_protocols TLSv1.2 TLSv1.3;
  
  # Using the recommended cipher suite from: https://wiki.mozilla.org/Security/Server_Side_TLS
ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK';

  # Specifies a curve for ECDHE ciphers.
  ssl_ecdh_curve prime256v1;
  # Server should determine the ciphers, not the client
  ssl_prefer_server_ciphers on;
 
  # OCSP Stapling
  ssl_stapling on;
  ssl_stapling_verify on;
  ssl_trusted_certificate /etc/letsencrypt/live/datepoll.server.com/fullchain.pem;
  resolver 9.9.9.9;
 
  add_header X-Frame-Options "SAMEORIGIN";
  add_header X-XSS-Protection "1; mode=block";
  add_header X-Content-Type-Options "nosniff";

  # Gzip compression
  gzip on;
  gzip_vary on;
  gzip_comp_level 4;
  gzip_min_length 256;
  gzip_proxied expired no-cache no-store private no_last_modified no_etag auth;
  gzip_types application/atom+xml application/javascript application/json application/ld+json application/manifest+json application/rss+xml application/vnd.geo+json application/vnd.ms-fontobject application/x-font-ttf application/x-web-app-manifest+json application/xhtml+xml application/xml font/opentype image/bmp image/svg+xml image/x-icon text/cache-manifest text/css text/plain text/vcard text/vnd.rim.location.xloc text/vtt text/x-component text/x-cross-domain-policy;

  location / {
      proxy_pass http://127.0.0.1:9130/;
      proxy_set_header Host $http_host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
  }
}


```
Now reload your nginx server. `sudo nginx -s reload`

## Setting up the application
1.  Go into a directory of your choise
1.  Clone the latest master branch into this folder. `git clone https://gitlab.com/DatePoll/datepoll-dockerized.git DatePoll`
1.  Set all permissions to 777.  `sudo chmod -R 777 DatePoll/`
1.  Go into the DatePoll folder. `cd ./DatePoll`
1.  Make all scripts executeable `chmod +x ./scripts/*`
1.  Install the frontend (Please make sure you stay in the root directory of the project) `./scripts/frontend.sh`
1.  Install the backend `./scripts/installBackend.sh`

:::info
During the backend installation you should choose to add an admin user (for the first login and to configure DatePoll further).

The username and password will be printed to the terminal.
:::

## Verification
Visit your domain `https://datepoll.server.com` and you should see the login page! 

:::note First steps
After logging in with your newly created admin user head to the DatePoll configuration, there you can configure features, welcome messages, the imprint and many more settings.

Take a look [here](./imprint_and_privacy_policy_example.md) for an imprint and a privacy policy example text.
:::
