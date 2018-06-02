
server {

        root /var/www/schalk.net/html;
        index index.html index.htm index.nginx-debian.html;

        server_name schalk.net www.schalk.net;

        location / {
                try_files $uri $uri/ =404;
        }

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/schalk.net/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/schalk.net/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    ssl on;

    location ~ /.well-known {
        root /var/www/<lets-encrypt-wellknown-directory-root>/;
    }

    location /websockets/<app-name> {
        proxy_pass http://127.0.0.1:<port-number>/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
    }
}

server {
    listen 80;
    server_name yourdomain.tld www.yourdomain.tld;
    return 301 https://$host$request_uri;
}
