https://hub.docker.com/

https://quay.io/

## 1. 容器

### 1. 镜像和容器的区别

镜像：包含了os文件系统和应用的对象，类似虚拟机的模版，比如win10镜像，只读的

容器：比镜像多了一个写的操作

### 2. 启动容器:

运行容器并把nginx镜像放到容器里面

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


删除所有**未运行**的容器

> docker system prune -f


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

### 1. 镜像的拉取和删除

拉取镜像: 

> docker pull wordpress


查看镜像列表:

> docker image ls


查看镜像详细信息:  镜像没有简写

> docker image inspect [ID] 


删除镜像

> docker image rm [ID1] [ID2] ... 


删除全部镜像: 不会删除使用中的

> docker image prune -a

### 2. 镜像的导入导出

导出:

> mkdir docker

> docker image ls

save 导出、 ubuntu:latest 名称:版本  -o 输出  myubutu.image 输出名称

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

### 2. 通过Dockerfile构建镜像

-t 后面是输出的 名称:版本 路径  . 是当前目录

如果名称后面没有版本，默认是最新版

> docker image build -t xueyou .

-f 是指定一个 Dockerfile 文件

> docker image build -f Dockerfile.test -t xueyou .

运行容器把 xueyou 放到容器里面 

> docker run xueyou

查看一下状态

> docker ps -a

发现状态是退出，这是因为我们写的脚本只是执行了一条命令，没有其它操作的原因


### 3. 把镜像分享到Dockerhub

查看一下本地的镜像

> docker image ls

`上传名称规则: 用户id/镜像名称  --  yangxueyoualibaba/xueyou.py`

修改名称: tag 修改名称、 就名称、 符合要求的新名称

> docker image tag xueyou.py yangxueyoualibaba/xueyou.py

查看一下是否修改

> docker image ls

上传之前需要登陆

> docker login

上传镜像

> docker image push yangxueyoualibaba/xueyou.py


### 4. Dockerfile语法详解

#### 1. FROM

引入ubuntu作为基础镜像

- 官方镜像优于非官方镜像

- 固定版本的tag，而不是每次都使用latest

- 功能满足，选择体积小的镜像

```
FROM ubuntu:latest
```

#### 2. RUN

可以接shell命令、下载文件、安装、配置环境等等

每一个RUN就会生成一个layer层，体积就会变大，**所以要进来减少RUN**

查看分层信息

> docker image history [ID]

坏的写法

```
FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y wget
RUN wget https://github.com/ipinfo/cli/releases/download/ipinfo-2.0.1/ipinfo_2.0.1_linux_amd64.tar.gz
RUN tar zxf ipinfo_2.0.1_linux_amd64.tar.gz
RUN mv ipinfo_2.0.1_linux_amd64 /usr/bin/ipinfo
RUN rm -rf ipinfo_2.0.1_linux_amd64.tar.gz
```

好的写法

```
FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-2.0.1/ipinfo_2.0.1_linux_amd64.tar.gz && \
    tar zxf ipinfo_2.0.1_linux_amd64.tar.gz && \
    mv ipinfo_2.0.1_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_2.0.1_linux_amd64.tar.gz
```


#### 3. 文件操作

COPY ADD 都可以把本地文件添加到镜像里面


==============COPY================

```
// Dockerfile.copy
FROM node:alpine3.14
COPY index.js /app/index.js
```

```
// index.js
const http = require('http');

const server = http.createServer();

server.listen(3000, () => {
    console.log('server is running');
})

server.on('request', (req, res) => {
    res.end('hello nodejs')
})
```

构建镜像

> docker image build -f Dockerfile.copy -t hello-copy .

进入镜像: 通过交互模式 -it 、-p 映射端口到8080（服务器里面是3000端口）、通过 shell 脚本操作

> docker run -it -p 8080:3000 hello-copy sh 

> cd /app/

> node index

==============ADD=================

```
// Dockerfile.add
FROM node:alpine3.14
ADD index.tar /app/
```

把上面的 index.js 打包成一个 tar 包放到镜像里面

> docker image build -f Dockerfile.add -t hello-gzip .

启动并进入到镜像中

> docker run -it -p 8080:8080 hello-gzip sh

============ 区别 ==============

进入到容器里面发现**压缩包被自动解压了** 这也是和COPY不同之处



#### 4. WORKDIR

`切换目录` ,有点像 cd 命令，先进入目录，然后在操作

```
```
// Dockerfile.workdir ， 可以和 Dockerfile.copy 对比一下
FROM node:alpine3.14
WORKDIR /app
ADD index.js index.js
```
```


#### 5. ARG  &&  ENV


ENV: 代码中2.0.1这个有好多，如果要修改就要一个一个改，这个时候使用ENV

`${VERSION}` 通过这个替换、这样就很容易的换版本了

