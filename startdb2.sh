docker run -h db2server_ --name db2server --restart=always --detach --privileged=true -p 50000:50000 -p 55000:55000 --env-file .env_list store/ibmcorp/db2_developer_c:11.1.4.4-x86_64