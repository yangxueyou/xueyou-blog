## 1. 容器

### 1. 镜像和容器的区别

镜像：包含了os文件系统和应用的对象，类似虚拟机的模版，比如win10镜像，只读的

容器：比镜像多了一个写的操作

### 2. 启动容器:

如果本地没有获取官网拉取 docker run nginx

> docker container run nginx  

有简写 docker run ubuntu

> docker container run ubuntu  

### 3. 查看容器列表:

查看已经启动的  老版本: docker container ps  ==  docker ps

> docker container ls   

显示所有的镜像   老版本:  docker container ps -a   ==    docker ps -a 

> docker container ls -a    

- CONTAINER ID: 唯一id

- IMAGE: 镜像名称

- COMMAND: 使用的命令

- CREATED: 创建时间

- STATUS: 状态  -- up 代表已经启动

- PORTS: 端口和协议

- NAMES: 名称 docker 自己定义的名称

### 4. 停止容器

> docker container stop [CONTAINER ID]


### 5. 删除容器

强制删除运行中的容器 -f   有简写

> docker container rm [CONTAINER ID]

> docker rm [CONTAINER ID] -f           


### 6. 批量操作

查找所有运行的[CONTAINER ID]

> docker ps -q      

查找所有[CONTAINER ID]

> docker ps -aq     

批量停止: 

先运行$()里面的东西，再执行stop命令

> docker stop $(docker ps -q) 

批量删除: 

> docker rm $(docker ps -q)


### 7. 端口映射

`如果不做端口映射，是访问不到容器里面的`

前台运行模式: 访问的端口:容器里面的端口

> docker run -p 8080:80 nginx           

后台运行模式: 服务器上都是通过这个模式的，上面是调试的使用

> docker run -d -p 8080:80 nginx          

后台模式查看日志

实时查看日志

> docker logs -f        

查看已有日志

> docker logs          

把后台模式转换成前台模式:

> docker attach [CONTAINER ID]


### 8. 交互模式

直接进入交互模式 -- 这种退出之后、docker也会停止:  -it启动交互模式、sh通过shell脚本操作

> docker run -it ubuntu sh          

先启动、然后控制进入交换模式、这种退出不会中断docker:

> docker run -d -p 8080:80 nginx
> docker exec -it [CONTAINER ID] sh


## 2. 镜像 

https://hub.docker.com/

https://quay.io/

### 1. 镜像的拉取和删除

拉取镜像: 

> docker pull wordpress


查看镜像列表:

> docker image ls


查看镜像详细信息:  镜像没有简写

> docker image inspect [ID] 


删除镜像

> docker image rm [ID1] [ID2] ... 


### 2. 镜像的导入导出

导出:

> mkdir docker

> docker image ls

save 到处、 ubuntu:latest 名称:版本  -o 输出  myubutu.image 输出名称

> docker image save ubuntu:latest -o myubuntu.image         


导入:

> docker image load -i ./myubuntu.image 


## 3. Dockerfile

- 构建docker镜像的文件

- 包含了构建镜像所需的指令

- 有特定的语法

### 1. 创建Dockerfile文件

> echo 'print("Hello Docker")' >> xueyou.py

> touch Dockerfile

> vim Dockerfile

```
// 引入ubuntu系统
FROM ubuntu:latest   
// 安装python环境
RUN  apt-get update && \
         DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y python3.9 python3-pip python3.9-dev
// 把本地文件加入到镜像中
ADD xueyou.py /
// 执行
CMD ["python3","xueyou.py"]
```