`VERSION=2.0.1` ， 中间不要有空格，否则容易打包失败

================ ENV ==============

```
// Dockerfile.env
FROM ubuntu:latest
ENV VERSION=2.0.1
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-${VERSION}/ipinfo_${VERSION}_linux_amd64.tar.gz && \
    tar zxf ipinfo_${VERSION}_linux_amd64.tar.gz && \
    mv ipinfo_${VERSION}_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_${VERSION}_linux_amd64.tar.gz
```

打包

> docker image build -f Dockerfile.env -t ipinfo-env .

进入容器

> docker run -it ipinfo-env

然后输入

> env

发现环境变量里面多了 `VERSION=2.0.1`

============== ARG ==================

```
// Dockerfile.arg
FROM ubuntu:latest
ENV VERSION=2.0.1
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-${VERSION}/ipinfo_${VERSION}_linux_amd64.tar.gz && \
    tar zxf ipinfo_${VERSION}_linux_amd64.tar.gz && \
    mv ipinfo_${VERSION}_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_${VERSION}_linux_amd64.tar.gz
```

同样打包进入容器，发现没有多出环境变量，这个比ENV好

并且可以通过打包命令，动态改变 VERSION, 如下：

> docker image build -f Dockerfile.arg -t ipinfo-arg --build-arg VERSION=2.0.0 .


==================  区别  ========

env 的环境变量会带到环境变量中

arg 不会并可以打包的时候改变



#### 6. CMD

在容器中启动一个命令

当设置好基础环境、安装完软件、处理完文件之后、就需要某个命令来启动


- 容器启动时默认执行的命令：比如上面的 // Dockerfile.arg

查看分层信息：

> docker image history

可以看到默认的 CMD 命令

- 如果docker container run启动容器时指定了其它命令，则CMD命令会被忽略

下面的命令就会进入到 shell 命令里面了

> docker run -it Dockerfile.arg ipinfo version

- 如果定义多个CMD，只有最后一个CMD执行


**CMD里面要双引号，否则打包失败**

```
// Dockerfile.base
FROM ubuntu:latest
ENV VERSION=2.0.1
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/ipinfo/cli/releases/download/ipinfo-${VERSION}/ipinfo_${VERSION}_linux_amd64.tar.gz && \
    tar zxf ipinfo_${VERSION}_linux_amd64.tar.gz && \
    mv ipinfo_${VERSION}_linux_amd64 /usr/bin/ipinfo && \
    rm -rf ipinfo_${VERSION}_linux_amd64.tar.gz
CMD ["ipinfo","version"]
```

> docker image build -f Dockerfile.base -t ipinfo-base .

> docker run -it ipinfo-base

发现上面执行容器，不是进入shell界面了，是显示出信息了，这是因为自己的 CMD 覆盖掉了  默认的 CMD 命令了


#### 7. ENTRYPOINT  &&  CMD

ENTRYPOINT：也可以设置启动时要执行的命令

ENTRYPOINT 写的命令不会被覆盖掉的

--rm 容器结束的时候删除容器 -- 输出 hhh

> docker run --rm -t Dockerfile

如果下面Dockerfile里面是 ENTRYPOINT，是不会被覆盖掉，会一起输出 echo "hello-world"
hhh echo "hello-world" 把这个整体当作参数输出

如果下面Dockerfile里面是 CMD,只会输出 hello-world

> docker run --rm -t Dockerfile echo "hello-world"


========= 结合使用，估计是调试，没有实战===========

```
FROM ubuntu:21.04
ENTRYPOINT [ "echo"]
CMD []
```

这样我们通过下面的命令就可以输出 想要的东西

> docker run -rm -t Dockerfile echo "hello-world"

如果不写东西，是啥也不输出的


#### 8. VOLUME

`数据持久化`

在 /app 目录下的数据，进行本地保存

这个 /app 是容器里面的地址

```
FROM NGINX
VOLUME ["/app"]
```

> docker image build -t my-image .

> docker container run -d my-image

查看相关命令

> docker volume

查看持久化信息：Mountpoint下

> docker volume ls


给 volume 起一个别名，否则是很长的一串

-d 后台模式启动，mydata 别名，/app 是 Dockerfile 里面 volume 对应的地址（因为会有很对，必须对应上）

> docker run -d -v mydata:/app my-image

进入到容器造数据

> docker container exec -it [ID] sh

> cd /app && echo "1111" >> test.txt

查看是否有信息

> more test.text

========== 使用持久化数据 ==========

删除容器

> docker container ls

> docker container rm -f [id]

查看所有容器

> docker ps -a

创建容器

> docker container run -d -v mynewdata:/app my-image

查看volum

> docker volume ls

发现跟刚才一样的，数据会自动的导入进去



#### 9. BindMount

`数据持久化`

和 Volume 的区别是参数的编写结构不同

> docker container run -it -v ${pwd}:/app node