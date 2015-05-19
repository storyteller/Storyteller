copy src\ST\embed.js documentation\content /Y

copy client\public\stylesheets\storyteller.css /Y


src\ST\bin\debug\ST.exe run src/Samples --dump documentation\content\samples.specs.json
src\ST\bin\debug\ST.exe dump-usages st documentation\content\st.usage.xml



src\ST\bin\debug\ST.exe doc-run -v 3.0



