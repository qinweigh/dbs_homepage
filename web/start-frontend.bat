@echo off
set PORT=80

:parse_args
if "%~1"=="" goto :start
if "%~1"=="--port" (
    set PORT=%~2
    shift
    shift
    goto :parse_args
)
shift
goto :parse_args

:start
echo Starting frontend on port %PORT%...

rmdir /s /q node_modules

npm config set registry https://mirrors.tools.huawei.com/npm/

npm install

npm run dev -- --port %PORT%
