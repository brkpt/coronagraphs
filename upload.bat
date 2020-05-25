@echo off
echo put runsite | sftp -i %HOMEDRIVE%%HOMEPATH%\.ssh\May2020.pem ubuntu@%*
PUSHD target\universal
echo put coronagraphs-1.0-SNAPSHOT.zip | sftp -i %HOMEDRIVE%%HOMEPATH%\.ssh\May2020.pem ubuntu@%*
POPD
