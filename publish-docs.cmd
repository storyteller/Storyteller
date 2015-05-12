copy src\ST\embed.js documentation\content /Y

copy client\public\stylesheets\storyteller.css /Y


src\ST\bin\debug\ST.exe run src/Samples --dump documentation\content\samples.specs.json


src\ST\bin\debug\ST.exe doc-export C:\storyteller-website Website


c:

cd \storyteller-website


git add --all


git commit -a -m "Documentation Update"


git push origin master 
