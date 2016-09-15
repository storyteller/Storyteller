npm install
npm run build-client
npm run test

dotnet restore
dotnet test src/Storyteller.Testing
dotnet test src/StorytellerDocGen.Testing
