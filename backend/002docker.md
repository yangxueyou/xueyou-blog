## 1. 基础

### 1. 镜像和容器的区别

镜像：包含了os文件系统和应用的对象，类似虚拟机的模版，比如win10镜像，只读的

容器：比镜像多了一个写的操作

### 2. 基础命令

创建nginx容器:

> docker container run nginx  

查看容器列表:

> docker container ls

- CONTAINER ID: 唯一id

- IMAGE: 镜像名称

- COMMAND: 使用的命令
