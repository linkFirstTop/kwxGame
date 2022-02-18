@echo off
SET TargetDir=%1
ECHO TargetDir=%TargetDir%

ECHO Copy full package
xcopy /y /e /i /q bin-release\web\publishwork %TargetDir%\Full\

ECHO Copy minimum package
xcopy /y /e /i /q bin-release\web\publishwork %TargetDir%\Minimum\

ECHO Delete config files
del %TargetDir%\Minimum\resource\config\config.json

ECHO Delete index files
del %TargetDir%\Minimum\index.html

ECHO Delete resource folder in Minimum
rd /s /q %TargetDir%\Minimum\resource\config



pause