# How to start frontend developing

Step 1. Build container
```
docker build -t vk .
```
Step 2. Run container. It downloads required files and creates vkapp directory.
```
docker run -it -v `pwd`:/app vk
```
Step 3. Run server. Follow the link: http://127.0.0.1:10888
```
docker run -it -v `pwd`/vkapp:/app -p 10888:10888 vk npm start
```
