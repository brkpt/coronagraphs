@echo off
PUSHD clientui
call ng build 
POPD 
DEL /Q public/*.*
COPY clientui\dist\clientui\*.* public
call sbt dist
echo put runsite | sftp -i %HOMEDRIVE%%HOMEPATH%\.ssh\May2020.pem ubuntu@www.coronagraphs.online
PUSHD target\universal
echo put coronagraphs-1.0-SNAPSHOT.zip | sftp -i %HOMEDRIVE%%HOMEPATH%\.ssh\May2020.pem ubuntu@www.coronagraphs.online
POPD
