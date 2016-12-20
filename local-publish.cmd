mkdir packages

dotnet pack src/Storyteller --output packages --configuration Release --version-suffix %1
dotnet pack src/StorytellerRunner --output packages --configuration Release --version-suffix %1
dotnet pack src/dotnet-storyteller --output packages --configuration Release --version-suffix %1